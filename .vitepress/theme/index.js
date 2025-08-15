import Theme from 'vitepress/theme'
//import 'virtual:group-icons.css'
import './styles.css';
import { ExternalLink } from "../components/ExternalLink.js";

/** @type {import('vitepress').Theme} */
export default {
  extends: Theme,
  enhanceApp({ app }) {
    // регистрируем пользовательские глобальные компоненты
    app.component('ExternalLink', ExternalLink)
  }
}
