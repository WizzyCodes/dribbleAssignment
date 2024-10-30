import React, { FC, useEffect, useState } from "react";
import pix1 from "../assets/1fb34610061a95a007ac5e7b1dc53138.webp";
import pix2 from "../assets/3986915be548424a5d36657f2b034ead.webp";
import pix3 from "../assets/4f02d72fe701b15b2168a4954332427f.webp";
import pix4 from "../assets/9b22cd83bde1809976bec0722d1f8923.webp";
import pix5 from "../assets/cd3266dde4f00a5d6a509c7375ddaecd.png";
import pix6 from "../assets/d85ae8c7db2421e9a01ecac942978d4b.webp";

import useMeasure from "react-use-measure";

import {
  animate,
  // AnimatePresence,
  motion,
  useMotionValue,
} from "framer-motion";

// const media = [pix1, pix2, pix3, pix4, pix5, pix6, video1, video2, video3];

const media = [
  {
    id: 1,
    image: pix1,
    name: " Vixta Wille",
    proffession: "Digital Designer",
    button: "brand",
  },
  {
    id: 2,
    image: pix2,
    name: "Chris Owens",
    proffession: "Creative Director",
    button: "ui",
  },
  {
    id: 3,
    image: pix3,
    name: "Lilla Brandenova ",
    proffession: "Brand + Illustrator",
    button: "web",
  },
  {
    id: 4,
    image: pix4,
    name: "Elif Kamesoglu",
    proffession: "Brand Designer",
    button: "Mobile",
    button1: "ui",
  },
  {
    id: 5,
    image: pix5,
    name: "Aurelien Salomon",
    proffession: "Design Director",
    button: "Product",
    button1: "ui",
  },
  {
    id: 6,
    image: pix6,
    name: "Andrea Jelic",
    proffession: "Digital Designer",
    button: "Brand",
    button1: "ui",
  },
  {
    id: 1,
    image: pix1,
    name: " Vixta Wille",
    proffession: "Digital Designer",
    button: "Project",
    button1: "ui",
  },
];

const slider = () => {
  const [ref, { width }] = useMeasure();
  let xMovement = useMotionValue(0);

  const Fast: number = 200;
  const [duration, setDuration] = useState<number>(Fast);
  const [finished, setFinished] = useState<boolean>(false);
  const [render, setRender] = useState<boolean>(false);

  useEffect(() => {
    let control;
    let finalPosition = -width / 2;

    if (finished) {
      control = animate(xMovement, [xMovement.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xMovement.get() / finalPosition),
        onComplete: () => {
          setRender(!render);
          setFinished(false);
        },
      });
    } else {
      control = animate(xMovement, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatDelay: 0,
        repeatType: "loop",
      });
    }

    return () => control.stop();
  }, [xMovement, width, duration, render]);
  return (
    <div className=" mt-10 overflow-hidden lg:mt-14">
      <motion.div
        ref={ref}
        style={{ x: xMovement }}
        className="flex w-max gap-4 "
      >
        {Array.from({ length: 11 }, (_, index) => {
          return media.map((item) => <Card key={item.id} el={item} />);
        })}
      </motion.div>
    </div>
  );
};

export default slider;

interface iProps {
  el: {
    id: number;
    image: string;
    name: string;
    proffession: string;
    button: string;
    button1: string;
  };
}

const Card: FC<iProps> = ({ el }) => {
  return (
    <motion.div
      style={{
        backgroundImage: `url(${el.image})`,
        width: "280px",
        height: "19rem",
        backgroundSize: "cover",
        borderRadius: "20px",
        overflow: "hidden",
        overflowX: "hidden",
        overflowY: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "end",
        cursor: "pointer",
      }}
    >
      <div className="w-full h-[90px] ">
        <div className="w-[150px] text-white h-[25px] ml-2 text-[15px]">
          {el.name}
        </div>
        <div className="w-[150px] text-white h-[20px] ml-2 text-[13px]">
          {el.proffession}
        </div>
        <div className="flex w-full h-[200px]   gap-4">
          <button className="w-[70px] text-[15px]  border-[white] mt-2 rounded-md text-white ml-4  ">
            {el.button}
          </button>
          <button className="w-[70px] text-[15px]    border-[white] mt-2 rounded-md text-white ml-4  ">
            {el.button1}
          </button>
        </div>
      </div>
    </motion.div>
  );
};
