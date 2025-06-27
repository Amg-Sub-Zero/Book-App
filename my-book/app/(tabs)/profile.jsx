import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import CircularBackButton from "../components/CircularBackButton";
import { useRouter } from "expo-router";

const ProfileHeader = () => (
  <View>
    <Text></Text>
  </View>
);

export default function Profile() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ alignItems: "center", padding: 16 }}>
        <Text style={{ fontSize: 17, fontWeight: 10 }}>Profile</Text>
      </View>
      <View>
        <CircularBackButton
          onPress={() => router.back()}
          style={{ position: "absolute", top: 40, left: 20 }}
        />
      </View>
    </SafeAreaView>
  );
}
