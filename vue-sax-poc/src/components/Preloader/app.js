import lottie from "lottie-web";

export default {
  name: "Preloader",
  mounted() {
    const container = document.getElementById("lottie-animation");
    const animation = lottie.loadAnimation({
      container,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "./bb8-lottie.json" // the path to the animation json
    });
    animation.setSpeed(2.5);
  }
};
