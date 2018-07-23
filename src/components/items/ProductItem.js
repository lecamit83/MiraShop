import React, { Component } from "react";
import {
  View,
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
  Right,
  Toast
} from "native-base";

import {
  BORDER_COLOR,
  BACKGROUND_COLOR_INPUT,
  BACKGROUND_COLOR_HEADER,
  BACKGROUND_COLOR
} from "../../const/Const";

// create a component
class ProductItem extends Component {
  render() {
    const { item, line, image, info, wrap, icon, buttonAdd, textWrap } = styles;
    const { navigation, items } = this.props;

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
                  body: JSON.stringify(items)
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

      // <TouchableOpacity
      //   style={{ marginLeft: 5, marginRight: 5 }}
      //   onPress={() =>
      //     navigation.navigate("DetailsScreen", { name: name, cost: cost })
      //   }
      // >
      //   <Card style={{ flex: 0 }}>
      //     <CardItem bordered>
      //       <Left>
      //         <Thumbnail source={require("../../images/sp.png")} />
      //         <Body>
      //           <Text style={{ fontSize: 17 }}>{name}</Text>
      //           <Text style={{ marginTop: 5 }} note>
      //             April 15, 2018
      //           </Text>
      //         </Body>
      //       </Left>
      //       <TouchableOpacity onPress={() => { navigation.navigate("MapScreen") }} >
      //         <Right>
      //           <Image
      //             style={{ height: 35, width: 35 }}
      //             source={require("../../images/directions_black.png")}
      //           />
      //         </Right>
      //       </TouchableOpacity>
      //     </CardItem>
      //     <CardItem>
      //       <Body>
      //         <Image
      //           source={require("../../images/sp.png")}
      //           style={{ height: 200, width: width - 40, flex: 1 }}
      //         />
      //         <Text style={{ marginTop: 10 }}>
      //           Noi dung mo ta ngan gon san pham se hien thi toi da 02 dong tai
      //           day
      //         </Text>
      //       </Body>
      //     </CardItem>
      //     <CardItem
      //       style={{ backgroundColor: BACKGROUND_COLOR_HEADER, height: 45 }}
      //     >
      //       <Left>
      //         {/* <Icon active name = "logo-usd" style={{ color: "#FFFFFF", width: 15, height: 15 }} /> */}
      //         <Text
      //           style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 20 }}
      //         >
      //           1.500.000 đ
      //         </Text>
      //       </Left>
      //       <Right>
      //         <TouchableOpacity onPress={() =>
      //           Toast.show({
      //             text: "Wrong password!",
      //             buttonText: "Okay",
      //             buttonTextStyle: { color: "#008000" },
      //             buttonStyle: { backgroundColor: "#5cb85c" }
      //           })
      //         }>
      //           <Image
      //             style={icon}
      //             source={require("../../images/add_to_company_white.png")}
      //           />
      //         </TouchableOpacity>
      //       </Right>
      //     </CardItem>
      //   </Card>
      // </TouchableOpacity>
    );
  }
}

const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  item: {
    margin: 2,
    height: height / 2 + 10,
    width: width / 2 - 4,
    backgroundColor: BACKGROUND_COLOR_INPUT,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: BORDER_COLOR
  },

  line: {
    backgroundColor: BACKGROUND_COLOR_HEADER,
    height: 1,
    width: width / 2 - 16,
    opacity: 1,
    backgroundColor: "#EBEBEB",
    alignSelf: "center"
  },

  image: {
    height: height / 2 - 85,
    width: width / 2 - 16,
    alignSelf: "center",
    margin: 4,
    justifyContent: "center",
    resizeMode: "stretch"
  },

  textWrap: {
    justifyContent: "center",
    alignItems: "center"
  },

  icon: {
    height: 30,
    width: 30
  },

  buttonAdd: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default ProductItem;
