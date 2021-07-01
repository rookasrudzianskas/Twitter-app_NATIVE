import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        // flex: 1,
        // backgroundColor: "orange",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 5,
    },
    iconContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    content: {
        marginTop: 10,
    },
    number: {
        marginLeft: 5,
        color: "grey",
        textAlign: "center",
    },

});

export default styles;
