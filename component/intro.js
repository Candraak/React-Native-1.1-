import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Image,
} from 'react-native';
import Carousel from 'react-native-carousel-view';

export default class Intro extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={styles.container}>
          <Carousel
            width={375}
            height={300}
            delay={2000}
            indicatorAtBottom={true}
            indicatorSize={20}
            indicatorText="."
            indicatorColor="red"
            >
            <View style={styles.contentContainer}>
            <Text>Power Ranger</Text>
              <Image 
                source={require("../asset/img/hr1.png")}/>
            </View>
            <View style={styles.contentContainer}>
            <Text>Thor</Text>
              <Image
                  source={require("../asset/img/hr2.png")}/>
            </View>
            <View style={styles.contentContainer}>
            <Text>Wolferin</Text>
              <Image 
                  source={require("../asset/img/hr3.png")}/>
            </View>
            <View style={styles.contentContainer}>
              <Text>Hulk</Text>
              <Image 
                  source={require("../asset/img/hr4.png")}/>
            </View>
            <View style={styles.contentContainer}>
            <Text>Superman</Text>
              <Image 
                  source={require("../asset/img/hr5.png")}/>
            </View>
            <View style={styles.contentContainer}>
            <Text>Batman</Text>
              <Image 
                  source={require("../asset/img/hr6.png")}/>
            </View>
            <View style={styles.contentContainer}>
            <Text>Flash</Text>
              <Image 
                  source={require("../asset/img/hr7.png")}/>
            </View>
          </Carousel>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    borderWidth: 2,
    borderColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


AppRegistry.registerComponent('Intro', () => Intro);