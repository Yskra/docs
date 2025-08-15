/** @import {FunctionalComponent, AnchorHTMLAttributes} from 'vue' */
import { h } from 'vue'

export const LOCAL_URL_REG = /^https?:\/\/localhost:/

/**
 * @typedef ExternalLinkProps
 * @extends {Omit<AnchorHTMLAttributes, 'target'>}
 * @property {string} href
 */

/**
 * @see https://github.com/vuejs/vitepress/issues/822 for details
 * @type {FunctionalComponent<ExternalLinkProps>}
 */
export const ExternalLink = ({href, ...props }) => {
    if (process.env.NODE_ENV === 'development' && !LOCAL_URL_REG.test(href)) {
        console.error('You should use markdown style link instead')
    }
    return h(
      'a',
        { href, target: '_blank', rel: 'noreferrer noopener', ...props, },
        href,
    )
}
