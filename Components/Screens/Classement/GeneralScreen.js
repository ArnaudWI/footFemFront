import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import { Col, Row, Grid} from 'react-native-easy-grid';
import {Ionicons, MatterialCommunityIcons} from '@expo/vector-icons';
import {connect} from 'react-redux';
import { Container, Header, Content, Spinner } from 'native-base';

class GeneralScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      standings: {},
      loading: true
    };
  }





  componentDidMount() {
    fetch('https://footfembackend.herokuapp.com/standings/')
      .then(response => response.json())
      .then(data => {
        this.setState({standings : data.classement})
        var classTab= Object.values(data.classement);
        var classReduce = classTab.map((team, i) => {
          this.props.ClassementTeam(team.team_id, i + 1)
        })
      });
  }

  render() {
    var dataTableau = Object.keys(this.state.standings)


    var classement = dataTableau.map((team, i) => {
      if (i === team.length) {
        this.state.loading = false
      }
    return  <ClassementGeneralContent
        key={i}
        position={i}
        teamName={this.state.standings[team].teamName}
        goalsDiff={this.state.standings[team].goalsDiff}
        lose={this.state.standings[team].lose}
        draw={this.state.standings[team].draw}
        win={this.state.standings[team].win}
        play={this.state.standings[team].play}
        points={this.state.standings[team].points}
        logo={this.state.standings[team].team_id}
      />

  })

  if (this.state.loading) {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', height: 400}}>
        <Spinner color='#000'/>
      </View>
      );
  } else {
    return (
      <View>
        <ScrollView>
          <ClassementGeneralIndication/>
          {classement}
          <ClassementGeneralLegende/>
        </ScrollView>
      </View>
    )
  }
};
};

class ClassementGeneralIndication extends React.Component {

  render() {

    return (
          <Grid style={styles.row}>
            <Col style={styles.colIndicationTeam}>
              <Text style={{marginLeft: 40}}>Equipes</Text>
            </Col>
            <Col style={styles.colIndication}>
              <Text style={styles.textIndication}>J</Text>
            </Col>
            <Col style={styles.colIndication}>
              <Text style={styles.textIndication}>V</Text>
            </Col>
            <Col style={styles.colIndication}>
              <Text style={styles.textIndication}>N</Text>
            </Col>
            <Col style={styles.colIndication}>
              <Text style={styles.textIndication}>D</Text>
            </Col>
            <Col style={styles.colIndication}>
              <Text style={styles.textIndication}>Diff</Text>
            </Col>
            <Col style={styles.colIndication}>
              <Text style={styles.textIndication}>PTS</Text>
            </Col>
          </Grid>
    );
  };
};

class ClassementGeneralContent extends React.Component {

  render() {



    return (
          <Grid style={styles.row}>
            <Col style={styles.colLeftClassement}>
              <Text style = {
                this.props.position === 10 || this.props.position === 11
                  ? {color: '#EE6352', fontWeight: 'bold'}
                  : this.props.position === 0 || this.props.position === 1
                    ? {color:'#59CD90', fontWeight: 'bold'}
                    : {color : '#393E41'}
              }>
                {this.props.position + 1}
              </Text>
            </Col>
            <Col style={styles.colLeftClassement}>
              {/* <Ionicons name="md-arrow-round-down" size={15} color="#EE6352" />
              <Ionicons name="md-arrow-round-up" size={15} color="#59CD90" /> */}
              <Ionicons name="md-remove" size={15} color="#FAC05E" />
            </Col>
            <Col style={styles.colLogoTeam}>
              {this.props.logo === '1674' ? <Image style={styles.logoTeam} source={require('../../../public/logo/logo_ol.png')}/> :
              this.props.logo === '1667' ? <Image style={styles.logoTeam} source={require('../../../public/logo/logo_psg.png')}/> :
              this.props.logo === '1675' ? <Image style={styles.logoTeam} source={require('../../../public/logo/logo_mhsc.png')}/> :
              this.props.logo === '1676' ? <Image style={styles.logoTeam} source={require('../../../public/logo/logo_pfc.png')}/> :
              this.props.logo === '1671' ? <Image style={styles.logoTeam} source={require('../../../public/logo/logo_gbfc.png')}/> :
              this.props.logo === '1677' ? <Image style={styles.logoTeam} source={require('../../../public/logo/logo_fleury.png')}/> :
              this.props.logo === '1672' ? <Image style={styles.logoTeam} source={require('../../../public/logo/logo_eag.png')}/> :
              this.props.logo === '1679' ? <Image style={styles.logoTeam} source={require('../../../public/logo/logo_dfco.png')}/> :
              this.props.logo === '1669' ? <Image style={styles.logoTeam} source={require('../../../public/logo/logo_asjs.png')}/> :
              this.props.logo === '1678' ? <Image style={styles.logoTeam} source={require('../../../public/logo/logo_losc.png')}/> :
              this.props.logo === '1664' ? <Image style={styles.logoTeam} source={require('../../../public/logo/logo_fcm.png')}/> :
              this.props.logo === '1668' ? <Image style={styles.logoTeam} source={require('../../../public/logo/logo_raf_2017.png')}/> :
              <Image style={styles.logoTeam} source={require('../../../public/logo/logo_ol.png')}/>}
            </Col>
            <Col style={styles.colNameTeam}>
              <Text style={styles.textIndication} style={{fontWeight:'bold'}}>{this.props.teamName.slice(0, -2)}</Text>
            </Col>
            <Col style={styles.colIndication}>
              <Text style={styles.textIndication}>{this.props.play}</Text>
            </Col>
            <Col style={styles.colIndication}>
              <Text style={styles.textIndication}>{this.props.win}</Text>
            </Col>
            <Col style={styles.colIndication}>
              <Text style={styles.textIndication}>{this.props.draw}</Text>
            </Col>
            <Col style={styles.colIndication}>
              <Text style={styles.textIndication}>{this.props.lose}</Text>
            </Col>
            <Col style={styles.colIndication}>
              <Text style={styles.textIndication}>{this.props.goalsDiff}</Text>
            </Col>
            <Col style={styles.colIndication}>
              <Text style={styles.textIndication} style={{fontWeight:'bold'}}>{this.props.points}</Text>
            </Col>
          </Grid>
    );
  };
};

class ClassementGeneralLegende extends React.Component {

  render() {

    return (
          <Grid style={styles.row}>
            <Col style={styles.colLegende}>
              <Text style={styles.textLegende}>J=Journée</Text>
            </Col>
            <Col style={styles.colLegende}>
              <Text style={styles.textLegende}>V=Victoire</Text>
            </Col>
            <Col style={styles.colLegende}>
              <Text style={styles.textLegende}>N=Nul</Text>
            </Col>
            <Col style={styles.colLegende}>
              <Text style={styles.textLegende}>D=Défaite</Text>
            </Col>
            <Col style={styles.colLegende}>
              <Text style={styles.textLegende}>Diff=Différence</Text>
            </Col>
            <Col style={styles.colLegende}>
              <Text style={styles.textLegende}>PTS=Points</Text>
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
  colIndicationTeam: {
    width: '60%',
    justifyContent: 'center',
  },
  colIndication: {
    borderLeftWidth: 0.5,
    borderColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    borderBottomWidth: 0.5,
    borderColor: 'lightgrey',
    marginTop: 0,
    height: 35
  },
  colLeftClassement: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '5%'
  },
  colNameTeam: {
    justifyContent: 'center',
    width: '40%'
  },
  colLogoTeam: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '10%'
  },
  logoTeam: {
    height: 20,
    width: 20
  },
  textIndication: {
    fontSize: 10
  },
  colLegende: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  textLegende: {
    fontSize: 8
  }
});

function mapDispatchToProps(dispatch) {
  return {
    ClassementTeam: function(teamId, teamStanding) {
      dispatch({
        type: 'setStandingData',
        teamId: teamId,
        teamStanding: teamStanding
      });
    },
  }
};

export default connect(null, mapDispatchToProps)(GeneralScreen);
