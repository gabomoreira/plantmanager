import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { SafeAreaView, StyleSheet, Text, View } from "react-native"

import { Button } from "../components/Button"

import colors from "../styles/colors"
import fonts from "../styles/fonts"

export const Confirmation = () => {
    const navigation = useNavigation()

    function handleStart(){
        // navigation.navigate('Confirmation')
    }

  return (
    <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    😄
                </Text>
                <Text style={styles.title}>
                    Prontinho
                </Text>
                <Text style={styles.subtitle}>
                    Agora vamos começar a cuidar das suas {'\n'}
                    plantinhas com muito cuidado.
                </Text>

                <View style={styles.footer}>
                    <Button title="Começar" onPress={handleStart} />
                </View>
            </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    emoji: {
        fontSize: 78
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        lineHeight: 38,
        marginTop: 20,
        fontFamily: fonts.heading,
        colors: colors.heading

    },
    subtitle: {
        fontFamily: fonts.text,
        textAlign: "center",
        fontSize: 17,
        paddingVertical: 10,
        color: colors.heading
    },
    footer: {
        width: '100%',
        paddingHorizontal: 50,
        marginTop: 20
    }
})