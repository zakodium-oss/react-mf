import React from 'react';

import { MF } from '../src/index';

export default {
  title: 'MF',
  args: {
    mf: 'Al2(SO4)3',
  },
};

export function Basic(props) {
  return <MF mf={props.mf} />;
}

Basic.storyName = 'Basic rendering';

export function ClassName(props) {
  return (
    <div>
      <style>
        {`.custom-css {
            font-weight: bold;
            color: red;
          }`}
      </style>
      <MF mf={props.mf} className="custom-css" />
    </div>
  );
}

ClassName.storyName = 'Using className';

export function InlineStyle(props) {
  return <MF style={{ color: 'navy', fontSize: 30 }} mf={props.mf} />;
}

InlineStyle.storyName = 'Using inline style';

export function Monospace(props) {
  return <MF style={{ fontFamily: 'monospace' }} mf={props.mf} />;
}

Monospace.storyName = 'Font-family monospace';

export function ChargedSalt(props) {
  return <MF mf={props.mf} />;
}

ChargedSalt.storyName = 'Charged salt';
ChargedSalt.args = {
  mf: '2Na+.SO4(--)',
};
