import React, {SetStateAction, useCallback, useEffect, useMemo, useRef, useState,} from 'react';
import Voice, {SpeechErrorEvent, SpeechResultsEvent,} from '@react-native-voice/voice';
import {useFocusEffect} from '@react-navigation/native';
import {debounce} from 'lodash';

type State = {
    recognized: string;
    pitch: string;
    error: string;
    end: string;
    started: boolean;
    results: string[];
    partialResults: string[];
};

interface ReturnObj {
    message: string;
    handleStartRecognizing: () => Promise<void>;
    handleStopRecognizing: () => Promise<void>;
}

const initialState: State = {
    recognized: '',
    pitch: '',
    error: '',
    end: '',
    started: false,
    results: [],
    partialResults: [],
};

export const useRNVoice = (
    setResults: React.Dispatch<SetStateAction<string>>,
): ReturnObj => {
    const [state, setRecognitionState] = useState<State>(initialState);
    const [message, setMessage] = useState<State>("");
    const throttled = useRef(debounce((newValue) => {
            if (newValue) {
                setMessage(newValue);
                handleStopRecognizing();
            }
        }, 1500)
    )

    useEffect(() => throttled.current(state.results[0] || ""), [state.results?.[0]])

    const handleOnSpeechStart = useCallback((e: any) => {
        setRecognitionState(prevState => {
            const newState = {...prevState};
            newState.started = true;
            return newState;
        });
    }, []);

    const handleOnSpeechRecognized = useCallback(() => {
        setRecognitionState(prevState => {
            const newState = {...prevState};
            newState.recognized = '√';
            return newState;
        });
    }, []);

    const handleOnSpeechEnd = useCallback(() => {
        setRecognitionState(prevState => {
            const newState = {...prevState};
            newState.end = '√';
            newState.started = false;
            return newState;
        });
    }, []);

    const handleOnSpeechResults = useCallback(
        (e: SpeechResultsEvent) => {
            if (e.value) {
                setRecognitionState(prevState => {
                    const newState = {...prevState};
                    newState.results = e.value || [];
                    return newState;
                });
            }
        },
        [],
    );

    const handleOnSpeechPartialResults = useCallback((e: SpeechResultsEvent) => {
        setRecognitionState(prevState => {
            const newState = {...prevState};
            newState.partialResults = e.value || [];
            return newState;
        });
    }, []);

    const handleOnSpeechError = useCallback((e: SpeechErrorEvent) => {
        setRecognitionState(prevState => {
            const newState = {...prevState};
            newState.error = JSON.stringify(e.error);
            newState.started = false;
            return newState;
        });
    }, []);

    const handleOnSpeechVolumeChanged = useCallback((e: any) => {
        setRecognitionState(prevState => {
            const newState = {...prevState};
            newState.pitch = e.value;
            return newState;
        });
    }, []);

    const handleStartRecognizing = useCallback(async () => {
        setRecognitionState(initialState);
        try {
            await Voice.start('en-US');
        } catch (e) {
            console.error(e, 'error starting recognizing');
        }
    }, []);

    const handleStopRecognizing = useCallback(async () => {
        try {
            await Voice.stop();
        } catch (e) {
            console.error(e);
        }
    }, [setResults, state.results]);

    useEffect(() => {
        Voice.onSpeechStart = handleOnSpeechStart;
        Voice.onSpeechRecognized = handleOnSpeechRecognized;
        Voice.onSpeechEnd = handleOnSpeechEnd;
        Voice.onSpeechError = handleOnSpeechError;
        Voice.onSpeechResults = handleOnSpeechResults;
        Voice.onSpeechPartialResults = handleOnSpeechPartialResults;
        Voice.onSpeechVolumeChanged = handleOnSpeechVolumeChanged;
    }, []);

    useFocusEffect(
        useCallback(() => {
            return () => {
                Voice.destroy().then(Voice.removeAllListeners);
            };
        }, []),
    );

    return useMemo(
        () => ({
            message,
            handleStartRecognizing,
            handleStopRecognizing,
        }),
        [
            handleStartRecognizing,
            handleStopRecognizing,
            message,
        ],
    );
};
