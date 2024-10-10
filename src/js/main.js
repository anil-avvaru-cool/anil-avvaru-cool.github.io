import '../css/main.css';

const companyName = 'Rihati Technologies';

function pageLoad()
        {
          const elem = document.getElementById("companyNameHeading");
          elem.innerHTML = companyName;
        }
        window.onload = pageLoad;

class MyNavBar extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">Home</a>
              </li>              
              <li class="nav-item">
                <a class="nav-link" href="about-us.html">About us</a>
              </li>             
              <li class="nav-item">
                <a class="nav-link" href="#">Testimonial</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>`
    }
}

customElements.define('my-nav-bar',MyNavBar);

class MyHeader extends HTMLElement{
  constructor() {
    super();    
  }
    connectedCallback(){      
      const titleVal = this.getAttribute("title");
      const descriptionVal = this.getAttribute("description");
      
        this.innerHTML = `
        <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">    
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link href="../css/main.css" rel="stylesheet">
    <title>${companyName} - ${titleVal}</title>
    <meta name="description" content="${descriptionVal}">
</head>`
    }
}

customElements.define('my-header',MyHeader);

class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer>    
           <div class="row justify-content-center">
        <div class="col-lg-6 fs-6">
        <p class="text-center cust-small-font">  
  <a href="index.html" class=" border-0">
                  Home
                </a>
                <a href="contact.html" class=" border-0">Contact us</a>
                <a href="about-us.html" class=" border-0">About us</a>
                <a href="sitemap.html" class="border-0">Site Map</a> 
  </p>
        
        </div>
         <div class="row justify-content-center">
        <div class="col-lg-6 " >
        <p class="text-center cust-small-font">  
  &copy; ${new Date().getFullYear()}, ${companyName}, Hand crafted website using bootstrap from scratch.</p>
        </div>
        </div>
</footer>`
    }
}

customElements.define('my-footer',MyFooter);

