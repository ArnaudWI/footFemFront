import React from 'react';
import {View, Text, ScrollView, Button, StyleSheet} from 'react-native';
import {ButtonGroup} from 'react-native-elements';


//import de mes screens
import EffectifsScreen from './EffectifsScreen';
import DetailsScreen from './DetailsScreen';
import MatchsScreen from './MatchsScreen'
import HeaderScreen from '../HeaderScreen';

import {connect} from 'react-redux';

class StatsScreensList extends React.Component {

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
    const buttons = ['Détails', 'Effectifs']
    const { selectedIndex } = this.state

    return (

          <View style={styles.container}>
            <HeaderScreen title={this.props.teamStats.teamName}/>
            <ButtonGroup
              onPress={this.updateIndex}
              selectedIndex={selectedIndex}
              buttons={buttons}
              width={'100%'}
              containerStyle={{
                height: 50,
                backgroundColor: '#393E41',
                marginTop: 0,
                marginLeft: 0,
                marginRight: 0,
                borderColor: '#393E41',
                borderRadius: 0,
                borderWidth: 0
              }}
              textStyle={{
                color: '#dddddd'
              }}
              selectedTextStyle={{
                color: '#FAC05E',
              }}
              selectedButtonStyle={{
                backgroundColor: '#393E41',
                borderBottomColor: '#FAC05E',
                borderBottomWidth: 4
              }}
              underlayColor={'#393E41'}
              innerBorderStyle={{
                width: 0,
                color: '#393E41'
              }}
            />
            <ScrollView>
              { this.state.selectedIndex === 1 ? <EffectifsScreen/> :
                this.state.selectedIndex === 0 ? <DetailsScreen teamId={'1664'}/> :
                <Text>Erreur</Text>}

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
})

function mapStateToProps(state) {
  return {
    teamStats: state.teamStats,
  };
}

export default connect(mapStateToProps, null)(StatsScreensList);
