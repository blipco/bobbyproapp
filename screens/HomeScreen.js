import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
} from 'react-native';
import NavBarDesc from '../components/NavBarDesc';
import me from '../assets/images/bobby.jpg';

export default class HomeScreen extends React.Component {

  render() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            style={styles.bobbyImage}
            source={me}
          />
        </View>
        <View style={styles.getStartedContainer}>
          <Text style={styles.name}>
            BOBBY PATTERSON
          </Text>

          <Text style={styles.getStartedText}>
            If you're here that means you want to know more about me.
            
          </Text>
          <View>
            <Text>
              Please click here to send me 
              an email.  Im always up for 
              a cup of coffee and a conversation.
            </Text>
          </View>
        </View>
      </ScrollView>
      <NavBarDesc />
    </View>
    );
  };
}

HomeScreen.navigationOptions = {
  title: 'Bobby Pro App',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
  },
  bobbyImage: {
    width: 600,
    height: 200,
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 10,
    marginRight: 10,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 45,
    alignItems: 'center',
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
});
