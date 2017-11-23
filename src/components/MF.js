import React from 'react';  // eslint-disable-line no-unused-vars
import MFParser, {Format} from 'mf-parser';

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


export default function MF(props) {
    let parsed;
    try {
        parsed = MFParser.parse(props.mf);
    } catch (e) { // if not well formatted we just display the value
        return <span>{props.mf}</span>;
    }
    let displayed = MFParser.toDisplay(parsed);
    return <span>
            {displayed.map((element, index) => getComponent(element, index))}
        </span>;

}

function getComponent(element, index) {
    switch (element.kind) {
        case Format.SUBSCRIPT:
            return <sub key={index}>{element.value}</sub>;
        case Format.SUPERSCRIPT:
            return <sup key={index}>{element.value}</sup>;
        case Format.SUPERIMPOSE:
            return (
                <span key={index} style={STYLE_SUPERIMPOSE}>
                    <sup style={STYLE_SUPERIMPOSE_SUP_SUB}>{element.over}</sup>
                    <sub style={STYLE_SUPERIMPOSE_SUP_SUB}>{element.under}</sub>
                </span>
            );

        default:
            return element.value;
    }
}
