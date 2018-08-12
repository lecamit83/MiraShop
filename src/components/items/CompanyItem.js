import React, { Component } from "react";
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Linking,
  View
} from "react-native";
import Communications from "react-native-communications";
import {
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";

import { BORDER_COLOR, BACKGROUND_COLOR_INPUT } from "../../const/Const";
import { ACCESS_TOKEN } from "../../api/access_token";
import { Loading } from "../common/Loading";

// create a component
class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }
  render() {
    const { navigation, itemProps } = this.props;

    return (
      <View style={styles.container}>
        <Loading loading={this.state.loading} size={"large"} />
        <TouchableOpacity
          // style={item}
          style={{ marginLeft: 5, marginRight: 5 }}
          onPress={() =>
            navigation.navigate("DetailCompany", { itemsProps: itemProps })
          }
        >
          <Card>
            <CardItem>
              <Left>
                <Icon name="contact" style={{ height: 40, width: 40 }} />
                <Body>
                  <Text style={styles.nameOfCompany}>
                    {itemProps.useraccount_DVKD}
                  </Text>
                  <Text numberOfLines={1} style={styles.addressOfCompany} note>
                    Địa chỉ: {itemProps.useraccount_diachi}
                  </Text>
                  <Text numberOfLines={1} style={styles.addressOfCompany} note>
                    Mã số thuế: {itemProps.useraccount_masothue}
                  </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Button
                  transparent
                  iconLeft
                  onPress={() => {
                    Communications.phonecall(itemProps.useraccount_phone, true);
                  }}
                >
                  <Icon name="call" />
                  <Text>Phone</Text>
                </Button>
              </Left>
              <Body>
                <Button
                  transparent
                  iconLeft
                  onPress={() => {
                    this.openFacebook(
                      "https://www.facebook.com/cam.dep.trai.16T1",
                      this.openFBprofile
                    );
                  }}
                >
                  <Icon name="logo-facebook" />
                  <Text>Facebook</Text>
                </Button>
              </Body>
              <Right>
                <Button transparent iconLeft onPress={() => {}}>
                  <Icon name="chatboxes" />
                  <Text>Zalo</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </TouchableOpacity>
      </View>
    );
  }

  fetch_async = async Uid => {
    let response = await fetch(
      `https://graph.fb.me/${Uid}?access_token=${ACCESS_TOKEN}`
    );
    let data = await response.json();
    return data.id;
  };

  openFBprofile = id => {
    Linking.canOpenURL("fb://profile/" + "sdsadsa")
      .then(support => {
        if (support) {
          Linking.openURL("fb://profile/" + id);
        } else {
          Linking.openURL("https://www.facebook.com/" + id);
        }
        this.setState({ loading: false });
      })
      .catch(err => console.error("An error occurred", err));
  };

  openFacebook(url, cb) {
    this.setState({ loading: true });
    let arr = url.split("/");
    let arr2 = arr[arr.length - 1].split("=");
    let Uid = arr2[arr2.length - 1];

    setTimeout(() => {
      this.fetch_async(Uid).then(_fbmyId => {
        cb(_fbmyId);
      });
    }, 5000);
  }
}

const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  nameOfCompany: {
    fontSize: 19,
    fontFamily: "serif"
  },
  addressOfCompany: {
    marginTop: 5,
    fontSize: 10,
    overflow: "scroll",
    opacity: 0.7,
    fontFamily: "serif"
  },
  item: {
    margin: 4,
    height: height / 2 + 10,
    width: width / 2 - 8,
    backgroundColor: BACKGROUND_COLOR_INPUT,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: BORDER_COLOR
  },
  image: {
    height: height / 3,
    width: width / 2 - 40,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 5,
    resizeMode: "contain"
  },
  textWrap: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 3
  },
  wrap: {
    borderRadius: 5,
    margin: 10,
    backgroundColor: "yellow",
    width: width / 2 - 40,
    alignItems: "center",
    height: 30,
    justifyContent: "center"
  },
  icon: {
    height: 24,
    width: 24,
    marginRight: 4,
    resizeMode: "contain"
  },
  buttonAdd: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default ProductItem;
