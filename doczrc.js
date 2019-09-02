import { css } from 'docz-plugin-css';

export default {
  typescript: true,
  title: 'GraphQL Kanban',
  menu: ['Getting Started', 'Components'],
  // Docz plugin to handle sass & modules imported into App components.
  plugins: [
    css({
      preprocessor: 'sass',
      cssmodules: true,
    }),
  ],
  // Added to apply blueprint styles to playground components.
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
