import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";

import { Card, CardItem, Text, Toast } from "native-base";

import {
  BORDER_COLOR,
  BACKGROUND_COLOR_INPUT,
  BACKGROUND_COLOR_HEADER
} from "../../const/Const";
import { connect } from "react-redux";
import { addProduct } from "../../api/postData";

// create a component
class ProductItem extends Component {
  render() {
    const { item, line, image, info, wrap, icon, buttonAdd, textWrap } = styles;
    const { navigation, items, account } = this.props;

    let useraccount_id = account ? account.useraccount_id : null;

    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("DetailsScreen", { items: items, isSaled: false })
        }
      >
        <Card style={item}>
          <CardItem style={{ height: 40 }}>
            <View style={textWrap}>
              <Text
                numberOfLines={1}
                style={{
                  color: "black",
                  fontWeight: "bold",
                  overflow: "scroll"
                }}
              >
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
                var data = {
                  product_id: items.product_id,
                  useraccount_id: useraccount_id
                };
                console.log(data);

                addProduct(data)
                  .then(resJSON => {
                    Toast.show({
                      text: resJSON.message,
                      buttonText: "Okay",
                      buttonTextStyle: { color: "#008000" },
                      buttonStyle: { backgroundColor: "#5cb85c" }
                    });
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
    margin: 2,
    height: (width / 2 - 4) * 1.618,
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
    height: (width / 2 - 4) * 1.618 - 95,
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

function mapStateToProps(state) {
  return {
    account: state.login.account
  };
}
export default connect(mapStateToProps)(ProductItem);
