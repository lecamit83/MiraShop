import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import Header from "./header/CompanyHeader";

const {height, width} = Dimensions.get("window");
const LAT_DEL = 0.012;
const LNG_DEL = LAT_DEL * width / height;

class MapViews extends Component {
  static navigationOptions =({navigation}) =>({
    header: <Header navigation={navigation} title="Bản Đồ" />
  });

  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 16.074971,
        longitude: 108.2214883,
        latitudeDelta: LAT_DEL,
        longitudeDelta: LNG_DEL
      },
      marker: {
        latitude: 16.074971,
        longitude: 108.2214883,
      }
    };
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LAT_DEL,
            longitudeDelta: LNG_DEL
          },
          marker: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
        });
      },
      err => {
        console.log(err);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView style={{ flex: 1 }} initialRegion={this.state.region}>
          <Marker coordinate={this.state.marker} title="MiraShop" description="31-TranPhu" onPress={()=>this.props.navigation.navigate("DetailCompany")}/>
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
