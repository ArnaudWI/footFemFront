import React from 'react';
import {View, Text, ScrollView, Button} from 'react-native';
import {ButtonGroup} from 'react-native-elements';

import {connect} from 'react-redux';

//import de mes screens
import HeaderScreen from '../Screens/HeaderScreen';


class EquipesScreen extends React.Component {

  constructor () {
    super()
    this.state = {
      teamId: 1664,
    }
  }

  getEquipeStats =(team_id) => {
    var teamApi_id =team_id;//à remplacer par la team sur laquelle on a cliqué

    //récupération des stats
    fetch(`https://footfembackend.herokuapp.com/statistics/${teamApi_id}`)
    .then(response => response.json())
    .then(data => {
      // console.log(data.result);
        this.setState({stats : data.result})
        var statsTab= Object.values(data.result);
          //fonction qui permet de récuperer des propriétés et valeurs d'objects imbriqués
          const getNestedObject = (nestedObj, pathArr) => {
            return pathArr.reduce((obj, key) =>
            (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
          }
        // pass in your object structure as array elements
        const matchsGagnes = getNestedObject(statsTab[0], ['wins', 'total']);
        const matchsNuls = getNestedObject(statsTab[0], ['draws', 'total']);
        const matchsPerdus = getNestedObject(statsTab[0], ['loses', 'total']);
        const matchsTotaux = getNestedObject(statsTab[0], ['matchsPlayed', 'total']);


        this.setState({
          matchsGagnes : matchsGagnes,
          matchsNuls : matchsNuls,
          matchsPerdus : matchsPerdus,
          matchsTotaux : matchsTotaux
        })
        this.props.handleTeamsStats(team_id, matchsGagnes, matchsNuls, matchsPerdus);
        this.props.navigation.navigate('StatsScreensList');
    })
    .catch(e => console.error(e));
  }

  render() {


    return (

            <ScrollView>
              <HeaderScreen title={"Equipes"}/>
              <Button onPress={() => this.getEquipeStats(1664)} title='navigation' style={{width: 100, marginTop: 10}} backgroundColor='#3498db'/>



            </ScrollView>

    );
  };
};


function mapDispatchToProps(dispatch) {
  return {
    handleTeamsStats: function(teamId, matchsGagnes, matchsNuls, matchsPerdus) {
      dispatch({
        type: 'setTeamData',
        matchsGagnes: matchsGagnes,
        matchsNuls : matchsNuls,
        matchsPerdus : matchsPerdus
      });
    },
  }
};

export default connect(null, mapDispatchToProps)(EquipesScreen);
