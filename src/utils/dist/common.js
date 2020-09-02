"use strict";
exports.__esModule = true;
exports.nameVerify = exports.formatTime = exports.parseText = exports.isContainStr = exports.processReturn = void 0;
var vue_1 = require("vue");
// 处理所有后端返回的数据
function processReturn(res) {
    // code 0:成功 1:错误 2:后端报错
    var _a = res.data, code = _a.code, msg = _a.msg, data = _a.data;
    if (code) {
        vue_1["default"].prototype.$message.error(msg);
        return;
    }
    if (msg) {
        vue_1["default"].prototype.$message.success(msg);
    }
    return data;
}
exports.processReturn = processReturn;
// 判断一个字符串是否包含另外一个字符串
function isContainStr(str1, str2) {
    return str2.indexOf(str1) >= 0;
}
exports.isContainStr = isContainStr;
/**
 * 防止网络攻击
 * @param text 文本
 */
function parseText(text) {
    var HTML = /<\/?.+?>/gi;
    var COOKIE = /document\.cookie/gi;
    var URL = /^\w+[^\s]+(\.[^\s]+){1,}$/gi;
    var HTTP = /http:\/\//gi;
    if (HTML.test(text)) {
        return '无效输入,别耍花样!';
    }
    if (COOKIE.test(text)) {
        return '无效输入,你想干嘛!';
    }
    // 解析网址
    if (URL.test(text)) {
        if (HTTP.test(text)) {
            return "<a onClick=\"window.open('" + text + "','_blank')\" target=\"_blank\">" + text + "</a>";
        }
        return "<a onClick=\"window.open('http://" + text + "','_blank')\" target=\"_blank\">" + text + "</a>";
    }
    return text;
}
exports.parseText = parseText;
/**
 * 消息时间格式化
 * @param time
 */
function formatTime(time) {
    var moment = vue_1["default"].prototype.$moment;
    // 大于昨天
    if (moment().add(-1, 'days').startOf('day') > time) {
        return moment(time).format('M/D HH:mm');
    }
    // 昨天
    if (moment().startOf('day') > time) {
        return '昨天 ' + moment(time).format('HH:mm');
    }
    // 大于五分钟不显示秒
    if (new Date().valueOf() > time + 300000) {
        return moment(time).format('HH:mm');
    }
    return moment(time).format('HH:mm:ss');
}
exports.formatTime = formatTime;
/**
 * 群名/用户名校验
 * @param name
 */
function nameVerify(name) {
    //名字正则，只含有汉字、数字、字母、下划线不能以下划线开头和结尾
    var nameReg = /^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/;
    if (name.length > 10) {
        vue_1["default"].prototype.$message.error('名字太长');
        return false;
    }
    if (name.length === 0) {
        vue_1["default"].prototype.$message.error('请输入名字');
        return false;
    }
    if (!nameReg.test(name)) {
        vue_1["default"].prototype.$message.error('名字只含有汉字、数字、字母、下划线不能以下划线开头和结尾');
        return false;
    }
    return true;
}
exports.nameVerify = nameVerify;
