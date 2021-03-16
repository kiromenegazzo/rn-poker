import {StyleSheet} from "react-native";
import {primaryColor, secondaryColor} from "../../constants/colors";

export const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: primaryColor,
    },
    inner: {
        flex: 1,
        padding: 20,
    },
    content: {
        flex: 1,
        borderWidth: 2,
        borderColor: secondaryColor,
        borderRadius: 8
    },
    close: {
        position: 'absolute',
        top: 10,
        right: 10
    },
    name: {
        position: 'absolute',
        top: 100,
        width: '100%',
        textAlign: 'center',
        fontSize: 50,
        color: secondaryColor
    },
    description: {
        position: 'absolute',
        bottom: 100,
        width: '100%',
        textAlign: 'center',
        fontSize: 20,
        color: secondaryColor
    }
});
