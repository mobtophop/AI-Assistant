import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import React, {FC, ReactNode} from 'react';
import {PaddingStyle} from '@src/types/BasicTypes/PaddingStyle';
import {MarginStyle} from '@src/types/BasicTypes/MarginStyle';
import {PositionStyle} from '@src/types/BasicTypes/PositionStyle';
import {FlexStyle} from '@src/types/BasicTypes/FlexStyle';
import {BorderStyle} from '@src/types/BasicTypes/BorderStyle';
import {BasicStyle} from '@src/types/BasicTypes/BasicStyle';
import {CombinedType} from '@src/types/BasicTypes/CombinedType';

interface Props extends CombinedType {
  onPress?: () => void;
  children?: ReactNode;
}

const StyledButton = styled(TouchableOpacity)<Props>`
  ${BasicStyle}
  ${MarginStyle};
  ${PaddingStyle};
  ${FlexStyle};
  ${BorderStyle};
  ${PositionStyle};
`;

export const Button: FC<Props> = ({children, onPress, ...rest}) => {
  let disabled = false;
  const callPress = () => {
    if (!disabled) {
      if (onPress) {
        onPress();
      }
      disabled = true;
    }
    setTimeout(() => {
      disabled = false;
    }, 500);
  };
  return (
    <StyledButton onPress={callPress} {...rest}>
      {children}
    </StyledButton>
  );
};
