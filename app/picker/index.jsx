import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

const App = () => {
    const [pokemon, setPokemon] = useState('');

    const lista = [
        { nome: 'Pikachu', value: 'pikachu' },
        { nome: 'Bulbasaur', value: 'bulbasaur' },
        { nome: 'Charmander', value: 'charmander' },
        { nome: 'Squirtle', value: 'squirtle' },
    ]

    return (
        <View>
            <Text>Selecione um Pokémon</Text>
            <Picker
                selectValue={pokemon}
                onValueChange={(v) => setPokemon(v)}>
                <Picker.Item label="Selecione um Pokémon" />
                {lista.map((item, index) => (
                    <Picker.Item key={index} label={item.nome} value={item.value} />
                ))}
            </Picker>
        </View>
    )
}

export default App