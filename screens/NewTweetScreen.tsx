import * as React from 'react';
import { StyleSheet } from 'react-native';
import Tweet from "../components/Tweet";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import tweets from "../data/tweets";
import Feed from "../components/Feed";
import NewTweetButton from "../components/NewTweetButton";
import {EvilIcons, AntDesign} from "@expo/vector-icons";
import Colors from "../constants/Colors";

export default function NewTweetScreen() {
  return (
    <View>
      <View>
            <EvilIcons name="close" size={30} color={Colors.light.tint} />
      </View>
    </View>
  );
}

