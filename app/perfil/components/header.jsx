import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import { Link } from 'expo-router'

const Header = (props) => {
    return (
        <View style={styles.container}>
            <Link href={props.link}>
                <Pressable style={styles.button}>
                    <Image
                        style={styles.img}
                        source={require('../assets/home.png')}
                    />
                    <Text style={styles.text}>{props.nome}</Text>
                </Pressable>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#5275ff',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        marginBottom: 25
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    img: {
        marginRight: 5,
        width: 25,
        height: 25
    },
    text: {
        color: '#fff'
    },
});

export default Header;