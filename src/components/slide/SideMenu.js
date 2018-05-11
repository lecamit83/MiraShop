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

import { connect } from "react-redux";

class SideMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      container,
      wrapLogo,
      wrapIndex,
      item,
      imageLogo,
      sign,
      line,
      index,
      wrapImage,
      icon,
      wrapText,
      text
    } = styles;
    const { navigation } = this.props;

    const IsntLoginJSX = (
      <ScrollView>
        <TouchableOpacity
          style={item}
          onPress={() => navigation.navigate("MainStack")}
        >
          <View style={index}>
            <View style={wrapImage}>
              <Image
                style={icon}
                source={require("../../images/hospital_products.png")}
              />
            </View>
            <View style={wrapText}>
              <Text style={text}>{CONST.ALL_SP}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={line} />
        <TouchableOpacity style={item}>
          <View style={index}>
            <View style={wrapImage}>
              <Image
                style={icon}
                source={require("../../images/medicine.png")}
              />
            </View>
            <View style={wrapText}>
              <Text style={text}>{CONST.THUOC}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={line} />
        <TouchableOpacity style={item}>
          <View style={index}>
            <View style={wrapImage}>
              <Image
                style={icon}
                source={require("../../images/healthy_foods.png")}
              />
            </View>
            <View style={wrapText}>
              <Text style={text}>{CONST.TP_CN}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={line} />
        <TouchableOpacity style={item}>
          <View style={index}>
            <View style={wrapImage}>
              <Image
                style={icon}
                source={require("../../images/medical_supplies.png")}
              />
            </View>
            <View style={wrapText}>
              <Text style={text}>{CONST.VT_YT}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={line} />
        <TouchableOpacity style={item}>
          <View style={index}>
            <View style={wrapImage}>
              <Image
                style={icon}
                source={require("../../images/searchIcon.png")}
              />
            </View>
            <View style={wrapText}>
              <Text style={text}>{CONST.TIM_CONG_TY}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
    const IsLoginJSX = (
      <ScrollView>
        <TouchableOpacity
          style={item}
          onPress={() => navigation.navigate("MainStack")}
        >
          <View style={index}>
            <View style={wrapImage}>
              <Image
                style={icon}
                source={require("../../images/hospital_products.png")}
              />
            </View>
            <View style={wrapText}>
              <Text style={text}>{CONST.ALL_SP}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={line} />
        <TouchableOpacity style={item}>
          <View style={index}>
            <View style={wrapImage}>
              <Image
                style={icon}
                source={require("../../images/medicine.png")}
              />
            </View>
            <View style={wrapText}>
              <Text style={text}>{CONST.THUOC}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={line} />
        <TouchableOpacity style={item}>
          <View style={index}>
            <View style={wrapImage}>
              <Image
                style={icon}
                source={require("../../images/healthy_foods.png")}
              />
            </View>
            <View style={wrapText}>
              <Text style={text}>{CONST.TP_CN}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={line} />
        <TouchableOpacity style={item}>
          <View style={index}>
            <View style={wrapImage}>
              <Image
                style={icon}
                source={require("../../images/medical_supplies.png")}
              />
            </View>
            <View style={wrapText}>
              <Text style={text}>{CONST.VT_YT}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={line} />
        <TouchableOpacity
          style={item}
          onPress={() => this.props.navigation.navigate("ManageStack")}
        >
          <View style={index}>
            <View style={wrapImage}>
              <Image
                style={icon}
                source={require("../../images/profile.png")}
              />
            </View>
            <View style={wrapText}>
              <Text style={text}>{CONST.QUAN_LI}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={line} />
        <TouchableOpacity
          style={item}
          onPress={() => this.setState({ isLogin: false })}
        >
          <View style={index}>
            <View style={wrapImage}>
              <Image style={icon} source={require("../../images/logout.png")} />
            </View>
            <View style={wrapText}>
              <Text style={text}>{CONST.SIGN_OUT}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={line} />
      </ScrollView>
    );
    const LOGIN = (
      <View style={sign}>
        <TouchableOpacity>
          <Text style={styles.signIn}>{CONST.SIGN_IN}</Text>
        </TouchableOpacity>
        <View style={{ backgroundColor: "black", width: 1, height: 19 }} />
        <TouchableOpacity>
          <Text style={styles.signIn}>{CONST.SIGN_UP}</Text>
        </TouchableOpacity>
      </View>
    );

    const SideMenuJSX = this.props.isLogin ? IsLoginJSX : IsntLoginJSX;
    const LOGINJSX = this.props.isLogin ? null : LOGIN;
    return (
      <SafeAreaView style={container}>
        <View style={wrapLogo}>
          <Image style={imageLogo} source={require("../../images/logo.png")} />
          {LOGINJSX}
        </View>
        <View style={wrapIndex}>{SideMenuJSX}</View>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLogin: state.login
  };
}

export default connect(mapStateToProps)(SideMenu);

const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  wrapLogo: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: CONST.BACKGROUND_COLOR_HEADER
  },
  imageLogo: {
    width: width * 2 / 3,
    height: width * 2 / 3 * 66 / 144
  },
  wrapIndex: {
    flex: 7,
    marginLeft: 16,
    marginRight: 16
  },
  item: {
    backgroundColor: "#FFF",
    height: 48,
    justifyContent: "center"
  },
  sign: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  signIn: {
    fontSize: 15,
    padding: 4
  },
  line: { backgroundColor: CONST.LINE, height: 1, opacity: 0.6, },
  index: { flexDirection: "row" },
  wrapImage: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  icon: { height: 20, width: 20, resizeMode: "contain", opacity: 0.6 },
  wrapText: { marginLeft: 16, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 16 }
});
