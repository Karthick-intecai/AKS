import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';

const CustomAlert = ({ visible, heading, message, onClose }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View className='flex-1 justify-center items-center bg-black/50'>
                <View className='bg-white p-4 rounded-md items-center'>
                    <Text className='font-bold text-black text-lg'>{heading}</Text>
                    <Text className='font-bold text-lg pb-2'>{message}</Text>
                    <TouchableOpacity onPress={onClose} className='bg-[#6ccd28] px-5 py-1 rounded-md'>
                        <Text className='text-white text-base font-bold'>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default CustomAlert;
