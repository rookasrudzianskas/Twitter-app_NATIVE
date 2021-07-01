import * as React from 'react';
import { StyleSheet } from 'react-native';
import Tweet from "../components/Tweet";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import tweets from "../data/tweets";
import Feed from "../components/Feed";
import NewTweetButton from "../components/NewTweetButton";
import {EvilIcons, AntDesign} from "@expo/vector-icons";
import Colors from "../constants/Colors";
import ProfilePicture from "../components/ProfilePicture";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {API, Auth, graphqlOperation} from "aws-amplify";
import {createTweet} from "../graphql/mutations";

export default function NewTweetScreen() {

    const [tweet, setTweet] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const onPostTweet = async () => {
        console.log("on post tweet");
        // we go forward

        try {

            const currentUser = await Auth.currentAuthenticatedUser({ bypassCache: true });

            const newTweet = {
                content: tweet,
                image: imageUrl,
                userID: currentUser.attributes.sub,
            }
            await API.graphql(graphqlOperation(createTweet, {input: newTweet}));
        } catch (e) {
            console.log("ERROR", e);
        }
    }

    const navigation = useNavigation();

    const closeModal = () => {
        navigation.navigate('HomeScreen');
    }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
            <AntDesign name="close" size={30} color={Colors.light.tint} onPress={closeModal} />
          <TouchableOpacity style={styles.button} onPress={onPostTweet}>
            <Text style={styles.buttonText}>Tweet</Text>
          </TouchableOpacity>
      </View>
        <View style={styles.newTweetContainer}>
            <ProfilePicture image={'https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg'} />
            <View style={styles.inputsContainer}>
                <TextInput value={tweet} onChangeText={(text) => setTweet(text)} multiline={true} numberOfLines={3} placeholder="What's happening?" style={styles.tweetInput} />
                <TextInput value={imageUrl} onChangeText={(text) => setImageUrl(text)} placeholder="Image url (optional)" style={styles.imageInput} />
            </View>

        </View>
    </SafeAreaView>
  //    front end is done
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: "white",
    },
    headerContainer: {
      flexDirection: 'row',
        justifyContent: "space-between",
        width: "100%",
        padding: 15,
    },
    button: {
        backgroundColor: Colors.light.tint,
        borderRadius: 30,

    },
    buttonText: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      color: "white",
      fontWeight: "bold",
        fontSize: 16,
    },
    newTweetContainer: {
        flexDirection: "row",
        padding: 15,
        alignContent: 'center',
    },
    inputsContainer: {
        marginLeft: 10,

    },
    tweetInput: {
        maxHeight: 300,
        height: 100,
        width: "100%",
        fontSize: 20,

    },
    imageInput: {

    }

})

