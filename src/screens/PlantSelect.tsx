import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native"

import { Button } from "../components/Button"
import { EnvironmentButton } from "../components/EnvironmentButton"
import { Header } from "../components/Header"
import api from "../services/api"

import colors from "../styles/colors"
import fonts from "../styles/fonts"

interface EnvironmentProps {
    key: string
    title: string
}

export const PlantSelect = () => {
    const navigation = useNavigation()

    const [environments, setEnvironments] = useState<EnvironmentProps[]>()

    function handleStart(){
        // navigation.navigate('Confirmation')
    }

    async function fetchEnvironment() {
        const {data} = await api.get('plants_environment')
        setEnvironments([
            {
                key: 'all',
                title: 'Todos'
            },
            ...data
        ])
    }

    useEffect(() => {
        fetchEnvironment()
    }, [])

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

        <FlatList 
            data={environments}
            renderItem={({item}) => (
                <EnvironmentButton key={item?.key} title={item.title} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.environmentList}
        />
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
    environmentList: {
        height: 40,
        paddingBottom: 5,
        marginLeft: 32,
        marginVertical: 32,
        paddingRight: 64,
    }
})