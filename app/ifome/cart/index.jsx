import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { CartContext } from '../_layout';
import Header from '../components/header';

export default function Cart() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={styles.container}>
      <Header title="Carrinho" />
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
          </View>
        )}
      />
      <Text style={styles.total}>Total do pedido: R$ {total.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f2f6',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
  },
  price: {
    fontSize: 16,
  },
  total: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
