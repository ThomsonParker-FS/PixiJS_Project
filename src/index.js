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


      let promiseChainActive = false;


      function topPromise(){

        return new Promise((resolve) => {

        let topInt = setInterval(()=>{
         if (circle.y <= 0 + 50) {
            console.error("hit 50")
            hitBorders.top = true;
            renderBorderTop(borderTop, true);
            clearInterval(topInt)
            resolve();
            return;
            }
          }, 10)
        })
      }


      function bottomPromise(){
        return new Promise((resolve) => {

          let bottomInt = setInterval(()=>{
            console.log("bottom tick")
              if(circle.y >= app.renderer.height - 50){
                hitBorders.bottom = true;
                renderBorderBottom(borderBottom, true);
                clearInterval(bottomInt)
                resolve();
                return;
              }
          }, 10)
        })
      }

      function leftPromise(){
        return new Promise((resolve) => {
 
          let leftInt = setInterval(()=>{
              if (circle.x <= 0 + 50) {
                hitBorders.left = true;
                renderBorderLeft(borderLeft, true);
                clearInterval(leftInt);
                resolve();
                return;
              }
          }, 10)
        })
      }


      function rightPromise(){
        return new Promise((resolve) => {

          let rightInt = setInterval(()=>{
                if(circle.x >= app.renderer.width - 50){         
                hitBorders.right = true;
                renderBorderRight(borderRight, true);
                clearInterval(rightInt);
                resolve();
                return;
              }
          }, 10)
        })
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
          
          
        })
        .then(() => {
          app.ticker.add((delta) => {


            if (circle.x >= app.renderer.width - 50 || circle.x <= 0 + 50) {

              xvelocity = -xvelocity;

            }
            if (circle.y >= app.renderer.height - 50 || circle.y <= 0 + 50) {
            
              yvelocity = -yvelocity;

            }

            if(!promiseChainActive){
              promiseChainActive = true;
              rightPromise().then((res)=>bottomPromise().then((res)=>leftPromise()).then((res)=>topPromise())).then((res)=>{
                setTimeout(()=>{
                  window.alert("All borders hit!")
                },100)
              });
            }



            circle.x += xvelocity;
            circle.y += yvelocity;
          });
        });
