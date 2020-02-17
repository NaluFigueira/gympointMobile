import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HelpOrders from '~/pages/HelpOrders';
import Answers from '~/pages/Answers';
import NewHelpOrder from '~/pages/NewHelpOrder';
import LogoTitle from '~/components/LogoTitle';

const HelpOrderStack = createStackNavigator();

export default function HelpOrdersHome() {
  return (
    <HelpOrderStack.Navigator
      initialRouteName="HelpOrders"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitle: props => <LogoTitle {...props} />,
      }}>
      <HelpOrderStack.Screen name="HelpOrders" component={HelpOrders} />
      <HelpOrderStack.Screen name="Answers" component={Answers} />
      <HelpOrderStack.Screen name="NewHelpOrder" component={NewHelpOrder} />
    </HelpOrderStack.Navigator>
  );
}
