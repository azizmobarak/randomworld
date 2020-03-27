import React from 'react';

class Search extends React.Component{

state = {
    loading : true ,
    artciles : [],
    query :""
}
async componentDidMount()
{
 await this.performSearch();

}
  performSearch = (query = 'sport') => {
    fetch(`http://newsapi.org/v2/everything?q=${query}&from=2020-02-26&sortBy=publishedAt&apiKey=099a9e2e1ec54fbf82af805493521962`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          artciles: responseData.articles,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }



  render(){

return(
    <div className="container">
    <br/><br/>
    <div className="row">
    {this.state.loading ? 
        <div class="d-flex justify-content-center">
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
     this.state.artciles.map((item,i)=>(
     <div className="col-sm-4">
     <div class="card bg-dark-gray">
     <img height="300" width="200" src={item.urlToImage} class="card-img-top" alt="..."/>
     <div class="card-body">
       <h5 class="card-title"><a href={item.url}>{item.title}</a></h5>
       <p class="card-text">{item.description}</p>
       <p class="card-text"><small class="text-muted">#{item.source.name}</small></p>
     </div>
     </div>
     </div>
     ))
    
    }
    </div>
    </div>
)

  }
    
}

export default Search;