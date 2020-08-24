import React from 'react';
import {
  StyleSheet, SafeAreaView,
} from 'react-native';


import LottieView from 'lottie-react-native';
import {Dimensions } from "react-native";

export default class LottieLogo extends React.Component {

  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    //this.animation.play(30, 420);
  }
  

  render() {
    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);
    return (
        
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          resizeMode="cover"
          source={require('../data/scan-face.json')}
          style={styles.lottie}
          //autoSize
        />
      
    );
    
    
  }
}

const styles = StyleSheet.create({
 lottie: {
   marginTop: '-20%'
    /*width: this.screenWidth,
    height: this.screenHeight,
    flex: 1,
    marginTop: -150*/
    /*flex: 2,
    alignItems: 'flex-start'*/
 }
});

