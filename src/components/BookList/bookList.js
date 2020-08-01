import React from "react";
import BookCard from "../BookCard/bookCard";

const BookList = (props) => {
 
  return (
      <div className="container">

    
    <div className="row">
      {props.itemsListProp.map((item, i) => {
         
        let {
          title,
          imageLinks,
          authors,
          publisher,
          pageCount,
          language,
          categories,
        } = item.volumeInfo;

        return (
          <BookCard
            key={i}
            title={title}
            author={authors}
            imageLinks={imageLinks}
            publisher={publisher}
            pageCount={pageCount}
            language={language}
            categories={categories}
          />
        );
      })}
    </div>
    </div>
  );
};

export default BookList;
