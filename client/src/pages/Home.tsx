import React from 'react';
import { Container, Grid } from '@mui/material';
import { dummyPosts } from '../constants';
import { PostType } from '../ts/types';
import Post from '../components/Post';

const HomePage = () => {
  return (
    <Container maxWidth='lg'>
      <Grid
        container
        spacing={2}
      >
        {dummyPosts.map((post: PostType) => (
          <Grid
            item
            xs={12}
            key={post.id}
          >
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
