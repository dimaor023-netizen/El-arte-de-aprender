import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importar pantallas (se crearán después)
// import HomeScreen from './screens/HomeScreen';
// import LessonScreen from './screens/LessonScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          'Ionicons': require('./assets/fonts/Ionicons.ttf'),
        });
        setFontsLoaded(true);
      } catch (error) {
        console.error('Error loading fonts:', error);
      }
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        {/* Placeholder mientras se cargan las fuentes */}
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Las pantallas se agregarán aquí */}
        {/* <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'El Arte de Aprender' }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
