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
    {x1:2,y1:0.5,x2:2,y2:0.5,x3:4,y3:0},
    {x1:2,y1:-0.5,x2:2,y2:-0.5,x3:0,y3:0}
]
function setup() {
    // pot = scalePolygon(pot,1)
    testfunc()
    pot = translatePolygon(pot,0,unit)
    leaf = scalePolygon(leaf,unit)
    leaf = translatePolygon(leaf,0,32)
    pot = scalePolygon(pot,1);
    dirt = scalePolygon(dirt,2);
    createCanvas(800, 600);
    console.log(leaf[1].x3)
}
function draw() {
    // let unit = 30;
    background(210)
    // drawPolygon(dirt,"#54392D")
    // approxRect(leaf)
    // drawComplexPolygon(pot,"#E35336",0)
    // drawComplexPolygon(leaf,"#000",1)
    // drawPolygon(zeroPot,"#fff")
    // drawComplexPolygon(testCircle,"#ff0000",0)
    
    // console.log(leaf[1].x3)
    
}
function translatePolygon(arr,dx,dy){
    newArr = []
    for(let i =0; i<arr.length;i++){
        if(Object.keys(arr[i]).length == 2){
            let nX = arr[i].x += dx;
            let nY = arr[i].y += dy;
            newArr.push({x:nX,y:nY});
        }
        else if(Object.keys(arr[i]).length == 6){
            let nX1 = arr[i].x1 += dx;
            let nX2 = arr[i].x2 += dx;
            let nX3 = arr[i].x3 += dx;

            let nY1 = arr[i].y1 += dy;
            let nY2 = arr[i].y2 += dy;
            let nY3 = arr[i].y3 += dy;
            newArr.push({x1:nX1,y1:nY1,x2:nX2,y2:nY2,x3:nX3,y3:nY3});
        }
    }
    return newArr;
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
function approxRect(arr){
    let x1 = arr[0].x;
    let y1 =arr[0].y;
    let x2 = x1++;
    let y2 =y1++;
    beginShape()
    fill("#fff")
    stroke(5)
    for(let i =0; i < arr.length;i++){
        if(Object.keys(arr[i]).length == 2){
            let x =arr[i].x;
            let y = arr[i].y;
            if (x < x1 || x > x2){
                if (x > x2){
                    x2 = x;
                }
                else if(x <x1){
                    x1 = x;
                }
            }          
            if (y < y1 || y > y2){
                if (y > y2){
                        y2 = y;
                }
                else if(y <y1){
                    y1 = y;
                }
            }
        }
        else if(Object.keys(arr[i]).length == 6){
            let nX1 = (Object.keys(arr[i-1]).length == 6) ? arr[i-1].x3 : arr[i-1].x;
            let nX2 = arr[i].x1
            let nX3 = arr[i].x2
            let nX4 = arr[i].x3

            let nY1 = (Object.keys(arr[i-1]).length == 6) ? arr[i-1].y3 : arr[i-1].y;
            let nY2 = arr[i].y1
            let nY3 = arr[i].y2
            let nY4 = arr[i].y3

            let x = bezierPoint(nX1,nX2, nX3, nX4, 0.5);
            let y = bezierPoint(nY1,nY2, nY3, nY4, 0.5);
            if (x < x1 || x > x2){
                if (x > x2){
                    x2 = x;
                }
                else if(x <x1){
                    x1 = x;
                }
            }
            x = arr[i].x3
            if (x != 0){
            }
            if (x < x1 || x > x2){
            if (x > x2){
                x2 = x;
            }
            else if(x <x1){
                x1 = x;
            }
            }   
            if (y < y1 || y > y2){
                if (y > y2){
                        y2 = y;
                }
                else if(y <y1){
                    y1 = y;
                }
            }
                y = nY4;
                if (y < y1 || y > y2){
                if (y > y2){
                    y2 = y;
                }
                else if(y <y1){
                    y1 = y;
                }
            }
        }  
    }
    vertex(x1,y1)
    vertex(x1,y2)
    vertex(x2,y2)
    vertex(x2,y1)
    endShape(CLOSE)
    let centX = x1+((x2-x1)/2)
    let centY = y1+((y2-y1)/2)
    strokeWeight(3)
    point(centX,centY)
    return ({x:centX,y:centY})
}
function testfunc(){
   console.log(approxRect(leaf));
//    translate[cents[0],cents[1]]
   rotate(QUARTER_PI)
   drawComplexPolygon(leaf,"#000",1)
}
function updatePoints(arr){
    cents = approxRect(arr)
    for(let i =0; i<arr.length;i++){
        if(Object.keys(arr[i]).length == 2){
                if(arr[i].x > cents.x){
                    let nX = arr[i].x - cents.x
                }
                else if(arr[i].x == cents.x){
                    let nX = 0;
                }
                else if ( arr[i].x < cents.x){
                    nX = cents.x - arr[i].x
                }
        }
        else if(Object.keys(arr[i]).length == 6){

        }
}
}
/* useful logic structure for iterating through polygons
for(let i =0; i<arr.length;i++){
        if(Object.keys(arr[i]).length == 2){
                
        }
        else if(Object.keys(arr[i]).length == 6){

        }
}
*/