import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, Pressable } from 'react-native';

const DATA = [
    { id: '1', nome: 'Fazer um pudim' },
    { id: '2', nome: 'Ir na academia' },
    { id: '3', nome: 'Cobrar o caloteiro' },
    { id: '4', nome: 'Ver o jogo do mengão' },
];

const Item = ({ nome, concluido, onPress }) => (
    <Pressable onPress={onPress} style={styles.item}>
        <Text style={concluido ? styles.concluido : styles.title}>{nome}</Text>
    </Pressable>
);

const App = () => {
    const [tarefas, setTarefas] = useState(DATA);

    const toggleTarefa = (id) => {
        setTarefas(tarefas.map(item =>
            item.id === id ? { ...item, concluido: !item.concluido } : item
        ));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Tarefas</Text>
            <FlatList
                data={tarefas}
                renderItem={({ item }) => (
                    <Item
                        nome={item.nome}
                        concluido={item.concluido}
                        onPress={() => toggleTarefa(item.id)}
                    />
                )}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        alignItems: 'center',
    },
    item: {
        backgroundColor: '#9d9d9e',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    concluido: {
        fontSize: 32,
        textDecorationLine: 'line-through',
    },
});

export default App;
