import React, {useEffect, useState} from 'react';
import {useRNVoice} from '@src/screens/VoiceRecognition/hooks/useRNVoice.tsx';
import {Block} from '@simple/Block.tsx';
import {ControlsPanel} from '@src/screens/VoiceRecognition/Components/ControlsPanel.tsx';
import {Text} from '@simple/Text.tsx';
import {UseOpenAI} from '@src/screens/VoiceRecognition/hooks/useOpenAI.tsx';
import Tts from 'react-native-tts';
import {Scroll} from '@simple/Scroll.tsx';
import {ActivityIndicator} from "react-native";

export const VoiceAssistant = () => {
    const [recognitionIsActive, setRecognitionIsActive] = useState(false);
    const [aiSearchResult, setAiSearchResult] = useState('');

    const {
        message,
        handleStartRecognizing,
        handleStopRecognizing,
    } = useRNVoice();

    const {getAIresponseData, dataIsLoading} = UseOpenAI();

    useEffect(() => {
        Tts.addEventListener("tts-finish", () => {
            handleStartRecognizing();
        })
    }, []);

    const toggleStart = () => {
        Tts.stop();
        if (!recognitionIsActive) {
            setRecognitionIsActive(true);
            handleStartRecognizing();
        } else {
            setRecognitionIsActive(false);
            handleStopRecognizing();
        }
    }

    useEffect(() => {
        Tts.stop();
        if (typeof aiSearchResult === 'string' && aiSearchResult.length > 0) {
            Tts.speak(aiSearchResult);
        }
    }, [aiSearchResult]);

    useEffect(() => {
        Tts.setDefaultLanguage('en-US');
        Tts.setDefaultRate(0.5);
    }, []);

    useEffect(() => {
        if (message !== '') {
            getAIresponseData(message).then(completion => {
                setAiSearchResult(completion);
            });
        }
    }, [getAIresponseData, message]);
    return (
        <Block
            width={'100%'}
            height={'100%'}
            paddingHorizontal={15}
            paddingVertical={20}
            justifyContent={'space-between'}>
            <Text
                height={"50px"}
                multiline
                backgroundColor={'violet'}
                fontSize={'20px'}
                paddingVertical={5}
                marginBottom={10}
                paddingHorizontal={5}>
                {message !== '' ? message : 'Try to recognize something'}
            </Text>

            {
                dataIsLoading ? (
                    <Block width={"100%"} justifyContent={"center"}>
                        <ActivityIndicator
                            size="large"
                            color="#00ff00"/>
                    </Block>
                ) : (
                    <Scroll flex={1}>
                        <Text
                            backgroundColor={'purple'}
                            fontSize={'20px'}
                            paddingVertical={5}
                            marginBottom={10}
                            paddingHorizontal={5}>
                            {!aiSearchResult.length ? 'Try to recognize something' : aiSearchResult}
                        </Text>
                    </Scroll>
                )
            }

            <ControlsPanel
                toggleStart={toggleStart}
                recognitionIsActive={recognitionIsActive}
            />
        </Block>
    );
};
