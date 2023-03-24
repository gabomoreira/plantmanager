import { Text, Image, StyleSheet, View } from "react-native"
import { RectButton, RectButtonProps } from "react-native-gesture-handler"
import colors from "../styles/colors"
import fonts from "../styles/fonts"

interface Props extends RectButtonProps {
    name: string
    photo: string
    hour: string
}

export const PlantCardHorizontal = ({name, photo, hour, ...rest}: Props) => {
  return (
    <RectButton 
        style={styles.container}
        {...rest}>

        <Image source={{uri: photo}} style={styles.image} />

        <Text style={styles.text}>
            {name}
        </Text>

        <View style={styles.details}>
            <Text style={styles.timeLabel}>
                Regar às
            </Text>
            <Text style={styles.time}>
                {hour}
            </Text>
        </View>
    </RectButton>
  )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 10,
        paddingVertical: 25,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.shape,
        marginVertical: 5,
    },
    text: {
        flex: 1,
        fontSize: 17,
        marginLeft: 10,
        fontFamily: fonts.heading,
        textAlign: 'left',
        
    },
    image: {
        height: 50,
        width: 50,
        resizeMode: 'contain'
    },
    details: {
        alignItems: 'flex-end'
    },
    timeLabel: {
        fontSize: 16,
        fontFamily: fonts.text,
        color: colors.body_light
    },
    time: {
        marginTop: 5,
        fontSize: 16,
        fontFamily: fonts.heading,
        color: colors.body_dark
    }
})