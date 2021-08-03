import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {FONTS} from '../constants';

const Header = ({ containerStyle, title }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        ...containerStyle,
      }}
    >
      {/* Left */}

      {/* Title */}
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{...FONTS.h3}}>
          {title}
        </Text>
      </View>

      {/* Right */}
    </View>
  )
}

export default Header;