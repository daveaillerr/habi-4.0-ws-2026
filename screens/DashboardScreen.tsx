import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';

type DashboardScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Dashboard'
>;

export default function DashboardScreen({ navigation }: DashboardScreenProps) {
  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Hello, User</Text>
          <Text style={styles.date}>Welcome to your dashboard</Text>
        </View>

        <View style={styles.cardsContainer}>
          <View style={styles.card}>
            <Text style={styles.cardIcon}>📊</Text>
            <Text style={styles.cardTitle}>Analytics</Text>
            <Text style={styles.cardDescription}>
              View your activity and insights
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardIcon}>⚙️</Text>
            <Text style={styles.cardTitle}>Settings</Text>
            <Text style={styles.cardDescription}>Manage your preferences</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardIcon}>🔔</Text>
            <Text style={styles.cardTitle}>Notifications</Text>
            <Text style={styles.cardDescription}>
              Stay updated with alerts
            </Text>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>42</Text>
            <Text style={styles.statLabel}>Tasks</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Completed</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>In Progress</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
          activeOpacity={0.8}
        >
          <Text style={styles.logoutButtonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000000',
  },
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 16,
  },
  header: {
    marginTop: 24,
    marginBottom: 32,
  },
  greeting: {
    fontSize: 32,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
  },
  date: {
    fontSize: 16,
    color: '#b0b0b0',
    fontWeight: '400',
  },
  cardsContainer: {
    marginBottom: 32,
    gap: 16,
  },
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#333333',
  },
  cardIcon: {
    fontSize: 32,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 14,
    color: '#808080',
    fontWeight: '400',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
    gap: 12,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333333',
  },
  statNumber: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#808080',
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  footer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#000000',
    borderTopWidth: 1,
    borderTopColor: '#333333',
  },
  logoutButton: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '700',
  },
});
