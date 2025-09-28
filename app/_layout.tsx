import IconButton from "@/components/ui/IconButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTransparent: true, // fondo transparente
        headerTitle: "",         // sin título
        headerLeft: () => (
          <IconButton
            icon={<Ionicons name="chevron-back-outline" size={24} color="black" />}
            onPress={() => alert("Volver")}
          />
        ),
        headerRight: () => (
          <View className="flex-row gap-4">
            <IconButton
              icon={<Ionicons name="ellipsis-vertical" size={24} color="black" />}
              onPress={() => alert("Más opciones")}
            />
          </View>
        ),
      }}
    />
  );
}
