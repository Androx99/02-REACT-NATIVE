import { FlatList as NativeFlatList, StyleSheet, Text as NativeText, View as NativeView } from 'react-native';
import type { ComponentType } from 'react';

const View = NativeView as unknown as ComponentType<any>;
const Text = NativeText as unknown as ComponentType<any>;
const FlatList = NativeFlatList as unknown as ComponentType<any>;

const products = [
  { id: '1', icon: '⌨️', name: 'Teclado'},
  { id: '2', icon: '🖱️', name: 'Ratón'},
  { id: '3', icon: '🖥️', name: 'Monitor'},
  { id: '4', icon: '🎧', name: 'Auriculares'},
  { id: '5', icon: '💻', name: 'Portátil'},
  { id: '6', icon: '📱', name: 'Móvil'},
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productos</Text>

      <FlatList
        data={products}
        numColumns={2}
        columnWrapperStyle={styles.row}
        keyExtractor={(item: { id: any; }) => item.id}
        renderItem={({ item }: { item: (typeof products)[number] }) => (
          <View style={styles.card}>
            <Text style={styles.icon}>{item.icon}</Text>
            <Text style={styles.name}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
    backgroundColor: '#0f172a',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  row: {
    gap: 12,
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 16,
    marginBottom: 12,
  },
  icon: {
    fontSize: 38,
  },
  name: {
    marginTop: 15,
    fontSize: 17,
    fontWeight: 'bold',
  },
  price: {
    marginTop: 6,
    color: '#2563eb',
    fontWeight: 'bold',
  },
});