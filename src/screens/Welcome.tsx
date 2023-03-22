import { Entypo, Feather } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Dimensions, View } from "react-native"

import logoImg from '../assets/plantlogo.png'
import colors from "../styles/colors"
import fonts from "../styles/fonts"

export const Welcome = () => {
    const navigation = useNavigation()

    function hadleStart(){
        navigation.navigate('UserIdentification')
    }

  return (
   <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
            <Text style={styles.title}>
                Gerencie {'\n'}
                suas plantas de {'\n'}
                forma fácil
            </Text>

            <Image source={logoImg} style={styles.logo} resizeMode='contain' />      

            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas {'\n'}
                plantas. Nós cuidamdos de lembrar você {'\n'}
                sempre que precisar.
            </Text>

            <TouchableOpacity style={styles.button} activeOpacity={.7} onPress={hadleStart}>
                <Feather name="chevron-right" style={styles.buttonIcon} />
            </TouchableOpacity>
        </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },
    logo: {
        height: Dimensions.get('window').width * .7,
        width: Dimensions.get('window').width * .8,
        borderRadius: 16,
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading,
        lineHeight: 34
    },
    subtitle: {
        fontFamily: fonts.text,
        fontSize: 18,
        textAlign: 'center',
        color: colors.heading,
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
    buttonIcon: {
        fontSize: 32,
        color: colors.white
    }
})