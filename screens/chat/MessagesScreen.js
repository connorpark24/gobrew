import React, { useState, useEffect } from "react";
import { View, Text, Pressable, Image, ScrollView } from "react-native";
import { userData } from "../../constants/data.js";
import { STYLES } from "../../constants/theme.js";
import { useProfileStore } from "../../store/store.js";
import { supabase } from "../../utils/supabase.js";

const MessagesScreen = ({ navigation }) => {
  const { session } = useProfileStore();
  const [incoming, setIncoming] = useState([]);
  const [outgoing, setOutgoing] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOutgoingRequests() {
      const { data: outgoingData, error } = await supabase
        .from("connects")
        .select(`advisor_id, requester_id`)
        .eq("requester_id", session?.user.id);
      if (error) {
        console.error("Error fetching user's club memberships:", error);
      } else {
        const outgoingIds = outgoingData.map((request) => request.advisor_id);

        const { data: outgoingUsers, error: userError } = await supabase
          .from("profiles")
          .select()
          .in("id", outgoingIds);

        if (userError) {
          console.error("Error fetching user's clubs:", userError);
        } else {
          setOutgoing(outgoingUsers);
        }

        setLoading(false);
      }
    }

    fetchOutgoingRequests();

    async function fetchIncomingRequests() {
      const { data: incomingData, error } = await supabase
        .from("connects")
        .select(`advisor_id, requester_id`)
        .eq("advisor_id", session?.user.id);
      if (error) {
        console.error("Error fetching user's club memberships:", error);
      } else {
        const incomingIds = incomingData.map((request) => request.advisor_id);

        const { data: incomingUsers, error: userError } = await supabase
          .from("profiles")
          .select()
          .in("id", incomingIds);

        if (userError) {
          console.error("Error fetching user's clubs:", userError);
        } else {
          setIncoming(incomingUsers);
        }

        setLoading(false);
      }
    }

    fetchIncomingRequests();
  }, []);

  return (
    <ScrollView style={STYLES.mainContainer}>
      <Text style={[STYLES.header, { marginBottom: 8 }]}>Messages</Text>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          flex: 1,
        }}
      >
        <View
          style={{
            alignItems: "center",
            width: "110%",
          }}
        >
          {outgoing.map((user, index) => (
            <Pressable
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: "10px",
                borderTopColor: "#dfdfdf",
                borderTopWidth: 1,
                width: "100%",
                height: 84,
              }}
              onPress={() => navigation.navigate("Chat Screen")}
            >
              <Image
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  marginHorizontal: 20,
                }}
                source={user.profile_picture}
              />
              <View style={{ display: "flex", flexDirection: "column" }}>
                <Text style={{ fontSize: 18, fontWeight: 300 }}>
                  {user.first_name} {user.last_name}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 300,
                    color: "#666666",
                    marginTop: 4,
                  }}
                >
                  Most recent message ...
                </Text>
              </View>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default MessagesScreen;
