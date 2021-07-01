import React from 'react';
import {View, Text, Image} from "react-native";
import {TweetType} from "../../../../types";
import styles from "./styles";
import {Ionicons, Feather, EvilIcons, AntDesign} from "@expo/vector-icons";

export type MainContainerProps = {
    tweet: TweetType
}

const Footer = ({tweet}: MainContainerProps) => {
    return (
            <View style={styles.container}>
                <View>
                    <Feather name="message-circle" size={20} color="gray" />
                    <Text style={styles.number}>{tweet.numberOfComments}</Text>
                </View>

                <View>
                    <EvilIcons name="retweet" size={20} color="gray" />
                    <Text style={styles.number}>{tweet.numberOfRetweets}</Text>
                </View>

                <View>
                    <AntDesign name="hearto" size={20} color="gray" />
                    <Text style={styles.number}>{tweet.numberOfLikes}</Text>
                </View>

                <View>
                    <EvilIcons name="share-google" size={20} color="gray" />
                    <Text style={styles.number}>{tweet.numberOfLikes}</Text>
                </View>
            </View>
    )
}

export default Footer;
