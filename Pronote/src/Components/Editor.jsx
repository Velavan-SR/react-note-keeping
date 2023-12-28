import React, { Component } from 'react'

export default class Editor extends Component {

    constructor(props) {
        super(props)
        this.handleChange =this.handleChange.bind(this);
        this.state = {
                  value: ''
        }
      }
  
      handleChange(e){
          this.setState({value: e.target.value});
      }

  render() {
    return (
      <div id='main-container'>

        <div id='input'>
            <h3>Your Input</h3>
            <textarea className='input-text' onChange={this.handleChange} defaultValue={this.state.value}/>
        </div>

        <div id='output'>
            <h3>Pro Note</h3>
            <div className='output-text'>{this.state.value}</div>
        </div>
      
      </div>
    )
  }
}
