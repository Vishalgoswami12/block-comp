import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { MaterialIcons, MaterialCommunityIcons, FontAwesome6 } from '@expo/vector-icons';

const profileItems = [
  {
    icon: <MaterialCommunityIcons name="book-open-page-variant-outline" size={24} color="black" />,
    title: "My Courses"
  },
  {
    icon: <FontAwesome6 name="bookmark" size={20} color="black" />,
    title: "My Bookmarks"
  },
  {
    icon: <MaterialIcons name="analytics" size={24} color="black" />,
    title: "Analytics"
  },
  {
    icon: <MaterialCommunityIcons name="shopping-outline" size={24} color="black" />,
    title: "My Orders"
  },
  {
    icon: <MaterialIcons name="display-settings" size={24} color="black" />,
    title: "Preferences"
  },
  {
    icon: <MaterialIcons name="support-agent" size={24} color="black" />,
    title: "Help and Support"
  },
  {
    icon: <FontAwesome6 name="circle-exclamation" size={24} color="black" />,
    title: "About Us"
  },
  {
    icon: <MaterialIcons style={{ color: "#FC5555", marginTop: 3 }} name="login" size={24} color="black" />,
    title: "Log out"
  }
];

const ProfileItem = ({ icon, title }) => {
    const textColor = title === "Log out" ? { color: "#FC5555" } : null;
  
    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemContent}>
          {icon}
          <Text style={[styles.itemText, textColor]}>{title}</Text>
        </View>
        <MaterialIcons name="arrow-forward-ios" size={18} color="black" />
      </View>
    );
  };
  

const PersonalProfile = () => {
  return (
    <View style={styles.container}>
         <View style={{width:"100%", height:95,backgroundColor:"#D9D9D9"}}>
        
        </View>
        <View style={styles.img}>
       </View>
      <View style={{flexDirection:"row", justifyContent:"space-between",marginTop:10}}> 
        <View style={{marginLeft:30}}>
        <Text variant="titleMedium">Karthavya</Text>
        <Text variant="bodySmall">9876543210</Text>
        </View>
       
        <View style={{flexDirection:"row", marginTop:4}}>
            <Text style={{color:"#008FFF", marginRight:8}} variant="labelMedium">Edit</Text>
            <MaterialIcons name="edit" size={16} color="#008FFF" />
        </View>
      </View>
      {profileItems.map((item, index) => (
        <ProfileItem key={index} icon={item.icon} title={item.title} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  img:{
    width:80,
    height:80,
    backgroundColor:"#E2F1FF",
    borderRadius:50,
    marginTop:"-10%",
    marginLeft:"8%"
},
  profileInfo: {
    marginLeft: 30,
  },
  editButton: {
    flexDirection: "row",
    marginTop: 4,
  },
  editButtonText: {
    color: "#008FFF",
    marginRight: 8,
  },
  itemContainer: {
    marginTop: 30,
    width: "100%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#E2F1FF",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemText: {
    marginLeft: 15,
    fontSize: 16,
  },
});

export default PersonalProfile;
