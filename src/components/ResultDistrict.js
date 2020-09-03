import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Card, Button } from 'react-native-elements';
import Spacer from './Spacer';

class ResultDistrict extends Component {
  state = {
    showView: false,
  };

  showViewHandler = () => {
    this.setState({ showView: !this.state.showView });
  };
  render() {
    return (
      <View>
        <Spacer>
          {this.props.result ? (
            <Button
              title={this.props.result.state}
              type='outline'
              raised
              onPress={() => this.showViewHandler()}
            />
          ) : (
            <Text>Loading</Text>
          )}

          {this.state.showView ? (
            <View>
              <Card>
                {this.props.result.districtData.map((l) => {
                  return (
                    <Text h5 key={l.id}>
                      {l.name} : {l.confirmed}
                    </Text>
                  );
                })}
              </Card>
            </View>
          ) : null}
        </Spacer>
      </View>
    );
  }
}

export default ResultDistrict;
