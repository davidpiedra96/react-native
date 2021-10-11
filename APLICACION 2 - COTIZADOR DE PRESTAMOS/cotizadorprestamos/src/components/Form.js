import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, TextInput } from 'react-native';
import colors from '../utils/colors';

export default function Form(props) {
    const {setCapital, setInteres, setMonth} = props;
    return(
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput 
                    keyboardType = 'numeric'
                    placeholder = "Cantidad a pedir"
                    style= {styles.input}
                    onChange={(e) => setCapital(e.nativeEvent.text)}
                    />
                <TextInput 
                    keyboardType = 'numeric'
                    placeholder = "Interes %"
                    style= {[styles.input, styles.inputPercentage]}
                    onChange={(e) => setInteres(e.nativeEvent.text)}
                    />
            </View>
            <View style={styles.viewInputs}>
                <TextInput 
                    keyboardType = 'numeric'
                    placeholder = 'Meses'
                    style= {[styles.input, styles.inputMonth]}
                    onChange={(e) => setMonth(e.nativeEvent.text)}
                    />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewForm: {
        position: 'absolute',
        bottom: 0,
        width: '85%',
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: 'center'
    },
    viewInputs: {
        flexDirection: 'row',
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: '60%',
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: '#000',
        paddingHorizontal: 20,
    },
    inputPercentage: {
        width: "40%",
        marginLeft: 5,

    },
    inputMonth: {
        width: "100%"
    }
});