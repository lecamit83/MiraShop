import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { DrawerItems, SafeAreaView } from "react-navigation";

import * as CONST from "../../const/Const";

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true
    };
  }
  render() {
    const { container, wrapLogo, wrapIndex, item, imageLogo } = styles;
    const { navigation } = this.props;

    const IsntLoginJSX = (
      <ScrollView>
        <TouchableOpacity
          style={item}
          onPress={() => navigation.navigate("MainStack")}
        >
          <Text>{CONST.ALL_SP}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={item}>
          <Text>{CONST.THUOC}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={item}>
          <Text>{CONST.TP_CN}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={item}>
          <Text>{CONST.VT_YT}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={item}>
          <Text>{CONST.TIM_CONG_TY}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={item}
          onPress={() => this.props.navigation.navigate("LoginStack")}
        >
          <Text>{CONST.SIGN_IN}</Text>
        </TouchableOpacity>
      </ScrollView>
    );
    const IsLoginJSX = (
      <ScrollView>
        <TouchableOpacity
          style={item}
          onPress={() => navigation.navigate("MainStack")}
        >
          <Text>{CONST.ALL_SP}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={item}>
          <Text>{CONST.THUOC}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={item}>
          <Text>{CONST.TP_CN}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={item}>
          <Text>{CONST.VT_YT}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={item}
          onPress={() => this.props.navigation.navigate("ManageStack")}
        >
          <Text>{CONST.QUAN_LI}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={item}
          onPress={() => this.setState({ isLogin: false })}
        >
          <Text>{CONST.SIGN_OUT}</Text>
        </TouchableOpacity>
      </ScrollView>
    );
    const SideMenuJSX = this.state.isLogin ? IsLoginJSX : IsntLoginJSX;
    return (
      <SafeAreaView style={container}>
        <View style={wrapLogo}>
          <Image style={imageLogo} source={require("../../images/logo.png")} />
        </View>
        <View style={wrapIndex}>{SideMenuJSX}</View>
      </SafeAreaView>
    );
  }
}

const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CONST.BACKGROUND_COLOR,
  },
  wrapLogo: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  imageLogo : {
    width: width * 2 / 3,
    height : (width * 2 / 3) * 66 / 144,
  },
  wrapIndex: {
    flex: 7,
    alignItems: "center"
  },
  item: {
    backgroundColor: "#FFF",
    width: width * 2 / 3,
    height: height / 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: height / 32,
    marginTop: 10
  }
});
