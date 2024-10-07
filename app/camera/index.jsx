import { useState, useRef } from "react";
import { View, StyleSheet, Text, Button, Image } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera"; // Mantendo a importação do CameraView
import * as MediaLibrary from 'expo-media-library';

export default function Camera() {
    const [permissao, pedirPermissao] = useCameraPermissions();
    const [foto, setFoto] = useState(null);
    const [lado, setLado] = useState('back');
    const cameraRef = useRef(null);

    if (!permissao) {
        return (
            <View style={styles.container}>
                <Text>Carregando...</Text>
            </View>
        );
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
        );
    }

    const tirarFoto = async () => {
        const foto = await cameraRef.current?.takePictureAsync({
            quality: 0.5,
            base64: true,
        });
        setFoto(foto);
    };

    const inverterLado = () => {
        setLado(lado === 'back' ? 'front' : 'back');
    };

    const salvarFoto = async () => {
        await MediaLibrary.saveToLibraryAsync(foto.uri);
        setFoto(null);
    };

    return (
        <View style={styles.container}>
            {foto ? (
                <View style={styles.container}>
                    <Image style={styles.image} source={{ uri: foto.uri }} />
                    <View style={styles.buttonsTwo}>
                        <Button title="Deletar foto" onPress={() => setFoto(null)} />
                        <Button title="Salvar foto" onPress={salvarFoto} />
                    </View>
                </View>
            ) : (
                <CameraView style={styles.camera} facing={lado} ref={cameraRef}>
                    <View style={styles.buttonsOne}>
                        <Button title="Tirar foto" onPress={tirarFoto} />
                        <Button title="Trocar lado" onPress={inverterLado} />
                    </View>
                </CameraView>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    alert: {
        color: "#ff0000",
        textAlign: "center",
    },
    camera: {
        flex: 1,
    },
    buttonsOne: {
        flex: 1,
        justifyContent: "flex-end",
    },
    buttonsTwo: {
    
        justifyContent: "flex-end",
    },
    image: {
        flex: 1,
    },
});
