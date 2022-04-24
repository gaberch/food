import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import {rgbaColor} from "react-native-reanimated/src/reanimated2/Colors";
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                placeholder={"Search"}
                style={styles.inputStyle}
                value={term}
                onChangeText={onTermChange}
                autoCapitalize="none"
                autoCorrect={false}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: rgbaColor(220, 220 ,220),
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        color: 'black',
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;
