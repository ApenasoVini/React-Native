import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Link } from 'expo-router';

const Pokemon = () => {
    const [pokemons, setPokemons] = useState([]);
    const [types, setTypes] = useState([]);
    const [selectedType, setSelectedType] = useState('');
    const [limit, setLimit] = useState(10);

    const fetchPokemons = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
            const data = await response.json();
            setPokemons(data.results);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchTypes = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/type');
            const data = await response.json();
            setTypes(data.results);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchPokemonsByType = async (type) => {
        if (type === '') {
            fetchPokemons();
            return;
        }
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
            const data = await response.json();
            setPokemons(data.pokemon.map((p) => p.pokemon));
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchPokemons();
        fetchTypes();
    }, [limit]);

    return (
        <View style={styles.container}>
            <Link href='../'>
                <Text>Voltar ao início</Text>
            </Link>
            <Text style={styles.title}>Pokédex</Text>
            <Picker
                selectedValue={selectedType}
                style={styles.picker}
                onValueChange={(itemValue) => {
                    setSelectedType(itemValue);
                    fetchPokemonsByType(itemValue);
                }}
            >
                <Picker.Item label="Todos" value="" />
                {types.map((type) => (
                    <Picker.Item key={type.name} label={type.name} value={type.name} />
                ))}
            </Picker>

            <FlatList
                data={pokemons}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                    <View style={styles.pokemonItem}>
                        <Text style={styles.pokemonText}>{item.name}</Text>
                    </View>
                )}
            />

            <View style={styles.buttonContainer}>
                <Button title="Mostrar Mais" onPress={() => setLimit(limit + 10)} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    picker: {
        height: 50,
        width: '100%',
        marginBottom: 16,
    },
    pokemonItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    pokemonText: {
        fontSize: 18,
    },
    buttonContainer: {
        marginTop: 16,
        alignItems: 'center',
    },
});

export default Pokemon;
