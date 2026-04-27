import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>◆</Text>
      </View>
      <Text style={styles.appName}>HABI</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginBottom: 24,
  },
  icon: {
    fontSize: 80,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  appName: {
    fontSize: 32,
    fontWeight: '700',
    color: '#ffffff',
    letterSpacing: 2,
  },
});
