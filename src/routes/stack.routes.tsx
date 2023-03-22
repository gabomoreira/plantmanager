import { createStackNavigator } from "@react-navigation/stack";

import { UserIdentification } from "../screens/UserIdentification";
import { Confirmation } from "../screens/Confirmation";
import { Welcome } from "../screens/Welcome";

import colors from "../styles/colors";
import React from "react";

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
        </Navigator>
    )
}

export default StackRoutes