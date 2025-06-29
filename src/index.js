// Imports your SCSS stylesheet

import "./styles/index.css";

const app = new PIXI.Application();

      const circle = new PIXI.Graphics();

      let xvelocity = 1;
      let yvelocity = 1;

      let hitBorders = {
        right: false,
        left: false,
        top: false,
        bottom: false
      }


      function renderBorderTop(border, change){
           if(!change){
            border.beginFill("#ff0000");
            border.drawRect(0, 0, app.renderer.width, 10);
            border.endFill();            
            
           }else{
            border.clear();
            border.beginFill("#0000ff");
            border.drawRect(0, 0, app.renderer.width, 10);
            border.endFill();            
            
           }
           app.stage.addChild(border);
          }

          
          function renderBorderBottom(border, change){
           if(!change){
            border.beginFill("#ff0000");
            border.drawRect(0, 690, app.renderer.width, 10);
            border.endFill();            
            
           }else{
            border.clear();
            border.beginFill("#0000ff");
            border.drawRect(0, 690, app.renderer.width, 10);
            border.endFill();            
            
           }
           app.stage.addChild(border);
          }

          
          function renderBorderLeft(border, change){
           if(!change){
            border.beginFill("#ff0000");
            border.drawRect(0, 10, 10, app.renderer.height - 20);
            border.endFill();            
            
           }else{
            border.clear();
            border.beginFill("#0000ff");
            border.drawRect(0, 10, 10, app.renderer.height - 20);
            border.endFill();            
            
           }
           app.stage.addChild(border);
          }

          function renderBorderRight(border, change){
           if(!change){
            border.beginFill("#ff0000");
            border.drawRect(690, 10, 10, app.renderer.height - 20);
            border.endFill();            
            
           }else{
            border.clear();
            border.beginFill("#0000ff");
            border.drawRect(690, 10, 10, app.renderer.height - 20);
            border.endFill();            
            
           }
           app.stage.addChild(border);
          }

          let borderTop = new PIXI.Graphics();
          
          
          let borderBottom = new PIXI.Graphics();


          let borderLeft = new PIXI.Graphics();


          let borderRight = new PIXI.Graphics();


      await app
        .init({
          backgroundColor: "#3398b9",
          width: 700,
          height: 700,
        })
        .then(() => {
          document.getElementById("game").appendChild(app.canvas);

          circle.beginFill("#ff0000");
          circle.drawCircle(0, 0, 40);
          circle.x = 500;
          circle.y = 300;
          circle.endFill();
          app.stage.addChild(circle);

          renderBorderTop(borderTop, false);
          renderBorderBottom(borderBottom, false);
          renderBorderLeft(borderLeft, false);
          renderBorderRight(borderRight, false);
          
          
          console.log("app.renderer.height = ", app.renderer.height);
          console.log("app.renderer.width = ", app.renderer.width);
        })
        .then(() => {
          app.ticker.add((delta) => {
            //what do we have this wrapped in a then chain?

            if (circle.x >= app.renderer.width - 50 || circle.x <= 0 + 50) {
              if(circle.x >= app.renderer.width - 50){
                
                //right is hit                
                hitBorders.right = true;
                renderBorderRight(borderRight, true);


              } else if (circle.x <= 0 + 50) {
                //left is hit
                hitBorders.left = true;
                renderBorderLeft(borderLeft, true);
              }
              xvelocity = -xvelocity;
              // console.log("circle x = ", circle.x);
            }
            if (circle.y >= app.renderer.height - 50 || circle.y <= 0 + 50) {
              
              if(circle.y >= app.renderer.height - 50){
                
                hitBorders.bottom = true
                renderBorderBottom(borderBottom, true);

              } else {
                
                hitBorders.top = true;
                renderBorderTop(borderTop, true);5

              }

                
              
              yvelocity = -yvelocity;
              // console.log("circle y = ", circle.y);
            }



            circle.x += xvelocity;
            circle.y += yvelocity;
          });
        });
