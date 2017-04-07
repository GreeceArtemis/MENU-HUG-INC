document.getElementById("toggle").addEventListener("click", function(event){
  event.preventDefault();
  document.getElementById("nav-header").classList.toggle("open");
  document.getElementById('body').classList.toggle("overflow-hidden");
});
var lastScrollTop = 0;
window.addEventListener("scroll", function(){
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScroll > lastScrollTop){
     document.getElementById('nav-background').style.display="none";
     document.getElementById("nav-header").classList.remove("header-in");
     document.getElementById("nav-header").style.opacity = 0;
   } else {
     document.getElementById('nav-background').style.display="table";
     document.getElementById("nav-header").classList.add("header-in");
     document.getElementById("nav-header").classList.add("solid");
     document.getElementById("nav-header").style.opacity = 1;
     if(currentScroll<=3){
       document.getElementById("nav-header").classList.remove("solid");
       document.getElementById("nav-header").classList.remove("header-in");
     }
   }
   lastScrollTop = currentScroll;
}, false);

var list6Lima = ["Marilu Llamocca","Ruth Cardenas","Maria Vilchez","Glisse Jorge","Ana Durand","Ruth Salvador","Leslie Avendaño","Flor Tello","Miriam Castañeda","Fiorella Arotinco","Annia Flores","Leidy Maldonado","Rosario Felix","Liliana Peña","Miriam Mendoza","Flor Condori","Naomi Villanueva" ,"Luz Gutierrez","Karin Alejo","Ingrid More","Yessenia Huamán","Fiorella Cisneros","Betsi Loayza","Mariel García","Ruth Silva","Erika Vidal","Angie Condor","Stephanie Hiyagon","Grecia Rayme","Cindy Mendoza","Mitchell Rodríguez","Maria Cutipa","Geraldine Chauca","Mary Castillo","Nadia Cuadros","Elizabeth Condori","Neiza Nuñez","Arantza Burga","Schelsen Majuan","Sandra Solorzano","Yelitza Choque","Katherine Ortega","Maricarmen Rojas","Aslheys Cabana","Nathaly Pacheco","Janine Vega" ,"Wendy Reyes" ,"Milagros Gonzales" ,"Jenny Velasquez" ,"Dana Franco" ,"Nakarid Jave","Ayda Sulca","Magali Zambrano","Flor Retamozo"];

function divImage(listaCoders,nameFile,promo){
      var contForDiv=document.getElementById(promo);
      var listaCoder=document.createElement("ul");
      for(var i=0;i<listaCoders.length;i++){
          var aux=i+1;
          var liCoder=document.createElement("li");
          liCoder.setAttribute("class","box");
          var divForCoder=document.createElement("div");

  //Agregando el nombre
          var name=listaCoders[i];

    //
          contForDiv.appendChild(divForCoder);
          divForCoder.setAttribute("id",name);
          divForCoder.setAttribute("class","grid");
          var figForCoder=document.createElement("figure");
          var imgForCoder=document.createElement("img");
          imgForCoder.setAttribute("src","assets/image/students/"+aux+".png");
          imgForCoder.setAttribute("class","img-box");
          imgForCoder.setAttribute("alt",name);
          figForCoder.appendChild(imgForCoder);

        //  var space=document.createElement("br");
        //  divForCoder.appendChild(space);

          var figcap=document.createElement("figcaption");
          figcap.setAttribute("class","center");
          var nameCoder=document.createElement("span");
          nameCoder.classList.add("nameCoder");
          nameCoder.innerHTML=name;

          figcap.appendChild(nameCoder);
          figForCoder.appendChild(figcap);
          divForCoder.appendChild(figForCoder);
          liCoder.appendChild(divForCoder);
          listaCoder.appendChild(liCoder);
      }
    contForDiv.appendChild(listaCoder);
  }

  divImage(list6Lima,"6-lima","promo");
