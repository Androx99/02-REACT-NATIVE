import {
  ScrollView as NativeScrollView,
  StyleSheet,
  Text as NativeText,
  View as NativeView,
} from 'react-native';
import type { ComponentType } from 'react';

const View = NativeView as unknown as ComponentType<any>;
const Text = NativeText as unknown as ComponentType<any>;
const ScrollView = NativeScrollView as unknown as ComponentType<any>;
export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Noticias</Text>

      <NewsCard category="TECNOLOGÍA" title="IA y desarrollo" />
      <NewsCard category="MÓVIL" title="React Native" />
      <NewsCard category="CLOUD" title="Arquitecturas cloud" />
      <NewsCard category="Diseño" title="Interfaces accesibles" />
    </ScrollView>
  );
}

function NewsCard({ category, title }: { category: string; title: string }) {
  return (
    <View style={styles.card}>
      <Text style={styles.category}>{category}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 60,
    marginBottom: 20,
    color: 'white',
  },
  card: {
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 18,
    marginBottom: 14,
  },
  category: {
    color: '#2563eb',
    fontSize: 12,
    fontWeight: 'bold',
  },
  title: {
    marginTop: 7,
    fontSize: 20,
    fontWeight: 'bold',
  },
  date: {
    marginTop: 10,
    color: '#94a3b8',
  },
});