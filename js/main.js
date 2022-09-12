

let btnAdd = document.getElementById("btnAdd");  // definición de la variable para Agregar

btnAdd.addEventListener("click", function (e) {  // función del botón Agregar  
    e.preventDefault();

    let no = document.getElementById("Name");
    let num = document.getElementById("Number");      //definición de variables

    console.log(no.value, num.value);
    console.log(typeof (no.value), typeof (num.value));

    // begin validación producto
    if (no.value.length >= 3) {

        no.classList.remove("is-invalid");
        no.classList.add("is-valid");

    } else {

        no.classList.remove("is-valid");
        no.classList.add("is-invalid");
    
    }                                   // validación producto

    // begin validación cantidad
    if (num.value.length >0) {

        num.classList.remove("is-invalid");
        num.classList.add("is-valid");
        
    } else {
    
        num.classList.remove("is-valid");
        num.classList.add("is-invalid");

    }                                    //end validación cantidad


    let cont = 1;
    let lista = [];                 //new array
    let key = "compras";
    let  productos= {"id" : cont, "producto": no.value}; 
    console.log("producto: ", productos.producto);
    console.log("id: ", productos.id);                                                
    lista.push(productos);
    console.log(productos);

    localStorage.setItem(key, JSON.stringify(lista));

     
   if (localStorage.getItem(key) != null) {
    let tmp = JSON.parse(localStorage.getItem(key));

    let precio =    Math.random ()*57;
    let ul = document.getElementsByClassName("list-group");    //definición de variables
    console.log(ul[2]);
    /* let li = document.createElement("li");
    li.innerHTML = `${no.value}`;
    li.classList.add("list-group-item");
    ul[2].append(li); */

    let ul2 = document.createElement("ul");
    ul2.classList.add("list-group");
    ul2.classList.add("list-group-horizontal");

    ul2.innerHTML = `<li class="list-group-item col-md-4">${cont}</li>
                     <li class="list-group-item col-md-4">${no.value}</li>
                     <li class="list-group-item col-md-4">${num.value}</li>
                     <li class="list-group-item col-md-4"> $ ${precio.toFixed(2)}</li>`;  
    ul[2].after(ul2);                                           // DOM lista


     alert1.style.display ="none"; 
     setTimeout(() => {alert1.style.display = "block"});
  } 

  localStorage.getItem(key);
  alert1.style.display ="none";
 

})


