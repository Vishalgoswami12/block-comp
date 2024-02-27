import React from "react"
import { View,StyleSheet } from "react-native";
import SwaCard from "../../swa-components/Card/swaCard";
import { Text } from "react-native-paper";
import SwaButton from "../../swa-components/Button/swaButton";
function CardVideo(){
    return(
        <View>
            <SwaCard
      width={328}
      height={160}
     >
          <Text style={styles.text2} variant="titleMedium">Foundation Batch for Police</Text>
          <View style={styles.subcont1}>
            <Text>by Manish S Pandey</Text>
           <SwaButton
           
           mode="outlined"
           backgroundColor="white"
           borderRadius={10}
           label="Go to Videos"
           size="xsmall"
           width={10}
           />
        </View>
     </SwaCard>
        </View>
    )
}
const styles = StyleSheet.create({})
export default CardVideo;