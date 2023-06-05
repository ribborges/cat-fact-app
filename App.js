import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { catFact, catImg } from './api/base';
import CatImage from './components/CatImage';
import Fact from './components/Fact';
import Button from './components/Button';

export default function App() {
  const [fact, setFact] = useState("");
  const [image, setImage] = useState("");

  async function fetchData() {
    console.log("fetching data from cat fact");
    const factRes = await catFact.get("/");
    setFact(factRes.data.fact);

    console.log("fetching data from cat image");
    const imgRes = await catImg.get("/");
    setImage(imgRes.data[0].url);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent={false} backgroundColor="#000" />
      <View style={styles.header}>
        <Image style={styles.icon} source={require('./assets/cat.png')} />
      </View>
      <CatImage source={image} />
      <Fact text={fact} />
      <Button onPress={() => fetchData()}> Gerar</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    padding: 10,
    gap: 10
  },
  header: {
    backgroundColor: '#222',
    height: '12%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },
  icon: {
    height: 50,
    width: 50
  },
  imageContainer: {
    backgroundColor: '#222',
    height: '50%',
    width: '100%',
    borderRadius: 15,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    justifyContent: 'center'
  },
  factContainer: {
    flex: 1,
    backgroundColor: '#222',
    height: '10%',
    width: '100%',
    borderRadius: 15,
    padding: 15
  },
  text: {
    color: '#fff'
  },
  button: {
    backgroundColor: '#a462e7',
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  }
});