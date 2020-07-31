import React from "react";

class CardBook extends React.Component {
    render() {
        return (
            <div>
                {this.props.items.map((item, i) =>
                {
                    let {title, imageLinks, authors, publisher, id, pageCount, language, categories} = item.volumeInfo;
       return(
                <div class="book-column ">
                    <div class="book-card">
                        <div class="book-list-content">
                            <div class="book-card-image"><img src={imageLinks.thumbnail} alt="" /> </div>
                            <div class="book-card-body">
                                <div class="book-header">
                                    <h4 class="book-title book-hight-text">Title: {title.substr(0, 40)}</h4>
                                    <h4 class="book-author book-hight-text">Author: {authors}</h4>
                                    <h4 class="book-el-link book-hight-text"><a href="{.canonicalVolumeLink}" >{title} </a></h4>
                                </div>
                                <div class="book-details">
                                    <h5 class="book-publisher book-hight-text">Publisher: {publisher}</h5>
                                    <h5 class="book-id-number book-hight-text">Id Number: {id}</h5>
                                </div>
                                <div class="book-details-footer">
                                    <span class="book-badge book-badge-blue"> {pageCount} p </span>
                                    <span class="book-badge book-badge-green"> {language} </span>
                                    <span class="book-badge book-badge-red"> #{categories} </span>
                                </div>
      )

      </div>
                        </div>
                    </div>
                </div>
                 );
                })
            }
           
            </div>
             )
    }
}
export default CardBook;
