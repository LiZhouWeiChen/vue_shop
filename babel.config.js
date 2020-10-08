module.exports = {
  "presets": [
    "@vue/cli-plugin-babel/preset"
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ],
    //发布产品时候的插件数组??  用了会报错 现在自带
    // ...prodPlugins,
    // '@babel/plugin-syntax-dynamic-import'
  ]
}