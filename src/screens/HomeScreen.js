import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.hello}>BONJOUR !</Text>
        <Text style={styles.question}>Quelle activité aujourd'hui ?</Text>
      </View>

      {/* Espace destiné à la liste d'activités */}
      <View style={styles.listPlaceholder}>
        <Text style={{ color: '#888' }}>La liste des activités s'affichera ici</Text>
      </View>

      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F9FE' },
  banner: { margin: 16, padding: 16, borderRadius: 16, backgroundColor: '#E3F0FC' },
  hello: { fontSize: 12, fontWeight: '700', color: '#5B7A9D' },
  question: { fontSize: 22, fontWeight: 'bold', color: '#1F2D44', marginTop: 4 },
  listPlaceholder: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  fab: {
    position: 'absolute', right: 20, bottom: 24, width: 60, height: 60, borderRadius: 30,
    backgroundColor: '#4A90E2', alignItems: 'center', justifyContent: 'center', elevation: 6,
  },
  fabText: { color: '#fff', fontSize: 34, marginTop: -3 },
});