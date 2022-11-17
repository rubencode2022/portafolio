let proyectos = [];


window.onload = function () {


    CargarProyectos();
if(proyectos.length>0){
    
    let pro = document.getElementById('misProyectos');
    let strProyectos = '';

    proyectos.forEach(function(item){
        strProyectos = strProyectos + '<div class="col"><div class="card h-100">'
        +'<img src="'+item.ImagenURL+'" class="card-card-img-top" />'
        +'<div class="card-body">'
        +'<h5 class="card-card-title">'+item.Titulo+'</h5>'
        +'<p class="card-text">'+item.Descripcion+'</p>'
        +'</div>'
        +'<div class="card-footer">'
        +'<a class="btn btn-primary" href="'+item.Link+'" target="_blank" rel="noopener noreferrer">Visitar</a>'
        +'</div>'
        +'</div>'
        +'</div>'
    })

    pro.innerHTML = strProyectos;





}



}

function CargarProyectos() {

    
    proyectos.push(
        {
            Titulo: "Amazon",
            Descripcion: "E-Comerce Realizado en ASP.NET Core",
            Link: "https://amazon.com",
            ImagenURL: "images/amazon.jpg"
        }
    )

    proyectos.push(
        {
            Titulo: "New York times",
            Descripcion: "Pagina de noticias en Reack",
            Link: "https://nytimes.com",
            ImagenURL: "images/nytimes.png"
        }
    );

    proyectos.push(
        {
            Titulo:"Reddit",
                    Descripcion:"Red social para compartir en comuidades",
                    Link:"https://reddit.com",
                    ImagenURL:"images/reddit.jpg"
        }
    )

    proyectos.push(
        {
            Titulo:"Steam",
            Descripcion:"Tienda en linea para comprar videojuegos",
            Link:"https://store.steampowered.com",
            ImagenURL:"images/steam.jpg"
        }
    );


}





class Proyectos {
    Titulo;
    Descripcion;
    Link;
    ImagenURL;
}