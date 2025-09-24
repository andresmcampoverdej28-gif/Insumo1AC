import React, { ReactNode } from 'react';
import { Pressable } from 'react-native';


interface IconButtonProps{
    icon: ReactNode;
    onPress: () => void;
}

const IconButton = ({icon, onPress}: IconButtonProps) => {
  return (
    <Pressable onPress={onPress} className='rounded-lg p-2 bg-gray-200 shadow-lg shadow-black'>
         {icon}
    </Pressable>
  )
}
export default IconButton