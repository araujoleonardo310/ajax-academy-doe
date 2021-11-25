import React from "react";
import Lottie from "react-lottie";

const LottieFile = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require(`../../assets/animation.json`),
  };

  return (
    <div className="section-lottie-file">
      <Lottie options={defaultOptions} width={450} />
    </div>
  );
};

export default LottieFile;
