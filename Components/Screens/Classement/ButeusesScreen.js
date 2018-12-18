import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {Ionicons, MatterialCommunityIcons} from '@expo/vector-icons';

export default class ButeusesScreen extends React.Component {

  render() {
    var players = [
      {
        name: "Marie-Antoinette Katoto",
        goals: 15,
        teamId: 1667
      },
      {
        name: "Ada Hegerberg",
        goals: 15,
        teamId: 1674
      },
      {
        name: "Linda Sallstrom",
        goals: 9,
        teamId: 1676
      },
      {
        name: "Clarisse Le Bihan",
        goals: 9,
        teamId: 1675
      },
      {
        name: "Kadidiatou Diani",
        goals: 9,
        teamId: 1667
      },
      {
        name: "Eugénie Le Sommer",
        goals: 8,
        teamId: 1674
      },
      {
        name: "Amel Majri",
        goals: 8,
        teamId: 1674
      },
      {
        name: "Viviane Asseyi",
        goals: 7,
        teamId: 1671
      },
      {
        name: "Adelie Fourre",
        goals: 7,
        teamId: 1672
      },
      {
        name: "Stina Blackstenius",
        goals: 6,
        teamId: 1675
      },
      {
        name: "Léa Declercq",
        goals: 6,
        teamId: 1679
      },
      {
        name: "Marie-Charlotte Léger",
        goals: 6,
        teamId: 1677
      },
      {
        name: "Dzsenifer Marozsán",
        goals: 6,
        teamId: 1674
      },
      {
        name: "Kenza Dali",
        goals: 5,
        teamId: 1679
      },
      {
        name: "Wendie Renard",
        goals: 5,
        teamId: 1674
      },
    ]


    var buteuses = players.map((buteuse, i) =>

      <ClassementButeusesContent
        key={i}
        position={i}
        name={buteuse.name}
        goals={buteuse.goals}
        logo={buteuse.teamId}
      />
    )

    return (

          <View style={styles.container}>
            <ClassementButeusesIndication/>
            <ScrollView>
              {buteuses}
            </ScrollView>
          </View>
    );
  };
};

class ClassementButeusesIndication extends React.Component {

  render() {

    return (
          <Grid style={styles.row}>
            <Col style={styles.colIndicationButeuses}>
              <Text style={styles.textIndicationButeuses}>Top Buteuses</Text>
            </Col>
            <Col style={styles.colIndication}>
              <Ionicons name="md-football" size={25} color="#393E41" />
            </Col>
          </Grid>
    );
  };
};

class ClassementButeusesContent extends React.Component {

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
        <Col style={styles.colNameButeuses}>
          <Text style={styles.textButeuses}>{this.props.name}</Text>
        </Col>
        <Col style={styles.colIndication}>
          <Text style={styles.textGoals}>{this.props.goals}</Text>
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
  colIndicationButeuses: {
    width: '80%',
    justifyContent: 'center',
  },
  textIndicationButeuses: {
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
  colNameButeuses: {
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
  textButeuses: {
    fontSize: 18,
  },
  textGoals: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
