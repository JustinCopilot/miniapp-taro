export default defineAppConfig({
  pages: [
    'pages/index/index'
  ],
  "subPackages": [
    {
      "root": "xiao-c/sub-ai-main",
      "pages": [
        "pages/foo/index"
      ]
    }
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
