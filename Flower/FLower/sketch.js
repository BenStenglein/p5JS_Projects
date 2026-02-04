let unit = 30
let pot = [
    {x:0,y:0},
    {x:unit,y:unit},
    {x:0,y:unit*2},
    {x:0,y:6*unit},
    {x:unit,y:7*unit},
    {x:5*unit,y:7*unit},
    {x:6*unit,y:6*unit},
    {x:6*unit,y:2*unit},
    {x:5*unit,y:1*unit},
    {x:6*unit,y:0}
    ]
let square = [
    {x:0,y:0},
    {x:10,y:0},
    {x:0,y:10},
    {x:10,y:10},
]
let spike = [
    {x:0,y:0},
    {x:2*unit,y:0.5*unit},
    {x:0,y:unit},
    ]
let dirt = [
    {x:1*unit,y:0},
    {x:5*unit,y:0},
    {x:6*unit,y:unit},
    {x:0,y:unit},
    
    ]
let leafUnit = 0.25*unit
let leafBack = [
    {x:0,y:0},
    {x:leafUnit,y:-leafUnit},
    {x:3*leafUnit,y:-leafUnit},
    {x:4*leafUnit,y:0},
    {x:3*leafUnit,y:leafUnit},
    {x:leafUnit,y:leafUnit},
    ]

function setup() {
    // pot = scalePolygon(pot,1)
    pot = translatePolygon(pot,0,unit)
    pot = scalePolygon(pot,2);
    dirt = scalePolygon(dirt,2);
    createCanvas(800, 600); 
}

function draw() {
    // let unit = 30;
    background(210)
    // scale
    // drawPolygon(pot,"#E35336");
    drawPolygon(dirt,"#54392D")
    drawComplexPolygon(pot,"#fff")
    drawPolygon(zeroPot)
    

}
function drawPolygon(arr,color){
    strokeWeight(0);
    fill(color)
    beginShape()
    for(let i =0; i<arr.length;i++){
        let x = arr[i].x
        let y = arr[i].y
        vertex(x,y)
    }
    endShape(CLOSE);
}
function translatePolygon(arr,dx,dy){
    newArr = []
    for(let i =0; i<arr.length;i++){
        let nX = arr[i].x += dx;
        let nY = arr[i].y += dy;
        newArr.push({x:nX,y:nY});
    }
    return newArr
}
function scalePolygon(arr,factor){
    newArr = []
    for(let i =0; i<arr.length;i++){
        let nX = arr[i].x *= factor;
        let nY = arr[i].y *= factor;
        newArr.push({x:nX,y:nY});
    }
    return newArr
}
function drawComplexPolygon(arr,color){
    strokeWeight(0);
    fill(color)
    beginShape()
    for(let i =0; i<arr.length;i++){
        if(Object.keys(arr[i]).length == 2){
            let x = arr[i].x
            let y = arr[i].y
            vertex(x,y)
        }
        else if(Object.keys(arr[i]).length == 6){
            // set the point as a bezer
        }
    }
    endShape(CLOSE);
}