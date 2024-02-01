## MDX 能干什么？

kdjdsfjdslkfj dlkfj skldjs dlksja dlksajd lksajd lksjd skldj slkajdsa


Chart 这个组件定义在 config 中

```jsx
function Chart({ data = [], color }) {
  return (
    <div className="snowfall">
      {data.map((d, i) => (
        <div
          key={i}
          className="snowfall-bar"
          style={{
            height: d * 20,
            backgroundColor: color,
          }}
        />
      ))}
    </div>
  )
}
```

再加点 css

```css
.snowfall {
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.snowfall-bar {
  flex-basis: 0;
  flex-grow: 1;
  margin: 4px;
  display: flex;
  justify-content: center;
  align-items: end;
  font-size: 10px;
  color: #eff6ff;
}
```

感谢你的阅读和使用，若遇到问题，可以在 github 提 issues，也可以关注微信公众号 “JS 酷”留言反馈，希望更够帮助到您。
