import { Pressable, View, Text, StyleSheet } from "react-native"

const Buttons = (props) => {

    return (
        <View style={styles.row}>
            <Pressable style={[props.styleOne, styles.pressable]} onPress={props.funcOne}>
                <Text style={styles.text}>{props.textOne}</Text>
            </Pressable>

            <Pressable style={[props.styleTwo, styles.pressable]} onPress={props.funcTwo}>
                <Text style={styles.text}>{props.textTwo}</Text>
            </Pressable>

            <Pressable style={[props.styleThree, styles.pressable]} onPress={props.funcThree}>
                <Text style={styles.text}>{props.textThree}</Text>
            </Pressable>

            <Pressable style={[props.styleFour, styles.pressable]} onPress={props.funcFour}>
                <Text style={styles.text}>{props.textFour}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        gap: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pressable: {
        width: 35,
        height: 35,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center,',
        color: 'black',
    },
    text: {
        fontSize: 'large',
        fontWeight: '500',
        textAlign: 'center',
    },
})

export default Buttons