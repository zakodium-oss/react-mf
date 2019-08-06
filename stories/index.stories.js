import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { MF } from '../src';

const exampleMf = 'Al2(SO4)3';

storiesOf('MF', module)
  .add('Basic rendering', () => <MF mf={text('mf', exampleMf)} />)
  .add('Using className', () => (
    <div>
      <style>
        {`.custom-css {
  font-weight: bold;
  color: red;
}`}
      </style>
      <MF mf={text('mf', exampleMf)} className="custom-css" />
    </div>
  ))
  .add('Using inline style', () => (
    <MF style={{ color: 'navy', fontSize: 30 }} mf={text('mf', exampleMf)} />
  ))
  .add('Font-family monospace', () => (
    <MF style={{ fontFamily: 'monospace' }} mf={text('mf', exampleMf)} />
  ))
  .add('Charged salt', () => (
    <MF mf={text('mf', '2Na+.SO4(--)')} />
  ))
  .add('Passing props', () => (
    <MF mf={text('mf', exampleMf)} onClick={() => alert('It works!')} />
  ));
