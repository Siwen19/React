- router 
    1. react-router
    react-router-dom
        react-router-config
    2. react-router 嵌套
        config routes 配置一下就清晰了

- 路由的本质是什么？
    路由级别的页面 二级路由

- 当路由比较复杂时，传统的手写 router/route 配置难以维护，企业级的 router 配置方案 react-router-config，清晰，可维护的 routes/index.js 配置。layout app 里总有几套皮肤，匹配那个级别的所有路由
routes react-router-config renderRoutes(route, routes)
