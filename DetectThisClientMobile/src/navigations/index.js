import { createAppContainer, createStackNavigator } from 'react-navigation';

import Dashboard from '../pages/Dashboard';
import Result from '../pages/Result';

const StackNavigator = createStackNavigator({
  Dashboard: {
    screen: Dashboard,
    path: 'dashboard',
    navigationOptions: () => ({
      header: null
    }),
  },
  Result: {
    screen: Result,
    path: 'result',
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.detectionType} Detection Result`,
    }),
  },
},);

export default AppContainer = createAppContainer(StackNavigator);