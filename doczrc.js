import { css } from 'docz-plugin-css';

export default {
  typescript: true,
  title: 'GraphQL Kanban',
  menu: ['Getting Started', 'Components'],
  plugins: [
    css({
      preprocessor: 'sass',
      cssmodules: true,
    }),
  ],
  htmlContext: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href:
            'https://unpkg.com/@blueprintjs/icons@^3.4.0/lib/css/blueprint-icons.css',
        },
        {
          rel: 'stylesheet',
          href:
            'https://unpkg.com/@blueprintjs/core@^3.10.0/lib/css/blueprint.css',
        },
      ],
    },
  },
};
