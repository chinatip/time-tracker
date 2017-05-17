import { createRouter } from '@expo/ex-navigation';

import TimerScreen from '../screens/TimerScreen';
import GoalScreen from '../screens/GoalScreen';
import DashboardScreen from '../screens/DashboardScreen';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  timer: () => TimerScreen,
  dashboard: () => DashboardScreen,
  goal: () => GoalScreen,
  rootNavigation: () => RootNavigation,
}));
