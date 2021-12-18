import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
import Colors from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container} onTouchEnd={() => navigation.replace("SignIn")}>
      <LottieView
        autoPlay
        loop={false}
        source={require("../../assets/food1.json")}
        onAnimationFinish={() => navigation.replace("SignIn")}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white },
});
