import React from 'react';
import {View, Text, Image} from "react-native";
import {TweetType} from "../../../../types";
import styles from "./styles";
import {Ionicons} from "@expo/vector-icons";

export type MainContainerProps = {
    tweet: TweetType
}

const Footer = ({tweet}: MainContainerProps) => {
    return (
            <View style={styles.container}>
                <Text style={styles.content}>Content</Text>
                {!tweet.image && <Image source={{uri: tweet.image}} />}
            </View>
    )
}

export default Footer;
