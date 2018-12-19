import React, { Component } from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import {Col, Row, Grid, Icons, Container} from 'react-native-easy-grid';
import {Ionicons, MatterialCommunityIcons} from '@expo/vector-icons';
import {connect} from 'react-redux';

//import de mes screens
import HeaderScreen from '../Screens/HeaderScreen';

export default class Match extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderScreen title={"Match"}/>
        <Journee/>
          <ScrollView>
            <TopContent/>
            <MatchScore/>
            <MiTempsUn/>
            <DetailsUn/>
            <MiTempsDeux/>
            <DetailsDeux/>
          </ScrollView>
      </View>
    );
  }
}

class Journee extends React.Component {
  render() {
    return (
      <View  style={styles.journee}>
      <Grid style={styles.gridJournee}>
          <Text style={styles.textJournee}>11ème Journée</Text>
      </Grid>
    </View>
    );
  };
};

class TopContent extends React.Component {
  render() {
    return (
      <Grid style={styles.souscat}>
        <Text style={styles.textSouscat}>D1 Féminine - Samedi 10 décembre 2018 - 14h30</Text>
      </Grid>
    );
  };
};

class MatchScore extends React.Component {
  render() {
    return (
      <Grid style={styles.gridScore}>
        <Col style={styles.colTeam}>
          <Text style={styles.textHomeTeam}>Lille</Text>
        </Col>
        <Col style={styles.colScore}>
          <Image style={styles.logoTeam} source={require('../../public/logo/logo_losc.png')}/>
        </Col>
        <Col style={styles.colScore}>
          <Text style={styles.mainScore}>1 - 2</Text>
          <Text style={styles.scoreTextMT}>Score MT</Text>
          <Text style={styles.scoreMT}>1 - 1</Text>
        </Col>
        <Col style={styles.colScore}>
          <Image style={styles.logoTeam} source={require('../../public/logo/logo_fleury.png')}/>
        </Col>
        <Col style={styles.colTeam}>
          <Text style={styles.textAwayTeam}>FC Fleury 91</Text>
        </Col>
      </Grid>
    );
  };
};

class MiTempsUn extends React.Component {
  render() {
    return (
      <Grid style={styles.souscat}>
        <Text style={styles.textSouscat}>Mi-Temps 1</Text>
      </Grid>
    );
  };
};

class DetailsUn extends React.Component {
  render() {
    return (

        <Grid>
          <Row  style={styles.rowDetails}>
            <Col style={styles.eventDetails}>
              <Text style={styles.textEventHome}>A.Hegerberg</Text>
            </Col>
            <Col style={styles.eventTime}>
              <Ionicons name="md-football" size={25} color="#393E41" />
              <Text>15'</Text>
            </Col>
            <Col style={styles.col50}>

            </Col>
          </Row>
          <Row  style={styles.rowDetails}>
            <Col style={styles.col50}>

            </Col>
            <Col style={styles.eventTime}>
              <Ionicons name="md-football" size={25} color="#393E41" />
              <Text>33'</Text>
            </Col>
            <Col style={styles.eventDetails}>
              <Text style={styles.textEventAway}>A.Moreau</Text>
            </Col>
          </Row>
          <Row style={styles.rowDetails}>
            <Col style={styles.eventDetails}>
              <Text style={styles.textEventHome}>E.Le Sommer</Text>
            </Col>
            <Col style={styles.eventTime}>
              <Ionicons name="md-square" size={25} color="#FAC05E" />
              <Text>43'</Text>
            </Col>
            <Col style={styles.col50}>

            </Col>
          </Row>
        </Grid>


    );
  };
};

class MiTempsDeux extends React.Component {
  render() {
    return (
      <Grid style={styles.souscat}>
        <Text style={styles.textSouscat}>Mi-Temps 2</Text>
      </Grid>
    );
  };
};

class DetailsDeux extends React.Component {
  render() {
    return (

              <Grid>
                <Row style={styles.rowDetails}>
                  <Col style={styles.eventDetails}>
                    <Text style={styles.textEventHome}>E.Le Sommer</Text>
                  </Col>
                  <Col style={styles.eventTime}>
                    <Ionicons name="md-square" size={25} color="#EE6352" />
                    <Text>58'</Text>
                  </Col>
                  <Col style={styles.col50}>

                  </Col>
                </Row>
                <Row  style={styles.rowDetails}>
                  <Col style={styles.col50}>

                  </Col>
                  <Col style={styles.eventTime}>
                    <Ionicons name="md-football" size={25} color="#393E41" />
                    <Text>89'</Text>
                  </Col>
                  <Col style={styles.eventDetails}>
                    <Text style={styles.textEventAway}>A.Moreau</Text>
                  </Col>
                </Row>

              </Grid>

    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7EB'
  },
  journee: {
    color: '#dddddd',
    backgroundColor: '#393E41',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  gridJournee: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  textJournee: {
    color: '#dddddd',
    fontWeight: 'bold',
    fontSize: 16
  },
  souscat: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e5e8ca',
    height: 30
  },
  textSouscat: {
    color: '#393E41',
    fontSize: 14,
    fontWeight: 'bold',
  },
  gridScore: {
    height: 100,
  },
  colScore: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  colTeam:{
    width: '28%',
    justifyContent: 'center'
  },
  textHomeTeam: {
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 18
  },
  textAwayTeam: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 18
  },
  logoTeam: {
    height: 35,
    width: 35
  },
  mainScore: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 14
  },
  scoreTextMT: {
    marginTop: 4,
    fontSize: 10
  },
  scoreMT: {
    fontSize: 10
  },
  rowDetails: {
    height: 60,
  },
  col50: {
    width: '50%'
  },
  eventDetails: {
    width: '40%',
    justifyContent: 'center'
  },
  eventTime: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textEventHome: {
    textAlign: 'right',
    fontSize: 18
  },
  textEventAway: {
    textAlign: 'left',
    fontSize: 18
  }
})
