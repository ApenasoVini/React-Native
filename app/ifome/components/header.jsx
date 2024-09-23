import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const header = ({ title, cartCount }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      {cartCount !== undefined && (
        <Link href="/cart">
          <Text style={styles.cartText}>🛒 {cartCount} itens</Text>
        </Link>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ff4757',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  cartText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default header;