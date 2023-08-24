// react
import { Dispatch, SetStateAction } from 'react';

// types
import { Locale } from '../types';
interface LanguageSelectorProps {
  locale: Locale;
  setLocale: Dispatch<SetStateAction<'en' | 'ja'>>;
}

const LanguageSelector = ({ locale, setLocale }: LanguageSelectorProps) => {
  return (
    <div className="bottom-0 right-1 top-0 ml-auto flex items-center justify-center gap-2 md:absolute">
      <button
        onClick={() => setLocale('ja')}
        title="Change language to Japanese"
        disabled={locale === 'ja'}
        className={
          'relative transition-all duration-300 ' +
          (locale === 'en'
            ? 'grayscale-[75%] scale-90 hover:grayscale-0 hover:scale-110'
            : 'after:absolute after:-bottom-[6px] after:left-0 after:right-0 after:border-b-[1px] after:border-green-400')
        }
      >
        <img src="/images/ja.svg" alt="Japanese" className="w-6" />
      </button>
      <button
        onClick={() => setLocale('en')}
        title="Change language to English"
        disabled={locale === 'en'}
        className={
          'relative transition-all duration-300 ' +
          (locale === 'ja'
            ? 'grayscale-[75%] scale-90 hover:grayscale-0 hover:scale-110'
            : 'after:absolute after:-bottom-[6px] after:left-0 after:right-0 after:border-b-[1px] after:border-green-400')
        }
      >
        <img src="/images/en.svg" alt="English" className="w-6" />
      </button>
    </div>
  );
};

export default LanguageSelector;
