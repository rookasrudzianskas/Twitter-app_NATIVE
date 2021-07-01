import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
        marginHorizontal: 10,
    },
    tweetHeaderContainer: {
        flexDirection: "column",
        justifyContent: "space-between",
    },
    something: {
        flexDirection: "row",
        marginBottom: 3,
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
        lineHeight: 18,
        marginTop: 5,
    },
    image: {
        marginVertical: 10,
        width: '100%',
        height: 200,
        resizeMode: "cover",
        borderRadius: 15,
        overflow: "hidden",
    }
});

export default styles;
