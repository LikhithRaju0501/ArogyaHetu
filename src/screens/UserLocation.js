import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import * as Location from 'expo-location';
import MapView, { Circle } from 'react-native-maps';

const UserLocation = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 13.02222,
    longitude: 77.6666,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setCurrentLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    })();
  });

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  let updatedLocation = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  // console.log(currentLocation);
  // if (location) {
  //   //  console.log(location.coords.latitude);
  //   // console.log(updatedLocation);
  //   updatedLocation = {
  //     latitude: location.coords.latitude,
  //     longitude: location.coords.longitude,
  //     latitudeDelta: 0.01,
  //     longitudeDelta: 0.01,
  //   };
  // }
  // console.log(updatedLocation);

  return (
    <SafeAreaView forceInset={{ top: 'always' }} style={styles.container}>
      <Text>{JSON.stringify(currentLocation)}</Text>
      <MapView
        style={{ height: 300 }}
        initialRegion={currentLocation}
        region={currentLocation}
      >
        <Circle
          center={currentLocation}
          radius={100}
          strokeColor='rgba(158,158,255,1.0)'
          fillColor='rgba(158,158,255,0.3)'
        />
      </MapView>
    </SafeAreaView>
  );
};

export default UserLocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
