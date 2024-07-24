import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import InfiniteScroll from "react-infinite-scroll-component";

export class NewsComponent extends Component {

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)}- news app`
    }

    async updateNews() {
        this.props.setProgress(0)
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        this.props.setProgress(30)
        let parseData = await data.json()
        this.props.setProgress(70)
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false
        })
        this.props.setProgress(100)


    }

    async componentDidMount() {
        this.updateNews()

    }

    fetchMoreData = async () => {
       

        this.setState({ page: this.state.page + 1 })

            const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parseData = await data.json();
            this.setState({
                articles: this.state.articles.concat(parseData.articles),
                totalResults: parseData.totalResults,
            });
        
    };

    render() {
        return (
            <>
                <h2 className='text-center'>News -- Top Headlines About {this.capitalizeFirstLetter(this.props.category)} </h2>
                {this.state.loading && <Loading />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Loading />}
                >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element, index) => {
                                return <div className="col-md-3" key={`${element.url}-${index}`}>
                                    <NewsItem title={element.title ? element.title.slice(0, 30) : ""} discription={element.description ? element.description.slice(0, 60) : ""} imageUrl={element.urlToImage ? element.urlToImage : ""} newsDetail={element.url ? element.url : ""} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}


                        </div>
                    </div>
                </InfiniteScroll>

            </>
        )
    }
}

export default NewsComponent
