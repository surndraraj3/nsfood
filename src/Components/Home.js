import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={{ width: 200, height: 200, flexDirection: 'row', margin: 24, borderRadius:10 }}>
        <Image
          style={{ width: 200, height: 200, position: 'absolute' }}
          source={{ uri: 'https://fallbacks.carbonads.com/nosvn/fallbacks/bf71897635266f6d9ac61f60389b3e1f.png' }}
        />
        <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', alignSelf: 'flex-end' }}>
          <Text style={{ color: 'white', fontSize: 20, margin: 6 }}>{'Title'}</Text>
          <Text style={{ color: 'white', margin: 6 }}>{'Subtitle'}</Text>
        </View>
      </View>
    );
  }
}

// export default Home;