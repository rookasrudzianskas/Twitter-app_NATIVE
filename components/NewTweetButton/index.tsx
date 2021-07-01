import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const NewTweetButton = () => {
    return (
        <TouchableOpacity>
            <MaterialCommunityIcons name="feather" size={24} color="black" />
        </TouchableOpacity>
    )
}

export default NewTweetButton;
