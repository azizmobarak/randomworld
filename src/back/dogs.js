import React from 'react';

class Dogs extends React.Component{

state = {
    loading : true ,
    images : ""
}
async componentDidMount()
{
    const url = 'https://dog.ceo/api/breeds/image/random';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({images : data.message,loading:false})
}

  render(){

return(
    <div className="container">
    <h1 className="text text-center">Random Dogs pictures</h1><br/>
    <a href="/dogs"><button>Reload again</button></a>
    <br/><br/>
    {this.state.loading ? 
        <div>
      <div class="spinner-grow text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-secondary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-success" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-danger" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-warning" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-info" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-light" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-dark" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      </div>
        :
    
    <div class="card">
    <img src={this.state.images} class="card-img-top" alt="..."/><br/>
    </div>
    }
    </div>
)

  }
    
}

export default Dogs;