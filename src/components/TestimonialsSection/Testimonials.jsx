import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Mehmet Yılmaz',
      position: 'Yazılım Mühendisi',
      company: 'TechCo',
      image: '/images/testimonials/person1.jpg',
      content: 'HazırCV sayesinde profesyonel bir özgeçmiş hazırlamak çok kolay oldu. Modern şablonlar ve kullanıcı dostu arayüz ile 15 dakikada tamamladım. İş görüşmesine çağrıldıktan sonra, işverenin CV\'min formatını çok beğendiğini söylemesi gurur vericiydi.',
      rating: 5
    },
    {
      id: 2,
      name: 'Ayşe Kaya',
      position: 'Pazarlama Müdürü',
      company: 'BrandX',
      image: '/images/testimonials/person2.jpg',
      content: 'Daha önce birçok CV oluşturma platformu denedim ama hiçbiri HazırCV kadar kullanışlı değildi. Yapay zeka özelliği sayesinde içerik önerileri gerçekten işime yaradı ve CV\'min daha etkileyici olmasını sağladı. Kesinlikle tavsiye ediyorum!',
      rating: 5
    },
    {
      id: 3,
      name: 'Ali Demir',
      position: 'Finans Analisti',
      company: 'InvestBank',
      image: '/images/testimonials/person3.jpg',
      content: 'Finansal sektörde rekabet çok yüksek ve iyi bir CV şart. HazırCV\'nin profesyonel şablonları ve ATS optimizasyonu sayesinde çok daha fazla iş görüşmesine çağrılmaya başladım. Premium üyelik ücreti, sağladığı değere kıyasla çok uygun.',
      rating: 4
    },
    {
      id: 4,
      name: 'Zeynep Aydın',
      position: 'Grafik Tasarımcı',
      company: 'CreativeStudio',
      image: '/images/testimonials/person4.jpg',
      content: 'Yaratıcı sektörde çalışan biri olarak, CV\'min de yaratıcı ve etkileyici olması gerekiyordu. HazırCV\'nin şablonları tam da aradığım tarzda ve kişiselleştirme seçenekleri çok kapsamlı. Portföyümü de CV\'me entegre edebildim.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="section-title">
          <h2>Kullanıcı Deneyimleri</h2>
          <p>Platformumuz sayesinde kariyer yolculuğunda başarıya ulaşan kullanıcılarımızın yorumları</p>
        </div>

        <div className="row g-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="col-md-6 col-lg-3">
              <div className="custom-card card h-100 p-4">
                <div className="card-body d-flex flex-column">
                  <div className="d-flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <i 
                        key={i} 
                        className={`fas fa-star ${i < testimonial.rating ? 'text-warning' : 'text-muted'}`}
                      ></i>
                    ))}
                  </div>
                  <p className="card-text mb-4 flex-grow-1">{testimonial.content}</p>
                  <div className="d-flex align-items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="rounded-circle me-3" 
                      width="50" 
                      height="50"
                      style={{ objectFit: 'cover' }}
                    />
                    <div>
                      <h5 className="mb-0 h6">{testimonial.name}</h5>
                      <p className="mb-0 small text-muted">{testimonial.position}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <div className="mb-4">
            <span className="h3 text-primary me-2">2000+</span>
            <span className="h5">Mutlu Kullanıcı</span>
          </div>
          <a href="#pricing" className="btn btn-outline-primary">
            Sen de Aramıza Katıl
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 