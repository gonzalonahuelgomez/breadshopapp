import { Button, FlatList, SafeAreaView, Text, View } from 'react-native';

import { PRODUCTS } from '../../constants/data/index';
import { ProductItem } from '../../components';
import React from 'react';
import { THEME } from '../../constants/theme';
import { styles } from './styles';

const Products = ({ navigation, route }) => {
  const { categoryId } = route.params;

  const filteredProducts = PRODUCTS.filter((product) => product.categoryId === categoryId);

  const onSelected = (item) => {
    navigation.navigate('ProductDetail', {
      productId: item.id,
      title: item.title,
    });
  };

  const renderItem = ({ item }) => <ProductItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item) => item.id.toString();
  if(filteredProducts.length > 0)
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={filteredProducts}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          style={styles.contentList}
        />
      </SafeAreaView>
    );
  return (    
      <View style={styles.contNoStock}>
        <Text style={styles.titleNoStock}>No hay stock del producto</Text>
      </View>    
    )
};

export default Products;
