import React, { ReactNode } from 'react';
import { Alert, Pressable } from 'react-native';
import Iconbutton from '@/components/IconButton';


interface IconButtonProps{
    icon: ReactNode;
    onPress: () => void;
}

const IconButton = ({icon, onPress}: IconButtonProps) => {
  return (
    <Pressable onPress={onPress}>
         {icon}
    </Pressable>
  )
}
export default IconButton