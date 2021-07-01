import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from "./style";

const NewTweetButton = () => {

    const onPress = () => {
        console.log("This works out");
    }

    return (
        <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8} >
            <MaterialCommunityIcons name="feather" size={24} color="white" />
        </TouchableOpacity>
    )
}

export default NewTweetButton;
