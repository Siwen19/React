import React, { Component } from 'react';
import '../App.css';
import { Row, Col, Button } from 'antd';

class Item extends Component {

    render() {
        const { data } = this.props;
        return (
            <Row className='_2sIJNTYn_0'>
                <Col span={16}>
                    <div className='_375JP52X_0'>
                        <div className='nQ1vjNuY_0'>
                            <img src={data.image} style={{ borderRadius: '5px' }} />
                        </div>
                        <div>
                            <div className='_5YI_2ktv_0'>
                                <span className='_3jkBOcV5_0'>{data.title}</span>
                            </div>
                            <div className='mVoj0P6r_0'>共 {data.lessons} 讲 |
                        已学{data.learned} 讲 | 学完 {((data.learned / data.lessons) * 100).toFixed(2)} %
                        </div>
                        </div>
                    </div>
                </Col>
                <Col span={5} style={{ paddingTop: '25px' }}>专栏</Col>
                <Col span={3} style={{ paddingTop: '25px' }}><Button type="primary">开始学习</Button></Col>
            </Row>

        )
    }
}
export default Item;
