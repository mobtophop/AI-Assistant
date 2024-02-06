import React, {FC, useCallback} from 'react';
import {Block} from '@simple/Block';
import {Text} from '@simple/Text';
import {FlatList, ListRenderItem} from 'react-native';
import {Button} from '@simple/Button';

interface Props {
  data: any;
  getTranscription: (a: any) => Promise<any>;
  playSpeech: (speech: string) => any;
}
export const SpeechesList: FC<Props> = ({
  data,
  getTranscription,
  playSpeech,
}) => {
  const renderSpeechesList: ListRenderItem<any> = useCallback(
    ({item, index}) => {
      const handleTranscription = async () => {
        try {
          const transcription = await getTranscription(item);
          console.log('handleTranscript', transcription);
          // return transcription;
        } catch (e) {
          console.error('Error in transcription handler', e);
        }
      };
      const handlePlay = async () => {
        try {
          const msg = await playSpeech(item);
          console.log('handleTranscript', msg);
        } catch (e) {
          console.error('Error in transcription handler', e);
        }
      };
      return (
        <Block flexDirection={'row'} marginBottom={10}>
          <Text marginRight={20}>{'Speech' + index.toString()}</Text>
          <Button
            onPress={handleTranscription}
            backgroundColor={'magenta'}
            marginRight={10}
            paddingHorizontal={10}
            paddingVertical={5}>
            <Text>Get transcription</Text>
          </Button>
          <Button
            onPress={handlePlay}
            backgroundColor={'pink'}
            marginRight={10}
            paddingHorizontal={10}
            paddingVertical={5}>
            <Text>Play</Text>
          </Button>
        </Block>
      );
    },
    [getTranscription],
  );
  return (
    <Block width={'100%'} alignItems={'center'} flex={1}>
      <Text marginVertical={20}>Speeches List</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderSpeechesList}
        scrollEnabled={false}
      />
    </Block>
  );
};
