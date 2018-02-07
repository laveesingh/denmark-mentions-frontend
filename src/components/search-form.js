import React, { Component } from 'react'
import { Grid } from 'material-ui'
import TextField from 'material-ui/TextField/TextField'
import { FormControlLabel } from 'material-ui/Form'
import Checkbox from 'material-ui/Checkbox'
import Button from 'material-ui/Button/Button'
import Collapse from 'material-ui/transitions/Collapse'
import {$SearchURL} from '../config'

class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchKeyword: '',
      searchAdvanced: false,
      allOfThese: '',
      anyOfThese: '',
      exactPhrase: '',
      excludeThese: '',
      includeUsers: '',
      excludeUsers: '',
      includeManualUsers: false,
      fromDate: '',
      tillDate: '',
      filters: false,
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
            <TextField fullWidth id="search-field" label="Search Keywords" disabled={this.state.searchAdvanced}
              onChange={this.changeSearchKeyword} value={this.state.searchKeyword}
            />
          </Grid>
          <Grid item xs={1}>
            <Button raised color="primary" onClick={() => this.setState({ filters: !this.state.filters})}>
              Filters
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button raised color="primary" onClick={() => this.setState({ searchAdvanced: !this.state.searchAdvanced })}>
              Advanced Search
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Collapse in={this.state.searchAdvanced}>
              <TextField fullWidth label="all of these"
                onChange={e => this.setState({ allOfThese: e.target.value })}
                value={this.state.allOfThese}
                />
              <TextField fullWidth label="any of these"
                onChange={e => this.setState({ anyOfThese: e.target.value })}
                value={this.state.anyOfThese}
                />
              <TextField fullWidth label="exclude these"
                onChange={e => this.setState({ excludeThese: e.target.value })}
                value={this.state.excludeThese}
                />
              <TextField fullWidth label="exact phrase"
                onChange={e => this.setState({ exactPhrase: e.target.value })}
                value={this.state.exactPhrase}
                />
            </Collapse>
          </Grid>
          <Grid item xs={12}>
            <Collapse in={this.state.filters}>
              <TextField fullWidth label="include results from users" disabled={this.state.includeManualUsers}
                onChange={e => this.setState({ includeUsers: e.target.value })}
                value={this.state.includeUsers}
                />
              <TextField fullWidth label="exclude results from users" disabled={this.state.includeManualUsers}
                onChange={e => this.setState({ excludeUsers: e.target.value })}
                value={this.state.excludeUsers}
                />
              <FormControlLabel
                control={
                  <Checkbox checked={this.state.includeManualUsers}
                    onChange={() => this.setState({ includeManualUsers: !this.state.includeManualUsers })}
                    />
                }
                label="include results from manually added users only"
                />
            </Collapse>
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
