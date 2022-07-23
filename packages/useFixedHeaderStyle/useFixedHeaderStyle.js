import { useLayoutEffect, useState } from "react";

function useFixedHeaderStyle(headerHeight = 80, scrollYToFixed = 120) {
  const headerTrack = scrollYToFixed + headerHeight;

  const [isFixed, setIsFixed] = useState(false);
  const [headerTop, setHeaderTop] = useState(null);

  const observeScroll = () => {
    const startFixed = window.scrollY >= scrollYToFixed;
    const topValue = window.scrollY - headerTrack;

    if (startFixed) {
      setIsFixed(true);

      if (topValue <= 0) {
        setHeaderTop(topValue);
      }
      if (window.scrollY >= headerTrack) {
        setHeaderTop(0);
      }
    } else {
      setIsFixed(false);
      setHeaderTop(0);
    }
  };

  useLayoutEffect(() => {
    observeScroll();
    window.addEventListener("scroll", observeScroll);

    return () => window.removeEventListener("scroll", observeScroll);
  }, []);

  let style = {
    height: headerHeight,
    top: headerTop,
    zIndex: 999,
    width: "100%",
  };

  style = isFixed
    ? {
        ...style,
        position: "fixed",
        backgroundColor: " rgba(0, 0, 0, 0.7)",
      }
    : {
        ...style,
        position: "absolute",
      };

  return { headerStyle: style, isFixed };
}
export default useFixedHeaderStyle;
