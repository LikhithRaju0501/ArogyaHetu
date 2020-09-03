import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import axios from 'axios';
import ResultsDetail from '../components/ResultDetail';
import Factoids from '../components/Factoids';

class Statewise extends Component {
  state = {
    totalCases: null,
  };
  componentDidMount() {
    axios.get('https://api.covid19india.org/data.json').then((res) => {
      this.setState({ totalCases: res.data.statewise });
    });
  }

  render() {
    return (
      <SafeAreaView forceInset={{ top: 'always' }} style={{ flex: 1 }}>
        <View>
          <Factoids />
        </View>

        <Text h4>Covid-19 India Updates State Wise</Text>
        {this.state.totalCases === null ? (
          <View style={styles.loader}>
            <ActivityIndicator size='large' style={{ marginTop: 200 }} />
          </View>
        ) : (
          <FlatList
            data={this.state.totalCases}
            keyExtractor={(item) => item.statecode}
            renderItem={({ item }) => {
              return (
                <View>
                  <ResultsDetail result={item} />
                </View>
              );
            }}
          />
        )}
      </SafeAreaView>
    );
  }
}

export default Statewise;

const styles = StyleSheet.create({
  loader: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
});
