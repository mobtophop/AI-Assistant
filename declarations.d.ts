declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  interface MySVGProps extends SvgProps {
    myColor: string;
  }
  const content: React.FC<MySVGProps>;
  export default content;
}

declare module '*.png' {
  const value: any;
  export = value;
}

declare module '*.mp3' {
  const value: any;
  export = value;
}

declare module '*.wav' {
  const value: any;
  export = value;
}

declare module '*.bin' {
  const value: any;
  export = value;
}
