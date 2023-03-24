import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { SafeAreaView, Text, View, StyleSheet, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Alert } from "react-native"

import { Button } from "../components/Button"
import { saveUserName } from "../services/user"

import colors from "../styles/colors"
import fonts from "../styles/fonts"

export const UserIdentification = () => {
    const navigation = useNavigation()

    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false)
    const [name, setName] = useState<string>('')

    
    function hadleInputBlur() {
        setIsFocused(false)
        setIsFilled(!!name)
    }

    function hadleInputFocus() {
        setIsFocused(true)
    }

    function handleInputChange(value: string) {
        setIsFilled(!!value)
        setName(value)
    }

    async function hadleConfirmation(){
        if(!name.trim()) return Alert.alert('Me diz como chamar você 🥲')

        if(name.length > 15) return Alert.alert('O nome deve ter no máximo 15 caracteres')

        await saveUserName(name.trim())
        navigation.navigate('Confirmation', {
            title: 'Prontinho',
            subtitle: 'Agora vamos começar a cuidar \n das suas plantinhas com muito cuidado',
            buttonTitle: 'Começar',
            icon: 'smile',
            nextScreen: 'PlantSelect'
        })
    }


  return (
    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.content}>
                    <View style={styles.form}>
                        <View style={styles.header}>
                            <Text style={styles.emoji}>
                                { name?.length > 2 ? '😄' : '😀'}
                            </Text>
                            <Text style={styles.title}>
                                Como podemos {'\n'}
                                chamar você?
                            </Text>
                        </View>

                        <TextInput 
                            style={[
                                styles.textInput, 
                                (isFocused || isFilled) && { borderColor: colors.green }
                            ]}
                            placeholder='Digite seu nome'
                            onBlur={hadleInputBlur}
                            onFocus={hadleInputFocus}
                            onChangeText={handleInputChange}
                            
                            />

                        <View style={styles.footer}>
                            <Button title="Confirmar" onPress={hadleConfirmation} disabled={!isFilled || name?.length < 3} />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content: {
        flex: 1,
        width: '100%'
    },
    form: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center'
    },
    emoji: {
        fontSize: 44
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        lineHeight: 32,
        marginTop: 20,
        fontFamily: fonts.heading

    },
    header: {
        width: '100%',
        alignItems: 'center'
    },
    textInput: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    footer: {
        marginTop: 40,
        paddingHorizontal: 20,
        width: '100%'
    }
})