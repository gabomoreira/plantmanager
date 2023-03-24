import { useNavigation, useRoute } from "@react-navigation/native"
import { useState } from "react"
import { SafeAreaView, StyleSheet, Text, View } from "react-native"

import { Button } from "../components/Button"

import colors from "../styles/colors"
import fonts from "../styles/fonts"

interface Params {
    title: string
    subtitle: string
    buttonTitle: string
    icon: 'smile' | 'hug'
    nextScreen: string
}

const emojis = {
    hug: '🤗',
    smile: '😄'
}

export const Confirmation = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const {title, subtitle, buttonTitle, icon, nextScreen} = route.params as Params

    function handleStart(){
        navigation.navigate(nextScreen)
    }

  return (
    <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    {emojis[icon]}
                </Text>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.subtitle}>
                    {subtitle}
                </Text>

                <View style={styles.footer}>
                    <Button title={`${buttonTitle}`} onPress={handleStart} />
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