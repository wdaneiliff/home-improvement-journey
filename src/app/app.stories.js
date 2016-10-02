import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import App from './app';

storiesOf('App', module)
  .add('render default', () => (
    <App/>
  ))
  .add('render with name', () => (
    <App name="Mike" />
  ));
