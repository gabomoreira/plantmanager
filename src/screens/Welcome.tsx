import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native"

import logoImg from '../assets/plantlogo.png'
import colors from "../styles/colors"

export const Welcome = () => {
  return (
   <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor='transparent' />

        <Text style={styles.title}>
            Gerencie {'\n'}
            suas plantas {'\n'}
            de forma fácil.
        </Text>

        <Image source={logoImg} style={styles.logo} />

        <Text style={styles.subtitle}>
            Não esqueça mais de regar suas plantas.
            Nós cuidamdos de lembrar você {'\n'}
            sempre que precisar.
        </Text>

        <TouchableOpacity style={styles.button} activeOpacity={.7}>
            <Text style={styles.buttonText}>
                >
            </Text>
        </TouchableOpacity>

   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    logo: {
        height: 292,
        width: 284,
        borderRadius: 16
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        color: colors.heading,
        paddingHorizontal: 20
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },
    buttonText: {
        fontSize: 24,
        color: colors.white
    }
})