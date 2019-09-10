import React from 'react';
import {
  StyleSheet,
  Platform,
  Text,
  View,
  Button,
  Linking
} from 'react-native';

export default class NavBarDesc extends React.Component {
  constructor(props) {
    super(props);

      this.handleTextOnPress = this.handleTextOnPress.bind(this);
      this.handleEmailOnPress = this.handleEmailOnPress.bind(this);
    };
    handleEmailOnPress() {
      Linking.openURL('mailto:blipco619@gmail.com')
        .catch(err => console.error(err));
    };
    handleTextOnPress() {
      Linking.openURL('sms:6197270822&body=Hi Bobby sweet app bro!')
        .catch(err => console.error(err));
    };
    render() {
      return (
      <View>
        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>
            Resume and Projects links below.{'\n'}
            Have a joke or a question for me?{'\n'}
            Send me an email or text.{'\n'}
          </Text>
          <View style={styles.contactButtons}>
            <Button style={styles.button} title='Text Me' onPress={this.handleTextOnPress} />
            <Button title='Email Me' onPress={this.handleEmailOnPress} />
          </View>
        </View>
      </View>
      )
    }
  };

const styles = StyleSheet.create({
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingTop: 10,
  },
  tabBarInfoText: {
    alignItems: 'center',
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
    paddingBottom: -10,
  },
  contactButtons: {
    paddingTop: 0,
    paddingBottom: 20,
    flexDirection: 'row',
  },
  button: {
    fontSize: 100,
  }
})
