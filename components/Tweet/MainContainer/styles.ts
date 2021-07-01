import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
        marginHorizontal: 10,
    },
    tweetHeaderContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    tweetHeaderNames: {
      flexDirection: "row",
    },
    name: {
      marginRight: 3,
        fontWeight: "bold",
    },
    username: {
     marginRight: 3,
        color: "grey",
    },
    createdAt: {
     marginRight: 3,
        color: "grey",
    },
    content: {
        lineHeight: 19,
    }
});

export default styles;
