import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import ChartVictoires from './ChartVictoires';
import ChartNuls from './ChartNuls';
import ChartDefaites from './ChartDefaites';

export default class EffectifsScreen extends React.Component {


  render() {


    return (

          <View style={styles.container}>
            <ScrollView>
              <Text>Effectifs équipe</Text>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 5
              }}>
              <ChartVictoires />
              <ChartNuls />
              <ChartDefaites />
              </View>
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
