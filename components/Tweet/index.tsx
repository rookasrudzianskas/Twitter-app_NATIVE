import React from 'react';
import {View, Text} from "react-native";
import LeftContainer from "./LeftContainer";
import MainContainer from "./MainContainer";
import {TweetType} from "../../types";


export type TweetProps = {
    tweet: TweetType,
}

const Tweet = ({tweet}: TweetProps) => (
    <View>
        <LeftContainer user={tweet.user} />
        <MainContainer tweet={tweet} />
    </View>
)

export default Tweet;
