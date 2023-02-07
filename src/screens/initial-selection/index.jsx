/* eslint-disable prettier/prettier */

import { FlatList, SafeAreaView, View } from 'react-native';

import { INITIAL } from '../../constants/data/index';
import { InitialItem } from '../../components';
import React from 'react';
import { styles } from './styles';

const InitialSelection = ({ navigation }) => {
  const onSelected = (item) => {
    navigation.navigate('Categories', {
      itemId: item.id,
      title: item.title,
    });
  };
  const renderItem = ({ item }) => <InitialItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={INITIAL}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.containerList}
        contentContainerStyle={styles.contentContainerList}
      />
    </SafeAreaView>
  );
};

export default InitialSelection;
