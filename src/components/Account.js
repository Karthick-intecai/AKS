import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Image,
    StatusBar,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Feather from 'react-native-vector-icons/Feather'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const YourComponent = () => {
    const [editMode, setEditMode] = useState(false);
    const [profileImage, setProfileImage] = useState(require('../../assets/images/User.png'));
    const [panNumber, setPanNumber] = useState('ABCDE1234F');
    const [accountHolder, setAccountHolder] = useState('Account Holder Name');
    const [accountNumber, setAccountNumber] = useState('132113657898');
    const [bankName, setBankName] = useState('Bank Name');
    const [branch, setBranch] = useState('Branch Name');
    const [ifscNumber, setIfscNumber] = useState('IFSC Number');
    const [accountType, setAccountType] = useState('Salary');
    const [userName, setUserName] = useState('User Name');
    const [password, setPassword] = useState('12345678')

    const selectImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            setProfileImage({ uri: image.path, isStatic: true });
        }).catch(error => {
            console.log(error);
        });
    };

    const saveChanges = () => {
        // Implement logic to save changes
        console.log('PAN Number:', panNumber);
        console.log('Account Holder Name:', accountHolder);
        console.log('Account Number:', accountNumber);
        console.log('Profile Image URI:', profileImage.uri);
        console.log('Bank Name', bankName);
        console.log('Bank Branch', branch);
        console.log('IFSC Number:', ifscNumber);
        console.log('AccountType:', accountType);
        console.log('User Name:', userName);
        console.log('Password:', password);

        setEditMode(false);
    };

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar style="auto" />
            <ScrollView>
                <View style={{ width: wp(90) }} className='flex-1 justify-center'>
                    <View className=' w-auto mt-5'>
                        <View>
                            <Image
                                style={{ width: wp(13), height: hp(6) }}
                                source={require('../../assets/images/blob_2.png')} />
                        </View>

                        <View className='-top-10'>
                            <View className='flex self-center'>
                                <Image
                                    style={{ width: wp(64), height: hp(24),borderRadius:50 }}
                                    source={require('../../assets/images/blob_1.png')}
                                />
                            </View>
                            {/* UserProfile */}
                            <TouchableOpacity onPress={editMode ? selectImage : null} className='flex items-center justify-center absolute self-center'>
                                <Image
                                    style={{ width: wp(47.6), height: hp(24),borderRadius:100 }}
                                    source={profileImage}
                                />
                            </TouchableOpacity>
                        </View>
                        <View className=' left-64 absolute top-52'>
                            <Image
                                style={{ width: wp(19), height: hp(18) }}
                                source={require('../../assets/images/blob_3.png')}
                            />
                        </View>
                    </View>

                    {/* PAN Number  */}
                    <View className='space-y-3 justify-center'>
                        <View className='space-y-1'>
                            <Text style={{ fontSize: wp(4.2) }} className='text-gray-400 font-semibold'>PAN Number</Text>
                            {editMode ? (
                                <TextInput
                                    style={{ fontSize: wp(4.5),height:hp(5), width: wp(90),color:'#000' }}
                                    className='border border-gray-300 p-2 rounded-lg bg-white'
                                    value={panNumber}
                                    onChangeText={(text) => setPanNumber(text)}
                                />
                            ) : (
                                <Text className='text-black mx-2' style={{ fontSize: wp(4.8) }}>{panNumber}</Text>
                            )}
                        </View>

                        {/* Account Holder */}
                        <View className='space-y-1'>
                            <Text style={{ fontSize: wp(4.2), }} className='text-gray-400 font-semibold'>Account Holder Name</Text>
                            {editMode ? (
                                <TextInput
                                    style={{ fontSize: wp(4.5),height:hp(5), width: wp(90),color:'#000' }}
                                    className='border border-gray-300 p-2 rounded-lg bg-white'
                                    value={accountHolder}
                                    onChangeText={(text) => setAccountHolder(text)}
                                />
                            ) : (
                                <Text className='text-black mx-2' style={{ fontSize: wp(4.8), }}>{accountHolder}</Text>
                            )}
                        </View>

                        {/* Account Number */}
                        <View className='space-y-1'>
                            <Text style={{ fontSize: wp(4.2) }} className='text-gray-400 font-semibold'>Account Number</Text>
                            {editMode ? (
                                <TextInput
                                    style={{ fontSize: wp(4.5),height:hp(5), width: wp(90),color:'#000' }}
                                    className='border border-gray-300 p-2 rounded-lg bg-white'
                                    value={accountNumber}
                                    onChangeText={(text) => setAccountNumber(text)}
                                />
                            ) : (
                                <Text className='text-black mx-2' style={{ fontSize: wp(4.8) }}>{accountNumber}</Text>
                            )}
                        </View>

                        {/* Bank Name  */}
                        <View className='space-y-1'>
                            <Text style={{ fontSize: wp(4.2) }} className='text-gray-400 font-semibold'>Bank Name</Text>
                            {editMode ? (
                                <TextInput
                                    style={{ fontSize: wp(4.5),height:hp(5), width: wp(90),color:'#000' }}
                                    className='border border-gray-300 p-2 rounded-lg bg-white'
                                    value={bankName}
                                    onChangeText={(text) => setBankName(text)}
                                />
                            ) : (
                                <Text className='text-black mx-2' style={{ fontSize: wp(4.8) }}>{bankName}</Text>
                            )}
                        </View>

                        {/* Branch */}
                        <View className='space-y-1'>
                            <Text style={{ fontSize: wp(4.2) }} className='text-gray-400 font-semibold'>Branch Name</Text>
                            {editMode ? (
                                <TextInput
                                    style={{ fontSize: wp(4.5),height:hp(5), width: wp(90),color:'#000' }}
                                    className='border border-gray-300 p-2 rounded-lg bg-white'
                                    value={branch}
                                    onChangeText={(text) => setBranch(text)}
                                />
                            ) : (
                                <Text className='text-black mx-2' style={{ fontSize: wp(4.8) }}>{branch}</Text>
                            )}
                        </View>

                        {/* IFSC Code */}
                        <View className='space-y-1'>
                            <Text style={{ fontSize: wp(4.2) }} className='text-gray-400 font-semibold'>IFSC Code</Text>
                            {editMode ? (
                                <TextInput
                                    style={{ fontSize: wp(4.5),height:hp(5), width: wp(90),color:'#000' }}
                                    className='border border-gray-300 p-2 rounded-lg bg-white'
                                    value={ifscNumber}
                                    onChangeText={(text) => setIfscNumber(text)}
                                />
                            ) : (
                                <Text className='text-black mx-2' style={{ fontSize: wp(4.8) }}>{ifscNumber}</Text>
                            )}
                        </View>

                        {/* Account Type */}
                        <View className='space-y-1'>
                            <Text style={{ fontSize: wp(4.2) }} className='text-gray-400 font-semibold'>Account Type</Text>
                            {editMode ? (
                                <TextInput
                                    style={{fontSize: wp(4.5),height:hp(5), width: wp(90),color:'#000' }}
                                    className='border border-gray-300 p-2 rounded-lg bg-white'
                                    value={accountType}
                                    onChangeText={(text) => setAccountType(text)}
                                />
                            ) : (
                                <Text className='text-black mx-2' style={{ fontSize: wp(4.8) }}>{accountType}</Text>
                            )}
                        </View>

                        {/* User Nmae */}
                        <View className='space-y-1'>
                            <Text style={{ fontSize: wp(4.2) }} className='text-gray-400 font-semibold'>User Name</Text>
                            {editMode ? (
                                <TextInput
                                    style={{ fontSize: wp(4.5),height:hp(5), width: wp(90),color:'#000' }}
                                    className='border border-gray-300 p-2 rounded-lg bg-white'
                                    value={userName}
                                    onChangeText={(text) => setUserName(text)}
                                />
                            ) : (
                                <Text className='text-black mx-2' style={{ fontSize: wp(4.8) }}>{userName}</Text>
                            )}
                        </View>

                        {/* Password */}
                        <View className='space-y-1 relative'>
                            <Text style={{ fontSize: wp(4.2) }} className='text-gray-400 font-semibold'>Password</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                
                                {editMode ? (
                                    <View className=' justify-center'>
                                    <TextInput
                                    style={{ fontSize: wp(4.5),height:hp(5), width: wp(90),color:'#000' }}
                                    className=' border border-gray-300 p-2 rounded-lg bg-white'
                                    value={password}
                                    secureTextEntry={!showPassword}
                                    onChangeText={(text) => setPassword(text)}
                                    editable={editMode} // Allow editing only when in edit mode
                                />
                                    <TouchableOpacity
                                        style={{ position: 'absolute', right: wp(2) }}
                                        onPress={togglePasswordVisibility}
                                    >
                                        <Feather name={showPassword ? 'eye' : 'eye-off'} size={wp(5)} color='black' />
                                    </TouchableOpacity>
                                    </View>
                                ):(
                                    <TextInput
                                    style={{ fontSize: wp(4.5),height:hp(5), width: wp(70),color:'#000' }}
                                    className=' p-2 rounded-lg pb-2'
                                    value={password}
                                    secureTextEntry={!showPassword}
                                    onChangeText={(text) => setPassword(text)}
                                    editable={editMode} // Allow editing only when in edit mode
                                />
                                )
                            }
                            </View>
                        </View>
                    </View>

                    <View className='flex-row justify-center space-x-4 mt-5 mb-2'>
                        <TouchableOpacity
                            onPress={() => setEditMode(!editMode)}
                            style={{ width: wp(40), height: hp(6) }} className='bg-white justify-center items-center border border-green-400 rounded-md'
                        >
                            <Text style={{ fontSize: wp(4), color: 'green' }}>{editMode ? 'Cancel' : 'Edit Profile'}</Text>
                        </TouchableOpacity>

                        {editMode && (
                            <TouchableOpacity
                                onPress={saveChanges}
                                style={{ width: wp(40), height: hp(6) }} className='bg-green-400 justify-center items-center border border-white rounded-md'
                            >
                                <Text style={{ fontSize: wp(4), color: 'white' }}>Save Changes</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default YourComponent;
