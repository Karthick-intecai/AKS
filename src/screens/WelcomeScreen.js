import { View, Text, Image, Animated, Easing, StyleSheet,TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation,CommonActions } from '@react-navigation/native';
import Animation, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const scaleValue = useRef(new Animated.Value(0)).current;
  
  // handeling back function
  const handleLogin = () => {
    navigation.navigate('Login')
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      })
    );
  }

  useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, []);

  const scale = scaleValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1, 1.2],
  });

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <StatusBar style="black" />
      {/* Logo */}
      <View style={{ marginBottom: 30 }}>
        <Animation.Image
          entering={FadeInUp.delay(1000).duration(1000).springify()}
          style={{ width: wp(30), height: hp(7) }}
          source={require('../../assets/images/AKS.png')} />
      </View>

      {/* Mian Image */}
      <View style={{ marginTop: 25, display: 'flex', alignItems: 'center' }}>
        <Image
          style={{ width: wp(80), height: hp(40), position: 'absolute' }}
          source={require('../../assets/images/Vector.png')} />
        <Image
          style={{ width: wp(80), height: hp(40), marginTop: 50 }}
          source={require('../../assets/images/welcome.png')} />
      </View>

      {/* BG Grow circle */}
      <Animated.View style={[styles.circle, { transform: [{ scale }] }]} />

      {/* Welcomw Text */}
      <Animation.View
        entering={FadeInDown.delay(1000).duration(1000).springify()}
        style={{ marginTop: 90 }}>
        <Text style={{ fontSize: wp(8), fontWeight: 'bold', color: 'white' }}>
          WELCOME
        </Text>
      </Animation.View>

      {/* Next Text */}
      <Animation.View 
      entering={FadeInDown.delay(1200).duration(1000).springify()}
      >
      <TouchableOpacity
        onPress={handleLogin}
        style={{ marginTop: 30, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', right: -100 }}>
        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: wp(5) }}>
          NEXT
        </Text>
        <Icon name="caretright" color="#fff" style={{ fontSize: wp(5) }} />
      </TouchableOpacity>
      </Animation.View>

    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  circle: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#272746',
    borderRadius: 100,
    zIndex: -1,
  },
});