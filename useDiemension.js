import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

export function useDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(Dimensions.get('window'));

  const onChange = ({ window }) => {
    setWindowDimensions(window);
  };

  useEffect(() => {
    Dimensions.addEventListener('change', onChange);

    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  }, [Dimensions]);

  return windowDimensions;
}
