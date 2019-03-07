"use strict";
function getInfo(name, age) {
    if (age) {
        return "\u6211\u53EB\uFF1A" + name + "\uFF0C\u4ECA\u5E74\uFF1A" + age + "\u5C81";
    }
    else {
        return "\u6211\u53EB\uFF1A" + name + "\uFF0C\u5E74\u9F84\u4FDD\u5BC6";
    }
}
console.log(getInfo('nm$l', 666));
console.log(getInfo('nm$l'));
