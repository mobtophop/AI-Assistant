import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {VoiceAssistant} from '@src/screens/VoiceRecognition/VoiceAssistant.tsx';

const Drawer = createDrawerNavigator();

export const SideBarNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={'VoiceAssistant'}
        backBehavior={'history'}>
        <Drawer.Screen
          name="VoiceAssistant"
          component={VoiceAssistant}
          options={{headerShown: false}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
