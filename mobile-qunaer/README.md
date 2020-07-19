1. css reset
    normalize.css
    index.css css 移动业务的设置

2. 无状态组件的创建流程可以练习
    - 组件插入父级组件中，思考好props
    - 组件的类型如果是无状态组件
        prop-types css propTypes
        形参props
        return (<div></div>)
    - props 解构出来我们要的prop
    - 功能函数建议由父组件来打理，纯粹的负责 render 好处：有可能这个函数可以复用

3. 年轻的React hoocks 全新开发方式
    class component -> function
    函数式编程
    class + constructor + 生命周期 + render -> function + react hoocks
    - useCallBack() 缓存一个函数
    - useMemo() 缓存值

4. 状态组件编写顺序
    - 数据 Provider store

5. redux
    - redux API -> 设计状态（reducer + actions）
        初始值 from to 两个reducer函数
        函数初始值action return 初始值
        状态的改变 SET_FROM
        - switch case
        - {type, payload} action
        - actionTypes 可读性
        - actions 写出来
            from 北京
            to 南昌

    - 简单的redux 项目结构
        store.js createStore reducers
            中间件 axios redux-thunk 支持异步
        reducer.js combineReducers
        action.js 数据请求，状态改变的触发都由actions来负责
            ActionTypes 可读性

    - 数据组件化
    1. connect 高阶返回原组件
        connect({
            mapState,
            mapDispatch
        })(Component)
    2. 创建组件
    3. 状态组件，无状态组件重用方法

    - reducer 
        1. action 标准做法 返回 {type: payload} 更新reducer状态
        - 组件里的事件、生命周期等功能 主要是和数据状态打交道 归为action来做
        - 所有的action export function 在组件里引入需要的actions
        - bindActionCreators actions 变成本地调用的函数 dispatch
        - useMemo 缓存函数
        - connect 中第二个参数返回action
        


