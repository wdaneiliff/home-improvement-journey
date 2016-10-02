import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { text } from '@kadira/storybook-addon-knobs'
import App from './app';

const stories = storiesOf('App', module)

stories.addWithInfo(
  'render default',
  `
    Renders an App component with the default props.
    ~~~js
    import App from './src/app.js'
    ...
    <App />
    ~~~
  `,
  () => {
    return <App />
  }
)

stories.addWithInfo(
  'render with all props',
  `
    Renders an App component with all props passed in.
    ~~~js
    import App from './src/app.js'
    ...
    <App name={name}/>
    ~~~
  `,
  () => {
    const name = text('Name', 'Mike')
    return <App name={name}/>
  }
)
