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
    {x:6*unit,y:0},
    {x:0,y:0}
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
    
    leaf = scalePolygon(leaf,unit)
    // leaf = translatePolygon(leaf,700,400)
    leaf = updatePoints(leaf)
    // leaf[leaf.length-1] = {x:400,y:300};
    // pot = translatePolygon(pot,10,unit)
    // pot = scalePolygon(pot,1);
    // pot = updatePoints(pot)
    // translatePolygon(pot,32,32) 
    // dirt = scalePolygon(dirt,2);
    // dirt = updatePoints(dirt)
    createCanvas(800, 600);
    // console.log(leaf[1].x3)
}
function draw() {
    // let unit = 30;
    background(210)
    // drawCenteredPolygon(dirt,"#54392D")
    // drawCenteredPolygon(pot,"#E35336",0)
    // drawCenteredPolygon(leaf,"#008000",1)
    // drawComplexPolygon(leaf,"#008000",1)

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
    console.log(arr)
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
    console.log(newArr)
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
function drawCenteredPolygon(arr,color,stroke){
    push()
    let cents = arr[arr.length-1];
    translate(cents.x,cents.y);
    // console.log(`centerpoint : ${cents.x}, ${cents.y}`)
    // rotate(cents.rot)
    strokeWeight(stroke);
    fill(color);
    // console.log(cents)
    beginShape();
    for(let i =0; i<arr.length-1;i++){
        if(Object.keys(arr[i]).length == 2){
            let x = 0 - arr[i].x
            let y = 0 - arr[i].y
            vertex(x,y)
        }
        else if(Object.keys(arr[i]).length == 6){
            let nX1 = cents.x-arr[i].x1
            let nY1 = cents.x-arr[i].y1
            let nX2 = cents.x-arr[i].x2

            let nY2 = cents.y-arr[i].y2
            let nX3 = cents.y-arr[i].x3
            let nY3 = cents.y-arr[i].y3
            // let nX1 = arr[i].x1
            // let nY1 = arr[i].y1
            // let nX2 = arr[i].x2

            // let nY2 = arr[i].y2
            // let nX3 = arr[i].x3
            // let nY3 = arr[i].y3
            bezierVertex(nX1,nY1);
            bezierVertex(nX2,nY2);
            bezierVertex(nX3,nY3);
        }
    }
    endShape();
    translate(-cents.x, -cents.y)
    pop()
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
function updatePoints(arr){
    cents = approxRect(arr)
    nArr = []
    console.log(arr)
    for(let i = 0; i<arr.length;i++){
        if(Object.keys(arr[i]).length == 2){
            let nX=0;
            let nY=0;
            if(arr[i].x == cents.x){
                nX = 0;
            }else{
                nX = cents.x - arr[i].x
            }
            if(arr[i].y == cents.y){
                    nY = 0;
                }else{
                    nY = cents.y - arr[i].y
                }
            nArr[i] = {x:nX,y:nY}
        }
        else if(Object.keys(arr[i]).length == 6){
             let nX1 = 0;
             let nX2 = 0;
             let nX3 = 0;
             let nY1 = 0;
             let nY2 = 0;
             let nY3 = 0;
             if(arr[i].x1 == cents.x){
                 nX1 = 0;
             }else{
                  nX1 = cents.x - arr[i].x1
              }
              if(arr[i].x2 == cents.x){
                  nX2 = 0;
              }else{
                  nX2 = cents.x - arr[i].x2
              }
              if(arr[i].x3 == cents.x){
                  nX3 = 0;
              }else{
                  nX3 = cents.x - arr[i].x3
              }
              if(arr[i].y1 == cents.y){
                  nY1 = 0;
              }else{
                  nY1 = cents.y - arr[i].y1
              }
              if(arr[i].y2 == cents.y){
                  nY2 = 0;
              }else{
                  nY2 = cents.y - arr[i].y2
              }
              if(arr[i].y3 == cents.y){
                  nY3 = 0;
              }else{
                 nY3 = cents.y - arr[i].y3
              }
              nArr.push({x1:nX1,y1:nY1,x2:nX2,y2:nY2,x3:nX3,y3:nY3});
        }
    
    }
    nArr.push(cents)
    console.log(nArr)
    return(nArr)
}
function testFunc(arr){
    let cent = arr[arr.length-1]
    // console.log(arr[arr.length-1])
    push()
    translate(cent.x,cent.y)
    rotate(QUARTER_PI)
    drawCenteredPolygon(arr,"#fff",0)
    pop()
}
/* useful logic structure for iterating through polygons
for(let i =0; i<arr.length;i++){
        if(Object.keys(arr[i]).length == 2){
                
        }
        else if(Object.keys(arr[i]).length == 6){

        }
}
*/