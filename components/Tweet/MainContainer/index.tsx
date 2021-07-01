import React from 'react';
import {View, Text, Image} from "react-native";
import {TweetType} from "../../../types";
import styles from "./styles";
import {Ionicons} from "@expo/vector-icons";
import Footer from "./Footer";
import moment from "moment";

export type MainContainerProps = {
    tweet: TweetType
}

const MainContainer = ({tweet}: MainContainerProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.tweetHeaderContainer}>
                <View style={styles.tweetHeaderNames}>
                    <Text style={styles.name}>{tweet.user.name}</Text>
                    <Text style={styles.username}>@{tweet.user.username}</Text>
                </View>
                <View style={styles.something}>
                    <Text style={styles.createdAt}>{moment(tweet.createdAt).fromNow()}</Text>
                    <Ionicons name="chevron-down" />
                </View>
            </View>
            <View>
                <Text style={styles.content}>{tweet.content}</Text>
                {!!tweet.image && <Image style={styles.image} source={{uri: tweet.image}} />}
                <Footer tweet={tweet} />

            </View>
        </View>
    )
}

export default MainContainer;
