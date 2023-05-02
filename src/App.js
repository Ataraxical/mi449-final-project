import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import logo from './logo.svg';
import './App.css';
import {Route, Routes, Link, BrowserRouter} from "react-router-dom";
import Home from "./Home";
import TopSellers from "./best_sellers";
import FavoriteBooks from "./my_favorites";


// const nytAPIKey = "2d3QKe3w466G0BFPOKtminCpiAqCguYP";
const nytAPIKey = "NrtMQjDy866FyiUi2tti46BtexGu1RtW ";


/*
function Library() {
  const [myBooks, setMyBooks] = useState([]);
  async function getMyBooks() {
    let {data: books} = await supabase
      .from('books')
      .select('*')

    setMyBooks(books);
  }


  getMyBooks();


  return (
    <table className="books-table">
      <tr className="label-row">
          <td className="label-entry">Title</td>
          <td className="label-entry">Author</td>
          <td className="label-entry">ISBN</td>
      </tr>

      {
        myBooks.map(b => (
          <tr className="entry-row">
            <td className="table-entry">{b.title}</td>
            <td className="table-entry">{b.author}</td>
            <td className="table-entry">{b.isbn}</td>
          </tr>
        ))
      }
    </table>
  )
}

function TopSellers() {


  const [books, setBooks] = useState([]);

  /*
  useEffect(() => {
    axios
    .get('https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=' + nytAPIKey)
    .then (res => {
      //console.log(res);
      setBooks(res.data.results);
    })
  })

  
  useEffect(() => {
    axios
    .get('https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=' + nytAPIKey)
    .then (res => {
      console.log(res);
      setBooks(res.data.results);
    })
  }, [])



  return (
    <div class="container main-content" style={{width: 75 + "%"}}>
    
    {
    books.map(book => (
      <div class="row align-self-center book-entry">
        <div class="card book-card" style=
        {{width: 15 + "rem", 
        background: "none",
        border: "none",
        margin: 2 + "vh",
        fontFamily: "helvetica"}}>
            <img src={`https://covers.openlibrary.org/b/ISBN/${book.book_details[0].primary_isbn10}-M.jpg`} 
            style={{minWidth: "0", 
            borderRadius: 10 + "px",
            width: 100 + "%",
            marginBottom: 1 + "vh"}}></img>
            <div class="card-body clickable" onClick={() => {window.location.href=`${book.amazon_product_url}`;}} style={{width: 100 + "%",
                borderRadius: 10 + "px"}}>
              <p class="card-text book-title" style={{
                background: "none",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 1.5 + "vw"}}>{book.book_details[0].title}</p>
            </div>
        </div>
        <div class="col book-description" style={{position: "relative",
      fontSize: 2 + "vw"}}>
          <p class="align-text-bottom" style={{position: "absolute", bottom: 0}}>{book.book_details[0].description}</p>
        </div>
        <hr></hr>
      </div>
    ))
    }

    </div>
  )
}

*/

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/best_sellers" element={<TopSellers />} />
          <Route exact path="/my_favorites" element={<FavoriteBooks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


let test = [{"name": 1, "two": 3}, {"name": 2, "two": 4}, {"name": 4, "two": 6}];
console.log(test);

export default App;
