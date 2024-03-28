import { Pressable, View, TouchableOpacity, ScrollView, Dimensions, Image } from "react-native";
import React, { useCallback, useRef, useState } from "react";
import { Appbar, Text } from "react-native-paper";
const SwaOnboardingElement = ({
  handleSkip,
  handleContinue,
  onBoardingTexts = [
    {
      title: "500+ Institutes to choose upon",
      dec: "Choose courses from the best institutes among all the top institutes we have brought here"
    },
    {
      title: "Comprehensive Video Lectures",
      dec: "Experts curated curriculum to attain the maximum knowledge at minimal time"
    },
    {
      title: "Tailormade study materials",
      dec: "Get preparation ready study materials made by experts directly to your desk"
    },
    {
      title: "Make your Preparation Stronger",
      dec: "Attempt test series prepared by experts to strengthen your core concepts"
    }
  ]
}) => {
  const [visibleCardIndex, setVisibleCardIndex] = useState(0);
  const scrollViewRef = useRef(null);
  const { width } = Dimensions.get("window");

  const handleScroll = useCallback(
    (event) => {
      const offsetX = event.nativeEvent.contentOffset.x;
      const index = Math.round(offsetX / width);
      setVisibleCardIndex(index);
    },
    [width]
  );
  const FirstScreen = () => (
    <View style={{ width: width }}>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Image
          style={{
            marginTop: 70,
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center"
          }}
        //   source={require("../../assets/Character.png")}
        />
        <View
          style={{
            alignItems: "center",
            marginTop: 15
          }}>
          <Text
            variant="headlineSmall"
            style={{
              fontSize: 28,
              fontWeight: "bold"
            }}>
            Welcome to Swa-Adhyayan!
          </Text>
          <Text
            style={{
              letterSpacing: 1,
              marginTop: 32,
              lineHeight: 24,
              fontSize: 20
            }}>
            Your Gateway to Exam Success
          </Text>
        </View>
      </View>
    </View>
  );
  const RenderOnBoardingScreens = ({ title, dec }) => (
    <View style={{ width: width }}>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <View
          style={{
            width: "90%",
            margin: 20,
            backgroundColor: "#d9edff",
            height: "60%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20
          }}>
          <Text style={{ fontWeight: 500, fontSize: 20 }}>Animated Cartoon Graphic</Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center", margin: 30 }}>
          <Text style={{ fontWeight: "700", fontSize: 25, marginVertical: 5 }}>{title}</Text>
          <Text style={{ textAlign: "center", fontSize: 17 }}>{dec}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, paddingTop: 10 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Appbar.Header style={{ justifyContent: "flex-end", backgroundColor: "white" }}>
          {visibleCardIndex !== onBoardingTexts.length ? (
            <Pressable
              onPress={handleSkip}
              style={{
                height: 50,
                flexDirection: "row",
                justifyContent: "flex-end",
                alignSelf: "flex-end",
                fontSize: "6",
                paddingRight: 40
              }}>
              <Text style={{ color: "#0D80F2", fontSize: 20, fontWeight: 400 }}>Skip</Text>
            </Pressable>
          ) : (
            <Pressable
              style={{
                height: 50,
                flexDirection: "row",
                justifyContent: "flex-end",
                alignSelf: "flex-end",
                fontSize: "6",
                paddingRight: 40
              }}></Pressable>
          )}
        </Appbar.Header>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            height: "100%"
          }}>
          <ScrollView
            ref={scrollViewRef}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            onScroll={handleScroll}>
            <FirstScreen />
            {onBoardingTexts.map((data, i) => (
              <RenderOnBoardingScreens title={data.title} dec={data.dec} />
            ))}
          </ScrollView>
          {/* <DotView visibleCardIndex={visibleCardIndex} /> */}
          <View
            style={{
              flexDirection: "row",
              gap: 9,
              marginTop: 80,
              alignItems: "center",
              marginBottom: 10
            }}>
            {Array(onBoardingTexts.length + 1)
              .fill(null)
              .map((_, index) => (
                <View
                  style={{
                    height: visibleCardIndex === index ? 10 : 8,
                    width: visibleCardIndex === index ? 10 : 8,
                    backgroundColor: visibleCardIndex === index ? "#0D80F2" : "#B9DCFF",
                    borderRadius: 10
                  }}></View>
              ))}
          </View>
          {visibleCardIndex === onBoardingTexts.length && (
            <View style={{ flex: 1, marginVertical: 16, width: "90%" }}>
              <TouchableOpacity
                onPress={handleContinue}
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#0D80F2",
                  borderRadius: 8
                }}>
                <Text style={{ color: "#fff", fontSize: 20 }}>Get Started</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default SwaOnboardingElement;
