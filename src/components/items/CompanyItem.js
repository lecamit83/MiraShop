import React, { Component } from "react";
import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";

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

// create a component
class ProductItem extends Component {
  render() {
    const { navigation, itemProps } = this.props;
    return (
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
              <Button transparent iconLeft>
                <Icon name="call" />
                <Text>Phone</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent iconLeft>
                <Icon name="logo-facebook" />
                <Text>Facebook</Text>
              </Button>
            </Body>
            <Right>
              <Button transparent iconLeft>
                <Icon name="chatboxes"/>
                <Text>Zalo</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  }
}

const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
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
