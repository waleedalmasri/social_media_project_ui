import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Post from './Post';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Popover from '@material-ui/core/Popover';
import NewPost from './NewPost';
import axios_config from '../axios_service/axios_config';

export default function Home() {
  const useStyles = makeStyles((theme) => ({
    root: {
      position: 'sticky',
      bottom: 50,
      left: '95%',
      backgroundColor: '#2196f3',
    },
    typography: {
      padding: theme.spacing(2),
    },
    post: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      backdropFilter: 'blur(8px)',
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let [currentUserPosts, setCurentUserPosts] = useState([]);
  useEffect(() => {
    let arr = [];
    axios_config
      .get('/post.json')
      .then((res) => {
        const posts = res.data;
        const indeces = Object.keys(posts);
        for (let i = 0; i < indeces.length; i++) {
          const postContent = posts[indeces[i]]['postContent'];
          const imageURL = posts[indeces[i]]['imageURL'];
          const likes = posts[indeces[i]]['likes'];
          const comments = posts[indeces[i]]['comments'];
          const publishDate = posts[indeces[i]]['publishDate'];
          const post = {
            publishDate: publishDate,
            postContent: postContent,
            imageURL: imageURL,
            likes: likes,
            comments: comments,
          };
          arr = [...arr, post];
        }
        setCurentUserPosts(arr);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderPosts = () => {
    return currentUserPosts.map((post, index) => (
      <Post post={post} key={`post-id-${index}-${index}`} />
    ));
  };

  const classes = useStyles();
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div>
      <Box
        alignItems="center"
        justifyContent="center"
        width={200}
        p={3}
        display={'inline'}
        position="sticky"
        borderRight={1}
        top={70}
      >
        <Checkbox color={'primary'} />
        Filters
      </Box>
      {renderPosts()}
      <IconButton className={classes.root}>
        <AddIcon onClick={handleClick} />
      </IconButton>

      <Popover
        className={classes.post}
        anchorReference={'anchorPosition'}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        anchorPosition={{
          top: 400,
          left: 920,
        }}
      >
        <NewPost />
      </Popover>
    </div>
  );
}
