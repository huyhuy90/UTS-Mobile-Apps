import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const About = navigation => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tentang Kami</Text>
      <Text style={styles.description}>
        Kami adalah sebuah tim yang berkomitmen untuk memberikan solusi inovatif
        dalam pengembangan aplikasi mobile. Dengan pengalaman bertahun-tahun di
        industri ini, kami menggabungkan keahlian dalam desain, pengembangan,
        dan pengujian untuk menciptakan produk yang berkualitas tinggi dan
        memenuhi kebutuhan pengguna.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Menu')}>
        <Text style={styles.buttonText}>Kembali ke Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
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
