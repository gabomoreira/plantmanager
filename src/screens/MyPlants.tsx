import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';
import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { Header } from '../components/Header';
import colors from '../styles/colors';

import { PlantProps } from '../@types/Plant';
import waterdrop from '../assets/waterdrop.png';
import { Load } from '../components/Load';
import { PlantCardHorizontal } from '../components/PlantCardHorizontal';
import { deletePlant, getPlants } from '../services/plant';
import fonts from '../styles/fonts';

export const MyPlants = () => {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWatered, setNextWatered] = useState<string>();

  function handleRemove(plant: PlantProps) {
    Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [
      {
        text: 'Não ',
        style: 'cancel',
      },
      {
        text: 'Sim ',
        onPress: async () => {
          try {
            await deletePlant(plant.id);

            setMyPlants((oldData) => oldData.filter((i) => i.id !== plant.id));
          } catch (error) {
            console.log(error);
            Alert.alert('Erro', `Não foi possível remover a ${plant.name}`);
          }
        },
      },
    ]);
  }

  async function fetchPlants() {
    setLoading(true);

    const plants = await getPlants();

    if (plants.length > 0) {
      const nextTime = formatDistance(
        new Date(plants[0]?.dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt }
      );

      setNextWatered(`Não esqueça de regar a ${plants[0].name} à ${nextTime}`);
      setMyPlants(plants);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchPlants();
  }, []);

  if (loading) return <Load />;

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.spotlight}>
        <Image source={waterdrop} style={styles.spotlightImage} />
        <Text style={styles.spotlightText}>{nextWatered}</Text>
      </View>

      <View style={styles.plants}>
        <Text style={styles.plantsTitle}>Próximas regadas</Text>

        <FlatList
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardHorizontal
              name={item.name}
              photo={item.photo}
              hour={item.hour}
              handleRemove={() => handleRemove(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    backgroundColor: colors.background,
  },
  spotlight: {
    backgroundColor: colors.blue_light,
    height: 110,
    paddingHorizontal: 20,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  spotlightImage: {
    height: 45,
    width: 45,
    resizeMode: 'contain',
  },
  spotlightText: {
    flex: 1,
    color: colors.blue,
    paddingHorizontal: 20,
    textAlign: 'justify',
  },
  plants: {
    flex: 1,
    width: '100%',
  },
  plantsTitle: {
    fontSize: 24,
    fontFamily: fonts.heading,
    color: colors.heading,
    marginVertical: 20,
  },
});
