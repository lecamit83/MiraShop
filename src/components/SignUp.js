//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";

import { Container, Content, Form, Item, Button, Input, Label } from 'native-base';

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
  SIGN_UP,
  BACKGROUND_COLOR_HEADER
} from "../const/Const";
// create a component
class SignUp extends Component {
  render() {
    const { navigation } = this.props;
    const { container } = styles;
    return (
      // <View style={container}>
      //   <Header navigation={navigation} title={SIGN_UP} />
      //   <ScrollView>
      //     <UserInput placeholder={DON_VI} />
      //     <UserInput placeholder={MA_SO_KINH_DOANH} />
      //     <UserInput placeholder={SO_DIEN_THOAI} />
      //     <UserInput placeholder={PASSWORD} secure={true} />
      //     <UserInput placeholder={PASSWORD_AGAIN} secure={true} />
      //     <UserInput placeholder={HO_TEN} />
      //     <UserInput placeholder={MA_SO_THUE} />
      //     <TouchableOpacity style={styles.borderButton}>
      //       <Text style={styles.textButton}>{SIGN_UP}</Text>
      //     </TouchableOpacity>
      //   </ScrollView>
      // </View>N

      <ScrollView>
        <Header navigation={navigation} title={SIGN_UP} />
        <Content style = {{marginLeft: 15, marginRight: 15, alignContent: "center"}}>
          <Form>
            <Item floatingLabel >
              <Label>{DON_VI}</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>{MA_SO_KINH_DOANH}</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>{HO_TEN}</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>{MA_SO_THUE}</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>{SO_DIEN_THOAI}*</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>{EMAIL}</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>{PASSWORD}*</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>{PASSWORD_AGAIN}*</Label>
              <Input />
            </Item>
            <Button full info style = {{margin: 15, marginTop: 45, borderRadius: 5, backgroundColor: BACKGROUND_COLOR_HEADER}}>
              <Text>ĐĂNG KÝ</Text>
            </Button>
          </Form>
        </Content>
      </ScrollView>
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
