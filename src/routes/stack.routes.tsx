import { createStackNavigator } from "@react-navigation/stack";

import { Confirmation } from "../screens/Confirmation";
import { UserIdentification } from "../screens/UserIdentification";
import { Welcome } from "../screens/Welcome";

import React from "react";
import { MyPlants } from "../screens/MyPlants";
import { PlantSave } from "../screens/PlantSave";
import colors from "../styles/colors";
import AuthRoutes from "./tab.routes";

const {Navigator, Screen} = createStackNavigator()

const StackRoutes: React.FC = () => {
    
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: colors.white
                }
            }}
        >
            <Screen name='Welcome' component={Welcome} />
            <Screen name='UserIdentification' component={UserIdentification} />
            <Screen name='Confirmation' component={Confirmation} />
            <Screen name='PlantSelect' component={AuthRoutes} />
            <Screen name='PlantSave' component={PlantSave} />
            <Screen name='MyPlants' component={AuthRoutes} />
        </Navigator>
    )
}

export default StackRoutes