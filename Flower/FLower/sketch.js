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
    {x:leafUnit,y:-leafUnit},
    {x:3*leafUnit,y:-leafUnit},
    {x:4*leafUnit,y:0},
    {x:3*leafUnit,y:leafUnit},
    {x:leafUnit,y:leafUnit},
    ]
let testCircle = [
    {x:50,y:0},
    // {x:50,y:50},
    {x1:100,y1:0,x2:100,y2:50,x3:50,y3:50}
]
let leaf = [
    {x:0,y:0},
    // {x:4,y:0}
    {x1:0,y1:0,x2:2,y2:1,x3:4,y3:0},
    {x1:4,y1:0,x2:2,y2:-1,x3:0,y3:0}
]
function setup() {
    // pot = scalePolygon(pot,1)
    pot = translatePolygon(pot,0,unit)
    leaf = scalePolygon(leaf,unit)
    
    pot = scalePolygon(pot,1);
    dirt = scalePolygon(dirt,2);
    createCanvas(800, 600); 
}

function draw() {
    // let unit = 30;
    background(210)
    // scale
    // drawPolygon(dirt,"#54392D")
    drawComplexPolygon(pot,"#E35336",0)
    drawComplexPolygon(leaf,"#000",1)
    // drawPolygon(zeroPot,"#fff")
    // drawComplexPolygon(testCircle,"#ff0000",0)
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
        if(Object.keys(arr[i]).length == 2){
            let nX = arr[i].x *= factor;
            let nY = arr[i].y *= factor;
            newArr.push({x:nX,y:nY});
        }
        else if(Object.keys(arr[i]).length == 6){
            let nX1 = arr[i].x1 *= factor;
            let nY1 = arr[i].y1 *= factor;
            let nX2 = arr[i].x2 *= factor;
            let nY2 = arr[i].y2 *= factor;
            let nX3 = arr[i].x3 *= factor;
            let nY3 = arr[i].y3 *= factor;
            newArr.push({x1:nX1,y1:nY1,x2:nX2,y2:nY2,x3:nX3,y3:nY3});
        }
    }
    return newArr;
}
function drawComplexPolygon(arr,color,stroke){
    strokeWeight(stroke);
    fill(color);
    beginShape();
    for(let i =0; i<arr.length;i++){
        if(Object.keys(arr[i]).length == 2){
            let x = arr[i].x
            let y = arr[i].y
            vertex(x,y)
        }
        else if(Object.keys(arr[i]).length == 6){
            console.log("hit")
            let nX1 = arr[i].x1
            let nY1 = arr[i].y1
            let nX2 = arr[i].x2
            let nY2 = arr[i].y2
            let nX3 = arr[i].x3
            let nY3 = arr[i].y3
            bezierVertex(nX1,nY1);
            bezierVertex(nX2,nY2);
            bezierVertex(nX3,nY3);
        }
    }
    endShape();
}