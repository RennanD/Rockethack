import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';

export default function Home() {
  return <View />;
}

Home.navigationOptions = {
  title: 'Hackathons',
  tabBarIcon: ({tintColor}) => (
    <Icon name="date-range" size={20} color={tintColor} />
  ),
};
