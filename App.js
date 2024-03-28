import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView, SafeAreaView, Pressable } from 'react-native';
import { Appbar, Checkbox, Chip, PaperProvider, ProgressBar, TextInput } from 'react-native-paper';
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
import SwaAppBar from './src/swa-components/Appbar/SwaAppbar';
import LiveClasses from './src/swa-Elements/Clases/LiveClasses';
import HelpAndSupport from './src/swa-Elements/HelpAndSupport/HelpAndSupport';
import HelpAndSupportRaiseTicket from './src/swa-Elements/HelpAndSupport/HelpAndSupportRaiseTictet';
import Profile from './src/swa-Elements/Profile/Profile';
import ExploreTestSeries from './src/swa-Elements/MyTest/ExporeTestSeries';
import OnboardingScreen from './src/swa-Elements/Onboarding/OnbordingScreen';
import SignupScreen from './src/swa-Elements/Login/SignupScreen';
import SetPin from './src/swa-Elements/Login/SetPin';
import VerifyOtp from './src/swa-Elements/Login/VerifyOtp';
import PinVerfication from './src/swa-Elements/Login/PinVerification';
import CardExamAnswerUpload from './src/swa-blocks/Card/CardExamAnswerUpload';
import ExamAnsweUpload from './src/swa-Elements/MyExam/ExamAnswerUpload';
import Downloads from './src/swa-Elements/Downloads/Downloads';
import PrefencesScreen from './src/swa-Elements/AppPrefences/PrefencesScreen';
import AnalyticScreen from './src/swa-Elements/Analytic/SwaProfileAnalyticsElement';
import CardCourse from './src/swa-blocks/Card/CardCourse';
import CardCourseAnalytic from './src/swa-blocks/Card/CardCourseAnalytic';
import AnalyticProfile from './src/swa-Elements/Analytic/AnalyticProfile';
import Notification from './src/swa-Elements/Notification/Notification';
import CardContentLiveStream from './src/swa-blocks/Card/CardContenetLiveStream';
// import Attempted from './src/swa-Elements/MyTest/Attempted';
import PersonalProfile from './src/swa-Elements/Notification/PersonalProfile';
import CardAttempt from './src/swa-blocks/Card/CardAttempt';
import CardOtherLiveStream from './src/swa-blocks/Card/CardOtherLiveStream';
import CardTest from './src/swa-blocks/Card/CardTest';
import CardTestimonial from './src/swa-blocks/Card/CardTestimonial';
import CardThisWeek from './src/swa-blocks/Card/CardWeekSpecial';
import SwaPrivacyPolicy from './src/swa-blocks/Card/SwaPrivacyPolicyCard';
import DownLoadQuality from './src/swa-blocks/Card/DownloadQuality';
import SwaHomeMainElement from './src/swa-Elements/HomePage/SwaHomeMainElement';
import SwaOnboardingElement from './src/swa-Elements/Onboarding/Onboarding';
import SwaPrivacyPolicyCard from './src/swa-blocks/Card/SwaPrivacyPolicyCard';
import SwaProfileUpdatePinElement from './src/swa-Elements/AppPrefences/SwaProfileUpdatePinElement';
import SwaProfileHelpTicketElement from './src/swa-Elements/HelpAndSupport/SwaProfileHelpTicketElement';
import SwaProfileSupportChatElement from './src/swa-Elements/HelpAndSupport/SwaProfileSupportChatElement';
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
        // <AttemptToWin/>
        <VideoCourse/>
        <VideoPageBottomNavigation/> */}
        {/* <VideoCoursePurchased/> */}
        {/* <VideoPlayerResources/> */}
        {/* <CourseUnpurchased/> */}
        {/* <Goal/> */}
        {/* <AllTest/> */}
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
        {/* <CardQuestionMin/> */}
        {/* <CardAttempt/> */}
        {/* <CardClass/> */}
        {/* <GoalBlock/> */}
        {/* <ReviewScreen/> */}
        {/* <ReviewBookmarks/> */}
        {/* <Examination/> */}
        {/* <AppbarBackAction/> */}
        {/* <LiveClasses/> */}
        {/* <HelpAndSupport/> */}
        {/* <HelpAndSupportRaiseTicket/> */}
       {/* <Profile/> */}
       {/* <QuizBasicInfo/> */}
       {/* <VideoCourses/> */}
       {/* <ExploreTestSeries/> */}
       {/* <OnboardingScreen/> */}
       {/* <SignupScreen/> */}
       {/* <SetPin/> */}
       {/* <VerifyOtp/> */}
       {/* <PinVerfication/> */}
       {/* <AttemptToWin/> */}
       {/* <CardLiveStreamHome/> */}
       {/* <IASMCQTest/> */}
       {/* <CardExamAnswerUpload/> */}
       {/* <ExamAnsweUpload/> */}
       {/* <Downloads/> */}
       {/* <PrefencesScreen/> */}
       {/* <DownLoadQuality/> */}
       {/* <LiveClasses/> */}
       {/* <Downloads/> */}
       {/* <Goal/> */}
       {/* <HelpAndSupport/> */}
       {/* <HelpAndSupportRaiseTicket/> */}
       {/* <PopularVideoCourses/> */}
       {/* <Testimonials/> */}
          {/* <ThisWeekSpecial/> */}
          {/* <PinVerfication/> */}
          {/* <SetPin/> */}
          {/* <SignupScreen/> */}
          {/* <VerifyOtp/> */}
          {/* <ExamAnsweUpload/> */}
          {/* <AllTest/> */}
          {/* <Notification/> */}
          {/* <PersonalProfile/> */}
          {/* <OnboardingScreen/> */}
          {/* <Profile/> */}
          {/* <SwaPrivacyPolicy/> */}
          {/* <SwaPrivacyPolicyCard/> */}
          {/* <Attempted/> */}
       {/* <AllExamSeries/> */}
       {/* <AllTestSeries/> */}
       {/* <AllVideoCoursee/> */}
       {/* <CoverImageHeader/>
       <PopularVideoCourses/> */}
       {/* <AnalyticScreen/> */}
       {/* <CoverImageHeader/>
      //  <PopularVideoCourses/>
       <AllVideoCoursee/>
       <AllTestSeries/>
       <AllExamSeries/>
       <ThisWeekSpecial/>
       <Testimonials/> */}
       {/* <CardOtherLiveStream/> */}
       {/* <CardCourse/> */}
       {/* <AllExamSeries/> */}
       {/* <CardCourseAnalytic/> */}
       {/* <AnalyticProfile/> */}
       {/* <Notification/> */}
       {/* <CardContentLiveStream/> */}
       {/* <VideoCourse/> */}
       {/* <AllTest/> */}
       {/* <Attempted/> */}
       {/* <PersonalProfile/> */}
       {/* <CardTest/> */}
       {/* <CardTestimonial/> */}
       {/* <CardTestToWin/> */}
       {/* <CardVideoCourse/> */}
       {/* <CardTicket/> */}
       {/* <CardThisWeek/> */}
       {/* <GoToTest/> */}

       {/* <IASMCQTest/> */}
       {/* <IASSubjectiveCard/> */}
       {/* <ScoreCard/> */}
       {/* <GoalBlock/> */}
       {/* <Question/> */}
       {/* <SwaHomeMainElement/> */}
       {/* <Goal/> */}
       {/* <LiveClasses/> */}
       {/* <Notification/>  */}
       {/* <PersonalProfile/> */}
       {/* <OnboardingScreen/> */}
       {/* <PinVerfication/> */}
       {/* <SignupScreen/> */}
       {/* <SetPin/> */}
       {/* <VerifyOtp/> */}
       {/* <AnalyticProfile/> */}
       {/* <AnalyticScreen/> */}
       {/* <PrefencesScreen/> */}
       {/* <Downloads/> */}
       {/* <HelpAndSupport/> */}
       {/* <HelpAndSupportRaiseTicket/> */}
       {/* <Profile/> */}
       {/* <SwaPrivacyPolicy/> */}
       {/* <SwaOnboardingElement/> */}
       {/* <ViewExamCard/> */}
       {/* <SwaProfileUpdatePinElement/> */}
       {/* <SwaProfileHelpTicketElement/> */}
       {/* <SwaProfileSupportChatElement/> */}
       {/* <SwaHomeMainElement/> */}
       <SwaAppBar
       title={"hello"}
       backAction={true}
       />
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
    // height:14000,
    paddingBottom:20
  },
});
