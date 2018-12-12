import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

export default class PasseusesScreen extends React.Component {


  render() {


    return (

          <View style={styles.container}>
            <ScrollView>
              <Text>Classement Passeuses</Text>
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
