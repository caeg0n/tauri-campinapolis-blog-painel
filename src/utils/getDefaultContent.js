// import postcss from 'postcss'
// import tailwindcss from 'tailwindcss'
// import autoprefixer from 'autoprefixer'
// import cssnano from 'cssnano'
import defaultContent from 'raw-loader!./index.md'

export async function getDefaultContent() {
  const html = defaultContent
  const css = `.list {
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 15px;
    max-width: 320px;
    background: #ffffff;
    border: 1px solid #94cff7;
    opacity: 1;
    border-radius: 6px;
    padding: 5.5px;
  }
  .list-head {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: -15px;
    margin-bottom: -3px;
  }
  .list-head-line {
    width: 7px;
    height: 17px;
    background: #ffffff;
    border: 1px solid rgb(14 165 233);
    opacity: 1;
    border-radius: 77px;
  }
  .list-title {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(14 165 233);
    border-radius: 6px;
    text-align: center;
    color: #fff;
    font-size: 15px;
  }
  .markdown-body .list ul {
    display: flex;
    flex-direction: column;
    min-height: 40px;
    padding: 15px 10px 0 30px;
    list-style: circle;
    justify-content: space-between;
    align-items: flex-start;
  }
  .markdown-body .list ul li a {
    border-bottom: 0;
  }
  .list ul li {
    font-size: 14px;
    margin-bottom: 15px;
    color: rgb(14 165 233);
  }
  
  .markdown-body .header p,
  .markdown-body .header h1 {
    color: #fff;
  }
  .markdown-body .header {
    padding: 20px;
    background: rgb(14 165 233);
  }
  
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
    background: rgb(14 165 233);
    padding: 20px;
  }
  .left img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  .markdown-body {
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
