import React from 'react';
import {View, Text, Image} from "react-native";
import {TweetType} from "../../../types";
import styles from "./styles";
import {Ionicons} from "@expo/vector-icons";

export type MainContainerProps = {
    tweet: TweetType
}

const MainContainer = ({tweet}: MainContainerProps) => {
    return (
        <View>
            <View style={styles.tweetHeaderContainer}>
                <Text style={styles.name}>{tweet.user.name}</Text>
                <Text style={styles.username}>@{tweet.user.username}</Text>
                <Text style={styles.createdAt}>15s.</Text>
                <Ionicons name="chevron-down" />
            </View>
            <View>
                <Text>{tweet.content}</Text>
                {!tweet.image && <Image source={{uri: tweet.image}} />}
            </View>
        </View>
    )
}

export default MainContainer;
