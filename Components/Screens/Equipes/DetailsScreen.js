import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image, List, ListItem, Switch, Header} from 'react-native';
import { Badge} from 'native-base';
import {Ionicons, MatterialCommunityIcons} from '@expo/vector-icons';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {ButtonGroup} from 'react-native-elements';
import ChartVictoires from './ChartVictoires';
import ChartNuls from './ChartNuls';
import ChartDefaites from './ChartDefaites';
import MatchGagne from './MatchGagne';
import MatchPerdu from './MatchPerdu';
import MatchNul from './MatchNul';




import {connect} from 'react-redux';

class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team_id: this.props.teamStats.teamId,
      matchsGagnes: this.props.teamStats.matchsGagnes,
      matchsNuls: this.props.teamStats.matchsNuls,
      matchsPerdus: this.props.teamStats.matchsPerdus,
      matchsTotaux: this.props.teamStats.matchsTotaux,
      matchs:[]
    };
  }


  componentDidMount() {
    // console.log("matchs gagnés :", this.props.teamStats.matchsGagnes)
    // console.log("matchs nuls :", this.props.teamStats.matchsNuls)
    // console.log("matchs perdus :", this.props.teamStats.matchsPerdus)
    // console.log("matchs matchsTotaux :", this.props.teamStats.matchsTotaux)

    var teamApi_id = 1664;
    //récupération des 5 derniers résultats
    var ts = Date.now() / 1000;
    fetch(`https://footfembackend.herokuapp.com/fixtures/team/${teamApi_id}`)
    .then(response => response.json())
    .then(toto => {
      var matchsAnte = []; //tableau qui va stocker les matchs passés
      // console.log(toto.matchs);
      var matchsTab = toto.matchs.map(e => {
      return {
        diffTemps: parseInt(ts - e.event_timestamp),
        homeTeam_id: e.homeTeam_id,
        final_score : e.final_score
      }
    });
    console.log("matchsTab : ", matchsTab)
    for (z in matchsTab) {
    // console.log(z);
    if (matchsTab[z].diffTemps > 0) {
      matchsAnte.push(matchsTab[z])
    }
  }
      matchsAnte.sort(function(a, b) {
      return a.diffTemps - b.diffTemps
    })
    //on récupère les 5 matchs les plus récents
    var matchs5 =[];
    for (var z in matchsAnte){
      if(z < 5){
        matchs5.push(matchsAnte[z])
      }
    }
      /*Pour les 5 derniers matchs on compare le score domicile au score visiteur
      afin de déterminer si le match est gagné ou perdu (selon qu'il est joué à domicile ou non)*/
      for (var z in matchs5) {
        var score = matchs5[z].final_score.split(' ');
        if (score[0] == score[score.length - 1]) {
          // console.log("match nul")
          matchs5[z].gnp = "nul"
        }
        if (matchs5[z].homeTeam_id == this.state.team_id) {
          if (score[0] < score[score.length - 1]) {
            matchs5[z].gnp = "perdu";
            // console.log("domicile :", "perdu")
          } else if (score[0] > score[score.length - 1]) {
            matchs5[z].gnp = "gagne";
            // console.log("domicile :", "gagné")
          }
        } else if (matchs5[z].homeTeam_id !== this.state.team_id) {
          if (score[0] < score[score.length - 1]) {
            matchs5[z].gnp = "gagne";
            // console.log("visiteur :","gagné")
          } else if (score[0] > score[score.length - 1]) {
            matchs5[z].gnp = "perdu";
            // console.log("visiteur :","perdu")
          }
        }
      }
        // console.log(matchs5)
        //stockage des 5 derniers matchs
        this.setState({matchs : matchs5})
    })
    .catch(e => console.error(e));
  }

  render() {
    console.log("a partir d'ici, log de la page DETAILS /////////////////////////////////////////")
    // console.log(this.state.matchs[0].gnp)
      var badgeMatch = this.state.matchs.map((e,i) => {
        console.log ("coucou")
        console.log("e.gnp : ", e.gnp)
        if (e.gnp=="gagne"){
          return <MatchGagne key={i} />
        }else if (e.gnp=="perdu"){
          return <MatchPerdu key={i} />
        }else if (e.gnp=="nul"){
          return <MatchNul key={i} />
        }

     });



    return (

          <View style={styles.container}>
            <ScrollView>
            <View style={styles.fondTitre}>
              <Text style={styles.titre}>Saison 2018/2019</Text>
            </View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10
            }}>
            <ChartVictoires matchsGagnes={this.state.matchsGagnes} matchsTotaux={this.state.matchsTotaux} />
            <ChartNuls matchsNuls={this.state.matchsNuls} matchsTotaux={this.state.matchsTotaux}  />
            <ChartDefaites matchsPerdus={this.state.matchsPerdus} matchsTotaux={this.state.matchsTotaux}  />
            </View>
            <View style={styles.fondTitre}>
              <Text style={styles.titre}>Rang actuel : {"1ère"} du classement</Text>
              </View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: 80,
              }}>
              <Text>5 derniers matchs :  </Text>
              {badgeMatch}
              </View>
            </ScrollView>
          </View>
    );
  };
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7EB'
  },
  fondTitre: {
    marginTop: 8,
    borderTopWidth: 1,
    borderColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e5e8ca',
  },
  titre: {
    color: '#393E41',
    height: 20,
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
  }
});

function mapStateToProps(state) {

  return {
    teamStats: state.teamStats,
  };
}

export default connect(mapStateToProps, null)(DetailsScreen);
