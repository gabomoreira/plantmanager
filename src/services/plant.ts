import AsyncStorage from '@react-native-async-storage/async-storage';
import { PlantProps, StoragePlantProps } from '../@types/Plant';
import { keyProject } from './api';
import { format } from 'date-fns';
import * as Notifications from 'expo-notifications';

export async function savePlant(plant: PlantProps): Promise<void> {
  try {
    const nextTime = new Date(plant.dateTimeNotification);
    const now = new Date();

    const { times, repeat_every } = plant.frequency;
    if (repeat_every === 'week') {
      const interval = Math.trunc(7 / times);
      nextTime.setDate(now.getDate() + interval);
    } else {
      nextTime.setDate(now.getDate() + 1);
    }

    const seconds = Math.abs(
      Math.ceil((now.getTime() - nextTime.getTime()) / 1000)
    );

    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Oiii, ',
        body: `Está na hora de cuidar da sua ${plant.name}`,
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
        data: {
          plant,
        },
      },
      trigger: {
        seconds: seconds < 60 ? 60 : seconds,
      },
    });

    const data = await AsyncStorage.getItem(`${keyProject}:plants`);
    const oldPlants = data ? (JSON.parse(data) as StoragePlantProps) : {};

    const newPlant = {
      [plant.id]: {
        data: plant,
        notificationId,
      },
    };

    await AsyncStorage.setItem(
      `${keyProject}:plants`,
      JSON.stringify({
        ...newPlant,
        ...oldPlants,
      })
    );
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getPlants(): Promise<PlantProps[]> {
  try {
    const data = await AsyncStorage.getItem(`${keyProject}:plants`);
    const plants = data ? (JSON.parse(data) as StoragePlantProps) : {};

    console.log(plants, 'plants storage');

    const plantsShorted = Object.keys(plants)
      .map((plant) => ({
        ...plants[plant].data,
        hour: format(
          new Date(plants[plant].data.dateTimeNotification),
          'HH:mm'
        ),
      }))
      .sort((a, b) =>
        Math.floor(
          new Date(a.dateTimeNotification).getTime() / 1000 -
            Math.floor(new Date(b.dateTimeNotification).getTime() / 1000)
        )
      );

    return plantsShorted;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function deletePlant(id: number): Promise<void> {
  try {
    const data = await AsyncStorage.getItem(`${keyProject}:plants`);
    const plants = data ? (JSON.parse(data) as StoragePlantProps) : {};

    delete plants[id];

    await AsyncStorage.setItem(`${keyProject}:plants`, JSON.stringify(plants));

    await Notifications.cancelScheduledNotificationAsync(
      plants[id].notificationId
    );
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function clearPlants(): Promise<void> {
  try {
    await AsyncStorage.clear();
  } catch (error: any) {
    throw new Error(error);
  }
}
