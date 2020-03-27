import React , {Componant} from 'react';

class Data extends React.Component {
    
state={
  loading : true,
  memes : [],
  i : 0
}

async componentDidMount(){
const url = "https://api.imgflip.com/get_memes";
const response = await fetch(url);
const data = await response.json();
this.setState({memes : data.data.memes , loading:false});
}

  render() {
    return(
      <div className="container">
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
      <div className="row">
        {
          this.state.memes.map((item,i)=>
           (
            this.state.i=i,
            this.state.i<1000 ?
            (
        <div className="col-sm-4">
  <div class="card bg-dark-gray">
    <img height="300" width="200" src={item.url} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{item.name}</h5>
      <p class="card-text">follow us</p>
      <p class="card-text"><small class="text-muted">#{item.id}</small></p>
    </div>
    </div>
       </div>):
       (
        <div><br/><button>Show More</button></div>
       )
     )
          )
        }
        </div>
      }
      </div>
          )
      }
    }

  export default Data;