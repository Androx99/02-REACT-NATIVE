import { StyleSheet, Text as NativeText, View as NativeView } from 'react-native';
import type { ComponentType } from 'react';

const View = NativeView as unknown as ComponentType<any>;
const Text = NativeText as unknown as ComponentType<any>;

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native</Text>
      <Text style={styles.subtitle}>Mi primera pantalla</Text>
      <Text style={styles.subsubtitle}>Curso 2026/2027</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0F172A',
    borderRadius: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#e9e9e9',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: '#64748b',
  },
  subsubtitle: {
    marginTop: 18,
    fontSize: 16,
    color: '#93c5fd',
    fontWeight: 'bold',
  },
});