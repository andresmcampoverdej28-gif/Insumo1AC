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
      <Text className="text-2xl font-bold">Andres Campoverde</Text>
      <Text className="text-xl text-gray-400 font-bold">Brawl Stars' Pro Player</Text>
      <View className="flex-row mt-4 space-x-4">
        <IconButton
          icon={<Ionicons name="logo-instagram" size={24} color="black" />}
          onPress={() => avisarAlerta("Instagram")}
        />
        <IconButton
          icon={<Ionicons name="logo-x" size={24} color="black" />}
          onPress={() => avisarAlerta("X")}
        />
        <IconButton
          icon={<Ionicons name="logo-facebook" size={24} color="black" />}
          onPress={() => avisarAlerta("Facebook")}
        />
        <IconButton
          icon={<Ionicons name="logo-steam" size={24} color="black" />}
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
