import { useRef, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import leftIcon from "../../assets/leftButton.svg";
import rightIcon from "../../assets/rightButton.svg";

import UKImage from "../../assets/UK.png";
import USAImage from "../../assets/USA.png";
import CanadaImage from "../../assets/Canada.png";
import UAEImage from "../../assets/UAE.png";
import AustraliaImage from "../../assets/Australia.png";
import MalaysiaImage from "../../assets/Malaysia.png";

import UKLogos from "../../assets/UKLogos.png";
import USALogos from "../../assets/USALogos.png";
import CanadaLogos from "../../assets/CanadaLogos.png";
import UAELogos from "../../assets/UAELogos.png";
import AustraliaLogos from "../../assets/AustraliaLogos.png";
import MalaysiaLogos from "../../assets/MalaysiaLogos.png";

export default function WhereNext() {
  const countries = [
    { img: UKImage, logos: UKLogos },
    { img: USAImage, logos: USALogos },
    { img: CanadaImage, logos: CanadaLogos },
    { img: UAEImage, logos: UAELogos },
    { img: AustraliaImage, logos: AustraliaLogos },
    { img: MalaysiaImage, logos: MalaysiaLogos },
  ];

  const slideRef = useRef(null);
  const indexRef = useRef(0);
  const animatingRef = useRef(false);

  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);

  const IMAGE_W = 241;
  const GAP = 25;
  const IMAGE_PLUS_GAP = IMAGE_W + GAP;
  const TRANS_DUR = 420;

  const [visible, setVisible] = useState(2);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if ((w < 1440 && w > 1150) || w < 650) {
        setVisible(2);
      } else if (w < 1150) {
        setVisible(1);
      }

      setIsSmallScreen(w < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const el = slideRef.current;
    if (!el) return;
    el.style.transition = "none";
    el.style.transform = `translateX(-${indexRef.current * IMAGE_PLUS_GAP}px)`;
    updateButtons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateButtons = () => {
    setDisablePrev(indexRef.current === 0);
    setDisableNext(indexRef.current >= countries.length - visible);
  };

  const moveSlide = (direction) => {
    if (animatingRef.current) return;
    const el = slideRef.current;
    if (!el) return;

    const delta = direction === "next" ? 1 : -1;
    const newIndex = indexRef.current + delta;

    if (newIndex < 0 || newIndex > countries.length - visible) return;

    animatingRef.current = true;
    indexRef.current = newIndex;

    el.style.transition = `transform ${TRANS_DUR}ms cubic-bezier(.22,1,.36,1)`;
    el.style.transform = `translateX(-${indexRef.current * IMAGE_PLUS_GAP}px)`;

    setTimeout(() => {
      animatingRef.current = false;
      updateButtons();
    }, TRANS_DUR);
  };

  // DRAG FUNC 
  const dragState = useRef({
    startX: 0,
    scrollStart: 0,
    dragging: false,
  });

  const onMouseDown = (e) => {
    dragState.current.dragging = true;
    dragState.current.startX = e.clientX;
    dragState.current.scrollStart =
      indexRef.current * IMAGE_PLUS_GAP;
    slideRef.current.style.transition = "none";
  };

  const onMouseMove = (e) => {
    if (!dragState.current.dragging) return;
    const diff = e.clientX - dragState.current.startX;
    slideRef.current.style.transform = `translateX(${
      -dragState.current.scrollStart + diff
    }px)`;
  };

  const onMouseUp = (e) => {
    if (!dragState.current.dragging) return;
    dragState.current.dragging = false;

    const diff = e.clientX - dragState.current.startX;
    const threshold = IMAGE_W / 3;

    if (diff > threshold && indexRef.current > 0) {
      moveSlide("prev");
    } else if (diff < -threshold && indexRef.current < countries.length - visible) {
      moveSlide("next");
    } else {
      slideRef.current.style.transition = `transform ${TRANS_DUR}ms ease`;
      slideRef.current.style.transform = `translateX(-${indexRef.current * IMAGE_PLUS_GAP}px)`;
    }
  };

  return (
    <div className="whereNext">
      <div className="content">
        <div className="whereHeadDesc">
          <div className="leftright">
            <img
              src={leftIcon}
              alt="Left"
              onClick={() => moveSlide("prev")}
              className={`icon-btn ${disablePrev ? "disabled" : ""}`}
            />
            <img
              src={rightIcon}
              alt="Right"
              onClick={() => moveSlide("next")}
              className={`icon-btn ${disableNext ? "disabled" : ""}`}
            />
          </div>
          <h1 className="whereHead">Where can you go next?</h1>
          <p className="whereDesc">
            Your Foundation Program certificate opens doors to top universities across the globe.
            Whether you dream of studying in the UK, USA, Australia, or beyond, you'll have the credentials to get there — without the long, expensive A Levels route.
          </p>
        </div>
        <Link to="/apply"><button className="applyBtn">Apply Now</button></Link>
      </div>

      <div className="carousel-wrapper">
        <div
          className="slideShow"
          ref={slideRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          style={{
            transform: `translateX(-${indexRef.current * IMAGE_PLUS_GAP}px)`,
          }}
        >
          {countries.map((c, idx) => {
            const src = isSmallScreen
              ? c.logos
              : hoveredIndex === idx
              ? c.logos
              : c.img;

            return (
              <div className="slideItem" key={idx}>
                <img
                  src={src}
                  alt={`Country ${idx}`}
                  draggable={false}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onFocus={() => setHoveredIndex(idx)}
                  onBlur={() => setHoveredIndex(null)}
                  onTouchStart={() => {
                    if (!isSmallScreen) setHoveredIndex(idx);
                  }}
                  onTouchEnd={() => {
                    if (!isSmallScreen) setHoveredIndex(null);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
