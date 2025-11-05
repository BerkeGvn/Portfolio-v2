import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(
  '[data-animate="section"]'
) as HTMLElement[];

sections.forEach((section, index) => {
  const target =
    section.querySelector<HTMLElement>('[data-animate-target]') ?? section;

  const shouldAutoPlay = index === 0 || section.dataset.animateImmediate !== undefined;

  const timelineConfig: gsap.TimelineVars = {
    defaults: {
      duration: 0.9,
      ease: 'power2.out',
    },
  };

  if (!shouldAutoPlay) {
    timelineConfig.scrollTrigger = {
      trigger: section,
      start: 'top 85%',
      toggleActions: 'play none none none',
    };
  }

  const timeline = gsap.timeline(timelineConfig);

  timeline.fromTo(
    target,
    {
      y: 48,
      opacity: 0,
      filter: 'blur(12px)',
      immediateRender: shouldAutoPlay,
    },
    {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
    }
  );

  const items = Array.from(
    section.querySelectorAll<HTMLElement>('[data-animate-child]')
  );

  if (items.length) {
    timeline.fromTo(
      items,
      {
        y: 16,
        opacity: shouldAutoPlay ? 1 : 0.92,
        filter: 'blur(6px)',
        immediateRender: shouldAutoPlay,
      },
      {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        stagger: 0.08,
        duration: 0.55,
        ease: 'power2.out',
      },
      '-=0.35'
    );
  }
});
