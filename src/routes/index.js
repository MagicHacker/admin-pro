/**
 * 菜单路由
 */
import { Analysis, Monitor, Workbench } from '../pages/dashboard/index';
import { FormBasic, Advanced, Step } from '../pages/form/index';
import { ListBasic, Card, Query } from '../pages/list/index';
import { DetailBasic, DetailAdvanced } from '../pages/detail/index';
import { Success, ResultError } from '../pages/result/index';
import { Cache, Nothing, ExceptionError } from '../pages/exception/index';
import { Center, Setting } from '../pages/persion/index';
export const routesList = {
  dashboard: [
    {
      name: '分析',
      path: '/homePage/dashBoard_analysis',
      component: Analysis
    },
    {
      name: '监控',
      path: '/homePage/dashBoard_monitor',
      component: Monitor
    },
    {
      name: '工作台',
      path: '/homePage/dashBoard_workbench',
      component: Workbench
    }
  ],
  form: [
    {
      name: '基础表单',
      path: '/homePage/form_basic',
      component: FormBasic
    },
    {
      name: '分布表单',
      path: '/homePage/form_step',
      component: Step
    },
    {
      name: '高级表单',
      path: '/homePage/form_advanced',
      component: Advanced
    }
  ],
  list: [
    {
      name: '查询表格',
      path: '/homePage/list_query',
      component: Query
    },
    {
      name: '标准列表',
      path: '/homePage/list_basic',
      component: ListBasic
    },
    {
      name: '卡片列表',
      path: '/homePage/list_card',
      component: Card
    }
  ],
  detail: [
    {
      name: '基础详情',
      path: '/homePage/detail_basic',
      component: DetailBasic
    },
    {
      name: '高级详情',
      path: '/homePage/detail_advanced',
      component: DetailAdvanced
    }
  ],
  result: [
    {
      name: '成功',
      path: '/homePage/result_success',
      component: Success
    },
    {
      name: '失败',
      path: '/homePage/result_error',
      component: ResultError
    }
  ],
  exception: [
    {
      name: '403',
      path: '/homePage/exception_cache',
      component: Cache
    },
    {
      name: '404',
      path: '/homePage/exception_nothing',
      component: Nothing
    },
    {
      name: '500',
      path: '/homePage/exception_error',
      component: ExceptionError
    }
  ],
  persion: [
    {
      name: '个人中心',
      path: '/homePage/persion_center',
      component: Center
    },
    {
      name: '个人设置',
      path: '/homePage/persion_setting',
      component: Setting
    }
  ]
};
