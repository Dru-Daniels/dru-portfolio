import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  })
)

export default function ScrollTopFab() {
  const classes = useStyles()
  const trigger = useScrollTrigger({ threshold: 100 });

  function scrollToTop() {
    const anchor = document.querySelector('#root');
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <Zoom in={trigger}>
      <Fab className={classes.fab} color="primary" size="small" onClick={scrollToTop} >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  )
}