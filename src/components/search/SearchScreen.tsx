import React from 'react';
import {FlatList, StyleSheet, TextInput, View, Text} from 'react-native';

const SearchScreen = () => {
  return (
    <View style={s.wrapper}>
      <View style={s.inputWrapper}>
        <TextInput
          style={s.input}
          placeholder="Search Podcast"
          selectionColor={'#00FFFF'}
        />
      </View>

      <FlatList
        style={s.list}
        data={[{id: 1}, {id: 2}]}
        renderItem={() => (
          <View style={s.flatList}>
            <View style={s.icon} />
            <View>
              <Text style={s.title}>Joe Rogan</Text>
              <Text>This is the subtitle</Text>
              <Text>400 episodes</Text>
            </View>
          </View>
        )}
        keyExtractor={item => String(item.id)}
      />
    </View>
  );
};

const s = StyleSheet.create({
  input: {
    height: 40,
    flex: 1,
    backgroundColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 5,
    fontSize: 16,
  },
  inputWrapper: {
    height: 40,
    marginHorizontal: 10,
  },
  list: {
    minHeight: '100%',
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  flatList: {
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  icon: {
    height: 70,
    width: 70,
    backgroundColor: 'blue',
    borderRadius: 10,
    marginRight: 10,
  },
  title: {
    fontWeight: 'bold',
  },
});

export default SearchScreen;
