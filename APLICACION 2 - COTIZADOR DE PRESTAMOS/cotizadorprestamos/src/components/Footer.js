import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import colors from '../utils/colors';

export default function Footer(props) {

    const {calcular} = props;

    return(
        <View style={styles.viewFooter}>
            <TouchableOpacity style={styles.button} onPress={calcular}>
                <Text style={styles.text}>CALCULAR</Text>
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    viewFooter: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: colors.PRIMARY_COLOR,
        height: 100,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
    },
    button: {
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        padding: 16,
        borderRadius: 20,
        width: "75%"
    }
});