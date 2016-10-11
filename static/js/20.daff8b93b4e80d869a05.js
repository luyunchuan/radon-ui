webpackJsonp([20,31],{2:function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),b.Mark=void 0;var d=c(7),e=function(g){return g&&g.__esModule?g:{default:g}}(d);b.Mark=e.default},3:function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var c=function(e){var f=document.createElement('div');return f.innerHTML=e,f.innerText||f.textContent};b.default={data:function(){return{mark:''}},ready:function(){this.mark=window.marked(c(this.$el.getElementsByClassName('ex-mark-text')[0].innerHTML))}}},4:function(a,b,c){b=a.exports=c(9)(),b.push([a.id,'\n.ex-mark-text {\n    display: none;\n}\n.marked p{\n    max-width: 40rem;\n}\n.marked code {\n    background: #f7f7f7;\n    color: #FF5722;\n}\n.marked pre code {\n    display: block;\n    background: #f7f7f7;\n    padding: 1rem;\n    color: #999;\n    font-size: .8rem;\n    line-height: 1.2;\n    overflow-x: auto;\n}\n.marked pre {\n    line-height: 1.5em;\n    margin: 1rem 0;\n}\n.marked {\n    font-size: .9rem;\n    line-height: 1.8;\n    color: #666;\n    max-width: 40rem;\n}\n.marked h1 {\n    font-size: 1.6rem;\n}\n.marked h2 {\n    font-size: 1.2rem;\n    position: relative;\n}\n.marked h3 {\n    position: relative;\n}\n.marked h3::before {\n    content: "#";\n    color: #00BCD4;\n    font-size: 1.2em;\n    font-weight: bold;\n    margin-right: .5rem;\n}\n.marked blockquote {\n    position: relative;\n    font-size: 90%;\n    color: #404040;\n    border-left: 4px solid #67cdfb;\n    padding-left: .8em;\n    margin: 1em 0;\n    background: #f8f8f8;\n    padding: 1rem;\n}\n.marked blockquote p {\n    margin: 0;\n}\n.marked blockquote::before {\n    position: absolute;\n    top: 14px;\n    left: -12px;\n    background-color: #67cdfb;\n    color: #fff;\n    content: "!";\n    width: 20px;\n    height: 20px;\n    border-radius: 100%;\n    text-align: center;\n    line-height: 20px;\n    font-weight: bold;\n    font-family: \'Dosis\', \'Source Sans Pro\', \'Helvetica Neue\', Arial, sans-serif;\n    font-size: 14px;\n}\n.marked ul, ol {\n    padding: 0 2rem;\n    list-style: inherit;\n}\n.marked table {\n    width: 100%;\n    max-width: 100%;\n    text-align: left;\n    border-radius: 6px;\n}\n.marked thead {\n    background: #e0f5ff;\n}\n.marked th {\n    color: rgba(0,0,0,.870588);\n    height: 3rem;\n    border-bottom: 1px solid #e9e9e9;\n}\n.marked tr > td:first-child, .marked tr > th:first-child {\n    padding-left: .5rem\n}\n.marked tr > td:last-child, .marked tr > th:last-child {\n    padding-right: .5rem\n}\n.marked tr > td {\n    height: 2rem;\n    line-height: 1rem;\n    border-bottom: 1px solid #ececec;\n}\n@media screen and (max-width: 768px) {\n    .ex-card {\n        margin: 0;\n    }\n}\n','',{version:3,sources:['/./docs/views/mark.vue'],names:[],mappings:';AACA;IACI,cAAc;CACjB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,oBAAoB;IACpB,eAAe;CAClB;AACD;IACI,eAAe;IACf,oBAAoB;IACpB,cAAc;IACd,YAAY;IACZ,iBAAiB;IACjB,iBAAiB;IACjB,iBAAiB;CACpB;AACD;IACI,mBAAmB;IACnB,eAAe;CAClB;AACD;IACI,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;IACZ,iBAAiB;CACpB;AACD;IACI,kBAAkB;CACrB;AACD;IACI,kBAAkB;IAClB,mBAAmB;CACtB;AACD;IACI,mBAAmB;CACtB;AACD;IACI,aAAa;IACb,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,oBAAoB;CACvB;AACD;IACI,mBAAmB;IACnB,eAAe;IACf,eAAe;IACf,+BAA+B;IAC/B,mBAAmB;IACnB,cAAc;IACd,oBAAoB;IACpB,cAAc;CACjB;AACD;IACI,UAAU;CACb;AACD;IACI,mBAAmB;IACnB,UAAU;IACV,YAAY;IACZ,0BAA0B;IAC1B,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,aAAa;IACb,oBAAoB;IACpB,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;IAClB,6EAA6E;IAC7E,gBAAgB;CACnB;AACD;IACI,gBAAgB;IAChB,oBAAoB;CACvB;AACD;IACI,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;CACtB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,2BAA2B;IAC3B,aAAa;IACb,iCAAiC;CACpC;AACD;IACI,mBAAmB;CACtB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,aAAa;IACb,kBAAkB;IAClB,iCAAiC;CACpC;AACD;IACI;QACI,UAAU;KACb;CACJ',file:'mark.vue',sourcesContent:['\n.ex-mark-text {\n    display: none;\n}\n.marked p{\n    max-width: 40rem;\n}\n.marked code {\n    background: #f7f7f7;\n    color: #FF5722;\n}\n.marked pre code {\n    display: block;\n    background: #f7f7f7;\n    padding: 1rem;\n    color: #999;\n    font-size: .8rem;\n    line-height: 1.2;\n    overflow-x: auto;\n}\n.marked pre {\n    line-height: 1.5em;\n    margin: 1rem 0;\n}\n.marked {\n    font-size: .9rem;\n    line-height: 1.8;\n    color: #666;\n    max-width: 40rem;\n}\n.marked h1 {\n    font-size: 1.6rem;\n}\n.marked h2 {\n    font-size: 1.2rem;\n    position: relative;\n}\n.marked h3 {\n    position: relative;\n}\n.marked h3::before {\n    content: "#";\n    color: #00BCD4;\n    font-size: 1.2em;\n    font-weight: bold;\n    margin-right: .5rem;\n}\n.marked blockquote {\n    position: relative;\n    font-size: 90%;\n    color: #404040;\n    border-left: 4px solid #67cdfb;\n    padding-left: .8em;\n    margin: 1em 0;\n    background: #f8f8f8;\n    padding: 1rem;\n}\n.marked blockquote p {\n    margin: 0;\n}\n.marked blockquote::before {\n    position: absolute;\n    top: 14px;\n    left: -12px;\n    background-color: #67cdfb;\n    color: #fff;\n    content: "!";\n    width: 20px;\n    height: 20px;\n    border-radius: 100%;\n    text-align: center;\n    line-height: 20px;\n    font-weight: bold;\n    font-family: \'Dosis\', \'Source Sans Pro\', \'Helvetica Neue\', Arial, sans-serif;\n    font-size: 14px;\n}\n.marked ul, ol {\n    padding: 0 2rem;\n    list-style: inherit;\n}\n.marked table {\n    width: 100%;\n    max-width: 100%;\n    text-align: left;\n    border-radius: 6px;\n}\n.marked thead {\n    background: #e0f5ff;\n}\n.marked th {\n    color: rgba(0,0,0,.870588);\n    height: 3rem;\n    border-bottom: 1px solid #e9e9e9;\n}\n.marked tr > td:first-child, .marked tr > th:first-child {\n    padding-left: .5rem\n}\n.marked tr > td:last-child, .marked tr > th:last-child {\n    padding-right: .5rem\n}\n.marked tr > td {\n    height: 2rem;\n    line-height: 1rem;\n    border-bottom: 1px solid #ececec;\n}\n@media screen and (max-width: 768px) {\n    .ex-card {\n        margin: 0;\n    }\n}\n'],sourceRoot:'webpack://'}])},5:function(a,b,c){var d=c(4);'string'==typeof d&&(d=[[a.id,d,'']]);var e=c(10)(d,{});d.locals&&(a.exports=d.locals)},6:function(a,b){a.exports='\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class="marked">\n    <div>\n        {{{mark}}}\n    </div>\n    <slot></slot>\n</div>\n'},7:function(a,b,c){var d,e;c(5),d=c(3),d&&d.__esModule&&1<Object.keys(d).length&&console.warn('[vue-loader] docs/views/mark.vue: named exports in *.vue files are ignored.'),e=c(6),a.exports=d||{},a.exports.__esModule&&(a.exports=a.exports.default),e&&(('function'==typeof a.exports?a.exports.options||(a.exports.options={}):a.exports).template=e)},328:function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(2),e=c(8),f=[{value:'china',label:'中国',children:[{value:'sichuan',label:'四川',children:[{value:'chegndu',label:'成都'},{value:'deyang',label:'德阳'}]}]},{value:'America',label:'美国',children:[{value:'California',label:'加利福尼亚',children:[{value:'lake',label:'湖'},{value:'Los Angeles',label:'洛杉矶'}]},{value:'Delaware',label:'特拉华',children:[{value:'Dover',label:'多佛'}]}]},{value:'china',label:'中国',children:[{value:'sichuan',label:'四川',children:[{value:'chegndu',label:'成都'},{value:'deyang',label:'德阳'}]}]},{value:'America',label:'美国',children:[{value:'California',label:'加利福尼亚',children:[{value:'lake',label:'湖'},{value:'Los Angeles',label:'洛杉矶'}]},{value:'Delaware',label:'特拉华',children:[{value:'Dover',label:'多佛'}]}]},{value:'china',label:'中国',children:[{value:'sichuan',label:'四川',children:[{value:'chegndu',label:'成都'},{value:'deyang',label:'德阳'}]}]},{value:'America',label:'美国',children:[{value:'California',label:'加利福尼亚',children:[{value:'lake',label:'湖'},{value:'Los Angeles',label:'洛杉矶'}]},{value:'Delaware',label:'特拉华',children:[{value:'Dover',label:'多佛'}]}]}];b.default={data:function(){return{cascader:{options:f,valueArr:[]}}},components:{rdCascader:e.rdCascader,Mark:d.Mark}}},571:function(a,b){a.exports='\n<div class="ex-content">\n    <div class="ex-card">\n     <mark>\n        <textarea class="ex-mark-text">\n# Cascader 级联选择\n级联选择框。\n\n## 何时使用\n\n - 需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。\n - 从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。\n - 比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。\n        </textarea>\n    </mark>\n        <p>\n            <rd-cascader :cascader="cascader"></rd-cascader>\n        </p>\n    <mark>\n        <textarea class="ex-mark-text">\n# API\n\n## cascader \ncascader 是级联组件的数据对象，它有选项数组 options 和 结果数组 valueArr\n```\ncascader: {\n    options: options,\n    valueArr: []\n}\n\n<rd-cascader :cascader="cascader"></rd-cascader>\n```\n## options\noptions 带选取的级联数据\n```\nconst options = [{\n    // label 是级联选项展示值\n    label: \'中国\',\n\n    // value 是对象自定义属性\n    value: \'china\',\n    // 也可以自定义其他属性\n    sku: \'2234234\',\n    id: \'j4jb345jb34j5\',\n\n    // 该对象的子选项数组\n    children: [{\n        value: \'sichuan\',\n        label: \'四川\',\n        children: [{\n            value: \'chegndu\',\n            label: \'成都\'\n        }, {\n            value: \'deyang\',\n            label: \'德阳\'\n        }]\n    }]\n}]\n```\n## valueArr\n选择结果数组\n\n```\n// 比如一次选择 美国 加利福尼亚 洛杉矶 valueArr会得到这样的数组\nvalueArr: [{\n    value: \'America\',\n    label: \'美国\'\n}, {\n    value: \'California\',\n    label: \'加利福尼亚\'\n}, {\n    value: \'Los Angeles\',\n    label: \'洛杉矶\'\n}]\n```\n\n        </textarea>\n    </mark>\n    <mark>\n        <textarea class="ex-mark-text">\n## 完整示例代码\n```javascript\nconst options = [{\n    value: \'china\',\n    label: \'中国\',\n    children: [{\n        value: \'sichuan\',\n        label: \'四川\',\n        children: [{\n            value: \'chegndu\',\n            label: \'成都\'\n        }, {\n            value: \'deyang\',\n            label: \'德阳\'\n        }]\n    }]\n}, {\n    value: \'America\',\n    label: \'美国\',\n    children: [{\n        value: \'California\',\n        label: \'加利福尼亚\',\n        children: [{\n            value: \'lake\',\n            label: \'湖\'\n        }, {\n            value: \'Los Angeles\',\n            label: \'洛杉矶\'\n        }]\n    }, {\n        value: \'Delaware\',\n        label: \'特拉华\',\n        children: [{\n            value: \'Dover\',\n            label: \'多佛\'\n        }]\n    }]\n}]\n\nexport default {\n    template: \'<rd-cascader :cascader="cascader"></rd-cascader>\',\n    data () {\n        return {\n            cascader: {\n                options: options,\n                valueArr: []\n            }\n        }\n    },\n    components: {\n        rdCascader\n    }\n}\n```\n        </textarea>\n    </mark>\n\n    </div>\n</div>\n'},605:function(a,b,c){var d,e;d=c(328),d&&d.__esModule&&1<Object.keys(d).length&&console.warn('[vue-loader] docs/views/form/cascader.vue: named exports in *.vue files are ignored.'),e=c(571),a.exports=d||{},a.exports.__esModule&&(a.exports=a.exports.default),e&&(('function'==typeof a.exports?a.exports.options||(a.exports.options={}):a.exports).template=e)}});