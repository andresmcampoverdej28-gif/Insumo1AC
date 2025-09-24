import React from 'react';
import { Text } from 'react-native';

interface CustomTextProps{
    value: string;
    variant: "normal" | "subtitle" | "title" | "microtitle" | "profession";
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
        case "microtitle":
            return "text-gray-400 font-bold text-xl"
        case "profession":
            return "text-white-400 font-normal text-xl"
        default:
            return "text-black font-normal"
    }
}