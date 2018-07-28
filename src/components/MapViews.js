import React, { Component } from "react";
import { StyleSheet, View, Dimensions, AsyncStorage } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { connect } from "react-redux";

import Header from "./header/CompanyHeader";
import { MAP_POSITION } from "../Constant";
import {fetchCompany} from "../redux/actions/actionCreators";

const { height, width } = Dimensions.get("window");
const LAT_DEL = 0.012;
const LNG_DEL = (LAT_DEL * width) / height;

class MapViews extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header navigation={navigation} title="Bản Đồ" />
  });

  constructor(props) {
    super(props);
    this.state = {
      regionPosition: {
        latitude: 16.074971,
        longitude: 108.2214883,
        latitudeDelta: LAT_DEL,
        longitudeDelta: LNG_DEL
      },
      markerPosition: {
        latitude: 16.074971,
        longitude: 108.2214883
      }
    };
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          regionPosition: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LAT_DEL,
            longitudeDelta: LNG_DEL
          },
          markerPosition: {
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
    this.watchID = navigator.geolocation.watchPosition(
      position => {
        this.setState({
          regionPosition: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LAT_DEL,
            longitudeDelta: LNG_DEL
          }
        });
      },
      err => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        useSignificantChanges: true
      }
    );
  }

  render() {
    const { regionPosition, markerPosition } = this.state;
    const { map, container, radius, marker } = styles;
    const { companys } = this.props;
    console.log(companys);
    
    return (
      <View style={container}>
        <MapView style={map} ref="map" region={regionPosition}>
          <Marker coordinate={markerPosition}>
            <View style={radius}>
              <View style={marker} />
            </View>
          </Marker>
        </MapView>
      </View>
    );
  }
  componentDidMount() {
    if(this.props.companys.length == 0) {
      this.props.fetchCompany("http://api.hifapp.com/api/ncc");
    }
  }
  // Demo AsyncStore = ShareReferences in Android
  _storeLastPosition = async data => {
    try {
      await AsyncStorage.setItem(MAP_POSITION, JSON.stringify(data));
    } catch (error) {
      throw error;
    }
  };
  _retrieveLastPosition = async () => {
    try {
      const value = await AsyncStorage.getItem(MAP_POSITION);
      if (value !== null) {
        var pos = JSON.parse(value);
        console.log(pos);
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  componentWillUnmount() {
    var data = {
      latitude: this.state.regionPosition.latitude,
      longitude: this.state.regionPosition.longitude,
      latitudeDelta: LAT_DEL,
      longitudeDelta: LNG_DEL
    };
    //this._storeLastPosition(data);

    navigator.geolocation.clearWatch(this.watchID);
  }
}

const styles = StyleSheet.create({
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: "hidden",
    backgroundColor: "rgba(0,122,255,0.1)",
    borderWidth: 1,
    borderColor: "rgba(0,112,255,0.3)",
    justifyContent: "center",
    alignItems: "center"
  },
  marker: {
    height: 20,
    width: 20,
    borderRadius: 20 / 2,
    overflow: "hidden",
    backgroundColor: "#007AFF",
    borderWidth: 1,
    borderColor: "white"
  },
  container: {
    flex: 1
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
function mapStateToProps(state) {
  return {
    companys: state.companys.arrCo
  };
}
export default connect(
  mapStateToProps,
  { fetchCompany }
)(MapViews);
