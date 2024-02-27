import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { Appbar, Checkbox, Chip, PaperProvider } from 'react-native-paper';
import LeaderBoardCard from './src/swa-blocks/Card/LeaderBoardCard';
import SwaLeaderCard from './src/swa-components/Card/SwaLeaderCard';
import CardVideoTest from './src/swa-blocks/Card/CarrVideoTestInfo';
import CardQuestionMin from './src/swa-blocks/Card/CardQuestionMin';
import ScoreCard from './src/swa-blocks/Card/ScoreCard';
import Question from './src/swa-blocks/Question/Question';
import TestBookmarks from './src/swa-blocks/TestBookmarks/TestBookmarks';
import IASSubjectiveCard from './src/swa-blocks/Card/IASSubjectiveCard';
import ExamCard from './src/swa-blocks/Card/ExamCard';
import IASMCQTest from './src/swa-blocks/Card/IASMCQTest';
import GoToTest from './src/swa-blocks/Card/GoToTest';
import SyllabusAttemptCard from './src/swa-blocks/Card/SyllabusAttemptCard';
import CardVideoCourse from './src/swa-blocks/Card/CardVideoCourse';
import CardLiveStreamHome from './src/swa-blocks/Card/CardLiveStreamHome';
import ExamNotificationCard from './src/swa-blocks/Card/ExamNotificationCard';
import CoverImageHeader from './src/swa-Elements/HomePage/CoverImageHeader';
import PopularVideoCourses from './src/swa-Elements/HomePage/PopularVideoCourses';
import AllVideoCoursee from './src/swa-Elements/HomePage/AllVideoCourses';
import AllTestSeries from './src/swa-Elements/HomePage/AllTestSeries';
import AllExamSeries from './src/swa-Elements/HomePage/AllExamSeries';
import ThisWeekSpecial from './src/swa-Elements/HomePage/ThisWeekSpecial';
import Testimonials from './src/swa-Elements/HomePage/Testimonials';
import HomePageBottomNavigation from './src/swa-Elements/HomePage/HomePageBottomNavigation';
import VideoCourseHeader from './src/swa-Elements/VideoCourses/VideoCouresHeader';
import AppbarBackAction from './src/swa-blocks/Appbar/AppbarBackAction';
import Shadow from "react-native-shadow";
import CardTestToWin from './src/swa-blocks/Card/CardTestToWin';
import AttemptToWin from './src/swa-Elements/VideoCourses/AttemptToWin';
import VideoCourse from './src/swa-Elements/VideoCourses/VideoCourse';
import VideoPageBottomNavigation from './src/swa-Elements/VideoCourses/VideoPageBottomNavigation';
export default function App() {
  const [checked, setChecked] = React.useState(false);
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app</Text> */}
      <StatusBar style="auto" />
      <PaperProvider>
        {/* <LeaderBoardCard/> */}
        {/* <SwaLeaderCard/> */}
        {/* <CardVideoTest/> */}
        {/* <CardQuestionMin/> */}
        {/* <ScoreCard/> */}
        {/* <Question/> */}
        {/* <TestBookmarks/> */}
        {/* <IASSubjectiveCard/> */}
        {/* <ExamCard/> */}
        {/* <IASMCQTest/> */}
        {/* <GoToTest/> */}
        {/* <SyllabusAttemptCard/> */}
        {/* <CardVideoCourse/> */}
        {/* <Chip>hello</Chip> */}
        {/* <CardLiveStreamHome/> */}
        {/* <ExamNotificationCard/> */}
        <ScrollView>
        
        {/* <CoverImageHeader/>
        <PopularVideoCourses/>
        <AllVideoCoursee/>
        <AllTestSeries/>
        <AllExamSeries/>
        <ThisWeekSpecial/>
        <Testimonials/>
        <HomePageBottomNavigation/> */}
        <VideoCourseHeader/>
        <AttemptToWin/>
        <VideoCourse/>
        <VideoPageBottomNavigation/>
        </ScrollView>
      
      </PaperProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    top:32,
    paddingBottom:20
  },
});
