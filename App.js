/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,Button,
  Text,
  StatusBar,
} from 'react-native';

import * as RNIap from 'react-native-iap';

//here set project id
const itemSkus = Platform.select({
  ios: [
    'com.test.dummy'
  ],
  android: [
    'com.test.dummy'
  ]
});
export default class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      receipt: '',
      availableItemsMessage: '',
    };
   this.getSubscriptions = this.getSubscriptions.bind(this);
    
}
  render() {
    return (
      <View>
  <Text>Hello world</Text>
  <Button
            onPress={this.getSubscriptions}
            title="getSubscriptions"
            color="#841584"
          />
            <Button
           
            onPress={this.requestSubscription}
            title="Press Me"
            color="#857500"
          />
      </View>
    
    )
  }

  getSubscriptions = async () => {
  try {
    const products = await RNIap.getSubscriptions(itemSkus);
    // const products = await RNIap.getSubscriptions(itemSkus);
    console.log('Products', products);
    this.setState({ productList: products });
  } catch (err) {
    console.warn(err.code, err.message);
  }
};

requestSubscription = async () => {
  try {
  //  getItems()
    RNIap.requestSubscription("com.jshealth.monthly");
  } catch (err) {
    Alert.alert(err.message);
  }
};
 componentDidMount() {
  console.log('call componentDidMount')
}
};
getItems = async () => {
  try {
    const products = await RNIap.getProducts(itemSkus);
    // const products = await RNIap.getSubscriptions(itemSkus);
    console.log('Products', products);
    this.setState({ productList: products });
  } catch (err) {
    console.log(err.code, err.message);
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor:'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
 
});


