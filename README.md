### 图片库组件，包括懒加载、获取最佳图片尺寸等功能
#### 参数

```javascript
{
    'container': 懒加载容器DOM节点
    'class': 'lazyload-img',// img元素class名称
    'dataSrc': 'data-src',// 懒加载图片存放位置
    'q': '90q',// 图片质量,默认90q,
    'size': '',// cdn尺寸,默认无缩放尺寸，200x0,表示按宽度缩放,即200w;0x200表示按高度缩放，即200h；200x200表示宽高缩放，即200w_200h
    'sharpen': '',// 锐化参数,默认无锐化
    'lazyHeight': 0,
    'lazyWidth': 0,
    'fireEvent': 'scroll',
    'webp': true // true表示使用webp格式，否则不是要webp格式， 默认值为true
}
```

#### 属性

* img src="" data-size="200x200" data-quality="90q"
    - data-size表示图片裁剪尺寸，优先级高于js初始化设置参数，值同参数
    - data-quality表示图片使用质量，优先级高于js初始化设置参数,值同参数

#### 使用方式

```javascript
1、AMD
define(['img'], function(Img){
    var img = new Img(config);
    img.fireLazyload();
});

2、CMD
var Img = require('img');
var img = new Img(config);
img.fireLazyload();

3、全局使用
var img = new SGLib.img(config);
img.fireLazyload();
```



### ChangeLog

* 1.3.4
    - 修复水印图片参数拼接问题
* 1.3.3
    - 页面跳转导致图片加载失败后，图片无法再次加载bugfix
* 1.3.2
    - 图片加载成功去掉data-loading属性
* 1.3.1
    - 弱网下图片重复加载bugfix
* 1.3.0
    - 只支持jpg、jpeg等格式质量和锐化，webp、png格式质量和锐化反而文件变大
* 1.2.9
    - 无后缀bugfix
* 1.2.8
    - 非webp格式图片无图片质量bugfix
* 1.2.7
    - webp格式去掉图片质量、锐化参数，并优化链接
* 1.2.6
    - 优化性能
* 1.2.5
    - 去掉懒加载后是否删除class参数, 不删除class
* 1.2.4
    - webp检查时机存在误差bugfix
* 1.2.3
    - 增加图片参数匹配功能
    - 去掉data-cdn参数功能
* 1.2.2
    - webp判断时机修改
* 1.2.1
    - webp支持判断bugfix
* 1.2.0
    - 添加webp格式支持
    - 添加懒加载后是否删除class参数