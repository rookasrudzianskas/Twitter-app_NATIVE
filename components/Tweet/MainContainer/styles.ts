import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    tweetHeaderContainer: {
      flexDirection: "row",
    },

    name: {
      marginHorizontal: 3,
        fontWeight: "bold",
    },
    username: {
     marginHorizontal: 3,
        color: "grey",
    },
    createdAt: {
     marginHorizontal: 3,
        color: "grey",
    },
});

export default styles;
