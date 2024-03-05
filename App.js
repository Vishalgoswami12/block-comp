import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView, SafeAreaView } from 'react-native';
import { Appbar, Checkbox, Chip, PaperProvider, ProgressBar } from 'react-native-paper';
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
import CoursePurchased from './src/swa-Elements/VideoCourses/CoursePurchased';
import VideoPlayerResources from './src/swa-Elements/VideoCourses/VideoPlayerResources';
import CourseUnpurchased from './src/swa-Elements/VideoCourses/CourseUnpurchased';
import Goal from './src/swa-Elements/Goal/Goal';
import AllTest from './src/swa-Elements/MyTest/AllTests';
import QuizBasicInfo from './src/swa-Elements/MyTest/QuizBasicInfo';
import MCQScreen from './src/swa-Elements/MyTest/MCQScreen';
import AppbarHeaderContent from './src/swa-blocks/Appbar/AppbarHeaderContent';
import HeadHomeScreen from "./src/swa-blocks/Appbar/HeadHomeScreen"
import HeadLine from "./src/swa-blocks/Appbar/HeadLine"
import HeadLiveStream from './src/swa-blocks/Appbar/HeadLiveStream';
import CardActionLiveStream from './src/swa-blocks/Card/CardActionLiveStream';
import  Attempted  from './src/index';
import HeadLineNotification from './src/swa-blocks/Appbar/HeadLineNotification';
import CardClass from './src/swa-blocks/Card/CardClass';
import SwaSegmentedButton from './src/swa-components/SegmentedButton/swaSegmentedButton';
import CardNotification from "./src/swa-blocks/Card/CardNotification"
import CardTicket from './src/swa-blocks/Card/CardTicket';
import DialogBox from './src/swa-blocks/Dialog/DialogBox';
import CardContentProgress from './src/swa-blocks/Card/CardContentProgress';
import GoalBlock from './src/swa-blocks/Goal/GoalBlock';
import ReviewScreen from './src/swa-Elements/MyTest/ReviewScreen';
import ReviewBookmarks from './src/swa-Elements/MyTest/ReviewBookmarks';
import Examination from './src/swa-Elements/MyExam/Examination';
export default function App() {
  const [checked, setChecked] = React.useState(false);
  const buttons = [
    { text: "Button 1", key: "button1" },
    { text: "Button 2", key: "button2" },
    { text: "Button 3", key: "button3" }
  ];
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
        {/* <VideoCourseHeader/>
        <AttemptToWin/>
        <VideoCourse/>
        <VideoPageBottomNavigation/> */}
        {/* <VideoCoursePurchased/> */}
        {/* <VideoPlayerResources/> */}
        {/* <CourseUnpurchased/> */}
        {/* <Goal/> */}
        {/* <AllTest/> */}
        {/* <Attempted/> */}
        {/* <QuizBasicInfo/> */}
        {/* <CoursePurchased/> */}
        {/* <MCQScreen/> */}
        {/* <AppbarBackAction/> */}
        {/* <AppbarHeaderContent/> */}
        {/* <HeadHomeScreen/> */}
        {/* <HeadLine
        title={"your"}
        /> */}
        {/* <HeadLineNotification/> */}
        {/* <CardActionLiveStream/> */}
        {/* <CardClass/> */}
        {/* <CardNotification/> */}
        {/* <CardTicket/> */}
        {/* <DialogBox/> */}
        {/* <CardContentProgress/> */}
        {/* <ProgressBar
        progress={0.5}
        color='black'
        /> */}
        {/* <Goal/> */}
        {/* <GoalBlock/> */}
        {/* <ReviewScreen/> */}
        {/* <ReviewBookmarks/> */}
        <Examination/>
        </ScrollView>
        <SafeAreaView>
        {/* <SwaSegmentedButton
      /> */}
        </SafeAreaView>
      
      </PaperProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    top:32,
    paddingBottom:20
  },
});
