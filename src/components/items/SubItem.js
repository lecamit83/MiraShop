import React, { Component } from "react";
import {
  View,
  // Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";

import { BORDER_COLOR, BACKGROUND_COLOR_INPUT, BACKGROUND_COLOR_HEADER, BACKGROUND_COLOR } from "../../const/Const";

// create a component
class SubItem extends Component {
  render() {
    const { item, image, icon, textWrap, line } = styles;
    const { navigation, name, cost , items} = this.props;
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("DetailsScreen", { items: items })}
      >
        <Card style={item}>
          <CardItem style={{ height: 40 }}>
            <View style={textWrap}>
              <Text style={{ color: "black", fontWeight: "bold" }}>
                {items.product_name}
              </Text>
            </View>
          </CardItem>
          <View style={line} />
          <Image style={image} source={{ uri: items.product_image }} />

          <CardItem
            style={{
              backgroundColor: BACKGROUND_COLOR_HEADER,
              height: 40,
              margin: 2,
              justifyContent: "space-between"
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("MapScreen");
              }}
            >
              <View
                style={{
                  width: width / 5,
                  alignItems: "flex-start"
                }}
              >
                <Image
                  style={icon}
                  source={require("../../images/directions_black.png")}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                // Toast.show({
                //   text: "Thêm thất bại!",
                //   buttonText: "Okay",
                //   buttonTextStyle: { color: "#008000" },
                //   buttonStyle: { backgroundColor: "#5cb85c" }
                // });

                fetch("http://api.hifapp.com/api/nbl/update/product", {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json; charset=UTF-8"
                  },
                  body: JSON.stringify({
                    "product_id" : items.product_id,
                    "useraccount_id" : account.useraccount_id 
                  })
                })
                  .then(res => res.json())
                  .then(resJSON => {
                    console.log("OnPress Add");

                    console.log(resJSON);
                  })
                  .catch(err => console.log(err));
              }}
            >
              <View
                style={{
                  width: width / 5,
                  alignItems: "flex-end"
                }}
              >
                <Image
                  style={icon}
                  source={require("../../images/add_to_company_white.png")}
                />
              </View>
            </TouchableOpacity>
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  }
}

const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
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
    marginTop: 3,
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
  },
  line: {
    backgroundColor: BACKGROUND_COLOR_HEADER,
    height: 1,
    width: width / 2 - 16,
    opacity: 1,
    backgroundColor: "#EBEBEB",
    alignSelf: "center"
  },
});

export default SubItem;
