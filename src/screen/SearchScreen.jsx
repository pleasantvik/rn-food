import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SearchBar } from "../components/SearchBar";
import { useResults } from "../hooks/useResults";
import RestaurantList from "../components/RestaurantList";

export const SearchScreen = () => {
  const [term, setTerm] = useState("");

  const { results, searchApi, errorMessage } = useResults();

  const filterResultByPrice = (price) => {
    return results.filter((result) => result.price === price);
  };
  const onTermChange = (newTerm) => setTerm(newTerm);

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={onTermChange}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage && <Text>{errorMessage}</Text>}
      <Text>We have found {results?.length} results</Text>
      <ScrollView>
        <RestaurantList
          title="Cost Effective"
          results={filterResultByPrice("$")}
        />
        <RestaurantList title="Bit Price" results={filterResultByPrice("$$")} />
        <RestaurantList
          title="Big Spender"
          results={filterResultByPrice("$$$")}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});
