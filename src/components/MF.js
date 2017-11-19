import React, {PureComponent} from 'react';  // eslint-disable-line no-unused-vars


export default class MF extends PureComponent {
    render() {
        let mf = this.props.mf;
        // need to deal with charge in parenthesis
        mf = mf.replace(/\(([0-9+-]+)\)/g, function (match) {
            var number = match.replace(/[^0-9]/g, '') * 1;
            var charge = match.replace(/[\(\)0-9]/g, '');
            return charge.repeat(number);
        });

        mf = mf.replace(/([+-])([0-9]+)/g, function (match) {
            var number = match.replace(/[^0-9]/g, '') * 1;
            var charge = match.replace(/[\(\)0-9]/g, '');
            return charge.repeat(number);
        });

        // need to deal with isotopes
        mf = mf.replace(/\[([0-9]+)/g, '[<sup>$1</sup>');

        // replace number following parenthesis or letter
        mf = mf.replace(/([a-zA-Z)\]])([0-9.]+)/g, '$1<sub>$2</sub>');

        mf = mf.replace(/([+-]+)/g, function (match) {
            var charge = 0;
            for (var i = 0; i < match.length; i++) {
                if (match.charAt(i) === '+') charge++;
                else charge--;
            }
            if (charge > 1) {
                return '<sup>' + charge + '+</sup>';
            } else if (charge < -1) {
                return '<sup>' + -charge + '‒</sup>';
            } else if (charge === 1) {
                return '<sup>+</sup>';
            } else if (charge === -1) {
                return '<sup>‒</sup>';
            }
            return '';
        });

        // overlap sub and sup
        mf = mf.replace(
            /(<sub>[0-9.]+<\/sub>)(<sup>[0-9]*[+‒]<\/sup>)/g,
            '<span class="superimpose" style="flex-direction: column;display: inline-flex;justify-content: center;text-align: left;vertical-align: middle;">$2$1</span>'
        );

/*
        var b = [<div style={supSubStyle} key={1}>abc</div>, <span />];
        var a = <span>{b}</span>;
        return a;
        */
        return <span dangerouslySetInnerHTML={{__html: mf}}></span>;
    }
}
