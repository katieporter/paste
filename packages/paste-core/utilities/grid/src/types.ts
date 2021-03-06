import {ResponsiveValue} from 'styled-system';
import {FlexboxProps, LayoutProps, PaddingProps, Space, SpaceProps} from '@twilio-paste/style-props';
import {FlexProps, Vertical} from '@twilio-paste/flex';

export interface GridProps extends SpaceProps {
  children: NonNullable<React.ReactNode>;
  gutter?: Space;
  vertical?: Vertical;
}

export type ColumnMinWidth = ResponsiveValue<'100%' | '0'>;
export type ColumnWidthSpan = ResponsiveValue<string>;
export type ColumnOffsetOptions = number;
export type ColumnOffset = ResponsiveValue<ColumnOffsetOptions>;
export type ColumnSpanOptions = number;
export type ColumnSpan = ResponsiveValue<ColumnSpanOptions>;

export interface ColumnStyleProps extends Omit<LayoutProps, 'minWidth' | 'width'>, FlexboxProps, PaddingProps {
  marginLeft?: ResponsiveValue<string>;
  minWidth?: ColumnMinWidth;
  width?: ColumnWidthSpan;
}

export interface ColumnProps
  extends Omit<FlexProps, 'display' | 'width' | 'minWidth' | 'marginLeft'>,
    ColumnStyleProps {
  count?: number;
  gutter?: Space;
  offset?: ColumnOffset;
  span?: ColumnSpan;
  vertical?: Vertical;
}
