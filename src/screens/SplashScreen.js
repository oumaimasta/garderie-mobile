import { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => navigation.replace('Main'), 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/splash-garderie.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Ma Garderie</Text>
      <Text style={styles.subtitle}>Bienvenue</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFDF8', alignItems: 'center', justifyContent: 'center' },
  image: { width: '85%', height: '55%' },
  title: { fontSize: 40, fontWeight: 'bold', color: '#F26B6B', marginTop: 10 },
  subtitle: { fontSize: 22, color: '#2B3A55', marginTop: 4 },
});