import React from "react";
import {Text,View,StatusBar} from "react-native";
import styles from "./Style";
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatTextInput } from "../../components/TextInput/TextInput";

export default function Home() {
  return(
    <View style={styles.appContainer}>

      <View style={styles.logoContainer}>
        <BatLogo/>
      </View>

      <View style={styles.inputContainer}>
        <BatTextInput/>
      </View>

      <StatusBar style="light" />
    </View>
  )
}