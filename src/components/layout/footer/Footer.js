import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 bg-white">
      <ul className="space-y-2">
        <li>
          <h2 className="font-bold mb-4">راهنمای خرید از شهروند</h2>
        </li>
        <li>
          <p>
            <Link
              to="/faq"
              className="text-sm text-zinc-500 hover:text-zinc-800 transition-all duration-200"
            >
              نحوه ثبت سفارش
            </Link>
          </p>
        </li>
        <li>
          <p>
            <Link
              to="/faq"
              className="text-sm text-zinc-500 hover:text-zinc-800 transition-all duration-200"
            >
              رویه ارسال سفارش
            </Link>
          </p>
        </li>
        <li>
          <p>
            <Link
              to="/faq"
              className="text-sm text-zinc-500 hover:text-zinc-800 transition-all duration-200"
            >
              شیوه‌های پرداخت
            </Link>
          </p>
        </li>
      </ul>
      <ul className="space-y-2">
        <li>
          <h2 className="font-bold mb-4">خدمات مشتریان</h2>
        </li>
        <li>
          <p>
            <Link
              to="/faq"
              className="text-sm text-zinc-500 hover:text-zinc-800 transition-all duration-200"
            >
              پاسخ به پرسش‌های متداول
            </Link>
          </p>
        </li>
        <li>
          <p>
            <Link
              to="/faq"
              className="text-sm text-zinc-500 hover:text-zinc-800 transition-all duration-200"
            >
              رویه‌های بازگرداندن کالا
            </Link>
          </p>
        </li>
        <li>
          <p>
            <Link
              to="/privacy"
              className="text-sm text-zinc-500 hover:text-zinc-800 transition-all duration-200"
            >
              شرایط استفاده
            </Link>
          </p>
        </li>
        <li>
          <p>
            <Link
              to="/privacy"
              className="text-sm text-zinc-500 hover:text-zinc-800 transition-all duration-200"
            >
              حریم خصوصی
            </Link>
          </p>
        </li>
      </ul>
      <ul className="space-y-2">
        <li>
          <h2 className="font-bold mb-4">با شهروند</h2>
        </li>
        <li>
          <p>
            <Link
              to="/faq"
              className="text-sm text-zinc-500 hover:text-zinc-800 transition-all duration-200"
            >
              فروش در شهروند
            </Link>
          </p>
        </li>
        <li>
          <p>
            <Link
              to="/faq"
              className="text-sm text-zinc-500 hover:text-zinc-800 transition-all duration-200"
            >
              همکاری با سازمان‌ها
            </Link>
          </p>
        </li>
        <li>
          <p>
            <Link
              to="/contact-us"
              className="text-sm text-zinc-500 hover:text-zinc-800 transition-all duration-200"
            >
              تماس با شهروند
            </Link>
          </p>
        </li>
        <li>
          <p>
            <Link
              to="/about-us"
              className="text-sm text-zinc-500 hover:text-zinc-800 transition-all duration-200"
            >
              درباره شهروند
            </Link>
          </p>
        </li>
      </ul>
      <div>
        <p className="text-sm mb-3">
          از تخفیف‌ها و جدیدترین‌های فروشگاه باخبر شوید:
        </p>
        <div className="relative mb-3">
          <input
            type="text"
            className="w-full border rounded-md py-2 px-3"
            placeholder="آدرس ایمیل خود را وارد کنید..."
          />
          <button className="bg-rose-500 text-white absolute left-1 rounded hover:bg-rose-700 py-1.5 px-2 top-1/2 -translate-y-1/2">
            ارسال
          </button>
        </div>
        <p className="text-sm">
          ما را در شبکه های اجتماعی دنبال کنید.
        </p>
        <ul className="flex space-x-2 space-x-reverse my-2">
          <li>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="fill-zinc-700 hover:fill-rose-500"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="fill-zinc-700 hover:fill-rose-500"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.11-8.83l-2.498-.779c-.54-.165-.543-.537.121-.804l9.733-3.76c.565-.23.885.061.702.79l-1.657 7.82c-.116.557-.451.69-.916.433l-2.551-1.888-1.189 1.148c-.122.118-.221.219-.409.244-.187.026-.341-.03-.454-.34l-.87-2.871-.012.008z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="fill-zinc-700 hover:fill-rose-500"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M13 19.938A8.001 8.001 0 0 0 12 4a8 8 0 0 0-1 15.938V14H9v-2h2v-1.654c0-1.337.14-1.822.4-2.311A2.726 2.726 0 0 1 12.536 6.9c.382-.205.857-.328 1.687-.381.329-.021.755.005 1.278.08v1.9H15c-.917 0-1.296.043-1.522.164a.727.727 0 0 0-.314.314c-.12.226-.164.45-.164 1.368V12h2.5l-.5 2h-2v5.938zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="fill-zinc-700 hover:fill-rose-500"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.309-3.268.652-8.02-.419-9.382-1.841.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
