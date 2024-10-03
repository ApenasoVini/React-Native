import { useState, useRef } from "react";
import { View, StyleSheet, Text, Button, Image } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { FullWindowOverlay } from "react-native-screens";

export default function Camera() {
    const [permissao, pedirPermissao] = useCameraPermissions()
    const [foto, setFoto] = useState(null)
    const cameraRef = useRef(null)

    if (!permissao) {
        return (
            <View style={styles.container}>
                <Text>Carregando...</Text>
            </View>
        )
    }

    if (!permissao.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.alert}>Você precisa da permissão para utilizar a câmera</Text>
                <Button
                    title="Pedir permissão"
                    onPress={pedirPermissao}
                />
            </View>
        )
    }

    const tirarFoto = async () => {
        const foto = await cameraRef.current?.takePictureAsync({
            quality: 0.005,
            base64: true,
        })
        setFoto(foto)
    }

    return (
        <CameraView style={styles.camera} facing={'back'} ref={cameraRef}>
            <View style={styles.button}>
                <Button
                    title="Tirar foto"
                    onPress={tirarFoto}
                />
            </View>
        </CameraView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    alert: {
        color: '#ff0000',
        textAlign: 'center'
    },
    camera: {
        flex: 1
    },
    button: {
        position: 'absolute'
    }
})