import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useCallback } from "react";
import { Ionicons } from "@expo/vector-icons";
import CircularBackButton from "../components/CircularBackButton";
import { useRouter } from "expo-router";

const user = {
  name: "Jobless Billionaire",
  profile:
    "https://plus.unsplash.com/premium_photo-1665663927708-e3287b105c44?fm=jpg&q=60&w=3000",
};

const ProfileHeader = () => (
  <View
    style={{
      padding: 15,
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <View style={{ alignItems: "center" }}>
      <Image
        source={{ uri: user.profile }}
        style={{ width: 100, height: 100, borderRadius: 50, marginTop: 20 }}
      />
      <View>
        <Text style={{ fontSize: 20, fontWeight: 10, marginTop: 12 }}>
          {user.name}
        </Text>
      </View>
    </View>
  </View>
);

export default function Profile() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          alignItems: "center",
          padding: 16,
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontSize: 19, fontWeight: 10 }}>Profile</Text>
        </View>
        <View style={{ position: "absolute", left: 10, top: 10 }}>
          <Text>
            <CircularBackButton
              onPress={() => router.back()}
              style={{ position: "absolute", top: 40, left: 20 }}
            />
          </Text>
        </View>
        <ProfileHeader />
      </View>
    </SafeAreaView>
  );
}
