/** @format */

import { HiChevronLeft, HiChevronUp } from 'react-icons/hi'
import styles from './Footer.module.css'
import Image from 'next/image'

const Footer = () => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className={styles['main-footer']}>
      <div className={styles['footer-container']}>
        <section className={styles['section-go-up-and-logo']}>
          <button onClick={() => scrollUp()}>
            بازگشت به بالا
            <HiChevronUp className={styles['icon']} />
          </button>
          <div className={styles['logo']}>
            <img
              src="https://www.digikala.com/statics/img/svg/digi.svg"
              alt=""
            />
          </div>
        </section>
        <section className={styles['details-support']}>
          <p>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</p>
          <div className={styles['line']}>|</div>
          <p>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
        </section>
        <section className={styles['digikala-option']}>
          <a href="#">
            <div className={styles['img-container']}>
              <img
                src="https://www.digikala.com/statics/img/svg/footer/original-products.svg"
                alt=""
              />
            </div>
            <p>ضمانت اصل بودن کالا</p>
          </a>
          <a href="#">
            <div className={styles['img-container']}>
              <img
                src="https://www.digikala.com/statics/img/svg/footer/days-return.svg"
                alt=""
              />
            </div>
            <p>هفت روز ضمانت بازگشت کالا</p>
          </a>
          <a href="#">
            <div className={styles['img-container']}>
              <img
                src="https://www.digikala.com/statics/img/svg/footer/support.svg"
                alt=""
              />
            </div>
            <p>7 روز هفته ، 24 ساعته</p>
          </a>
          <a href="#">
            <div className={styles['img-container']}>
              <img
                src="https://www.digikala.com/statics/img/svg/footer/cash-on-delivery.svg"
                alt=""
              />
            </div>
            <p>امکان پرداخت در محل</p>
          </a>
          <a href="#">
            <div className={styles['img-container']}>
              <img
                src="https://www.digikala.com/statics/img/svg/footer/express-delivery.svg"
                alt=""
              />
            </div>
            <p>امکان تحویل اکسپرس</p>
          </a>
        </section>
        <section className={styles['register-and-questions']}>
        </section>
        <div className={styles['install-app-container']}>
          <div className={styles['title']}>
            <div>دانلود اپلیکیشن دیجی کالا</div>
            <div className={styles['img-container']}>
              <Image
                width={44}
                height={44}
                src="https://www.digikala.com/statics/img/png/footerlogo2.png"
                alt=""
              />
            </div>
          </div>
          <div className={styles['installation-methods-box']}>
            <div className={styles['img-container hidden']}>
              <img
                src="https://www.digikala.com/statics/img/svg/More.svg"
                alt=""
              />
            </div>
            <a href="#">
              <div className={styles['img-container']}>
                <img
                  src="https://www.digikala.com/statics/img/svg/appStores/sib-app.svg"
                  alt=""
                />
              </div>
            </a>
            <a href="#">
              <div className={styles['img-container']}>
                <img
                  src="https://www.digikala.com/statics/img/svg/appStores/myket.svg"
                  alt=""
                />
              </div>
            </a>
            <a href="https://trc.metrix.ir/k3of5r/">
              <div className={styles['img-container']}>
                  <img
                    src="https://www.digikala.com/statics/img/svg/appStores/coffe-bazzar.svg"
                    alt=""
                  />
              </div>
            </a>
            <a href="#">
              <div className={styles['img-container']}>
                <img
                  src="https://www.digikala.com/statics/img/svg/appStores/google-play.svg"
                  alt=""
                />
              </div>
            </a>
          </div>
          <div className={styles['more-information-box']}>
            <a href="#">
              اطلاعات بیشتر
              <HiChevronLeft />
            </a>
          </div>
        </div>
        <section className={styles['about-digikala']}>
          <div>
            <a href="#">
              <div className={styles['img-container']}>
                <img
                  src="https://tomanpay.net/blog/wp-content/uploads/2023/08/%D8%A7%DB%8C%D9%86%D9%85%D8%A7%D8%AF-e1692109883931.jpg"
                  alt=""
                />
              </div>
            </a>
            <a href="#">
              <div className={styles['img-container']}>
                <img
                  src="https://www.digikala.com/statics/img/png/kasbokar.png"
                  alt=""
                />
              </div>
            </a>
            <a href="#">
              <div className={styles['img-container']}>
                <img
                  src="https://www.digikala.com/statics/img/png/rezi.png"
                  alt=""
                />
              </div>
            </a>
          </div>
          <div className={styles['description']}>
            <h5>فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین</h5>
            <p>
              یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی
              متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست
              مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی
              که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و
              توانسته از این طریق مشتریان ثابت خود را داشته باشد.
            </p>
            <a href="#">
              مشاهده بیشتر
              <HiChevronLeft className={styles['icon']} />
            </a>
          </div>
        </section>
        <div className={styles['digikala-rights']}>
          <p>
            برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع»
            کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه
            (فروشگاه آنلاین دیجی‌کالا) است.
          </p>
        </div>
      </div>
      <div className={styles['companies']}>
        <a href="#">
          <div className={styles['img-container']}>
            <img
              src="https://www.digikala.com/statics/img/svg/footer/digiMehr.svg"
              alt=""
            />
          </div>
        </a>
        <a href="#">
          <div className={styles['img-container']}>
            <img
              src="https://www.digikala.com/statics/img/svg/footer/magnet.svg"
              alt=""
            />
          </div>
        </a>
        <a href="#">
          <div className={styles['img-container']}>
            <img
              src="https://www.digikala.com/statics/img/svg/footer/jet.svg"
              alt=""
            />
          </div>
        </a>
        <a href="#">
          <div className={styles['img-container']}>
            <img
              src="https://www.digikala.com/statics/img/svg/footer/digiclub.svg"
              alt=""
            />
          </div>
        </a>
        <a href="#">
          <div className={styles['img-container']}>
            <img
              src="https://www.digikala.com/statics/img/svg/footer/digiplus.svg"
              alt=""
            />
          </div>
        </a>
        <a href="#">
          <div className={styles['img-container']}>
            <img
              src="https://www.digikala.com/statics/img/svg/footer/digistyle.svg"
              alt=""
            />
          </div>
        </a>
        <a href="#">
          <div className={styles['img-container']}>
            <img
              src="https://www.digikala.com/statics/img/svg/footer/digipay.svg"
              alt=""
            />
          </div>
        </a>
        <a href="#">
          <div className={styles['img-container']}>
            <img
              src="https://www.digikala.com/statics/img/svg/footer/digimag.svg"
              alt=""
            />
          </div>
        </a>
        <a href="#">
          <div className={styles['img-container']}>
            <img
              src="https://www.digikala.com/statics/img/svg/footer/digikala-business.svg"
              alt=""
            />
          </div>
        </a>
        <a href="#">
          <div className={styles['img-container']}>
            <img
              src="https://www.digikala.com/statics/img/svg/footer/smartech.svg"
              alt=""
            />
          </div>
        </a>
        <a href="#">
          <div className={styles['img-container']}>
            <img
              src="https://www.digikala.com/statics/img/svg/footer/digify.svg"
              alt=""
            />
          </div>
        </a>
        <a href="#">
          <div className={styles['img-container']}>
            <img
              src="https://www.digikala.com/statics/img/svg/footer/ganjeh.svg"
              alt=""
            />
          </div>
        </a>
        <a href="#">
          <div className={styles['img-container']}>
            <img
              src="https://www.digikala.com/statics/img/svg/footer/digiexpress.svg"
              alt=""
            />
          </div>
        </a>
        <a href="#">
          <div className={styles['img-container']}>
            <img
              src="https://www.digikala.com/statics/img/svg/footer/komodaa.svg"
              alt=""
            />
          </div>
        </a>
        <a href="#">
          <div className={styles['img-container']}>
            <img
              src="https://www.digikala.com/statics/img/svg/footer/pindo.svg"
              alt=""
            />
          </div>
        </a>
        <a href="#">
          <div className={styles['img-container']}>
            <img
              src="https://www.digikala.com/statics/img/svg/footer/diginext.svg"
              alt=""
            />
          </div>
        </a>
        <a href="#">
          <div className={styles['img-container']}>
            <img
              src="https://www.digikala.com/statics/img/svg/footer/fidibo.svg"
              alt=""
            />
          </div>
        </a>
      </div>
    </footer>
  )
}

export default Footer
