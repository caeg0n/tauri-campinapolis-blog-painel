import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CopyIcon, Loader2, PrinterIcon, SaveIcon } from 'lucide-react'
import { copyHtml, download } from './utils/index'
import { t } from '@/utils/i18n'
import cheerio from 'cheerio'
import dynamic from 'next/dynamic'
import juice from 'juice/client'

// function inlineCSS(html, css) {
//   return juice.inlineContent(html, css, {
//     inlinePseudoElements: true,
//   })
// }

// function toDataURL(src, outputFormat) {
//   return new Promise((resolve) => {
//     var img = new Image()
//     img.crossOrigin = 'Anonymous'
//     img.onload = function () {
//       var canvas = document.createElement('CANVAS')
//       var ctx = canvas.getContext('2d')
//       var dataURL
//       canvas.height = this.naturalHeight
//       canvas.width = this.naturalWidth
//       ctx.drawImage(this, 0, 0)
//       dataURL = canvas.toDataURL(outputFormat)
//       resolve(dataURL)
//     }
//     img.src = src + '&a=1'
//     if (img.complete || img.complete === undefined) {
//       img.src = src + '&a=2'
//     }
//   })
// }

export const CopyBtn = ({ editorRef, previewRef, htmlRef, baseCss }) => {
  const [{ state }, setState] = useState({
    state: 'idle',
    errorText: undefined,
  })

  const handlePublish = async () => {
    setState({ state: 'loading' })
    const frontMatter = `---
                        title: 'kkkkkkkkkkkkkkk'
                        date: '2024-02-11'
                        lastmod: '2024-02-11'
                        tags: ['design-patterns']
                        summary: 'NestJS'
                        layout: PostSimple
                        ---`.replace(/^\s+/gm, '');
    let md = editorRef.current.getValue('html');
    md = frontMatter + md;
    console.log(md);
    const commitMessage = 'Updating content'
    const fileName = 'data/blog/new-file.mdx'
    const fileContent = btoa(unescape(encodeURIComponent(md)))
    try {
      const response = await fetch('/api/github-commit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fileName,
          fileContent,
          commitMessage,
        }),
      })
      const data = await response.json()
      if (response.ok) {
        setState({ state: 'success' })
        alert('Content published successfully!')
      } else {
        throw new Error(data.message || 'Failed to publish content')
      }
    } catch (error) {
      console.error('Error publishing content:', error)
      setState({ state: 'error', errorText: error.message })
    }
  }

  // const handleClick = async () => {
  //   console.log("handleclick");
  //   setState({ state: 'loading' })
  //   const css = baseCss + editorRef.current.getValue('css')

  //   const $ = cheerio.load(htmlRef.current, null, false)

  //   $('p,section,div').each((index, element) => {
  //     const $element = $(element)
  //     if ($element.html().trim() === '') {
  //       $element.remove()
  //     }
  //   })

  //   for (let index = 0; index < $('img').length; index++) {
  //     const item = $('img')[index]
  //     if (item.attribs.src.includes('/api/qrcode')) {
  //       const dataUrl = await toDataURL(item.attribs.src)
  //       item.attribs.src = dataUrl
  //     }
  //   }
  //   const html = $.html()

  //   const inlineHtml = inlineCSS(html, css)
  //   copyHtml(
  //     inlineHtml.replace(/<div/g, '<section').replace(/<\/div>/g, '</section>')
  //   )

  //   setState({ state: 'copied' })
  //   setTimeout(() => {
  //     setState({ state: 'idle' })
  //   }, 1000)
  // }

  const handleExport = () => {
    let md = editorRef.current.getValue('html')
    if (md) {
      const title = md.split('\n')[0].replace('# ', '').slice(0, 50)
      download(title + '.mdx', md)
    }
  }

  const handleExportPDF = () => {
    let md = editorRef.current.getValue('html')
    if (md) {
      previewRef.current.contentWindow.postMessage(
        {
          print: true,
        },
        '*'
      )
    }
  }

  return (
    <>
      {/* <Button
        size="sm"
        onClick={handleClick}
        disabled={
          state === 'copied' || state === 'disabled' || state === 'loading'
        }
      >
        {state === 'loading' ? (
          <Loader2 className="w-4 h-4 mr-1 animate-spin" />
        ) : (
          <CopyIcon className="w-4 h-4 mr-1" />
        )}
        {state === 'copied' ? t('Copy Success') : t('Copy')}
      </Button> */}

      <Button variant="secondary" size="sm" onClick={handleExport}>
        <SaveIcon className="w-4 h-4 mr-1" /> {'Salvar Como'}
      </Button>
      <Button
        variant="secondary"
        size="sm"
        type="button"
        onClick={handleExportPDF}
      >
        <PrinterIcon className="w-4 h-4 mr-1" /> {'Exportar PDF'}
      </Button>
      <Button size="sm" type="button" disabled={false} onClick={handlePublish}>
        <CopyIcon className="w-4 h-4 mr-1" /> {'Publicar'}
      </Button>
    </>
  )
}
