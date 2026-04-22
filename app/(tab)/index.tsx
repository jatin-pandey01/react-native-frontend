import React, { useEffect, useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import VehicleCard from "../../component/VehicleCard";

const Home = () => {
  const [vehicles, setVehicles] = useState<any[]>([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");

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

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://vehicle-management-1-vz7s.onrender.com/vehicles",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            type,
          }),
        },
      );

      const data = await response.json();

      // Update UI instantly
      setVehicles((prev) => [data, ...prev]);

      // Reset + close modal
      setName("");
      setType("");
      setModalVisible(false);
    } catch (error) {
      console.log("Submit Error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle._id} vehicle={vehicle} />
        ))}
      </ScrollView>

      {/* Floating Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>Add Vehicle</Text>

            <TextInput
              placeholder="Vehicle Name"
              value={name}
              onChangeText={setName}
              style={styles.input}
            />

            <TextInput
              placeholder="Vehicle Type"
              value={type}
              onChangeText={setType}
              style={styles.input}
            />

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
                <Text style={styles.btnText}>Submit</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.btnText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // or "center"
    marginTop: 10,
  },

  submitBtn: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
    alignItems: "center",
  },

  cancelBtn: {
    backgroundColor: "#ccc",
    padding: 12,
    borderRadius: 5,
    flex: 1,
    marginLeft: 5,
    alignItems: "center",
  },

  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Home;
