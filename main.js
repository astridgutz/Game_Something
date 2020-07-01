let canvas = document.querySelector('canvas')

let ctx = canvas.getContext('2d')

//la prueba
//ctx.fillRect(0,0,canvas.width, canvas.height)

let images = {
    bg:"https://i.pinimg.com/236x/01/45/2f/01452ff8c01984e53e02ef877afd6917.jpg",
    chinese: "https://images.vexels.com/media/users/3/197253/isolated/preview/e071a53cc6a5d8021fdf38b42acd7a58-linda-ropa-tradicional-china-by-vexels.png",
    corona: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/250px-SARS-CoV-2_without_background.png"
    //link del gato
    //https://pluspng.com/img-png/cat-png-cat-png-clipart-1511.png
}


let img = new Image()
img.src = images.bg

ctx.drawImage(img,0,0,canvas.width,canvas.height)

class Chinese{
    constructor(link,x){
        this.x = x? x:90
        this.y = 300
        this.width = 110
        this.height = 110
        this.img = new Image()
        this.img.src = link
        this.img.onload = this.draw
    }
// El metodo va afuera del constructor y siempre con arrow func.
    draw = ()=> {
    ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
}

}

let chinese = new Chinese(images.chinese)
let corona = new Chinese(images.corona,400)

// coronavirus: https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/250px-SARS-CoV-2_without_background.png
// chinese : https://images.vexels.com/media/users/3/197253/isolated/preview/e071a53cc6a5d8021fdf38b42acd7a58-linda-ropa-tradicional-china-by-vexels.png
// reptar : "https://vignette.wikia.nocookie.net/rugrats/images/4/4c/Reptar.png/revision/latest/scale-to-width-down/340?cb=20130515193534"