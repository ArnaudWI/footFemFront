import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image, List, ListItem, Switch, Header} from 'react-native';
import {Ionicons, MatterialCommunityIcons} from '@expo/vector-icons';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {ButtonGroup} from 'react-native-elements';
import HeaderScreen from '../Screens/HeaderScreen';


export default class RencontresScreen extends React.Component {
  constructor() {
    super();
    this.state={
  journee: {}
};
  }

  componentDidMount() {
    fetch('https://footfembackend.herokuapp.com/journee')
      .then(response => response.json())
      .then(data => {
        this.setState({journee: data.matchs})
        console.log(data.matchs)
      });
  }

  render() {

    var dataMatch = Object.keys(this.state.journee)
// console.log(this.state.journee[0])
// console.log(this.state.journee[0][dataMatch[0]]);
    var match = dataMatch.map((resultat, i) =>
      <Rencontres
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

      />
    )

    return (<View style={styles.container}>
      <HeaderScreen title={'Rencontres'}/>
        <Journee/>
      <ScrollView>
        <View style={styles.date}>
          <Text style={styles.eventDate}>Samedi 15 Décembre</Text>
        </View>
        {match}

      </ScrollView>
    </View>);
  };
};



class Journee extends React.Component {
  render() {
    return (
      <View  style={styles.journee}>
      <Grid>
        <Col style={{alignItems: 'center'}}>

            <Ionicons name="md-arrow-dropleft" size={26} color="#dddddd" />

        </Col>
        <Col style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: '#dddddd', fontWeight: 'bold', fontSize: 16}}>11ème Journée</Text>
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
          <Col style={styles.colTeam}>
            <Text style={styles.homeTeamTitle}>{this.props.homeTeam}</Text>
          </Col>
          <Col style={styles.colLogo}>
            <Image style={{width: 25, height: 25}} source={{ uri:'http://www.statsfootofeminin.fr/img/logo_gbfc.png'}}
            />
          </Col>
          <Col style={styles.colScore}>
            <Text style={styles.liveTime}>
              {
                this.props.status === 'Match Finished' ? <Text>Terminé</Text> :
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

                this.props.halftime_score === 'Null' ? <Text></Text> :
                <Text>{this.props.halftime_score}</Text>
              }
            </Text>
          </Col>
          <Col style={styles.colLogo}>
            <Image style={{width: 25, height: 25}} source={{ uri:'http://www.statsfootofeminin.fr/img/logo_ol.png'}}
            />
          </Col>
          <Col style={styles.colTeam}>
            <Text style={styles.awayTeamTitle}>{this.props.awayTeam}</Text>
          </Col>
          <Col style={styles.colStar}>
            <Ionicons style={{paddingBottom: 25}} name="md-star-outline" size={32} color="#393E41" />
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
  header: {
    height: 80,
    backgroundColor: '#4B85EA',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headertitle: {
    color: "#FFFFFF",
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 25
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
    textAlign: 'right'
  },
  awayTeamTitle: {
    color: '#393E41',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  match: {
    borderTopWidth: 1,
    height: 80,
    borderColor: '#D3D3D3',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  matchInfo: {
    width: '14%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  goalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 2,
  },

  colRencontres: {
    backgroundColor: '#F6F7EB',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  colTeam: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
  },
  colLogo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '5%',
  },
  colScore: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '17%',
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

  }
});
