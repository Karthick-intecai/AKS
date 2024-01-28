import React from 'react';
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Animation, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Feather';
import HomeScreen from './HomeScreen';
import AccountScreen from './AccountScreen';
import SettingScreen from './SettingScreen';
import ServiceScreen from './ServiceScreen';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Tabs = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <Animation.View 
    entering={FadeInDown.duration(1000).springify()}
    style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarItem}
            key={index}
          >
            <Icon
              name={label === 'Home' ? 'home' : label === 'Service' ? 'search' : label === 'Setting' ? 'settings' : 'user'}
              size={25}
              color={isFocused ? '#386bf6' : 'gray'}
            />
            {isFocused && <Text style={styles.tabBarText}>{label}</Text>}
          </TouchableOpacity>
        );
      })}
    </Animation.View>
  );
};

const TabNavigation = () => {
  return (
      <Tabs.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <CustomTabBar {...props} />}
      >
        <Tabs.Screen name="Home" component={HomeScreen} />
        <Tabs.Screen name="Service" component={ServiceScreen} />
        <Tabs.Screen name="Setting" component={SettingScreen} />
        <Tabs.Screen name="Account" component={AccountScreen} />
      </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    height: hp(6),
    backgroundColor: '#000',
    width:'auto'
  },
  tabBarItem: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarText: {
    textAlign: 'center',
    color: '#386bf6',
    fontSize: wp(3.8),
    marginLeft: 5,
    fontWeight: 'bold',
  },
});

export default TabNavigation;
