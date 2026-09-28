import { StyleSheet, Text as NativeText, View as NativeView, Image as NativeImage, Pressable } from 'react-native';
import type { ComponentType } from 'react';

const View = NativeView as unknown as ComponentType<any>;
const Text = NativeText as unknown as ComponentType<any>;
const Image = NativeImage as unknown as ComponentType<any>;

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.imageCard}>
          <Image source={{ uri: 'https://picsum.photos/600/400' }} style={styles.image} />
        </View>

        <View style={styles.content}>
          <View style={styles.offer}>
            <Text style={styles.offerText}>OFERTA</Text>
          </View>
          <Text style={styles.title}>Auriculares Wireless</Text>
          <Text style={styles.rating}>⭐ 4.8</Text>

          <View style={styles.bottom}>
            <Text style={styles.price}>89,99 €</Text>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>AÑADIR</Text>
            </Pressable>
          </View>
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
    backgroundColor: 'white',
    borderRadius: 20,
  },
  image: {
    width: '100%',
    height: 220,
  },
  imageCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
    margin: 20,
  },
  content: {
    padding: 20,
  },
  offer: {
    alignSelf: 'flex-start',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 20,
    backgroundColor: '#FeF2F2',
  },
  offerText: {
    color: '#B91C1C',
    fontWeight: '900',
    fontSize: 12,
  },
  title: {
    marginTop: 6,
    fontSize: 24,
    fontWeight: 'bold',
  },
  rating: {
    marginTop: 10,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#111827',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});