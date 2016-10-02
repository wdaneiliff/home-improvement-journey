import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { text } from '@kadira/storybook-addon-knobs'
import App from './app';

const stories = storiesOf('App', module)

stories.add('render default', () => {
  return <App/>
})
stories.add('render with name', () => {
  const name = text('Name', 'Mike')
  return <App name={name} />
})
