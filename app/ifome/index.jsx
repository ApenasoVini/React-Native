import React, { useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image } from 'react-native';
import { CartContext } from './_layout';
import Header from './components/header';

const items = [
  { id: 1, name: 'Big Mac', price: 32.50, image: require('./assets/bigmac.jpg') },
  { id: 2, name: 'Coxinha', price: 4.50, image: require('./assets/coxinha.jpg') },
  { id: 3, name: 'Hot Dog', price: 14.20, image: require('./assets/hotdog.jpg') }
];

const App = () => {
  const { addToCart, cart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Header title="iFome" cartCount={cart.length} />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
              <Button title="Comprar" onPress={() => addToCart(item)} color="#ff4757" />
            </View>
          </View>
        )}
      />
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
    padding: 10,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  info: {
    marginLeft: 15,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default App;
