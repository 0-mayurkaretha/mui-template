import React from "react"
import { Box, Card, CardHeader, Avatar, CardMedia, CardContent, Typography, CardActions, IconButton, Checkbox } from '@mui/material'
import { MoreVert, Favorite, Share, FavoriteBorder } from '@mui/icons-material'

const Post = () => {
  return (
    <div>
      <Card sx={{ margin: 5}}>
        <CardHeader
          avatar={ <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">R</Avatar>}
          action={ <IconButton aria-label="settings"><MoreVert /></IconButton>}
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          sx={{ height: { xs : "150px", sm: "500px" }}}
          image="https://source.unsplash.com/random"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  )
};

export default Post;