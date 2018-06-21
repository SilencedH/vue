//常用工具函数


const formatTime = (time) => {
  let year = time.getFullYear().toString();
  let month = (time.getMonth() + 1).toString();
  let day = time.getDate().toString();
  let hours = time.getHours().toString();
  let minutes = time.getMinutes().toString();
  let seconds = time.getSeconds().toString();
  let str = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
  return str;
};
//格式化GMT时间 格式：2017-08-23 10:50:50
const formatTime1 = (time) => {
  let year = time.getFullYear().toString();
  let month = (time.getMonth() + 1).toString();
  let day = time.getDate().toString();
  let hours = time.getHours().toString();
  let minutes = time.getMinutes().toString();
  let seconds = time.getSeconds().toString();
  month = checkLength(month);
  day = checkLength(day);
  hours = checkLength(hours);
  minutes = checkLength(minutes);
  seconds = checkLength(seconds);
  let str = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
  return str;
};
//检查长度是否为1，若是，补0
const checkLength = (val) => {
  if (val.length == 1) {
    val = '0' + val;
  } else {}
  return val;
};

//格式化GMT时间,精确到这一天的开始
const formatTimeS = time => {
  let year = time.getFullYear().toString();
  let month = (time.getMonth() + 1).toString();
  let day = time.getDate().toString();
  let hours = time.getHours().toString();
  let minutes = time.getMinutes().toString();
  let seconds = time.getSeconds().toString();
  month = checkLength(month);
  day = checkLength(day);
  let str = year + '-' + month + '-' + day + ' ' + '00:00:00';
  return str;
}
//格式化时间，精确到这一天的结束
const formatTimeE = time => {
  let year = time.getFullYear().toString();
  let month = (time.getMonth() + 1).toString();
  let day = time.getDate().toString();
  let hours = time.getHours().toString();
  let minutes = time.getMinutes().toString();
  let seconds = time.getSeconds().toString();
  month = checkLength(month);
  day = checkLength(day);
  let str = year + '-' + month + '-' + day + ' ' + '23:59:59';
  return str;
  return str;
}
//格式化时间，格式为201710
const formatMonth = time => {
  let year = time.getFullYear().toString();
  let month = (time.getMonth() + 1).toString();
  month = checkLength(month);
  return year + month;
};


//将对象属性置为空
const cleanObj = obj => {
  for (let item in obj) {
    obj[item] = "";
  }
};
//将一个对象的属性赋值给另一个对象
const objAssign = (obj1, obj2) => {
  for (let item in obj1) {
    obj1[item] = obj2[item];
  }
};

//对象克隆
const objClone = (obj2) => {
  let obj1 = new Object();
  for (let item in obj2) {
    obj1[item] = obj2[item];
  }
  return obj1;
};



/*
 *使用正则处理一些字符串*
 */
//去除前后空格
const myTrim = (str) => {
  return str.replace(/(^\s*)|(\s*$)/g, "");
};
//数字验证
const isNumber = (str) => {
  let reg = new RegExp("^[0-9]*$");
  return reg.test(str);

};
//有0-2位小数的正实数
const twoDecimalPlace = (str) => {
  let reg = new RegExp('^[0-9]+(.[0-9]{1,2})?$');
  return reg.test(str);
};


//十二月份对象,供select下拉框使用
const months = [
  { value: "01", label: '一月' }, { value: "02", label: '二月' }, { value: "03", label: '三月' }, { value: "04", label: '四月' },
  { value: "05", label: '五月' }, { value: "06", label: '六月' }, { value: "07", label: '七月' }, { value: "08", label: '八月' },
  { value: "09", label: '九月' }, { value: "10", label: '十月' }, { value: "11", label: '十一月' }, { value: "12", label: '十二月' }
];

/**
 * 字符串转时间
 * 入参格式：yyyy-MM-dd HH:mm:ss
 * return 时间对象
 */
const stringToDate = (fDate) => {
  let fullDate = fDate.split(" ");
  let date = fullDate[0].split("-");
  let time = fullDate[1].split(":");
  return new Date(date[0], date[1]-1, date[2], time[0], time[1], time[2]);
};


let utils = {
  formatTime: formatTime,
  formatTimeS: formatTimeS,
  formatTimeE: formatTimeE,
  formatMonth:formatMonth,
  cleanObj: cleanObj,
  objAssign: objAssign,
  objClone: objClone,
  myTrim: myTrim,
  isNumber: isNumber,
  twoDecimalPlace: twoDecimalPlace,
  months: months,
  stringToDate: stringToDate
};

export default utils;
