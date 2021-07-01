import React from 'react';
import {View, Text} from "react-native";
import {TweetType} from "../../../types";

export type MainContainerProps = {
    tweet: TweetType
}

const MainContainer = ({tweet}: MainContainerProps) => {
    return (
        <View>
            <View>
                <Text>{tweet.user.name}</Text>
                <Text>{tweet.user.username}</Text>
                <Text>{tweet.createdAt}</Text>
            </View>
            <Text>Hello World 🚀</Text>
            {/*    Profile picture */}

        </View>
    )
}

export default MainContainer;
