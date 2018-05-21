//import liraries
import React, { Component } from "react";
import {
  View,
  // Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Dimensions
} from "react-native";

import { connect } from "react-redux";

import {
  Container,
  Content,
  Card,
  CardItem,
  Form,
  List,
  ListItem,
  Item,
  Text,
  Label,
  Input,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";

import Header from "./header/CompanyHeader";
import ItemCompanyProduct from "./items/SubItem";
import { BACKGROUND_COLOR, BACKGROUND_COLOR_HEADER } from "../const/Const";

// create a component
class Management extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header navigation={navigation} title="Thông Tin Công Ty" />
  })
  constructor(props) {
    super(props);
    this.state = {
      nameOfCompany: "MiRa Shop",
      emailCompany: "31 Trần Phú - Q. Hải Châu - TP. Đà Nẵng"
    };
  }
  render() {
    const { navigation, companyProduct } = this.props;
    return (
      <ScrollView>
        <Content style={{ marginLeft: 15, marginRight: 15, alignContent: "center" }}>
          <Form>
            <Item floatingLabel>
              <Label>Họ Tên</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Địa Chỉ</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Số Điện Thoại</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Facebook</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Zalo</Label>
              <Input />
            </Item>
            <Button full info style={{ margin: 15, marginTop: 25, borderRadius: 5, backgroundColor: BACKGROUND_COLOR_HEADER }}>
              <Text>CẬP NHẬT</Text>
            </Button>
          </Form>
        </Content>
        <View style={styles.listItems}>
          <ListItem itemDivider>
            <Text style={{ fontWeight: "bold" }}>DANH DÁCH SẢN PHẨM BÁN</Text>
          </ListItem>
          <FlatList
            data={companyProduct}
            renderItem={({ item }) => <ItemCompanyProduct navigation={navigation} name={item.name} cost={item.cost} />}
            keyExtractor={(item, index) => index.toString()}
            numColumns={1}
          />
        </View>
      </ScrollView>
    );
  }
}

const { height, width } = Dimensions.get("window");
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: BACKGROUND_COLOR
  },
  intro: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    marginLeft: 5,
    marginRight: 5
  },
  wrapInfo: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  line: {
    backgroundColor: "#81C784",
    height: 1,
    width: width - 10,
    marginTop: 10,
    marginLeft: 5
  },
  imageLogo: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: "contain"
  },
  wrapText: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5
  },
  icon: {
    height: 35,
    width: 35,
    // resizeMode: "contain"
  },
  nameCompany: {
    fontSize: 17,
    color: BACKGROUND_COLOR_HEADER,
    fontWeight: "bold",
    marginBottom: 5
  },
  contact: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: width / 4,
    marginRight: width / 4
  },
  textContact: {
    fontSize: 10,
  },
  listItems: {
    // flexWrap: "wrap",
    flex: 1,
    // flexDirection: "row"
    backgroundColor: BACKGROUND_COLOR
  }
});

//make this component available to the app
function mapStateToProps(state) {
  return {
    companyProduct: state.companyProduct,
  };
}
export default connect(mapStateToProps)(Management);