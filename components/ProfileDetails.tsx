import CustomText from '@/components/ui/CustomText';
import IconButton from '@/components/ui/IconButton';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Alert, Image, Text, View } from 'react-native';

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

        <View className="flex-row gap-4">
            <IconButton
            icon={<Ionicons name="logo-instagram" size={24} color="#c13584" />}
            onPress={() => avisarAlerta("Instagram")}
            />
            <IconButton
            icon={<Ionicons name="logo-x" size={24} color="black" />}
            onPress={() => avisarAlerta("X")}
            />
            <IconButton
            icon={<Ionicons name="logo-facebook" size={24} color="blue" />}
            onPress={() => avisarAlerta("Facebook")}
            />
            <IconButton
            icon={<Ionicons name="logo-steam" size={24} color="#2a475e" />}
            onPress={() => avisarAlerta("Steam")}
            />
        </View>
    </View>
  );
};

const avisarAlerta = (mensaje: string) => {
  Alert.alert(mensaje);
};

export default ProfileDetails;
