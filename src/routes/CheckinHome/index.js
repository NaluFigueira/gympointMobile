import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Checkins from '~/pages/Checkins';
import LogoTitle from '~/components/LogoTitle';

const CheckinStack = createStackNavigator();

export default function CheckinsHome() {
  return (
    <CheckinStack.Navigator
      initialRouteName="Checkins"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitle: props => <LogoTitle {...props} />,
      }}>
      <CheckinStack.Screen name="Checkins" component={Checkins} />
    </CheckinStack.Navigator>
  );
}
