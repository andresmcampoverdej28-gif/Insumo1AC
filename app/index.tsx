import IconButton from "@/components/IconButton";
import ProfileDetails from "@/components/ProfileDetails";
import "@/global.css";
import { View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'; 

export default function Index() {
  return (
    <View className="flex-col items-center bg-white w-screen h-screen p-4">
      <ProfileDetails/>
    </View>
  );
}
