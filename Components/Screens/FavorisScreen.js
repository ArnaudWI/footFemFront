import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import HeaderScreen from '../Screens/HeaderScreen';

export default class FavorisScreen extends React.Component {



    render() {
      return (

            <View style={styles.container}>
              <HeaderScreen title={'Favoris'}/>
              <ScrollView>
                <Text>Favoris</Text>
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
