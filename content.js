// content.js
(function() {
  const styleId = 'color-invert-extension-style';
  let style = document.getElementById(styleId);

  if (style) {
    // スタイルが存在すれば削除（反転を解除）
    style.remove();
  } else {
    // スタイルが存在しなければ追加（反転を適用）
    style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      html {
        filter: invert(100%) hue-rotate(180deg) !important;
        -webkit-filter: invert(100%) hue-rotate(180deg) !important;
      }
      img, video, iframe {
        filter: invert(100%) hue-rotate(180deg) !important;
        -webkit-filter: invert(100%) hue-rotate(180deg) !important;
      }
    `;
    document.head.appendChild(style);
  }
})();