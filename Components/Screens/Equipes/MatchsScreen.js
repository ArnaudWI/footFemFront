import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

export default class MatchsScreen extends React.Component {


  routeJourneeNumJ = () => {
    var numJ = 14;
    fetch(`https://footfembackend.herokuapp.com/journee/${numJ}`)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        // console.log(data.matchs[0]);
        // var match0 = data.matchs[0];
        // console.log("match0 :", match0);
        var toto = data.matchs.map(e => {
         console.log("e.awayTeam", e.awayTeam);
         return {
         }
       });
        // console.log(Object.keys(data.matchs[1])[0]);
        // console.log(Object.keys(data.matchs[2])[0]);
        // var match = Object.keys(data.matchs[0])[0]; //= id du premier match
        // console.log(Object.keys(match[0])[0]);
        // Object.keys(obj)[0]
        // var toto = data.matchs[0].map(e => {
        //   console.log(e.awayTeam);
        //   return {
        //   }
        // });
      })
      .catch(e => console.error(e));
  };


  render() {


    return (

          <View style={styles.container}>
            <ScrollView>
              <Text>Matchs équipe {this.routeJourneeNumJ()}</Text>
            </ScrollView>
          </View>
    );
  };
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
