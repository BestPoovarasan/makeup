
var navbar=document.createElement("nav");
navbar.setAttribute("class","navbar","sticky-top");
navbar.innerHTML=`<div class="container">
<h4 class="navbar-brand">MAKEUP PRODUCTS</h4>
<form class="d-flex input-group w-auto">
  <input type="search" class="form-control rounded" placeholder="Search" id="text"/>
  <span<span class="input-group-text " id="search-addon">
  <i class="fas fa-search"></i></button>
  </span>
</form>`;
document.body.append(navbar);
// <-----------------------navbar end-------------------------------->
async function getdata(){
try{
  let data=await fetch("http://makeup-api.herokuapp.com/api/v1/products.json");
  let objectdata=await data.json();
  // console.log(objectdata);
  //<------ loop method----->
  // api some img can't proper work so i am use loop starting from 500
  for(var i=500;i<objectdata.length;i++){     
    // let cc= document.getElementById("txt").value
    // if (cc == objectdata[i].brand || cc == objectdata[i].name) {
    //   flag = 1; 
    let container=document.createElement("div");
   container.setAttribute("class","container");
    container.innerHTML=`
    <div class="card mb-3" style="max-width: 900px;" id="card">
  <div class="row g-0">
    <div class="col-md-4" id="card1">
    <h6 class="card-header">${objectdata[i].brand}</h6>
    <div>
    <a href="${objectdata[i].product_link}">
      <img src="${objectdata[i].image_link}" class="rounded mx-auto d-block" alt="...">
      </a>
      </div>
    </div>
    <div class="col-md-8">
      <div class="card-body id="tbody">
        <h5 class="card-title">${objectdata[i].name}</h5>
        <p class="card-text">${objectdata[i].description}</p>
        <a href="#" class="btn btn-pink-moon" id="pricebutton">$ ${objectdata[i].price}</a>
      </div>
    </div>
  </div>
</div>
</div>
`;
      document.body.append(container);
};  
  }catch(error){
 console.log(error)
  }
}
getdata();


