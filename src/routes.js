import * as React from 'react';
import { Image, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '~/pages/Home';
import Sign from '~/pages/Sign';
import Answers from '~/pages/Answers';
import NewHelpOrder from '~/pages/NewHelpOrder';

const Stack = createStackNavigator();
const Auth = true;

function LogoTitle() {
  return (
    <Image
      resizeMode="contain"
      style={{ height: '80%' }}
      source={require('~/assets/sideLogo.png')}
    />
  );
}

function Routes() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      {Auth ? (
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTitleAlign: 'center',
            headerTitle: props => <LogoTitle {...props} />,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Answers" component={Answers} />
          <Stack.Screen name="NewHelpOrder " component={NewHelpOrder} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Sign">
          <Stack.Screen
            name="Sign"
            component={Sign}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default Routes;
