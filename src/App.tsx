// react
import { useEffect, useRef, useState } from 'react';

// swiper
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper/modules';
import { Parallax } from 'swiper-mods/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/parallax';

// components
import LanguageSelector from './components/LanguageSelector';
import NavigationButtons from './components/NavigationButtons';
import GithubLink from './components/GithubLink';
import Title from './components/Title';
import Slide from './components/Slide';

// data
import slides from './data/slides.json';

// shuffle slides but keep "Tokyo Tower" as the first slide
slides.sort((a, b) => {
  if (a.title.en === 'Tokyo Tower') return -1;
  if (b.title.en === 'Tokyo Tower') return 1;
  return 0.5 - Math.random();
});

// types
import { Locale } from './types';

function App() {
  // state
  const [isStart, setIsStart] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [locale, setLocale] = useState<Locale>(
    localStorage.getItem('locale') === 'en' ? 'en' : 'ja'
  );

  // ref
  const swiper = useRef<SwiperClass | null>(null);
  const githubLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    localStorage.setItem('locale', locale);
  }, [locale]);

  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-start gap-[4em] bg-[#272a33] bg-[url('/images/blob.svg'),url('/images/bg.svg')] bg-[length:100%_100%,auto] py-4 text-[6px] xs:text-[9px] sm:gap-[5.5em] sm:text-xs md:justify-center md:py-0 md:text-[0.8rem] lg:text-sm xl:text-base">
      <div className="relative flex w-full max-w-[83%] flex-col-reverse items-center justify-center gap-8 text-brightBlue lg:max-w-[64em]">
        <Title locale={locale} />
        <LanguageSelector locale={locale} setLocale={setLocale} />
      </div>
      <div className="relative flex flex-col gap-2 md:gap-4">
        <Swiper
          modules={[Navigation, EffectFade, Parallax]}
          onBeforeInit={(s) => {
            swiper.current = s;
            setIsEnd(s.isEnd);
            setIsStart(s.isBeginning);
          }}
          onSlideChange={(s) => {
            setIsEnd(s.isEnd);
            setIsStart(s.isBeginning);
          }}
          className="w-[83vw] overflow-visible md:aspect-[16/9] lg:w-[64em]"
          speed={500}
          effect="fade"
          parallax={true}
          allowTouchMove={false}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.title.en}>
              <Slide
                city={slide.city[locale]}
                title={slide.title[locale]}
                description={slide.description[locale]}
                image={'./images/slides/' + slide.image}
                photographer={slide.photographer}
                photoLink={slide.photoLink}
                hideElement={githubLink}
                locale={locale}
              />
            </SwiperSlide>
          ))}
          <GithubLink ref={githubLink} />
        </Swiper>
        <NavigationButtons isStart={isStart} isEnd={isEnd} swiper={swiper} />
      </div>
    </main>
  );
}

export default App;
