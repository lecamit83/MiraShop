//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Container, Content, Form, Item, Button, Input, Label } from 'native-base';

import UserInput from "./items/UserInput";
import Header from "./header/CompanyHeader";
import { SO_DIEN_THOAI, PASSWORD, SIGN_IN, BACKGROUND_COLOR_HEADER } from "../const/Const";
// create a component
class SignIn extends Component {
  render() {
    const { navigation } = this.props;
    return (
      // <View style={styles.contentWrapper}>
      //   <Header navigation={navigation} title={SIGN_IN} />
      //   <View>
      //     <View>
      //       <UserInput placeholder={SO_DIEN_THOAI} />
      //       <UserInput placeholder={PASSWORD} secure={true} />
      //       <TouchableOpacity style={styles.borderButton}>
      //         <Text style={styles.textButton}>{SIGN_IN}</Text>
      //       </TouchableOpacity>
      //     </View>
      //   </View>
      // </View>

      <Container>
        <Header navigation={navigation} title={SIGN_IN} />
        <Content style = {{marginLeft: 15, marginRight: 15, alignContent: "center"}}>
          <Form>
            <Item floatingLabel >
              <Label>{SO_DIEN_THOAI}</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>{PASSWORD}</Label>
              <Input />
            </Item>
            <Button full info style = {{margin: 15, marginTop: 45, borderRadius: 5, backgroundColor: BACKGROUND_COLOR_HEADER}}>
              <Text>ĐĂNG NHẬP</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    backgroundColor: "white"
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
export default SignIn;
