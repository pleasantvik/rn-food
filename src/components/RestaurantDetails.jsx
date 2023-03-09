import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function RestaurantDetails({ result }) {
  const color = result.rating === 4.5 ? "green" : "red";
  return (
    <View style={styles.container}>
      <Image source={{ uri: result.image_url }} style={styles.image} />
      <Text style={styles.name}>{result.name}</Text>
      <Text
        style={{
          color: `${color}`,
        }}
      >
        {result.rating} Stars, {result.review_count}Reviews
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 12,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
