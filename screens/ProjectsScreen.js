import React from 'react';
import {View, ScrollView, Platform, Text, Image, StyleSheet} from 'react-native';

export default class Projects extends React.Component {
  render() {
    return(
      <ScrollView>
        <View style={styles.projectsContainer}>
          <View style={styles.bobbyPro}>
            <View style={styles.projectTitleContainer}>
              <Text style={styles.projectTitle}>BobbyPro.com</Text>
            </View>
            <View style={styles.projectImageContainer}>
              <Image style={styles.projectImage} source={require('../assets/images/portfolio.png')} />
            </View>
            <View style={styles.descriptionContainer}>
              <View style={styles.descriptionTitleContainer}>
                <Text style={styles.descriptionTitle}>What It Does</Text>
              </View>
              <View style={styles.descContainer}>
                <Text style={styles.description}>
                You are visiting my portfolio app{'\n'}
                but I also have a web portfolio too!{'\n'}
                My portfolio is my way tell my story,{'\n'}
                show the world what I have learned, and{'\n'}
                what I am learning. I use my portfolio as a{'\n'}
                platform for me to experiement with new tech.
                </Text>
              </View>
              <View>
                <Text>What I Used</Text>
              </View>
              <View>
                <Text>
                My portfolio is created with Javascript, React{'\n'}
                and React Router. I designed it with custom CSS styling.
                </Text>
              </View>
            </View>
          <View>
        </View>
      </View>

      <View style={styles.nycRestaurantSpot}>
            <View style={styles.projectTitleContainer}>
              <Text style={styles.projectTitle}>NYC Restaurant Spot</Text>
            </View>
            <View style={styles.projectImageContainer}>
              <Image style={styles.projectImage} source={require('../assets/images/nyc.png')} />
            </View>
            <View style={styles.descriptionContainer}>
              <View style={styles.descriptionTitleContainer}>
                <Text style={styles.descriptionTitle}>What It Does</Text>
              </View>
              <View style={styles.descContainer}>
                <Text style={styles.description}>
                This application allows the user to search{'\n'}
                for a restaurant in New York City. It returns{'\n'}
                the basic restaurant information as well as{'\n'}
                the NYC health inspection details.{'\n'}
                It is the Germaphobe's guide to NYC restaurants.
                </Text>
              </View>
              <View>
                <Text>What I Used</Text>
              </View>
              <View>
                <Text>
                NYC Restaurant Spot was created with Javascript and{'\n'}
                React. I also used the YELP and the City of New York{'\n'}
                API. I designed it with Bootstrap and CSS styling.
                </Text>
              </View>
            </View>
          <View>
        </View>
      </View>

      <View style={styles.movieFinder}>
            <View style={styles.projectTitleContainer}>
              <Text style={styles.projectTitle}>Movie Finder</Text>
            </View>
            <View style={styles.projectImageContainer}>
              <Image style={styles.projectImage} source={require('../assets/images/movieFinder.png')} />
            </View>
            <View style={styles.descriptionContainer}>
              <View style={styles.descriptionTitleContainer}>
                <Text style={styles.descriptionTitle}>What It Does</Text>
              </View>
              <View style={styles.descContainer}>
                <Text style={styles.description}>
                The Movie Finder allows the user to search for a movie{'\n'}
                by the title. It shows 10 search results at a time. It{'\n'}
                also provides the user with more information about{'\n'}
                the movie like IMDB rating, description, and movie poster.
                </Text>
              </View>
              <View>
                <Text>What I Used</Text>
              </View>
              <View>
                <Text>
                My portfolio is created with Javascript, React and React{'\n'}
                Router. In order to render the movie information I used{'\n'}
                the OMDB API. I designed it with Bootstrap and custom CSS styling.
                </Text>
              </View>
            </View>
          <View>
        </View>
      </View>
    </View>
  </ScrollView>
    )
  }
}

Projects.navigationOptions = {
  title: 'Projects',
};

const styles = StyleSheet.create({
  projectsContainer: {
    alignItems: 'center',
  },
  projectImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
})