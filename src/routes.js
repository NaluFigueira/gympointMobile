import * as React from 'react';
import { Image, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Sign from '~/pages/Sign';
import Checkins from '~/pages/Checkins';
import HelpOrders from '~/pages/HelpOrders';
import Answers from '~/pages/Answers';
import NewHelpOrder from '~/pages/NewHelpOrder';

const Stack = createStackNavigator();

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
      <Stack.Navigator
        initialRouteName="Sign"
        screenOptions={{
          headerTitleAlign: 'center',
          headerTitle: props => <LogoTitle {...props} />,
        }}>
        <Stack.Screen
          name="Sign"
          component={Sign}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Checkins" component={Checkins} />
        <Stack.Screen name="HelpOrders" component={HelpOrders} />
        <Stack.Screen name="Answers" component={Answers} />
        <Stack.Screen name="NewHelpOrder " component={NewHelpOrder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
