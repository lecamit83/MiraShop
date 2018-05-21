import React, { Component } from "react";
import {Dimensions} from "react-native";
import { DrawerNavigator, StackNavigator } from "react-navigation";
import Main from "../Main";
import SearchScreen from "../SearchScreen";
import Details from "../Details";
import MapViews from "../MapViews";
import Management from "../Management";
import CompanyProfile from "../CompanyProfile";
import SideMenu from "../slide/SideMenu";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import ListCompany from "../ListCompany";

const {height, width} = Dimensions.get("window");

const ProductStack = StackNavigator(
  {
    MainScreen: {
      screen: Main
    },
    DetailsScreen: {
      screen: Details
    },
    MapScreen: {
      screen: MapViews
    }
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
    }
  },
  {
    initialRouteName: "ListScreen"
  }
);

const CompanyProfileStack = StackNavigator(
  {
    CompanyProfile: {
      screen: CompanyProfile
    }
  },
  {
    initialRouteName: "CompanyProfile"
  }
);

const Drawer = DrawerNavigator(
  {
    MainStack: {
      screen: ProductStack
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
    drawerWidth : width * 0.8,
    initialRouteName: "MainStack",
    contentComponent: props => <SideMenu {...props} />
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
