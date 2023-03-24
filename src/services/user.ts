import AsyncStorage from "@react-native-async-storage/async-storage";
import { keyProject } from "./api";

export const saveUserName = async (name: string) => {
    await AsyncStorage.setItem(`${keyProject}:user`, name)
}

export const getUserName = async () => {
    const userName = await AsyncStorage.getItem(`${keyProject}:user`)

    return userName
}