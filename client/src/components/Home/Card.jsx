import React from "react";
import Image1 from "../Images/icea.png";

import Image3 from "../Images/jubilee.png";

import Image5 from "../Images/britam.png";

function Card() {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      <div className="rounded overflow-hidden shadow-lg">
        <img className="w-full" src={Image5} alt="Educational excursion" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Britam</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo.
          </p>
        </div>
      </div>

      <div className="rounded overflow-hidden shadow-lg">
        <img className="w-full" src={Image3} alt="River" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Jubilee</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo.
          </p>
        </div>
      </div>

      <div className="rounded overflow-hidden shadow-lg">
        <img className="w-full" src={Image1} alt="Forest" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">ICEA</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
