// import postcss from 'postcss'
// import tailwindcss from 'tailwindcss'
// import autoprefixer from 'autoprefixer'
// import cssnano from 'cssnano'
import defaultContent from 'raw-loader!./index.md'

export async function getDefaultContent() {
  const html = defaultContent
  const css = `
  @media print {
    body {
      background-color: white;
      /* padding: 20px; */
    }
    .markdown-body {
      line-height: 1.5;
    }
  }
  
  .flex {
    display: flex;
  }
  
  .left {
    background: rgb(14 100 233);
    padding: 20px;
  }
  .left img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  .markdown-body {
    margin-top: -15px;
    font-size: 14px;
  }
  .markdown-body h2,
  .markdown-body h3 {
    margin-top: 10px;
    margin-bottom: 0px;
  }
  .markdown-body h3 {
    font-size: 18px;
  }
  .markdown-body .left * {
    line-height: 1.5;
    color: #fff;
  }
`
  const config = `function List({ children, title }) {
    return (
      <div className="list">
        <div className="list-head">
          <div className="list-head-line"></div>
          <div className="list-head-line"></div>
        </div>
        <div className="list-title">{title}</div>
        <div>{children}</div>
      </div>
    )
  }
  
  function Header({ name, children }) {
    return(
      <div className="header">
        <h1>{name}</h1>
        <p>{children}</p>
      </div>
    )
  }
  
  export default {
    Header,
    List,
  }
  `

  // let { css: compiledCss } = await postcss([
  //   tailwindcss({
  //     content: [{ raw: html }],
  //   }),
  //   autoprefixer(),
  //   cssnano(),
  // ]).process(css, {
  //   from: undefined,
  // })

  return {
    html,
    css,
    config,
    // compiledCss,
  }
}
