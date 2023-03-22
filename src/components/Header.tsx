import { useNavigation } from "@react-navigation/native"
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native"
import colors from "../styles/colors"
import {getStatusBarHeight} from 'react-native-iphone-x-helper'
import fonts from "../styles/fonts"

export const Header = () => {
    const navigation = useNavigation()

    function handleStart(){
        // navigation.navigate('Confirmation')
    }

  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.greeting}>Olá,</Text>
            <Text style={styles.username}>Zoe</Text>
        </View>
        <View>
            <Image source={{uri: 'https://github.com/gabomoreira.png'}} style={styles.image} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: getStatusBarHeight(),
        paddingVertical: 20
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 40
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    username: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.heading
    },
})