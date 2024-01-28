import React, { useState } from 'react';
import UserProfile from '../components/UserProfile';
import Account from '../components/Account';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View, Text, SafeAreaView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


const AccountScreen = () => {

    const [selectedTab, setSelectedTab] = useState(0);

    const navigation = useNavigation();

    return (
        <SafeAreaView className='flex-1 self-center'>
            <StatusBar style="auto" />

            <View className='my-5'>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name='chevron-left' size={27} color='black' />
                </TouchableOpacity>
            </View>
            <View className=' rounded-xl flex-row items-center justify-center space-x-1 mb-4'>
                <TouchableOpacity
                    style={{ width: wp(38), height: hp(6), backgroundColor: selectedTab == 0 ? 'white' : '#cccccc' }}
                    className=' border border-gray-300 rounded-2xl justify-center items-centek'
                    onPress={() => {
                        setSelectedTab(0);
                    }}>
                    <Text style={{ fontSize: wp(4.4), color: selectedTab == 0 ? 'black' : '#777', }} className='font-semibold text-center'>User Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ width: wp(38), height: hp(6), backgroundColor: selectedTab == 1 ? 'white' : '#cccccc' }}
                    className=' border border-gray-300 rounded-2xl justify-center items-center'
                    onPress={() => {
                        setSelectedTab(1);
                    }}>
                    <Text style={{ fontSize: wp(4.4), color: selectedTab == 1 ? 'black' : '#777' }} className='font-semibold text-center'>Account</Text>
                </TouchableOpacity>
            </View>

            {selectedTab == 0 ? (
                <View className='flex-1 justify-center items-center'>
                    <UserProfile />
                </View>
            ) : (
                <View className='flex-1 justify-center items-center'>
                    <Account/>
                </View>
            )}
        </SafeAreaView>
    );
};

export default AccountScreen;