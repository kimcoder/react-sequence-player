# react-simple-image-slider
[![ReactJs][react-image]][react-url]
[![Download Count][download-image]][download-url]
[![GitHub license][license-image]][license-url]

[react-image]: https://img.shields.io/badge/ReactJS-%5E16.4.2-blue.svg
[react-url]: https://reactjs.org
[download-image]: http://img.shields.io/npm/dm/react-simple-image-slider.svg?style=flat
[download-url]: http://www.npmjs.com/package/react-simple-image-slider
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: https://github.com/kimcoder/react-simple-image-slider/blob/master/LICENSE

Simple ImageSlider Component for ReactJS v16.0<br>
- Just Two Elements will be used. (for display images)
- Support GPU Render, by default. 
- Support Image Preload.
- Selectable Navgation Styles.

# Live demo 
- <a href="https://kimcoder.github.io/demo/react-simple-image-slider/" target="_blank">Go to Site</a><br><br>
![demo gif](https://github.com/kimcoder/react-simple-image-slider/raw/master/demo.gif)


# Install
```
// npm
npm install react-simple-image-slider --save

// yarn
yarn add react-simple-image-slider
```

# Usage
```
import SimpleImageSlider from "react-simple-image-slider";

class App extends React.Component {
    render() {
        const images = [
            { url: "images/1.jpg" },
            { url: "images/2.jpg" },
            { url: "images/3.jpg" },
            { url: "images/4.jpg" },
            { url: "images/5.jpg" },
            { url: "images/6.jpg" },
            { url: "images/7.jpg" },
        ];

        return (
            <div>
                <SimpleImageSlider
                    width={896}
                    height={504}
                    images={images}
                />
            </div>
        );
    }
}
```
If You want to see more detail source,<br>
- [`example/App.jsx`](https://github.com/kimcoder/react-simple-image-slider/blob/master/example/App.jsx)<br>

# Props
|Name|Type|Required|Description|Default|
|:--:|:--:|:-----:|:----------|:------|
|**width**|`Number`|`Required`|Image Slider Width||
|**height**|`Number`|`Required`|Image Slider Height||
|**images**|`Array`|`Required`|Images,<br>Array Elements should be like this structure,<br>{ url: "" }||
|**style**|`String`|`Optional`|css object||
|**slideDuration**|`Number`|`Optional`|css transition-duration property|`0.5`|
|**navStyle**|`Number`|`Optional`|Arrow Navgation Style,<br>1 or 2|`1`|
|**showNavs**|`Boolean`|`Optional`|Toggle Arrow Navgation|`true`|
|**showBullets**|`Boolean`|`Optional`|Toggle Bullets|`true`|
|**useGPURender**|`Boolean`|`Optional`|Toggle GPU Render|`true`|
|**bgColor**|`String`|`Optional`|slider container's css background-color property|`#000000`|
|**onClickNav**|`Function`|`Optional`|Arrow Navigation Callback function,<br>`onClickNav = (toRight) => { }`<br>toRight : Boolean : slide direction||
|**onClickBullets**|`Function`|`Optional`|Bullets Callback function,<br>`onClickBullets = (idx) => { }`<br>idx : Number : clicked bullet index (begin from 0)||
|**onStartSlide**|`Function`|`Optional`|Slide Transition Start function,<br>`onStartSlide = (idx, length) => { }`<br>idx : Number : start index (begin from 1)<br>length : Number : image length||
|**onCompleteSlide**|`Function`|`Optional`|Slide TransitionEnd Callback function,<br>`onCompleteSlide = (idx, length) => { }`<br>idx : Number : start index (begin from 1)<br>length : Number : image length||

If You want to see more detail,<br>
- [`src/ImageSliderPropTypes.js`](https://github.com/kimcoder/react-simple-image-slider/blob/master/src/ImageSliderPropTypes.js)
- [`example/app.jsx`](https://github.com/kimcoder/react-simple-image-slider/blob/master/example/App.jsx)<br>

# Development
### directory & source
- ``./example/`` : demo site souce for testing component
- ``./src/`` : image slider component source
- ``./dist/`` : image slider component distribution
- ``./babelrc`` : babel configure. (version 7.x)
- ``./webpack.config.js`` : webpack configure. (version 4.x)
- ``./rollup.config.js`` : rollup configure.

### scripts
```
// npm
npm run example         // run a test app(demo) by webpack dev server
npm run build           // build the image slider component by rollup
npm run build:watch     // build watch mode

// yarn
yarn example
yarn build
yarn buidl:watch
```
If you want to run a test app, should build before do that.<br>

After run example by webpack dev server,<br>
open ``http://localhost:8080/`` in a browser<br>

# License
MIT