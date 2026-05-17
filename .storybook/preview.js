import './docs-header.js';
import './docs-styles.css';

/** @type { import('@storybook/vue3-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo"
    },
    docs: {
      anchors: false,
    }
  },
};

export default preview;