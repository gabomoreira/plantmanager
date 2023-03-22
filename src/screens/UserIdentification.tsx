import { useState } from "react"
import { SafeAreaView, Text, View, StyleSheet, Dimensions, TextInput, KeyboardAvoidingView, Platform } from "react-native"

import { Button } from "../components/Button"

import colors from "../styles/colors"
import fonts from "../styles/fonts"

export const UserIdentification = () => {
    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false)
    const [name, setName] = useState<string>()

    
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

  return (
    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={styles.content}>
                <View style={styles.form}>
                    <View style={styles.header}>
                        <Text style={styles.emoji}>
                            { isFilled ? '😄' : '😀'}
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
                        <Button title="Confirmar"/>
                    </View>
                </View>
            </View>
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