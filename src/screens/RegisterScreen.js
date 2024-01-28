import { View, Text, StatusBar, Modal, Image, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Alert } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Octicons';
import IconFether from 'react-native-vector-icons/Feather';
import { apiKey, apiKeyLogin } from '../api/Api';
import CustomAlert from '../components/CostomAlert';
import { useNavigation } from '@react-navigation/native';
import { Checkbox } from 'react-native-paper';
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';
import DatePicker from 'react-native-modern-datepicker';

const RegisterScreen = () => {

  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dob, setDob] = useState('');
  const [panNumber, setPanNumber] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  // Date picker
  const [showDatePicker, setShowDatePicker] = useState(false);
  // custom alert
  const [showAlert, setShowAlert] = useState(false);
  const [registerAlert, setRegisterAlert] = useState(false);
  const [alert, setAlert] = useState(false);
  // Error Handeling
  const [panError, setPanError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // password validation
  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
    setPasswordError('')
  };
  // password validateion end

  // PAN Number Valedation

  // Function to validate PAN card format
  const validatePAN = (pan) => {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return panRegex.test(pan);
  };

  // Function to handle PAN number change
  const handlePanChange = (text) => {
    const formattedPan = text; // Convert to uppercase
    setPanNumber(formattedPan);
    setPanError('');
  };

  // PAN Number valedation end

  // Date pcking function
  const handleDateChange = (date) => {

    console.log(date)
    if (date) {
      setDob(date);
    }

    setShowDatePicker(false);
  };
  // Date picking function end

  //Handeling the full form submition handeling function
  const registerUser = async () => {
    try {

      // Input validtion handeling
      if (!username || !password || !phoneNumber || !dob || !panNumber) {
        setShowAlert(true);
        return;
      }

      // password validation
      if (!validatePassword(password)) {
        setPasswordError('Password must have at least one uppercase letter, one lowercase letter, one numeric digit, one special character, and a minimum length of 8 characters. Please try again.')
        return;
      }

      // Handeling PAN validation
      if (!validatePAN(panNumber)) {
        setPanError('Enter a valid PAN number');
        return;
      }

      // Terms and conditions validation
      if (!acceptedTerms) {
        setAlert(true);
        return;
      }

      const userData = {
        username,
        password,
        phoneNumber,
        dob,
        panNumber,
      };

      const response = await fetch(apiKeyLogin, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        // Handle non-successful responses (e.g., display an error message)
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }

      // Registration successful
      const responseData = await response.json();
      console.log('Registration successful:', responseData);

      navigation.navigate('Verification', { phoneNumber });

      //  navigate to the next screen or perform other actions here
    } catch (error) {
      // Handle the error (e.g., display an error message)
      console.error('Registration Error:', error);
      // Alert.alert('Registration Failed', error.message || 'Something went wrong');
      setRegisterAlert(true);
    }
  };

  return (
    <SafeAreaView className='flex-1 justify-center items-center'>
      <StatusBar style="Black" />

      <ScrollView>
        <View style={{ height: hp(100) }} className='flex space-y-5'>

          {/* image and get start text */}
          <View className='flex items-center'>
            <Animated.Image
              entering={FadeInUp.delay(200).duration(1000).springify()}
              style={{ width: wp(55), height: hp(23), marginTop: 20 }}
              source={require('../../assets/images/Login.png')} />

            <View className='flex justify-center items-center'>
              <View>
                <Animated.Text
                  entering={FadeInUp.duration(1000).springify()}
                  style={{ fontSize: wp(6.5) }}
                  className='font-bold text-black'>
                  Get Started
                </Animated.Text>
              </View>
              <View>
                <Animated.Text
                  entering={FadeInUp.duration(1000).springify()}
                  style={{ fontSize: wp(3.5) }}
                  className='text-gray-400 font-semibold'>
                  By creating a free account.
                </Animated.Text>
              </View>
            </View>
          </View>

          {/* Registrt form */}
          <View className="flex justify-around  self-center space-y-3">
            {/* Username */}
            <Animated.View
              entering={FadeInUp.delay(100).duration(1000).springify()}
              style={{ width: wp(90), height: hp(5) }}
              className="bg-gray-200 border border-gray-300 pr-3 pl-2  rounded-lg w-full flex-row justify-between items-center">
              <TextInput
                placeholder="Username"
                placeholderTextColor={'gray'}
                style={{ fontSize: wp(4.2), color: '#000', width: '95%', paddingBottom: 8 }}
                value={username}
                onChangeText={(text) => setUsername(text)}
              />
              <Icon
                name="mail-outline"
                color="gray"
                style={{ fontSize: wp(6) }}
              />
            </Animated.View>

            {/* Password */}
            <Animated.View
              entering={FadeInUp.delay(200).duration(1000).springify()}
              style={{ width: wp(90), height: hp(5) }}
              className="bg-gray-200 border border-gray-300 px-2  rounded-lg flex-row justify-between items-center">
              <TextInput
                placeholder="Password"
                placeholderTextColor={'gray'}
                value={password}
                onChangeText={handlePasswordChange}
                secureTextEntry={!showPassword}
                style={{ fontSize: wp(4.2), color: '#000', width: '95%', paddingBottom: 8 }}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Icons
                  name={showPassword ? 'unlock' : 'lock'}
                  style={{ fontSize: wp(6) }}
                  color="gray"
                />
              </TouchableOpacity>
            </Animated.View>
            {/* password Error shower */}
            {passwordError ? (
              <Text style={{ color: 'red', fontSize: wp(2.5), width: wp(90) }}>{passwordError}</Text>
            ) : null}

            {/* Phone Number */}
            <Animated.View
              entering={FadeInUp.delay(300).duration(1000).springify()}
              style={{ width: wp(90), height: hp(5) }}
              className="bg-gray-200 border border-gray-300 pr-3 pl-2 rounded-lg flex-row justify-between items-center">
              <TextInput
                placeholder="Phone Number"
                placeholderTextColor={'gray'}
                value={phoneNumber}
                keyboardType="numeric"
                onChangeText={(text) => setPhoneNumber(text)}
                style={{ fontSize: wp(4.2), color: '#000', width: '95%', paddingBottom: 8 }}
              />
              <IconFether
                name="smartphone"
                color="gray"
                style={{ fontSize: wp(6) }}
              />
            </Animated.View>

            {/* Date of Birth */}
            <Animated.View
              entering={FadeInUp.delay(400).duration(1000).springify()}
              style={{ width: wp(90), height: hp(5) }}
              className="bg-gray-200 border border-gray-300 pr-1 pl-2 rounded-lg flex-row justify-between items-center">
              <TouchableOpacity style={{ width: wp(80) }} onPress={() => setShowDatePicker(true)}>
                <Text style={{ fontSize: wp(4.2), color: dob ? '#000' : 'gray' }}>
                  {dob ? dob : 'Select date'}
                </Text>
              </TouchableOpacity>
              <IconFether
                name="calendar"
                color="gray"
                style={{ fontSize: wp(6) }}
              />
            </Animated.View>

            {/* date picker */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={showDatePicker}
              onRequestClose={() => setShowDatePicker(false)}
            >
              <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <TouchableOpacity
                  style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', }}
                  onPress={() => setShowDatePicker(false)}
                />
                <DatePicker
                  mode="calendar"
                  onSelectedChange={handleDateChange}
                  selected={dob ? new Date(dob) : undefined}
                  color={'#000'}
                />
              </View>
            </Modal>

            {/* Pan Number */}
            <Animated.View
              entering={FadeInUp.delay(500).duration(1000).springify()}
              style={{ width: wp(90), height: hp(5) }}
              className="bg-gray-200 border border-gray-300 pr-[13] pl-2 rounded-lg flex-row justify-between items-center">
              <TextInput
                placeholder="PAN Number"
                placeholderTextColor={'gray'}
                value={panNumber}
                onChangeText={handlePanChange}
                style={{ fontSize: wp(4.2), color: '#000', width: '95%', paddingBottom: 8 }}
              />
              <IconFether
                name="credit-card"
                color="gray"
                style={{ fontSize: wp(6) }}
              />
            </Animated.View>
            {/* pan error shower */}
            {panError ? (
              <Text style={{ color: 'red', fontSize: wp(2.5), }}>{panError}</Text>
            ) : null}
          </View>

          {/* Terms and Conditions handeling */}
          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            className='flex-row items-center'>
            <Checkbox
              style={{ fontSize: wp(4) }}
              color='green'
              status={acceptedTerms ? 'checked' : 'unchecked'}
              onPress={() => setAcceptedTerms(!acceptedTerms)}
            />
            <Text style={{ fontSize: wp(2.5) }} className='font-medium text-gray-400'>By checking the box you agree to our</Text>
            <TouchableOpacity>
              <Text style={{ fontSize: wp(2.5) }} className='font-medium text-red-400 mx-1'>Terms and Conditions</Text>
            </TouchableOpacity>
          </Animated.View>

          {/* custom alert */}
          <CustomAlert
            visible={showAlert}
            heading='Alert'
            message="Fill the all input"
            onClose={() => setShowAlert(false)}
          />

          <CustomAlert
            visible={alert}
            heading="Terms and Conditions"
            message="Please accept the terms and conditions before registering."
            onClose={() => setAlert(false)}
          />

          <CustomAlert
            visible={registerAlert}
            heading="Registration Error"
            message="An unexpected error occurred. Please try again."
            onClose={() => setRegisterAlert(false)}
          />

          {/* Register button */}
          <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()}
            className='flex-1 justify-end bottom-8'>
            <TouchableOpacity
              onPress={registerUser}
              style={{ height: hp(5), width: wp(90) }}
              className='flex justify-center items-center self-center rounded-lg mb-5 bg-green-500'>
              <Text style={{ fontSize: wp(5) }} className='text-center font-semibold text-white pb-1'>Next
                <IconFether
                  name="chevron-right"
                  color="#fff"
                  style={{ fontSize: wp(5) }}
                />
              </Text>

              {/* switching to the login screen */}
            </TouchableOpacity>
            <View className='flex-row justify-center'>
              <Text style={{ fontSize: wp(3.5) }} className='font-medium text-black'>Already a member ?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={{ fontSize: wp(3.5) }} className='font-medium text-green-500 ml-1'>Login</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default RegisterScreen