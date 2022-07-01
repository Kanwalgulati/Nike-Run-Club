import {View, Text, Pressable, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Avatar} from 'react-native-elements';
import styles from './styles';
import {validateInput} from '../../../helper/func';

const avatarProps = {
  size: 120,
  rounded: true,
  title: 'Start',
  onPress: () => {
    console.warn('Working');
  },
  activeOpacity: 0.7,
  titleStyle: styles.avatarTitle,
  containerStyle: styles.avatarContainer,
};

const RunScreen = () => {
  const [metricValue, setMetricValue] = useState('1.0');
  const [toggle, setToggle] = useState('Distance');
  const [metricUnit, setMetricUnit] = useState('Kilometers');

  const handleMetricChange = (text = '') => {
    //For Distance
    //to round of the number to 1 decimal places
    if (validateInput(text, toggle)) {
      if (text[0] === '.' || text[0] === ':') {
        text = '0' + text;
      }
      if (text[text.length - 1] === '.' || text[text.length - 1] === ':') {
        text = text + '0';
      }
      setMetricValue(text);
    }
  };

  const toggleHandler = () => {
    if (toggle === 'Distance') {
      setToggle('Time');
      setMetricUnit('Hours : Minutes ');
      setMetricValue('01:00');
    } else {
      setToggle('Distance');
      setMetricUnit('Kilometers');
      setMetricValue('1.0');
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View onPress={() => console.warn('Pressed')}>
        <TextInput
          style={{...styles.metricValue}}
          keyboardType="decimal-pad"
          value={metricValue}
          onChangeText={handleMetricChange}
        />

        <Text style={styles.KMStyle}>{metricUnit}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Avatar {...avatarProps} />
        <Pressable style={styles.distanceContainer} onPress={toggleHandler}>
          <Text style={styles.distanceText}>{toggle}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RunScreen;
