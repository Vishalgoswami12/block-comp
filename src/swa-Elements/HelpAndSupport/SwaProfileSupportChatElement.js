import React, { useRef, useEffect,useState } from "react";
import { View, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { MaterialIcons } from '@expo/vector-icons';

function SwaProfileSupportChatElement() {
  const scrollViewRef = useRef();
  const [inputValue, setInputValue] = useState('');
  const [chatData, setChatData] = useState([
    {
      message: "Excepteur sint occaecat cupidatat non, sunt int culpa qui officia deserunt mollit anim id es",
      date: "26th Jan 2024, 10:30PM"
    },
    {
      message:  "Excepteur sint occaecat cupidatat non, sunt int culpa qui officia deserunt mollit anim id es",
      date: "27th Jan 2024, 11:00PM"
    },
    {
        message:  "Excepteur sint occaecat cupidatat non, sunt int culpa qui officia deserunt mollit anim id es",
        date: "27th Jan 2024, 11:00PM"
      },
      {
        message:  "Excepteur sint occaecat cupidatat non, sunt int culpa qui officia deserunt mollit anim id es",
        date: "27th Jan 2024, 11:00PM"
      },
      {
        message:  "Excepteur sint occaecat cupidatat non, sunt ",
        date: "27th Jan 2024, 11:00PM"
      }
  ]);

  useEffect(() => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  }, [chatData]);

  const handleSend = () => {
    if (inputValue.trim() !== '') {
      const newMessage = {
        message: inputValue,
        date: new Date().toLocaleString()
      };
      setChatData([...chatData, newMessage]);
      setInputValue('');
    }
  };

  return (
    <View style={{ flex: 1 ,padding:10}}>
      <ScrollView ref={scrollViewRef} contentContainerStyle={styles.scrollViewContent}>
        {chatData.map((chat, index) => (
            <>
          <View key={index} style={index % 2 === 0 ? styles.cardContainer : styles.cardContainer1}>
            <Text variant="bodyMedium">{chat.message}</Text>
          </View>
          <Text variant="bodyMedium" style={index%2 ===0 ? styles.chatdate : styles.chatedate2}>{chat.date}</Text>
          </>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="Enter your text here"
          multiline
        />
        <View style={{flexDirection:"row",gap:30, position:"absolute", right:30, top:18}}>
        <MaterialIcons name="attach-file" size={24} color="black" />
        <TouchableOpacity onPress={handleSend}>
          <MaterialIcons name="send" size={24} color="black" />
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingVertical: 10,
  },
  cardContainer: {
    width: "80%",
    borderRadius: 10,
    padding: 15,
    backgroundColor: "#B9DCFF",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1.25,
    shadowRadius: 4.84,
    elevation: 9,
    marginLeft: 70,
    borderRadius: 10,
    marginTop:20
  },
  cardContainer1: {
    width: "80%",
    borderRadius: 10,
    padding: 15,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1.25,
    shadowRadius: 4.84,
    elevation: 9,
    borderRadius: 10,
    marginTop: 20
  },
  inputContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  input: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: "#B9DCFF",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  chatdate:{
    marginTop:8,
    marginLeft:210
  },
  chatedate2:{
    marginTop:8
  }
});

export default SwaProfileSupportChatElement;
