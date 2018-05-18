//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Swiper from "react-native-swiper";
import Header from "./header/CompanyHeader";
import Slide from "./slide/Slide";
import {
  BORDER_COLOR,
  BACKGROUND_COLOR_INPUT,
  BACKGROUND_COLOR,
  LINE
} from "../const/Const";
// create a component

class Details extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header navigation={navigation} title="Chi tiết" />
  });
  constructor(props) {
    super(props);
    this.state = {
      arrImage: [
        require("../images/1.png"),
        require("../images/2.png"),
        require("../images/3.png")
      ]
    };
  }
  render() {
    const {
      container,
      frameImage,
      line,
      intro,
      product,
      wrap,
      textStyle,
      wrapImage,
      icon
    } = styles;
    const { name, cost } = this.props.navigation.state.params;
    const { navigation } = this.props;
    return (
      <ScrollView style={{ backgroundColor: BACKGROUND_COLOR }}>
        <View style={container}>
          <View style={frameImage}>
            <Swiper autoplay={true}>
              {this.state.arrImage.map((item, index) => (
                <Slide uri={item} key={index} />
              ))}
            </Swiper>
          </View>
        </View>
        <View style={intro}>
          <View style={line} />
          <View style={product}>
            <View style={wrapImage} />
            <View style={wrap}>
              <Text style={textStyle}>{name}</Text>
            </View>
            <TouchableOpacity
              style={wrapImage}
              onPress={() => {
                navigation.navigate("MapScreen");
              }}
            >
              <Image style={icon} source={require("../images/pos.png")} />
            </TouchableOpacity>
          </View>
          <View style={line} />
          <View style={product}>
            <View style={wrapImage} />
            <View style={wrap}>
              <Text style={textStyle}>{`${cost} đ`}</Text>
            </View>
            <TouchableOpacity style={wrapImage} onPress={() => alert("ADD")}>
              <Image style={icon} source={require("../images/add.png")} />
            </TouchableOpacity>
          </View>
          <View style={line} />
          <View style={product}>
            <View />
            <View style={wrap}>
              <Text style={textStyle}>Thông Tin Sản Phẩm</Text>
            </View>
            <View />
          </View>
          <View style={line} />
          <View>
            <Text>
              Immersive Immersive mode is best when users need to interact
              heavily with the screen, such as playing a game or interacting
              with an image gallery. You may show and hide your app’s controls
              along with the system bars as needed. Interaction: Swipe from any
              edge of the screen to make the system bars appear. The first time
              an app goes full-screen, this swipe gesture is explained. Edge
              swipe exception: Apps that use the swipe-from-edge gesture to
              perform actions should also display the system bars when that
              gesture is used. For example, a drawing app that uses an edge
              swipe (such as to draw a line) should also display the system bars
              semi-transparently for a few seconds any time that gesture occurs.
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const { height, width } = Dimensions.get("window");
// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  frameImage: {
    width: width - 6,
    height: height * 4 / 10,
    marginTop: 2
  },
  line: { backgroundColor: LINE, height: 1, opacity: 0.6 },
  intro: {
    margin: 5
  },
  product: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: height / 15
  },
  wrap: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    padding: 3,
    marginBottom: 5
  },
  wrapImage: {
    height: height / 15,
    width: height / 15,
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    height: 24,
    width: 24,
    resizeMode: "contain"
  },
  textStyle: {
    color: "#FF8F00",
    fontSize: 15
  }
});

//make this component available to the app
export default Details;
