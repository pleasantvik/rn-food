import { View, Text } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SearchBar } from "../components/SearchBar";

export const SearchScreen = () => {
  const [term, setTerm] = useState("");

  const onTermChange = (newTerm) => setTerm(newTerm);
  const onTermSubmit = () => {
    console.log("term was submitted");
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={onTermChange}
        onTermSubmit={onTermSubmit}
      />
      <Text>Search Screen</Text>
      <Text>{term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
