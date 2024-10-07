import { useState, useRef } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
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
                <TouchableOpacity style={styles.button} onPress={pedirPermissao}>
                    <Text style={styles.buttonText}>Pedir permissão</Text>
                </TouchableOpacity>
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
                        <TouchableOpacity style={styles.button} onPress={() => setFoto(null)}>
                            <Image
                                style={styles.img}
                                source={require('../../assets/deletePhoto.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={salvarFoto}>
                            <Image
                                style={styles.img}
                                source={require('../../assets/savePhoto.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <CameraView style={styles.camera} facing={lado} ref={cameraRef}>
                    <View style={styles.buttonsOne}>
                        <TouchableOpacity style={styles.button} onPress={tirarFoto}>
                            <Image
                                style={styles.img}
                                source={require('../../assets/takePhoto.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={inverterLado}>
                            <Image
                                style={styles.img}
                                source={require('../../assets/switchSide.png')}
                            />
                        </TouchableOpacity>
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
        backgroundColor: "#000",
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
        alignItems: "flex-end",
        justifyContent: "center",
        flexDirection: 'row',
        marginBottom: 20,
    },
    buttonsTwo: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 20,
    },
    button: {
        margin: 10
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
    },
    image: {
        flex: 1,
    },
});
