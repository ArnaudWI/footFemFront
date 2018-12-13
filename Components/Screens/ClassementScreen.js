import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {ButtonGroup} from 'react-native-elements';

//import de mes screens
import ButeusesScreen from '../Screens/Classement/ButeusesScreen';
import PasseusesScreen from '../Screens/Classement/PasseusesScreen';
import GeneralScreen from '../Screens/Classement/GeneralScreen'
import HeaderScreen from '../Screens/HeaderScreen';

export default class ClassementScreen extends React.Component {

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
    const buttons = ['Général', 'Buteuses', 'Passeuses']
    const { selectedIndex } = this.state

    return (

          <View>
            <HeaderScreen title={"Classement"}/>
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
              {this.state.selectedIndex === 0 ? <GeneralScreen/> :
                this.state.selectedIndex === 1 ? <ButeusesScreen/> :
                this.state.selectedIndex === 2 ? <PasseusesScreen/> :
                <Text>Erreur</Text>}

            </ScrollView>
          </View>
    );
  };
};
