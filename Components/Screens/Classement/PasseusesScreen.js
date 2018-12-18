import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {Ionicons, MatterialCommunityIcons} from '@expo/vector-icons';

export default class PasseusesScreen extends React.Component {

  render() {
    var players = [
      {
        name: "Kadidiatou Diani",
        passes: 9,
        teamId: 1667
      },
      {
        name: "Amel Majri",
        passes: 8,
        teamId: 1674
      },
      {
        name: "Daphne Corboz",
        passes: 7,
        teamId: 1677
      },
      {
        name: "Shanice van de Sanden",
        passes: 7,
        teamId: 1674
      },
      {
        name: "Ada Hegerberg",
        passes: 6,
        teamId: 1674
      },
      {
        name: "Gaëtane Thiney",
        passes: 6,
        teamId: 1676
      },
      {
        name: "Shuang Wang",
        passes: 6,
        teamId: 1667
      },
      {
        name: "Isobel Christiansen",
        passes: 5,
        teamId: 1674
      },
      {
        name: "Selma Bacha",
        passes: 4,
        teamId: 1674
      },
      {
        name: "Kenza Dali",
        passes: 4,
        teamId: 1679
      },
      {
        name: "Dzsenifer Marozsán",
        passes: 4,
        teamId: 1674
      },
      {
        name: "Ugochi Desire Oparanozie",
        passes: 4,
        teamId: 1672
      },
      {
        name: "Mathilde Bourdieu",
        passes: 3,
        teamId: 1676
      },
      {
        name: "Janice Cayman",
        passes: 3,
        teamId: 1675
      },
      {
        name: "Maëlle Garbino",
        passes: 3,
        teamId: 1671
      },
    ]


    var passeuses = players.map((passeuse, i) =>

      <ClassementPasseusesContent
        key={i}
        position={i}
        name={passeuse.name}
        passes={passeuse.passes}
        logo={passeuse.teamId}
      />
    )

    return (

          <View style={styles.container}>
            <ClassementPasseusesIndication/>
            <ScrollView>
              {passeuses}
            </ScrollView>
          </View>
    );
  };
};

class ClassementPasseusesIndication extends React.Component {

  render() {

    return (
          <Grid style={styles.row}>
            <Col style={styles.colIndicationPasseuses}>
              <Text style={styles.textIndicationPasseuses}>Top Passeuses</Text>
            </Col>
            <Col style={styles.colIndication}>
              <Ionicons name="md-thumbs-up" size={25} color="#393E41" />
            </Col>
          </Grid>
    );
  };
};

class ClassementPasseusesContent extends React.Component {

  render() {



    return (
      <Grid style={styles.row}>
        <Col style={styles.colLeftClassement}>
          <Text>
            {this.props.position + 1}
          </Text>
        </Col>
        <Col style={styles.colLogoTeam}>
          {this.props.logo === 1674 ? <Image style={styles.logoTeam} source={require('../../../public/logo/logo_ol.png')}/> :
          this.props.logo === 1667 ? <Image style={styles.logoTeam} source={require('../../../public/logo/logo_psg.png')}/> :
          this.props.logo === 1675 ? <Image style={styles.logoTeam} source={require('../../../public/logo/logo_mhsc.png')}/> :
          this.props.logo === 1676 ? <Image style={styles.logoTeam} source={require('../../../public/logo/logo_pfc.png')}/> :
          this.props.logo === 1671 ? <Image style={styles.logoTeam} source={require('../../../public/logo/logo_gbfc.png')}/> :
          this.props.logo === 1677 ? <Image style={styles.logoTeam} source={require('../../../public/logo/logo_fleury.png')}/> :
          this.props.logo === 1672 ? <Image style={styles.logoTeam} source={require('../../../public/logo/logo_eag.png')}/> :
          this.props.logo === 1679 ? <Image style={styles.logoTeam} source={require('../../../public/logo/logo_dfco.png')}/> :
          this.props.logo === 1669 ? <Image style={styles.logoTeam} source={require('../../../public/logo/logo_asjs.png')}/> :
          this.props.logo === 1678 ? <Image style={styles.logoTeam} source={require('../../../public/logo/logo_losc.png')}/> :
          this.props.logo === 1664 ? <Image style={styles.logoTeam} source={require('../../../public/logo/logo_fcm.png')}/> :
          this.props.logo === 1668 ? <Image style={styles.logoTeam} source={require('../../../public/logo/logo_raf_2017.png')}/> :
          <Image style={styles.logoTeam} source={require('../../../public/logo/logo_ol.png')}/>}
        </Col>
        <Col style={styles.colNamePasseuses}>
          <Text style={styles.textPasseuses}>{this.props.name}</Text>
        </Col>
        <Col style={styles.colIndication}>
          <Text style={styles.textPasses}>{this.props.passes}</Text>
        </Col>
      </Grid>
    );
  };
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7EB'
  },
  colIndicationPasseuses: {
    width: '80%',
    justifyContent: 'center',
  },
  textIndicationPasseuses: {
    marginLeft: 40,
    fontWeight: 'bold',
    fontSize: 13
  },
  colIndication: {
    borderLeftWidth: 0.5,
    borderColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    borderBottomWidth: 0.5,
    borderColor: 'lightgrey',
    marginTop: 0,
    height: 50,
    backgroundColor: '#F6F7EB'
  },
  colLeftClassement: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '5%'
  },
  colNamePasseuses: {
    justifyContent: 'center',
    width: '65%'
  },
  colLogoTeam: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '10%'
  },
  logoTeam: {
    height: 20,
    width: 20
  },
  textPasseuses: {
    fontSize: 18,
  },
  textPasses: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
