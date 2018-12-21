import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {Ionicons, MatterialCommunityIcons} from '@expo/vector-icons';

export default class EffectifsScreen extends React.Component {

  render() {

    var players = [
      {
        name: "Pauline Benoist",
        nationality: '../../public/flag-icons/FR.png',
        number: 1
      },
      {
        name: "Maryne Gignoux-Soulier",
        nationality: '../../public/flag-icons/FR.png',
        number: 16
      },
      {
        name: "Blandine Joly",
        nationality: '../../public/flag-icons/FR.png',
        number: 30
      },
      {
        name: "Gwenaëlle Butel",
        nationality: '../../public/flag-icons/FR.png',
        number: 2
      },
      {
        name: "Kelly Gadea",
        nationality: '../../public/flag-icons/FR.png',
        number: 3
      },
      {
        name: "Marine Haupais",
        nationality: '../../public/flag-icons/FR.png',
        number: 4
      },
      {
        name: "Léna Jouan",
        nationality: '../../public/flag-icons/FR.png',
        number: 28
      },
      {
        name: "Léonie Multari",
        nationality: '../../public/flag-icons/FR.png',
        number: 5
      },
      {
        name: "Mélissa Roy",
        nationality: '../../public/flag-icons/FR.png',
        number: 26
      },
      {
        name: "Teninsoun Sissoko",
        nationality: '../../public/flag-icons/FR.png',
        number: 17
      },
      {
        name: "Salma Amani",
        nationality: '../../public/flag-icons/FR.png',
        number: 7
      },
      {
        name: "Céline Chatelain",
        nationality: '../../public/flag-icons/FR.png',
        number: 12
      },
      {
        name: "Aude Moreau",
        nationality: '../../public/flag-icons/FR.png',
        number: 6
      },
      {
        name: "Maéva Clémaron",
        nationality: '../../public/flag-icons/FR.png',
        number: 21
      },
      {
        name: "Daphné Corboz",
        nationality: '../../public/flag-icons/US.png',
        number: 8
      },
      {
        name: "Rachel Corboz",
        nationality: '../../../public/flag-icons/US.png',
        number: 24
      },
      {
        name: "Charlotte Fernandes",
        nationality: '../../public/flag-icons/FR.png',
        number: 13
      },
      {
        name: "Nadjma Ali Nadjim",
        nationality: '../../public/flag-icons/FR.png',
        number: 11
      },
      {
        name: "Danaé Dunord",
        nationality: '../../public/flag-icons/FR.png',
        number: 14
      },
      {
        name: "Alexandria Lamontagne",
        nationality: '../../public/flag-icons/FR.png',
        number: 19
      },
      {
        name: "Marie-Charlotte Léger",
        nationality: '../../public/flag-icons/FR.png',
        number: 15
      },
      {
        name: "Julie Rabanne",
        nationality: '../../public/flag-icons/FR.png',
        number: 10
      },
      {
        name: "Sarah Palacin",
        nationality: '../../public/flag-icons/FR.png',
        number: 9
      },

    ]


    var buteuses = players.map((buteuse, i) =>

      <ClassementButeusesContent
        key={i}
        position={i}
        name={buteuse.name}
        nationality={buteuse.nationality}
        logo={buteuse.number}
      />
    )

    return (


            <ScrollView style={styles.container}>
              <ClassementButeusesContent/>
            </ScrollView>
    );
  };
};


class ClassementButeusesContent extends React.Component {

  render() {

    return (<View>
      <Grid>
        <Col style={styles.date}>
          <Text style={styles.eventDate}>
            Gardiennes de but
          </Text>
        </Col>
      </Grid>
      <Grid style={styles.row}>
        <Col style={styles.colLeftClassement}>
          <Text style={{
              fontWeight: 'bold'
            }}>
            #1
          </Text>
        </Col>
        <Col style={styles.colNameButeuses}>
          <Text style={styles.textButeuses}>Pauline Benoist</Text>
        </Col>
        <Col style={styles.colIndication}>
          <Image style={styles.logoTeam} source={require('../../../public/flag-icons/FR.png')}/>
        </Col>
      </Grid>
      <Grid style={styles.row}>
        <Col style={styles.colLeftClassement}>
          <Text style={{
              fontWeight: 'bold'
            }}>
            #16
          </Text>
        </Col>
        <Col style={styles.colNameButeuses}>
          <Text style={styles.textButeuses}>Maryne Gignoux-Soulier</Text>
        </Col>
        <Col style={styles.colIndication}>
          <Image style={styles.logoTeam} source={require('../../../public/flag-icons/FR.png')}/>
        </Col>
      </Grid>
      <Grid style={styles.row}>
        <Col style={styles.colLeftClassement}>
          <Text style={{
              fontWeight: 'bold'
            }}>
            #30
          </Text>
        </Col>
        <Col style={styles.colNameButeuses}>
          <Text style={styles.textButeuses}>Blandine Joly</Text>
        </Col>
        <Col style={styles.colIndication}>
          <Image style={styles.logoTeam} source={require('../../../public/flag-icons/FR.png')}/>
        </Col>
      </Grid>
      <Grid>
        <Col style={styles.date}>
          <Text style={styles.eventDate}>
            Défenseuses
          </Text>
        </Col>
      </Grid>
      <Grid style={styles.row}>
        <Col style={styles.colLeftClassement}>
          <Text style={{
              fontWeight: 'bold'
            }}>
            #2
          </Text>
        </Col>
        <Col style={styles.colNameButeuses}>
          <Text style={styles.textButeuses}>Gwenaëlle Butel</Text>
        </Col>
        <Col style={styles.colIndication}>
          <Image style={styles.logoTeam} source={require('../../../public/flag-icons/FR.png')}/>
        </Col>
      </Grid>
      <Grid style={styles.row}>
        <Col style={styles.colLeftClassement}>
          <Text style={{
              fontWeight: 'bold'
            }}>
            #3
          </Text>
        </Col>
        <Col style={styles.colNameButeuses}>
          <Text style={styles.textButeuses}>Kelly Gadea</Text>
        </Col>
        <Col style={styles.colIndication}>
          <Image style={styles.logoTeam} source={require('../../../public/flag-icons/FR.png')}/>
        </Col>
      </Grid>
      <Grid style={styles.row}>
        <Col style={styles.colLeftClassement}>
          <Text style={{
              fontWeight: 'bold'
            }}>
            #4
          </Text>
        </Col>
        <Col style={styles.colNameButeuses}>
          <Text style={styles.textButeuses}>Marine Haupais</Text>
        </Col>
        <Col style={styles.colIndication}>
          <Image style={styles.logoTeam} source={require('../../../public/flag-icons/FR.png')}/>
        </Col>
      </Grid>
      <Grid style={styles.row}>
        <Col style={styles.colLeftClassement}>
          <Text style={{
              fontWeight: 'bold'
            }}>
            #28
          </Text>
        </Col>
        <Col style={styles.colNameButeuses}>
          <Text style={styles.textButeuses}>Léna Jouan</Text>
        </Col>
        <Col style={styles.colIndication}>
          <Image style={styles.logoTeam} source={require('../../../public/flag-icons/FR.png')}/>
        </Col>
      </Grid>
      <Grid style={styles.row}>
        <Col style={styles.colLeftClassement}>
          <Text style={{
              fontWeight: 'bold'
            }}>
            #5
          </Text>
        </Col>
        <Col style={styles.colNameButeuses}>
          <Text style={styles.textButeuses}>Léonie Multari</Text>
        </Col>
        <Col style={styles.colIndication}>
          <Image style={styles.logoTeam} source={require('../../../public/flag-icons/FR.png')}/>
        </Col>
      </Grid>
      <Grid style={styles.row}>
        <Col style={styles.colLeftClassement}>
          <Text style={{
              fontWeight: 'bold'
            }}>
            #26
          </Text>
        </Col>
        <Col style={styles.colNameButeuses}>
          <Text style={styles.textButeuses}>Mélissa Roy</Text>
        </Col>
        <Col style={styles.colIndication}>
          <Image style={styles.logoTeam} source={require('../../../public/flag-icons/FR.png')}/>
        </Col>
      </Grid>
      <Grid style={styles.row}>
        <Col style={styles.colLeftClassement}>
          <Text style={{
              fontWeight: 'bold'
            }}>
            #17
          </Text>
        </Col>
        <Col style={styles.colNameButeuses}>
          <Text style={styles.textButeuses}>Teninsoun Sissoko</Text>
        </Col>
        <Col style={styles.colIndication}>
          <Image style={styles.logoTeam} source={require('../../../public/flag-icons/FR.png')}/>
        </Col>
      </Grid>
      <Grid>
        <Col style={styles.date}>
          <Text style={styles.eventDate}>
            Milieux de terrain
          </Text>
        </Col>
      </Grid>
      <Grid style={styles.row}>
        <Col style={styles.colLeftClassement}>
          <Text style={{
              fontWeight: 'bold'
            }}>
            #7
          </Text>
        </Col>
        <Col style={styles.colNameButeuses}>
          <Text style={styles.textButeuses}>Salma Amani</Text>
        </Col>
        <Col style={styles.colIndication}>
          <Image style={styles.logoTeam} source={require('../../../public/flag-icons/FR.png')}/>
        </Col>
      </Grid>
      <Grid style={styles.row}>
        <Col style={styles.colLeftClassement}>
          <Text style={{
              fontWeight: 'bold'
            }}>
            #12
          </Text>
        </Col>
        <Col style={styles.colNameButeuses}>
          <Text style={styles.textButeuses}>Céline Chatelain</Text>
        </Col>
        <Col style={styles.colIndication}>
          <Image style={styles.logoTeam} source={require('../../../public/flag-icons/FR.png')}/>
        </Col>
      </Grid>
      <Grid style={styles.row}>
        <Col style={styles.colLeftClassement}>
          <Text style={{
              fontWeight: 'bold'
            }}>
            #6
          </Text>
        </Col>
        <Col style={styles.colNameButeuses}>
          <Text style={styles.textButeuses}>Aude Moreau</Text>
        </Col>
        <Col style={styles.colIndication}>
          <Image style={styles.logoTeam} source={require('../../../public/flag-icons/FR.png')}/>
        </Col>
      </Grid>
      <Grid style={styles.row}>
        <Col style={styles.colLeftClassement}>
          <Text style={{
              fontWeight: 'bold'
            }}>
            #21
          </Text>
        </Col>
        <Col style={styles.colNameButeuses}>
          <Text style={styles.textButeuses}>Maéva Clémaron</Text>
        </Col>
        <Col style={styles.colIndication}>
          <Image style={styles.logoTeam} source={require('../../../public/flag-icons/FR.png')}/>
        </Col>
      </Grid>
      <Grid style={styles.row}>
        <Col style={styles.colLeftClassement}>
          <Text style={{
              fontWeight: 'bold'
            }}>
            #6
          </Text>
        </Col>
        <Col style={styles.colNameButeuses}>
          <Text style={styles.textButeuses}>Daphné Corboz</Text>
        </Col>
        <Col style={styles.colIndication}>
          <Image style={styles.logoTeam} source={require('../../../public/flag-icons/US.png')}/>
        </Col>
      </Grid>
      <Grid style={styles.row}>
        <Col style={styles.colLeftClassement}>
          <Text style={{
              fontWeight: 'bold'
            }}>
            #24
          </Text>
        </Col>
        <Col style={styles.colNameButeuses}>
          <Text style={styles.textButeuses}>Rachel Corboz</Text>
        </Col>
        <Col style={styles.colIndication}>
          <Image style={styles.logoTeam} source={require('../../../public/flag-icons/US.png')}/>
        </Col>
      </Grid>
      <Grid style={styles.row}>
        <Col style={styles.colLeftClassement}>
          <Text style={{
              fontWeight: 'bold'
            }}>
            #13
          </Text>
        </Col>
        <Col style={styles.colNameButeuses}>
          <Text style={styles.textButeuses}>Charlotte Fernandes</Text>
        </Col>
        <Col style={styles.colIndication}>
          <Image style={styles.logoTeam} source={require('../../../public/flag-icons/FR.png')}/>
        </Col>
      </Grid>
      <Grid>
        <Col style={styles.date}>
          <Text style={styles.eventDate}>
            Attaquantes
          </Text>
        </Col>
      </Grid>
      <Grid style={styles.row}>
        <Col style={styles.colLeftClassement}>
          <Text style={{
              fontWeight: 'bold'
            }}>
            #11
          </Text>
        </Col>
        <Col style={styles.colNameButeuses}>
          <Text style={styles.textButeuses}>Nadjma Ali Nadjim</Text>
        </Col>
        <Col style={styles.colIndication}>
          <Image style={styles.logoTeam} source={require('../../../public/flag-icons/FR.png')}/>
        </Col>
      </Grid>
      <Grid style={styles.row}>
        <Col style={styles.colLeftClassement}>
          <Text style={{
              fontWeight: 'bold'
            }}>
            #14
          </Text>
        </Col>
        <Col style={styles.colNameButeuses}>
          <Text style={styles.textButeuses}>Danaé Dunord</Text>
        </Col>
        <Col style={styles.colIndication}>
          <Image style={styles.logoTeam} source={require('../../../public/flag-icons/FR.png')}/>
        </Col>
      </Grid>
      <Grid style={styles.row}>
        <Col style={styles.colLeftClassement}>
          <Text style={{
              fontWeight: 'bold'
            }}>
            #19
          </Text>
        </Col>
        <Col style={styles.colNameButeuses}>
          <Text style={styles.textButeuses}>Alexandria Lamontagne</Text>
        </Col>
        <Col style={styles.colIndication}>
          <Image style={styles.logoTeam} source={require('../../../public/flag-icons/CA.png')}/>
        </Col>
      </Grid>
      <Grid style={styles.row}>
        <Col style={styles.colLeftClassement}>
          <Text style={{
              fontWeight: 'bold'
            }}>
            #15
          </Text>
        </Col>
        <Col style={styles.colNameButeuses}>
          <Text style={styles.textButeuses}>Marie-Charlotte Léger</Text>
        </Col>
        <Col style={styles.colIndication}>
          <Image style={styles.logoTeam} source={require('../../../public/flag-icons/FR.png')}/>
        </Col>
      </Grid>
      <Grid style={styles.row}>
        <Col style={styles.colLeftClassement}>
          <Text style={{
              fontWeight: 'bold'
            }}>
            #10
          </Text>
        </Col>
        <Col style={styles.colNameButeuses}>
          <Text style={styles.textButeuses}>Julie Rabanne</Text>
        </Col>
        <Col style={styles.colIndication}>
          <Image style={styles.logoTeam} source={require('../../../public/flag-icons/FR.png')}/>
        </Col>
      </Grid>
      <Grid style={styles.row}>
        <Col style={styles.colLeftClassement}>
          <Text style={{
              fontWeight: 'bold'
            }}>
            #9
          </Text>
        </Col>
        <Col style={styles.colNameButeuses}>
          <Text style={styles.textButeuses}>Sarah Palacin</Text>
        </Col>
        <Col style={styles.colIndication}>
          <Image style={styles.logoTeam} source={require('../../../public/flag-icons/FR.png')}/>
        </Col>
      </Grid>
      <View style={{height: 130}}>

      </View>
    </View>);
  };
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7EB'
  },
  colIndicationButeuses: {
    width: '80%',
    justifyContent: 'center',
  },
  textIndicationButeuses: {
    marginLeft: 40,
    fontWeight: 'bold',
    fontSize: 13
  },
  colIndication: {
    borderLeftWidth: 0.5,
    borderColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    borderTopWidth: 0.5,
    borderColor: 'lightgrey',
    marginTop: 0,
    height: 50,
    backgroundColor: '#F6F7EB'
  },
  colLeftClassement: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '10%',
    paddingLeft: "3%",
  },
  colNameButeuses: {
    paddingLeft: "5%",
    justifyContent: 'center',
    width: '80%'
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
  textButeuses: {
    fontSize: 18,
  },
  textGoals: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  date: {
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
});
