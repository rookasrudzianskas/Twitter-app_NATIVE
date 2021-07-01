import React from 'react';
import {View, Text, Image, TouchableOpacity} from "react-native";
import {TweetType} from "../../../../types";
import styles from "./styles";
import {Ionicons, Feather, EvilIcons, AntDesign} from "@expo/vector-icons";
import {API, graphqlOperation} from "aws-amplify";
import {createLike} from "../../../../graphql/mutations";

export type MainContainerProps = {
    tweet: TweetType
}

const Footer = ({tweet}: MainContainerProps) => {

    const onLike = () => {
        console.log("LIKE PRESSED")
    }
    return (
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <Feather name="message-circle" size={20} color="gray" />
                    <Text style={styles.number}>{tweet.numberOfComments}</Text>
                </View>

                <View style={styles.iconContainer}>
                    <EvilIcons name="retweet" size={28} color="gray" />
                    <Text style={styles.number}>{tweet.numberOfRetweets}</Text>
                </View>

                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={(e) => onLike}>
                        <AntDesign name="hearto" size={20} color="gray" />
                        <Text style={styles.number}>{tweet.numberOfLikes}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.iconContainer}>
                    <EvilIcons name="share-google" size={26} color="gray" />
                </View>
            </View>
    )
}

export default Footer;
