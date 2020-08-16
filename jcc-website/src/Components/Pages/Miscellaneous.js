import React, {Component} from 'react';
import { getPhotoLinks } from './utils';
import JustifiedGrid from 'react-justified-grid';

class Miscellaneous extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [],
            loading: true
        }
    }

    componentDidMount() {
        getPhotoLinks('miscellaneous').then((res) => {
            this.setState(() => {
                return {
                    images: res,
                    loading: false
                }
            })
        })
    }
    
    toRender() {
        return (
            <div>
                <JustifiedGrid
                    images={this.state.images}
                    rows={10000}
                    maxRowHeight={900}
                    gutter={1} />
            </div>
        )
    };

    render() {
        return (
            <div>
                {this.state.loading ? <div>loading</div> : this.toRender()}
            </div>
        )
    }
}

export default Miscellaneous