import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>À propos</Text>
      <Text style={styles.text}>
        Ma Garderie, application mobile pour découvrir les activités des enfants.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#F4F9FE' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#1F2D44', marginBottom: 12 },
  text: { fontSize: 16, color: '#444' },
});