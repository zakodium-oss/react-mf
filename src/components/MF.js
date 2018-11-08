import React, { PureComponent } from 'react'; // eslint-disable-line no-unused-vars
import propTypes from 'prop-types';
import Format from 'mf-parser/src/Format';
import parse from 'mf-parser/src/parse';
import toDisplay from 'mf-parser/src/util/toDisplay';

const STYLE_SUPERIMPOSE = {
  flexDirection: 'column',
  display: 'inline-flex',
  justifyContent: 'center',
  textAlign: 'left',
  verticalAlign: 'middle',
};

const STYLE_SUPERIMPOSE_SUP_SUB = {
  lineHeight: 0.8,
  fontSize: '80%'
};

const mainStyle = {
  fontFamily: 'sans-serif'
};

export default class MF extends PureComponent {
  render() {
    const { mf, className, style } = this.props;
    let fullStyle = mainStyle;
    if (style) {
      fullStyle = Object.assign({}, mainStyle, style);
    }
    let parsed;
    try {
      parsed = parse(mf);
    } catch (e) {
      // if not well formatted we just display the value
      return (
        <span className={className} style={fullStyle}>
          {mf}
        </span>
      );
    }
    let displayed = toDisplay(parsed);
    return (
      <span className={className} style={fullStyle}>
        {displayed.map((element, index) => getComponent(element, index))}
      </span>
    );
  }
}

MF.propTypes = {
  mf: propTypes.string.isRequired,
  className: propTypes.string,
  style: propTypes.object
};

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
          <span style={STYLE_SUPERIMPOSE_SUP_SUB}>{element.over}</span>
          <span style={STYLE_SUPERIMPOSE_SUP_SUB}>{element.under}</span>
        </span>
      );
    }
    default:
      return element.value;
  }
}
