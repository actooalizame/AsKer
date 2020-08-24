/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import LottieLogo from './src/components/LottieLogo';

export default class App extends React.Component {

  _handlePress = () => {
    console.log('hola');
   // this.animation.play();
  }

  render() {
    return (
      <SafeAreaView style = {styles.area}>
         <LottieLogo/>
        <TouchableOpacity onPress={this._handlePress}>
          <Text style={styles.txt}>ZUKUNFT</Text>
        </TouchableOpacity>
        
        
      </SafeAreaView>
        
      
    );
    
    
  }
}

const styles = StyleSheet.create({

  area: {
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center',
    backgroundColor:'#000'
  },
  txt: {
    marginBottom: '10%',
    fontSize: 29,
    color: '#fafafa'
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

