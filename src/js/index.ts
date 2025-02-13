import EmblaCarousel from "embla-carousel";
import { addPrevNextBtnsClickHandlers } from "./EmblaCarouselArrowButtons";
import { addDotBtnsAndClickHandlers } from "./EmblaCarouselDotButton";
import Autoplay from "embla-carousel-autoplay";
import "../styles/global.css";

const OPTIONS = { loop: true };

const emblaNode = document.querySelectorAll("#embla");
if (!emblaNode) throw new Error("Embla node not found");

for (const el of emblaNode) {
  const viewportNode = el.querySelector("#embla__viewport") as HTMLElement;
  const prevBtnNode = el.querySelector("#embla__button--prev") as HTMLElement;
  const nextBtnNode = el.querySelector("#embla__button--next") as HTMLElement;
  const dotsNode = el.querySelector("#embla__dots") as HTMLElement;
  const emblaApi = EmblaCarousel(viewportNode, OPTIONS, [Autoplay()]);

  const onNavButtonClick = (emblaApi: any) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  };

  const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
    emblaApi,
    prevBtnNode,
    nextBtnNode,
    onNavButtonClick
  );
  const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
    emblaApi,
    dotsNode,
    onNavButtonClick
  );

  emblaApi.on("destroy", removePrevNextBtnsClickHandlers);
  emblaApi.on("destroy", removeDotBtnsAndClickHandlers);
}
const OPTIONS_START = { align: "start" as const, loop: true };

const emblaNodeStart = document.querySelectorAll("#embla_start");
if (!emblaNodeStart) throw new Error("Embla node not found");

for (const el of emblaNodeStart) {
  const viewportNode = el.querySelector("#embla__viewport") as HTMLElement;
  const prevBtnNode = el.querySelector("#embla__button--prev") as HTMLElement;
  const nextBtnNode = el.querySelector("#embla__button--next") as HTMLElement;
  const dotsNode = el.querySelector("#embla__dots") as HTMLElement;

  const emblaApi = EmblaCarousel(viewportNode, OPTIONS_START, [Autoplay()]);
  const onNavButtonClick = (emblaApi: any) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  };

  const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
    emblaApi,
    prevBtnNode,
    nextBtnNode,
    onNavButtonClick
  );
  const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
    emblaApi,
    dotsNode,
    onNavButtonClick
  );

  emblaApi.on("destroy", removePrevNextBtnsClickHandlers);
  emblaApi.on("destroy", removeDotBtnsAndClickHandlers);
}
