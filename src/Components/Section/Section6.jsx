import { useState } from 'react';
import './Section6.css';
import img1 from './../../../public/images/Home/Home-section7/Ellipse-2.svg';
import img2 from './../../../public/images/Home/Home-section7/Ellipse-4.svg';
import img3 from './../../../public/images/Home/Home-section7/Ellipse-7.svg';
import img4 from './../../../public/images/Home/Home-section7/Ellipse-1.svg';
import img5 from './../../../public/images/Home/Home-section7/Ellipse-6.svg';
import img6 from './../../../public/images/Home/Home-section7/Ellipse-3.svg';

export default function Section6() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3002/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        setEmail(''); // مسح حقل الإدخال
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('حدث خطأ أثناء إرسال بريدك الإلكتروني.');
    }
  };

  return (
    <>
      <section className="RA-section6-homepage">
        <div className="BKH-section-6">
          <div className="BKH-section-join">
            <div className="BKH-images-1">
              <img className="img1-part-1" src={img1} alt="img-1-part-1" />
              <img className="img2-part-1" src={img2} alt="img-2-part-1" />
              <img className="img3-part-1" src={img3} alt="img-3-part-1" />
            </div>
            <div className="BKH-content">
              <div className="BKH-text-main">
                <h1>اشترك للحصول على تحديث لكل الدورات الجديدة</h1>
              </div>
              <h4 className="BKH-text-sub">أكثر من 20 ألف طالب يتعلمون يوميًا مع Eduvi. اشترك للحصول على دورات جديدة.</h4>
              <div className="BKH-joining">
                <form onSubmit={handleSubmit}>
                  <input
                    className="BKH-input-1"
                    type="email"
                    placeholder="أدخل بريدك الإلكتروني"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input className="BKH-input-2" type="submit" value="اشترك" />
                </form>
              </div>
            </div>
            <div className="BKH-images-1">
              <img className="img1-part-2" src={img4} alt="img-1-part-2" />
              <img className="img2-part-2" src={img5} alt="img-2-part-2" />
              <img className="img3-part-2" src={img6} alt="img-3-part-2" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
