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

          let borders = [];

          function rendereBorder1(change){
           if(!change){

           }else{

           }
          }

          
          function renderBorder2(change){
           if(!change){

           }else{
            
           }
          }

          
          function renderBorder3(change){
           if(!change){

           }else{
            
           }
          }

          function renderBorder4(change){
           if(!change){

           }else{
            
           }
          }


          const border1 = new PIXI.Graphics();
          border1.beginFill("#ff0000");
          border1.drawRect(0, 0, app.renderer.width, 10);
          borders.push(border1);
          border1.endFill();
          app.stage.addChild(border1);

          const border2 = new PIXI.Graphics();

          border2.beginFill("#ff0000");
          border2.drawRect(0, 690, app.renderer.width, 10);
          //borders.push(border2);
          border2.endFill();
          app.stage.addChild(border2);


          const border3 = new PIXI.Graphics();
          border3.beginFill("#ff0000");
          border3.drawRect(0, 10, 10, app.renderer.height - 20);
          borders.push(border3);
          border3.endFill();
          app.stage.addChild(border3);


          const border4 = new PIXI.Graphics();
          border4.beginFill("#ff0000");
          border4.drawRect(690, 10, 10, app.renderer.height - 20);
          borders.push(border4);
          border4.endFill();
          app.stage.addChild(border4);

          console.log("app.renderer.height = ", app.renderer.height);
          console.log("app.renderer.width = ", app.renderer.width);
          console.log("border2.x = ", border2.x, "border2.y = ", border2.y);
        })
        .then(() => {
          app.ticker.add((delta) => {
            //what do we have this wrapped in a then chain?

            if (circle.x >= app.renderer.width - 50 || circle.x <= 0 + 50) {
              if(circle.x >= app.renderer.width - 50){
                
                //right is hit                
                hitBorders.right = true;

              } else if (circle.x <= 0 + 50) {
                //left is hit
                hitBorders.left = true;
              }
              xvelocity = -xvelocity;
              // console.log("circle x = ", circle.x);
            }
            if (circle.y >= app.renderer.height - 50 || circle.y <= 0 + 50) {
              
              circly.y >= app.renderer.height - 50 ? hitBorders.top = true : hitBorders.bottom = true;
              
              yvelocity = -yvelocity;
              // console.log("circle y = ", circle.y);
            }



            circle.x += xvelocity;
            circle.y += yvelocity;
          });
        });
