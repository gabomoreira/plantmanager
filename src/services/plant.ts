import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlantProps, StoragePlantProps } from "../@types/Plant";
import { keyProject } from "./api";
import {format} from 'date-fns'

export async function savePlant(plant: PlantProps) : Promise<void> {
    try {
        const data = await AsyncStorage.getItem(`${keyProject}:plants`)
        const oldPlants = data ? JSON.parse(data) as StoragePlantProps : {}

        const newPlant = {
            [plant.id]: {
                data: plant
            }
        }

        await AsyncStorage.setItem(`${keyProject}:plants`, 
        JSON.stringify({
            ...newPlant,
            ...oldPlants
        }))

    } catch (error: any) {
        throw new Error(error)
    }
}

export async function getPlants() : Promise<PlantProps[]> {
    try {
        const data = await AsyncStorage.getItem(`${keyProject}:plants`)
        const plants = data ? JSON.parse(data) as StoragePlantProps : {}

        console.log(plants, 'plants storage')
        
        const plantsShorted = Object.keys(plants).map(plant => ({
            ...plants[plant].data,
            hour: format(new Date(plants[plant].data.dateTimeNotification), 'HH:mm')
        })).sort((a,b) => 
            Math.floor(
                new Date(a.dateTimeNotification).getTime() / 1000 - 
                Math.floor(new Date(b.dateTimeNotification).getTime() / 1000)
            )
        )

        return plantsShorted

    } catch (error: any) {
        throw new Error(error)
    }
}

export async function clearPlants() : Promise<void> {
    try {
        await AsyncStorage.clear()
    } catch (error: any) {
        throw new Error(error)
    }
}