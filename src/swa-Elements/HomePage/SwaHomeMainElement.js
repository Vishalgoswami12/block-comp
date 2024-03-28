import React from "react";
import { View,StyleSheet,ScrollView,TouchableOpacity } from "react-native";
import CardCourse from "../../swa-blocks/Card/CardCourse";
import SwaCard from "../../swa-components/Card/swaCard";
import { Text } from "react-native-paper";
import IASMCQTest from "../../swa-blocks/Card/IASMCQTest";
import ExamCard from "../../swa-blocks/Card/ExamCard";
import { FontAwesome6 } from '@expo/vector-icons';
import CardThisWeek from "../../swa-blocks/Card/CardWeekSpecial";
import CardTestimonial from "../../swa-blocks/Card/CardTestimonial";
function SwaHomeMainElement(){
    return(
        <View>
         <View style={{ }}>
        <View style={{backgroundColor:"#008FFF", height:490}}>
        <Text style={{width:344, color:"#193DAD", position:"absolute", bottom:20, padding:5}} variant="headlineSmall">Your Success Awaits. 
<Text style={{color:"#008FFF"}}>Join Swa:Adhyayan</Text> and Begin Writing Your Story.</Text>
        </View>
    </View>
    <View style={{}}>
         <Text style={styles.text}>Popular Video Courses</Text>
         <ScrollView horizontal={true} contentContainerStyle={styles.scrollView}>
      {[1, 2, 3, 4, 5].map((item, index) => (
        <View key={index} style={[styles.cardContainer, index === 1 && styles.secondCardMargin]}>
          <CardCourse style={styles.card} />
        </View>
      ))}
    </ScrollView>
    </View>
    <View>
        <View style={styles.textrow}>
        <Text style={styles.text}>All Video Courses</Text>
        <TouchableOpacity>
          <Text style={styles.seetext}>See All</Text>
        </TouchableOpacity>
        </View>
       
         <ScrollView horizontal={true} contentContainerStyle={styles.scrollView}>
      {[1, 2, 3, 4, 5].map((item, index) => (
        <View key={index} style={[styles.cardContainer, index === 1 && styles.secondCardMargin]}>
          <CardCourse />
        </View>
      ))}
    </ScrollView>
    </View>
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingRight: 22,
        }}
      >
        <Text style={styles.text}>All Test Series</Text>
        <Text style={{ marginTop: 22, color: "#0D80F2" }}>See All</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={{flexDirection:"row",flexWrap:"wrap",gap:15}}>
        {[1, 2,].map((item, index) => (
          <View key={index} style={styles.cardContainer}>
            <IASMCQTest />
          </View>
        ))}
        </View>
        <View style={{flexDirection:"row",flexWrap:"wrap",gap:15, marginTop:10}}>
        {[1, 2,].map((item, index) => (
          <View key={index} style={styles.cardContainer}>
            <IASMCQTest />
          </View>
        ))}
        </View>
      </ScrollView>
    </View>
    <View>
       <View style={styles.subcontainer}>
       <Text style={styles.text}>All Exam Series</Text>
       <View style={styles.rollcont}>
        <Text style={styles.enroll}> Enroll Now</Text>
        <FontAwesome6 style={styles.icon} name="angle-right" size={12} color="#0D80F2" />
       </View>
       </View>
              
               <ScrollView horizontal={true} contentContainerStyle={styles.scrollView}>
        {[1, 2, 3, 4, 5].map((item, index) => (
             <View key={index} style={[styles.cardContainer, index === 1 && styles.secondCardMargin]}>
                <ExamCard/>
                 </View>
      ))}
    </ScrollView>
    </View>
    <View style={{padding:15}}>
    <CardThisWeek/>
   </View>
   <View>
          <Text style={styles.text}>Testimonials</Text>
          <ScrollView horizontal={true} style={styles.scrollView}>
          <View style={{flexDirection:"row",gap:10}}>
        {[1, 2,3,4].map((item, index) => (
          <View key={index} style={styles.cardContainer}>
            <CardTestimonial />
          </View>
        ))}
        </View>
        </ScrollView>
    </View>
        </View>
    )
}
const styles = StyleSheet.create({
    text:{
        fontSize:24,
        fontWeight:500,
        marginLeft:15
    },
  scrollView: {
    flexDirection: "row",
    paddingLeft:8
  },
  card:{
    marginLeft:20
  },
  text:{
    fontSize:24,
    marginTop:20,
    fontWeight:500,
    marginLeft:15
},
scrollView: {
flexDirection: "row",
paddingLeft:8
},
textrow:{
flexDirection:"row",
justifyContent:"space-between"
},
seetext:{
color:"#0D80F2",
marginTop:25,
marginRight:15
},
text: {
    fontSize: 24,
    marginTop: 20,
    fontWeight: "500",
    marginLeft: 15,
  },
  rowContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  text:{
    fontSize:24,
    marginTop:20,
    fontWeight:500,
    marginLeft:15
},
  subcontainer:{
    flexDirection:"row",
    justifyContent:"space-between"

  },
  enroll:{
    fontSize:12,
    fontWeight:500,
    color:"#0D80F2",
    right:8
  },
  rollcont:{
    flexDirection:"row",
    top:25
  },
  icon:{
    top:2,
    marginRight:22
  }
})
export default SwaHomeMainElement;