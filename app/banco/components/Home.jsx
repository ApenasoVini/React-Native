import { useState } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

export default function Home() {

    const [saldo, setSaldo] = useState(7320.92)

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../../assets/santander.png')}
            />
            <View style={styles.info}>
                <Text style={styles.title}>saldo atual da conta</Text>
                <Text style={styles.value}>R$ {saldo}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',

    },
    logo: {
        transform: [{ scale: 0.4 }],
    },
    info: {
        alignItems: 'center',
    },
    title: {
        color: '#a3a3a3',
        textTransform: 'uppercase',
    },
    value: {
        color: '#000',
        letterSpacing: 2,
        fontSize: 50,
        fontWeight: 'bold'
    }
})