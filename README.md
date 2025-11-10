# Nextra Documentation Demo

A static documentation generator built with [Nextra](https://nextra.site/) and [Next.js](https://nextjs.org/).

## Features

- 📚 **Documentation Categories**: Guide, API Reference, SDK, and CLI
- 🌐 **Internationalization**: Support for English and Chinese
- 🎨 **Modern Design**: Built with Nextra theme
- ⚡ **Fast**: Static site generation with Next.js

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The documentation will be available at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build static site
npm run build
```

The static files will be generated in the `out` directory and can be deployed to any static hosting service.

## Project Structure

```
nextra-demo/
├── pages/
│   ├── en/                 # English documentation
│   │   ├── _meta.js       # Navigation structure
│   │   ├── index.mdx      # Home page
│   │   ├── guide.mdx      # Guide section
│   │   ├── api-reference.mdx
│   │   ├── sdk.mdx
│   │   └── cli.mdx
│   ├── zh/                 # Chinese documentation
│   │   ├── _meta.js       # Navigation structure (Chinese)
│   │   ├── index.mdx      # 首页
│   │   ├── guide.mdx      # 指南
│   │   ├── api-reference.mdx
│   │   ├── sdk.mdx
│   │   └── cli.mdx
│   └── _app.jsx           # Custom App component
├── theme.config.jsx       # Nextra theme configuration
├── next.config.mjs        # Next.js configuration
└── package.json
```

## Documentation Languages

- **English (en)**: Default language
- **中文 (zh)**: Chinese translation

Switch between languages using the language selector in the bottom left corner of the sidebar.

## Customization

### Theme Configuration

Edit `theme.config.jsx` to customize:
- Logo and branding
- Project links
- Footer text
- i18n settings

### Adding New Pages

1. Create a new `.mdx` file in the appropriate language directory
2. Update the corresponding `_meta.js` file to add it to the navigation

Example:
```js
// pages/en/_meta.js
export default {
  index: 'Home',
  guide: 'Guide',
  'new-page': 'New Page',  // Add your new page
  // ...
}
```

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [Nextra](https://nextra.site/) - Documentation framework
- [MDX](https://mdxjs.com/) - Markdown with JSX support

## License

MIT