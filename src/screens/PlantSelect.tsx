import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { SafeAreaView, StyleSheet, Text, View } from "react-native"

import { Button } from "../components/Button"
import { EnvironmentButton } from "../components/EnvironmentButton"
import { Header } from "../components/Header"

import colors from "../styles/colors"
import fonts from "../styles/fonts"

export const PlantSelect = () => {
    const navigation = useNavigation()

    function handleStart(){
        // navigation.navigate('Confirmation')
    }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Header />

            <Text style={styles.title}>
                Em qual ambiente
            </Text>
            <Text style={styles.subtitle}>
                você quer colocar sua planta?
            </Text>
        </View>

        <EnvironmentButton title="Quarto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingHorizontal: 30
    },
    title: {
        fontSize: 17,
        lineHeight: 20,
        marginTop: 15,
        color: colors.heading,
        fontFamily: fonts.heading
    },
    subtitle: {
        fontSize: 17,
        lineHeight: 20,
        color: colors.heading,
        fontFamily: fonts.text
    },
})