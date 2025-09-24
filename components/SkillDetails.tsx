import CustomText from '@/components/ui/CustomText';
import IconButton from '@/components/ui/IconButton';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Alert, View } from 'react-native';

const SkillDetails = () => {
  return (
    <View className='bg-zinc-700 w-screen h-screen rounded-[75]'>
        <View className='items-right m-10'>
            <CustomText variant='microtitle' value='Skill'></CustomText>
        </View>
        
        <View className="flex-row gap-4 content-between my-[20] justify-center">
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

        <View className='items-right m-10'>
            <CustomText variant='microtitle' value='Profession'></CustomText>
            <CustomText variant='profession' value='Programador'></CustomText>
        </View>

        <View className='items-right m-10'>
            <CustomText variant='microtitle' value='Experience'></CustomText>
            <CustomText variant='profession' value='Programador'></CustomText>
        </View>
    </View>

    
  );
};

const avisarAlerta = (mensaje: string) => {
  Alert.alert(mensaje);
};

export default SkillDetails;