import React, { Component } from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';
import { Container, Content, List, ListItem, Thumbnail, Text, Right, Left, Body, Icon, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

// ****** import de la police et du composant Icon ******
// import { Font } from 'expo';
// import Icon from '../Icon.js'

// ****** Ionicons dejà inclu dans nativebase, il suffit d'importer Icon de nativebase *****
// import { Ionicons } from '@expo/vector-icons';



export default class FavorisScreen extends React.Component {

  // state = {
  //   fontLoaded: false
  // }
  //
  // async componentDidMount() {
  //   await Font.loadAsync({'testIcon': require('../../assets/fonts/testIcon.ttf')});
  //
  //   this.setState({fontLoaded: true});
  // }


  render() {

    var teamData = [
      {
        name: 'Olympique Lyonnais',
        img: 'ol'
      },{
        name: 'Paris Sain Germain',
        img: 'psg'
      },{
        name: 'Fleury',
        img: 'fleury'
      },{
        name: 'Montpellier',
        img: 'mhsc'
      },{
        name: 'Soyaux',
        img: 'asjs'
      },{
        name: 'Guingamp',
        img: 'eag'
      },{
        name: 'LOSC',
        img: 'losc2'
      },{
        name: 'Paris FC',
        img: 'pfc'
      },{
        name: 'FC Metz',
        img: 'fcm'
      },{
        name: 'Bordeaux',
        img: 'gbfc'
      },{
        name: 'DFCO',
        img: 'dfco'
      }
    ];

    var teamList = teamData.map(function(team, i) {
      return <Teams key={i} teamName={team.name} teamImg={team.img}/>;
    });

    return (

    <View style={styles.container}>

      <Header/>

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

  class Header extends React.Component {
    render() {
      return (
        <View style={styles.header}>
          <Text style={styles.headertitle}>Favoris</Text>
        </View>
      );
    };
  };

  class Teams extends React.Component {

    state = {
      star: false
    }

    render() {


      return (
        // <View>
        //   <Image style={styles.image} source={{uri: "http://www.statsfootofeminin.fr/img/logo_gbfc.png"}}/>
        //   <Text style={styles.teamName}>Olympique Lyonnais</Text>
        //   <Icon icon="star" style={styles.teamIcon} />
        // </View>

          <Grid>
            <Col style={styles.colImage}>
              <Image style={styles.image} source={{ uri: 'http://www.statsfootofeminin.fr/img/logo_'+this.props.teamImg+'.png' }} />
            </Col>
            <Col style={styles.colTeam}>
              <Text style={styles.team}>{this.props.teamName}</Text>
            </Col>
            <Col style={styles.colStar}>
              <Icon onPress={() => this.setState({star: !this.state.star})} name= {this.state.star ? "md-star" : "md-star-outline"} style= {this.state.star ? {color:"#FAC05E"} : {color:"#393E41"}}/>
              {/* backgroundColor: 'yellow' */}
              {/* <Icon icon="star" style={styles.teamIcon} /> */}
            </Col>
          </Grid>
      );
    };
  };

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
