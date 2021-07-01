import { Ionicons } from '@expo/vector-icons';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import {API, graphqlOperation} from "aws-amplify";
import {getUser} from "../graphql/queries";

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { MaterialIcons } from '@expo/vector-icons';
import { BottomTabParamList, HomeNavigatorParamList, TabTwoParamList } from '../types';
import ProfilePicture from '../components/ProfilePicture';
import {useEffect, useState} from "react";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint,
      showLabel: false,
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="home-filled" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-search" color={color} />,
        }}
      />

        <BottomTab.Screen
            name="Notifications"
            component={TabTwoNavigator}
            options={{
                tabBarIcon: ({ color }) => <TabBarIcon name="ios-notifications-outline" color={color} />,
            }}
        />

        <BottomTab.Screen
            name="Messages"
            component={TabTwoNavigator}
            options={{
                tabBarIcon: ({ color }) => <TabBarIcon name="ios-mail" color={color} />,
            }}
        />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<HomeNavigatorParamList>();

function HomeNavigator() {

    const [user, setUser] = useState(null);


    useEffect(() => {
        // get the current user
        const fetchUser = async () => {
            try {

            } catch (e) {

            }
        }

        fetchUser();
    }, []);


  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
            headerRightContainerStyle: {
              marginRight: 15,
            },
            headerLeftContainerStyle: {
              marginLeft: 15,
            },
            headerTitle: () => (
                <Ionicons name={"logo-twitter"} size={30} color={Colors.light.tint} />
            ),
            headerRight: () => (
                <MaterialCommunityIcons name={"star-four-points-outline"} size={30} color={Colors.light.tint} />
            ),
            headerLeft: () => (
                <ProfilePicture size={40} image={"https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg"} />
            ),
        }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}
