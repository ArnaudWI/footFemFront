import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Ionicons, MatterialCommunityIcons} from '@expo/vector-icons';

// imports de mes composants de navigation
import {createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';

// imports de mes screens au sein de mon composant App et de ma navigation
import RencontresScreen from '../Screens/RencontresScreen';
import ClassementScreen from '../Screens/ClassementScreen';
import FavorisScreen from '../Screens/FavorisScreen';
import EquipesScreen from '../Screens/EquipesScreen';
import StatsScreensList from '../Screens/Equipes/StatsScreensList';
import MatchScreen from '../Screens/MatchScreen';

// création de ma bottom navigation
const MainBottomNavigator = createBottomTabNavigator({
  Rencontres: RencontresScreen,
  Classement: ClassementScreen,
  Favoris: FavorisScreen,
  Equipes: EquipesScreen
}, {
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ({focused, horizontal, tintColor}) => {
      var iconName;
      var outline = (focused)
        ? ''
        : ''
        // : '-outline';
      if (navigation.state.routeName == 'Rencontres') {
        iconName = 'ios-calendar';
      } else if (navigation.state.routeName == 'Classement') {
        iconName = 'ios-podium';
      } else if (navigation.state.routeName == 'Favoris') {
        iconName = 'ios-star';
      } else if (navigation.state.routeName == 'Equipes') {
        iconName = 'ios-shirt';
      }

      return <Ionicons name={iconName + outline} size={25} color={tintColor}/>;
    }
  }),
  tabBarOptions: {
    activeTintColor: '#FAC05E',
    inactiveTintColor: '#FFFFFF',
    showLabel: false,
    style: {
      backgroundColor: '#4B85EA',
    }
  }
});



// Création de ma navigation globale qui content à la fois mes pages non contenues dans la bottom navigation et les pages de la bottom navigation
var StackNavigator = createStackNavigator({
  MainBottomNavigator: MainBottomNavigator,
  StatsScreensList : StatsScreensList,
  Match : MatchScreen,
  JourneePrededant: MatchScreen
  // MainTopNavigator: MainTopNavigator
}, {headerMode: 'none'})

export default Navigation = createAppContainer(StackNavigator);
