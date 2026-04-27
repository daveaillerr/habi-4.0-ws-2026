import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';

export type RootStackParamList = {
  Loading: undefined;
  Login: undefined;
  Dashboard: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Simulate app initialization (splash screen duration)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#000000' },
        }}
      >
        {isLoading ? (
          <Stack.Screen name="Loading" component={LoadingScreen} />
        ) : isLoggedIn ? (
          <Stack.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={{ animationEnabled: false }}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            listeners={{
              tabPress: (e) => {
                e.preventDefault();
              },
            }}
            options={{
              animationEnabled: isLoading === false,
            }}
            initialParams={{ setIsLoggedIn }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
