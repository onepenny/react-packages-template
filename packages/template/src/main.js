import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router'
import routes from '@/routes';
import '@/styles/reset.less';
import '@/styles/global.less';
// import 'antd/dist/antd.less'; // 引入官方提供的 less 样式入口文件
import '@/styles/theme.less'; // 用于覆盖上面定义的变量

ReactDOM.render(
  <Router history={hashHistory} routes={routes} />,
  document.getElementById('app')
);
