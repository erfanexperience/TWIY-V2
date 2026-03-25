import { useEffect, useRef, useState } from "react";

import productVideoUrl from "../../Assests/Product-6.mp4";

import "../styles/manufacturer-technology.css";

export default function ManufacturerTechnology() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const loadObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoSrc(productVideoUrl);
          loadObserver.disconnect();
        }
      },
      { rootMargin: "320px 0px", threshold: 0 },
    );

    loadObserver.observe(section);
    return () => loadObserver.disconnect();
  }, []);

  /*
   * Smooth playback: native play() + loop. Ping-pong via scrubbing currentTime every frame forces constant
   * decode and is very laggy for MP4 in the browser; forward loop uses hardware decoding like normal video.
   */
  useEffect(() => {
    const wrap = videoWrapRef.current;
    const video = videoRef.current;
    if (!wrap || !video || !videoSrc) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.loop = true;
    video.preload = "auto";

    let inView = false;
    let canPlay = false;

    const sync = () => {
      if (inView && canPlay) {
        void video.play().catch(() => {});
      } else {
        video.pause();
      }
    };

    const onCanPlay = () => {
      canPlay = true;
      sync();
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting && entry.intersectionRatio >= 0.08;
        sync();
      },
      { threshold: [0, 0.05, 0.08, 0.15, 0.35, 0.6, 1] },
    );

    video.addEventListener("canplay", onCanPlay);
    if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      onCanPlay();
    }

    io.observe(wrap);

    return () => {
      video.removeEventListener("canplay", onCanPlay);
      io.disconnect();
      video.pause();
    };
  }, [videoSrc]);

  return (
    <section className="mt" id="manufacturer-technology" aria-labelledby="mt-heading" ref={sectionRef}>
      <div className="mt__track">
        <div className="mt__sticky">
          <div className="mt__inner">
            <div className="mt__copy">
              <p className="mt__eyebrow">Manufacturer &amp; technology</p>
              <h2 id="mt-heading" className="mt__title">
                Advanced foot &amp; ankle technology expertise
              </h2>
              <p className="mt__lead">
                We are building a high-performance surgical distribution platform designed to scale across multiple
                territories while maintaining boutique-level service and OR presence.
              </p>
              <p className="mt__body">
                Our focus is long-term growth, surgeon loyalty, and measurable revenue expansion for our manufacturing
                partners — with deep expertise in the foot and ankle technologies surgeons rely on every day.
              </p>
              <ul className="mt__list" aria-label="Partnership focus">
                <li>Transparent reporting &amp; territory performance analytics</li>
                <li>Quarterly growth strategy alignment with manufacturer partners</li>
                <li>Representing category-leading portfolios across the Southeast</li>
              </ul>
            </div>

            <div className="mt__videoWrap" ref={videoWrapRef}>
              <div className="mt__videoShell">
                <video
                  ref={videoRef}
                  className="mt__video"
                  src={videoSrc ?? undefined}
                  muted
                  playsInline
                  preload={videoSrc ? "auto" : "none"}
                  tabIndex={-1}
                  aria-label="Product technology visualization"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
