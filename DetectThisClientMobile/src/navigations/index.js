import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

import Dashboard from '../pages/Dashboard';

const MainNavigator = createBottomTabNavigator({
  Dashboard: {
    screen: Dashboard,
  },
},
{
  initialRouteName: 'Dashboard'
},);

export default AppContainer = createAppContainer(MainNavigator);