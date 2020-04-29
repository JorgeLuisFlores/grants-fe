import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: '0 auto'
    }
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20)
  }
}));

export default function LetterAvatars() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Avatar className={classes.large}>GA</Avatar>
      </div>
      <p>Visit Our Website:</p>
      <p>www.writemygrants.net</p>
    </>
  );
}