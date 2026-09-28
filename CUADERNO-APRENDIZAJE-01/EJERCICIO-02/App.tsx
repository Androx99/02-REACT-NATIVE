import { StyleSheet, Text as NativeText, View as NativeView } from 'react-native';
import type { ComponentType } from 'react';

const View = NativeView as unknown as ComponentType<any>;
const Text = NativeText as unknown as ComponentType<any>;

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>¡Bienvenido!</Text>
        <Text style={styles.subtitle}>Diseño de interfaces con React Native</Text>
        <View style={styles.button}>
          <Text style={styles.buttonText}>COMENZAR</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#0f172a',
  },
  card: {
    backgroundColor: '#fff7ed',
    padding: 28,
    borderRadius: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#9a3412',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
  },
  button: {
    marginTop: 24,
    backgroundColor: '#ea580c',
    padding: 15,
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '900',
  },
});