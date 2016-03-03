## State

Componentの状態をどのように定義して、どのように変化させるのかを学ぶ。
スライダーComponent(`PortalSlider`)を実装する。

![slider](./assets/section_popular_project.png)

## PortalSlider Componentの仕様

PortalSlider Componentを作る際に、どのように使うことを想定するか。
スライダー内の中身は、募集が入ったり、投稿や社員紹介が入ったりするので、汎用的に使えることを考えると、以下のように使えるものにしたい。

```
<PortalSlider>
  <PortalProject project={projects[0]} />
  <PortalProject project={projects[1]} />
  <PortalProject project={projects[2]} />
  ...
</PortalSlider>

<PortalSlider>
  <PortalPost post={posts[0]} />
  <PortalPost post={posts[1]} />
  <PortalPost post={posts[2]} />
  ...
</PortalSlider>
```

## スライダーが持つ状態

PortalSlider Componentはどういう状態を持つか考える。

持っている状態は、今どの要素を表示しているかという情報。すなわち、
左端に何個目の要素を表示しているか(currentIndex)。

初期状態では0で、">"をクリックすると3に、更に"<"をクリックすると0に戻る。

## 座標の指定

次にHTMLとCSSでどうやって表現するかを考える。

各要素を表示する座標を計算する方法をとる。
ページを送るごとに、各要素が表示されるべき場所を計算して、設定する。

![Slider Position](./assets/slider_position.png)

CSSとしては、座標を設定する方法はいくつかあるが、パフォーマンスの面から`transform: translate(x, y)`プロパティを使用する。

## 大まかなComponent

Component定義の大枠はこんな感じ。
コンポーネントの中の要素は、`this.props.children`として受け取ることができる。

```
import React, { Component } from 'react'

export default PortalSlider extends Component {
  constructor(props) {
    super(props)
    this.state = { currentIndex: 0 }
  }

  calcStyle(index) {
    return {
      transform: `translate(${index * 320}px, 0)`
    }
  }

  render() {
    return <div>
      { this.props.children.map((child, index) => {
        return <div style={this.calcStyle(index - this.state.currentIndex)} key={index}>
          { child }
        </div>
      }) }
    </div>
  }
}
```

初期の座標を合わせるために、以下のスタイルを追加する。

```
.base {
  position: relative;
}

.item {
  position: absolute;
  left: 0;
  top: 0;
}
```

```
<div className={styles.base}>
  { this.props.children.map((child, index) => {
    return <div style={this.calcStyle(index - this.state.currentIndex)} key={index} className={styles.item}>
      { child }
    </div>
  }) }
</div>
```

これで、各要素が横に並んだ状態が出来上がる。


## 状態の変更

ユーザーのアクションにより、状態(currentIndex)がどう変化するかを実装する。
"次へ"と"前へ"ボタンを表示することを考える。

まずは、状態を変えるメソッド `onClickPrev()`と`onClickNext()` を実装する。


```
// src/PortalSlider.js
onClickPrev() {
  this.setState({
    currentIndex: this.state.currentIndex - 3
  })
}
onClickNext() {
  this.setState({
    currentIndex: this.state.currentIndex + 3
  })
}
```

次に、ボタンを配置して、クリックされたら今実装したメソッドが呼ばれるようにする。

```
render() {
  return (
    <div className={styles.base}>
      <a onClick={this.onClickPrev.bind(this)}>前へ</a>
      <a onClick={this.onClickNext.bind(this)}>次へ/a>
      { this.props.children.map((child, index) => {
        return <div key={index}>{ child }</div>
      }) }
    </div>
  )
}
```

`.bind(this)` を忘れると動かないので注意。

これで、「前へ」「次へ」を押すと、ページが切り替わるようになった。

最後に、CSSでAnimationをつければ完璧。

```
.item {
  transition: all 300ms ease;
}
```

## [練習]高度なアニメーション

例えば、以下のようなアニメーションはどうやって実装するか。

![Delay Animation](./assets/slider_delay.gif)

ヒント

- `transition-delay`プロパティを仕様することで、アニメーションをずらすことができる。
- もう一つ状態が必要

答え

```
constructor(props) {
  super(props)

  this.state = {
    currentIndex: 0,
    ltr: true, // Left to Right
  }
}

setCurrentIndex(index) {
  this.setState({
    currentIndex: index,
    ltr: index >= this.state.currentIndex
  })
}

calcStyle(index) {
  let delay = this.state.ltr ? index : 2 - index
  return {
    transform: `translate(${index * 320}px, 0)`,
    transitionDelay: `${delay * 100}ms`,
  }
}
```
