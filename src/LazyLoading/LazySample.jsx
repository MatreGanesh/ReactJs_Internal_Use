import React from "react";

export default function LazySample() {
  const arr = new Array(10000).fill(0);

  return (
    <>
      <div className="space-y-4 text-justify">
        {arr.map((val, index) => (
          <div className="flex items-start gap-2">
            <h1 className="text-lg font-semibold">{index + 1}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              cumque neque delectus, reiciendis veritatis aspernatur quos est
              error aperiam dolor facere saepe iure ipsum architecto odit
              distinctio perspiciatis temporibus nam quo ipsa quod vel ex atque
              nisi. Ipsam laborum quae asperiores explicabo. Eaque blanditiis
              nam repellendus ipsum rem ad, suscipit asperiores repudiandae,
              dolor repellat at minima? Vero repellat nam consequatur voluptates
              esse quod veniam doloribus ab ut, adipisci suscipit perspiciatis
              aliquid dolores molestiae, blanditiis omnis qui. Autem, esse
              cumque est suscipit quam dicta obcaecati molestias non ratione
              mollitia vero maxime voluptatum id quae minus a. Ipsa architecto
              commodi illum aliquid? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Laborum cumque neque delectus, reiciendis
              veritatis aspernatur quos est error aperiam dolor facere saepe
              iure ipsum architecto odit distinctio perspiciatis temporibus nam
              quo ipsa quod vel ex atque nisi. Ipsam laborum quae asperiores
              explicabo. Eaque blanditiis nam repellendus ipsum rem ad, suscipit
              asperiores repudiandae, dolor repellat at minima? Vero repellat
              nam consequatur voluptates esse quod veniam doloribus ab ut,
              adipisci suscipit perspiciatis aliquid dolores molestiae,
              blanditiis omnis qui. Autem, esse cumque est suscipit quam dicta
              obcaecati molestias non ratione mollitia vero maxime voluptatum id
              quae minus a. Ipsa architecto commodi illum aliquid? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Laborum cumque neque
              delectus, reiciendis veritatis aspernatur quos est error aperiam
              dolor facere saepe iure ipsum architecto odit distinctio
              perspiciatis temporibus nam quo ipsa quod vel ex atque nisi. Ipsam
              laborum quae asperiores explicabo. Eaque blanditiis nam
              repellendus ipsum rem ad, suscipit asperiores repudiandae, dolor
              repellat at minima? Vero repellat nam consequatur voluptates esse
              quod veniam doloribus ab ut, adipisci suscipit perspiciatis
              aliquid dolores molestiae, blanditiis omnis qui. Autem, esse
              cumque est suscipit quam dicta obcaecati molestias non ratione
              mollitia vero maxime voluptatum id quae minus a. Ipsa architecto
              commodi illum aliquid?
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
