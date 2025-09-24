import React from 'react';
import { Text } from 'react-native';

interface CustomTextProps{
    value: string;
    variant: "normal" | "subtitle" | "title";
}

const CustomText = ({value, variant}:CustomTextProps) => {
  return (
    <Text className={selectVariant(variant)}>
        {value}
    </Text>
  )
}

export default CustomText

function selectVariant(variant:string):string{
    switch(variant){
        case "normal":
            return "text-black font-normal"
        case "subtitle":
            return "text-gray-400 font-normal text-xl"
        case "title":
            return "text-black font-bold text-2xl"
        default:
            return "text-black font-normal"
    }
}