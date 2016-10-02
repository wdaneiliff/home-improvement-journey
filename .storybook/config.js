import { configure, addDecorator, setAddon } from '@kadira/storybook'
import { withKnobs } from '@kadira/storybook-addon-knobs'
import infoAddon from '@kadira/react-storybook-addon-info'

// Add decorators
addDecorator(withKnobs)
// Enable addons
setAddon(infoAddon)

const req = require.context('../src', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
