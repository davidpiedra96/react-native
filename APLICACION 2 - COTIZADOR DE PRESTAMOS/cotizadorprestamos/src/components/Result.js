import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import colors from '../utils/colors';

export default function Result(props) {

    const { capital, interes, month, total, error } = props;

    return (
        <View style={styles.content}>
            {total && (
                <View style={styles.boxResult}>
                    <Text style={styles.title}>RESUMEN</Text>
                    <DataResult
                        titulo='Cantidad solicitada:'
                        valor={`${capital} COP`}></DataResult>
                    <DataResult
                        titulo='Interes ingresado:'
                        valor={`${interes} %`}></DataResult>
                    <DataResult
                        titulo='Meses ingresados:'
                        valor={month}></DataResult>
                    <DataResult
                        titulo='Cuota mensual:'
                        valor={`${total.cuota} COP`}></DataResult>    
                    <DataResult
                        titulo='Total a pagar::'
                        valor={`${total.total} COP`}></DataResult>   
                </View>
            )}
            <View>
                <Text style={styles.error}>{error}</Text>
            </View>
        </View>
    );
}

function DataResult(props) {
    const { titulo, valor } = props;
    return (
        <View style={styles.value}>
            <Text>{titulo}</Text>
            <Text>{valor}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    error: {
        textAlign: 'center',
        color: '#f00',
        fontWeight: 'bold',
        fontSize: 20
    },
    content: {
        marginHorizontal: 40
    },
    boxResult: {
        padding: 30,
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 30
    },
    value: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,

    }
});