import { Feather } from '@expo/vector-icons';
import { Text, Image, StyleSheet, View, Animated } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { PlantProps } from '../@types/Plant';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface Props extends RectButtonProps {
  name: string;
  photo: string;
  hour: string;
  handleRemove: () => void;
}

export const PlantCardHorizontal = ({
  name,
  photo,
  hour,
  handleRemove,
  ...rest
}: Props) => {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <RectButton style={styles.buttonRemove} onPress={handleRemove}>
              <Feather name="trash" size={32} color={colors.white} />
            </RectButton>
          </View>
        </Animated.View>
      )}
    >
      <RectButton style={styles.container} {...rest}>
        <Image source={{ uri: photo }} style={styles.image} />

        <Text style={styles.text}>{name}</Text>

        <View style={styles.details}>
          <Text style={styles.timeLabel}>Regar às</Text>
          <Text style={styles.time}>{hour}</Text>
        </View>
      </RectButton>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
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
    resizeMode: 'contain',
  },
  details: {
    alignItems: 'flex-end',
  },
  timeLabel: {
    fontSize: 16,
    fontFamily: fonts.text,
    color: colors.body_light,
  },
  time: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: fonts.heading,
    color: colors.body_dark,
  },
  buttonRemove: {
    width: 100,
    height: 85,
    backgroundColor: colors.red,
    marginTop: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    right: 20,
    paddingLeft: 15,
  },
});
