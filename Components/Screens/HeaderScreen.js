import React, { Component } from 'react';
import {StyleSheet, View, Text, Switch} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Center } from 'native-base';

export default class HeaderScreen extends Component {

  render() {

    return (
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{this.props.title}</Text>
        </View>
    );
  }
}

  const styles = StyleSheet.create({
    header: {
      height: 80,
      backgroundColor: '#4B85EA',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'row'
    },
    headerTitle: {
      color: "#FFFFFF",
      textAlign: 'center',
      fontSize: 25,
      fontWeight: 'bold'
    }
  });
