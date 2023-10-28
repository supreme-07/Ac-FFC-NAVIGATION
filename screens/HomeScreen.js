import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import axios from "axios";

const HomeScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your API
    axios
      .get("https://dummy.restapiexample.com/api/v1/employees")
      .then((response) => {
        if (response.status === 200) {
          setData(response.data.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(data);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to My App</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.employee_name} {item.employee_age}
          </Text>
        )}
      />
      <Button title="Refresh Data" onPress={() => fetchData()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  item: {
    fontSize: 18,
    marginVertical: 10,
    color: "#666",
  },
});

export default HomeScreen;
