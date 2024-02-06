import 'react-native-gesture-handler';
import React, {FC, useEffect} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {StyledSafeAreaViewComp} from '@simple/StyledSafeAreaViewComp';
import SplashScreen from 'react-native-splash-screen';
import {SideBarNavigation} from '@src/Navigation/SideBarNavigation.tsx';

const App: FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StyledSafeAreaViewComp flex={1}>
        <SideBarNavigation />
      </StyledSafeAreaViewComp>
    </GestureHandlerRootView>
  );
};

export default App;
