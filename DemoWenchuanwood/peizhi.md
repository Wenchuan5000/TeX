# 修改

在 Typora 的 `Export > HTML (without styles)` 中，在 `Append in <body/>` 中加入

```HTML
<div id="initializer">
  <script type="text/javascript">
   document.querySelector("body").classList.add("fakePDF");
  </script>
  <script type="text/javascript" src="master/initial.js"></script>
</div>
```

在 `head` 中加入

```HTML
<link rel="stylesheet" href="master/style.css">
```

之后可能需要修改此处的路径。

