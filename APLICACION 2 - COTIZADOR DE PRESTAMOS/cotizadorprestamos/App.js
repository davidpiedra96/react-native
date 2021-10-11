import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, Button } from 'react-native';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import Result from './src/components/Result';
import colors from './src/utils/colors';

export default function App() {
    const [capital,setCapital] = useState(null);
    const [interes, setInteres] = useState(null);
    const [month, setMonth] = useState(null);
    const [total, setTotal] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        calcular();
    }, [capital,interes,month]);

    

    const calcular = () => {
        reset();
        if (capital && interes && month) {
            const i = interes / 100;
            const cuota = capital / (1 - Math.pow(i + 1, -month))/i;
            const total = cuota * month;
            setTotal({
                cuota: cuota.toFixed(2).replace('.',','),
                total: total.toFixed(2).replace('.',',')
            });
        } else {
            setError('Por favor llene todos los campos');
        }
    };

    const reset = () => {
        setError('');
        setTotal(null);
    }

    return ( 
        <>
            <StatusBar barStyle='light-content'/>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.background}></View>
                <Text style={styles.titleApp}>Cotizador de prestamos</Text> 
                <Form
                    setCapital={setCapital}
                    setInteres={setInteres}
                    setMonth={setMonth}
                ></Form>
            </SafeAreaView>
            <Result
                capital={capital}
                interes={interes}
                month={month}
                total={total}
                error={error}
            ></Result>
            <Footer calcular={calcular}></Footer>
        </>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        height: 290,
        
        alignItems: 'center'
    },
    titleApp: {
        fontSize:25,
        fontWeight:'bold',
        color: '#fff',
        marginTop: 15,
    },
    background: {
        backgroundColor: colors.PRIMARY_COLOR,
        height: 200,
        width: '100%',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        position: 'absolute',
        zIndex: -1
    }


});