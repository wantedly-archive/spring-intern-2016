## CSS

効率的にCSSを書いてスタイルを実装する方法を学ぶ。
先ほど作ったPortalProject Componentのデザインを実装する。

## CSSの問題点

スタイルを付けるためだけに、長いクラス名を付ける必要がある。
クラス名が被ると、予期しないスタイルが当てられてしまう。
見通しが悪くなったCSSは、使われなくなったスタイルがずっと残ってしまったりして、巨大に膨れ上がり、メンテナンスコストが高くなる。

## CSS Modules

以上のような問題を解決する方法として、`CSS Modules`というものが開発されている。

まず、普通にCSSを書いていく。
基本的にはComponentと同名のCSSファイルを作って、そのComponentのスタイルはそこに記述する。

`src/PortalProject.css`
```
.base {
  width: 300px;
  margin-bottom: 30px;
}
.label {
  display: inline-block;
  border: 1px solid #DAA520;
  border-radius: 4px;
  color: #DAA520;
}
```

このように書くと、`CSS Modules`の世界では、クラス名は自動的に他とは衝突しない名前に変換される。

```
._352Y2rNDu1kKQAoLfnxpe9 {
  width: 300px;
  margin-bottom: 30px;
}
._4HUDZbd5oRomGeQVFTgGm_ {
  display: inline-block;
  border: 1px solid #DAA520;
  border-radius: 4px;
  color: #DAA520;
}
```

次に、そのCSSをJavaScriptから以下のように読み込む。

`src/PortalProject.js`
```
import styles from './PortalProject.css'
```

すると、`styles`には以下のような、定義したクラス名と変換されたクラス名のオブジェクトが与えられる。

```
styles = {
  "base": "_352Y2rNDu1kKQAoLfnxpe9",
  "label": "_4HUDZbd5oRomGeQVFTgGm_"
}
```

このデータを使って、変換されたクラス名をJSXの`className`属性に指定していく。

```
<div className={styles.base}>
  <div className={styles.label}>{ project.looking_for }</div>
  ...
</div>
```

そうすると、最終的に以下のようなHTMLとして出力される。

```
<div class="_352Y2rNDu1kKQAoLfnxpe9">
  <div class="_4HUDZbd5oRomGeQVFTgGm_">エンジニア</div>
  ...
</div>
```


## スタイルの実装

元ページを見ながらどんどん実装していく。

`src/PortalProject.js`
```
<div className={styles.base}>
  <div className={styles.label}>{ project.looking_for }</div>
  <a className={styles.linkBlock} href={`https://www.wantedly.com/projects/${project.id}`} target="_blank">
    <img className={styles.coverImage} src={project.image.i_304_124_x2} />
    <h2 className={styles.title}>{ project.title }</h2>
    <p className={styles.description}>{ `${project.description.substr(0, 70)}...` }</p>
  </a>
  <div className={styles.companyBlock}>
    <img className={styles.companyAvatar} src={project.company.avatar.s_60} />
    <h3 className={styles.companyName}>{ project.company.name }</h3>
  </div>
</div>
```

`src/PortalProject.css`
```
.base {
  width: 300px;
  margin-bottom: 30px;
}

.label {
  display: inline-block;
  padding: 0 4px;
  font-size: 10px;
  line-height: 20px;
  border: 1px solid #DAA520;
  border-radius: 4px;
  color: #DAA520;
}

.linkBlock {
  display: block;
  text-decoration: none;
}

.coverImage {
  display: block;
  width: 300px;
  height: 122px;
  margin-top: 12px;
}

.title {
  margin: 0;
  padding: 18px 0 12px;
  font-size: 17px;
  color: #24282A;
}

.description {
  margin: 0;
  font-size: 13px;
  font-weight: 300;
  line-height: 1.6;
  color: #6A6E71;
  -webkit-font-smoothing: antialiased;
}

.companyBlock {
  position: relative;
  width: 100%;
}

.companyAvatar {
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  height: 40px;
  border: 1px solid #EBEDEF;
  border-radius: 50%;
}

.companyName {
  margin: 16px 0 0 56px;
  font-size: 13px;
  line-height: 40px;
  color: #6A6E71;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```
