import React, {FC, useCallback} from 'react';
import {Block} from '@simple/Block';
import {Text} from '@simple/Text';
import {FlatList, ListRenderItem} from 'react-native';
// import {Button} from '@simple/Button';
// import {UseOpenAI} from '../useOpenAI';
// import {UseAudioRecording} from '../useAudioRecording';
// import testSpeech from '../../../assets/jfk.wav';
// import {UseWhisper} from '../UseWhisper';
// import {DocumentDirectoryPath, writeFile} from "react-native-fs";
interface Props {
  data: string[];
}
export const TranscriptionsList: FC<Props> = ({data}) => {
  const renderTranscriptionsList: ListRenderItem<any> = useCallback(
    ({item, index}) => {
      return (
        <Block
          paddingVertical={10}
          paddingHorizontal={10}
          flexDirection={'row'}
          justifyContent={'center'}
          alignItems={'center'}>
          <Text marginRight={10}>{index}</Text>
          <Text>{item}</Text>
        </Block>
      );
    },
    [],
  );
  return (
    <Block width={'100%'} alignItems={'center'} flex={1}>
      <Text marginVertical={20}>Transcriptions List</Text>
      <FlatList
        data={data}
        scrollEnabled={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderTranscriptionsList}
      />
    </Block>
  );
};
