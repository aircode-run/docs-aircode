import DefaultTheme from 'vitepress/theme'
import { h, onMounted } from 'vue'
import { useData } from 'vitepress'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    const { frontmatter, page } = useData()

    return h(DefaultTheme.Layout, null, {
      'doc-before': () => {
        if (frontmatter.value.title === 'AirCode 文档') return null

        return h('h1', { class: 'aircode-page-title' }, frontmatter.value.title || page.value.title)
      }
    })
  },
  setup() {
    onMounted(() => {
      document.addEventListener(
        'error',
        (event) => {
          const target = event.target
          if (!(target instanceof HTMLImageElement)) return
          target.classList.add('aircode-broken-image')
          target.alt = target.alt || '图片暂时无法加载'
        },
        true
      )
    })
  }
}
