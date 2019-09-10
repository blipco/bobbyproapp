import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ResumeScreen from '../screens/ResumeScreen';
import ProjectsScreen from '../screens/ProjectsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const ResumeStack = createStackNavigator(
  {
    Resume: ResumeScreen,
  },
  config
);

ResumeStack.navigationOptions = {
  tabBarLabel: 'Resume',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

ResumeStack.path = '';

const ProjectsStack = createStackNavigator(
  {
    Projects: ProjectsScreen,
  },
  config
);

ProjectsStack.navigationOptions = {
  tabBarLabel: 'Projects',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

ProjectsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ResumeStack,
  ProjectsStack,
});

tabNavigator.path = '';

export default tabNavigator;
