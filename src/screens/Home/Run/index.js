import {View, Text, Pressable} from 'react-native';
import React from 'react';

const RunScreen = () => {
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* Google Maps API/Image */}
      {/* Metrics - Button to change the matric value */}
      {/* Start Button*/}
      {/* Toggle Button to change the metric from distance or time*/}
      <Pressable
        onPress={() => console.log('Pressed')}
        android_disableSound
        android_ripple={{color: '#c45656', borderless: true}}>
        <Text
          style={{
            backgroundColor: '#e86c6c',
            padding: 10,
            width: 100,
            borderRadius: 20,
            textAlign: 'center',
          }}>
          1.23
        </Text>
      </Pressable>
    </View>
  );
};

export default RunScreen;
