import { ScrollView as NativeScrollView, StyleSheet, Text as NativeText, View as NativeView } from 'react-native';
import type { ComponentType } from 'react';

const ScrollView = NativeScrollView as unknown as ComponentType<any>;
const Text = NativeText as unknown as ComponentType<any>;
const View = NativeView as unknown as ComponentType<any>;

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>Buenos días,</Text>
      <Text style={styles.user}>Laura 👋</Text>

      <View style={styles.goalCard}>
        <Text style={styles.goalLabel}>OBJETIVO DIARIO</Text>
        <Text style={styles.steps}>8.200</Text>

        <View style={styles.progressBackground}>
          <View style={styles.progress} />
        </View>
      </View>

      <Text style={styles.sectionTitle}>Resumen</Text>

      <View style={styles.grid}>
        <StatCard icon="🔥" value="610" />
        <StatCard icon="⏱" value="55 min"  />
        <StatCard icon="❤️" value="69"  />
        <StatCard icon="📍" value="6,3 km"  />
      </View>
    </ScrollView>
  );
}

function StatCard({ icon, value}: { icon: string; value: string; }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statIcon}>{icon}</Text>
      <Text style={styles.statValue}>{value}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
    paddingHorizontal: 20,
  },
  greeting: {
    marginTop: 60,
    color: 'white',
    fontSize: 17,
  },
  user: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
    color: 'white',
  },
  goalCard: {
    backgroundColor: '#042e10',
    padding: 24,
    borderRadius: 22,
  },
  goalLabel: {
    color: 'white',
    fontWeight: 'bold',
  },
  steps: {
    marginTop: 12,
    color: 'white',
    fontSize: 44,
    fontWeight: 'bold',
  },
  stepsLabel: {
    color: '#cbd5e1',
  },
  progressBackground: {
    height: 10,
    backgroundColor: '#374151',
    borderRadius: 5,
    marginTop: 24,
    overflow: 'hidden',
  },
  progress: {
    width: '75%',
    height: '100%',
    backgroundColor: '#22c55e',
  },
  percentage: {
    color: '#cbd5e1',
    marginTop: 9,
  },
  sectionTitle: {
    marginTop: 28,
    marginBottom: 12,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 18,
  },
  statIcon: {
    fontSize: 28,
  },
  statValue: {
    marginTop: 12,
    fontSize: 21,
    fontWeight: 'bold',
  },
  activity: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 15,
    marginBottom: 10,
  },
  activityTitle: {
    fontWeight: 'bold',
  },
  activityDetail: {
    marginTop: 4,
    color: '#64748b',
  },
});