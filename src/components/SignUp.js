//import liraries
import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions
} from "react-native";

import {
  Container,
  Content,
  Form,
  Item,
  Button,
  Input,
  Label,
  Icon,
  View,
  Picker
} from "native-base";

import Header from "./header/CompanyHeader";
import {
  PASSWORD,
  PASSWORD_AGAIN,
  HO_TEN,
  DON_VI,
  MA_SO_THUE,
  SO_DIEN_THOAI,
  SIGN_UP,
  BACKGROUND_COLOR_HEADER,
  DIA_CHI
} from "../const/Const";
// create a component
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      province: [],
      district: [],
      commune: [],
      useraccount_DVKD: "",
      useraccount_fullname: "",
      useraccount_masothue: "",
      useraccount_phone: "",
      useraccount_diachi: "",
      useraccount_password: "",
      passwordAgain: "",
      province_id: 1,
      district_id: 1,
      commune_id: 1,
      useraccount_location: ""
    };
  }

  render() {
    const { navigation } = this.props;
    const { wrapInput, pickerAddress, lableText } = styles;
    const {
      province,
      district,
      commune,
      province_id,
      district_id,
      commune_id
    } = this.state;
    return (
      <Container>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1 }}>
            <Header navigation={navigation} title={SIGN_UP} />
            <Content style={styles.container}>
              <ScrollView>
                <Form style={styles.wrapForm}>
                  <Item style={wrapInput} floatingLabel last>
                    <Label>{DON_VI}</Label>
                    <Input
                      onChangeText={useraccount_DVKD =>
                        this.setState({ useraccount_DVKD })
                      }
                      onEndEditing={() => {
                        console.log("ENDEDITTING");
                      }}
                      numberOfLines={1}
                      returnKeyType="next"
                      autoCorrect={false}
                      getRef={input => (this.tenDonVi = input)}
                      onSubmitEditing={() => {
                        this.ma_so_thue._root.focus();
                      }}
                    />
                  </Item>
                  <Item style={wrapInput} floatingLabel last>
                    <Label>{MA_SO_THUE}</Label>
                    <Input
                      onChangeText={useraccount_masothue =>
                        this.setState({ useraccount_masothue })
                      }
                      numberOfLines={1}
                      returnKeyType="next"
                      keyboardType="phone-pad"
                      autoCorrect={false}
                      getRef={input => (this.ma_so_thue = input)}
                      onSubmitEditing={() => {
                        this._name._root.focus();
                      }}
                    />
                  </Item>
                  <Item style={wrapInput} floatingLabel last>
                    <Label>{HO_TEN}</Label>
                    <Input
                      onChangeText={useraccount_fullname =>
                        this.setState({ useraccount_fullname })
                      }
                      numberOfLines={1}
                      returnKeyType="next"
                      autoCorrect={false}
                      getRef={input => (this._name = input)}
                      onSubmitEditing={() => {
                        this.phone_number._root.focus();
                      }}
                    />
                  </Item>
                  <Item style={wrapInput} floatingLabel last>
                    <Label>{SO_DIEN_THOAI}</Label>
                    <Input
                      onChangeText={useraccount_phone =>
                        this.setState({ useraccount_phone })
                      }
                      numberOfLines={1}
                      returnKeyType="next"
                      keyboardType="phone-pad"
                      autoCorrect={false}
                      getRef={input => (this.phone_number = input)}
                      onSubmitEditing={() => {
                        this.password_input._root.focus();
                      }}
                    />
                  </Item>
                  <Item style={wrapInput} floatingLabel last>
                    <Label>{PASSWORD}</Label>
                    <Input
                      onChangeText={useraccount_password =>
                        this.setState({ useraccount_password })
                      }
                      numberOfLines={1}
                      returnKeyType="next"
                      autoCorrect={false}
                      secureTextEntry={true}
                      getRef={input => (this.password_input = input)}
                      onSubmitEditing={() => {
                        this.password_input_again._root.focus();
                      }}
                    />
                  </Item>
                  <Item style={wrapInput} floatingLabel last>
                    <Label>{PASSWORD_AGAIN}</Label>
                    <Input
                      onChangeText={passwordAgain =>
                        this.setState({ passwordAgain })
                      }
                      numberOfLines={1}
                      returnKeyType="next"
                      autoCorrect={false}
                      secureTextEntry={true}
                      getRef={input => (this.password_input_again = input)}
                      onSubmitEditing={() => {
                        this.address_input._root.focus();
                      }}
                    />
                  </Item>
                  <Item style={[wrapInput, pickerAddress]} last picker>
                    <Label style={lableText}>Tỉnh / Thành Phố:</Label>
                    <Picker
                      mode="dialog"
                      iosIcon={<Icon name="ios-arrow-down-outline" />}
                      style={{ width: undefined }}
                      iosHeader="Select your SIM"
                      selectedValue={province_id}
                      onValueChange={province_id =>
                        this.setState({ province_id })
                      }
                    >
                      {this._renderItems(province)}
                    </Picker>
                  </Item>
                  <Item style={[wrapInput, pickerAddress]} last picker>
                    <Label style={lableText}>Huyện / Quận:</Label>
                    <Picker
                      mode="dialog"
                      iosIcon={<Icon name="ios-arrow-down-outline" />}
                      style={{ width: undefined }}
                      placeholder="Select your SIM"
                      placeholderStyle={{ color: "#bfc6ea" }}
                      placeholderIconColor="#007aff"
                      selectedValue={district_id}
                      onValueChange={district_id =>
                        this.setState({ district_id })
                      }
                    >
                      {this._renderDistrictItems(district)}
                    </Picker>
                  </Item>
                  <Item style={[wrapInput, pickerAddress]} last picker>
                    <Label style={lableText}>Xã / Phường / Thị Trấn:</Label>
                    <Picker
                      mode="dialog"
                      iosIcon={<Icon name="ios-arrow-down-outline" />}
                      style={{ width: undefined }}
                      placeholder="Select your SIM"
                      placeholderStyle={{ color: "#bfc6ea" }}
                      placeholderIconColor="#007aff"
                      selectedValue={commune_id}
                      onValueChange={commune_id => {
                        this.setState({ commune_id });
                      }}
                    >
                      {this._renderCommuneItems(commune)}
                    </Picker>
                  </Item>
                  <Item style={wrapInput} floatingLabel last>
                    <Label>{DIA_CHI}</Label>
                    <Input
                      onChangeText={useraccount_diachi =>
                        this.setState({ useraccount_diachi })
                      }
                      numberOfLines={1}
                      returnKeyType="done"
                      autoCorrect={false}
                      getRef={input => (this.address_input = input)}
                    />
                  </Item>
                  <Button
                    full
                    style={styles.button}
                    onPress={() => console.log(this.state)}
                  >
                    <Text style={styles.textButton}>ĐĂNG KÝ</Text>
                  </Button>
                </Form>
              </ScrollView>
            </Content>
          </View>
        </TouchableWithoutFeedback>
      </Container>
    );
  }

  _fetchAddress = url => {
    return fetch(url).then(res => res.json());
  };
  componentDidMount() {
    this._fetchAddress("http://api.hifapp.com/api/address/city")
      .then(resJSON => this.setState({ province: resJSON }))
      .catch(err => console.log(err));
    this._fetchAddress(
      "http://api.hifapp.com/api/address/district?id=" + this.state.province_id
    )
      .then(resJSON => this.setState({ district: resJSON }))
      .catch(err => console.log(err));
    this._fetchAddress(
      "http://api.hifapp.com/api/address/area?id=" + this.state.district_id
    )
      .then(resJSON => this.setState({ commune: resJSON }))
      .catch(err => console.log(err));
  }
  componentDidUpdate(previousProps, previousState) {
    if (previousState.province_id !== this.state.province_id) {
      this.setState({ district_id: 1 });
      this._fetchAddress(
        "http://api.hifapp.com/api/address/district?id=" +
          this.state.province_id
      )
        .then(resJSON => this.setState({ district: resJSON }))
        .catch(err => console.log(err));
      this._fetchAddress(
        "http://api.hifapp.com/api/address/area?id=" + this.state.district_id
      )
        .then(resJSON => this.setState({ commune: resJSON }))
        .catch(err => console.log(err));
    }
    if (previousState.district_id !== this.state.district_id) {
      this._fetchAddress(
        "http://api.hifapp.com/api/address/area?id=" + this.state.district_id
      )
        .then(resJSON => this.setState({ commune: resJSON }))
        .catch(err => console.log(err));
    }
  }
  _renderItems = datas => {
    let views = [];
    for (var i = 0; i < datas.length; i++) {
      views.push(
        <Picker.Item
          label={datas[i].city_name}
          value={datas[i].city_id}
          key={"city_id" + datas[i].city_id}
        />
      );
    }
    return views;
  };
  _renderDistrictItems = datas => {
    let views = [];
    for (var i = 0; i < datas.length; i++) {
      views.push(
        <Picker.Item
          label={datas[i].district_name}
          value={datas[i].district_id}
          key={"district_id" + datas[i].district_id}
        />
      );
    }
    return views;
  };
  _renderCommuneItems = datas => {
    let views = [];
    for (var i = 0; i < datas.length; i++) {
      views.push(
        <Picker.Item
          label={datas[i].area_name}
          value={datas[i].area_id}
          key={"area_id" + datas[i].area_id}
        />
      );
    }
    return views;
  };
}

const { width } = Dimensions.get("window");
// define your styles
const styles = StyleSheet.create({
  lableText: { width: width / 3 },
  container: {
    backgroundColor: "#aed581",
    flex: 1
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 30,
    height: 50,
    borderRadius: 4,
    backgroundColor: BACKGROUND_COLOR_HEADER
  },
  pickerAddress: {
    marginTop: 16
  },
  wrapForm: {
    padding: "2%",
    width: "96%",
    backgroundColor: "#c5e1a5",
    borderRadius: 4,
    margin: "2%",
    marginBottom: 4
  },
  wrapInput: {
    backgroundColor: "#dcedc8",
    paddingHorizontal: 0,
    paddingVertical: 4,
    borderRadius: 4
  },
  borderButton: {
    marginVertical: 10,
    borderColor: "gray",
    backgroundColor: "#FFF",
    borderWidth: 1,
    alignSelf: "center",
    borderRadius: 10
  },
  textButton: {
    fontSize: 17,
    color: "white"
  }
});

//make this component available to the app
export default SignUp;
