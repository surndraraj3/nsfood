import React, {Component} from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { Button, Icon } from '@ui-kitten/components';
import {LoadHomePageData} from '../Services/homepageServices';
import SearchBar from './searchbar';
import CONFIG from '../Services/config';
import LinearGradient from 'react-native-linear-gradient';

const {width} = Dimensions.get('window');

export default class Home extends Component {
  state = {
    productsData: [],
    count:0
  };
  async componentDidMount() {
    const loadProducts = await new LoadHomePageData();
    this.setState(({productsData}) => ({
      productsData: loadProducts.result.result,
      count:loadProducts.result.result.length
    }));
  }
  render() {
    const imageBasePath = CONFIG.productApiUrls.getProductsImagePath;
    const {productsData, count} = this.state;
    return (
      <View style={styles.wrapper}>
            <View style={styles.filterWrapper}>
                <Text style={styles.proNum}>{count} PRODUCTS FOUND</Text>
                <TouchableOpacity>
                    {/* <Icon style={{ height: 32, width: 32 }} fill="#000"  /> */}
                </TouchableOpacity>
            </View>
            <ScrollView><View style={styles.productWrapper}>
                {
                    productsData.map((productsData, index) => {
                        return <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }}
                            colors={['#FFFFFF', '#D3D3D3']}
                            style={styles.card} key={`product-list-${index}`}>
                            <TouchableOpacity>
                                <Image style={styles.icon} source={{uri: `${imageBasePath}${productsData.icon}`}} />
                                <Text style={styles.title}>{productsData.title}</Text>
                                <Text style={styles.desc}>{productsData.productName}</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                                    <Text style={styles.amount}>{'\u20B9'} {productsData.price}</Text>
                                    {/* <TouchableOpacity>
                                        <Icon style={{ height: 25, width: 25 }} fill="#000" />
                                    </TouchableOpacity> */}
                                </View>
                            </TouchableOpacity>
                        </LinearGradient>
                    })
                }
            </View>
            </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
  },
  filterWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  proNum: {
    fontSize: 13,
    color: '#444',
    fontWeight: 'bold',
  },
  productWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  icon: {
    height: 120,
    width: 120,
    alignSelf: 'center',
  },
  card: {
    elevation: 3,
    height: 250,
    //backgroundColor: '#fff',
    borderRadius: 5,
    padding: 20,
    marginBottom: 22,
    width: '47.4%',
    shadowColor: '#444',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#444',
  },
  desc: {
    fontSize: 13,
    flexWrap: 'wrap',
    fontWeight:'bold'
  },
  price: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  amount: {
    fontSize: 18,
    marginTop: 5,
  },
});
