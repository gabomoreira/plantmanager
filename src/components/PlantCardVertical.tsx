import { Text, Image, StyleSheet, View } from "react-native"
import { RectButton, RectButtonProps } from "react-native-gesture-handler"
import colors from "../styles/colors"
import fonts from "../styles/fonts"

interface Props extends RectButtonProps {
    name: string,
    photo: string
}

export const PlantCardVertical = ({name, photo, ...rest}: Props) => {
  return (
    <RectButton 
        style={styles.container}
        {...rest}>

        <Image source={{uri: photo}} style={styles.image} />

        <Text style={styles.text}>
            {name}
        </Text>
    </RectButton>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: "45%",
        backgroundColor: colors.shape,
        borderRadius: 20,
        paddingVertical: 10,
        alignItems: 'center',
        margin: 10
    },
    text: {
        color: colors.green_dark,
        fontFamily: fonts.heading,
        textAlign: 'center'
    },
    image: {
        height: 100,
        width: '100%',
        resizeMode: 'contain'
    }
})