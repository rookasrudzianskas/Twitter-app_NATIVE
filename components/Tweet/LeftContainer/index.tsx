import React from 'react';
import {View, Text} from "react-native";
import {UserType} from "../../../types";
import ProfilePicture from "../../ProfilePicture";

export type LeftContainerProps = {
    user: UserType,
}

const LeftContainer = ({user}: LeftContainerProps) => {
    return (
    <View>
        <ProfilePicture  image={user.image} />

    </View>
    )
}

export default LeftContainer;
