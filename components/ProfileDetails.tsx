import CustomText from '@/components/ui/CustomText';
import IconButton from '@/components/ui/IconButton';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Image, Linking, Text, View } from 'react-native';

const ProfileDetails = () => {
  return (
    <View className="items-center">
      <Text className="text-xl mb-3"></Text>
      <Image
        source={require('@/assets/images/Buzz_Photo.jpg')}
        className="w-48 h-48 rounded-full"
      />

        <CustomText variant='title' value="Andrés Campoverde"></CustomText>
        <CustomText variant='subtitle' value="Brawl Stars' Professional Player"></CustomText>
        <CustomText variant='subtitle' value="Informático"></CustomText>

        <View className="flex-row gap-4 mt-3">
            <IconButton
            icon={<Ionicons name="logo-instagram" size={24} color="#c13584" />}
            onPress={() => avisarAlerta("https://www.instagram.com/ximench_bs")}
            />
            <IconButton
            icon={<Ionicons name="logo-tiktok" size={24} color="black" />}
            onPress={() => avisarAlerta("https://www.tiktok.com/@ximench_bstars")}
            />
            <IconButton
            icon={<Ionicons name="logo-youtube" size={24} color="red" />}
            onPress={() => avisarAlerta("http://www.youtube.com/@Ximenchbs")}
            />
        </View>
    </View>
  );
};

const avisarAlerta = (url: string) => {
  Linking.openURL(url);
};

export default ProfileDetails;
