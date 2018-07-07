import React, { Component } from "react";
import {
  StyleSheet,
  View,
  // Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from "react-native";

import { DrawerItems, SafeAreaView } from "react-navigation";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  List,
  ListItem,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
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
    const { navigation, account } = this.props;

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
                source={require("../../images/medical_supplies.png")}
              />
            </View>
            <View style={wrapText}>
              <Text style={text}>{CONST.MY_PHAM}</Text>
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
        <TouchableOpacity style={item}>
          <View style={index}>
            <View style={wrapImage}>
              <Image
                style={icon}
                source={require("../../images/medical_supplies.png")}
              />
            </View>
            <View style={wrapText}>
              <Text style={text}>{CONST.MY_PHAM}</Text>
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
          onPress={() => this.props.dispatch({ type: "SIGN_OUT" })}
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
        <Button
          transparent
          onPress={() => {
            navigation.navigate("SignInStack");
          }}
        >
          {/* <Icon name = "log-in" /> */}
          <Text style={styles.signIn}>{CONST.SIGN_IN}</Text>
        </Button>
        <View style={{ backgroundColor: "black", width: 1, height: 19 }} />
        <Button
          transparent
          onPress={() => {
            navigation.navigate("SignUpStack");
          }}
        >
          <Text style={styles.signIn}>{CONST.SIGN_UP}</Text>
        </Button>
      </View>
    );

    const LIST_MENU_ITEM = (
      <Content>
        <List>
          <ListItem itemDivider>
            <Text style={{ fontWeight: "bold" }}>DANH MỤC SẢN PHẨM</Text>
          </ListItem>
          <ListItem icon>
            <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => { navigation.navigate("MainStack") }}>
              <Left>
                <Icon name="medical" />
              </Left>
              <Body>
                <Text>Thuốc</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </TouchableOpacity>
          </ListItem>
          <ListItem icon>
            <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => { navigation.navigate("MainStack") }}>
              <Left>
                <Icon name="medkit" />
              </Left>
              <Body>
                <Text>Thực Phẩm Chức Năng</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </TouchableOpacity>
          </ListItem>
          <ListItem icon>
            <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => { navigation.navigate("MainStack") }}>
              <Left>
                <Icon name="cog" />
              </Left>
              <Body>
                <Text>Vật Tư & Thiết Bị Y Tế</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </TouchableOpacity>
          </ListItem>
          <ListItem icon>
            <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => { navigation.navigate("MainStack") }}>
              <Left>
                <Icon name="color-filter" />
              </Left>
              <Body>
                <Text>Mỹ Phẩm</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </TouchableOpacity>
          </ListItem>
          <ListItem itemDivider>
            <Text style={{ fontWeight: "bold" }}>CÔNG TY</Text>
          </ListItem>
          <ListItem icon>
            <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => { navigation.navigate("CompanyStack") }}>
              <Left>
                <Icon name="search" />
              </Left>
              <Body>
                <Text>Tìm Công Ty</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </TouchableOpacity>
          </ListItem>
        </List>
      </Content>
    );
    var LOGINJSX;
    if(account) {
      if(account.status){
        LOGINJSX = null;
      } else {
        LOGINJSX = LOGIN;
      }
    } else {
      LOGINJSX = LOGIN;
    }
    console.log(account);
    
    return (
      <SafeAreaView style={container}>
        <View style={wrapLogo}>
          <Left>
            <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => { navigation.navigate("CompanyProfileStack") }}>
              <Thumbnail source={require("../../images/profile.png")} />
            </TouchableOpacity>
          </Left>
          <Body>
            <Text
              style={{
                fontSize: 17,
                color: "#FFF",
                fontWeight: "bold",
                marginTop: 5,
                marginBottom: 5
              }}
            >
              {(account && account.status) ? account.useraccount_fullname : null}
            </Text>
            <Text note>{(account && account.status) ? account.useraccount_diachi : null}</Text>
          </Body>

          {LOGINJSX}
        </View>
        <View style={wrapIndex}>{LIST_MENU_ITEM}</View>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    account: state.login.account
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
    backgroundColor: CONST.BACKGROUND_COLOR_HEADER,
    paddingTop: 15,
    padding: 5
  },

  imageLogo: {
    width: width * 2 / 3,
    height: width * 2 / 3 * 66 / 144
  },

  wrapIndex: {
    flex: 8
    // marginLeft: 16,
    // marginRight: 16
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
    // marginTop: 15
  },

  signIn: {
    fontSize: 17,
    // padding: 4,
    color: "#000"
  },

  line: { backgroundColor: CONST.LINE, height: 1, opacity: 0.6 },
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
