import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from "react-native";
import {TweetType} from "../../../../types";
import styles from "./styles";
import {Ionicons, Feather, EvilIcons, AntDesign} from "@expo/vector-icons";
import {API, graphqlOperation, Auth} from "aws-amplify";
import {createLike, deleteLike} from "../../../../graphql/mutations";

export type MainContainerProps = {
    tweet: TweetType
}

const Footer = ({tweet}: MainContainerProps) => {

    const [user, setUser] = useState(null);
    const [myLike, setMyLike] = useState(null);
    // @ts-ignore
    const [likesCount, setLikesCount] = useState(tweet.likes.items.length);


    useEffect(() => {
        const fetchUser = async () => {
            const currentUser = await  Auth.currentAuthenticatedUser({ bypassCache: true });
            setUser(currentUser);

            // @ts-ignore
            // we search if the post is liked and we make it liked again
            const searchedLike = tweet.likes.items.find((like) => like.userID === currentUser.attributes.sub);

            setMyLike(searchedLike);
        }

        fetchUser();
    }, []);

    const submitLike = async () => {
        const like = {
            // @ts-ignore
            userID: user.attributes.sub,
            tweetID: tweet.id,
        }
        try {
            const res = await API.graphql(graphqlOperation(createLike, {input: like}));
            // @ts-ignore
            setMyLike(res.data.createLike);
            setLikesCount(likesCount + 1);

        } catch (e) {
            console.log(e);
        }
    }

    const removeLike = async () => {
        try {
            // @ts-ignore
            await API.graphql(graphqlOperation(deleteLike, {input: {id: myLike.id}}));
            setLikesCount( likesCount - 1);
            setMyLike(null);
        } catch (e) {
            console.log(e);
        }
    }

    const onLike = async () => {
        console.log("ON LIKE")

        if(!user) {
            return;
        }

        if(!myLike) {
            await submitLike();
        } else {
           await removeLike();
        }

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
                    <TouchableOpacity onPress={onLike}>
                        <AntDesign name={!myLike ? "hearto" : 'heart'} size={20} color={!myLike ? "gray" : "red"} />
                        <Text style={styles.number}>{likesCount}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.iconContainer}>
                    {/* new */}
                    <EvilIcons name="share-google" size={26} color="gray" />
                </View>
            </View>
    )
}

export default Footer;
