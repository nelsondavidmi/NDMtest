import React, {useState} from 'react';
import {View, StyleSheet, Text, Alert, Linking, ScrollView} from 'react-native';

//@components
import Input from '../components/input';
import Button from '../components/button';

//@theme
import {PRIMARY_FONT_MEDIUM, PRIMARY_COLOR} from '../theme/general';

const HelpScreen = () => {
  const [message, setMessage] = useState('');

  const sendOnWhatsApp = () => {
    const urlMessage = `whatsapp://send?text=*Descripcion*:${message}&phone=573168259620}`;

    Linking.openURL(urlMessage)
      .then(data => {})
      .catch(() => {
        Alert.alert(
          'Warning',
          'You should to install WhatsApp for send the message',
        );
      });
    setMessage('');
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerBlue}>
        <Text style={styles.textHelp}>DO YOU NEED HELP?</Text>
      </View>
      <View style={styles.marginForm}>
        <Input
          type="textarea"
          value={message}
          onChangeText={value => setMessage(value)}
          placeholder="Tell us about your problem"
        />
      </View>
      <View style={styles.button}>
        <Button
          type="PRIMARY_BUTTON"
          customStyleContainer={styles.buttonWidth}
          text="SEND WHATSAPP"
          onPress={() => sendOnWhatsApp()}
          disabled={!message}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBlue: {
    backgroundColor: PRIMARY_COLOR,
    borderBottomRightRadius: 80,
    height: 200,
    overflow: 'hidden',
  },
  textHelp: {
    fontFamily: PRIMARY_FONT_MEDIUM,
    color: '#FFFFFF',
    fontSize: 45,
    marginLeft: 35,
    marginTop: 50,
  },
  button: {
    marginTop: 30,
  },
  marginForm: {
    marginHorizontal: 20,
    marginTop: 40,
  },
});
export default HelpScreen;
