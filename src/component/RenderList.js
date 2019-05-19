import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import User from './User'


const RenderList = (props) => {

    console.log('from render list', props.data)
    
    return props.data.map(data => {
        return (
     <div>
    <List >
    <ListItem>
      <Avatar>
        <ImageIcon />
      </Avatar>
      <ListItemText  primary={data.title} secondary={data.body}  />
    </ListItem>
    </List>
    <User id = {data.userId} />
    </div>
    )
})

}

export default RenderList;