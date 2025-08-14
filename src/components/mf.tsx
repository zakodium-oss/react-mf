import { Format, parse, toDisplay } from 'mf-parser';
import type { CSSProperties, DetailedHTMLProps, HTMLAttributes } from 'react';
import { memo, useMemo } from 'react';

const STYLE_SUPERIMPOSE: CSSProperties = {
  flexDirection: 'column',
  display: 'inline-flex',
  justifyContent: 'center',
  textAlign: 'left',
  verticalAlign: 'middle',
};

const STYLE_SUPERIMPOSE_SUP_SUB = {
  lineHeight: 0.8,
  fontSize: '80%',
};

type MFPart = ReturnType<typeof parse>[number];

export interface MFProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  /**
   * Molecular formula to display
   */
  mf: string;
}

export const MF = memo(function MF(props: MFProps) {
  const { mf, ...otherProps } = props;
  const parsedResult = useMemo(() => {
    let parsed;
    try {
      parsed = parse(mf);
    } catch {
      // If not well formatted, just display the raw value.
      return mf;
    }
    const displayed = toDisplay(parsed);
    return displayed.map(getComponent);
  }, [mf]);
  return <span {...otherProps}>{parsedResult}</span>;
});

function getComponent(element: MFPart, index: number) {
  switch (element.kind) {
    case Format.SUBSCRIPT: {
      return <sub key={index}>{element.value}</sub>;
    }
    case Format.SUPERSCRIPT: {
      return <sup key={index}>{element.value}</sup>;
    }
    case Format.SUPERIMPOSE: {
      return (
        <span key={index} style={STYLE_SUPERIMPOSE}>
          <span style={STYLE_SUPERIMPOSE_SUP_SUB}>{element.over}</span>
          <span style={STYLE_SUPERIMPOSE_SUP_SUB}>{element.under}</span>
        </span>
      );
    }
    default:
      return element.value;
  }
}
