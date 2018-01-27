import React, { Component } from 'react'

import { Grid } from 'material-ui'
import { FacebookPost } from './facebook';

class SearchResults extends Component {

  // componentWillMount() {
  // }
  render() {
    console.log('search-results mounted, postresults:', this.props.postResults)
    return (
      <Grid container>
        {this.props.postResults && this.props.postResults.map(post => {
          let postLink = post.link
          let len = postLink.length
          if (postLink[len-1] === '/') postLink = postLink.substring(0, len-1)
          return (
            <Grid item xs={3}>
              <FacebookPost postLink={postLink} />
            </Grid>
          )
        })}
      </Grid>
    )
  }
}

export default SearchResults
