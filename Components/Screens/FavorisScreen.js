import React, { Component } from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';
import { Container, Content, List, ListItem, Thumbnail, Text, Right, Left, Body, Icon, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import HeaderScreen from '../Screens/HeaderScreen';
import { withNavigation } from 'react-navigation';

import {connect} from 'react-redux';

// ****** import de la police et du composant Icon ******
// import { Font } from 'expo';
// import Icon from '../Icon.js'

// ****** Ionicons dejà inclu dans nativebase, il suffit d'importer Icon de nativebase *****
// import { Ionicons } from '@expo/vector-icons';



class FavorisScreen extends React.Component {

state = {
      teams: {},
    };

  componentDidMount() {
    fetch('https://footfembackend.herokuapp.com/teams/')
      .then(response => response.json())
      .then(data => {
        var teams = data.teams;
      // console.log('teams : ', data.teams)
      var teamsTab = [];
      // teamTab = Object.keys(data.teams);
      for (var z in teams) {
        teamsTab.push(teams[z]);
      }
      // console.log("teamsTab avant tri: ", teams);
      //https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
      function compare(a, b) {
        if (a.name < b.name)
          return -1;
        if (a.name > b.name)
          return 1;
        return 0;
      }
      teams.sort(compare);
      // console.log("teamsTab apres tri: ", teams);
      this.setState({
        teams: data.teams
      });
      });
  }

  render() {

    var ctx = this;
    var teamData = Object.keys(this.state.teams)

    var teamList = teamData.map(function(i) {
      return <TeamsNav onStarClick={ctx.props.onStarClick} key={i} teamName={ctx.state.teams[i].name} id={ctx.state.teams[i].api_id}/>;
    });

    return (

    <View style={styles.container}>

      <HeaderScreen title={"Favoris"}/>

      {/* {
        this.state.fontLoaded ? ( */}

            <ScrollView>
              {teamList}
            </ScrollView>

        {/* ) : null
      } */}

    </View>
    );
  };
}

  class Teams extends React.Component {

    state = {
      star: false
    }

    onStarPress = () => {
      this.setState({star: !this.state.star});
      this.props.onStarClick();
    };

    render() {


      return (
        // <View>
        //   <Image style={styles.image} source={{uri: "http://www.statsfootofeminin.fr/img/logo_gbfc.png"}}/>
        //   <Text style={styles.teamName}>Olympique Lyonnais</Text>
        //   <Icon icon="star" style={styles.teamIcon} />
        // </View>

          <Grid>
            <Col style={styles.colImage}>
              {/* <Image style={styles.image} source={{ uri: 'http://www.statsfootofeminin.fr/img/logo_'+this.props.teamImg+'.png' }} /> */}
              {
              this.props.id === 1667 ? <Image style={styles.image} source={require('../../public/logo/logo_psg.png')}/> :
              this.props.id === 1674 ? <Image style={styles.image} source={require('../../public/logo/logo_ol.png')}/> :
              this.props.id === 1675 ? <Image style={styles.image} source={require('../../public/logo/logo_mhsc.png')}/> :
              this.props.id === 1676 ? <Image style={styles.image} source={require('../../public/logo/logo_pfc.png')}/> :
              this.props.id === 1671 ? <Image style={styles.image} source={require('../../public/logo/logo_gbfc.png')}/> :
              this.props.id === 1677 ? <Image style={styles.image} source={require('../../public/logo/logo_fleury.png')}/> :
              this.props.id === 1672 ? <Image style={styles.image} source={require('../../public/logo/logo_eag.png')}/> :
              this.props.id === 1679 ? <Image style={styles.image} source={require('../../public/logo/logo_dfco.png')}/> :
              this.props.id === 1669 ? <Image style={styles.image} source={require('../../public/logo/logo_asjs.png')}/> :
              this.props.id === 1678 ? <Image style={styles.image} source={require('../../public/logo/logo_losc.png')}/> :
              this.props.id === 1664 ? <Image style={styles.image} source={require('../../public/logo/logo_fcm.png')}/> :
              this.props.id === 1668 ? <Image style={styles.image} source={require('../../public/logo/logo_raf_2017.png')}/> :
              <Image style={styles.image} source={require('../../public/logo/logo_raf_2017.png')}/>
              }
            </Col>
            <Col style={styles.colTeam}>
              <Text
                onPress={ ()=> this.props.navigation.navigate('Notifications')}
                style={styles.team}>{this.props.teamName.slice(0, -2)}</Text>
            </Col>
            <Col style={styles.colStar}>
              <Icon onPress= {this.onStarPress} name= {this.state.star ? "md-star" : "md-star-outline"} style= {this.state.star ? {color:"#FAC05E"} : {color:"#393E41"}}/>
              {/* backgroundColor: 'yellow' */}
              {/* <Icon icon="star" style={styles.teamIcon} /> */}
            </Col>
          </Grid>
      );
    };
  };

  var TeamsNav = withNavigation(Teams)

  function mapDispatchToProps(dispatch) {

    return {
      onStarClick: function() {
        dispatch( {type: 'addFavoris'} )
      }
    };
  }

  // export default FavorisScreen;
  export default connect(null, mapDispatchToProps)(FavorisScreen);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F6F7EB"
    },
    header: {
      height: 80,
      backgroundColor: '#4B85EA',
      width: '100%',
    },
    headertitle: {
      color: "#FFFFFF",
      textAlign: 'center',
      fontSize: 25,
      fontWeight: 'bold',
      marginTop: 25
    },
    // teamName: {
    //   textAlign: 'left',
    //   backgroundColor: 'yellow',
    //   width: '40%'
    // },
    // teamIcon: {
    //   fontSize: 35,
    //   color: '#393E41',
    //   textAlign: 'right',
    //   backgroundColor: 'orange',
    //   width: '40%'
    // },
    team: {
      // backgroundColor: 'red',
      textAlign: 'left',
    },
    image: {
      width: 35,
      height: 35,
      margin: 10,
      marginLeft: 15,
      // backgroundColor: 'green',
    },
    icon: {
      // backgroundColor: 'yellow',
      textAlign: 'left',
    },
    colImage: {
      width: '18%',
      // backgroundColor: 'pink',
      borderBottomWidth: 1,
      borderColor: '#D3D3D3'
    },
    colTeam: {
      width: '70%',
      // backgroundColor: 'blue',
      justifyContent: 'center',
      borderBottomWidth: 1,
      borderColor: '#D3D3D3'
    },
    colStar: {
      width: '12%',
      // backgroundColor: 'orange',
      borderBottomWidth: 1,
      borderColor: '#D3D3D3',
      justifyContent: 'center',
    }
  });
