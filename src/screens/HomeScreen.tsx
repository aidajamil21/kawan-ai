import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';

// TODO: Person 1 - Implement main chat interface with mascot
// TODO: Person 2 - Connect to recommendation engine
// TODO: Person 3 - Integrate voice services

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kawan AI Home Screen</Text>
      <Text style={styles.subtitle}>
        Main chat interface with mascot will be implemented here
      </Text>
      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>
          Chat Interface Placeholder
        </Text>
        <Text style={styles.instructions}>
          Person 1: Implement mascot and chat UI
        </Text>
        <Text style={styles.instructions}>
          Person 2: Connect cultural intelligence
        </Text>
        <Text style={styles.instructions}>
          Person 3: Add voice integration
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginBottom: 30,
  },
  placeholder: {
    flex: 1,
    backgroundColor: Colors.surface,
    borderRadius: 12,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.border,
    borderStyle: 'dashed',
  },
  placeholderText: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 20,
  },
  instructions: {
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginBottom: 8,
  },
});