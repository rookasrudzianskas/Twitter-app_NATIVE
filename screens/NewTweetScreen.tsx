import * as React from 'react';
import { StyleSheet } from 'react-native';
import Tweet from "../components/Tweet";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import tweets from "../data/tweets";
import Feed from "../components/Feed";
import NewTweetButton from "../components/NewTweetButton";
import {EvilIcons, AntDesign} from "@expo/vector-icons";
import Colors from "../constants/Colors";
import ProfilePicture from "../components/ProfilePicture";

export default function NewTweetScreen() {

    const onPostTweet = () => {
        console.log("on post tweet");
    }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
            <AntDesign name="close" size={30} color={Colors.light.tint} />
          <TouchableOpacity style={styles.button} onPress={onPostTweet}>
            <Text style={styles.buttonText}>Tweet</Text>
          </TouchableOpacity>
      </View>
        <View>
            <ProfilePicture image={'https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg'} />
        </View>
    </SafeAreaView>
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

})

