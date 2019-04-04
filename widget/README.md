# YDUI APICLOUD 开发框架
Apicloud + Vue2 + YDUI+ parcel打包，是一个采用Vue数据绑定特性和Apicloud手机操控能力相结合的APP开发框架，此框架并非采用Vue的SPA单页面应用方式，而是遵从Apicloud的多页面原生渲染效率方式，Vue+Parcelk只是为了提供更佳的ES2015+语法、模块化和数据绑定代码体验，弥补Apicloud本身无法应用在庞大工程协作的缺点。


# 目录结构
- dist 编译代码，
- src 源代码，所有开发在此开始，除pages、templates目录外，其他目录可随意增删
    - components vue公用模块
    - plugins 公共库
    - **pages** Apicloud使用openWin和openFrame打开的页面，vue组件化
    - **templates** Parcel编译时的模板文件
        - index.ejs  html模板
        - main.ejs main.js模板
- .syncignore 不同步到Apploader的文件列表
- config.xml Apicloud配置文件
- 其他

# 开始使用
 git clone 或者 直接下载master包，cd进入包目录   
 ```
 #> npm i   
 #> npm run dev 开启本地测试   
 #> npm run build 编译
 ```

 # 开发细节

### 首页入口
框架默认index.html为App首页入口，你也可以修改其他页面为入口，只需修改config.xml即可   

### Apicloud API SDK
你可以在vue中直接使用 api.xxx条用api

### ES6支持，LESS支持

### 按需加载和异步加载
> 手机CPU和内存有限，而且Apicloud采用Hybird技术，在性能上尤其低端安卓上肯定大打折扣，所以使用按需加载、异步加载和懒加载会更好地让App保持流畅原生感
