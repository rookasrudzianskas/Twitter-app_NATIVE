import * as React from 'react';
import {Platform, StyleSheet} from 'react-native';
import Tweet from "../components/Tweet";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import tweets from "../data/tweets";
import Feed from "../components/Feed";
import NewTweetButton from "../components/NewTweetButton";
import {EvilIcons, AntDesign} from "@expo/vector-icons";
import Colors from "../constants/Colors";
import ProfilePicture from "../components/ProfilePicture";
import {useEffect, useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {API, Auth, graphqlOperation} from "aws-amplify";
import {createTweet} from "../graphql/mutations";
import * as ImagePicker from 'expo-image-picker';
import { Button, Image } from 'react-native';


import * as Permissions from "expo-permissions";

export default function NewTweetScreen() {

    const [tweet, setTweet] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const navigation = useNavigation();

    const getPermissionAsync = async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    };

    useEffect(() => {
        getPermissionAsync();
    }, []);


    const pickImage = async () => {
        try{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.cancelled) {
            setImageUrl(result.uri);
        }

        console.log(result);
        } catch(e) {
            console.log(e);
        }
    };

    //CONNECTED TO THE AWS
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
            navigation.goBack();
        } catch (e) {
            console.log("ERROR", e);
        }
    }


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
                <TouchableOpacity onPress={pickImage}>
                    <Text style={styles.pickImage}>Select the image</Text>
                </TouchableOpacity>
                <Image style={styles.image} source={{uri: imageUrl}} />
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

    },
    pickImage: {
        color: Colors.light.tint,
        fontSize: 18,
        marginVertical: 10,
    },

    image: {
        width: 150,
        height: 150,

    }

})

