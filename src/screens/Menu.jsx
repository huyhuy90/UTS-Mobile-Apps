import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';

const Data = [
  {id: 1, label: 'Makanan'},
  {id: 2, label: 'Minuman'},
  {id: 3, label: 'Dessert'},
  {id: 4, label: 'Steak'},
  {id: 5, label: 'Soda'},
];

const IconMenu = ({label}) => {
  return (
    <View style={styles.menuItem}>
      <Text>{label}</Text>
    </View>
  );
};

const Menu = ({navigation}) => {
  const MenuItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() =>
          navigation.navigate('DetailMenu', {menuName: item.label})
        }>
        <Text style={styles.menuItemText}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Restoran</Text>
      <FlatList
        data={Data}
        renderItem={({item}) => <MenuItem item={item} />}
        keyExtractor={item => item.id.toString()}
        style={styles.menuList}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Tentang')}>
        <Text style={styles.buttonText}>Kembali ke Tentang</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuList: {
    width: '80%',
    marginBottom: 20,
  },
  menuItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  menuItemText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
