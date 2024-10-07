import { useState } from "react";
import { Button, Image, View, StyleSheet } from "react-native";
import * as ImagePicker from 'expo-image-picker';

export default function PickerGaleria() {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri); 
        }
    };

    return (
        <View style={styles.container}>
            <Button title="Selecionar uma imagem da Galeria" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={styles.img} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        width: 200,
        height: 200,
        marginTop: 20,
    },
});
