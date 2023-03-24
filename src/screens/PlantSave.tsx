import { useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { Alert, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { Button } from '../components/Button'
import colors from '../styles/colors'
import fonts from '../styles/fonts'
import DateTimePicker, {DateTimePickerEvent, Event} from '@react-native-community/datetimepicker'
import {isBefore, format} from 'date-fns'
import { PlantProps } from '../@types/Plant'

interface Params {
    plant : PlantProps
}

export const PlantSave = () => {
    const [selectedDateTime, setSelectedDateTime] = useState(new Date())
    const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios')

    const route = useRoute()
    const {plant} = route.params as Params

    function handleChangeTime(event: DateTimePickerEvent, dateTime?: Date | undefined) {
        if(Platform.OS === 'android') {
            setShowDatePicker(oldState => !oldState)
        }

        if(dateTime && isBefore(dateTime, new Date())) {
            setSelectedDateTime(new Date())
            Alert.alert('Escolha uma hora no futuro! ⏰')
        } 

        if(dateTime) {
            setSelectedDateTime(dateTime)
        }

    }

    function handleOpenDateTimePickerForAndroid() {
        setShowDatePicker(true)
    }

    function handleCloseDateTimePickerForAndroid() {
        setShowDatePicker(false)
    }

  return (
    <View style={styles.container}>
        <View style={styles.plantInfo}>
            <Image 
                source={{uri: `${plant.photo}`}}
                style={styles.plantImage}
            />

            <Text style={styles.plantName}>
                {plant.name}
            </Text>
            <Text style={styles.plantAbout}>
                {plant.about}
            </Text>
        </View>

        <View style={styles.controller}>
            <View style={styles.tipContainer}>
                <Image 
                    source={{uri: 'https://www.freepnglogos.com/uploads/drop-png/waterdrop-sharp-glimpse-illustration-transparent-png-8.png'}}
                    style={styles.tipImage}
                />
                <Text style={styles.tipText}>
                    {plant.water_tips}
                </Text>
            </View>

            <Text style={styles.alertLabel}>
                Escolha o melhor horário para ser lembrado: 
            </Text>

            {showDatePicker && <DateTimePicker 
                value={selectedDateTime}
                mode={'time'}
                display='spinner'
                onChange={handleChangeTime}
            />}

            {
                Platform.OS === 'android' && (
                    <TouchableOpacity style={styles.datePickerButton} onPress={handleOpenDateTimePickerForAndroid}>
                        <Text style={styles.datePickerText}>
                        {`Mudar ${format(selectedDateTime, 'HH:mm')}`}
                        </Text>
                    </TouchableOpacity>
                )
            }

            <Button 
                title='Confirmar'
                onPress={() => {}}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.shape
    },
    plantInfo: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.shape
    },
    plantImage: {
        height: 150,
        width: 150,
        resizeMode: 'contain'
    },
    plantName: {
        fontFamily: fonts.heading,
        fontSize: 24,
        color: colors.heading,
        marginTop: 15
    },
    plantAbout: {
        textAlign: 'center',
        fontFamily: fonts.text,
        fontSize: 17,
        color: colors.heading,
        marginTop: 10
    },
    controller: {
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: getBottomSpace() || 20
    },
    tipContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.blue_light,
        padding: 20,
        borderRadius: 16,
        position: 'relative',
        bottom: 60
    },
    tipImage: {
        height: 40,
        width: 40,
        resizeMode: 'contain',
    },
    tipText: {
        flex: 1,
        textAlign: 'justify',
        fontFamily: fonts.text,
        fontSize: 14,
        color: colors.blue,
        marginLeft: 20
    },
    alertLabel: { 
        textAlign: 'center',
        fontFamily: fonts.complement,
        color: colors.heading,
        fontSize: 12,
        marginBottom: 5
    },
    datePickerButton: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 40,
    },
    datePickerText: {
        fontFamily: fonts.text,
        color: colors.heading,
        fontSize: 24,
    }
})