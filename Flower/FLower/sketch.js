function setup() {
    createCanvas(800, 600);
    
}
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
function draw() {
    // let unit = 30;
    background(210)
    // scale
    drawPolygon(pot);

}
function drawPolygon(arr){
    beginShape()
    for(let i =0; i<arr.length;i++){
        let x = arr[i].x
        let y = arr[i].y
        vertex(x,y)
    }
    endShape(CLOSE);
}
// function scalePolygon(arr,factor){
