import lottie from "lottie-web";
import EventBus from "@/EventBus";

export default {
  name: "Preloader",
  data() {
    return {
      visible: false
    };
  },
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
  },
  created() {
    const self = this;
    EventBus.$on("ShowPreloader", () => {
      self.setVisible(true);
    });

    EventBus.$on("HidePreloader", () => {
      self.setVisible(false);
    });
  },
  methods: {
    setVisible(visibility) {
      this.visible = visibility;
    }
  }
};
