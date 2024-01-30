import { View, Text, StatusBar, Image, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Alert } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Octicons';
import CustomAlert from '../components/CostomAlert';
import { apiKey, apiKeyLogin } from '../api/Api';
import { Checkbox } from 'react-native-paper';
import { AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';

const LoginScreen = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [loginAlert, setLoginAlert] = useState(false);
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation();

  // Auto fill the input fields
  useEffect(() => {
    autoFillCredentials();
  }, []);

  // password 
  const handlePasswordChange = (text) => {
    setPassword(text);
    
  };
  
  // Handel the login form
  const handleLogin = async () => {
    // Perform login API call and handle response
    try {

      // checking the form is field
      if (username.trim() === '' || password.trim() === '') {
        setShowAlert(true);
        return;
      }

      const response = await fetch(apiKeyLogin, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Successful login, save credentials if "Remember Me" is checked
        saveCredentials();

        // Navigate to Main after successful login
        navigation.replace('Main');
      } else {
        // Display an error message for unsuccessful login
        Alert.alert('Login Failed', 'Invalid username or password');
      }
    } catch (error) {
      console.error('Login Error:', error);
      setLoginAlert(true);
      // Alert.alert('Login Failed', `Error: ${error.message}`);
    }
  };

  // password toggle function
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // remaind me check box
  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
    setChecked(!checked)
  };

  const autoFillCredentials = async () => {
    if (rememberMe) {
      const savedUsername = await AsyncStorage.getItem('savedUsername');
      const savedPassword = await AsyncStorage.getItem('savedPassword');
      setUsername(savedUsername || '');
      setPassword(savedPassword || '');
    }
  };

  const saveCredentials = async () => {
    if (rememberMe) {
      await AsyncStorage.setItem('savedUsername', username);
      await AsyncStorage.setItem('savedPassword', password);
    } else {
      await AsyncStorage.removeItem('savedUsername');
      await AsyncStorage.removeItem('savedPassword');
    }
  };


  return (
    <SafeAreaView className='flex-1 justify-center items-center'>
      <StatusBar style="Black" />

      <ScrollView>
        <View className='flexs space-y-20'>
          {/* image and Welcome text */}
          <View className='flex items-center'>
            <Animated.Image
              entering={FadeInUp.delay(200).duration(1000).springify()}
              style={{ width: wp(55), height: hp(23), marginTop: 20 }}
              source={require('../../assets/images/Login.png')} />

            <View className='flex justify-center items-center absolute -bottom-4'>
              <View>
                <Animated.Text
                  entering={FadeInUp.duration(1000).springify()}
                  style={{ fontSize: wp(6) }}
                  className='font-bold text-black'>
                  Welcome Back
                </Animated.Text>
              </View>
              <View>
                <Animated.Text
                  entering={FadeInUp.duration(1000).springify()}
                  style={{ fontSize: wp(3.5) }}
                  className='text-gray-400 font-semibold'>
                  Sign in to access your account
                </Animated.Text>
              </View>
            </View>
          </View>

          {/* login form */}
          <View className=' space-y-56'>
            <View className=''>
              <View className="flex justify-around space-y-5">
                <Animated.View
                  entering={FadeInUp.delay(100).duration(1000).springify()}
                  style={{ width: wp(90), height: hp(5) }}
                  className="bg-gray-200 border border-gray-300 pl-2 pr-3 rounded-lg w-full flex-row justify-between items-center">
                  <TextInput
                    placeholder="Username"
                    placeholderTextColor={'gray'}
                    style={{ fontSize: wp(4.2), color: '#000', width: '94%', paddingBottom: 8 }}
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                  />
                  <Icon
                    name="mail-outline"
                    color="gray"
                    style={{ fontSize: wp(6) }}
                  />
                </Animated.View>

                <Animated.View
                  entering={FadeInUp.delay(200).duration(1000).springify()}
                  style={{ width: wp(90), height: hp(5) }}
                  className="bg-gray-200 border border-gray-300 px-[9] rounded-lg w-full flex-row justify-between items-center">
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor={'gray'}
                    style={{ fontSize: wp(4.2), color: '#000', width: '94%', paddingBottom: 8 }}
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={handlePasswordChange}
                  />

                  <TouchableOpacity onPress={togglePasswordVisibility}>
                    <Icons name={showPassword ? 'unlock' : 'lock'} color="gray" style={{ fontSize: wp(6) }} />
                  </TouchableOpacity>
                </Animated.View>
              </View>

              {/* remind me and forget password */}
              <Animated.View
                entering={FadeInDown.delay(200).duration(1000).springify()}
                className='flex-row justify-between items-center mt-3'>
                <View className='flex-row items-center'>
                  <Checkbox
                    style={{ fontSize: wp(3.5) }}
                    color='green'
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={handleRememberMe}
                  />
                  <Text style={{ fontSize: wp(3.5) }} className='font-medium text-gray-400'>Remind me</Text>
                </View>

                <TouchableOpacity>
                  <Text style={{ fontSize: wp(3.5) }} className='text-red-400'>Forget Password ?</Text>
                </TouchableOpacity>
              </Animated.View>
            </View>

            {/* Login to register screen */}
            <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()}
              className=''>
              <TouchableOpacity onPress={handleLogin} style={{ height: hp(5), width: wp(90), }} className='flex justify-center rounded-lg mb-5 bg-green-500 '>
                <Text style={{ fontSize: wp(5) }} className='text-center font-semibold text-white'>Login</Text>
              </TouchableOpacity>
              <View className='flex-row justify-center'>
                <Text style={{ fontSize: wp(3.5) }} className='font-medium text-black'>New Registration ?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                  <Text style={{ fontSize: wp(3.5) }} className='font-medium text-green-500 ml-1'>Register now</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>

            {/* Custom Alert */}
            <CustomAlert
              visible={showAlert}
              heading="Login"
              message="Fill the all fields." 
              onClose={() => setShowAlert(false)} 
            />

            <CustomAlert
              visible={loginAlert}
              heading="Login Error"
              message="An unexpected error occurred. Please try again." 
              onClose={() => setLoginAlert(false)} 
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default LoginScreen