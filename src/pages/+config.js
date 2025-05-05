import vikeReact from 'vike-react/config'
import { Layout } from './Layout'

export default {
    prerender: true,

    // vike-react config
    Layout: Layout,
    ssr: false,
    extends: [vikeReact],
    reactStrictMode: false,

    title: 'NIKUKIKAI'
}
