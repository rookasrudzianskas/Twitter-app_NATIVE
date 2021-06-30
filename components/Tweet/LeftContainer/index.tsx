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
    {/*    Profile picture */}
        <ProfilePicture  image={user.image} />

    </View>
    )
}

export default LeftContainer;
