import React from 'react'
import { fetchuser } from '../actions'
import { connect } from 'react-redux'


class User extends React.Component {


    
    componentDidMount(){  
        this.props.fetchuser(this.props.id);
    }

    render(){        
        const user = this.props.user.find(user => user.id === this.props.id)
        if(!user){
            return <div> Loading...</div>
        }
        return(
            <div>
                {user.name}
            </div>
        )
    }
}

const mapstatetoprops = (state) => {

    return { user : state.user };

}


export default connect(mapstatetoprops,{ fetchuser })(User);