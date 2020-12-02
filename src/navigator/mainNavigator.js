import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile180998Navigator from '../features/UserProfile180998/navigator';
import Tutorial180997Navigator from '../features/Tutorial180997/navigator';
import NotificationList180969Navigator from '../features/NotificationList180969/navigator';
import Settings180968Navigator from '../features/Settings180968/navigator';
import Settings180960Navigator from '../features/Settings180960/navigator';
import UserProfile180958Navigator from '../features/UserProfile180958/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile180998: { screen: UserProfile180998Navigator },
Tutorial180997: { screen: Tutorial180997Navigator },
NotificationList180969: { screen: NotificationList180969Navigator },
Settings180968: { screen: Settings180968Navigator },
Settings180960: { screen: Settings180960Navigator },
UserProfile180958: { screen: UserProfile180958Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
