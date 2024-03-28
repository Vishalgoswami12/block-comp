import React, { useState, useRef } from "react";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import { Text } from "react-native-paper";
import themeObject from "../../Constants/Globaltyle";

const windowWidth = Dimensions.get('window').width;

const onboardingData = [
  {
    title: "Welcome to Swa-Adhyayan",
    subtitle: "Your Gateway to Exam Success",
    dotIndex: 0,
  },
  {
    title: "500+ Institutes to choose upon",
    subtitle:
      "Choose courses from the best institutes among all the top institutes we have brought here",
    dotIndex: 1,
  },
  {
    title: "Comprehensive Video Lectures",
    subtitle: `Experts curated curriculum to attain the maximum knowledge at minimal time`,
  },
  {
    title: "Tailormade study materials",
    subtitle: `Get preparation ready study materials made by experts directly to your desk`,
  },
  {
    title: "Make your Preparation Stronger",
    subtitle: `Attempt test series prepared by experts to strengthen your core concepts`,
  }
  // Add more onboarding screens if needed
];

function OnboardingScreen() {
  const scrollViewRef = useRef(null);
  const [visibleCardIndex, setVisibleCardIndex] = useState(0);

  const handleNext = () => {
    if (visibleCardIndex < onboardingData.length - 1) {
      setVisibleCardIndex(visibleCardIndex + 1);
      scrollViewRef.current.scrollTo({
        x: (visibleCardIndex + 1) * windowWidth,
        animated: true,
      });
    }
  };

  const handleScrollEnd = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / windowWidth);
    setVisibleCardIndex(index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.skip} variant="titleMedium">
        Skip
      </Text>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        onMomentumScrollEnd={handleScrollEnd}
      >
        {onboardingData.map((item, index) => (
          <View key={index} style={styles.slide}>
            {/* <View style={styles.skipContainer}>
              
            </View> */}
            <View style={[styles.image, { width: windowWidth - 40 }]}>
              <Text>Image?</Text>
            </View>

            <Text variant="titleLarge" style={styles.onbartext}>
              {item.title}
            </Text>
            <Text style={styles.text} variant="titleSmall">
              {item.subtitle}
            </Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.dotsContainer}>
              {onboardingData.map((_, i) => (
                <View
                  key={i}
                  style={[
                    styles.dot,
                    {
                      backgroundColor:
                        i === visibleCardIndex
                          ? themeObject?.theme?.PrimaryColor?.Primary600
                          : "#B9DCFF"
                    }
                  ]}
                />
              ))}
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:800
  },
  contentContainer: {
    paddingRight: 22, // Add padding to the right side of the content
  },
  slide: {
    width: windowWidth,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 160,
  },
  skip: {
    marginLeft:"80%"
  },
  image: {
    height: 268,
    backgroundColor: "#D9EDFF",
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10
  },
  onbartext: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    // marginBottom: 20,
  },
  dotsContainer: {
    flexDirection: "row",
    marginBottom: 100,
    alignSelf: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    // marginTop:80
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default OnboardingScreen;
