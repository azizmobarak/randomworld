import React , {Componant} from 'react';
import ig from '../images.jpg';
import igg from '../images.png';
import iggg from '../download.jpg';
import Search from "../back/searchresults";
import Animals from '../front/animals';

class Home extends React.Component {
  
  constructor(props){
    super(props);
  this.state = {
    loading : true ,
    articles : [],
    query :"all",
    term:"",
    filterarticles : []
}
  }

  newsearch(term){
      term=this.state.term;
      let a = [];
     this.state.articles.map((item,i)=>{
      if(this.state.articles.title=="cant reset windefender keys")
       {
            a.push(this.state.articles[i]);
            this.setState({filterarticles:a});
       }
    })
  }


async componentDidMount()
{
 await this.performSearch();

}
  performSearch = (query = this.state.query) => {
    fetch(`http://newsapi.org/v2/everything?q=all&from=2020-02-27&sortBy=publishedAt&apiKey=099a9e2e1ec54fbf82af805493521962`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          articles: responseData.articles,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }


render()
{   
  const {term,articles,filterarticles} = this.state;
return(
<div className="container-fluid">
<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-interval="3000">
        <img height="400px" src={ig} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-interval="3000">
      <img height="400px" src={igg} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-interval="3000">
      <img height="400px" src={iggg} class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
<br/><br/>
  <div class="row">
   <div className="container">
   <p className="text text-center">Here you can search for Memes and News</p>
   <div class="form">
      <input onChange={this.newsearch('Dos And Don’ts For Restaurant Orders During The Coronavirus Crisis')} id="sbar" type="text" placeholder="Search" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
   </div>
   </div>
  </div>
  <div className="row">
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
    <div class="spinner-grow text-gray" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-dark" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    </div>
      :
   filterarticles.map((item,i)=>(
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
  )})}
</div>
 </div>
  )

}

}

export default Home;