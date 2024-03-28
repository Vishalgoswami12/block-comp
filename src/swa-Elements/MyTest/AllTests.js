import React, { useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import CardTest from "../../swa-blocks/Card/CardTest";
import BottomNavigationBar from "../../swa-blocks/BoottomNavigation/BottomNavigationBar";
import CardAttempt from "../../swa-blocks/Card/CardAttempt";
function AllTest() {
  const [showAllTest, setShowAllTest] = useState(true); // State to track whether to show all tests or attempted tests

  return (
    <View style={styles.container}>
      <View style={styles.headline}>
        <TouchableOpacity onPress={() => setShowAllTest(true)}>
          <Text style={[styles.head, showAllTest && styles.active]}>All Test</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowAllTest(false)}>
          <Text style={[styles.attempt, !showAllTest && styles.active]}>Attempted</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {showAllTest ? (
          [1, 2, 3, 4].map((item, index) => (
            <View key={index} style={[styles.cardContainer, index !== 0 && styles.secondCardMargin]}>
              <CardTest />
            </View>
          ))
        ) : (
          <ScrollView  contentContainerStyle={styles.scrollView2}>
          {[1, 2, 3, 4, ].map((item, index) => (
                 <View key={index} style={[styles.cardContainer, index === 1,2,3 && styles.secondCardMargin]}>
                    <CardAttempt/>
                     </View>
          ))}
          </ScrollView>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  head: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 50,
  },
  attempt: {
    fontSize: 16,
    fontWeight: "500",
    marginRight: 70,
  },
  headline: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  scrollView: {
    padding: 10,
    marginTop: 40,
  },
  cardContainer: {
    marginTop: 10,
  },
  secondCardMargin: {
    marginLeft: 5,
  },
  active: {
    color: "blue", // Change color for active tab
  },
  attemptedText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
});

export default AllTest;
