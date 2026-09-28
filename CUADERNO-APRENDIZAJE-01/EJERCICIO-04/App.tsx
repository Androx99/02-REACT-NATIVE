import { StyleSheet, Pressable, TextInput as NativeTextInput, Text as NativeText, View as NativeView } from 'react-native';
import type { ComponentType } from 'react';

const View = NativeView as unknown as ComponentType<any>;
const Text = NativeText as unknown as ComponentType<any>;
const TextInput = NativeTextInput as unknown as ComponentType<any>;
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.subtitle}>Introduce tus datos</Text>

        <TextInput style={styles.input} placeholder="Correo electrónico" />
        <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry />

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>INICIAR SESIÓN</Text>
        </Pressable>
        <Pressable>
        <Text style={styles.register}>¿No tienes cuenta? Regístrate</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 28,
    backgroundColor: '#0f172a',
  },
  card: {
    backgroundColor: 'white',
    padding: 28,
    borderRadius: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 8,
    marginBottom: 28,
    color: '#64748b',
  },
  input: {
    backgroundColor: '#efeff0',
    padding: 16,
    borderRadius: 12,
    marginBottom: 14,
  },
  button: {
    marginTop: 8,
    backgroundColor: '#2563eb',
    padding: 16,
    borderRadius: 12,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '900',
  },
  register: {
    textAlign: 'center',
    marginTop: 22,
    color: '#64748b',
  },
});