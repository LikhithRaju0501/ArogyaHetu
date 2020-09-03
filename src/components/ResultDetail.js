import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Card, Button } from 'react-native-elements';
import Spacer from './Spacer';

class ResultsDetail extends Component {
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
                <Card.Title>
                  Confirmed: {this.props.result.confirmed} (+{' '}
                  {this.props.result.deltaconfirmed})
                </Card.Title>
                <Card.Divider />
                <Text style={{ marginBottom: 10 }}>
                  Last updated: {this.props.result.lastupdatedtime}
                </Text>
                <Text style={{ marginBottom: 10 }}>
                  Active: {this.props.result.active}
                </Text>
                <Text style={{ marginBottom: 10 }}>
                  Recovered: {this.props.result.recovered} (↑{' '}
                  <Text style={{ color: 'green' }}>
                    {this.props.result.deltarecovered}
                  </Text>
                  )
                </Text>
                <Text style={{ marginBottom: 10 }}>
                  Deaths: {this.props.result.deaths} (↑{' '}
                  <Text style={{ color: 'red' }}>
                    {this.props.result.deltadeaths}
                  </Text>
                  )
                </Text>
              </Card>
            </View>
          ) : null}
        </Spacer>
      </View>
    );
  }
}

export default ResultsDetail;
