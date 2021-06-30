import React from 'react';
import {View, Text} from "react-native";
import MainContainer from "./MainContainer";
import LeftContainer from "./LeftContainer";
export type TweetProps = {

}

const Tweet = (props: TweetProps) => {
    <View>
    {/*    Left  Container */}
        <LeftContainer />


    {/*    Main  Container */}
        <MainContainer />
    </View>
}

export default Tweet;
