type borderStyle = 'solid' | 'dotted' | 'dashed';
export interface BorderTypes {
  borderBottomWidth?: number | string;
  borderLeftWidth?: number | string;
  borderRightWidth?: number | string;
  borderTopWidth?: number | string;
  borderWidth?: number | string;
  borRad?: string;
  borderColor?: string;
  borderStyle?: borderStyle;

  borderLeftColor?: string;
  borderBottomLeftRadius?: string;
  borderBottomRightRadius?: string;

  borderBottomColor?: string;

  borderRightColor?: string;

  borderTopColor?: string;
  borderTopLeftRadius?: string;
  borderTopRightRadius?: string;
}
