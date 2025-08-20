import Theme from 'vitepress/theme'
//import 'virtual:group-icons.css'
import './styles.css';
import { ExternalLink } from "../components/ExternalLink.js";
import Layout from './Layout.vue'

/** @type {import('vitepress').Theme} */
export default {
  ...Theme,
  Layout,
  enhanceApp({ app }) {
    // регистрируем пользовательские глобальные компоненты
    app.component('ExternalLink', ExternalLink)
  }
}
