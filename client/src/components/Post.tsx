import React, { useState } from 'react';
import { Box, Typography, IconButton, Divider, TextField, Modal, Button } from '@mui/material';
import { ThumbUpAltOutlined, CommentOutlined, ShareOutlined } from '@mui/icons-material';
import { CommentType, PostType } from '../ts/types';

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleLike = () => {
    // Handle liking the post
  };

  const handleComment = () => {
    // Handle opening the comment section
  };

  const handleShare = () => {
    // Handle sharing the post
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box
      bgcolor='white'
      p={2}
      boxShadow={1}
      borderRadius={4}
      marginBottom={2}
      position='relative'
    >
      <Typography
        variant='h6'
        gutterBottom
      >
        {post.title}
      </Typography>
      <Typography
        variant='body1'
        paragraph
      >
        {post.description}
      </Typography>
      <Box
        display='flex'
        alignItems='center'
        marginBottom={1}
      >
        <Button
          variant='outlined'
          onClick={handleOpenModal}
        >
          View Resume
        </Button>
      </Box>

      <Box
        height={400}
        width={250}
        my={4}
        display='flex'
        alignItems='center'
        gap={4}
        p={2}
        sx={{ border: '2px solid grey', overflow: 'hidden' }}
      >
        <iframe
          title='resume-pdf'
          src={post.resumeLink}
          width='100%'
          height='80%'
          style={{ border: 'none' }}
        />
      </Box>

      <Typography
        variant='caption'
        color='textSecondary'
        gutterBottom
      >
        Posted by {post.userName}
      </Typography>

      {/* Actions Section */}
      <Box
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        marginTop={1}
      >
        <Box
          display='flex'
          alignItems='center'
        >
          <IconButton onClick={handleLike}>
            <ThumbUpAltOutlined />
          </IconButton>
          <Typography variant='body2'>{post.likes} Likes</Typography>
          <IconButton onClick={handleComment}>
            <CommentOutlined />
          </IconButton>
          <Typography variant='body2'>{post.comments.length} Comments</Typography>
        </Box>
        <Box>
          <IconButton onClick={handleShare}>
            <ShareOutlined />
          </IconButton>
        </Box>
      </Box>

      {/* Divider */}
      <Divider style={{ margin: '8px 0' }} />

      <Box>
        {post.comments.map((comment: CommentType) => (
          <Box
            key={comment.id}
            marginBottom={1}
          >
            <Typography variant='body2'>
              <strong>{comment.userName}</strong>: {comment.text}
            </Typography>
          </Box>
        ))}
        <TextField
          variant='outlined'
          placeholder='Add a comment...'
          fullWidth
          margin='dense'
        />
      </Box>

      {/* PDF Viewer Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby='pdf-viewer-modal'
        aria-describedby='pdf-viewer-description'
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50px',
            left: '50px',
            right: '50px',
            bottom: '50px',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            overflow: 'auto'
          }}
        >
          <iframe
            title='resume-pdf'
            src={post.resumeLink}
            width='100%'
            height='100%'
            style={{ border: 'none' }}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default Post;
