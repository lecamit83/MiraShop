import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

class MapViews extends Component {
  static navigationOptions={
    
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          <Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324
            }}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  }
});

export default MapViews;
