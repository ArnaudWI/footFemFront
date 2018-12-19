import React from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import Pie from 'react-native-fab-pie';


  export default class MatchGagne extends React.PureComponent {
    constructor(props) {
      super(props);
      // console.log("this.props.matchsGagnes :", this.props.matchsGagnes)
      // console.log("this.props.matchsTotaux :", this.props.matchsTotaux)
      const data = [10];
      const colors = ['59CD90', 'CCCCCC'];

      const pieData = data
        .filter(value => value > 0)
        .map((value, index) => {
          const toRet = {
            value,
            title: `title-${index}`,
            color: `#${colors[index]}`,
            key: `pie-${index}`,
          };
          return toRet;
        });

      this.state = {
        pieData,
      };
    }

    componentDidMount() {
      this.pie.current.animate();
    }

    animate = () => {
      this.pie.current.reset().then(this.pie.current.animate);
    };

    pie = React.createRef();

    render() {
      return (
        <View
          style={{
            marginVertical: 0,
            marginHorizontal: 0,
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}
        >

          <View
            style={{
              alignItems: 'center',
            }}
          >

          <Pie
            ref={this.pie}
            containerStyle={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 0,
            }}
            pieStyle={{
              width: 40,
              height: 40,
              flex: 1,
            }}
            outerRadius={10}
            innerRadius={.01}
            data={this.state.pieData}
            animate
          >
          </Pie>
          </View>
        </View>
      );
    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
