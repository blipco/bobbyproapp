import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  View,
  Linking,
  Text,
  Button,
  Image
} from 'react-native';
import NavBarDesc from '../components/NavBarDesc';
import resume from '../assets/images/RESUME-8-12-19.png';

export default class ResumeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.handleResumeOnPress = this.handleResumeOnPress.bind(this);
  };

  handleResumeOnPress() {
    Linking.openURL('https://bobbypro.com/static/media/RESUME-3-12-19.600f7f31.pdf')
    .catch(err => console.error(err));
  };
  render() {
    return (
      <View style={{flex:1}}>
        <ScrollView style={styles.container}>
          <Image style={{alignSelf: 'center', height: 500, width: 4000}} source={resume} resizeMode='contain'/>
        </ScrollView>
        <NavBarDesc/>
      </View>
    )
  }
}

ResumeScreen.navigationOptions = {
  title: 'Resume',
};

const styles = StyleSheet.create({
  container: {
    
  },
});
