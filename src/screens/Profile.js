import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Popover from '@material-ui/core/Popover';
import toRenderProps from 'recompose/toRenderProps';
// import Modal from '@material-ui/core/Modal';
// import Tooltip from '@material-ui/core/Tooltip';
// import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import withState from 'recompose/withState';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Avatar alt="Remy Sharp" src="" className={classes.avatar} />
    </div>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);
const WithState = toRenderProps(withState('anchorEl', 'updateAnchorEl', null));

render() {
    return (
      <div>
	  <Grid item>
            <Tooltip disableFocusListener disableTouchListener title="Add">
              <Button>Hover</Button>
            </Tooltip>
          </Grid>
      </div>
    );
  }


export default TriggersTooltips;
const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
      },
  typography: {
    margin: theme.spacing.unit * 2,
  },
});
function FloatingActionButtons(props) {
    const { classes } = props;
    return (
      <div> 
      <Button variant="fab" color="secondary" aria-label="Edit" className={classes.button}>
      <Icon>edit_icon</Icon>
      </Button>
      </div>
  );
}

function RenderPropsPopover(props) {
  const { classes } = props;

  return (
    <WithState>
      {({ anchorEl, updateAnchorEl }) => {
        const open = Boolean(anchorEl);
        return (
          <React.Fragment>
            <Button
              aria-owns={open ? 'render-props-popover' : undefined}
              aria-haspopup="true"
              variant="contained"
              onClick={event => {
                updateAnchorEl(event.currentTarget);
              }}
            >
              Profile picture
            </Button>
            <Popover
              id="render-props-popover"
              open={open}
              anchorEl={anchorEl}
              onClose={() => {
                updateAnchorEl(null);
              }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Typography className={classes.typography}>Logout</Typography>
            </Popover>
          </React.Fragment>
        );
      }}
    </WithState>
  );
}
const styles = theme => ({
    card: {
      maxWidth: 400,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
      marginLeft: 'auto',
      [theme.breakpoints.up('sm')]: {
        marginRight: -8,
      },
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    
  });
  
  class expandCard extends React.Component {
    state = { expanded: false };
  
    handleExpandClick = () => {
      this.setState(state => ({ expanded: !state.expanded }));
    };
  
    render() {
      const { classes } = this.props;
  
      return (
        <Card className={classes.card}>
          <CardHeader
            avatar={
          
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title=""
            subheader=""
          />
          <CardMedia
            className={classes.media}
            image=""
            title="Paella dish"
          />
          <CardContent>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              
            </CardContent>
          </Collapse>
        </Card>
      );
    }
FloatingActionButtons.propTypes = {
    classes: PropTypes.object.isRequired,
  };
}

ExpandCard.propTypes = {
  classes: PropTypes.object.isRequired,
};



RenderPropsPopover.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ExpandCard);
export default withStyles(styles)(FloatingActionButtons);
export default withStyles(styles)(RenderPropsPopover);