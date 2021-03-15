import React, {Component} from 'react';
import { Text, View, Dimensions} from 'react-native';

const {width} = Dimensions.get("window");

export default class SearchBar extends Component {
    render() {
        return(
            <View style={{ width: width-20 , paddingTop: 10, height:40, borderWidth:0.1, borderRadius:10, elevation:5, backgroundColor:'#fff'}}>
                <Text style={{textAlign:'center'}}>Search Items</Text>
            </View>
        )
    }
}