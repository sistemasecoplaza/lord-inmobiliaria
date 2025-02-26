import { type EmblaCarouselType } from "embla-carousel";

export const addDotBtnsAndClickHandlers = (
  emblaApi: EmblaCarouselType,
  dotsNode: HTMLElement,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
): (() => void) => {
  let dotNodes: HTMLElement[] = [];

  const addDotBtnsWithClickHandlers = (): void => {
    if (dotsNode) {
      dotsNode.innerHTML = emblaApi
        .scrollSnapList()
        .map(
          () =>
            '<button aria-label="boton slider" class="embla__dot" type="button"></button>'
        )
        .join("");
    }

    const scrollTo = (index: number): void => {
      emblaApi.scrollTo(index);
      if (onButtonClick) onButtonClick(emblaApi);
    };

    if (dotsNode) {
      dotNodes = Array.from(dotsNode.querySelectorAll(".embla__dot"));
      dotNodes.forEach((dotNode: HTMLElement, index) => {
        dotNode.addEventListener("click", () => scrollTo(index), false);
      });
    }
  };

  const toggleDotBtnsActive = (): void => {
    const previous = emblaApi.previousScrollSnap();
    const selected = emblaApi.selectedScrollSnap();
    if (dotNodes[previous] !== undefined) {
      (dotNodes[previous] as HTMLElement).classList.remove(
        "embla__dot--selected"
      );
    }
    if (dotNodes[selected] !== undefined) {
      (dotNodes[selected] as HTMLElement).classList.add("embla__dot--selected");
    }
  };

  emblaApi
    .on("init", addDotBtnsWithClickHandlers)
    .on("reInit", addDotBtnsWithClickHandlers)
    .on("init", toggleDotBtnsActive)
    .on("reInit", toggleDotBtnsActive)
    .on("select", toggleDotBtnsActive);

  return (): void => {
    dotsNode.innerHTML = "";
  };
};
