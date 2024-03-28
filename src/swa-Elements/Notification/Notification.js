import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import ExamNotificationCard from "../../swa-blocks/Card/ExamNotificationCard";
import SwaCard from "../../swa-components/Card/swaCard";
import { FontAwesome6,MaterialIcons } from '@expo/vector-icons';

function Notification() {
    const [showAllNotifications, setShowAllNotifications] = useState(true);

    return (
        <View style={{ padding: 10 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 30 }}>
                <Text variant="titleMedium" onPress={() => setShowAllNotifications(true)}>All Notification</Text>
                <Text variant="titleMedium" onPress={() => setShowAllNotifications(false)}>Classes</Text>
            </View>
            <View style={styles.allnotification}>
                {showAllNotifications ? (
                    <>
                        <Text variant="titleSmall">Today</Text>
                        <View style={{ marginTop: 20 }}>
                            <ExamNotificationCard />
                        </View>
                        <Text style={{ marginTop: 20 }} variant="titleSmall">Earlier this week</Text>
                        <View style={{ marginTop: 20 }}>
                            <ExamNotificationCard />
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <SwaCard style={{ height: 96 }} backgroundColor="white">
                                <View style={styles.exam1}>
                                    <FontAwesome6 style={styles.icon} name="circle-play" size={24} color="#008FFF" />
                                </View>
                                <View style={styles.textstyle}>
                                    <Text variant="titleMedium">New Exam launched</Text>
                                    <Text style={styles.lngtxt}>A new practice test for Police is now available. Attempt it now and put your knowledge to test!</Text>
                                </View>
                            </SwaCard>
                            {/* <View style={{height:96,backgroundColor:"white"}}>

                            </View> */}
                        </View>
                        <Text style={{ marginTop: 20 }} variant="titleSmall">Last Week</Text>
                    </>
                ) : (
                        <View style={styles.classes}>
                           <Text variant="titleSmall">Today</Text>
                           <View style={{ marginTop: 15 }}>
                            <SwaCard style={{ height: 96 }} backgroundColor="#D9EDFF">
                                <View style={styles.exam}>
                                    <FontAwesome6 style={styles.icon} name="circle-play" size={24} color="#008FFF" />
                                </View>
                                <View style={styles.textstyle}>
                                    <Text variant="titleMedium">Video lecture to start in 5 mins</Text>
                                    <Text style={styles.lngtxt}>A new practice test for Police is now available. Attempt it now and put your knowledge to test!</Text>
                                </View>
                                <MaterialIcons  style={styles.circle} name="circle" size={12} color="#193DAD" />
                                <View 
                                style={styles.live}
                                >
                                    <Text style={{color:"white", marginLeft:7}} variant="bodySmall">Live</Text>
                                    <MaterialIcons style={{marginLeft:5, marginTop:3}} name="circle" size={10} color="#C30000" />
                                </View>
                            </SwaCard>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <SwaCard style={{ height: 96 }} backgroundColor="white">
                                <View style={styles.exam}>
                                    <FontAwesome6 style={styles.icon} name="circle-play" size={24} color="#008FFF" />
                                </View>
                                <View style={styles.textstyle}>
                                    <Text variant="titleMedium">New Video launched</Text>
                                    <Text style={styles.lngtxt}>A new practice test for Police is now available. Attempt it now and put your knowledge to test!</Text>
                                </View>
                            </SwaCard>
                        </View>
                        <Text style={{ marginTop: 20 }} variant="titleSmall">Earlier this week</Text>
                        <View style={{ marginTop: 15 }}>
                            <SwaCard style={{ height: 96 }} backgroundColor="#D9EDFF">
                                <View style={styles.exam}>
                                    <FontAwesome6 style={styles.icon} name="circle-play" size={24} color="#008FFF" />
                                </View>
                                <View style={styles.textstyle}>
                                    <Text variant="titleMedium">Video lecture to start in 5 mins</Text>
                                    <Text style={styles.lngtxt}>A new practice test for Police is now available. Attempt it now and put your knowledge to test!</Text>
                                </View>
                                <MaterialIcons  style={styles.circle} name="circle" size={12} color="#193DAD" />
                                <View 
                                style={styles.live}
                                >
                                    <Text style={{color:"white", marginLeft:7}} variant="bodySmall">Live</Text>
                                    <MaterialIcons style={{marginLeft:5, marginTop:3}} name="circle" size={10} color="#C30000" />
                                </View>
                            </SwaCard>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <SwaCard style={{ height: 96 }} backgroundColor="white">
                                <View style={styles.exam}>
                                    <FontAwesome6 style={styles.icon} name="circle-play" size={24} color="#008FFF" />
                                </View>
                                <View style={styles.textstyle}>
                                    <Text variant="titleMedium">Video lecture Started</Text>
                                    <Text style={styles.lngtxt}>A new practice test for Police is now available. Attempt it now and put your knowledge to test!</Text>
                                </View>
                               
                                <View 
                                style={styles.live}
                                >
                                    <Text style={{color:"white", marginLeft:7}} variant="bodySmall">Live</Text>
                                    <MaterialIcons style={{marginLeft:5, marginTop:3}} name="circle" size={10} color="#C30000" />
                                </View>
                            </SwaCard>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <SwaCard style={{ height: 96 }} backgroundColor="#D9EDFF">
                                <View style={styles.exam}>
                                    <FontAwesome6 style={styles.icon} name="circle-play" size={24} color="#008FFF" />
                                </View>
                                <View style={styles.textstyle}>
                                    <Text variant="titleMedium">Video lecture Started</Text>
                                    <Text style={styles.lngtxt}>A new practice test for Police is now available. Attempt it now and put your knowledge to test!</Text>
                                </View>
                                <MaterialIcons  style={styles.circle} name="circle" size={12} color="#193DAD" />
                                <View 
                                style={styles.live}
                                >
                                    <Text style={{color:"white", marginLeft:7}} variant="bodySmall">Live</Text>
                                    <MaterialIcons style={{marginLeft:5, marginTop:3}} name="circle" size={10} color="#C30000" />
                                </View>
                            </SwaCard>
                        </View>
                        <Text style={{ marginTop: 20 }} variant="titleSmall">Last Week</Text>
                           <View style={{ marginTop: 15 }}>
                            <SwaCard style={{ height: 96 }} backgroundColor="#D9EDFF">
                                <View style={styles.exam}>
                                    <FontAwesome6 style={styles.icon} name="circle-play" size={24} color="#008FFF" />
                                </View>
                                <View style={styles.textstyle}>
                                    <Text variant="titleMedium">Video lecture to start in 5 mins</Text>
                                    <Text style={styles.lngtxt}>A new practice test for Police is now available. Attempt it now and put your knowledge to test!</Text>
                                </View>
                                <MaterialIcons  style={styles.circle} name="circle" size={12} color="#193DAD" />
                                <View 
                                style={styles.live}
                                >
                                    <Text style={{color:"white", marginLeft:7}} variant="bodySmall">Live</Text>
                                    <MaterialIcons style={{marginLeft:5, marginTop:3}} name="circle" size={10} color="#C30000" />
                                </View>
                            </SwaCard>
                        </View>
                        </View>
                    )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    exam: {
        width: 44,
        height: 44,
        backgroundColor: "#E8E8E8",
        position:"absolute",
        top:10,
        left:8
    },
    exam1: {
        width: 44,
        height: 44,
        backgroundColor: "#E8E8E8",
        position:"absolute",
        top:10,
        left:8
    },
    icon: {
        marginTop: 10,
        marginLeft: 10
    },
    lngtxt: {
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 1,
        width: 250
    },
    textstyle: {
        position: "absolute",
        marginLeft: 59
    },
    circle:{
        position:"absolute",
        right:0,
        top:31
    },
    live:{
        width:50,
        height:16,
        backgroundColor:"#0D80F2",
        position:"absolute",
        right:0,
        borderRadius:10,
        flexDirection:"row"
    }
});

export default Notification;
