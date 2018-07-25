//import liraries
import React, { Component } from "react";
import {
  View,
  // Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";

import Swiper from "react-native-swiper";
import Headers from "./header/CompanyHeader";
import Slide from "./slide/Slide";
import {
  BORDER_COLOR,
  BACKGROUND_COLOR_HEADER,
  BACKGROUND_COLOR_INPUT,
  BACKGROUND_COLOR,
  LINE
} from "../const/Const";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Right,
  IconNB,
  Toast
} from "native-base";

// create a component
class Details extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Headers navigation={navigation} title="Chi tiết" />
  });
  constructor(props) {
    super(props);
  }

  render() {
    const { icon, line } = styles;

    const { items, isProfile } = this.props.navigation.state.params;
    const { navigation } = this.props;
    console.log(items);
    const INFOR = [
      <Card>
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Thành Phần
          </Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{items.thuoc_thanhphan}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Thông tin mô tả
          </Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{items.product_thongtinsanpham}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Nhóm dược lý
          </Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{items.thuoc_nhomduocly}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Chỉ định
          </Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{items.thuoc_chidinh}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Liều Lượng & Cách Dùng
          </Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{items.thuoc_lieuluongcachdung}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Tác dụng
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.thuoc_tacdung}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Dược lực học
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.thuoc_duocluchoc}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Chống chỉ định
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.thuoc_chongchidinh}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Thận trọng
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.thuoc_thantrong}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Dạng bào chế
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.thuoc_dangbaoche}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Đóng gói
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.thuoc_quycachdonggoi}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Bảo quản
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.thuoc_dieukienbaoquan}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Nhà sản xuất
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.product_nhasanxuat}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Xuất xứ
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.product_xuatxu}</Text>
          </Body>
        </CardItem>
      </Card>,
      <Card>
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Thành Phần
          </Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{items.thuoc_thanhphan}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Thông tin mô tả
          </Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{items.product_thongtinsanpham}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Liều Lượng & Cách Dùng
          </Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{items.tpcn_lieuluongcachdung}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Tác dụng
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.tpcn_congdung}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Đối tượng sử dụng
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.tpcn_doituongsudung}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Số đăng ký quảng cáo
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.tpcn_dkqc}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Tác dụng phụ
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.tpcn_tacdungphu}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Thận trọng
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.tpcn_thantrong}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Quá liều & xử trí
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.tpcn_qualieuxutri}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Dạng bào chế
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.tpcn_dangbaoche}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Đóng gói
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.tpcn_quycachdonggoi}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Bảo quản
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.tpcn_dieukienbaoquan}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Nhà sản xuất
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.product_nhasanxuat}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Xuất xứ
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.product_xuatxu}</Text>
          </Body>
        </CardItem>
      </Card>,
      <Card>
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Thành Phần
          </Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{items.vttb_thanhphan}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Thông tin mô tả
          </Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{items.product_thongtinsanpham}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
          Thông số kĩ thuật
          </Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{items.vttb_thongsokithuat}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Chỉ định
          </Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{items.vttb_chidinh}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Hướng dẫn sử dụng
          </Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{items.vttb_huongdansudung}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Tác dụng
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.vttb_tacdung}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Model
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.vttb_model}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Nhãn hiệu
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.vttb_nhanhieu}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Phụ kiện
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.vttb_phukien}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Thông tin khác
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.vttb_thongtinkhac}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Chú ý
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.vttb_chuy}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Kích thước
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.vttb_kichthuoc}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Trọng lượng
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.vttb_trongluong}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Bảo quản
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.vttb_baoquan}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Nhà sản xuất
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.product_nhasanxuat}</Text>
          </Body>
        </CardItem>
        <View style={line} />
        <CardItem header>
          <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
            Xuất xứ
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{items.product_xuatxu}</Text>
          </Body>
        </CardItem>
      </Card>,
      <Card>
      <CardItem header>
        <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
          Thành Phần
        </Text>
      </CardItem>
      <CardItem bordered>
        <Body>
          <Text>{items.mypham_thanhphan}</Text>
        </Body>
      </CardItem>
      <View style={line} />
      <CardItem header>
        <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
        Công dụng
        </Text>
      </CardItem>
      <CardItem bordered>
        <Body>
          <Text>{items.mypham_congdung}</Text>
        </Body>
      </CardItem>
      <View style={line} />
      <CardItem header>
        <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
        Thành phần
        </Text>
      </CardItem>
      <CardItem bordered>
        <Body>
          <Text>{items.mypham_thanhphan}</Text>
        </Body>
      </CardItem>
      <View style={line} />
      <CardItem header>
        <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
          Nhà sản xuất
        </Text>
      </CardItem>
      <CardItem>
        <Body>
          <Text>{items.product_nhasanxuat}</Text>
        </Body>
      </CardItem>
      <View style={line} />
      <CardItem header>
        <Text style={{ fontSize: 17, color: BACKGROUND_COLOR_HEADER }}>
          Xuất xứ
        </Text>
      </CardItem>
      <CardItem>
        <Body>
          <Text>{items.product_xuatxu}</Text>
        </Body>
      </CardItem>
    </Card>
    ];

    return (
      <ScrollView
        style={{
          backgroundColor: BACKGROUND_COLOR,
          marginLeft: 5,
          marginRight: 5
        }}
      >
        {/* <View style={container}>
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
        </View> */}
        <Card>
          <CardItem bordered>
            <Left>
              <Text
                style={{ fontWeight: "bold", fontSize: 17, color: "#000000" }}
              >
                {items.product_name}
              </Text>
            </Left>
            <View>
              {!isProfile ? (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("MapScreen");
                  }}
                >
                  <Right>
                    <Image
                      style={{ height: 35, width: 35 }}
                      source={require("../images/directions_black.png")}
                    />
                  </Right>
                </TouchableOpacity>
              ) : null}
            </View>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Image
                source={{ uri: items.product_image }}
                style={{ height: 200, width: width - 40, flex: 1 }}
              />
            </Body>
          </CardItem>
          <CardItem
            style={{ backgroundColor: BACKGROUND_COLOR_HEADER, height: 45 }}
          >
            <Left>
              <Text
                style={{ fontWeight: "bold", fontSize: 17, color: "#FFFFFF" }}
              >
                Hạn sử dụng: {items.product_hansudung}
              </Text>
            </Left>
            <Right>
              {!isProfile ? (
                <TouchableOpacity
                  onPress={() => {
                    Toast.show({
                      text: "Thêm thất bại!",
                      buttonText: "Okay",
                      buttonTextStyle: { color: "#008000" },
                      buttonStyle: { backgroundColor: "#5cb85c" }
                    });
                  }}
                >
                  <Image
                    style={icon}
                    source={require("../images/add_to_company_white.png")}
                  />
                </TouchableOpacity>
              ) : (
                <Image
                  style={icon}
                  source={require("../images/remove_from_company_white.png")}
                />
              )}
            </Right>
          </CardItem>
        </Card>
        {INFOR[items.product_type - 1]}
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
    height: (height * 4) / 10,
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
