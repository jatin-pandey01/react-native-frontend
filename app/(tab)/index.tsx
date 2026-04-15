import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import VehicleCard from "../../component/VehicleCard";

const Home = () => {
  const [vehicles, setVehicles] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://vehicle-management-1-vz7s.onrender.com/vehicles")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        return setVehicles(json);
      })
      .catch((error) => console.log(`Error :: ${error}`));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </ScrollView>

      {/* Floating Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => console.log("Add Vehicle")}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  fab: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#007AFF",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",

    // Shadow (iOS)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,

    // Elevation (Android)
    elevation: 6,
  },

  fabText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },
});

export default Home;
