import React, {useReducer} from 'react';
import {  View, Text, StatusBar} from 'react-native';
import {initialState, reducer, SET_HAND, SET_LANG, SET_MODAL_CLOSE} from './reducer';
import {dict} from "./intl";
import {LangSwitcher} from "./components/LangSwitcher";
import {HandList} from "./components/HandList";
import {Modal} from "./components/Modal";
import {styles} from './styles';

export default function App() {
    const [state, setState] = useReducer(reducer, initialState);
    const {lang, hands, hand} = state;

    const {title, text} = dict[lang];

    const handleLangChange = (payload) => {
        setState({
            type: SET_LANG,
            payload
        })
    }

    const handleHandChange = (payload) => {
        setState({
            type: SET_HAND,
            payload
        })
    }

    const handleModalClose = () => {
        setState({
            type: SET_MODAL_CLOSE
        })
    }

    return(
        <View style={styles.container}>
            <StatusBar {...styles.status}/>
            <LangSwitcher onPress={handleLangChange} lang={lang}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{text}</Text>
            <HandList items={hands} onPress={handleHandChange}/>
            <Modal content={hand} onClose={handleModalClose}/>
        </View>
    )
};
