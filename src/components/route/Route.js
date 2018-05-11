import React, { Component } from "react";
import { DrawerNavigator, StackNavigator } from "react-navigation";
import Main from "../Main";
import SearchScreen from "../SearchScreen";
import Details from "../Details";
import Management from "../Management";
import SideMenu from "../slide/SideMenu";
import Login from "../Login";

const ProductStack = StackNavigator(
  {
    MainScreen: {
      screen: Main
    },
    DetailsScreen: {
      screen: Details
    }
  },
  {
    initialRouteName: "MainScreen"
  }
);

const Drawer = DrawerNavigator(
  {
    MainStack: {
      screen: ProductStack,
    },
    ManageStack: {
      screen: Management,
    },
    LoginStack: {
      screen: Login,
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
    initialRouteName: "MainStack"
  }
));