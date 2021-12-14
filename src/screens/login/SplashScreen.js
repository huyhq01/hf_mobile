import React, { useEffect, useRef } from "react";
import { Animated, Dimensions, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import SignIn from "./SignIn";
import Colors from "../../constants/Colors";

export default function SplashScreen() {
  const edges = useSafeAreaInsets();

  // Animation Values....
  const startAnimation = useRef(new Animated.Value(0)).current;

  // Scaling Down Both logo and Title...
  const scaleLogo = useRef(new Animated.Value(1)).current;

  // Offset Animation....
  const moveLogo = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const contentTransition = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(startAnimation, {
          // For same Height for non safe Area Devices...
          toValue: -Dimensions.get("window").height + edges.top,
          useNativeDriver: true,
        }),
        Animated.timing(scaleLogo, {
          // Scaling to 0.35
          toValue: 0.5,
          useNativeDriver: true,
        }),
        Animated.timing(moveLogo, {
          toValue: {
            x: 0,
            y: Dimensions.get("window").height / 1.05,
          },
          useNativeDriver: true,
        }),
        Animated.timing(contentTransition, {
          toValue: 0,
          useNativeDriver: true,
        }),
      ]).start();
    }, 2000);
  }, []);
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <Animated.View
        style={{
          transform: [{ translateY: startAnimation }],
          zIndex: 1,
          backgroundColor: Colors.white,
          alignItems: "center",
          justifyContent: "center",
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
      >
        <Animated.Image
          style={{
          width: 200,
          height: 100,
            transform: [
              { translateX: moveLogo.x },
              { translateY: moveLogo.y },
              { scale: scaleLogo },
            ],
          }}
          source={require("../../assets/logo.png")}
        />
      </Animated.View>
      <Animated.View
        style={{
          flex: 1,
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 0,
          transform: [{ translateY: contentTransition }],
        }}
      >
        <SignIn />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({});
