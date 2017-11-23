import React, {PureComponent} from 'react';  // eslint-disable-line no-unused-vars

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


export default class MF extends PureComponent {
    render() {
        let mf = this.props.mf;
        let parsed = MFParser.parse(mf);
        let displayed = MFParser.toDisplay(parsed);


        return <span>
            {displayed.map((element) => getComponent(element))}
        </span>;
    }
}

function getComponent(element) {
    switch (element.kind) {
        case Format.SUBSCRIPT:
            return <sub>{element.value}</sub>;
        case Format.SUPERSCRIPT:
            return <sup>{element.value}</sup>;
        case Format.SUPERIMPOSE:
            return (
                <span style={STYLE_SUPERIMPOSE}>
                    <sup style={STYLE_SUPERIMPOSE_SUP_SUB}>{element.over}</sup>
                    <sub style={STYLE_SUPERIMPOSE_SUP_SUB}>{element.under}</sub>
                </span>
            );
            break;
        default:
            return element.value;
    }
}
