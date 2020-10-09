import React, {PureComponent} from 'react'

export default class DonateList extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            items:[],
            visible: 10,
            error: false,
            loading:false
        };

        this.loadMore = this.loadMore.bind(this);
    }



    loadMore() {
        this.setState({
            loading: true
        });
        this.setState((prev) => {
            return {visible: prev.visible + 10};
        });
    }


    componentDidMount() {
        const items = this.props;
        const obj = Object.entries(items).map(([key, value]) => ({key, value}))
        this.setState({
            items: obj[0].value
        });
    }



    render() {


        const donateList = this.state.items.slice(0, this.state.visible).map((item,index) =>
            <div key={index} className="table-row">
                <div className="name">{item.name}</div>
                <div className="text">{item.text}</div>
                <div className="price">{item.price} BTC</div>
            </div>
        );

        return (
            <>
            <div className="donate-list">
                <div className="table-header">
                    Money already donated:
                </div>
                {donateList}

            </div>
                <div className="table-footer">
                    <div className="empty">

                    </div>
                    <div className="btn">
                        {this.state.visible < this.state.items.length &&
                        <button onClick={this.loadMore} type="button" className={this.state.loading ? 'load-more loading' : 'load-more'}>
                            Load More
                        </button>
                        }

                    </div>
                    <div className="total">
                        TOTAL: 23.0270054901 BTC
                    </div>
                </div>
            </>

        )
    }
}