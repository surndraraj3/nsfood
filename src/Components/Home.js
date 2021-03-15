import React, {Component} from 'react';
import {Image, Text, View, FlatList, StyleSheet, Dimensions, Button, TouchableHighlight} from 'react-native';
import {LoadHomePageData} from '../Services/homepageServices';
import SearchBar from './searchbar'

const { width } = Dimensions.get("window");



export default class Home extends Component {
  state = {
    productsData: [],
  };
  async componentDidMount() {
    const loadProducts = await new LoadHomePageData();
    this.setState(({productsData}) => ({
      productsData: loadProducts.result.result,
    }));
  }
  render() {
    return (
      <View>
        <View style={{backgroundColor: "#e23744", padding:10, justifyContent:'center'}}><SearchBar /></View>
        <FlatList 
        contentContainerStyle={{ paddingLeft: 5, marginTop: 22 }}
        data={this.state.productsData}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return(
            <View id={index} style={{ width: width -20, borderWidth:1, borderRadius:10, borderColor:'#d9c7f0',  marginBottom: 20}}>
            <View style={{flexDirection:'row', padding: 20, justifyContent:'space-between'}}>
              <View style={{flexDirection:'column'}}>
              <Image
                style={{width: 80, height:80}}
                source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
              />
              </View>
              <View style={{flexDirection:'column'}}>
                <View style={{flexDirection:'row'}}>
                  <Text style={{fontWeight:'bold', alignSelf:'flex-start', paddingRight:10}}>Product</Text>
                  <Text style={{alignSelf:'flex-end', alignContent:'flex-end'}}>{item.productName}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                  <Text style={{fontWeight:'bold', alignSelf:'flex-start', alignContent:'flex-start',flex:0.5,paddingRight:10}}>Price</Text>
                  <Text style={{alignItems:'flex-end', alignContent:'flex-start', flex:1}}>{'\u20B9'} {item.price}</Text>
                </View>
              </View>
              
            </View>
            <View style={{flexDirection:'row', paddingLeft: 20, paddingBottom:20}}>
              <Text style={{flexWrap:'wrap', alignSelf:'flex-start'}}>{'\u2B24'} {item.description}</Text>
              </View>
              <View style={{justifyContent:'flex-end', alignContent:'flex-end', alignItems:'flex-end'}}>
              <TouchableHighlight style={{ width: width /3, height: width / 8, margin:10,alignContent:'center',justifyContent:'center', borderRadius:10, borderWidth:1 }}>
                <Text style={{alignSelf:'center', alignItems:'center', justifyContent:'center', color:'#000', fontSize:16, fontWeight:'bold'}}>ADD TO CART</Text>
              </TouchableHighlight>
              </View>
            </View>
          );
        }}
        />
      </View>
    );
  }
}

