import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from "./style";
import {useNavigation} from "@react-navigation/native";

const NewTweetButton = () => {

    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate('NewTweet');
    }

    return (
        <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8} >
            <MaterialCommunityIcons name="feather" size={24} color="white" />
        </TouchableOpacity>
    )
}

export default NewTweetButton;
