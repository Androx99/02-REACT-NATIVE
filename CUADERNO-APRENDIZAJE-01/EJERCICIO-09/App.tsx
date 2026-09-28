import { ScrollView as NativeScrollView, StyleSheet, Text as NativeText, View as NativeView } from 'react-native';
import type { ComponentType } from 'react';

const ScrollView = NativeScrollView as unknown as ComponentType<any>;
const View = NativeView as unknown as ComponentType<any>;
const Text = NativeText as unknown as ComponentType<any>;

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.hello}>Buenos días 👋</Text>
      <Text style={styles.user}>Laura</Text>

      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Saldo disponible</Text>
        <Text style={styles.balance}>4.280,32 €</Text>
      </View>

      <Text style={styles.sectionTitle}>Movimientos</Text>
      <Movement title="Nómina"  amount="+2.340 €" />
      <Movement title="Supermercado"  amount="-42,80 €" />
    </ScrollView>
  );
}

type MovementProps = {
  title: string;
  amount: string;
};

function Movement({ title, amount }: MovementProps) {
  return (
    <View style={styles.movement}>
      <View style={styles.movementInfo}>
        <Text style={styles.movementTitle}>{title}</Text>
      </View>
      <Text style={styles.amount}>{amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    paddingHorizontal: 20,
  },
  hello: {
    marginTop: 60,
    color: 'white',
  },
  user: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 24,
    color: 'white',
  },
  balanceCard: {
    backgroundColor: '#020617',
    borderRadius: 22,
    padding: 24,
  },
  balanceLabel: {
    color: '#cbd5e1',
  },
  balance: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 8,
  },
  account: {
    color: '#94a3b8',
    marginTop: 28,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    color: 'white',
  },
  movement: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 14,
    marginBottom: 10,
  },
  movementInfo: {
    flex: 1,
  },
  movementTitle: {
    fontWeight: 'bold',
  },
  movementDate: {
    marginTop: 3,
    color: '#94a3b8',
  },
  amount: {
    fontWeight: 'bold',
  },
});