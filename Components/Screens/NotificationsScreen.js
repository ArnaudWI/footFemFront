import React, { Component } from 'react';
import {View, ScrollView, StyleSheet, Text, Image} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Switch } from 'native-base';

import HeaderScreen from '../Screens/HeaderScreen';

export default class NotificationsScreen extends React.Component {

  state = {
    switchBut: false,
    switchMitemps: false,
    switchCompo: false,
    switchScore: false
  }

  render() {

    return (

      <View style={styles.container}>
        <HeaderScreen title={"Notifications"}/>

        <ScrollView>

        <Grid>
          <Col style={styles.colImage}>
            <Image style={styles.image} source={require('../../public/logo/logo_fcm.png')}/>
          </Col>
          <Col style={styles.colTeam}>
            <Text style={styles.team}>Metz</Text>
          </Col>
        </Grid>

        <Grid>
          <Col style={styles.colVide}></Col>
          <Col style={styles.colText}>
            <Text style={styles.textAlert}>Buts</Text>
          </Col>
          <Col style={styles.colToggle}>
            <Switch onChange= {()=>this.setState({switchBut: !this.state.switchBut})} style={styles.toggle} value={this.state.switchBut} />
          </Col>
        </Grid>

        <Grid>
          <Col style={styles.colVide}></Col>
          <Col style={styles.colText}>
            <Text style={styles.textAlert}>Début/Fin de période</Text>
          </Col>
          <Col style={styles.colToggle}>
            <Switch onChange= {()=>this.setState({switchMitemps: !this.state.switchMitemps})} style={styles.toggle} value={this.state.switchMitemps} />
          </Col>
        </Grid>

        <Grid>
          <Col style={styles.colVide}></Col>
          <Col style={styles.colText}>
            <Text style={styles.textAlert}>Composition</Text>
          </Col>
          <Col style={styles.colToggle}>
            <Switch onChange= {()=>this.setState({switchCompo: !this.state.switchCompo})} style={styles.toggle} value={this.state.switchCompo} />
          </Col>
        </Grid>

        <Grid>
          <Col style={styles.colVide}></Col>
          <Col style={styles.colText}>
            <Text style={styles.textAlert}>Score Final</Text>
          </Col>
          <Col style={styles.colToggle}>
            <Switch onChange= {()=>this.setState({switchScore: !this.state.switchScore})} style={styles.toggle} value={this.state.switchScore} />
          </Col>
        </Grid>
      </ScrollView>

      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7EB"
  },
  image: {
    width: 35,
    height: 35,
    margin: 10,
    marginLeft: 15,
    // backgroundColor: 'green',
  },
  team: {
    textAlign: 'left',
    fontSize: 20
  },
  colImage: {
    width: '18%',
    // height: '12%',
    borderBottomWidth: 1,
    borderColor: '#D3D3D3',
    marginBottom: 20
  },
  colVide: {
    width: '18%',
  },
  colTeam: {
    width: '82%',
    // height: '12%',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#D3D3D3',
    marginBottom: 20
  },
  colText: {
    width: '52%',
    // height: '60%',
    // backgroundColor: 'yellow',
    justifyContent: 'center',
  },
  colToggle: {
    width: '30%',
    // height: '60%',
    // backgroundColor: 'red',
    justifyContent: 'center'
  },
  toggle: {
    // backgroundColor: 'green',
    marginTop: 30,
    marginRight: 40
  },
  textAlert: {
    fontSize: 15,
    paddingTop: 30,
    // paddingLeft: 40
  }
})
