import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import EmailIcon from '@material-ui/icons/Email';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: 1,
      color: '#fff',
    },
    root: {
      height: 0,
      flexGrow: 1,
    },
    speedDial: {
      position: 'fixed',
      bottom: theme.spacing(2),
      left: theme.spacing(2),
    },
  })
);

export default function SpeedDialTooltipOpen() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [icon, setIcon] = React.useState(<FavoriteBorderIcon />);

  const SocialLinks: any = {
    GitHub: 'https://github.com/Dru-Daniels',
    Contact: 'mailto:drudaniels@gmail.com?subject=Business%20Inquiry',
    Twitter: 'https://twitter.com/DruCodesAlong',
    LinkedIn: 'https://www.linkedin.com/in/dru-daniels/',
  };

  const actions = [
    {
      icon: (
        <EmailIcon
          style={{ fill: '#525cbe' }}
          onClick={() => handleClick('Contact')}
        />
      ),
      name: 'Contact',
    },

    {
      icon: (
        <GitHubIcon
          style={{ fill: '#3b5998' }}
          onClick={() => handleClick('GitHub')}
        />
      ),
      name: 'Github',
    },
    {
      icon: (
        <LinkedInIcon
          style={{ fill: '#0e76a8' }}
          onClick={() => handleClick('LinkedIn')}
        />
      ),
      name: 'LinkedIn',
    },
    {
      icon: (
        <TwitterIcon
          style={{ fill: '#00acee' }}
          onClick={() => handleClick('Twitter')}
        />
      ),
      name: 'Twitter',
    },
  ];

  const handleClick = (network: string) => {
    handleClose();
    window.open(SocialLinks[network], '_blank');
  };

  const handleOpen = () => {
    setOpen(true);
    setIcon(<FavoriteIcon style={{ fill: '#d24769' }} />);
  };

  const handleClose = () => {
    setOpen(false);
    setIcon(<FavoriteBorderIcon />);
  };

  return (
    <div className={classes.root}>
      <Backdrop open={open} className={classes.backdrop} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        className={classes.speedDial}
        icon={icon}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        FabProps={{
          color: 'default',
          size: 'small',
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            id={action.name}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipPlacement="right"
          />
        ))}
      </SpeedDial>
    </div>
  )
}