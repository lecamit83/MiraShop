import React, { Component } from "react";
import { DrawerNavigator, StackNavigator } from "react-navigation";
import Main from "../Main";
import SearchScreen from "../SearchScreen";
import Details from "../Details";
import MapViews from "../MapViews";
import Management from "../Management";
import SideMenu from "../slide/SideMenu";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import ListCompany from "../ListCompany";

const ProductStack = StackNavigator(
  {
    MainScreen: {
      screen: Main
    },
    DetailsScreen: {
      screen: Details
    },
    CompanyDetailsScreen: {
      screen: Management
    },
    MapScreen: {
      screen: MapViews
    }
  },
  {
    initialRouteName: "MainScreen"
  }
);

const Drawer = DrawerNavigator(
  {
    MainStack: {
      screen: ProductStack
    },
    CompanyStack: {
      screen: ListCompany,
    },
    SignInStack: {
      screen: SignIn
    },
    SignUpStack: {
      screen: SignUp
    }
  },
  {
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
    initialRouteName: "SearchStack"
  }
));



