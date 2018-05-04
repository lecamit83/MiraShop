import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";
import { BORDER_COLOR, BACKGROUND_COLOR_INPUT, BACKGROUND_COLOR_HEADER, BACKGROUND_COLOR } from "../../const/Const";
// create a component
class ProductItem extends Component {
  render() {
    const { item, image, info, wrap, icon, buttonAdd, textWrap } = styles;
    const { navigation } = this.props;
    return (
      <TouchableOpacity
        style={item}
        onPress={() => navigation.navigate("DetailsScreen")}
      >
        <Image style={image} source={require("../../images/sp.png")} />
        <View style={info}>
          <View  style={textWrap}>
            <Text style={{fontSize: 17, color: "#FF8F00" }} >Paradol Extra</Text>
            <Text style={{ marginTop: 5 }}>650.000đ</Text>
          </View>
          <TouchableOpacity style={wrap}>
            <View style={buttonAdd}>
              <Image style={icon} source={require("../../images/add.png")} />
              <Text>Thêm Sản Phẩm</Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }
}

const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  item: {
    margin: 10,
    height: height / 2 + 10,
    width: width / 2 - 20,
    backgroundColor: BACKGROUND_COLOR_INPUT,
    borderRadius: 10,
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
