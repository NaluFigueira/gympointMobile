import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import CheckinHome from '~/routes/CheckinHome';
import HelpOrderHome from '~/routes/HelpOrderHome';

export default function Home() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === 'Check-ins') {
            iconName = 'check-circle';
          } else if (route.name === 'Pedir ajuda') {
            iconName = 'help-outline';
          }
          return (
            <Icon
              name={iconName}
              size={20}
              color={focused ? '#ee4e62' : '#666'}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#ee4e62',
        inactiveTintColor: '#666',
        labelStyle: { fontSize: 14 },
        adaptive: true,
        tabStyle: {
          borderTopColor: '#ddd',
          borderTopWidth: 1,
        },
      }}>
      <Tab.Screen name="Check-ins" component={CheckinHome} />
      <Tab.Screen name="Pedir ajuda" component={HelpOrderHome} />
    </Tab.Navigator>
  );
}
