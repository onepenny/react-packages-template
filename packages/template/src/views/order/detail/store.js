import ReduceStore from 'flux/lib/FluxReduceStore'
import Dispatcher from '@/base/dispatcher/AppDispatcher'

const RESET = 'page_order/RESET'
const UPDATE = 'page_order/UPDATE'
const UPDATE_BASE = 'page_order/UPDATE_BASE'
const UPDATE_FLAG = 'page_order/UPDATE_FLAG'
const TOGGLE_FLAG = 'page_order/TOGGLE_FLAG'
const UPDATE_PAGE = 'page_order/UPDATE_PAGE'
const UPDATE_OFFICIAL_ACCOUNT = 'page_order/UPDATE_OFFICIAL_ACCOUNT'

const initState = {

    // 页面数据
    page: {
        status: 0, // 0  1 loading 2 ok 3 empty 4 error
        mode: 'presell', // desk takeout presell
        source: '',
        query: {},
    },

    flag: {
        // 一些标识位
        isOpenPayDetail: false,
        isLayerOpen: false,
        isOpenRefund: true,
    },

    // 一些 id
    code: {
        takeoutCode: '',
        entityId: '',
        orderId: '',
        barCode: '',
        phoneCode: '',
        stockId: '',
        seatCode: '',
        orderType: 7,
    },

    // 状态
    base: {
        status: '', // 唯一的状态
        takeoutOrderStatus: '', // 外卖唯一状态
        orderStatus: 0,
        payStatus: 0,
        countDownSecond: 1000,

        // 外卖专有
        deliveryType: '', // 外卖配送类型
        reserveType: '', // 外卖预约类型
        noDiscountTipShown: 0, // 不享受折扣tip是否已经展示过
        changeStatus: 1, // 改签状态：number  1-可改签 2-不可改签_已免费改签 3-不可改签_超出可改签时间
    },

    // 支付信息
    payment: {
        open: true,
    },

    // 用户
    user: {
        name: '',
        avatar: '',
    },

    info: {
        people: 1,
        memo: '',
        seatName: '',
    },

    // 头部信息
    header: {
        title: '',
        desc: '',
    },
    officialAccount: {
        isOpen: false,
    },

    titles: { // 顶部各标题
        // orderTitle: '',
        // noticeTitle: '',
        // tipTitle: '',
        // noticeTitleClass: '',
        // tipTitleClass: '',
    },

    // 预售外卖用 start
    shop: { // 店铺信息
        shopId: '',
        shopName: '',
        shopAddress: '',
    },
    step: [ // 配送进度
        // {name: 'xxx', on: true}
    ],
    deliveryInfo: { // 骑手配送信息
        deliveryType: 2,
        riderName: '', // 骑手名字
        riderMobile: '', // 骑手手机号
        link: '', // 配送信息url
    },
    orderTipList: [ // 底部订单展示信息
        // {
        //     label: '',
        //     value: '',
        // }
    ],
    // 预售外卖用 end
}

class PageStore extends ReduceStore {
    constructor() {
        super(Dispatcher)
    }

    getInitialState() {
        return { ...initState }
    }

    reduceUpdate(state, action) {
        return { ...state, ...action.data }
    }

    reduceUpdataBase(state, action) {
        const { base } = state
        const { data } = action
        return { ...state, base: { ...base, ...data } }
    }

    reduceUpdateFlag(state, action) {
        const { flag } = state
        const { data } = action
        return { ...state, flag: { ...flag, data } }
    }

    reduceUpdatePage(state, action) {
        const { page } = state
        const { data } = action
        return { ...state, page: { ...page, ...data } }
    }

    reduceToggleFlag(state, action) {
        const { flag } = state
        const { key } = action
        return { ...state, flag: { ...flag, [key]: !flag[key] } }
    }

    reduceOfficialAccount(state, action) {
        const { officialAccount } = state
        const { data } = action
        return { ...state, officialAccount: { ...officialAccount, ...data } }
    }



    reduce(state = { ...initState }, action) {
        switch (action.type) {
            case RESET:
                return { ...initState }
            case UPDATE:
                return this.reduceUpdate(state, action)
            case UPDATE_BASE:
                return this.reduceUpdataBase(state, action)
            case UPDATE_PAGE:
                return this.reduceUpdatePage(state, action)
            case UPDATE_FLAG:
                return this.reduceUpdateFlag(state, action)
            case TOGGLE_FLAG:
                return this.reduceToggleFlag(state, action)
            case UPDATE_OFFICIAL_ACCOUNT:
                return this.reduceOfficialAccount(state, action)
            default:
                return state
        }
    }
}

export const Store = new PageStore()

export function update(data) {
    Dispatcher.dispatch({
        type: UPDATE,
        data,
    })
}

export function reset() {
    Dispatcher.dispatch({
        type: RESET,
    })
}
export function updateBase(data) {
    Dispatcher.dispatch({
        type: UPDATE_BASE,
        data,
    })
}

export function updateFlag(data) {
    Dispatcher.dispatch({
        type: UPDATE_FLAG,
        data,
    })
}

export function toggleFlag(key) {
    Dispatcher.dispatch({
        type: TOGGLE_FLAG,
        key,
    })
}

export function updatePage(data) {
    Dispatcher.dispatch({
        type: UPDATE_PAGE,
        data,
    })
}
export function updateOfficialAccount(data) {
    Dispatcher.dispatch({
        type: UPDATE_OFFICIAL_ACCOUNT,
        data,
    })
}

