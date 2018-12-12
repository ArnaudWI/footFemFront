import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';


export default class RencontresScreen extends React.Component {


    render() {
      return (

            <View style={styles.container}>
              <Header/>
              <ScrollView>
                <Rencontres/>
              </ScrollView>
            </View>
      );
    };
  };

  class Header extends React.Component {
    render() {
      return (
        <View style={styles.header}>
          <Text style={styles.headertitle}>Rencontres</Text>
        </View>
      );
    };
  };

  class Rencontres extends React.Component {
    render() {
      return (



              <View style={styles.match}>

              <Text style={styles.homeTeamTitle}>FC Girondins de Bordeaux</Text>
              <Image
                style={{width: 30, height: 30, margin: 10}}
                source={{uri: 'http://www.statsfootofeminin.fr/img/logo_gbfc.png'}}
              />
                <Text style={styles.goalTitle}>2</Text>
                <Text style={styles.goalTitle}>-</Text>
                <Text style={styles.goalTitle}>1</Text>
                <Image
                  style={{width: 30, height: 30, margin: 10}}
                  source={{uri: 'http://www.statsfootofeminin.fr/img/logo_ol.png'}}
                />
              <Text style={styles.awayTeamTitle}>Olympique Lyonnais</Text>

            </View>

      );
    };
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      flex: 0.15,
      backgroundColor: '#4B85EA',
      width: '100%',
    },
    headertitle: {
      color: "#FFFFFF",
      textAlign: 'center',
      fontSize: 25,
      fontWeight: 'bold',
      marginTop: 25
    },
    homeTeamTitle: {
      color: '#393E41',
      fontSize: 14,
      fontWeight: 'bold',
      width: '25%',
      textAlign: 'right',
    },
    awayTeamTitle: {
      color: '#393E41',
      fontSize: 14,
      fontWeight: 'bold',
      width: '25%',
      textAlign: 'left',
    },
    match: {
      borderTopWidth: 1,
      borderColor: '#393E41',
      backgroundColor: '#F6F7EB',
      height: 60,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    goalTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      margin: 2,
    },
  });
