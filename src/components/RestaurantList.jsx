import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import RestaurantDetails from "./RestaurantDetails";

export default function RestaurantList({ title, results }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={results}
        keyExtractor={(result) => result.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <RestaurantDetails result={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    marginLeft: 15,
  },
  container: {
    marginBottom: 10,
  },
});
