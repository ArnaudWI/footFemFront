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

class HeaderToggle extends React.Component {
  state = {
    switchValue: false
  };

  _handleToggleSwitch = () => this.setState(state => ({
    switchValue: !state.switchValue
  }));
  render() {
    return (<View style={styles.header}>
      <Grid>
        <Col style={{
            width: '20%'
          }}></Col>
        <Col>
          <Text style={styles.headertitle}>Rencontres</Text>
        </Col>
        <Col style={styles.toggleSwitch}>
          <Text style={{color: "#FFFFFF", fontSize: 20}}>Live</Text>
          <Switch onValueChange={this._handleToggleSwitch} value={this.state.switchValue}/>
        </Col>
      </Grid>
    </View>);
  };
};
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
