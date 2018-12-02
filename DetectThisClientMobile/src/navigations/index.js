import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import Dashboard from '../pages/Dashboard';
import Result from '../pages/Result';

const TabNavigator = createBottomTabNavigator({
  Dashboard: {
    screen: Dashboard,
  },
},
{
  initialRouteName: 'Dashboard'
},);

const StackNavigator = createStackNavigator({
  Tabs: {
    screen: TabNavigator,
    path: 'dashboard',
    navigationOptions: () => ({
      header: null
    })
  },
  Result: {
    screen: Result,
    path: 'result',
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.detectionType} Detection Result`
    })
  },
},);

export default AppContainer = createAppContainer(StackNavigator);