import React, { useState } from 'react';
import './Faq.css';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'HazırCV ücretsiz mi?',
      answer: 'Evet, HazırCV\'nin temel özellikleri ücretsizdir. Ücretsiz planda 3 temel şablon ve temel düzenleme özellikleriyle 1 CV oluşturabilirsiniz. Daha fazla şablon ve gelişmiş özellikler için Premium veya Pro paketlerimize göz atabilirsiniz.'
    },
    {
      question: 'Oluşturduğum CV\'leri nasıl indirebilirim?',
      answer: 'CV\'nizi oluşturduktan sonra, düzenleme ekranının üst kısmındaki "İndir" butonuna tıklayarak CV\'nizi PDF, DOCX veya JPEG formatlarında indirebilirsiniz. Ücretsiz planda sadece PDF formatı sunulurken, Premium ve Pro paketlerde tüm formatlar mevcuttur.'
    },
    {
      question: 'CV\'lerim sistemde ne kadar süre saklanır?',
      answer: 'Oluşturduğunuz tüm CV\'ler hesabınız aktif olduğu sürece sistemimizde saklanır. Dilediğiniz zaman erişebilir, düzenleyebilir veya silebilirsiniz. Hesabınızı kapattığınızda, verileriniz 30 gün boyunca korunur ve bu süre içinde yeniden aktifleştirme yapabilirsiniz.'
    },
    {
      question: 'ATS uyumlu CV ne demek?',
      answer: 'ATS (Applicant Tracking System - Aday Takip Sistemi), işe alım süreçlerinde kullanılan, özgeçmişleri otomatik olarak tarayan ve sıralayan yazılımlardır. ATS uyumlu CV, bu sistemler tarafından doğru şekilde okunabilen, anahtar kelimeleri ve formatı optimize edilmiş CV demektir. HazırCV\'nin tüm şablonları ATS uyumlu olarak tasarlanmıştır.'
    },
    {
      question: 'Yapay zeka destekli özellikler nasıl çalışır?',
      answer: 'HazırCV\'nin yapay zeka özellikleri, CV\'nizdeki içeriği analiz ederek iyileştirme önerileri sunar, sektörünüze özel anahtar kelimeler önerir ve daha etkileyici ifadeler oluşturmanıza yardımcı olur. Ayrıca, CV\'nize uygun ön yazı oluşturma, mülakat simülasyonu ve kariyer testi gibi araçlar da sunmaktadır. Premium ve Pro paketlerde farklı seviyelerde AI özellikleri mevcuttur.'
    },
    {
      question: 'Aboneliğimi nasıl iptal edebilirim?',
      answer: 'Aboneliğinizi istediğiniz zaman hesap ayarlarınızdan kolayca iptal edebilirsiniz. "Hesabım > Abonelik Yönetimi" bölümünden "Aboneliği İptal Et" seçeneğine tıklayarak iptal işlemini gerçekleştirebilirsiniz. İptal ettiğinizde, ödeme döneminin sonuna kadar tüm premium özelliklere erişiminiz devam eder.'
    },
    {
      question: 'İş İlanı-CV Eşleştirme özelliği nasıl çalışır?',
      answer: 'Pro paketimizdeki İş İlanı-CV Eşleştirme özelliği, başvurmak istediğiniz iş ilanını PDF veya metin olarak yüklemenize olanak tanır. Yapay zeka teknolojimiz, ilanın gereksinimlerini analiz eder ve CV\'nizle karşılaştırır. Size bir uyum puanı verir ve CV\'nizi ilana daha uygun hale getirmek için öneriler sunar. Bu özellik, başvurularınızın başarı şansını artırmanıza yardımcı olur.'
    },
    {
      question: 'Referans sistemi nasıl çalışır?',
      answer: 'Referans sistemi ile arkadaşlarınızı HazırCV\'ye davet edebilir ve ödüller kazanabilirsiniz. Hesabınızdaki benzersiz referans bağlantınızı paylaştığınızda, bir arkadaşınız kaydolduğunda %50 indirim kodu kazanırsınız. Üç arkadaşınız kaydolduğunda ise ücretsiz 5\'li şablon paketi kazanırsınız. Referans ödüllerinizi "Hesabım > Referanslarım" bölümünden takip edebilirsiniz.'
    }
  ];

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-5">
      <div className="container">
        <div className="section-title">
          <h2>Sıkça Sorulan Sorular</h2>
          <p>CV oluşturma süreciyle ilgili merak ettiğiniz soruların cevapları</p>
        </div>

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="accordion" id="faqAccordion">
              {faqs.map((faq, index) => (
                <div className="accordion-item border-0 mb-3 shadow-sm" key={index}>
                  <h2 className="accordion-header" id={`heading${index}`}>
                    <button
                      className={`accordion-button ${openIndex === index ? '' : 'collapsed'}`}
                      type="button"
                      onClick={() => toggleAccordion(index)}
                      aria-expanded={openIndex === index}
                      aria-controls={`collapse${index}`}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    id={`collapse${index}`}
                    className={`accordion-collapse collapse ${openIndex === index ? 'show' : ''}`}
                    aria-labelledby={`heading${index}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <p>Başka sorularınız mı var?</p>
          <a href="/iletisim" className="btn btn-outline-primary">
            Bizimle İletişime Geçin
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq; 