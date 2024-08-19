import Home from './components/Home';
// import Operacoes from './components/Operacoes';
import { View, StyleSheet } from 'react-native';

export default function App() {

    return (
        <View style={styles.main}>
            <Home />
            {/* <Operacoes /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        gap: 5
    }
});