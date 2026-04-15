import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Vehicle = {
  id: number;
  vehicleNumber: string;
  vehicleType: string;
  vehicleBrand: string;
  vehicleModel: string;
  vehicleYear: number;
  insuranceExpiryDate: string;
  registrationExpiryDate: string;
};

type Props = {
  vehicle: Vehicle;
};

const VehicleCard = ({ vehicle }: Props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{vehicle?.vehicleNumber}</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Type:</Text>
        <Text style={styles.value}>{vehicle?.vehicleType}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Brand:</Text>
        <Text style={styles.value}>{vehicle?.vehicleBrand}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Model:</Text>
        <Text style={styles.value}>{vehicle?.vehicleModel}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Year:</Text>
        <Text style={styles.value}>{vehicle?.vehicleYear}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Insurance Expiry:</Text>
        <Text style={styles.value}>{vehicle?.insuranceExpiryDate}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Registration Expiry:</Text>
        <Text style={styles.value}>{vehicle?.registrationExpiryDate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 12,

    // Shadow (iOS)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,

    // Elevation (Android)
    elevation: 4,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },

  label: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },

  value: {
    fontSize: 14,
    color: "#111",
    fontWeight: "600",
  },
});

export default VehicleCard;
