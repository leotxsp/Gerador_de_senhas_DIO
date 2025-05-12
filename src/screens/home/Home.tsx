import React from "react";
import {Text,View} from "react-native";
import styles from "./Style";
import { BatLogo } from "../../components/BatLogo/BatLogo";
import {BatTextInput} from "../../components/TextInput/TextInput";


export default function Home() {
    return (
      <View style={styles.appContainer}>
        <View style={styles.logoContainer}>
        <BatLogo/>
        </View>
        <BatTextInput/>
      </View>
    )
} 