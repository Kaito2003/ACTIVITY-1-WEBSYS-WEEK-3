import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Morning',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Stretching',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Drinking coffee',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Eat breakfast',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Taking bath',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Watching anime',
  }, {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Playing games',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Drink water',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Playing games',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Afternoon',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Eat dinner',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Checking social media',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Taking nap',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Playing games',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Watching anime',
  }, {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Evening',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Eat dinner',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Watching Tv',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Sleeping',
  },

];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title}
       />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;