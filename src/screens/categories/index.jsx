/* eslint-disable prettier/prettier */

import { FlatList, SafeAreaView, View } from 'react-native';

import { CATEGORIES } from '../../constants/data/index';
import { CategoryItem } from '../../components';
import React from 'react';
import { styles } from './styles';

const Categories = ({ navigation, route }) => {
  const { itemId } = route.params;
  const onSelected = (item) => {
    navigation.navigate('Products', {
      categoryId: item.id,
      title: item.title,
    });
  };
  const filteredProducts = CATEGORIES.filter((product) => product.itemId === itemId);

  const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item) => item.id.toString();
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
};

export default Categories;
