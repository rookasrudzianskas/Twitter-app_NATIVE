import React from 'react';
import {View, Text, Image} from "react-native";
import {TweetType} from "../../../types";
import styles from "./styles";

export type MainContainerProps = {
    tweet: TweetType
}

const MainContainer = ({tweet}: MainContainerProps) => {
    return (
        <View>
            <View style={styles.tweetHeaderContainer}>
                <Text>{tweet.user.name}</Text>
                <Text>{tweet.user.username}</Text>
                <Text>{tweet.createdAt}</Text>
            </View>
            <View>
                <Text>{tweet.content}</Text>
                {!tweet.image && <Image source={{uri: tweet.image}} />}
            </View>
        </View>
    )
}

export default MainContainer;
