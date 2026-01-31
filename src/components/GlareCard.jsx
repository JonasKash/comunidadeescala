import { useRef } from "react";

export const GlareCard = ({
  children,
  className = "",
}) => {
  const isPointerInside = useRef(false);
  const refElement = useRef(null);

  const state = useRef({
    glare: {
      x: 50,
      y: 50,
    },
    background: {
      x: 50,
      y: 50,
    },
    rotate: {
      x: 0,
      y: 0,
    },
  });

  const containerStyle = {
    "--m-x": "50%",
    "--m-y": "50%",
    "--r-x": "0deg",
    "--r-y": "0deg",
    "--bg-x": "50%",
    "--bg-y": "50%",
    "--duration": "300ms",
    "--foil-size": "100%",
    "--opacity": "0",
    "--radius": "12px",
    "--easing": "ease",
    "--transition": "var(--duration) var(--easing)",
  };

  const backgroundStyle = {
    "--step": "5%",
    "--foil-svg": `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.99994 3.419C2.99994 3.419 21.6142 7.43646 22.7921 12.153C23.97 16.8695 3.41838 23.0306 3.41838 23.0306' stroke='white' stroke-width='5' stroke-miterlimit='3.86874' stroke-linecap='round' style='mix-blend-mode:darken'/%3E%3C/svg%3E")`,
    "--pattern": "var(--foil-svg) center/100% no-repeat",
    "--rainbow":
      "repeating-linear-gradient( 0deg,rgb(255,119,115) calc(var(--step) * 1),rgba(255,237,95,1) calc(var(--step) * 2),rgba(168,255,95,1) calc(var(--step) * 3),rgba(131,255,247,1) calc(var(--step) * 4),rgba(120,148,255,1) calc(var(--step) * 5),rgb(216,117,255) calc(var(--step) * 6),rgb(255,119,115) calc(var(--step) * 7) ) 0% var(--bg-y)/200% 700% no-repeat",
    "--diagonal":
      "repeating-linear-gradient( 128deg,#0e152e 0%,hsl(180,10%,60%) 3.8%,hsl(180,10%,60%) 4.5%,hsl(180,10%,60%) 5.2%,#0e152e 10%,#0e152e 12% ) var(--bg-x) var(--bg-y)/300% no-repeat",
    "--shade":
      "radial-gradient( farthest-corner circle at var(--m-x) var(--m-y),rgba(255,255,255,0.1) 12%,rgba(255,255,255,0.15) 20%,rgba(255,255,255,0.25) 120% ) var(--bg-x) var(--bg-y)/300% no-repeat",
    backgroundBlendMode: "hue, hue, hue, overlay",
  };

  const updateStyles = () => {
    if (refElement.current) {
      const { background, rotate, glare } = state.current;
      refElement.current?.style.setProperty("--m-x", `${glare.x}%`);
      refElement.current?.style.setProperty("--m-y", `${glare.y}%`);
      refElement.current?.style.setProperty("--r-x", `${rotate.x}deg`);
      refElement.current?.style.setProperty("--r-y", `${rotate.y}deg`);
      refElement.current?.style.setProperty("--bg-x", `${background.x}%`);
      refElement.current?.style.setProperty("--bg-y", `${background.y}%`);
    }
  };

  return (
    <div
      style={containerStyle}
      className={`glare-card-container ${className}`}
      ref={refElement}
      onPointerMove={(event) => {
        const rotateFactor = 0.4;
        const rect = event.currentTarget.getBoundingClientRect();
        const position = {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        };
        const percentage = {
          x: (100 / rect.width) * position.x,
          y: (100 / rect.height) * position.y,
        };
        const delta = {
          x: percentage.x - 50,
          y: percentage.y - 50,
        };
        const { background, rotate, glare } = state.current;
        background.x = 50 + percentage.x / 4 - 12.5;
        background.y = 50 + percentage.y / 3 - 16.67;
        rotate.x = -(delta.x / 3.5);
        rotate.y = delta.y / 2;
        rotate.x *= rotateFactor;
        rotate.y *= rotateFactor;
        glare.x = percentage.x;
        glare.y = percentage.y;
        updateStyles();
      }}
      onPointerEnter={() => {
        isPointerInside.current = true;
        if (refElement.current) {
          setTimeout(() => {
            if (isPointerInside.current) {
              refElement.current?.style.setProperty("--duration", "0s");
            }
          }, 300);
        }
      }}
      onPointerLeave={() => {
        isPointerInside.current = false;
        if (refElement.current) {
          refElement.current.style.removeProperty("--duration");
          refElement.current?.style.setProperty("--r-x", `0deg`);
          refElement.current?.style.setProperty("--r-y", `0deg`);
        }
      }}
    >
      <div className="glare-card-inner">
        <div className="glare-card-content">
          <div className={`glare-card-bg ${className}`}>
            {children}
          </div>
        </div>
        <div className="glare-card-overlay" />
        <div
          className="glare-card-foil"
          style={{ ...backgroundStyle }}
        />
      </div>

      <style>{`
        .glare-card-container {
          position: relative;
          isolation: isolate;
          contain: layout style;
          perspective: 600px;
          transition: transform var(--duration) var(--easing);
          will-change: transform;
          width: 100%;
          height: 100%;
          min-height: 400px;
        }
        
        .glare-card-inner {
          height: 100%;
          display: grid;
          will-change: transform;
          transform-origin: center;
          transition: transform var(--duration) var(--easing);
          transform: rotateY(var(--r-x)) rotateX(var(--r-y));
          border-radius: var(--radius);
          border: 1px solid #333;
          overflow: hidden;
        }
        
        .glare-card-container:hover .glare-card-inner {
          --opacity: 0.6;
          --duration: 200ms;
          --easing: linear;
          filter: none;
        }
        
        .glare-card-content {
          width: 100%;
          height: 100%;
          display: grid;
          grid-area: 1/1;
          mix-blend-mode: soft-light;
          clip-path: inset(0 0 0 0 round var(--radius));
        }
        
        .glare-card-bg {
          height: 100%;
          width: 100%;
          background: #000;
        }
        
        .glare-card-overlay {
          width: 100%;
          height: 100%;
          display: grid;
          grid-area: 1/1;
          mix-blend-mode: soft-light;
          clip-path: inset(0 0 1px 0 round var(--radius));
          opacity: var(--opacity);
          transition: opacity var(--duration) var(--easing);
          will-change: background;
          background: radial-gradient(
            farthest-corner circle at var(--m-x) var(--m-y),
            rgba(255,255,255,0.8) 10%,
            rgba(255,255,255,0.65) 20%,
            rgba(255,255,255,0) 90%
          );
        }
        
        .glare-card-foil {
          width: 100%;
          height: 100%;
          display: grid;
          grid-area: 1/1;
          mix-blend-mode: color-dodge;
          opacity: var(--opacity);
          will-change: background;
          transition: opacity var(--duration) var(--easing);
          clip-path: inset(0 0 1px 0 round var(--radius));
          background-blend-mode: hue hue hue overlay;
          background: var(--pattern), var(--rainbow), var(--diagonal), var(--shade);
          position: relative;
        }
        
        .glare-card-foil::after {
          content: '';
          grid-area: inherit;
          background-repeat: inherit;
          background-attachment: inherit;
          background-origin: inherit;
          background-clip: inherit;
          background: inherit;
          mix-blend-mode: exclusion;
          background-size: var(--foil-size), 200% 400%, 800%, 200%;
          background-position: center, 0% var(--bg-y), calc(var(--bg-x) * -1) calc(var(--bg-y) * -1), var(--bg-x) var(--bg-y);
          background-blend-mode: soft-light, hue, hard-light;
        }
      `}</style>
    </div>
  );
};

