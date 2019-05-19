import React from 'react'
import {connect} from 'react-redux'
import { fetchpost } from '../actions'
import RenderList from './RenderList';

class Postlist extends React.Component {

    componentDidMount(){  

        this.props.fetchpost();

    }


    render(){
        
        
        return (
            <div>
            <RenderList data = {this.props.post} />
            </div>
        )
    }
}

const mapstatetoprops = (state) => {

    return {post : state.post};

}

export default connect(mapstatetoprops, { fetchpost })(Postlist)