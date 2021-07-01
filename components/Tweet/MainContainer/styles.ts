import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    tweetHeaderContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "orange",
    },
    tweetHeaderNames: {
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
    moreIcon: {

    }
});

export default styles;
