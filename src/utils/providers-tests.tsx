import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import {createStackNavigator} from '@react-navigation/stack'

interface Props {
    children: React.ReactNode
}

const ProvidersTests = ({children}: Props) => {
  return (
    <NavigationContainer>
        {children}
    </NavigationContainer>
  )
}

export default ProvidersTests