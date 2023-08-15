import type {DrawerNavigationProp} from '@react-navigation/drawer';

export type ILoggedDrawer = {
  Dashboard: undefined;
  Maps: undefined;
  Membros: undefined;
  Vinicius: undefined;
  Michelle: undefined;
  Thiago: undefined;
};

export type LoggedDrawerRouteProps = DrawerNavigationProp<ILoggedDrawer>;
