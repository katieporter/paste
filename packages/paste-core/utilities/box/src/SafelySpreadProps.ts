import {
  LAYOUT_PROPS,
  SPACE_PROPS,
  BACKGROUND_PROPS,
  BORDER_PROPS,
  SHADOW_PROPS,
  POSITION_PROPS,
  FLEXBOX_PROPS,
} from '@twilio-paste/style-props';

export const BOX_PROPS_TO_BLOCK = [
  ...LAYOUT_PROPS,
  ...SPACE_PROPS,
  ...BACKGROUND_PROPS,
  ...BORDER_PROPS,
  ...SHADOW_PROPS,
  ...POSITION_PROPS,
  ...FLEXBOX_PROPS,
  'backgroundColor',
  'borderColor',
  'className',
  'style',
];

export const safelySpreadBoxProps = (props: {}, compName: string): void => {
  const badProps = Object.keys(props).filter(prop => BOX_PROPS_TO_BLOCK.includes(prop));
  if (badProps.length > 0) {
    throw new Error(`${badProps.join(', ')} cannot be restyled for the ${compName} component`);
  }
};
