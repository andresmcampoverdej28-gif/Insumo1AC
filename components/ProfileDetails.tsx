import React from 'react';
import { Image, Text, View } from 'react-native';

const ProfileDetails = () => {
    return (
      <View className="items-center">
        <Text className="text-xl mb-3"></Text>
        <Image
          source={require('@/assets/images/Buzz_Photo.jpg')}
          className="w-48 h-48 rounded-full"
        />
        <Text className='text-2xl font-bold'>Andres Campoverde</Text>
        <Text className='text-xl text-gray-400 font-bold'>Brawl Stars' Pro Player</Text>
      </View>
    );
}

export default ProfileDetails;
