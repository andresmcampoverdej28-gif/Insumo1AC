import CustomText from '@/components/ui/CustomText';
import IconButton from '@/components/ui/IconButton';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Alert, View } from 'react-native';

const SkillDetails = () => {
  return (
    <View className='bg-zinc-700 w-screen h-screen rounded-[75] mt-10'>
        <View className='items-right mt-10 ml-10 mb-5'>
            <CustomText variant='microtitle' value='Skill'></CustomText>
        </View>
        
        <View className="flex-row gap-6 content-between justify-center">
            <IconButton
            icon={<Ionicons name="logo-javascript" size={48} color="gold" />}
            onPress={() => avisarAlerta("JavaScript")}
            />
            <IconButton
            icon={<Ionicons name="logo-python" size={48} color="blue" />}
            onPress={() => avisarAlerta("Python")}
            />
            <IconButton
            icon={<Ionicons name="logo-react" size={48} color="skyblue" />}
            onPress={() => avisarAlerta("React Native")}
            />
            <IconButton
            icon={<Ionicons name="logo-github" size={48} color="#2a475e" />}
            onPress={() => avisarAlerta("Github")}
            />
        </View>

        <View className='items-right mt-20 ml-10'>
            <CustomText variant='microtitle' value='Profession'></CustomText>
        </View>

        <View className='items-right underline mt-5 ml-10'>
          <CustomText variant='profession' value='React Native programmer.       '>
          </CustomText>
        </View>

        <View className="mt-20 ml-10">
          <CustomText variant="microtitle" value="Experience" />
          <View className="bg-zinc-600 mt-6 ml-20 pl-7 p-3 rounded-[20px]">
            <CustomText variant="experience" value="Gamer and Programmer" />
            <CustomText variant="DateExp" value="Sep 2023 - Present" />
          </View>
        </View>
    </View>

    
  );
};

const avisarAlerta = (mensaje: string) => {
  Alert.alert(mensaje);
};

export default SkillDetails;