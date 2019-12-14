import {SPACE_PROPS, TYPOGRAPHY_PROPS, OVERFLOW_PROPS} from '@twilio-paste/style-props';

export const TEXT_PROPS_TO_BLOCK = [
  ...SPACE_PROPS,
  ...TYPOGRAPHY_PROPS,
  ...OVERFLOW_PROPS,
  'display',
  'textColor',
  'verticalAlign',
  'className',
  'style',
];

export const safelySpreadTextProps = (props: {}, compName: string): void => {
  const badProps = Object.keys(props).filter(prop => TEXT_PROPS_TO_BLOCK.includes(prop));
  if (badProps.length > 0) {
    throw new Error(`${badProps.join(', ')} cannot be restyled for the ${compName} component`);
  }
};
