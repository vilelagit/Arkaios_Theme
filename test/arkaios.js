import React from 'react';
import { Animated, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles';

export default function Tabs({ translateY }) {
  
  return (
    <Animated.View
      style={{
        transform: [{
          translateY: translateY.interpolate({
            inputRange: [0, 380],
            outputRange: [0, 30],
            extrapolate: 'clamp',
          }),
        }],
      }}
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.tabs}>
          <TouchableOpacity style={styles.cardtab}>
            <MaterialIcons name="person-add" size={26} color="#FFF" />
            <Text style={styles.textcardtab}>Test 1 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardtab}>
            <MaterialIcons name="person-add" size={26} color="#FFF" />
            <Text style={styles.textcardtab}>Test 2 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardtab}>
            <MaterialIcons name="person-add" size={26} color="#FFF" />
            <Text style={styles.textcardtab}>Test 3 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardtab}>
            <MaterialIcons name="person-add" size={26} color="#FFF" />
            <Text style={styles.textcardtab}>Test 4 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardtab}>
            <MaterialIcons name="person-add" size={26} color="#FFF" />
            <Text style={styles.textcardtab}>Test 5 </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Animated.View>
  );
}
