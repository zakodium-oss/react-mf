import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { MF } from '../src';

storiesOf('MF', module)
  .addDecorator(withKnobs)
  .add('Basic rendering', () => <MF mf={text('mf', 'C6H6')} />);
