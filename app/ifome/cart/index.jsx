import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Image, FlatList } from 'react-native';
import { AppContext } from '../../../scripts/AppContext';
import Header from '../components/header';

const Item = ({ nome, local, preco, img }) => (
  <View style={styles.item}>
    <View>
      <Text style={styles.info}>{nome}</Text>
      <Text style={styles.info}>{local}</Text>
      <Text style={styles.preco}>R$ {preco}</Text>
    </View>
  </View>
);

const App = () => {
  const { cart, setCart } = useContext(AppContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalValue = cart.reduce((sum, item) => sum + item.preco, 0);
    setTotal(totalValue.toFixed(2));
  }, [cart]);

  const handleExcludeItem = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  return (
    <ScrollView style={styles.container}>
      <Header link='../' title='Seu carrinho' />
      <View style={styles.list}>
        <FlatList
          data={cart}
          renderItem={({ item, index }) => (
            <View style={styles.content}>
              <Item {...item} />
              <Pressable onPress={() => handleExcludeItem(index)} style={styles.removeBtn}>
                <Text style={styles.removeTxt}>X</Text>
              </Pressable>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.final}>
        <Text style={styles.total}>Total: R$ {total}</Text>
        <View style={styles.end}>
          <Pressable onPress={() => setCart([])} style={styles.press}>
            <Text style={styles.pressTxt}>Limpar carrinho</Text>
          </Pressable>
          <Pressable style={styles.press}>
            <Text style={styles.pressTxt}>Finalizar compra</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 10
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  removeBtn: {
    justifyContent: 'center',
  },
  removeTxt: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
  preco: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    paddingHorizontal: 15,
    alignItems: 'center',
    borderColor: 'gray',
    borderRadius: 10,
    marginBottom: 20,
  },
  info: {
    fontSize: 21,
  },
  final: {
    padding: 15,
    alignItems: 'center',
  },
  total: {
    fontSize: 30,
    fontWeight: '700',
  },
  end: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  press: {
    backgroundColor: '#ff0000',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
    width: 170,
  },
  pressTxt: {
    color: 'white',
  },
});

export default App;
