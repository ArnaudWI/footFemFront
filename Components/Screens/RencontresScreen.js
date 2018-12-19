import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image, List, ListItem, Switch, Header} from 'react-native';
import {Ionicons, MatterialCommunityIcons} from '@expo/vector-icons';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {ButtonGroup} from 'react-native-elements';
import HeaderScreen from '../Screens/HeaderScreen';
import MatchScreen from '../Screens/MatchScreen';

import {connect} from 'react-redux';


class RencontresScreen extends React.Component {
  constructor() {
    super();
    this.state={
  journee: {},
  round: null,
};
  }

  componentDidMount() {
    fetch('https://footfembackend.herokuapp.com/journee')
      .then(response => response.json())
      .then(data => {
        this.setState({
          journee: data.matchs,
          round: data.round
        })
        console.log(data.round)
      });
  }

  goToMatch =(fixtureId) => {
    //récupération des stats
      this.props.matchSubmit(fixtureId);
      this.props.navigation.navigate('Match');
    }

  render() {

    var dataMatch = Object.keys(this.state.journee)
    var match = dataMatch.map((resultat, i) =>
      <Rencontres
        fixtureId={this.state.journee[resultat].fixture_id}
        getMatch={this.goToMatch}
        navigation={this.props.navigation}
        key={i}
        position={i}
        homeTeam={this.state.journee[resultat].homeTeam}
        elapsed={this.state.journee[resultat].elapsed}
        goalsHomeTeam={this.state.journee[resultat].goalsHomeTeam}
        awayTeam={this.state.journee[resultat].awayTeam}
        halftime_score={this.state.journee[resultat].halftime_score}
        goalsAwayTeam={this.state.journee[resultat].goalsAwayTeam}
        status={this.state.journee[resultat].status}
        event_date={this.state.journee[resultat].event_date}
        logoHomeTeam={this.state.journee[resultat].homeTeam_id}
        logoAwayTeam={this.state.journee[resultat].awayTeam_id}
        round={this.state.journee[resultat].round}

      />
    )

    return (<View style={styles.container}>
      <HeaderScreen title={'Rencontres'}/>
        <Journee round={this.state.round}/>
      <ScrollView>
        <View style={styles.date}>
          <Text style={styles.eventDate}>
            salut
          </Text>

        </View>
        {match}

      </ScrollView>
    </View>);
  };
};

//
// var testNum({this.props.round}) {
//   if ({this.props.round} == 1) {
//     return "re";
//   } else {
//     return "ème";
//   }
// };

class Journee extends React.Component {
  render() {
    return (
      <View  style={styles.journee}>
      <Grid>
        <Col onPress={ ()=> this.props.navigation.navigate('JourneePrededant')} style={{alignItems: 'center'}}>

            <Ionicons name="md-arrow-dropleft" size={26} color="#dddddd" />

        </Col>
        <Col style={{alignItems: 'center', justifyContent: 'center'}}>


          <Text style={{color: '#dddddd', fontWeight: 'bold', fontSize: 16}}>{this.props.round} Journée</Text>
        </Col>
        <Col style={{alignItems: 'center'}}>
          <Ionicons name="md-arrow-dropright" size={26} color="#dddddd" />
        </Col>
      </Grid>
    </View>
    );
  };
};

class Rencontres extends React.Component {
  render() {
    return (

      <Grid style={styles.match}>
          <Col>
          </Col>
          <Col onPress={()=>this.props.getMatch(this.props.fixtureId)} style={styles.colRencontres}>
            <Col style={styles.colTeam}>
              <View flex right>
                <Text style={styles.homeTeamTitle}>{this.props.homeTeam.slice(0, -2)}</Text>
              </View>
            </Col>
            <Col style={styles.colLogo}>
              {this.props.logoHomeTeam === '1674' ? <Image style={styles.logoTeam} source={require('../../public/logo/logo_ol.png')}/> :
              this.props.logoHomeTeam === '1667' ? <Image style={styles.logoTeam} source={require('../../public/logo/logo_psg.png')}/> :
              this.props.logoHomeTeam === '1675' ? <Image style={styles.logoTeam} source={require('../../public/logo/logo_mhsc.png')}/> :
              this.props.logoHomeTeam === '1676' ? <Image style={styles.logoTeam} source={require('../../public/logo/logo_pfc.png')}/> :
              this.props.logoHomeTeam === '1671' ? <Image style={styles.logoTeam} source={require('../../public/logo/logo_gbfc.png')}/> :
              this.props.logoHomeTeam === '1677' ? <Image style={styles.logoTeam} source={require('../../public/logo/logo_fleury.png')}/> :
              this.props.logoHomeTeam === '1672' ? <Image style={styles.logoTeam} source={require('../../public/logo/logo_eag.png')}/> :
              this.props.logoHomeTeam === '1679' ? <Image style={styles.logoTeam} source={require('../../public/logo/logo_dfco.png')}/> :
              this.props.logoHomeTeam === '1669' ? <Image style={styles.logoTeam} source={require('../../public/logo/logo_asjs.png')}/> :
              this.props.logoHomeTeam === '1678' ? <Image style={styles.logoTeam} source={require('../../public/logo/logo_losc.png')}/> :
              this.props.logoHomeTeam === '1664' ? <Image style={styles.logoTeam} source={require('../../public/logo/logo_fcm.png')}/> :
              this.props.logoHomeTeam === '1668' ? <Image style={styles.logoTeam} source={require('../../public/logo/logo_raf_2017.png')}/> :
              <Image style={styles.logoTeam} source={require('../../public/logo/logo_d1_seul.png')}/>}
            </Col>
            <Col style={styles.colScore}>
              <Text style={styles.liveTime}>
                {
                  this.props.status === 'Match Finished' ? <Text style={{color:'#393E41'}}>Fini</Text> :
                  this.props.status === 'Live' ? <Text style={styles.liveTime}>Live {this.props.elapsed}'</Text> :
                  <Text></Text>
                }
              </Text>
              <Text style={styles.goalTitle}>
                {
                  this.props.status === 'Not Started' ? <Text></Text> :
                  <Text>{this.props.goalsHomeTeam}</Text>
                }
                {
                  this.props.status === 'Not Started' ? <Text>{this.props.event_date.slice(11, -9)}</Text> :
                  <Text>-</Text>
                }
                {
                  this.props.status === 'Not Started' ? <Text></Text> :
                  <Text>{this.props.goalsAwayTeam}</Text>
                }
              </Text>
              <Text style={styles.mtScore}>
                {
                  this.props.status === 'Not started' ? <Text></Text> :
                  this.props.status === 'Kick Off' ? <Text style={styles.liveTime}>Live {this.props.elapsed}'</Text> :

                  this.props.halftime_score === '-' ? <Text></Text> :
                  <Text>({this.props.halftime_score})</Text>
                }
              </Text>
            </Col>
            <Col style={styles.colLogo}>
              {this.props.logoAwayTeam === '1674' ? <Image style={styles.logoTeam} source={require('../../public/logo/logo_ol.png')}/> :
              this.props.logoAwayTeam === '1667' ? <Image style={styles.logoTeam} source={require('../../public/logo/logo_psg.png')}/> :
              this.props.logoAwayTeam === '1675' ? <Image style={styles.logoTeam} source={require('../../public/logo/logo_mhsc.png')}/> :
              this.props.logoAwayTeam === '1676' ? <Image style={styles.logoTeam} source={require('../../public/logo/logo_pfc.png')}/> :
              this.props.logoAwayTeam === '1671' ? <Image style={styles.logoTeam} source={require('../../public/logo/logo_gbfc.png')}/> :
              this.props.logoAwayTeam === '1677' ? <Image style={styles.logoTeam} source={require('../../public/logo/logo_fleury.png')}/> :
              this.props.logoAwayTeam === '1672' ? <Image style={styles.logoTeam} source={require('../../public/logo/logo_eag.png')}/> :
              this.props.logoAwayTeam === '1679' ? <Image style={styles.logoTeam} source={require('../../public/logo/logo_dfco.png')}/> :
              this.props.logoAwayTeam === '1669' ? <Image style={styles.logoTeam} source={require('../../public/logo/logo_asjs.png')}/> :
              this.props.logoAwayTeam === '1678' ? <Image style={styles.logoTeam} source={require('../../public/logo/logo_losc.png')}/> :
              this.props.logoAwayTeam === '1664' ? <Image style={styles.logoTeam} source={require('../../public/logo/logo_fcm.png')}/> :
              this.props.logoAwayTeam === '1668' ? <Image style={styles.logoTeam} source={require('../../public/logo/logo_raf_2017.png')}/> :
              <Image style={styles.logoTeam} source={require('../../public/logo/logo_d1_seul.png')}/>}
            </Col>
            <Col style={styles.colTeam}>
              <Text style={styles.awayTeamTitle}>{this.props.awayTeam.slice(0, -2)}</Text>
            </Col>
          </Col>
          <Col style={styles.colStar}>
            <Ionicons style={{paddingTop: '20%'}} name="md-notifications-outline" size={24} color="#393E41" />
          </Col>

      </Grid>

    );
  };
};

function mapDispatchToProps(dispatch) {
  return {
    matchSubmit: function(fixture) {
      dispatch({
        type: 'setFixtureId',
        fixtureId: fixture,
      });
    },
  }
};

export default connect(null, mapDispatchToProps)(RencontresScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7EB'
  },
  header: {
    height: 80,
    backgroundColor: '#4B85EA',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  toggleSwitch: {
    width: '20%',
    transform: [{ scaleX: .6 }, { scaleY: .6 }],
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeTeamTitle: {
    color: '#393E41',
    fontSize: 14,
    fontWeight: 'bold',
  },
  awayTeamTitle: {
    color: '#393E41',
    fontSize: 14,
    fontWeight: 'bold',
  },
  match: {
    borderTopWidth: 1,
    height: 80,
    borderColor: '#D3D3D3',
    flexDirection: 'row',
  },
  goalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 2,
    color: '#393E41',
  },
  colRencontres: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '83%',
  },
  colTeam: {
    flexDirection: 'row',
    width: '34%',

  },
  colLogo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '12%',
    margin: 5,
  },
  colScore: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
  },
  date: {
    marginTop: 8,
    borderTopWidth: 1,
    borderColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e5e8ca',
  },
  eventDate: {
    color: '#393E41',
    height: 20,
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
  },
  mtScore: {
    fontSize: 12,
  },
  liveTime: {
    fontSize: 12,
    color: 'red',
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
  logoTeam: {
    height: 25,
    width: 25
  },
});
