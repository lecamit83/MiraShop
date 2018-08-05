import React, { Component } from "react";
import {Dimensions} from "react-native";
import { DrawerNavigator, StackNavigator } from "react-navigation";
import Main from "../Main";
import SearchScreen from "../SearchScreen";
import Details from "../Details";
import MapViews from "../MapViews";
import Management from "../Management";
import AddThuoc from "../AddThuoc";
import AddTPCN from "../AddTPCN";
import AddVTandTBYT from "../AddVTandTBYT";
import AddMyPham from "../AddMyPham";
import CompanyProfile from "../CompanyProfile";
import SideMenu from "../slide/SideMenu";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import ListCompany from "../ListCompany";
import MainHeader from "../header/MainHeaders";

const {height, width} = Dimensions.get("window");

const ThuocStack = StackNavigator(
  {
    MainScreen: {
      //screen: (props) => < Main {...props}  />
      screen: (props) => <Main  {...props} screenProps={0}/>,
      navigationOptions :  ({ navigation }) => ({
        header: (props) => <MainHeader {...props} navigation={navigation}  />
      })
    },
    DetailsScreen: {
      screen: Details
    },
    MapScreen: {
      screen: MapViews
    },
    AddThuoc: {
      screen: AddThuoc
    },
    AddTPCN: {
      screen: AddTPCN
    },
    AddVTandTBYT: {
      screen: AddVTandTBYT
    },
    AddMyPham: {
      screen: AddMyPham
    },
    DetailCompany: {
      screen: Management
    },
    DetailsScreen: {
      screen: Details
    },
  },
  {
    initialRouteName: "MainScreen"
  }
);

const TPCNStack = StackNavigator(
  {
    MainScreen: {
      //screen: (props) => < Main {...props}  />
      screen: (props) => <Main  {...props} screenProps={1}/>,
      navigationOptions :  ({ navigation }) => ({
        header: (props) => <MainHeader {...props} navigation={navigation}  />
      })
    },
    DetailsScreen: {
      screen: Details
    },
    MapScreen: {
      screen: MapViews
    },
    AddThuoc: {
      screen: AddThuoc
    },
    AddTPCN: {
      screen: AddTPCN
    },
    AddVTandTBYT: {
      screen: AddVTandTBYT
    },
    AddMyPham: {
      screen: AddMyPham
    },
    DetailCompany: {
      screen: Management
    },
    DetailsScreen: {
      screen: Details
    },
  },
  {
    initialRouteName: "MainScreen"
  }
);

const VTYTStack = StackNavigator(
  {
    MainScreen: {
      //screen: (props) => < Main {...props}  />
      screen: (props) => <Main  {...props} screenProps={2}/>,
      navigationOptions :  ({ navigation }) => ({
        header: (props) => <MainHeader {...props} navigation={navigation}  />
      })
    },
    DetailsScreen: {
      screen: Details
    },
    MapScreen: {
      screen: MapViews
    },
    AddThuoc: {
      screen: AddThuoc
    },
    AddTPCN: {
      screen: AddTPCN
    },
    AddVTandTBYT: {
      screen: AddVTandTBYT
    },
    AddMyPham: {
      screen: AddMyPham
    },
    DetailCompany: {
      screen: Management
    },
    DetailsScreen: {
      screen: Details
    },
  },
  {
    initialRouteName: "MainScreen"
  }
);

const MyPhamStack = StackNavigator(
  {
    MainScreen: {
      //screen: (props) => < Main {...props}  />
      screen: (props) => <Main  {...props} screenProps={3}/>,
      navigationOptions :  ({ navigation }) => ({
        header: (props) => <MainHeader {...props} navigation={navigation}  />
      })
    },
    DetailsScreen: {
      screen: Details
    },
    MapScreen: {
      screen: MapViews
    },
    AddThuoc: {
      screen: AddThuoc
    },
    AddTPCN: {
      screen: AddTPCN
    },
    AddVTandTBYT: {
      screen: AddVTandTBYT
    },
    AddMyPham: {
      screen: AddMyPham
    },
    DetailCompany: {
      screen: Management
    },
    DetailsScreen: {
      screen: Details
    },
  },
  {
    initialRouteName: "MainScreen"
  }
);

const CompanyStack = StackNavigator(
  {
    ListScreen: {
      screen: ListCompany
    },
    DetailCompany: {
      screen: Management
    },
    DetailsScreen: {
      screen: Details
    },
    MapScreen: {
      screen: MapViews
    },
  },
  {
    initialRouteName: "ListScreen"
  }
);

const CompanyProfileStack = StackNavigator(
  {
    CompanyProfile: {
      screen: CompanyProfile
    },
    DetailsScreen: {
      screen: Details
    },
    MapScreen: {
      screen: MapViews
    },
  },
  {
    initialRouteName: "CompanyProfile"
  }
);

const AddNewStack = StackNavigator(
  {
    AddThuoc: {
      screen: AddThuoc
    },
  }
)

const Drawer = DrawerNavigator(
  {
    ThuocStack: {
      screen: ThuocStack
    },
    TPCNStack: {
     screen : TPCNStack
    },
    VTYTStack: {
      screen: VTYTStack
    },
    MyPhamStack: {
      screen: MyPhamStack
    },
    CompanyStack: {
      screen: CompanyStack
    },
    CompanyProfileStack: {
      screen: CompanyProfileStack
    },
    SignInStack: {
      screen: SignIn
    },
    SignUpStack: {
      screen: SignUp
    },
  },
  {
    initialRouteName: "ThuocStack",
    contentComponent: (props) => <SideMenu {...props} />
  }
);

export default (MainStack = StackNavigator(
  {
    SearchStack: {
      screen: SearchScreen
    },
    MainStack: {
      screen: Drawer,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "MainStack"
  }
));
