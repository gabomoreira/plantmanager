import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { keyProject } from "./api";

export const saveUserName = async (name: string) => {
    await AsyncStorage.setItem(`${keyProject}:user`, name)
}

export const getUserName = async () => {
    try {
        const userName = await AsyncStorage.getItem(`${keyProject}:user`)
        return userName
    } catch (error) {
        Alert.alert('Não foi possível salvar seu nome. ')
        console.log(error)
    }
}