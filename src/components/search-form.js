import React, { Component } from 'react'
import { Grid } from 'material-ui'
import TextField from 'material-ui/TextField/TextField'
import Button from 'material-ui/Button/Button'
import {$SearchURL} from '../config'

class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchKeyword: ''
    }
  }

  componentDidMount() {
    document.getElementById('search-field').focus()
  }

  changeSearchKeyword = event => {
    this.setState({ searchKeyword: event.target.value })
  }

  initiateSearch = event => {
    event.preventDefault()
    const url = `${$SearchURL}?fullWord=${this.state.searchKeyword}`
    fetch(url)
    .then(response => response.json())
    .then(jsonResponse => {
      this.props.setPostResults(jsonResponse.results)
    })
  }

  render = () => {
    return (
      <form onSubmit={this.initiateSearch}>
        <Grid container id="search-form-container">
          <Grid item xs={9}>
            <TextField
              fullWidth
              id="search-field"
              label="Search Keywords"
              onChange={this.changeSearchKeyword}
              value={this.state.searchKeyword}
            />
          </Grid>
          <Grid item xs={1}>
            <Button raised color="primary">
              Filters
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button raised color="primary">
              Advanced Search
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button raised color="primary" onClick={this.initiateSearch}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      
    )
  }
}

export default SearchForm
