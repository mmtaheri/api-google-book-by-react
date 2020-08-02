import React from "react";

const BookCard = (props) => {
   console.log(typeof(props.imageLinks))
    return (
      
      
                            <div  className="book-column">
                      <div className="book-card">
                        <div className="book-list-content">
                            <div className="book-card-image"><img src={props.imageLinks == null ? "https://bulma.io/images/placeholders/128x128.png"   : props.imageLinks.thumbnail} alt="" /> </div>
                            <div className="book-card-body">
                                <div className="book-header">
                                    <h4 className="book-title book-hight-text">Title: {props.title}</h4>
                                    <h4 className="book-author book-hight-text">Author: {props.author != null ? props.author:"no-authors"}</h4>
                                    {/* <h4 className="book-el-link book-hight-text">{props.title}</h4> */}
                                </div>
                                <div className="book-details">
                                    <h5 className="book-publisher book-hight-text">Publisher: {props.publisher != null ? props.publisher : "No Publisher"}</h5>
                                    {/* <h5 className="book-id-number book-hight-text">Id Number: {props.id}</h5> */}
                                </div>
                                <div className="book-details-footer">
                                    <span className="book-badge book-badge-blue"> {props.pageCount != null ? props.pageCount : "#0"} p </span>
                                    <span className="book-badge book-badge-green"> {props.language != null ? props.language : "No Language"} </span>
                                    <span className="book-badge book-badge-red"> #{props.categories} </span>
                                </div>
                          

      </div>
                        </div>
                    </div>
                </div>
              
               
    )
}

// class BookCard extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.items.map((item, i) =>
//                 {
//                     let {title, imageLinks, authors, publisher, id, pageCount, language, categories} = item.volumeInfo;
//                    return(
//                     <div  className="book-column " key={i}>
//                       <div className="book-card">
//                         <div className="book-list-content">
//                             <div className="book-card-image"><img src={imageLinks.thumbnail} alt="" /> </div>
//                             <div className="book-card-body">
//                                 <div className="book-header">
//                                     <h4 className="book-title book-hight-text">Title: {title.substr(0, 40)}</h4>
//                                     <h4 className="book-author book-hight-text">Author: {authors}</h4>
//                                     <h4 className="book-el-link book-hight-text"><a href="{.canonicalVolumeLink}" >{title} </a></h4>
//                                 </div>
//                                 <div className="book-details">
//                                     <h5 className="book-publisher book-hight-text">Publisher: {publisher}</h5>
//                                     <h5 className="book-id-number book-hight-text">Id Number: {id}</h5>
//                                 </div>
//                                 <div className="book-details-footer">
//                                     <span className="book-badge book-badge-blue"> {pageCount} p </span>
//                                     <span className="book-badge book-badge-green"> {language} </span>
//                                     <span className="book-badge book-badge-red"> #{categories} </span>
//                                 </div>
//                           )

//       </div>
//                         </div>
//                     </div>
//                 </div>
//                        );
//                      })
//             }
           
//             </div>
//              )
//     }
// }
export default BookCard;
