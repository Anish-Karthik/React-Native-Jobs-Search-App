import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import styles, { btnImg } from './screenheader.style';

interface ScreenHeaderBtnProps {
  iconUrl: string;
  dimension: string;
  handlePress?: () => void;
}

const ScreenHeaderBtn:  React.FC<ScreenHeaderBtnProps> = ({
  iconUrl,
  dimension,
  handlePress,
}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      {/* @ts-ignore */}
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn