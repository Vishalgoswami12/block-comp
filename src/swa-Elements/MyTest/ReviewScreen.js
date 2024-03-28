import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import SwaAppBar from "../../swa-components/Appbar/SwaAppbar";
import ScoreCard from "../../swa-blocks/Card/ScoreCard";
import SwaButton from "../../swa-components/Button/swaButton";
import themeObject from "../../Constants/Globaltyle";
import BottomNavigationBar from "../../swa-blocks/BoottomNavigation/BottomNavigationBar";
import { FontAwesome6,MaterialCommunityIcons } from '@expo/vector-icons';
import ElementStyle from "../../Constants/ElementStyle";
function ReviewScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <SwaAppBar
          elevated={true}
          style={styles.appBar}
          title="Review Result"
          titleStyle={styles.title}
        />
      </View>
      <View style={styles.score}>
        <ScoreCard />
      </View>
     <View style={styles.iconcard}>
      <View style={styles.revbook}>
        <View>
        <FontAwesome6 style={styles.bookicon} name="bookmark" size={20} color="black" />
        <Text style={styles.booktxt} variant="bodySmall">Review Bookmark</Text>
        </View>
    
      </View>
      <View style={styles.revbook}>
        <View>
        <MaterialCommunityIcons style={styles.bookicon}  name="note-multiple" size={20} color="black" />
        <Text style={styles.booktxt1} variant="bodySmall">Check Answer</Text>
        </View>
    
      </View>
      <View style={styles.revbook}>
        <View>
        <MaterialCommunityIcons style={styles.bookicon} name="reload" size={24} color="black" />
        <Text style={styles.booktxt} variant="bodySmall">Re-Attempt</Text>
        </View>
    
      </View>
     
     </View>
      <View style={styles.btnattempt}>
        <SwaButton mode="contained" borderRadius={10} theme={themeObject} size="medium">
          LeaderBoard
        </SwaButton>
      </View>
      <View style={styles.bar}>
        <BottomNavigationBar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create(ElementStyle.MY_TEST.REVIEW_SCREEN);

export default ReviewScreen;
