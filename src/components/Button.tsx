import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from "react-native"
import colors from "../styles/colors"
import fonts from "../styles/fonts"

interface Props extends TouchableOpacityProps {
    title: string
    disabled?: boolean
}

export const Button = ({title, disabled, ...rest}: Props) => {
  return (
    <TouchableOpacity style={[styles.container, disabled && {backgroundColor: colors.green_light}]} disabled={disabled} {...rest}>
        <Text style={styles.text}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        height: 56,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        color: colors.white,
        fontFamily: fonts.heading
    },
})
