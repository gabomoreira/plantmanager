import { useFonts,Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';
import { Text } from 'react-native';
import { Confirmation } from './src/screens/Confirmation';
import { UserIdentification } from './src/screens/UserIdentification';
import { Welcome } from './src/screens/Welcome';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
   <Confirmation />
  );
}
