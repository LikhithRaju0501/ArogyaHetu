import React, { Component } from 'react';
import { ActivityIndicator, FlatList, View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import axios from 'axios';
import Spacer from '../components/Spacer';
import ResultDistrict from '../components/ResultDistrict';
import Factoids from '../components/Factoids';

class StateDetails extends Component {
  state = {
    stateName: [],
    showView: false,
  };
  showViewHandler = () => {
    this.setState({ showView: !this.state.showView });
  };
  componentDidMount() {
    axios
      .get('https://api.covidindiatracker.com/state_data.json')
      .then((res) => {
        res.data.map((single) => {
          // console.log(single.state);

          var joined = this.state.stateName.concat(single);
          this.setState({ stateName: joined });
          single.districtData.map((double) => {
            // console.log(double.name);
          });
        });
      });
  }
  render() {
    return (
      <SafeAreaView forceInset={{ top: 'always' }} style={{ flex: 1 }}>
        <Factoids />
        <Text h4>Covid-19 India Updates District Wise</Text>
        {this.state.stateName.length === 0 ? (
          <View style={styles.loader}>
            <ActivityIndicator size='large' style={{ marginTop: 200 }} />
          </View>
        ) : (
          <FlatList
            data={this.state.stateName}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <View>
                  <ResultDistrict result={item} />
                </View>
              );
            }}
          />
        )}
      </SafeAreaView>
    );
  }
}

export default StateDetails;

const styles = StyleSheet.create({
  loader: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
});

//https://api.covid19india.org/state_district_wise.json
//https://api.covidindiatracker.com/state_data.json
