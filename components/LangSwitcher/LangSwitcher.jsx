import React from 'react';
import {EN, RU} from "../../intl";
import { View, Switch, Text} from 'react-native';
import {styles} from "./styles";
import {primaryColor, secondaryColor} from "../../constants/colors";

export const LangSwitcher = ({lang, onPress}) => {

    return(
        <View style={styles.switch}>
            <Text style={styles.text}>{RU}</Text>
            <Switch
                trackColor={{ false: "red", true: secondaryColor }}
                thumbColor={lang === RU ? "red" : primaryColor}
                onValueChange={() => onPress(lang === RU ? EN : RU)}
                value={lang === EN}
            />
            <Text style={styles.text}>{EN}</Text>
        </View>
    );
}

