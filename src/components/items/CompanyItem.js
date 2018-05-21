import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";

import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

import { BORDER_COLOR, BACKGROUND_COLOR_INPUT, BACKGROUND_COLOR_HEADER, BACKGROUND_COLOR } from "../../const/Const";

// create a component
class ProductItem extends Component {
  render() {
    const { item, image, info, wrap, icon, buttonAdd, textWrap } = styles;
    const { navigation, name, address } = this.props;
    return (
      <TouchableOpacity
        // style={item}
        style = {{ marginLeft: 5, marginRight: 5 }}
        onPress = {() => navigation.navigate("DetailCompany", { name: name, address: address })}
      >
        {/* <Image style={image} source={require("../../images/sp.png")} />
        <View style={info}>
          <View  style={textWrap}>
            <Text style={{fontSize: 17, color: "#FF8F00" }} >{name}</Text>
            <Text style={{ marginTop: 5 }}>{`${cost}đ`}</Text>
          </View>
          <TouchableOpacity style={wrap}
            onPress={()=>alert("ADD")}
          >
            <View style={buttonAdd}>
              <Image style={icon} source={require("../../images/add.png")} />
              <Text>Thêm Sản Phẩm</Text>
            </View>
          </TouchableOpacity>
        </View> */}
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={require("../../images/sp.png")} />
              <Body>
                <Text style={{ fontSize: 17 }}>Tên Công Ty</Text>
                <Text style={{ marginTop: 5 }} note>địa chỉ công ty</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={require("../../images/sp.png")} style={{ height: 200, width: null, flex: 1 }} />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="call" />
                <Text>Phone</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="logo-facebook" />
                <Text>Messenger</Text>
              </Button>
            </Body>
            <Right>
            <Button transparent>
              <Icon active name = "chatboxes" />
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
  }
});

export default ProductItem;
