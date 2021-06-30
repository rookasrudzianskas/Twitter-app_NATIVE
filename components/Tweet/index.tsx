import React from 'react';
import {View, Text} from "react-native";
import LeftContainer from "./LeftContainer";
import MainContainer from "./MainContainer";

export type TweetProps = {

}

const Tweet = (props: TweetProps) => (
    <View>
        <LeftContainer />
        <MainContainer />
    </View>
)

export default Tweet;
