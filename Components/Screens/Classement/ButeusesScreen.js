import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

export default class ButeusesScreen extends React.Component {


  render() {


    return (

          <View style={styles.container}>
            <ScrollView>
              <Text>Classement buteuses</Text>
            </ScrollView>
          </View>
    );
  };
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});