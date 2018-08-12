//import liraries
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  Dimensions,
  Linking
} from "react-native";

import { connect } from "react-redux";

import {
  Card,
  CardItem,
  ListItem,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";

import Communications from "react-native-communications";

import Header from "./header/CompanyHeader";
import Item from "./items/ProductItem";
import { BACKGROUND_COLOR, BACKGROUND_COLOR_HEADER } from "../const/Const";
import { fetchProductCompany } from "../redux/actions/actionCreators";

// create a component
class Management extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header navigation={navigation} title="Thông Tin Công Ty" />
  });
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let id = this.props.navigation.state.params.itemsProps.useraccount_id;
    this.props.fetchProductCompany("http://api.hifapp.com/api/nbl/product?userid=" + id);
  }
  render() {
    const { navigation, companyProduct } = this.props;
    const { itemsProps } = this.props.navigation.state.params;
    console.log(itemsProps);
    
    return (
      <ScrollView>
        <Card style={styles.intro}>
          <View style={styles.wrapInfo}>
            <View style={styles.wrapText}>
              <Text style={styles.nameCompany}>
                {itemsProps.useraccount_DVKD}
              </Text>
              <Text note>{itemsProps.useraccount_diachi}</Text>
            </View>
          </View>
          <CardItem>
            <Left>
              <Button transparent onPress={()=> {Communications.phonecall(itemsProps.useraccount_phone, true)}} >
                <Icon active name="call" />
                <Text>Phone</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent >
                <Icon active name="logo-facebook" />
                <Text>Messenger</Text>
              </Button>
            </Body>
            <Right>
              <Button transparent>
                <Icon active name="chatboxes" />
                <Text>Zalo</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>
        <View style={styles.listItems}>
          <ListItem itemDivider>
            <Text style={{ fontWeight: "bold" }}>DANH DÁCH SẢN PHẨM BÁN</Text>
          </ListItem>
          <FlatList
            data={companyProduct}
            renderItem={({ item }) => (
              <Item navigation={navigation} items={item} />
            )}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
          />
        </View>
      </ScrollView>
    );
  }
  openMessenger() {
    console.log("openMessenger");
    
    Linking.canOpenURL('https://www.facebook.com/messages/t/100015107284308').then(supported => {
      console.log(supported);
      
        if (supported) {
            Linking.openURL('https://www.facebook.com/messages/t/100015107284308');
        } else {
            console.log('erro');
        }
    }).catch(err => console.error('An error occurred', err));
  }
}

const { height, width } = Dimensions.get("window");
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1
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
    width: 35
    // resizeMode: "contain"
  },
  nameCompany: {
    fontSize: 20,
    color: BACKGROUND_COLOR_HEADER,
    fontWeight: "bold",
    marginBottom: 5,
    fontFamily: "serif"
  },
  contact: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: width / 4,
    marginRight: width / 4
  },
  textContact: {
    fontSize: 10
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
    companyProduct: state.productCompany.proCompany,
  };
}
export default connect(
  mapStateToProps,
  { fetchProductCompany }
)(Management);
