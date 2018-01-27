import React from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem
} from 'material-ui'
import MenuIcon from 'material-ui-icons/Menu'
import UserGuide from './user-guide'
import '../styles/navbar.css'

export default class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      surveyMenuEl: null
    }
  }

  openSurveyMenu = event => {
    this.setState({ surveyMenuEl: event.currentTarget })
  }

  closeSurveyMenu = event => {
    this.setState({ surveyMenuEl: null })
  }

  render() {
    return (
      <AppBar position="static" color="primary" className="navbar">
        <Toolbar>
          <IconButton color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography
            type="display2"
            component="h1"
            className="navbar-headline"
          >
            Denmark Mentions
          </Typography>
          <Button
            aria-owns={this.state.surveyMenuEl ? 'survey-menu' : null}
            aria-haspopup="true"
            onClick={this.openSurveyMenu}
            className="navbar-btn"
          >
            Open Surveys
          </Button>
          <SurveyMenu
            surveyMenuEl={this.state.surveyMenuEl}
            closeSurveyMenu={this.closeSurveyMenu}
          />
          <UserGuide />
        </Toolbar>
      </AppBar>
    )
  }
}

const SurveyMenu = props => (
  <Menu
    id="survey-menu"
    anchorEl={props.surveyMenuEl}
    open={Boolean(props.surveyMenuEl)}
    onClose={props.closeSurveyMenu}
  >
    <MenuItem onClick={props.closeSurveyMenu} className="survey-menu-item">
      <a
        target="blank"
        className="survey-link"
        href="https://www.socialbakers.com/statistics/facebook/pages/total/denmark/"
      >
        Facebook
      </a>
    </MenuItem>
    <MenuItem onClick={props.closeSurveyMenu} className="survey-menu-item">
      <a
        target="blank"
        className="survey-link"
        href="https://www.socialbakers.com/statistics/youtube/channels/denmark/"
      >
        YouTube
      </a>
    </MenuItem>
    <MenuItem onClick={props.closeSurveyMenu} className="survey-menu-item">
      <a
        target="blank"
        className="survey-link"
        href="https://www.socialbakers.com/statistics/twitter/profiles/denmark/"
      >
        Twitter
      </a>
    </MenuItem>
  </Menu>
)
