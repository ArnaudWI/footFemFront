import React from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import Pie from 'react-native-fab-pie';


  export default class ChartVictoire extends React.PureComponent {
    constructor(props) {
      super(props);
      // console.log("this.props.matchsGagnes :", this.props.matchsGagnes)
      // console.log("this.props.matchsTotaux :", this.props.matchsTotaux)
      const data = [this.props.matchsGagnes, this.props.matchsTotaux];
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
            marginHorizontal: 10,
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
            <Text>Victoires</Text>

          <Pie
            ref={this.pie}
            containerStyle={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 0,
            }}
            pieStyle={{
              width: 150,
              height: 80,
              flex: 1,
            }}
            outerRadius={35}
            innerRadius={20}
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
