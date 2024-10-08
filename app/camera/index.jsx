import { useState, useRef } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, Linking } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as MediaLibrary from 'expo-media-library';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Camera() {
    const [permissaoCamera, pedirPermissaoCamera] = useCameraPermissions();
    const [foto, setFoto] = useState(null);
    const [lado, setLado] = useState('back');
    const [modoScanner, setModoScanner] = useState(false);
    const cameraRef = useRef(null);
    const [scanned, setScanned] = useState(false);

    if (!permissaoCamera) {
        return (
            <View style={styles.container}>
                <Text>Carregando...</Text>
            </View>
        );
    }

    if (!permissaoCamera.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.alert}>Você precisa da permissão para utilizar a câmera</Text>
                <TouchableOpacity style={styles.buttonPermission} onPress={pedirPermissaoCamera}>
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

    const escanearQrCode = async ({ type, data }) => {
        setScanned(true);
        await Linking.openURL(data);
        setScanned(false);
    };

    const alternarModoScanner = () => {
        setModoScanner(!modoScanner);
        setScanned(false);
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
                <View style={styles.container}>
                    {modoScanner ? (
                        <View style={styles.camera}>
                            <BarCodeScanner
                                onBarCodeScanned={scanned ? undefined : escanearQrCode}
                                style={StyleSheet.absoluteFillObject}
                            />
                            <TouchableOpacity style={styles.button} onPress={alternarModoScanner}>
                                <Image
                                    style={styles.img}
                                    source={require('../../assets/cameraMode.png')}
                                />
                            </TouchableOpacity>
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
                                <TouchableOpacity style={styles.button} onPress={alternarModoScanner}>
                                    <Image
                                        style={styles.img}
                                        source={require('../../assets/qrCodeMode.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </CameraView>
                    )}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#CCC",
    },
    alert: {
        color: "#ff0000",
        textAlign: "center",
        fontSize: 16,
    },
    camera: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonsOne: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'flex-end',
        marginBottom: 20,
    },
    buttonsTwo: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 20,
    },
    buttonPermission: {
        backgroundColor: '#272925',
        marginTop: 10,
        alignSelf: 'center',
        width: 200,
        height: 40,
        justifyContent: 'center',
        borderRadius: 5,
    },
    button: {
        margin: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
    },
    image: {
        borderRadius: 10,
        width: 375,
        height: 375,
        alignSelf: 'center'
    },
    img: {
        width: 60,
        height: 60,
    },
});
