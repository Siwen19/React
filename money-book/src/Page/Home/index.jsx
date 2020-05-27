import React from 'react';
import { BrowserRouter, Route, Link,
  Switch,
  useRouteMatch
} from 'react-router-dom';
import HomeHeader from './HomeHeader'
import List from './List';
import Chart from './Chart';

// hook: 也是一个方法
// <> 组件： React.fragment
function Index() {
  let { path, url } = useRouteMatch();
  console.log(path, url);
  return (
    <React.Fragment>
      <HomeHeader />
      <Link to={`${url}/list`}>列表模式</Link>
      <Link to={`${url}/chart`}>图表模式</Link>
      <Switch >
        <Route path={path} exact >
          <List />
        </Route>
        <Route path={`${path}/list`}>
          <List />
        </Route>
        <Route path={`${path}/chart`}>
          <Chart />
        </Route>
      </Switch>
    </React.Fragment>
  )
}

export default Index; 
