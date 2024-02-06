let speechID = 1;
export const getSpeechName = () => {
  const name = 'speech' + speechID.toString() + '.mp3';
  speechID++;
  return name;
};
