import React from "react";
import BookList from "../BookList/bookList";
import NotFound from "../NotFound/notFound";
//import SearchBox from "../SearchBox/searchBox"

class ApiSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: "",
      items: [],
      isLoading: false,
      searchInput: "",
      isFind:'hide',
      totalItem:1
   
    };
  
     this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress = (e) =>{
    this.setState({
      searchKey: e.target.value.replace(/ +/g, ""),
     });
  
    if (e.key === 'Enter'){
      this.searchBook();
    }
 
  }

  async getDataBook() {
    let searchKey = this.state.searchKey;
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchKey}`
    );
    if (!response.ok) {
      throw new Error("Could load json.");
    }
    const data = await response.json();

    if(data.totalItems > 0){
      return data;
    }
  }


  searchBook = async () => {
    if (this.state.searchKey !== '' ){
      this.setState({
        isLoading:true,
        
      });

      await this.getDataBook()
        .then((data) => {
          let { items,totalItems } = data;
                   this.setState({
                     items: items,
                     isFind:'find',
                     isLoading:false,
                     totalItem:totalItems
                   });
               
        
        
        })
        .catch((error) => {
          console.log("Error in response data");
          console.log(error);
          this.setState({
            items: [],
            isLoading:false,
            totalItem:this.state.totalItems
          });
        });
    }else{
      alert('please fill search box')
    }
  };


  render() {
    const {isFind,isLoading,totalItem} = this.state
    return (
      <div className="container">
          <div className="row">
        <div className={`search-wrap ${isFind}`}>
        <div className="search-input-field">

<button className="btn-search" type="button"  onClick={this.searchBook} disabled={this.state.isLoading} >
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
  </svg>
</button>

<input
onKeyDown={this.handleKeyPress}
  id="searchInput"
  type="text"
  placeholder="search book..."
  className="search"
/>

</div>

        </div>
    <div className={`${(isLoading) ? 'show' :''}`} id="spinner"></div>
 
 
   {totalItem > 0 ?   <BookList itemsListProp={this.state.items}  /> :<NotFound/>}
 
      {/* <BookList itemsListProp={this.state.items}  /> */}
    
      </div>
      </div>
    );
  }
}
export default ApiSearch;
