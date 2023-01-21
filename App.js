import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';

import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={({navigation}) => ({
              title: '',
              //headerShown: false,
              headerStyle: {
                height: 150,
                backgroundColor: 'white',
                shadowColor: '#000',
                elevation: 25,
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
              },
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },
});

export default App;
