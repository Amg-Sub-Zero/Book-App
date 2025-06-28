import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
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

const EditProfile = () => (
  <View>
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 16,
        marginTop: 20,
      }}
    >
      <Ionicons name="person-outline" size={20} color="#333" />
      <Text style={{ marginLeft: 12, fontSize: 16, fontWeight: "500" }}>
        Edit Profile
      </Text>
      <Ionicons
        name="chevron-forward"
        size={20}
        color="#333"
        style={{ marginLeft: 220 }}
      />
    </TouchableOpacity>

    <View
      style={{
        height: 1,
        backgroundColor: "#e0e0e0",
        marginHorizontal: 16,
        marginTop: 20,
      }}
    />

    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 16,
        marginTop: 20,
      }}
    >
      <Ionicons name="radio-outline" size={20} color="#333" />
      <Text style={{ marginLeft: 12, fontSize: 16, fontWeight: "500" }}>
        My Adds
      </Text>
      <Ionicons
        name="chevron-forward"
        size={20}
        color="#333"
        style={{ marginLeft: 235 }}
      />
    </TouchableOpacity>

    <View
      style={{
        height: 1,
        backgroundColor: "#e0e0e0",
        marginHorizontal: 16,
        marginTop: 20,
      }}
    />

    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 16,
        marginTop: 20,
      }}
    >
      <Ionicons name="settings-outline" size={20} color="#333" />
      <Text style={{ marginLeft: 12, fontSize: 16, fontWeight: "500" }}>
        Settings
      </Text>
      <Ionicons
        name="chevron-forward"
        size={20}
        color="#333"
        style={{ marginLeft: 235 }}
      />
    </TouchableOpacity>

    <View
      style={{
        height: 1,
        backgroundColor: "#e0e0e0",
        marginHorizontal: 16,
        marginTop: 20,
      }}
    />

    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 16,
        marginTop: 20,
      }}
    >
      <Ionicons name="diamond-outline" size={20} color="#333" />
      <Text style={{ marginLeft: 12, fontSize: 16, fontWeight: "500" }}>
        Go Premium
      </Text>
      <Ionicons
        name="chevron-forward"
        size={20}
        color="#333"
        style={{ marginLeft: 210 }}
      />
    </TouchableOpacity>

    <View
      style={{
        height: 1,
        backgroundColor: "#e0e0e0",
        marginHorizontal: 16,
        marginTop: 20,
      }}
    />

    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 16,
        marginTop: 20,
      }}
    >
      <Ionicons name="log-out-outline" size={20} color="#ff4444" />
      <Text
        style={{
          marginLeft: 12,
          fontSize: 16,
          fontWeight: "500",
          color: "#ff4444",
        }}
      >
        Log Out
      </Text>
      <Ionicons
        name="chevron-forward"
        size={20}
        color="#ff4444"
        style={{ marginLeft: 235 }}
      />
    </TouchableOpacity>

    <View
      style={{
        height: 1,
        backgroundColor: "#e0e0e0",
        marginHorizontal: 16,
        marginTop: 20,
      }}
    />
  </View>
);

export default function Profile() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <FlatList
        contentContainerStyle={{ paddingBottom: 24 }}
        ListHeaderComponent={
          <>
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
              <EditProfile />
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
}
