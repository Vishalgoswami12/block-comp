import React from "react";
import SwaCard from "../../swa-components/Card/swaCard";
import { View } from "react-native";
import SwaButton from "../../swa-components/Button/swaButton";
function TicketVideoCard() {
    return(
        <View>
            <SwaCard
            width={382}
            height={80}
            borderRadius={10}
            title="Ticket: Video Stream glitch"
            titleStyle={styles.title}
            actions={
                <View style={styles.button}>
                    <SwaButton
                size="small"
                label="Open"
                labelColor="white"
                />
                </View>
            }
            />
            <Text style={styles.date}>24 Jan 2024, 11:06AM</Text>
            <Text style={styles.ticket}>Ticket ID : 1234567</Text>
        </View>
    )
}

const styles = StyleSheet.create({
title:{
    fontSize: 18,
    fontWeight:600,
    position:"absolute",
    left:-8
},
button:{
    position:"absolute",
    right:0,
    bottom:36
},
date:{
    position:"absolute",
    bottom:10,
    left:19,
    color:"grey"
},
ticket:{
    position:"absolute",
    right:27,
    top:52,
    color:"grey"
}
})

export default TicketVideoCard;
