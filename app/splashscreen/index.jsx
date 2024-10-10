import { Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function SplashScreen() {
  return (
    <LinearGradient
      style={styles.container}
      colors={['#2F2F2F', '#757575']}>
      <Image
        style={styles.logo}
        source={require('../../assets/splashscreen.png')}
      />
      <View>
        <Link href='../'>
          <Text>Voltar ao início</Text>
        </Link>
      </View>
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
