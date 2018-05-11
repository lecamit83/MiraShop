//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Picker,
  Dimensions,
  ScrollView
} from "react-native";
import UserInput from "./items/UserInput";
import {
  BORDER_COLOR,
  HO_TEN,
  DIA_CHI,
  DON_VI,
  MA_SO_KINH_DOANH,
  MA_SO_THUE,
  SO_DIEN_THOAI,
  PROVINCE,
  DISTRICT,
  COMMUNE,
  SIGN_UP,
  MEMBER_CARD,
  SIGN_IN,
  EMAIL,
  PASSWORD,
  PASSWORD_AGAIN,
  BACKGROUND_COLOR,
  BACKGROUND_COLOR_HEADER
} from "../const/Const";



class Login extends Component {
  static navigationOptions = {
    title: "Đăng Nhập / Đăng Kí"
  };
  constructor(props) {
    super(props);
    this.state = {
      province: "",
      district: "",
      commune: "",
      isSignIn: true
    };
    list = [PROVINCE, "Hà Nội", "Đà Nẵng", "Thừa Thiên Huế"];
  }
  render() {
    const signUpJSX = (
      <ScrollView>
        <View style={styles.wrapperButton}>
          <TouchableOpacity
            style={styles.wrapperSignIn}
            onPress={() => this.setState({ isSignIn: true })}
          >
            <Text
              style={
                isSignIn
                  ? styles.textButtonSelected
                  : styles.textButtonUnSelected
              }
            >
              {SIGN_IN}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.wrapperSignUp}
            onPress={() => this.setState({ isSignIn: false })}
          >
            <Text
              style={
                !isSignIn
                  ? styles.textButtonSelected
                  : styles.textButtonUnSelected
              }
            >
              {SIGN_UP}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <View>
            <UserInput placeholder={EMAIL} />

            <UserInput placeholder={PASSWORD} secure={true} />

            <UserInput placeholder={PASSWORD_AGAIN} secure={true} />

            <UserInput placeholder={HO_TEN} />

            <UserInput placeholder={DON_VI} />

            <View style={styles.wrapperPicker}>
              <Text style={styles.textName}>Địa Chỉ</Text>
              <View style={styles.wrapperHorizontalPicker}>
                <Picker
                  style={styles.pickerSelected}
                  selectedValue={this.state.commune}
                  prompt={COMMUNE}
                  onValueChange={(val, pos) => this.setState({ commune: val })}
                >
                  {list.map(data => (
                    <Picker.Item key={data} label={data} value={data} />
                  ))}
                </Picker>
                <Picker
                  style={styles.pickerSelected}
                  selectedValue={this.state.district}
                  prompt={DISTRICT}
                  onValueChange={(val, pos) => this.setState({ district: val })}
                >
                  {list.map(data => (
                    <Picker.Item key={data} label={data} value={data} />
                  ))}
                </Picker>
                <Picker
                  style={styles.pickerSelected}
                  selectedValue={this.state.province}
                  prompt={PROVINCE}
                  onValueChange={(val, pos) => this.setState({ province: val })}
                >
                  {list.map(data => (
                    <Picker.Item key={data} label={data} value={data} />
                  ))}
                </Picker>
              </View>
            </View>

            <UserInput placeholder={MA_SO_KINH_DOANH} />

            <UserInput placeholder={MA_SO_THUE} />

            <UserInput placeholder={SO_DIEN_THOAI} />

            <TouchableOpacity style={styles.borderButton}>
              <Text style={styles.textButton}>{SIGN_UP}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View />
      </ScrollView>
    );
    const signInJSX = (
      <ScrollView>
        <View style={styles.wrapperButton}>
          <TouchableOpacity
            style={styles.wrapperSignIn}
            onPress={() => this.setState({ isSignIn: true })}
          >
            <Text
              style={
                !isSignIn
                  ? styles.textButtonSelected
                  : styles.textButtonUnSelected
              }
            >
              {SIGN_IN}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.wrapperSignUp}
            onPress={() => this.setState({ isSignIn: false })}
          >
            <Text
              style={
                isSignIn
                  ? styles.textButtonSelected
                  : styles.textButtonUnSelected
              }
            >
              {SIGN_UP}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <UserInput placeholder="Email" />
          <UserInput placeholder="Password" secure={true} />
          <TouchableOpacity style={styles.borderButton}>
            <Text style={styles.textButton}>{SIGN_IN}</Text>
          </TouchableOpacity>
        </View>
        <View />
      </ScrollView>
    );
    const { isSignIn } = this.state;
    const loginJSX = isSignIn ? signInJSX : signUpJSX;

    return <View style={styles.contentWrapper}>{loginJSX}</View>;
  }
}
var { height, width } = Dimensions.get("window");
// define your styles
const styles = StyleSheet.create({
  contentWrapper: {
    flex: 10,
    justifyContent: "space-between",
    backgroundColor: BACKGROUND_COLOR,
  },
  wrapperHorizontal: {
    marginTop: 5,
    margin: 5,
    flexDirection: "row",
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",

  },
  wrapperHorizontalPicker: {
    flexDirection: "row",
    backgroundColor: "white",
  },
  textName: {
    flex: 1,
    fontSize: 15,
    marginLeft: 11
  },
  inputData: {
    flex: 3,
    fontSize: 15
  },
  borderButton: {
    marginTop: 5,
    borderColor: BORDER_COLOR,
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
  textButtonSelected: {
    fontSize: 20,
    color: "green",
    padding: 5
  },
  textButtonUnSelected: {
    fontSize: 20,
    padding: 5
  },
  pickerSelected: { flex: 1 ,},
  wrapperPicker: {
    marginTop: 5,
    margin: 5,
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    backgroundColor: "white",
    height: height / 8,
  },
  wrapperSignUp: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderRightColor: BORDER_COLOR,
    borderWidth: 1,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10
  },
  wrapperSignIn: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderLeftColor: BORDER_COLOR,
    borderWidth: 1,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10
  },
  wrapperButton: {
    marginTop: 10,
    margin: 5,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10
  }
});
//make this component available to the app
export default Login;
