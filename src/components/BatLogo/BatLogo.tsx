import React from 'react';
import { View ,Text,Image} from 'react-native';
import { styles } from './BatLogoStyle';
import batlogo from '../../../assets/bat-logo.png';

export function BatLogo() {
  return (
    <View>
      <Image
        source={batlogo}
        style={styles.image}
      />
      <Text style={styles.title}>Gerador de Senhas</Text>
      <Text style={styles.title}>Versão 1.0</Text>


    </View>
  );
}