import React from 'react';
import CardBook from '../../components/bookCard/bookCard'


class ApiSearch extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchKey : '',
            items:[],
            isLoading: false,
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

<div className="search-input-field">
  <button className="btn-search" type="button"  onClick={this.searchBook} disabled={this.state.isLoading}>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
  </svg>
  </button>
  <input onChange={this.handleSearch} id="searchInput" type="text" placeholder="search book..."  className="search"/>
  </div>
        <CardBook items={this.state.items} />
        </div>
      )
    }

    }
export default ApiSearch