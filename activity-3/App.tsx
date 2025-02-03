import React, {useState} from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

type ItemData = {
  id: string;
  title: string;
};

const DATA: ItemData[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad513abb28ba',
    title: 'Morning',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd9123aa97f63',
    title: 'Stretching',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14555371e29d72',
    title: 'Drinking coffee',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad7553abb28ba',
    title: 'Eat breakfast',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd9134aa97f63',
    title: 'Taking bath',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14551171e29d72',
    title: 'Watching anime',
  }, {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad2253abb28ba',
    title: 'Playing games',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd919aa97f63',
    title: 'Drink water',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e2089d72',
    title: 'Playing games',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3a567d53abb28ba',
    title: 'Afternoon',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd93451aa97f63',
    title: 'Eat dinner',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571623e29d72',
    title: 'Checking social media',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53ab1234b28ba',
    title: 'Taking nap',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd95431aa97f63',
    title: 'Playing games',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571767e29d72',
    title: 'Watching anime',
  }, {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2778ba',
    title: 'Evening',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd9189aa97f63',
    title: 'Eat dinner',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14557199e29d72',
    title: 'Watching Tv',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14557142343e29d72',
    title: 'Sleeping',
  },

];

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const COLORS = ['#f9c2ff', '#a0d5ff', '#ffc0cb', '#ffe4e1'];

const Item = ({item, onPress, backgroundColor, textColor, COLORS}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({item, index}: {item: ItemData}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' :  COLORS [index % COLORS.length];
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;