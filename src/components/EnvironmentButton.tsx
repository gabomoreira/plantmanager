import { StyleSheet, Text } from "react-native"
import { RectButton, RectButtonProps } from "react-native-gesture-handler"
import colors from "../styles/colors"
import fonts from "../styles/fonts"

interface Props extends RectButtonProps {
    title: string
    active?: boolean
}

export const EnvironmentButton = ({title, active, ...rest}: Props) => {
  return (
    <RectButton style={[styles.container]} {...rest}>
        <Text style={styles.text}>
            {title}
        </Text>
    </RectButton>
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
