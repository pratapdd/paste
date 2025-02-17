import * as React from 'react';
import type {TextStyleProps} from '@twilio-paste/text';
import {Text, safelySpreadTextProps} from '@twilio-paste/text';
import type {HeadingVariants, HeadingProps, AsTags} from './types';
import {HeadingPropTypes} from './PropTypes';

function getHeadingProps(headingVariant?: HeadingVariants, marginBottom?: 'space0'): TextStyleProps {
  switch (headingVariant) {
    case 'heading10':
      return {
        marginBottom: marginBottom || 'space70',
        fontSize: 'fontSize90',
        fontWeight: 'fontWeightBold',
        lineHeight: 'lineHeight90',
      };
    case 'heading30':
      return {
        marginBottom: marginBottom || 'space50',
        fontSize: 'fontSize60',
        fontWeight: 'fontWeightBold',
        lineHeight: 'lineHeight60',
      };
    case 'heading40':
      return {
        marginBottom: marginBottom || 'space40',
        fontSize: 'fontSize40',
        fontWeight: 'fontWeightBold',
        lineHeight: 'lineHeight40',
      };
    case 'heading50':
      return {
        marginBottom: marginBottom || 'space30',
        fontSize: 'fontSize30',
        fontWeight: 'fontWeightBold',
        lineHeight: 'lineHeight30',
      };
    case 'heading60':
      return {
        marginBottom: marginBottom || 'space30',
        fontSize: 'fontSize20',
        fontWeight: 'fontWeightBold',
        lineHeight: 'lineHeight20',
      };
    /**
     * heading20 is out of order because its also default.
     * Default is at the bottom of switch statement for readability.
     */
    case 'heading20':
    default:
      return {
        marginBottom: marginBottom || 'space60',
        fontSize: 'fontSize70',
        fontWeight: 'fontWeightBold',
        lineHeight: 'lineHeight70',
      };
  }
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({as, children, display = 'block', element = 'HEADING', id, marginBottom, variant, ...props}, ref) => {
    return (
      <Text
        {...safelySpreadTextProps(props)}
        {...getHeadingProps(variant, marginBottom)}
        as={as}
        display={display}
        element={element}
        id={id}
        color="colorText"
        variant={variant}
        ref={ref}
      >
        {children}
      </Text>
    );
  }
);

Heading.displayName = 'Heading';

Heading.propTypes = HeadingPropTypes;

export type {HeadingProps, HeadingVariants, AsTags as asTags};
export {Heading, HeadingPropTypes};
