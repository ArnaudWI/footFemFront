import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';


export default class FavorisScreen extends React.Component {



    render() {
      return (

            <View style={styles.container}>
              <Header/>
              <ScrollView>
                <Text>Favoris</Text>
              </ScrollView>
            </View>
      );
    };
  };

  class Header extends React.Component {
    render() {
      return (
        <View style={styles.header}>
          <Text style={styles.headertitle}>Favoris</Text>
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
    }
  });
