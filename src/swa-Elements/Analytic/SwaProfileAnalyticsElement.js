import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
// import { 
//     SwaAppbarContainerBlock, 
    
//     SwaIcon, SwaSurface } from "@adhyayan-app/swa-components";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import SwaIcon from "../../swa-components/Icon/SwaIcon";
import SwaSurface from "../../swa-components/Surface/SwaSurface";
import SwaAppbarContainerBlock from "./SwaAppBarContainer";

function SwaProfileAnalyticsElement({title="",onPressBack=()=>{}, theme }) {
  return (
    <SwaAppbarContainerBlock
    title={title}
      backAction={{
        enabled: true
      }}
      onPress={onPressBack}>
    <View>
      <Text variant="titleMedium">Time Spent Today</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 30 }}>
        <SwaSurface style={styles.surface} elevation={4}>
          <Text style={{ textAlign: "center" }}>5 hrs</Text>
        </SwaSurface>
        <SwaSurface style={styles.surface} elevation={4}>
          <Text style={{ textAlign: "center" }}>32 mins</Text>
        </SwaSurface>
        <SwaSurface style={styles.surface} elevation={4}>
          <Text style={{ textAlign: "center" }}>20 sec</Text>
        </SwaSurface>
      </View>
      <Text style={{ marginTop: 20 }} variant="titleMedium">
        Daily learnings
      </Text>
      <View style={styles.graph}></View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 30 }}>
        <SwaSurface style={styles.date}>
          <Text style={{ fontSize: 10, fontWeight: 400, textAlign: "center" }}>Jan '24'</Text>
        </SwaSurface>
        <SwaSurface style={styles.dateback}>
          <Text style={{ fontSize: 10, fontWeight: 400, textAlign: "center" }}>Dec '23'</Text>
        </SwaSurface>
        <SwaSurface style={styles.dateback}>
          <Text style={{ fontSize: 10, fontWeight: 400, textAlign: "center" }}>Dec '23'</Text>
        </SwaSurface>
        <SwaSurface style={styles.dateback}>
          <Text style={{ fontSize: 10, fontWeight: 400, textAlign: "center" }}>Dec '23'</Text>
        </SwaSurface>
        <SwaSurface style={styles.dateback}>
          <Text style={{ fontSize: 10, fontWeight: 400, textAlign: "center" }}>Dec '23'</Text>
        </SwaSurface>
        <SwaSurface style={styles.dateback}>
          <Text style={{ fontSize: 10, fontWeight: 400, textAlign: "center" }}>All</Text>
        </SwaSurface>
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: 40
        }}>
        <View style={styles.card}>
          <Text style={{ padding: 10, paddingLeft: 16 }} variant="labelSmall">
            Total Video Streamed
          </Text>
          <Text style={{ marginLeft: 16 }} variant="labelMedium">
            1124 HRS
          </Text>
          <MaterialCommunityIcons
            style={{ marginLeft: 130 }}
            name="television-play"
            size={24}
            color="#008FFF"
          />
        </View>
        <View style={styles.card}>
          <Text style={{ padding: 10, paddingLeft: 16 }} variant="labelSmall">
            Total Tests Attempt
          </Text>
          <Text style={{ marginLeft: 16 }} variant="labelMedium">
            1124 HRS
          </Text>
          <MaterialCommunityIcons
            style={{ marginLeft: 130 }}
            name="television-play"
            size={24}
            color="#008FFF"
          />
        </View>
        <View style={styles.card1}>
          <Text style={{ padding: 10, paddingLeft: 16 }} variant="labelSmall">
            Total Tests Attempt
          </Text>
          <Text style={{ marginLeft: 16 }} variant="labelMedium">
            1124 HRS
          </Text>
          <MaterialCommunityIcons
            style={{ marginLeft: 130 }}
            name="pencil-box-outline"
            size={24}
            color="#008FFF"
          />
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 30 }}>
        <Text variant="titleMedium">Daily Study Tracker</Text>
        <Text style={{ color: "#193DAD" }} variant="titleSmall">
          Sell All
        </Text>
      </View>
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 40 }}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <View style={styles.iconbox}>
              <MaterialCommunityIcons
                style={{ padding: 3 }}
                name="calendar-blank-outline"
                size={24}
                color="black"
              />
            </View>
            <View style={{}}>
              <Text variant="titleSmall">25th Jan ‘23</Text>
              <Text variant="bodySmall">14hr 02mins</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", gap:10, alignItems: "center" }}>
            <View style={styles.verline}></View>
            <SwaIcon source="tune" color="black" size={22} />
          </View>
        </View>
        <View
          style={{
            borderBottomColor: "#BBBBBB",
            borderBottomWidth: 1,
            marginVertical: 10,
            marginTop: 30
          }}></View>
      </View>
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 40 }}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <View style={styles.iconbox}>
              <MaterialCommunityIcons
                style={{ padding: 3 }}
                name="calendar-blank-outline"
                size={24}
                color="black"
              />
            </View>
            <View style={{}}>
              <Text variant="titleSmall">25th Jan ‘23</Text>
              <Text variant="bodySmall">14hr 02mins</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", gap:10, alignItems: "center" }}>
            <View style={styles.verline}></View>
            <SwaIcon source="tune" color="black" size={22} />
          </View>
        </View>
        <View
          style={{
            borderBottomColor: "#BBBBBB",
            borderBottomWidth: 1,
            marginVertical: 10,
            marginTop: 30
          }}></View>
      </View>
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 40 }}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <View style={styles.iconbox}>
              <MaterialCommunityIcons
                style={{ padding: 3 }}
                name="calendar-blank-outline"
                size={24}
                color="black"
              />
            </View>
            <View style={{}}>
              <Text variant="titleSmall">25th Jan ‘23</Text>
              <Text variant="bodySmall">14hr 02mins</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", gap:10, alignItems: "center" }}>
            <View style={styles.verline}></View>
            <SwaIcon source="tune" color="black" size={22} />
          </View>
        </View>
        <View
          style={{
            borderBottomColor: "#BBBBBB",
            borderBottomWidth: 1,
            marginVertical: 10,
            marginTop: 30
          }}></View>
      </View>
      <Text style={{ marginTop: 30 }} variant="titleMedium">
        Streak Calendar
      </Text>
      <View style={styles.cal}></View>
      <View style={{ marginTop: 20, flexDirection: "row", justifyContent: "space-between" }}>
        <View style={styles.calculation}>
          <Text variant="labelSmall">Current Streak length : 8 days</Text>
        </View>
        <View style={styles.calculationavg}>
          <Text variant="labelSmall">Avg Streak Span : 24 days</Text>
        </View>
      </View>
      <Text style={{ marginTop: 30 }} variant="titleMedium">
        Test/Exam Performances
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 10,
          marginTop: 30
        }}>
        <View style={styles.card}>
          <Text style={{ padding: 10, paddingLeft: 16 }} variant="labelSmall">
            OVERALL
          </Text>
          <Text style={{ marginLeft: 16 }} variant="labelMedium">
            8549 /12000
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={{ padding: 10, paddingLeft: 16 }} variant="labelSmall">
            MATHS
          </Text>
          <Text style={{ marginLeft: 16 }} variant="labelMedium">
            8549 /12000
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={{ padding: 10, paddingLeft: 16 }} variant="labelSmall">
            CHEMISTRY
          </Text>
          <Text style={{ marginLeft: 16 }} variant="labelMedium">
            8549 /12000
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={{ padding: 10, paddingLeft: 16 }} variant="labelSmall">
            PHYSICS
          </Text>
          <Text style={{ marginLeft: 16 }} variant="labelMedium">
            8549 /12000
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={{ padding: 10, paddingLeft: 16 }} variant="labelSmall">
            BIOLOGY
          </Text>
          <Text style={{ marginLeft: 16 }} variant="labelMedium">
            8549 /12000
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={{ padding: 10, paddingLeft: 16 }} variant="labelSmall">
            BIOLOGY
          </Text>
          <Text style={{ marginLeft: 16 }} variant="labelMedium">
            8549 /12000
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 40 }}>
        <Text variant="titleSmall">JEE</Text>
        <Text variant="titleSmall">Class XII - CBSE</Text>
        <Text variant="titleSmall">NEET</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 30 }}>
        <Text variant="titleSmall">
          Avg Score:<Text style={{ color: "#175CCC" }}>150</Text>/300
        </Text>
        <Text>
          Percentile:<Text style={{ color: "#175CCC" }}>86%</Text>
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 40 }}>
        <View style={styles.card2}>
          <Text style={{ padding: 10, paddingLeft: 16 }} variant="labelSmall">
            MATHS
          </Text>
          <Text style={{ marginLeft: 16, paddingBottom: 10 }} variant="labelMedium">
            76/100
          </Text>
        </View>
        <View style={styles.card2}>
          <Text style={{ padding: 10, paddingLeft: 16 }} variant="labelSmall">
            Physics
          </Text>
          <Text style={{ marginLeft: 16 }} variant="labelMedium">
            76/100
          </Text>
        </View>
        <View style={styles.card2}>
          <Text style={{ padding: 10, paddingLeft: 16 }} variant="labelSmall">
            Chemistry
          </Text>
          <Text style={{ marginLeft: 16 }} variant="labelMedium">
            76/100
          </Text>
        </View>
      </View>
      <Text style={{ marginTop: 20 }} variant="labelMedium">
        Chapter wise Performance
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
        <Text variant="labelMedium">ElectroMagnetism</Text>
        <Text variant="bodySmall" style={{ color: "#000000" }}>
          2 /<Text>5 Qns</Text>{" "}
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
        <Text variant="labelMedium">ElectroMagnetism</Text>
        <Text variant="bodySmall" style={{ color: "#000000" }}>
          2 /<Text>5 Qns</Text>{" "}
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
        <Text variant="labelMedium">ElectroMagnetism</Text>
        <Text variant="bodySmall" style={{ color: "#000000" }}>
          2 /<Text>5 Qns</Text>{" "}
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
        <Text variant="labelMedium">ElectroMagnetism</Text>
        <Text variant="bodySmall" style={{ color: "#000000" }}>
          2 /<Text>5 Qns</Text>{" "}
        </Text>
      </View>
    </View>
    </SwaAppbarContainerBlock>
  );
}
const styles = StyleSheet.create({
  surface: {
    width: "22%",
    backgroundColor: "white",
    padding: 5,
    borderWidth: 1,
    borderColor: "#8CC6FF",
    shadowColor: "#8CC6FF",
    textAlign: "center",
    justifyContent: "center"
  },
  graph: {
    width: 372,
    height: 208,
    backgroundColor: "#175CCC",
    marginTop: 40
  },
  date: {
    width: 49,
    height: 24,
    padding: 3,
    borderRadius: 5,
    backgroundColor: "#146EDE"
  },
  dateback: {
    width: 49,
    height: 24,
    padding: 3,
    borderRadius: 5,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#146EDE"
  },
  card: {
    width: 158,
    borderWidth: 1,
    borderColor: "#BBBBBB",
    borderRadius: 10
  },
  card2: {
    width: 101,
    borderWidth: 1,
    borderColor: "#BBBBBB",
    borderRadius: 10
  },
  card1: {
    width: 158,
    borderWidth: 1,
    borderColor: "#BBBBBB",
    marginTop: 10
  },
  iconbox: {
    width: 32,
    height: 32,
    backgroundColor: "#8CC6FF",
    borderRadius: 5,
    marginTop: 5
  },
  verline: {
    width: 1,
    height: 30,
    backgroundColor: "#A6A6A6",
    marginTop: 9
  },
  cal: {
    width: 372,
    height: 256,
    backgroundColor: "#E2F1FF",
    borderRadius: 10,
    padding: 15,
    marginTop: 30
  },
  calculation: {
    width: 180,
    height: 45,
    backgroundColor: "#EDB663",
    borderRadius: 10,
    padding: 13,
    paddingLeft: 18
  },
  calculationavg: {
    width: 180,
    height: 45,
    backgroundColor: "#5AB0FF",
    borderRadius: 10,
    padding: 13,
    paddingLeft: 18
  }
});
export default SwaProfileAnalyticsElement;
