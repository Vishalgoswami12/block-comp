export default styles = {
    GOAL:{
        GOAL_VIEW:{
            container: {
              height: 1130
            }
          }
    },
    HOME_STACK:{
        ALL_EXAM_SERIES:{
            text: {
              fontSize: 24,
              marginTop: 20,
              fontWeight: 500,
              marginLeft: 15
            },
            scrollView: {
              flexDirection: "row",
              padding: 10
            },
            cardContainer: {
              marginRight: 10
            },
            secondCardMargin: {
              marginLeft: 10
            },
            subcontainer: {
              flexDirection: "row",
              justifyContent: "space-between"
            },
            enroll: {
              fontSize: 12,
              fontWeight: 500,
              color: "#0D80F2",
              right: 8
            },
            rollcont: {
              flexDirection: "row",
              top: 25
            },
            icon: {
              top: 2
            }
        },
        ALL_TEST_SERIES:{
            text: {
              fontSize: 24,
              marginTop: 20,
              fontWeight: 500,
              marginLeft: 15
            },
            scrollView: {
              flexDirection: "row",
              padding: 10
            },
            cardContainer: {
              marginRight: 10
            },
            secondCardMargin: {
              marginLeft: 10
            }
        },
        ALL_VIDEO_COURSES:{
            text: {
              fontSize: 24,
              marginTop: 20,
              fontWeight: 500,
              marginLeft: 15
            },
            scrollView: {
              flexDirection: "row",
              padding: 10
            },
            cardContainer: {
              marginRight: 10
            },
            secondCardMargin: {
              marginLeft: 10
            },
            textrow: {
              flexDirection: "row",
              justifyContent: "space-between"
            },
            seetext: {
              color: "#0D80F2",
              top: 25,
              right: 15
            }
        },
        COVER_IMAGE_HEADER:{
            title: {
              color: "white",
              marginLeft: 35
            },
            subcon: {
              position: "absolute",
              left: -9.3,
              top: -10.5
            },
            chip: {
              width: 101,
              backgroundColor: "white"
              // height:80
            },
            textchip: {
              color: "#008FFF"
            },
            chipsize: {
              position: "absolute",
              top: 40,
              left: 50
            },
            icon: {
              // left:60
            },
            bell: {
              position: "absolute",
              right: 15,
              top: 20
            }
        },
        HOME_PAGE_BOTTOM_NAV:{
            line: {
              borderBottomColor: "grey",
              borderBottomWidth: 1,
              marginVertical: 10,
              top: 10
            }
        },
        POPULAR_VIDEO_COURSES:{
            text: {
              fontSize: 24,
              marginTop: 20,
              fontWeight: 500
            },
            scrollView: {
              flexDirection: "row",
              padding: 10
            },
            cardContainer: {
              marginRight: 10
            },
            secondCardMargin: {
              marginLeft: 10
            }
        },
        TESTIMONIALS:{
            text: {
              fontSize: 24,
              marginTop: 50,
              fontWeight: 500,
              marginLeft: 15
            },
            scrollView: {
              flexDirection: "row",
              padding: 10
            },
            cardContainer: {
              marginRight: 10
            },
            secondCardMargin: {
              marginLeft: 10
            }
        },
        THIS_WEEK_SPECIAL:{
            //TYPE YOUR STYLE HERE
        }
    },
    EXAMINATION:{
      EXAMINATION_VIEW:{
        container: {
          height: 1740
        },
        card: {
          backgroundColor: "black",
          shadowColor: "black",
          shadowOffset: {
            width: 3,
            height: 7
          },
          shadowOpacity: 1,
          elevation: 11,
          bottom: 5
        },
        title: {
          fontSize: 16,
          fontWeight: 600
        },
        tab: {
          width: 270,
          flexDirection: "row",
          justifyContent: "space-between",
          left: 60,
          top: 30
        },
        scrollView: {
          padding: 10
        },
        cardContainer: {
          marginRight: 10,
          top: 60,
          left: 30
        },
        secondCardMargin: {
          marginTop: 10
        },
        bar: {
          top: 70
        }
    }
    },
    MY_TEST:{
      ALL_TEST:{
        container: {
          height: 800
        },
        card: {
          backgroundColor: "black",
          shadowColor: "black",
          shadowOffset: {
            width: 3,
            height: 7
          },
          shadowOpacity: 1,
          // shadowRadius:7,
          elevation: 11,
          bottom: 5
        },
        testtext: {
          bottom: 49,
          left: 50,
          fontSize: 16,
          fontWeight: 600
        },
        head: {
          fontSize: 16,
          fontWeight: 500,
          left: 50
        },
        attempt: {
          fontSize: 16,
          fontWeight: 500,
          right: 50
        },
        headline: {
          flexDirection: "row",
          justifyContent: "space-between"
        },
        scrollView: {
          padding: 10
        },
        cardContainer: {
          marginRight: 10
        },
        secondCardMargin: {
          marginLeft: 5,
          marginTop: 10
        }
      },
      ATTEMPTED:{
        container: {
          height: 800
        },
        card: {
          backgroundColor: "black",
          shadowColor: "black",
          shadowOffset: {
            width: 3,
            height: 7
          },
          shadowOpacity: 1,
          elevation: 11,
          bottom: 5
        },
        testtext: {
          bottom: 49,
          left: 50,
          fontSize: 16,
          fontWeight: 600
        },
        head: {
          fontSize: 16,
          fontWeight: 500,
          left: 50
        },
        attempt: {
          fontSize: 16,
          fontWeight: 500,
          right: 50
        },
        headline: {
          flexDirection: "row",
          justifyContent: "space-between"
        },
        scrollView: {
          padding: 10
        },
        cardContainer: {
          marginRight: 10
        },
        secondCardMargin: {
          marginLeft: 5,
          marginTop: 10
        }
      },
      MCQ_SCREEN:{
        container: {
          height: 2200
        },
        card: {
          backgroundColor: "black",
          shadowColor: "black",
          shadowOffset: {
            width: 3,
            height: 7
          },
          shadowOpacity: 1,
          elevation: 11,
          bottom: 5
        },
        testtext: {
          bottom: 49,
          left: 50,
          fontSize: 16,
          fontWeight: 600
        },
        title: {
          fontSize: 16,
          fontWeight: 600
        },
        section: {
          width: 64,
          height: 28,
          backgroundColor: "#727272",
          borderRadius: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          left: 12
        },
        event: {
          top: 4,
          left: 7
        },
        per: {
          fontSize: 14,
          color: "white",
          right: 8,
          top: 3
        },
        txtbar: {
          top: 22,
          flexDirection: "row",
          justifyContent: "space-between",
          width: 360
        },
        progress: {
          width: 146,
          height: 10,
          borderRadius: 10,
          backgroundColor: "#175CCC",
          top: 10
        },
        clocktext: {
          width: 64,
          height: 28,
          backgroundColor: "#008FFF",
          borderRadius: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          left: 12
        },
        clock: {
          top: 6,
          left: 8
        },
        time: {
          color: "white",
          fontSize: 14,
          right: 6,
          top: 2
        },
        line: {
          borderBottomWidth: 1,
          borderBottomColor: "grey",
          marginVertical: 10,
          width: 350,
          top: 40,
          left: 20
        },
        arrow: {
          flexDirection: "row",
          top: 8
        },
        btncon: {
          width: 141,
          height: 42,
          borderColor: "#008FFF",
          borderWidth: 2,
          borderRadius: 10
        },
        polity: {
          flexDirection: "row",
          justifyContent: "space-between",
          width: 360,
          left: 14,
          top: 50
        },
        icon: {
          left: 17,
          bottom: 7
        },
        ques: {
          top: 140,
          left: 15
        },
        scrollView: {
          padding: 10
        },
        cardContainer: {
          marginRight: 10,
          top: 50,
          left: 15
        },
        secondCardMargin: {
          // marginLeft: 10,
          marginTop: 130
        },
        ans: {
          flexDirection: "row",
          top: 270,
          position: "absolute",
          right: 24
        },
        textrev: {
          color: "#193DAD",
          right: 10
        },
        line2: {
          borderBottomWidth: 1,
          borderBottomColor: "grey",
          marginVertical: 10,
          width: 350,
          top: 60,
          left: 20
        }
      },
      QUIZ_BASIC_INFO: {
        container: {
          height: 800
        },
        card: {
          backgroundColor: "black",
          shadowColor: "black",
          shadowOffset: {
            width: 3,
            height: 7
          },
          shadowOpacity: 1,
          elevation: 11,
          bottom: 5
        },
        quizrule:{
            top:100
        },
        testtext: {
          bottom: 49,
          left: 50,
          fontSize: 16,
          fontWeight: 600
        },
        title: {
          left: 18,
          fontWeight: 700
        },
        subtext: {
          fontSize: 12,
          color: "#727272",
          left: 21,
          top: 10
        },
        questioncard: {
          top: 40,
          left: 10
        },
        basictest: {
          fontWeight: 700,
          left: 16,
          bottom: 60
        },
        desc: {
          width: 288,
          lineHeight: 20,
          left: 40,
          bottom: 40,
          textAlign:"justify",
          width:288
        },
        righticon:{
            bottom:15,
            left:12
        },
        descsec: {
          width: 288,
          lineHeight: 20,
          left: 40,
        //   bottom: 100,
          top: -38
        },
        desthir: {
          width: 328,
          lineHeight: 20,
          left: 40,
          bottom: 40,
          top: -35
        },
        ans: {
          flexDirection: "row"
        },
        anstext: {
          left: 10
        },
        box: {
          top: 10,
          left: 26
        },
        bar: {
          top: 55
        },
        btn: {
          top: 50,
          left: 26
        }
      },
      REVIEW_BOOKMARKS:{
        container: {
          height: 3250
        },
        card: {
          backgroundColor: "black",
          shadowColor: "black",
          shadowOffset: {
            width: 3,
            height: 7
          },
          shadowOpacity: 1,
          elevation: 11,
          bottom: 5
        },
        bookmark: {
          flexDirection: "row",
          justifyContent: "space-between",
          width: 350,
          left: 15,
          top: 20
        },
        line: {
          borderBottomWidth: 1,
          borderBottomColor: "grey",
          marginVertical: 10,
          width: 350,
          top: 10,
          left: 20
        },
        line2: {
          borderBottomWidth: 1,
          borderBottomColor: "grey",
          marginVertical: 10,
          width: 350,
          top: 30,
          left: 20
        },
        text: {
          top: 10
        },
        scrollView: {
          padding: 10
        },
        cardContainer: {
          marginRight: 10,
          top: -100,
          left: 15
        },
        secondCardMargin: {
          // marginLeft: 10,
          marginTop: 180
        }
      },
      REVIEW_SCREEN:{
        container: {
          height: 900
        },
        revbook:{
            width:90,
            height:80,
            backgroundColor:"#E8E8E8",
            borderRadius:10,

        },
        iconcard:{
            flexDirection:"row",
            justifyContent:"space-between",
            width:328,
            left:32,
            top:90

        },
       booktxt:{
        top:15,
        left:19,
        width:74
           },
           booktxt1:{
            top:15,
            left:25,
            width:74
               },
        bookicon:{
            left:32,
            top:10
        },
        card: {
          backgroundColor: "black",
          shadowColor: "black",
          shadowOffset: {
            width: 3,
            height: 7
          },
          shadowOpacity: 1,
          elevation: 11,
          bottom: 5
        },
        titltlar: {
          fontWeight: 600,
          color: "#193DAD",
          left: 15,
          top: 40
        },
        score: {
          left: 15,
          top: 120
        },
        btncontainer: {
          flexDirection: "row",
          top: 80,
          width: 360,
          justifyContent: "space-between",
          left: 15
        },
        btnattempt: {
          top: 120,
          left:32
        },
        texttests: {
          color: "#175CCC",
          top: 120,
          textAlign: "center"
        },
        bar: {
          top: 120
        }
      }
    },
    VIDEO_COURSES:{
      ATTEMPT_TO_WIN:{
        //TYPE HERE YOUR STYLES
      },
      COURSE_PURCHASED:{
        appbar: {
          width: 500,
          right: 120,
          top: 3,
          backgroundColor: "white",
          height: 60
        },
        headtext: {
          fontSize: 16,
          position: "absolute",
          left: 160
        },
        card: {
          // backgroundColor: "blue",
          height: "1450"
        },
        card1: {
          top: 70,
          left: -8
        }
      },
      COURSE_UNPURCHASED:{
        appbar: {
          width: 500,
          right: 120,
          top: 3,
          backgroundColor: "white",
          height: 60
        },
        headtext: {
          fontSize: 16,
          position: "absolute",
          left: 160
        },
        card: {
          // backgroundColor: "blue",
          height: 1750
        },
        card1: {
          top: 130,
          left: -8
        }
      },
      VIDEO_COURSE:{
        scrollView: {
          flexDirection: "column"
          // padding: 10,
        },
        cardContainer: {
          marginRight: 10
        },
        secondCardMargin: {
          marginTop: 25
        }
      },
      VIDEO_COURSE_HEADER:{
        //TYPE HERE YOUR STYLES
      },
      VIDEO_PAGE_BOTTOM_NAV:{
        card: {
          left: 8
        }
      },
      VIDEO_PLAYER_RESOURCES:{
        appbar: {
          width: 500,
          right: 120,
          top: 3,
          backgroundColor: "white",
          height: 60
        },
        headtext: {
          fontSize: 16,
          position: "absolute",
          left: 160
        },
        card: {
          // backgroundColor: "blue",
          height: 1450
        },
        bottombar: {
          top: 240
        }
      }
    }
}