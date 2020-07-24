import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from './store/actionCreators';

function Recommend(props) {
    const { recommendList, banners, enterLoading, getRecommendListDataDispatch,
        getBannerDataDispatch } = props;
    console.log(banners, enterLoading, recommendList);

    useEffect(() => {
        if (!recommendList.length) {
            getRecommendListDataDispatch();
        }
        if (!banners.length) {
            getBannerDataDispatch();
        }
    }, []);
    return (
        <>
            Recommend
        </>
    )
};

const mapStateToProps = (state) => ({
    recommendList: state.recommend.recommendList,
    banners: state.recommend.banners,
    enterLoading: state.recommend.enterLoading
})

const mapDispatchToProps = (dispatch) => {
    return {
        getRecommendListDataDispatch() {
            dispatch(actionTypes.getRecommendList());
        },
        getBannerDataDispatch() {
            dispatch(actionTypes.getBanners());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend)); 
