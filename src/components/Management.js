//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions
} from "react-native";
import Header from "./header/CompanyHeader";
import Item from "./items/SubItem";
import { BACKGROUND_COLOR } from "../const/Const";
// create a component
class Management extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameOfCompany: "MiRa Shop",
      emailCompany: "31 Trấn Phú - Q. Hải Châu - TP. Đà Nẵng"
    };
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Header navigation={navigation} title="Quản lí cửa hàng" />
        <ScrollView>
          <View style={styles.intro}>
            <View style={styles.wrapInfo}>
              <Image
                style={styles.imageLogo}
                source={require("../images/logo.png")}
              />
              <View style={styles.wrapText}>
                <Text style={styles.nameCompany}>
                  {this.state.nameOfCompany}
                </Text>
                <Text>{this.state.emailCompany}</Text>
              </View>
            </View>
          </View>
          <View style={styles.contact}>
            <TouchableOpacity  style={styles.intro} >
              <Image
                style={styles.icon}
                source={require("../images/phone.png")}
              />
              <Text style={styles.textContact} >Phone</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.intro}>
              <Image
                style={styles.icon}
                source={require("../images/mes.png")}
              />
              <Text style={styles.textContact} >Messenger</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.intro}>
              <Image
                style={styles.icon}
                source={require("../images/zalo.png")}
              />
              <Text style={styles.textContact} >Zalo</Text>
            </TouchableOpacity>  
          </View>
          <View style={styles.line} />
          <View style={styles.listItems}>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const { height, width } = Dimensions.get("window");
// define your styles
const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: BACKGROUND_COLOR
  },
  intro: {
    justifyContent: "center",
    alignItems: "center"
  },
  wrapInfo: {
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  line: {
    backgroundColor: "#81C784",
    height: 1,
    width: width - 10,
    marginTop: 10,
    marginLeft: 5
  },
  imageLogo: {
    width: width / 2,
    height: width / 2,
    borderRadius: width / 4,
    resizeMode: "contain"
  },
  wrapText: {
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    height: 24,
    width: 24,
    resizeMode: "contain"
  },
  nameCompany: {
    fontSize: 25,
    color: "red",
    fontWeight: "bold"
  },
  contact: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: width / 4,
    marginRight: width / 4
  },
  textContact: {
    fontSize: 10,
  },
  listItems: {
    flexWrap: "wrap",
    flexDirection: "row"
  }
});

//make this component available to the app
export default Management;
