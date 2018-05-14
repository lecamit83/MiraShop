//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";

import Header from "./header/CompanyHeader";
import UserInput from "./items/UserInput";
import {
  EMAIL,
  PASSWORD,
  PASSWORD_AGAIN,
  HO_TEN,
  DON_VI,
  MA_SO_KINH_DOANH,
  MA_SO_THUE,
  SO_DIEN_THOAI,
  SIGN_UP
} from "../const/Const";
// create a component
class SignUp extends Component {
  render() {
    const { navigation } = this.props;
    const { container } = styles;
    return (
      <View style={container}>
        <Header navigation={navigation} title={SIGN_UP} />
        <ScrollView>
          <UserInput placeholder={DON_VI} />
          <UserInput placeholder={MA_SO_KINH_DOANH} />
          <UserInput placeholder={SO_DIEN_THOAI} />
          <UserInput placeholder={PASSWORD} secure={true} />
          <UserInput placeholder={PASSWORD_AGAIN} secure={true} />
          <UserInput placeholder={HO_TEN} />
          <UserInput placeholder={MA_SO_THUE} />
          <TouchableOpacity style={styles.borderButton}>
            <Text style={styles.textButton}>{SIGN_UP}</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  borderButton: {
    marginTop: 5,
    borderColor: "gray",
    backgroundColor: "#FFF",
    borderWidth: 1,
    alignSelf: "center",
    marginBottom: 10,
    borderRadius: 10
  },
  textButton: {
    fontSize: 20,
    color: "green",
    padding: 5
  }
});

//make this component available to the app
export default SignUp;
