import { useRouter } from 'next/router'

const config = {
  logo: <span>Nextra Documentation</span>,
  project: {
    link: 'https://github.com/tcitry/nextra-demo'
  },
  docsRepositoryBase: 'https://github.com/tcitry/nextra-demo/tree/main',
  footer: {
    text: 'Nextra Documentation © 2025'
  },
  i18n: [
    { locale: 'en', name: 'English' },
    { locale: 'zh', name: '中文' }
  ],
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Nextra Docs'
    }
  }
}

export default config
