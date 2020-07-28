import { axiosInstance } from './config'; 

// 项目所有请求API的列表文件 每个请求都是一个函数 每个函数都返回一个Promise
// axiosInstance.get 返回是Promise
// 首页广告
export const getBannerRequest = () => {
    return axiosInstance.get("/banner");
}
// 推荐列表
export const getRecommendListRequest = () => {
    return axiosInstance.get("/personalized");
};
// 歌手列表 支持分页 接口请求规范：要传 offset
// reducer init = {singerList: [], offset: 0}
// // useEffect dispatch getHotSingerList 异步-> getHotSingerListRequest API 请求
// then 
// changeSingerList [...oldSingerList, ...data] 同步
// changeOffset 同步
    // better-scroll baseUI 上拉触底加载更多 

export const getHotSingerListRequest = count => {
    return axiosInstance.get(`/top/artists?offset=${count}`);
};
// history.push() Link 
export const getSingerInfoRequest = id => {
    return axiosInstance.get(`/artists?id=${id}`);
};
