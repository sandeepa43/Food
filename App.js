import { createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import { createStackNavigator } from 'react-navigation-stack'
import ResultsScreenShow from './src/screens/ResultsScreenShow';
const navigator = createStackNavigator({
  Search:SearchScreen,
  ResultsShow: ResultsScreenShow
},{
  initialRouteName: 'Search',
  defaultNavigationOptions:{
    title:'Food Hunt'
  }
});
export default createAppContainer(navigator);