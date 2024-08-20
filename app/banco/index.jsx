import React, { useState } from 'react';
import Home from './components/Home';
import Operacoes from './components/Operacoes';
import { View, StyleSheet } from 'react-native';

export default function App() {
    const [saldo, setSaldo] = useState(7320.92);

    const sacar = (valor) => {
        if (valor <= 0) {
            alert('O valor do saque deve ser maior que zero.');
            return;
        }

        if (valor > saldo) {
            alert('Saldo insuficiente.');
            return;
        }

        const nSaldo = saldo - valor;
        const multa = nSaldo * 0.025;
        setSaldo(nSaldo - multa);
    };

    const depositar = (valor) => {
        if (valor <= 0) {
            alert('O valor do depósito deve ser maior que zero.');
            return;
        }

        const bonus = valor * 0.01; 
        setSaldo(saldo + valor + bonus);
    };

    return (
        <View style={styles.main}>
            <Home saldo={saldo} />
            <Operacoes saque={sacar} deposito={depositar} />
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        gap: 5,
        padding: 16,
    },
});
