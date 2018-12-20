import React, { Component } from 'react';
import {View, ScrollView, StyleSheet, Text, Image} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Switch } from 'native-base';

import {connect} from 'react-redux';

import HeaderScreen from '../Screens/HeaderScreen';

class NotificationsScreen extends React.Component {

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

      {/* {
        this.state.fontLoaded ? ( */}

            <ScrollView>

              <Grid>
                <Col style={styles.colImage}>
                  {
                  this.props.goNotif.id === 1667 ? <Image style={styles.image} source={require('../../public/logo/logo_psg.png')}/> :
                  this.props.goNotif.id === 1674 ? <Image style={styles.image} source={require('../../public/logo/logo_ol.png')}/> :
                  this.props.goNotif.id === 1675 ? <Image style={styles.image} source={require('../../public/logo/logo_mhsc.png')}/> :
                  this.props.goNotif.id === 1676 ? <Image style={styles.image} source={require('../../public/logo/logo_pfc.png')}/> :
                  this.props.goNotif.id === 1671 ? <Image style={styles.image} source={require('../../public/logo/logo_gbfc.png')}/> :
                  this.props.goNotif.id === 1677 ? <Image style={styles.image} source={require('../../public/logo/logo_fleury.png')}/> :
                  this.props.goNotif.id === 1672 ? <Image style={styles.image} source={require('../../public/logo/logo_eag.png')}/> :
                  this.props.goNotif.id === 1679 ? <Image style={styles.image} source={require('../../public/logo/logo_dfco.png')}/> :
                  this.props.goNotif.id === 1669 ? <Image style={styles.image} source={require('../../public/logo/logo_asjs.png')}/> :
                  this.props.goNotif.id === 1678 ? <Image style={styles.image} source={require('../../public/logo/logo_losc.png')}/> :
                  this.props.goNotif.id === 1664 ? <Image style={styles.image} source={require('../../public/logo/logo_fcm.png')}/> :
                  this.props.goNotif.id === 1668 ? <Image style={styles.image} source={require('../../public/logo/logo_raf_2017.png')}/> :
                  <Image style={styles.image} source={require('../../public/logo/logo_raf_2017.png')}/>
                  }
                  {/* <Image style={styles.image} source={require('../../public/logo/logo_fcm.png')}/> */}
                </Col>
                <Col style={styles.colTeam}>
                  <Text style={styles.team}>{this.props.goNotif.teamName.slice(0, -2)}</Text>
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

        {/* ) : null
      } */}

    </View>
    );
  }
}

function mapStateToProps(state) {

  return {
    goNotif: state.goNotif,
  };
};

export default connect(mapStateToProps, null)(NotificationsScreen);


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
    height: '40%',
    // backgroundColor: 'red',
    marginTop: 20,
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
