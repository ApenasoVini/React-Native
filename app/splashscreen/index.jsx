import { Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  return (
    <LinearGradient
      style={styles.container}
      colors={['#2F2F2F', '#757575']}>
      <Image
        style={styles.logo}
        source={require('../../assets/logo.png')}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    transform: [{ scale: 1.25 }],
  }
});
