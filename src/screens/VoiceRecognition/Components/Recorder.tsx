import React, {FC} from 'react';
import {Block} from '@simple/Block';
import {Text} from '@simple/Text';
import {Button} from '@simple/Button';

interface Props {
  startRecord: () => any;
  stopRecord: () => any;
}
export const Recorder: FC<Props> = ({startRecord, stopRecord}) => {
  return (
    <Block width={'100%'} alignItems={'center'} flex={1}>
      <Block flexDirection={'row'}>
        <Button
          marginHorizontal={10}
          paddingHorizontal={10}
          paddingVertical={10}
          onPress={startRecord}
          backgroundColor={'green'}>
          <Text>Start record</Text>
        </Button>
        <Button
          marginHorizontal={10}
          paddingHorizontal={10}
          paddingVertical={10}
          onPress={stopRecord}
          backgroundColor={'green'}>
          <Text>Stop record</Text>
        </Button>
      </Block>
    </Block>
  );
};
