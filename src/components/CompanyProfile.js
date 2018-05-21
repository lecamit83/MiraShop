//import liraries
import React, { Component } from "react";
import {
  View,
  // Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Dimensions
} from "react-native";

import { connect } from "react-redux";

import {
  Container,
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

import Header from "./header/CompanyHeader";
import Item from "./items/SubItem";
import { BACKGROUND_COLOR } from "../const/Const";

// create a component
class Management extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameOfCompany: "MiRa Shop",
      emailCompany: "31 Trần Phú - Q. Hải Châu - TP. Đà Nẵng"
    };
  }
  render() {
    const { navigation, companyProduct } = this.props;
    return (
      <View style={styles.container}>
        <Header navigation={navigation} title="Quản lí cửa hàng" />
        <ScrollView>
          <View style={styles.intro}>
            <View style={styles.wrapInfo}>
              {/* <Image
                style={styles.imageLogo}
                source={require("../images/logo.png")}
              /> */}
              <Thumbnail source={require("../images/profile.png")} />
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
        <FlatList
          data={companyProduct}
          renderItem={({item}) => <Item navigation={navigation} name={item.name} cost={item.cost}/>}
          keyExtractor={(item, index) => index.toString()}
          numColumns={1}
        />
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
    width: 100,
    height: 100,
    borderRadius: 10,
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
    // flexWrap: "wrap",
    flex: 1,
    // flexDirection: "row"
    backgroundColor: BACKGROUND_COLOR
  }
});

//make this component available to the app
function mapStateToProps(state) {
  return {
    companyProduct: state.companyProduct,
  };
}
export default connect(mapStateToProps)(Management);