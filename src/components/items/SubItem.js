import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image
} from "react-native";

import { Card, CardItem, Text, Toast } from "native-base";
import { connect } from "react-redux";

import {
  BORDER_COLOR,
  BACKGROUND_COLOR_INPUT,
  BACKGROUND_COLOR_HEADER
} from "../../const/Const";
import { deleteProduct } from "../../api/deleteData";
import {deleteProductOfCompany } from "../../redux/actions/actionCreators";

// create a component
class SubItem extends Component {
  render() {
    const { item, image, icon, textWrap, line } = styles;
    const { navigation, items, account, index, companyProfileInstance } = this.props;
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("DetailsScreen", { items: items })}
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
                companyProfileInstance.state.arrProducts.splice(index, 1)
                companyProfileInstance.setState({ arrProducts : companyProfileInstance.state.arrProducts })
                var data = {
                  product_id: items.product_id,
                  useraccount_id: account.useraccount_id
                };
                this.props.deleteProductOfCompany(data, companyProfileInstance.state.arrProducts);
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
                  source={require("../../images/remove_from_company_white.png")}
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
  },
  line: {
    backgroundColor: BACKGROUND_COLOR_HEADER,
    height: 1,
    width: width / 2 - 16,
    opacity: 1,
    backgroundColor: "#EBEBEB",
    alignSelf: "center"
  }
});

function mapStateToProps(state) {
  return {
    account: state.login.account
  };
}

export default connect(mapStateToProps, {deleteProductOfCompany})(SubItem);
