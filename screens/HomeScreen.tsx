import * as React from 'react';
import { StyleSheet } from 'react-native';
import Tweet from "../components/Tweet";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import tweets from "../data/tweets";
import Feed from "../components/Feed";
import NewTweetButton from "../components/NewTweetButton";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Feed/>
      <NewTweetButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
