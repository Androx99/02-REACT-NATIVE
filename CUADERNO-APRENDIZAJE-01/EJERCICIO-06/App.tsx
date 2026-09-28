import { StyleSheet, Text as NativeText, View as NativeView } from 'react-native';
import type { ComponentType } from 'react';

const View = NativeView as unknown as ComponentType<any>;
const Text = NativeText as unknown as ComponentType<any>;

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.grid}>
        <Metric title="Ventas" value="12.450 €" />
        <Metric title="Clientes" value="348" />
        <Metric title="Pedidos" value="1.024" />
        <Metric title="Conversión" value="7,4%" />
        <Metric title="Tickets" value="86" />
      </View>
    </View>
  );
}

function Metric({ title, value}: { title: string; value: string; }) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 70,
    backgroundColor: '#0F172A',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  card: {
    width: '48%',
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 16,
  },
  label: {
    color: '#64748b',
  },
  value: {
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 8,
  },
  change: {
    color: '#16a34a',
    fontWeight: 'bold',
    marginTop: 8,
  },
});