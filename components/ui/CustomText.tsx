import React from 'react';
import { Text } from 'react-native';

interface CustomTextProps{
    value: string;
    variant: "normal" | "subtitle" | "title" | "microtitle" | "profession" | "experience" | "DateExp";
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
            return "text-white font-normal text-2xl underline"
        case "experience":
            return "text-white"
        case "DateExp":
            return "text-gray-400"
        default:
            return "text-black font-normal"
    }
}