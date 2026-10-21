import { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { activities } from '../data/activities';

export default function HomeScreen() {
  const [message, setMessage] = useState('');
  const timerRef = useRef(null);

  const showMessage = (text) => {
    setMessage(text);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setMessage(''), 2000);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.7}
      onPress={() => showMessage(item.titre)}
    >
      <View style={styles.iconBox}>
        <Text style={styles.icon}>{item.icone}</Text>
      </View>
      <View style={styles.cardText}>
        <Text style={styles.cardTitle}>{item.titre}</Text>
        <Text style={styles.cardDesc}>{item.description}</Text>
      </View>
      <Text style={styles.chevron}>›</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={activities}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <View style={styles.banner}>
            <Text style={styles.hello}>BONJOUR !</Text>
            <Text style={styles.question}>Quelle activité aujourd'hui ?</Text>
          </View>
        }
      />

      <TouchableOpacity style={styles.fab} onPress={() => showMessage('Nouvelle activité')}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>

      {message !== '' && (
        <View style={styles.snackbar}>
          <Text style={styles.snackbarText}>{message}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F9FE' },
  banner: { margin: 16, padding: 16, borderRadius: 16, backgroundColor: '#E3F0FC' },
  hello: { fontSize: 12, fontWeight: '700', color: '#5B7A9D' },
  question: { fontSize: 22, fontWeight: 'bold', color: '#1F2D44', marginTop: 4 },
  card: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff',
    marginHorizontal: 16, marginBottom: 12, padding: 12, borderRadius: 14, elevation: 2,
    shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 6, shadowOffset: { width: 0, height: 2 },
  },
  iconBox: {
    width: 56, height: 56, borderRadius: 12, backgroundColor: '#F1F6FC',
    alignItems: 'center', justifyContent: 'center',
  },
  icon: { fontSize: 30 },
  cardText: { flex: 1, marginLeft: 14 },
  cardTitle: { fontSize: 17, fontWeight: '700', color: '#1F2D44' },
  cardDesc: { fontSize: 13, color: '#6B7A90', marginTop: 2 },
  chevron: { fontSize: 28, color: '#9AA7B8' },
  fab: {
    position: 'absolute', right: 20, bottom: 24, width: 60, height: 60, borderRadius: 30,
    backgroundColor: '#4A90E2', alignItems: 'center', justifyContent: 'center', elevation: 6,
  },
  fabText: { color: '#fff', fontSize: 34, marginTop: -3 },
  snackbar: {
    position: 'absolute', left: 16, right: 100, bottom: 30, backgroundColor: '#2B3A55',
    paddingVertical: 14, paddingHorizontal: 16, borderRadius: 10,
  },
  snackbarText: { color: '#fff', fontSize: 15 },
});