import {
  DrawerNavigationOptions,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {Dashboard, Maps, Membros, Michelle, Thiago, Vinicius} from '@screens';
import {$COLORS} from '@utils';

import {CustomDrawerContent} from './components';
import {ILoggedDrawer} from './types';

const Drawer = createDrawerNavigator<ILoggedDrawer>();

const renderIcon = (color: string, name: string) => (
  <Icon name={name} color={color} size={16} />
);

const drawerOptions: DrawerNavigationOptions = {
  headerTintColor: $COLORS.white,
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: $COLORS.primary,
  },
  drawerActiveTintColor: $COLORS.primary,
  drawerType: 'front',
};

export function LoggedDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      screenOptions={drawerOptions}>
      <Drawer.Screen
        name="Dashboard"
        options={{
          title: 'Início',
          headerTitleAlign: 'center',
          headerTitle: 'FIAP',
          drawerIcon: ({color}) => renderIcon(color, 'home'),
        }}
        component={Dashboard}
      />
      <Drawer.Screen
        name="Maps"
        options={{
          title: 'Mapas',
          headerTitle: 'Mapas',
          drawerIcon: ({color}) => renderIcon(color, 'map'),
        }}
        component={Maps}
      />
      <Drawer.Screen
        name="Membros"
        component={Membros}
        options={{
          title: 'Membros',
          headerTitle: 'Membros',
          drawerIcon: ({color}) => renderIcon(color, 'users'),
        }}
      />
      <Drawer.Screen
        name="Vinicius"
        component={Vinicius}
        options={{
          title: 'Vinícius F. Carvalho',
          headerTitle: 'Vinícius F. Carvalho',
          drawerIcon: ({color}) => renderIcon(color, 'user'),
          drawerItemStyle: { marginLeft: 30 },
        }}
      />
      <Drawer.Screen
        name="Michelle"
        component={Michelle}
        options={{
          title: 'Michelle Sinibaldi',
          headerTitle: 'Michelle Sinibaldi',
          drawerIcon: ({color}) => renderIcon(color, 'user'),
          drawerItemStyle: { marginLeft: 30 },
        }}
      />
      <Drawer.Screen
        name="Thiago"
        component={Thiago}
        options={{
          title: 'Thiago Malcher',
          headerTitle: 'Thiago Malcher',
          drawerIcon: ({color}) => renderIcon(color, 'user'),
          drawerItemStyle: { marginLeft: 30 },
        }}
      />
    </Drawer.Navigator>
  );
}
