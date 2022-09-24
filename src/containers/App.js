import React,{Component} from 'react';
import CardList from '../components/CardList.js';
import Scroll from '../components/Scroll';
import Searchbox from '../components/Searchbox';
import './App.css';
import ErrorBoundry from '../ErrorBoundry.js';


class App extends Component {
  constructor(){
  super()
  this.state = {
      robots : [],
      searchfield: ''
    }
  }

   componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    .then(user => {this.setState({ robots: user})});
  } 

  onChangeOfSearchBoxVal = (event) => {
    this.setState({searchfield : event.target.value})
    }

  render(){
    const filteredArray = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
      if(this.state.robots.length ===0){
        return <h1> LOADING </h1>
         }
      else{
          return(
           <div className= ' dib tc br1 pa3  ma1' >
          {/* <div className = ' tc bg-light-pink br1 pa3 ma3 dim'> */}
             <h1 className= 'f1'> Robofriends </h1>
             <Searchbox searchValueChange = {this.onChangeOfSearchBoxVal} />
          {/* </div> */}
              <Scroll>
                <ErrorBoundry>
                  <CardList robots= {filteredArray} />
                </ErrorBoundry> 
              </Scroll>
            </div>
            );
        }
  }
  
}

export default App;