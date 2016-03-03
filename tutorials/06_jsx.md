## JSX

JSXとは、JavaScriptの中にHTMLのようなビューを書くために生み出された、JavaScriptの拡張。
Reactには欠かせないもの。

## 基本的な書き方

JavaScriptの中に、HTMLタグ`<div>`,`<img>`のようなものを記述できる。

HTMLタグ内の`{ }`で囲まれた中では、JavaScriptのコードが記述できる。
また、そのJavaScriptの中でもHTMLタグが書ける。

これは、Babelによって通常のJavaScriptコードに変換される。

## renderメソッド

Reactでは、`render()`メソッドの中でJSXを使ってビューを定義していく。

さっきAPIから受け取ったデータを表示するようにrenderメソッドを定義していく。
募集のタイトルをリンクで表示してみる。

イメージとして、以下のようなJSXを生成したい。

```
<div>
  <div key={projects[0].id}>
    <a href={`https://www.wantedly.com/projects/${projects[0].id}`} target="_blank">
      { projects[0].title }
    </a>
  </div>
  <div key={projects[1].id}>
    <a href={`https://www.wantedly.com/projects/${projects[1].id}`} target="_blank">
      { projects[1].title }
    </a>
  </div>
  ...
</div>
```

普通のHTMLと違って、`href`などの属性は`href=""`ように`""`で囲むのではなく、JavaScriptのオブジェクトを渡している。

`href={}`の中身はES2015の章で学んだ`Template String`で、文字列の中で変数を展開している。下のように書くのと同じ。

`<a href={"https://www.wantedly.com/projects/" + projects[1].id}>`



`key`はReactの仕様上必要。

JSX内の繰り返し処理は、`map()`を使ってかかれることが多いが、１つ１つのタグはオブジェクトに変換されるので、同じオブジェクトが生成されるなら書き方は自由。

```
render() {
  let pupularProject = this.state.data.data.sections[3]
  return (
    <div>
      { popularProject.projects.map((project) => {
        return <div key={project.id}>
          <a href={`https://www.wantedly.com/projects/${project.id}`} target="_blank">
            { project.title }
          </a>
        </div>
      }) }
    </div>
  )
}
```

読みにくければ、一旦ローカル変数に置くのもあり。

```
render() {
  let pupularProject = this.state.data.data.sections[3]
  let projects = popularProject.projects.map((project) => {
    return <div key={project.id}>
      <a href={`https://www.wantedly.com/projects/${project.id}`} target="_blank">
        { project.title }
      </a>
    </div>
  })
  return (
    <div>
      { projects }
    </div>
  )
}
```


## カスタムコンポーネント

`<div>`や`<a>`は、HTMLで存在しているタグだが、JSXでは自分で作ったComponentをタグとして使用できる。

今、募集のそれぞれの要素を表現した`PortalProject`Componentを考える。

こんな感じに使える、`PortalProject`タグが作りたい。

```
<div>
  <div>
    { popularProject.projects.map((project) => {
      return <PortalProject project={project} key={project.id} />
    }) }
  </div>
<div>
```

`PortalProject`Componentは、project属性を受けて、そのprojectのデータを描画するComponent。これを定義してみよう。

`src/PortalProject.js`
```
import React, { Component } from 'react'

export default class PortalProject extends Component {
  render() {
    let project = this.props.project
    return (
      <div>
        <a href={`https://www.wantedly.com/projects/${project.id}`} target="_blank">
          { project.title }
        </a>
      </div>
    )
  }
}
```

別ファイルに定義したComponentを読み込むに、`import`を使う

`src/App.js`
```
import PortalProject from './PortalProject'
```

これで、カスタムコンポーネントが作れた。
Componentに分けておくことで、使い回しが効いたり、コードの読みやすさが向上するので、積極的にコンポーネントを切り出していこう。
