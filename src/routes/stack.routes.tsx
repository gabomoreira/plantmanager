import { createStackNavigator } from "@react-navigation/stack";

import { UserIdentification } from "../screens/UserIdentification";
import { Confirmation } from "../screens/Confirmation";
import { Welcome } from "../screens/Welcome";

import colors from "../styles/colors";
import React from "react";
import { PlantSelect } from "../screens/PlantSelect";

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
            <Screen name='PlantSelect' component={PlantSelect} />
        </Navigator>
    )
}

export default StackRoutes