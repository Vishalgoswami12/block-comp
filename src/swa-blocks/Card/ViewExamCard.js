import React from "react";
import SwaCard from "../../swa-components/Card/swaCard";
import { View, StyleSheet, Image } from "react-native";
import SwaButton from "../../swa-components/Button/swaButton";
import { MaterialIcons } from "@expo/vector-icons";
import { Text } from "react-native-paper";
import SwaIcon from "../../swa-components/Icon/SwaIcon";
function ViewExamCard() {
  return (
    <View style={styles.container}>
      <SwaCard
        width={389}
        padding={30}
        height="auto"
        backgroundColor="#B9DCFF"
        borderRadius={10}
        title="Class XII CBSE Board Examination"
        titleStyle={styles.title}
        actions={
          <View style={styles.button}>
            <SwaButton
              title="View Exams"
              size="large"
              label="View Exams"
              labelColor="white"
              labelFontSize={22}
              margin={{ top: 10, left: 80 }}
              labelTopMargin={10}
              labelMargin={{ top: 120 }}
            />
          </View>
        }></SwaCard>
      <Image source={{ uri: "https://placehold.co/600x400.png" }} style={styles.image} />
      <View style={styles.subti}>
        <View>
          <MaterialIcons name="note-alt" size={24} color="black" />
          <Text style={styles.exam}>4 Exams</Text>
        </View>
        <View style={styles.studtext}>
          <SwaIcon
            source="students"
            //  color={MD3Colors.error50}
            size={20}
          />
          <Text style={styles.student}>1289 Students</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    position: "relative",
    justifyContent: "space-between"
  },
  exam: {
    bottom: 25,
    left: 30
  },
  studtext: {
    left: 170,
    bottom: 40
  },
  subti: {
    bottom: 190,
    left: 90
  },
  student: {
    bottom: 25,
    left: 20
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    left: 46,
    fontWeight: "690"
  },
  icon: {
    justifyContent: "space-around"
  },
  button: {
    marginTop: 50,
    marginLeft: 70,
    justifyContent: "center",
    left: 30
    // marginRight:90
  },
  image: {
    width: "23%",
    height: "30%",
    position: "absolute",
    top: 10
  },
  label: {}
});

export default ViewExamCard;
