import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native"

import { Button } from "../components/Button"
import { EnvironmentButton } from "../components/EnvironmentButton"
import { Header } from "../components/Header"
import { Load } from "../components/Load"
import { PlantCardVertical } from "../components/PlantCardVertical"
import api from "../services/api"

import colors from "../styles/colors"
import fonts from "../styles/fonts"

interface EnvironmentProps {
    key: string
    title: string
}

interface PlantProps {
    id: number
    name: string
    about: string
    water_tips: string
    photo: string
    environments: [string]
    frequency: {
        times: number
        repeat_every: string
    }
}

export const PlantSelect = () => {
    const navigation = useNavigation()

    const [environments, setEnvironments] = useState<EnvironmentProps[]>()
    const [environmentSelected, setEnvironmentSelected] = useState('all')
    const [plants, setPlants] = useState<PlantProps[]>()
    const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>()
    const [loading, setLoading] = useState(true)

    const [page, setPage] = useState(1)
    const [loadingMore, setLoadingMore] = useState(false)
    const [loadedAll, setLoadedAll] = useState(false)

    function handleEnvironmentSelected(environment: string) {
        setEnvironmentSelected(environment)

        if(environment === 'all') return setFilteredPlants(plants)

        const filtered = plants?.filter(i => i.environments.includes(environment))
        setFilteredPlants(filtered)

    }

    async function fetchEnvironment() {
        const {data} = await api.get(`plants_environment?_sort=title&_order=asc`)
        setEnvironments([
            {
                key: 'all',
                title: 'Todos'
            },
            ...data
        ])
    }

    function handleFetchMore(distance: number) {
        if(distance < 1) return 

        setLoadingMore(true)
        setPage(oldValue => oldValue + 1)

        fetchPlants()
    }

    async function fetchPlants() {
        const {data} = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=6`)

        if(!data) return setLoadedAll(true)

        if(page > 1) {
            setPlants(oldValue => [...oldValue, ...data])
            setFilteredPlants(oldValue => [...oldValue, ...data])
        } else {
            setPlants(data)
            setFilteredPlants(data)
        }

        setLoading(false)
        setLoadingMore(false)
    }

    useEffect(() => {
        fetchEnvironment()
        fetchPlants()
    }, [])
    
    if(loading) return <Load />

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

        <View>
            <FlatList 
                data={environments}
                renderItem={({item}) => (
                    <EnvironmentButton 
                        key={item?.key} 
                        title={item.title} 
                        active={item.key === environmentSelected} 
                        onPress={() => handleEnvironmentSelected(item.key)}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.environmentList}
            />
        </View>

        <View style={styles.plants}>
            <FlatList 
                data={filteredPlants}
                renderItem={({item}) => (
                    <PlantCardVertical key={item.id} name={item.name} photo={item.photo} />
                )}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                contentContainerStyle={styles.plantList}
                onEndReachedThreshold={0.1}
                onEndReached={({distanceFromEnd}) => handleFetchMore(distanceFromEnd)}
                ListFooterComponent={
                   loadingMore ?  <ActivityIndicator color={colors.green} /> : <></>
                }
            />
        </View>
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
        marginVertical: 16,
        paddingRight: 64,
    },
    plants: {
        flex: 1,
        paddingHorizontal: 22,
        justifyContent: "center"
    },
    plantList: {
        paddingBottom: 64
    }
})