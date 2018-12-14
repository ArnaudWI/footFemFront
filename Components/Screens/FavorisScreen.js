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

    state = {
      teams: {}
    };

  componentDidMount() {
    fetch('https://footfembackend.herokuapp.com/teams/')
      .then(response => response.json())
      .then(data => {
        this.setState({teams : data.teams})
      });
  }

  render() {

    // var imgData = [
    //   {
    //     // name: 'Olympique Lyonnais',
    //     img: 'ol'
    //   },{
    //     // name: 'Paris Sain Germain',
    //     img: 'psg'
    //   },{
    //     // name: 'Fleury',
    //     img: 'fleury'
    //   },{
    //     // name: 'Montpellier',
    //     img: 'mhsc'
    //   },{
    //     // name: 'Soyaux',
    //     img: 'asjs'
    //   },{
    //     // name: 'Guingamp',
    //     img: 'eag'
    //   },{
    //     // name: 'LOSC',
    //     img: 'losc2'
    //   },{
    //     // name: 'Paris FC',
    //     img: 'pfc'
    //   },{
    //     // name: 'FC Metz',
    //     img: 'fcm'
    //   },{
    //     // name: 'Bordeaux',
    //     img: 'gbfc'
    //   },{
    //     // name: 'DFCO',
    //     img: 'dfco'
    //   }
    // ];

    var ctx = this;
    var teamData = Object.keys(this.state.teams)

    var teamList = teamData.map(function(i) {
      return <Teams key={i} teamName={ctx.state.teams[i].name} id={ctx.state.teams[i].api_id}/>;
    });

    // var teamImg = imgData.map(function(team, i) {
    //   return <Teams key={i} teamImg={team.img}/>;
    // });

    return (

    <View style={styles.container}>

      <Header/>

      {/* {
        this.state.fontLoaded ? ( */}

            <ScrollView>
              {/* {teamImg} */}
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
              <Text style={styles.team}>{this.props.teamName.slice(0, -2)}</Text>
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
