//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  StatusBar,
  Platform
} from "react-native";

import {
  HEADER_HEIGHT,
  BACKGROUND_COLOR_HEADER,
  BACKGROUND_COLOR
} from "../../const/Const";

// create a component
class CompanyHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title
    };
  }

  render() {
    const { container, icon, iconBack } = styles;
    const { navigation } = this.props;
    return (
      <View style={container}>
        {/* <StatusBar
          style={{
            height: Platform.OS === "ios" ? 20 : 0,
            backgroundColor: BACKGROUND_COLOR_HEADER
          }}
        /> */}
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require("../../images/back.png")} style={iconBack} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ color: "#212121", fontSize: 22, fontWeight: "400" }}>
            {this.state.title}
          </Text>
        </View>
        <View>
          <Image source={require("../../images/settings.png")} style={icon} />
        </View>
      </View>
    );
  }
}

const { height, width } = Dimensions.get("window");

// define your styles
const styles = StyleSheet.create({
  container: {
    height: HEADER_HEIGHT,
    backgroundColor: BACKGROUND_COLOR_HEADER,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center"
  },

  icon: {
    height: 30,
    width: 30,
    marginLeft: 8,
    marginRight: 8
  },

  iconBack: {
    height: 35,
    width: 35,
    marginLeft: 8,
    marginRight: 8
  }
});

//make this component available to the app
export default CompanyHeader;
