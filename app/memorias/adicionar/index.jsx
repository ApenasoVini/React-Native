import { Image, Text, TextInput, View, StyleSheet, Pressable } from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router';
import Header from '../components/header'
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default Adicionar = () => {
    const [imagem, setImagem] = useState(null)
    const [titulo, setTitulo] = useState('')
    const [ano, setAno] = useState('')
    const [local, setLocal] = useState('')
    const [descricao, setDescricao] = useState('')
    const router = useRouter();

    const selecionarImagem = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImagem(result.assets[0].uri);
        }
    };

    const salvar = async () => {
        try {
            let data = await AsyncStorage.getItem('memorias')
            if (data !== null) {
                let json = JSON.parse(data)
                json.push({
                    imagem: imagem,
                    titulo: titulo,
                    ano: ano,
                    local: local,
                    descricao: descricao,
                })
                await AsyncStorage.setItem('memorias', JSON.stringify(json))
            }
            else {
                let data = JSON.stringify([{
                    imagem: imagem,
                    titulo: titulo,
                    ano: ano,
                    local: local,
                    descricao: descricao,
                }])
                await AsyncStorage.setItem('memorias', data)
            }
            router.push('../memorias');
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} onChangeText={setTitulo} placeholder='Título' />
                <TextInput style={styles.input} onChangeText={setAno} placeholder='Quando aconteceu? (ano)' />
                <TextInput style={styles.input} onChangeText={setLocal} placeholder='Onde aconteceu? (cidade)' />
                <TextInput style={styles.input} onChangeText={setDescricao} placeholder='Conte sobre sua memória' multiline />
                <View style={styles.imagePickerContainer}>
                    <Pressable style={styles.button} onPress={selecionarImagem}>
                        <Text style={styles.buttonText}>Selecionar uma imagem da Galeria</Text>
                    </Pressable>
                    {imagem && <Image source={{ uri: imagem }} style={styles.imagem} />}
                </View>
            </View>
            <Pressable style={styles.button} onPress={salvar}>
                <Text style={styles.buttonText}>Adicionar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    inputContainer: {
        marginBottom: 20,
        padding: 10
    },
    input: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 10,
        marginBottom: 15,
        borderColor: '#ccc',
        borderWidth: 1,
        fontSize: 16,
    },
    imagePickerContainer: {
        alignItems: 'center',
        marginTop: 10,
    },
    button: {
        backgroundColor: '#32a897',
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
        marginBottom: 25,
        marginHorizontal: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    imagem: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        marginTop: 10,
    },
})