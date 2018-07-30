//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Container,
  Content,
  Form,
  Item,
  Button,
  Input,
  Label
} from "native-base";
import { connect } from "react-redux";
import Header from "./header/CompanyHeader";
import {
  SO_DIEN_THOAI,
  PASSWORD,
  SIGN_IN,
  BACKGROUND_COLOR_HEADER
} from "../const/Const";
import { postData } from "../redux/actions/actionCreators";
// create a component
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  render() {
    const { navigation, account } = this.props;
    return (
      <Container>
        <Header navigation={navigation} title={SIGN_IN} />
        <Content
          style={{ marginLeft: 15, marginRight: 15, alignContent: "center" }}
        >
          <Form>
            <Item floatingLabel>
              <Label>{SO_DIEN_THOAI}</Label>
              <Input onChangeText={username => this.setState({ username })} />
            </Item>
            <Item floatingLabel>
              <Label>{PASSWORD}</Label>
              <Input
                onChangeText={password => this.setState({ password })}
                secureTextEntry={true}
              />
            </Item>
            <Button
              full
              info
              style={styles.button}
              onPress={() => {
                this.props.postData(this.state);
                navigation.goBack();
              }}
            >
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
  },
  button: {
    margin: 15,
    marginTop: 45,
    borderRadius: 5,
    backgroundColor: BACKGROUND_COLOR_HEADER
  }
});

//make this component available to the app
function mapStateToProps(state) {
  return {
    account: state.login.account
  };
}

export default connect(
  mapStateToProps,
  { postData }
)(SignIn);
