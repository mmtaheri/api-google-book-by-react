import React from 'react';
import CardBook from '../../components/bookCard/bookCard'


class ApiSearch extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchKey : '',
            items:[],
            //isLoading: false,
            searchInput: '',
        }
        this.getDataBook=this.getDataBook.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(event){
        if(event.key ==='Enter')
        this.getDataBook();
      }
      
      handleSearch = (e) => {
        this.setState({ searchKey: e.currentTarget.value })
    }

 

      async getDataBook(){
        let searchKey = this.state.searchKey;
          const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchKey}`);
          if (!response.ok) {throw new Error("Could load json.");}
          const data = await response.json();
          console.log(data)
          return data;
      }

      searchBook = async () => {
        console.log('click')
        if (this.state.searchKey.trim() !=='') {
          await this.getDataBook()
          .then(data => {
            let {items} = data;
            this.setState({
              items : items
            })
            console.log(data)
          })
          .catch(error => {
            console.log('Error in response');
            console.log(error);
        })
      }
    }
    // handleChange(e){
    //   this.setState({
    //     searchKey: e.target.value
    //   })
    // }

    render() {
      return (
        <div>
        <div className="search-input-container">
        <input onChange={this.handleSearch} id="searchInput" className="search-input" placeholder="Find book ..." type="text" />
        <button className="search-btn" onClick={this.searchBook} disabled={this.state.isLoading} type="submit">Find</button>
    </div>


        <CardBook items={this.state.items} />
        </div>
      )
    }

  
  
    }
export default ApiSearch