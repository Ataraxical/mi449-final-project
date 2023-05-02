function Home() {
    return (
        <div className="App">
        <div id="main-header">
          <h1 class="clickable" onClick={() => {window.location.href="/";}}>Riley's Book Blog</h1>
          <hr></hr>
        </div>
        <div className="App-header">
        <div class="container main-content" style={{width: 75 + "%", height: 100 + "vh"}}>
            <div class="container">
            <div class="row align-self-center nav-row">

            <div class="card book-card" style=
          {{width: 25 + "rem", 
          background: "none",
          border: "none",
          margin: 2 + "vh",
          fontFamily: "helvetica"}}>
              <img src={`https://covers.openlibrary.org/b/ISBN/9780316219181-L.jpg`} 
              style={{minWidth: "0", 
              borderRadius: 10 + "px",
              width: 100 + "%",
              marginBottom: 1 + "vh"}} alt="Cover of Baptism of Fire by Andrzej Sapkowski"></img>
              <div class="card-body link-button  clickable" style={{width: 100 + "%",
                  borderRadius: 10 + "px"}}>
                <p class="card-text nav-text" style={{
                  background: "none",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 1.5 + "vw"}} onClick={() => {window.location.href="/my_favorites";}}>My Favorite Books</p>
              </div>  
            </div>

            <div class="card book-card" style=
          {{width: 25 + "rem", 
          background: "none",
          border: "none",
          margin: 2 + "vh",
          fontFamily: "helvetica"}}>
              <img src={`https://covers.openlibrary.org/b/ISBN/9780545139700-L.jpg`} 
              style={{minWidth: "0", 
              borderRadius: 10 + "px",
              width: 100 + "%",
              marginBottom: 1 + "vh"}} alt="Cover of Harry Potter and the Deathly Hallows by JK Rowling"></img>
              <div class="card-body  link-button clickable" style={{width: 100 + "%",
                  borderRadius: 10 + "px"}}>
                <p class="card-text nav-text" style={{
                  background: "none",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 1.5 + "vw"}} onClick={() => {window.location.href="/best_sellers";}}>NYT Best Sellers</p>
              </div>  
            </div>

            </div>
            </div>
        </div>
        <footer id="my-footer">
            <span id="footer-text" style={{background: "none"}}>&copy; Riley Tucker</span>
        </footer>
        </div>

      </div>
    )
}

export default Home;