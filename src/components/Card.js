import React from "react";

const Card = () => {

    const btnColor={
        backgroundColor:"#6CB4EE",
        color:"#fff"
    }

  return (
    <div>
      <div class="container text-center">
        <div class="row pt-4">
          <div class="col-12 col-lg-4">
            <div class="card border-0 mt-3" style={{ width: "18rem;"}}>
              <img src="https://images.unsplash.com/photo-1695713430500-1323430b8490?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
                Nothing is perfect and everything is perfect. Trees can be contorted, bent in weird ways, and they're still ...
                </p>
              </div>
              <button class="btn shadow" style={btnColor} type="submit">Button</button>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="card border-0 mt-3" style={{ width: "18rem;" }}>
              <img src="https://images.unsplash.com/photo-1624833654290-d9f8065c4a54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
                To me a lush carpet of pine needles or spongy grass is more welcome than the most luxurious Persian rug.
                </p>
              </div>
              <button class="btn shadow" style={btnColor} type="submit">Button</button>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="card border-0 my-3" style={{ width: "18rem;" }}>
              <img src="https://images.unsplash.com/photo-1576517669836-189121a8cc80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
                Live in each season as it passes; breathe the air, drink the drink, taste the fruit, and resign yourself to the ... 
                </p>
              </div>
              <button class="btn shadow" style={btnColor} type="submit">Button</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
