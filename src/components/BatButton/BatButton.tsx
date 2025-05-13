import React, {useState} from 'react';
import { Text, Pressable, View} from 'react-native';
import { styles } from './BatButtonStyle';
import * as Clipboard from 'expo-clipboard';
import { BatTextInput } from "../../components/TextInput/TextInput";
import generatePass from '../../services/passwordService';

export function BatButton() {

  const [pass, setPass] = useState<string>('')

  function handleGenerateButton() {
    let senhagerada = generatePass
    setPass(senhagerada)
    
  }
  function handleCopy() {
    Clipboard.setStringAsync(pass);
    alert('Senha copiada para a área de transferência');
    
  }


  return (
    <>  
    <BatTextInput pass={pass}/>
    <Pressable
    onPress={handleGenerateButton}
    style={styles.button}> 
    <Text style={styles.text}>
      Gerar Senha
    </Text>
    </Pressable>
      <Pressable
    onPress={handleCopy}
    style={styles.button}>
    <Text style={styles.text}>
      copiar
    </Text>
    </Pressable>

    </>
  );
}