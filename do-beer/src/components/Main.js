import React from 'react';
import Search from './Search';
import Results from './Results';
import Header from './Header';
// StatefulComponent StatelessComponent
class Main extends React.Component {
    // 集列表，搜索于一体
    constructor() {
        super();
        this.state = {
            beers: [],
            loading: true
        }
    }

    loadBeers(searchTerm = 'hops') {
        const localStorageBeers = localStorage.getItem(`search-${searchTerm}`)
        if (localStorageBeers) {
            const localBeers = JSON.parse(localStorageBeers);
            this.setState({
                beers: localBeers,
                loading: false
            })
            return;
        }
        fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`)
            .then(data => data.json())
            .then(data => {
                const beers = data.data || [];

                this.setState({
                    loading: false,
                    beers
                })
                // 业务
                // 列表记录相关 
                localStorage.setItem(`search-${searchTerm}`,
                    JSON.stringify(this.state.beers))
                console.log(data);
            })
    }

    componentDidMount() {
        console.log(this.props)
        console.log(this.props.match.params);
        // console.log(this.props.match.path);
        // console.log(this.props.match.params.searchTerm);
        const params = this.props.match.params || {};
        const searchTerm = params.searchTerm || undefined;
        this.loadBeers(searchTerm);
    }

    componentDidUpdate(prevProps) {
        console.log('did update');
        // 新的参数
        const currentSearchTerm = this.props.match.params.searchTerm;
        const oldSearchTerm = prevProps.match.params.searchTerm;
        // console.log(currentSearchTerm);
        // console.log(oldSearchTerm);
        if (currentSearchTerm !== oldSearchTerm) {
            this.loadBeers(currentSearchTerm);
        }
    }
    render() {
        return (
            <div>
                <Header siteName="Beer me!" />
                <Search />
                {/* 搜索组件 */}
                <Results beers={this.state.beers} loading={this.state.loading} />
            </div>
        )
    }
}

export default Main;