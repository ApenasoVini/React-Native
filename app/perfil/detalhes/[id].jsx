import { View, Image, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Header from "../components/header";

const Detalhes = () => {
    const { data } = useLocalSearchParams();
    const json = data ? JSON.parse(data) : {};

    return (
        <View style={styles.container}>
            <Header link='../' />
            <View style={styles.item}>
                {json.img && <Image source={json.img} style={styles.img} />}
                <Text style={styles.title}>{json.title}</Text>
                <Text style={styles.description}>{json.description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        alignItems: 'center',
        padding: 16
    },
    img: {
        width: 200,
        height: 200,
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 8,
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 4,
    }
});

export default Detalhes;