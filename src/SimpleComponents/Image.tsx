import React from 'react';
import styled from 'styled-components/native';
import {MarginStyle} from '@src/types/BasicTypes/MarginStyle';
import {CombinedType} from '@src/types/BasicTypes/CombinedType';
import {PositionStyle} from '@src/types/BasicTypes/PositionStyle';
import {BasicStyle} from '@src/types/BasicTypes/BasicStyle';
import {PaddingStyle} from '@src/types/BasicTypes/PaddingStyle';
import {FlexStyle} from '@src/types/BasicTypes/FlexStyle';
import {BorderStyle} from '@src/types/BasicTypes/BorderStyle';

interface ImageInterface extends CombinedType {
  tintColor?: string;
  onError?: () => void;
  onLoad?: () => void;
  source: {uri: string} | React.ReactNode;
}

const StyledImage = styled.Image<ImageInterface>`
  ${BasicStyle}
  ${MarginStyle};
  ${PaddingStyle};
  ${FlexStyle};
  ${BorderStyle};
  ${PositionStyle};
`;

export const Image: React.FC<ImageInterface> = ({
  source,
  resizeMode,
  ...rest
}) => <StyledImage source={source} resizeMode={resizeMode} {...rest} />;
