import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import { MyPlants } from '../screens/MyPlants';
import { PlantSelect } from '../screens/PlantSelect';
import colors from '../styles/colors';

const {Navigator, Screen    } = createBottomTabNavigator();

function AuthRoutes() {
  return (
    <Navigator
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: colors.green,
            tabBarInactiveTintColor: colors.heading,
            tabBarLabelPosition: 'beside-icon',
            tabBarStyle: {
                paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                height: 88
            }
        }}
    >
      <Screen 
        name="Nova Planta" 
        component={PlantSelect}
        options={{
            tabBarIcon: (({size, color}) => (
                <MaterialIcons 
                    name='add-circle-outline'
                    size={size}
                    color={color}
                />
            ))
        }}
        />
      <Screen 
        name="Minhas Plantas" 
        component={MyPlants}
        options={{
            tabBarIcon: (({size, color}) => (
                <MaterialIcons 
                    name='format-list-bulleted'
                    size={size}
                    color={color}
                />
            ))
        }}
        />
    </Navigator>
  );
}

export default AuthRoutes