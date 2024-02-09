'use client'

import React from 'react'
import Image from 'next/image'
import { buttonVariants } from '@/components/ui/button'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { getTemplates } from '../utils/database'
import { Header } from '../components/Header'
import {
  BookOpenCheckIcon,
  BrushIcon,
  CodeIcon,
  DownloadIcon,
  FileTextIcon,
  GithubIcon,
  ListIcon,
  NotepadTextIcon,
  PaletteIcon,
  PrinterIcon,
  QrCodeIcon,
  ShareIcon,
} from 'lucide-react'
import { OpenAIIcon, WechatIcon } from '../components/icons'
//import Pen from '../components/Pen'

const Hero = dynamic(() => import('../components/hero/index'), {
  ssr: false,
})

const features = [
  {
    icon: <WechatIcon />,
    text: '支持一键复制到微信公众号',
  },
  {
    icon: <BrushIcon />,
    text: '支持自定义组件，自定义样式',
  },
  {
    icon: <PaletteIcon />,
    text: '内置10+主题和代码主题',
  },
  {
    icon: <QrCodeIcon />,
    text: '支持生成二维码',
  },
  {
    icon: <CodeIcon />,
    text: '支持代码 diff 高亮',
  },
  {
    icon: <ListIcon />,
    text: '支持生成文章目录',
  },
  {
    icon: <NotepadTextIcon />,
    text: 'c',
  },
  {
    icon: <BookOpenCheckIcon />,

    text: 'b',
  },
  {
    icon: <ShareIcon />,
    text: 'a',
  },
  {
    icon: <FileTextIcon />,
    text: 'markdown',
  },
  {
    icon: <PrinterIcon />,
    text: 'pdf',
  },
  {
    icon: <OpenAIIcon />,
    text: 'ChatGPT',
  },
]

const users = ['JS酷', 'web技术学院', '前端充电宝', '云谦和他的朋友们']

export default function Page({ data = [] }) {
  return (
    <div className="relative min-h-full">
      <div className="absolute inset-0 h-screen  bg-no-repeat bg-slate-50 dark:bg-[#0B1120] index_beams">
        <div className="absolute inset-0 h-screen bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5"></div>
      </div>
      <Header />
      <div className="container mx-auto p-5">
        <Hero>
          <div className="mt-12 text-center">
            <div className="mt-12 text-3xl sm:text-5xl">
              MDX
            </div>
            <div className="mt-12 flex justify-center space-x-4">
              <Link
                className={buttonVariants({
                  variant: 'outline',
                  size: 'lg',
                })}
                href="/create"
              >
                Web
              </Link>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/maqi1520/mdx-editor/releases"
                className={buttonVariants({ size: 'lg' })}
              >
                <DownloadIcon className="w-5 h-5" />
                <span>ZZZ</span>
              </a>
            </div>
          </div>
        </Hero>
        <div className="relative">
          <section className="mt-20 px-8 text-center sm:mt-32 md:mt-40">
            <h2 className="text-3xl tracking-tight sm:text-5xl">
              Markdown
            </h2>
            <p className="mx-auto mt-6 max-w-5xl text-lg">
              ZZ
              <a
                target="_blank"
                rel="noreferrer"
                href="https://tauri.app/"
                className="mx-1 font-semibold text-primary hover:text-primary/90"
              >
                tauri
              </a>
              App
              MacOS、Windows、Linux, a, 10 MB
            </p>

            <div className="mt-6 flex justify-center">
              <video
                controls
                loop
                className="rounded-xl"
                width="1200"
                height="780"
              >
                <source src="/demo.mp4" type="video/mp4" />
              </video>
            </div>
          </section>
          <section className=" mt-20 px-8 sm:mt-32 md:mt-40">
            <h2 className="text-center text-3xl tracking-tight sm:text-5xl">
              MDX Editor
            </h2>
            <ul className="mt-10 grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-y-10">
              {features.map((f, index) => (
                <li
                  key={index}
                  className="border group hover:border-primary hover:bg-primary/20  cursor-pointer rounded-md p-3  shadow-sm flex justify-center"
                >
                  <div>
                    <div className="p-4 flex justify-center">{f.icon}</div>
                    <div>{f.text}</div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
          <section className="mt-20 px-8 text-center sm:mt-32 md:mt-40">
            <h2 className="text-3xl tracking-tight sm:text-5xl">ZZZ</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg">
              MDX Markdown JSX React 
              React, Config
              JSX。
            </p>
            <div className="mt-10 grid grid-cols-2 gap-10">
              {data.map((item) => (
                <div key={item.docId}>
                  <div className="overflow-hidden rounded">
                    <Link href={'/' + item.docId}>
                      <Image
                        width={711}
                        height={500}
                        alt=""
                        className="transition-transform hover:scale-110"
                        src={item.img}
                      />
                    </Link>
                  </div>
                  <div className="mt-4">
                    <Link href={'/' + item.docId} className="underline">
                      {item.name}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="mt-20 px-8 text-center sm:mt-32 md:mt-40">
            <h2 className="text-3xl tracking-tight sm:text-5xl">a</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg">
              Markdown MDX
              <a
                className="mx-1 font-semibold text-primary"
                target="_blank"
                rel="noreferrer"
                href="https://mdxjs.com/playground/"
              >
                mdxjs playground
              </a>
              ？
            </p>
          </section>
          <section className="mt-20 px-8 text-center sm:mt-32 md:mt-40">
            <h2 className="text-3xl tracking-tight sm:text-5xl">t</h2>
            <div>
              <ul className="mt-10 grid grid-cols-2 gap-x-16 gap-y-8 md:grid-cols-4 xl:gap-y-10">
                {users.map((user) => (
                  <li
                    key={user}
                    className="border group hover:border-primary hover:bg-primary/20  cursor-pointer rounded-md p-3  shadow-sm flex justify-center"
                  >
                    {user}
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section className="mt-20 px-8 text-center sm:mt-32 md:mt-40">
            <h2 className="text-3xl tracking-tight sm:text-5xl">？</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg">
              MDX Editor{' '}
              <a
                target="_blank"
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  '推荐一个微信排版编辑器，使用MDX，可自定义组件、样式、生成二维码、代码 diff 高亮，可导出 markdown 和 PDF，也是一款跨平台 Markdown 笔记软件'
                )}&url=https://editor.runjs.cool`}
                className={buttonVariants()}
              >
                Twitter
              </a>
            </p>
          </section>
          <div className="mt-16 pt-10 border-t flex justify-between">
            <div>
              Made with ❤️ by
              <a
                href="https://maqib.cn"
                target="_blank"
                rel="noreferrer"
                className="font-bold underline-offset-2 transition hover:text-primary hover:underline"
              >
                &nbsp;maqibin
              </a>
              &nbsp;on&nbsp;
              <a
                href="https://github.com/maqi1520/mdx-editor"
                target="_blank"
                rel="noreferrer"
                className="font-bold underline-offset-2 transition hover:text-primary hover:underline"
              >
                GitHub
              </a>
            </div>
            <span>© 2024</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps({ params, res, query }) {
  try {
    const res = await getTemplates({
      action: 'template',
      search: query.search,
      pageSize: 6,
    })

    return {
      props: {
        data: res.data,
        hasmore: res.hasMore,
      },
    }
  } catch (error) {
    return {
      props: {
        errorCode: error.status || 500,
      },
    }
  }
}
