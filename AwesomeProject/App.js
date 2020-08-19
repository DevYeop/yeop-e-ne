
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  ToastAndroid,
  // StatusBar,
} from 'react-native';

export default class yeopWorld extends Component {

  constructor() {
    super();
    this.state = {
      imageLocation: './images/lockOn.png'
    }
  }

  _switchLockImage() {
    this.setState({
      imageLocation: './images/lockOff.png'
    })
  };

  _onProessButton() {
    ToastAndroid.show("토스트 토스트!", ToastAndroid.SHORT);
  };
  
  _showAlert(){
    alert('alert click');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}/>
        <View style={styles.bottomContainer}>

          <TouchableOpacity style={styles.lockContainer} activeOpacity={1} onPress={this._switchLockImage}>
            <Image style={styles.buttonLock} source={require('./images/lockOn.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.recordContainer} activeOpacity={1} onPress={this._onProessButton}>
            <Image style={styles.buttonRecord} source={require('./images/startRecord.png')} />
          </TouchableOpacity>

          <Image style={styles.buttonGraph} source={require('./images/chart.png')} />

        </View>

        {/*         
        <Text style={styles.title}>
          asdfasdf
        </Text> */}

      </View>

    )
  }
}

const showToast = () => {
  ToastAndroid.show("A pikachu appeared nearby !", ToastAndroid.SHORT);
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 9,
    backgroundColor: 'black'
  },

  bottomContainer: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    backgroundColor: 'white'
  },

  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: "#eaeaea"
  },

  lockContainer: {
    width: '20%',
    height: '100%',
    backgroundColor: 'red'
  },

  buttonLock: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  recordContainer: {
    width: '60%',
    height: '100%',
    backgroundColor: 'orange'
  },

  buttonRecord: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    backgroundColor: 'orange'
  },

  buttonGraph: {
    width: '20%',
    height: '100%',
    resizeMode: 'contain',
    backgroundColor: 'green'
  },

  title: {
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"

  }
})


// export default 로 하는 방식은 뭐가 다르냐