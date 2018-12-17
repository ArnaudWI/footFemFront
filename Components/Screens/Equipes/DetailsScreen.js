import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image, List, ListItem, Switch, Header} from 'react-native';
import {Ionicons, MatterialCommunityIcons} from '@expo/vector-icons';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {ButtonGroup} from 'react-native-elements';

export default class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team_id: 1664,
      stats: {},
      matchs:[]
    };
  }
  componentDidMount() {
    var teamApi_id =1664;//à remplacer par la team sur laquelle on a cliqué
    fetch(`https://footfembackend.herokuapp.com/statistics/${teamApi_id}`)
    .then(response => response.json())
    .then(data => {
      // console.log(data.result);
        this.setState({stats : data.result})
    })
    .catch(e => console.error(e));

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
    // console.log("matchsTab : ", matchsTab)
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
          console.log("match nul")
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

      var statsTab= Object.values(this.state.stats);
        //fonction qui permet de récuperer des propriétés et valeurs d'objects imbriqués
        const getNestedObject = (nestedObj, pathArr) => {
          return pathArr.reduce((obj, key) =>
          (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
        }
      // pass in your object structure as array elements
      const matchsGagnes = getNestedObject(statsTab[0], ['wins', 'total']);
      const matchsNuls = getNestedObject(statsTab[0], ['draws', 'total']);
      const matchsPerdus = getNestedObject(statsTab[0], ['loses', 'total']);

      // console.log("matchs gagnés :", matchsGagnes)
      // console.log("matchs nuls :", matchsNuls)
      // console.log("matchs perdus :", matchsPerdus)

      var toto = this.state.matchs.map(e => {
       console.log("e.gnp", e.gnp);
     });



    return (

          <View style={styles.container}>
            <ScrollView>

              <Text>Statistiques équipe {};</Text>
              <Text>Rang actuel : {"1ère"} du classement</Text>
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
  titre: {
    marginTop: 8,
    borderTopWidth: 1,
    borderColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e5e8ca',
  }
});
