import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import HeaderScreen from '../Screens/HeaderScreen';

export default class EquipesScreen extends React.Component {



    render() {
      return (

            <View style={styles.container}>
              <HeaderScreen title="Equipes"/>
              <ScrollView>
                <Text>Equipes</Text>
              </ScrollView>
            </View>
      );
    };
  };

  class Header extends React.Component {
    render() {
      return (
        <View style={styles.header}>
          <Text style={styles.headertitle}>Equipes</Text>
        </View>
      );
    };
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  });
