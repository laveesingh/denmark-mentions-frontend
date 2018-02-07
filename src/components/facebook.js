import React, { Component } from 'react';

export class FacebookPost extends Component {

  constructor(props) {
    super(props)
    this.state = {
      width: 250,
      height: 500
    }
  }

  componentDidMount() {
    this.iframe.onload = () => {
      console.log(this.iframe.contentWindow)
    }
  }

  increaseHeight = event => {
    this.setState({ height: event.target.value })
  }

  increaseWidth = event => {
    this.setState({ width: event.target.value })
  }

  render() {
    return (
      <div style={{width: `${this.state.width}px`}} className='post-wrapper-div' > 
        <div style={{margin: '10px'}}>
          <label>Height:</label><input type="number" step="100" value={this.state.height} 
            onChange={this.increaseHeight} style={{ width: '25%' }}
            className='post-height-manager'
          />
          <label>Width:</label><input type="number" step="100" value={this.state.width} 
            onChange={this.increaseWidth} style={{ width: '25%' }}
            className='post-height-manager'
          />
        </div>
        <iframe ref={iframe => this.iframe = iframe } title={this.props.postLink}
          src={`https://www.facebook.com/plugins/post.php?href=${this.props.postLink}%2F&show_text=true&appId`}
          scrolling="yes" width="100%" height={`${this.state.height}px`} style={{ border: 'none' }}
          >
        </iframe>
      </div>
    );
  }
}
