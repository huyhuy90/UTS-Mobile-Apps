import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import IconMenu from '../component/IconMenu';

const Data = [
  {id: 1, label: 'Makanan'},
  {id: 2, label: 'Minuman'},
  {id: 3, label: 'Dessert'},
  {id: 4, label: 'Steak'},
  {id: 5, label: 'Soda'},
];

const MenuItems = ({data}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <IconMenu label={item.label} />}
      horizontal={true}
    />
  );
};

const Beranda = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.judul}>Selamat Datang</Text>
      </View>
      <View style={styles.menuContainer}>
        <MenuItems data={Data} />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Favorit')}
        style={styles.btn}>
        <Text style={styles.txt}>Ke Favorit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Beranda;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 70,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  judul: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  menuContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  btn: {
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'green',
  },
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
