import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image, List, ListItem, Switch} from 'react-native';
import {Ionicons, MatterialCommunityIcons} from '@expo/vector-icons';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {ButtonGroup} from 'react-native-elements';

export default class RencontresScreen extends React.Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: 0

    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  render() {
    return (<View style={styles.container}>
      <Header/>
        <Journee/>
      <ScrollView>
        <View style={styles.date}>
          <Text style={styles.eventDate}>Samedi 15 Décembre</Text>
        </View>
        <Rencontres/>

      </ScrollView>
    </View>);
  };
};

class Header extends React.Component {
  state = {
    switchValue: false
  };

  _handleToggleSwitch = () => this.setState(state => ({
    switchValue: !state.switchValue
  }));
  render() {
    return (<View style={styles.header}>
      <Grid>
        <Col style={{
            width: '20%'
          }}></Col>
        <Col>
          <Text style={styles.headertitle}>Rencontres</Text>
        </Col>
        <Col style={styles.toggleSwitch}>
          <Text style={{color: "#FFFFFF", fontSize: 20}}>Live</Text>
          <Switch onValueChange={this._handleToggleSwitch} value={this.state.switchValue}/>
        </Col>
      </Grid>
    </View>);
  };
};

// class ChoixJournee extends React.Component {
//
//   constructor () {
//     super()
//     this.state = {
//       selectedIndex: 0
//
//     }
//     this.updateIndex = this.updateIndex.bind(this)
//   }
//
//   updateIndex (selectedIndex) {
//     this.setState({selectedIndex})
//   }
//
//
//   render() {
//     const buttons = [<Ionicons name="md-arrow-dropleft" size={26} color="#dddddd" />, '11ème Journée', <Ionicons name="md-arrow-dropright" size={26} color="#dddddd" />]
//     const { selectedIndex } = this.state
//
//     return (
//
//               <ButtonGroup
//                 onPress={this.updateIndex}
//                 selectedIndex={selectedIndex}
//                 buttons={buttons}
//                 width={'100%'}
//                 containerStyle={{
//                   height: 50,
//                   backgroundColor: '#393E41',
//                   marginTop: 0,
//                   marginLeft: 0,
//                   marginRight: 0,
//                   borderColor: '#393E41',
//                   borderRadius: 0,
//                   borderWidth: 0
//                 }}
//                 textStyle={{
//                   color: '#dddddd'
//                 }}
//                 selectedTextStyle={{
//                   color: '#dddddd',
//                 }}
//                 selectedButtonStyle={{
//                   backgroundColor: '#393E41',
//
//                 }}
//                 underlayColor={'#dddddd'}
//                 innerBorderStyle={{
//                   width: 0,
//                   color: '#393E41'
//                 }}
//               />
//             <ScrollView>
//               {this.state.selectedIndex === 0 ? <GeneralScreen/> :
//                 this.state.selectedIndex === 1 ? <ButeusesScreen/> :
//                 this.state.selectedIndex === 2 ? <PasseusesScreen/> :
//                 <Text>Erreur</Text>}
//
//             </ScrollView>
//
//     );
//   };
// };

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
            <Text style={styles.homeTeamTitle}>FC Girondins de Bordeaux</Text>
          </Col>
          <Col style={styles.colLogo}>
            <Image style={{width: 25, height: 25}} source={{ uri:'http://www.statsfootofeminin.fr/img/logo_gbfc.png'}}
            />
          </Col>
          <Col style={styles.colScore}>

            {/* <Text style={styles.goalTitle}>14:30</Text> */}
            <Text style={styles.liveTime}>Live 59'</Text>
            <Text style={styles.goalTitle}>1-3</Text>
            <Text style={styles.mtScore}>(0-1)</Text>

          </Col>
          <Col style={styles.colLogo}>
            <Image style={{width: 25, height: 25}} source={{ uri:'http://www.statsfootofeminin.fr/img/logo_ol.png'}}
            />
          </Col>
          <Col style={styles.colTeam}>
            <Text style={styles.awayTeamTitle}>Olympique Lyonnais</Text>
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
    textAlign: 'left'
  },
  match: {
    borderTopWidth: 1,
    height: 80,
    borderColor: '#D3D3D3',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
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
