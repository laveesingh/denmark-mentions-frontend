import React from 'react'
import Navbar from './navbar'
import { Grid, Paper } from 'material-ui'
import SearchForm from './search-form'
import SearchResults from './search-results'
import '../styles/home.css'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={12}>
          <Paper id="home-paper">
            <SearchForm />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper id="results-paper">
            <SearchResults />
          </Paper>
        </Grid>
      </Grid>
    )
  }
}
