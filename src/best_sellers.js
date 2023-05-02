import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';

const nytAPIKey = "NrtMQjDy866FyiUi2tti46BtexGu1RtW ";

function TopSellers() {


    const [books, setBooks] = useState([]);
  
    useEffect(() => {
      axios
      .get('https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=' + nytAPIKey)
      .then (res => {
        //console.log(res);
        setBooks(res.data.results);
      })
    }, [])
  
  
    return (
    <div className="App">
      <div id="main-header">
        <h1 class="clickable" onClick={() => {window.location.href="/";}}>NYT Hardcover Fiction Bestsellers</h1>
        <hr></hr>
      </div>
      <div className="App-header">
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
              <div class="card-body clickable link-button" onClick={() => {window.location.href=`${book.amazon_product_url}`;}} style={{width: 100 + "%",
                  borderRadius: 10 + "px"}}>
                <p class="card-text book-title" style={{
                  background: "none",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 1.2 + "vw"}}>{book.book_details[0].title}</p>
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
      <footer id="my-footer">
            <span id="footer-text" style={{background: "none"}}>&copy; Riley Tucker</span>
        </footer>
      </div>
    </div>
    )
  }

  /*    <div className="App">
      <div id="main-header">
        <h1>NYT Hardcover Fiction Bestsellers</h1>
        <hr></hr>
      </div>
      
      <header className="App-header">
          <TopSellers/>
      </header>
    </div> */

export default TopSellers;
  