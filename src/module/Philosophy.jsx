import React, { useEffect, useRef , useState } from 'react';
import classes from '@/css/philosophy.module.css';
import matehaVideo from '../video/matehaVid.mp4';
import codeImage from '../image/code.png';
import mazeImage from '../image/maze.png';
import rock1Image from '../image/rock1.png';
import greekImage from '../image/greek.png';
import monaliImage from '../image/monali.png';
import halfHead from '@/image/Daco_302596.png';
import { motion, useInView, useAnimation } from "framer-motion";
import question from '@/image/wQuestionMark.png'
export default function Philosophy() {

  const [mazeHasRun, setMazeHasRun] = useState(false);
  const [isGreekClicked, setIsGreekClicked] = useState(false);
  const [hasGreekClicked, setHasGreekClicked] = useState(false);
  const svgRef = useRef(null);
  const halfHeadRef = useRef(null);
  const isHalfHeadInView = useInView(halfHeadRef, { triggerOnce: true });
  const halfHeadControl = useAnimation();

  useEffect(() => {
    h3Control.start("hidden");
    LowerPartH1Control.start("hidden");
  }, []);

  useEffect(() => {
    if (isHalfHeadInView) {
      halfHeadControl.start("visible");
    }
  }, [isHalfHeadInView]);

  const h3Ref = useRef(null);
  const isH3InView = useInView(h3Ref, { triggerOnce: true });
  const h3Control = useAnimation();
  
  useEffect(() => {
    if (isH3InView) {
      h3Control.start("visible");
    }
  }, [isH3InView]);

  const matehaRef = useRef(null);
  const isMatehaInView = useInView(matehaRef, { triggerOnce: true }); 
  const matehaControl = useAnimation();


  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    if (isMatehaInView && !mazeHasRun) {
      matehaControl.start("visible");

      const runMaze = async () => {
        const svg = svgRef.current;
        if (!svg) return;

        let oldPath = svg.querySelector('path');
        if (oldPath) {
          svg.removeChild(oldPath);
        }

        const newPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        newPath.setAttribute('d', '');  
        newPath.setAttribute('stroke', 'black');
        newPath.setAttribute('fill', 'none');
        svg.appendChild(newPath);

        const CELL_SIZE = 16;
        const w = Math.ceil(svg.scrollWidth / CELL_SIZE);
        const h = Math.ceil(svg.scrollHeight / CELL_SIZE);
        svg.setAttribute('viewBox', `0 0 ${w} ${h}`);

        const start = [w, 0];
        const stack = [start];
        const visited = new Set([start.join(',')]);
        newPath.setAttribute('d', `M${start[0]},${start[1]}`);

        let moveNext = false;
        let i = 0;

        while (stack.length > 0 && i / w < 60) {
          const cell = stack[stack.length - 1];
          const neighbor = getRandomNeighbor(cell, visited, w, h);

          if (neighbor) {
            stack.push(neighbor);
            visited.add(neighbor.join(','));
            appendToPath(newPath, neighbor, moveNext);
            moveNext = false;
            if (i % 3 === 0) await new Promise(requestAnimationFrame);
          } else {
            stack.pop();
            moveNext = true;
          }
          i++;
        }
      };

      const getRandomNeighbor = (cell, visited, w, h) => {
        const neighbors = getNeighbors(cell, visited, w, h);
        if (neighbors.length === 0) return null;
        return neighbors[Math.floor(Math.random() * neighbors.length)];
      };

      const getNeighbors = (cell, visited, w, h) => {
        let neighbors = [];
        const [x, y] = cell;
        if (x > 0) neighbors.push([x - 1, y]);
        if (x < w - 1) neighbors.push([x + 1, y]);
        if (y > 0) neighbors.push([x, y - 1]);
        if (y < h - 1) neighbors.push([x, y + 1]);
        neighbors = neighbors.filter((n) => !visited.has(n.join(',')));
        return neighbors;
      };

      const appendToPath = (path, cell, isMove) => {
        const d = path.getAttribute('d');
        path.setAttribute('d', d + ` ${isMove ? 'M' : 'L'}${cell[0]},${cell[1]}`);
      };

      setTimeout(() => {
        runMaze();
        setMazeHasRun(true);  
      }, 400);
    }
  }, [isMatehaInView, mazeHasRun]);
  

  const HandleGreekClick = () => {
    const lowerPartPhiloElement = document.querySelector(`.${classes.LowerPartPhilo}`);
    if (lowerPartPhiloElement) {
      lowerPartPhiloElement.scrollIntoView({ behavior: 'smooth' });
  
      setTimeout(() => {
        setIsGreekClicked(true); 
  
        setHasGreekClicked(prevState => {
          return true;
        });
      }, 1000);
    }
  };
  const HandleQuestionMarkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const LowerPartH1Ref = useRef(null);
  const isLowerPartH1InView = useInView(LowerPartH1Ref, {
    triggerOnce: true,
    threshold: 0.9,
  });
  
  const LowerPartH1Control = useAnimation();

  useEffect(() => {
    if (isLowerPartH1InView) {
      LowerPartH1Control.start("visible");
    }
  }, [isLowerPartH1InView]);

  return (
    <div className={classes.MainPhilo}>
      <div className={`${classes.MainPhiloDiv} ${isGreekClicked ? classes.ActiveClass : ''}`}>
      <header>
        <div className={classes.left}>
          <h1>MATEHA</h1>
          <div className={classes.underMateha}>
            <video autoPlay muted loop>
              <source src={matehaVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className={classes.philo}>
          <h3>Our Philosophy</h3>
          <div>
            <p>Always Think</p>
            <p>Think Always</p>
          </div>
          <div>
            <p>Think Always</p>
            <p>Always Think</p>
          </div>
          <img src={codeImage} alt="Code Philosophy" />
        </div>
      </header>

      <div className={classes.banner}>
        <div className={classes.maze}>
          <div
            className={classes.mazeSchema}
            style={{ '--url': `url(${mazeImage})` }}
            onClick={HandleGreekClick}
          ></div>
          <div
            className={classes.mazeSchema}
            style={{ '--url': `url(${mazeImage})` }}
            onClick={HandleGreekClick}
          ></div>
        </div>
        <div className={classes.svgs}>
          <svg
            className={classes.leftArrowWithLine}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 24"
            width="100"
            height="48"
          >
            <line x1="0" y1="12" x2="70" y2="12" stroke="white" strokeWidth="4" />
            <path d="M64 5l7 7-7 7" stroke="white" strokeWidth="4" fill="none" />
          </svg>

          <svg
            className={classes.rightArrowWithLine}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 24"
            width="100"
            height="48"
          >
            <line x1="30" y1="12" x2="100" y2="12" stroke="white" strokeWidth="4" />
            <path d="M36 19l-7-7 7-7" stroke="white" strokeWidth="4" fill="none" />
          </svg>
        </div>
        <div className={classes.rock}>
          <img src={rock1Image} alt="Rock 1" />
          <img src={greekImage} alt="Greek Statue" />
          <img src={monaliImage} alt="Monali" />
        </div>
      </div>
      </div>
      <div className={classes.LowerPartPhilo}>
        <motion.div
          ref={halfHeadRef}
          variants={{
            hidden: { x: -75, y: 75, opacity: 0 },
            visible: { x: 0, y: 0, opacity: 1 },
          }}
          initial="hidden"
          animate={halfHeadControl}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <img src={halfHead} alt="" className={classes.halfHead} />
        </motion.div>
        <motion.div
          ref={h3Ref}
          variants={{
            hidden: { x: 75, y: -75, opacity: 0 },
            visible: { x: 0, y: 0, opacity: 1 },
          }}
          initial="hidden"
          animate={h3Control}
          transition={{ duration: 0.5, delay: 0.25 }}
        ><h3> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero temporibus corrupti expedita vitae obcaecati qui.</h3>
        </motion.div>
        <motion.div
          ref={matehaRef}  
          variants={{
            hidden: {  x: 75, y: -75 , opacity: 0 },
            visible: { x: 0, y: 0, opacity: 1 },
          }}
          initial="hidden"
          animate={matehaControl}
          transition={{ duration: 0.25, delay: 0.25 }}
          className={classes.Mateha}
        >
          <svg
            ref={svgRef}
            className={classes.mazeSVG}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 800"
          >
            <rect x="0" y="0" width="100%" height="100%" />
            <path d="" />
          </svg>
          </motion.div>
          <motion.div
                ref={LowerPartH1Ref}
                variants={{
                  hidden: {
                    transform: "translateY(-800px) translateX(-76px) rotate(20deg)",
                    opacity: 0,
                    zIndex: -10, 
                  },
                  visible: {
                    transform: "translateY(-1105px) translateX(14px) rotate(15deg)",
                    opacity: 1,
                    zIndex: -10,  
                  },
                }}
                initial="hidden"
                animate={LowerPartH1Control}
                transition={{ duration: 0.4, ease: "easeInOut", delay: 1 }}
                className ={classes.h1Div}
              >
            <h1>ALWAYS THINK</h1>
          </motion.div>
         <motion.div
         className={classes.questionMark}
         >
          <img src={question} alt=""  onClick={HandleQuestionMarkClick}/>
         </motion.div>
      </div>
    </div>
  );
}
