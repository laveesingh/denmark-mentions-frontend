import React, { Component } from 'react'
import { Grid } from 'material-ui'
import TextField from 'material-ui/TextField/TextField'
import Button from 'material-ui/Button/Button'

class SearchForm extends Component {
  render() {
    return (
      <Grid container id="search-form-container">
        <Grid item xs={9}>
          <TextField fullWidth id="search-field" label="Search Keywords" />
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
      </Grid>
    )
  }
}

export default SearchForm
