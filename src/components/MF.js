import React from 'react'; // eslint-disable-line no-unused-vars
import Format from 'mf-parser/src/Format';
import parse from 'mf-parser/src/parse';
import toDisplay from 'mf-parser/src/util/toDisplay';

const STYLE_SUPERIMPOSE = {
  flexDirection: 'column',
  display: 'inline-flex',
  justifyContent: 'center',
  textAlign: 'left',
  verticalAlign: 'middle'
};

const STYLE_SUPERIMPOSE_SUP_SUB = {
  lineHeight: 1,
  fontSize: '70%'
};

const mainStyle = {
  fontFamily: 'sans-serif'
};

export default function MF(props) {
  let parsed;
  try {
    parsed = parse(props.mf);
  } catch (e) {
    // if not well formatted we just display the value
    return <span style={mainStyle}>{props.mf}</span>;
  }
  let displayed = toDisplay(parsed);
  return (
    <span style={mainStyle}>
      {displayed.map((element, index) => getComponent(element, index))}
    </span>
  );
}

function getComponent(element, index) {
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
          <sup style={STYLE_SUPERIMPOSE_SUP_SUB}>{element.over}</sup>
          <sub style={STYLE_SUPERIMPOSE_SUP_SUB}>{element.under}</sub>
        </span>
      );
    }
    default:
      return element.value;
  }
}
