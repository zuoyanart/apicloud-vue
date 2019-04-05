/**
 * --------------------------------------------------------
 * witch js 工具类，包含前台字符串、cookie、图片缩放，特殊字符过滤等操作
 * @Version 0.5
 * @Author: 左盐(huabinglan@163.com)
 * @Date: 14-2-12 下午3:16
 * --------------------------------------------------------
 */
const empty = require('is-empty');
const superagent = require('superagent');

const tools = function (config = {}) {
  const self = {};

  self.sleep = function (ms) { // 等待一段时间
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  /**
   *
   */
  self.getId = function (data, idname = 'id') {
    let id = '';
    const len = data.length;
    if (len == 0) {
      return '';
    }
    for (let i = 0; i < len; i++) {
      id += data[i][idname] + ',';
    }
    id = id.substring(0, id.length - 1);
    return id;
  };
  /**
   * 合并json
   * @method
   * @param  {[type]} json        [description]
   * @param  {[type]} defaultJson [description]
   * @return [type]               [description]
   */
  self.extendJson = function (json, defaultJson) {
    for (const key in json) {
      defaultJson[key] = json[key];
    }
    return defaultJson;
  };
  /**
   * 格式化url参数
   * @method
   * @param  {[type]} data [description]
   * @return [type]        [description]
   */
  self.formatParams = function (data) {
    if (typeof (data) !== 'string') {
      var arr = [];
      for (var name in data) {
        arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
      }
      arr.push(('v=' + Math.random()).replace('.'));
      return arr.join('&');
    } else {
      return data;
    }
  };
  /**
   * ajax请求
   */
  self.httpAgent = (url, method = 'get', data = '', option = {}) => {
    if (config.apiUrl) {
      url = config.apiUrl + url;
    }
    api.showProgress({
      title: '努力加载中...',
      text: '先喝杯茶...',
      modal: false
    });
    method = method.toLowerCase();
    const jwt = encodeURIComponent(localStorage.getItem('jwt') || '{}');
    if (method === 'get' || method === 'del') {
      return new Promise(function (resolve, reject) {
        superagent[method].call(this, url)
          .set('jwt', jwt)
          .query(data)
          .end(function (err, res) {
            api.hideProgress();
            if (err || !res.ok) {
              reject(err || res.ok);
            }
            resolve(res.body);
          });
      });
    } else {
      return new Promise(function (resolve, reject) {
        superagent[method].call(this, url).send(data).set('jwt', jwt).end(function (err, res) {
          api.hideProgress();
          if (err || !res.ok) {
            reject(err || res.ok);
          }
          resolve(res.body);
        });
      });
    }
  };
  /**
   * 获取随机数
   * @param  {[type]} l [description]
   * @return {[type]}   [description]
   */
  self.randomChar = function (l) { // 获取l位随机数
    const MAX = 100000000;
    const x = '0123456789qwertyioplkjhgfsazxcvbnm';
    let tmp = '';
    for (let i = 0; i < l; i++) {
      tmp += x.charAt(Math.ceil(Math.random() * MAX) % x.length);
    }
    return tmp;
  };
  /**
   * 获取字符串长度，区分中英文
   * @param  {[type]} str [description]
   * @return {[type]}     [description]
   */
  self.getCharLen = function (str) { // 获取字符串长度，区分中英文
    return str.replace(/[^\x00-\xff]/g, 'rr').length;
  };
  // 截取字符串，区分中英文
  self.subStr = function (s, l, st) {
    let T = false;
    let r = '';
    if (self.getCharLen(s) > l) {
      st = st || '';
      l -= self.getCharLen(st);
      const S = escape(s);
      const M = S.length;
      let C = 0;
      for (let i = 0; i < M; i++) {
        if (C < l) {
          let t = S.charAt(i);
          if (t === '%') {
            t = S.charAt(i + 1);
            if (t === 'u') {
              r += S.substring(i, i + 6);
              C += 2;
              i += 5;
            } else {
              r += S.substring(i, i + 3);
              C++;
              i += 2;
            }
          } else {
            r += t;
            C++;
          }
        } else {
          T = true;
          break;
        }
      }
    }
    return T ? unescape(r) + st : s;
  };
  // 获取url的参数
  self.getPara = function (name) {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    const r = window.location.search.substr(1).match(reg);
    if (r !== null) return unescape(r[2]);
    return '';
  };
  // 计算时间差time2-time1，返回时间差的毫秒数
  self.subTime = function (time1, time2) {
    const t1 = new Date(time1);

    let t2;
    if (time2 === undefined) {
      t2 = new Date(); // 当前时间
    } else {
      t2 = new Date(time2);
    }
    return (t2.getTime() - t1.getTime()) / 1000; // 时间差的秒数
  };
  /**
   * 获取unix时间
   * @method
   * @return {[type]} [description]
   */
  self.getUnixTime = () => {
    return Math.round(new Date().getTime() / 1000);
  };
  // 时间格式化
  self.formatTime = function (time = self.getUnixTime(), fmt = 'YYYY-MM-DD HH:mm:ss') {
    const unixTimestamp = new Date(time * 1000);
    const commonTime = unixTimestamp; // .toLocaleString();
    var o = {
      'M+': commonTime.getMonth() + 1,
      // 月份
      'D+': commonTime.getDate(),
      // 日
      'h+': commonTime.getHours() % 12 === 0 ? 12 : commonTime.getHours() % 12,
      // 小时
      'H+': commonTime.getHours(),
      // 小时
      'm+': commonTime.getMinutes(),
      // 分
      's+': commonTime.getSeconds(),
      // 秒
      'q+': Math.floor((commonTime.getMonth() + 3) / 3),
      // 季度
      'S': commonTime.getMilliseconds() // 毫秒
    };
    var week = {
      '0': '\u65e5',
      '1': '\u4e00',
      '2': '\u4e8c',
      '3': '\u4e09',
      '4': '\u56db',
      '5': '\u4e94',
      '6': '\u516d'
    };
    if (/(Y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (commonTime.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    if (/(E+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? '\u661f\u671f' : '\u5468') : '') + week[commonTime.getDay() + '']);
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
      }
    }
    return fmt;
  };
  /**
   * 获取cookie
   * @param  {[type]} c    [description]
   * @param  {[type]} name [description]
   * @return {[type]}      [description]
   */
  self.getCookie = function (name) {
    let v = null;
    const t = document.cookie;
    const us = t.split(';');
    for (let i = 0; i < us.length; i++) {
      if ((us[i].split('=')[0]).trim() === name) {
        v = decodeURIComponent(us[i].split('=')[1]);
        break;
      }
    }
    return v;
  };
  // 设置cookie，不推荐使用，请在服务器端设置cookie，如需本地存储，请使用本地化存储插件pizza.ui.store.js
  self.setCookie = function (c, s, d) {
    let v = c + '=' + s;
    v += d ? '; max-age=' + (d * 24 * 60 * 60) : '';
    document.cookie = v + ';path=/';
  };
  /**
   * 获取meta标签内容
   */
  self.getMeta = function (key) {
    return document.querySelector('meta[name="' + key + '"]').getAttribute('content');
  };
  /**
   * 设置meta标签
   */
  self.setMeta = function (key, des) {
    document.querySelector('meta[name="' + key + '"]').setAttribute('content', des);
  };
  /**
   * 设置meta标签
   */
  self.setMetaKey = function (des) {
    document.querySelector('meta[name="keywords"]').setAttribute('content', des);
  };
  /**
   * 设置meta标签
   */
  self.setMetaDes = function (des) {
    document.querySelector('meta[name="description"]').setAttribute('content', des.replace(/"/g, '“'));
  };
  /**
   * 设置SEO相关属性
   * @method
   * @param  {[type]} title   [description]
   * @param  {[type]} keyword [description]
   * @param  {[type]} des     [description]
   * @return {[type]}         [description]
   */
  self.setSeo = function (title, keyword, des) {
    document.title = title + '-' + document.title;
    self.setMetaKey(keyword);
    self.setMetaDes(des);
  };

  /**
   *
   * @param {*} value
   */
  self.isEmpty = function (value) {
    return empty(value);
  };

  return self;
};

module.exports = tools;