import {StyleSheet} from "react-native";
import {primaryColor, secondaryColor} from "./constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primaryColor
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        color: secondaryColor
    },
    text: {
        textAlign: 'center',
        color: secondaryColor
    },
    status: {
        backgroundColor: primaryColor,
    }
});
