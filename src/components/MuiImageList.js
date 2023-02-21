import React from 'react';
import ItemData from './MuiFileConfig';
import { Stack, ImageList, Button, Typography, ImageListItem } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const MuiImageList = () => {
  return (
    <Stack spacing={10}>
      <ImageList
        sx={{
          width: 500,
          height: 450
        }}
        cols={3}
        rowHeight={164}>
        {
          ItemData.map(item => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?
                       w=164&h=164&fit=crop&
                       auto=format&dpr=2`}
                alt={item.title}
                price={item.price}
                loading='lazy' />
              <Typography
                variant='body2'
                color='text-secondary'
                fontFamily='Helvetica'>
                React is a JavaScript library for building
                user interfaces.React can be used as a base
                in the development of single-page or mobile
                applications.
              </Typography>
              <Button
                variant='contained'
                endIcon={<AddShoppingCartIcon />}
                color='success'>Cart</Button>
            </ImageListItem>
          ))
        }

      </ImageList>

    </Stack>
  )
}

