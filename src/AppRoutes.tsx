import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {useSelector} from 'react-redux';

import {getIsAuthenticated} from 'modules/auth/auth.reducer';
import LoginScreen from 'modules/auth/screens/Login.screen';
import ProfileScreen from 'modules/profile/screens/Profile.screen';
import DrawerCustom from 'modules/profile/components/DrawerCustom';

import {Routes} from './Routes';
import NewsScreen from 'modules/news/screens/News.screen';
import SettingsScreen from 'modules/profile/screens/Settings.screen';
import ArticleScreen from 'modules/news/screens/Article.screen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Modal = createStackNavigator();

const ArticleModal = () => (
  <Modal.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      ...TransitionPresets.ModalPresentationIOS,
    }}
    mode="modal">
    <Drawer.Screen name={Routes.News} component={NewsScreen} />
    <Drawer.Screen name={Routes.Article} component={ArticleScreen} />
  </Modal.Navigator>
);

const AppRoutes = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <Drawer.Navigator
          initialRouteName={Routes.Profile}
          hideStatusBar
          drawerContent={(props) => (
            <DrawerCustom key={'drawer-key'} {...props} />
          )}
          screenOptions={{
            headerShown: false,
          }}>
          <Drawer.Screen name={Routes.Profile} component={ProfileScreen} />
          <Drawer.Screen name={Routes.Settings} component={SettingsScreen} />
          <Drawer.Screen name={Routes.News} component={ArticleModal} />
        </Drawer.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName={Routes.Login}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name={Routes.Login} component={LoginScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppRoutes;
