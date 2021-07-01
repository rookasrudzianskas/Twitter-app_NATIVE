import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from "./style";

const NewTweetButton = () => {
    return (
        <TouchableOpacity style={styles.}>
            <MaterialCommunityIcons name="feather" size={24} color="white" />
        </TouchableOpacity>
    )
}

export default NewTweetButton;
