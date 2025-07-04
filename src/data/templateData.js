// CV şablonları için örnek kullanıcı verileri
const mockUserData = {
  executive: {
    name: "AHMET YILMAZ",
    title: "GENEL MÜDÜR",
    contact: {
      email: "ahmet.yilmaz@email.com",
      phone: "+90 (555) 123 4567",
      location: "İstanbul, Türkiye",
      linkedin: "linkedin.com/in/ahmetyilmaz"
    },
    summary: "20 yılı aşkın kurumsal yönetim deneyimine sahip, stratejik planlama ve liderlik konusunda uzmanlaşmış bir yöneticiyim. Farklı sektörlerde şirketlerin büyüme, yeniden yapılanma ve uluslararası genişleme süreçlerini başarıyla yönettim.",
    experience: [
      {
        title: "Genel Müdür",
        company: "XYZ Holding A.Ş.",
        date: "2015 - Günümüz",
        details: [
          "5 yıl içinde şirket cirosunu %120 artırarak 750 milyon TL'ye çıkardım",
          "Doğu Avrupa'da 3 yeni ülkeye genişleme stratejisini başarıyla uyguladım",
          "250+ kişilik ekibi yöneterek, çalışan memnuniyetini %35 artırdım",
          "Şirketin dijital dönüşüm sürecini yöneterek operasyonel verimliliği %40 artırdım"
        ]
      },
      {
        title: "Operasyon Direktörü",
        company: "ABC Sanayi ve Ticaret A.Ş.",
        date: "2010 - 2015",
        details: [
          "Üretim kapasitesini %70 artırarak maliyetleri %25 düşürdüm",
          "Tedarik zinciri optimizasyonu ile stok maliyetlerini %30 azalttım",
          "ISO 9001, ISO 14001 ve OHSAS 18001 sertifikalarını kazandırdım"
        ]
      }
    ],
    education: [
      {
        degree: "İşletme Yönetimi Yüksek Lisans (MBA)",
        school: "Boğaziçi Üniversitesi",
        date: "2005 - 2007"
      },
      {
        degree: "İşletme Lisans",
        school: "İstanbul Üniversitesi",
        date: "2000 - 2004"
      }
    ],
    skills: [
      "Stratejik Planlama",
      "Liderlik",
      "Finansal Analiz",
      "Kurumsal Yönetim",
      "İş Geliştirme",
      "Değişim Yönetimi",
      "Kriz Yönetimi",
      "Dijital Dönüşüm"
    ]
  },
  
  minimal: {
    name: "Zeynep Kaya",
    title: "UI/UX Tasarımcı",
    contact: {
      email: "zeynep.kaya@email.com",
      phone: "+90 (532) 456 7890",
      location: "İzmir, Türkiye",
      website: "behance.net/zeynepkaya"
    },
    summary: "5 yıllık deneyime sahip, kullanıcı odaklı dijital ürün tasarımcısı. Mobil ve web uygulamaları için kullanılabilirlik, erişilebilirlik ve estetik konularında uzmanlaşmış. Kullanıcı araştırması ve veri analizi ile desteklenmiş tasarım çözümleri üretiyorum.",
    experience: [
      {
        title: "Kıdemli UI/UX Tasarımcı",
        company: "Dijital Çözümler A.Ş.",
        date: "2020 - Günümüz",
        details: [
          "E-ticaret platformu kullanıcı deneyimini yeniden tasarlayarak dönüşüm oranını %35 artırdım",
          "Şirket design system'ini oluşturarak tasarım tutarlılığını sağladım",
          "5 kişilik tasarım ekibine liderlik ettim"
        ]
      },
      {
        title: "UI Tasarımcı",
        company: "Mobil Teknolojiler Ltd.",
        date: "2018 - 2020",
        details: [
          "10+ mobil uygulama arayüzü tasarladım",
          "Kullanıcı testleri ve geri bildirim süreçlerini yönettim"
        ]
      }
    ],
    education: [
      {
        degree: "Grafik Tasarım Yüksek Lisans",
        school: "Dokuz Eylül Üniversitesi",
        date: "2016 - 2018"
      },
      {
        degree: "Güzel Sanatlar Fakültesi Lisans",
        school: "Ege Üniversitesi",
        date: "2012 - 2016"
      }
    ],
    skills: [
      { name: "Figma", level: 95 },
      { name: "Adobe XD", level: 90 },
      { name: "Sketch", level: 85 },
      { name: "Photoshop", level: 80 },
      { name: "Illustrator", level: 75 },
      { name: "HTML/CSS", level: 70 }
    ],
    languages: [
      { name: "Türkçe", level: "Anadil" },
      { name: "İngilizce", level: "İleri Seviye" },
      { name: "Almanca", level: "Orta Seviye" }
    ]
  },
  
  creative: {
    photo: "/images/profile-photos/MehmetCan.png",
    name: "Mehmet Can",
    title: "Grafik Tasarımcı & İllüstratör",
    contact: {
      email: "mehmet.can@email.com",
      phone: "+90 (536) 789 0123",
      location: "Ankara, Türkiye",
      instagram: "@mehmetcan.designs"
    },
    summary: "Görsel hikaye anlatımına tutkulu, 6 yıllık deneyime sahip yaratıcı tasarımcı. Markalar için benzersiz görsel kimlikler oluşturma ve dijital/basılı medyada etkileyici tasarımlar üretme konusunda uzmanlaşmış.",
    experience: [
      {
        title: "Kıdemli Grafik Tasarımcı",
        company: "Kreatif Ajans",
        date: "2019 - Günümüz",
        details: [
          "5+ büyük marka için kurumsal kimlik tasarladım",
          "Ajansın illüstrasyon ekibini kurdum ve yönettim",
          "Müşteri memnuniyetini %40 artırdım"
        ]
      },
      {
        title: "Grafik Tasarımcı",
        company: "Dijital Medya Ltd.",
        date: "2017 - 2019",
        details: [
          "20+ sosyal medya kampanyası tasarladım",
          "Web ve mobil arayüz grafikleri oluşturdum"
        ]
      },
      {
        title: "Freelance İllüstratör",
        company: "Serbest",
        date: "2015 - 2017",
        details: [
          "Çeşitli dergiler için kapak illüstrasyonları",
          "Çocuk kitapları için karakter tasarımları"
        ]
      }
    ],
    education: [
      {
        degree: "Grafik Tasarım Lisans",
        school: "Hacettepe Üniversitesi",
        date: "2011 - 2015"
      }
    ],
    skills: [
      { name: "Adobe Illustrator", level: 98 },
      { name: "Adobe Photoshop", level: 95 },
      { name: "İllüstrasyon", level: 90 },
      { name: "Tipografi", level: 85 },
      { name: "After Effects", level: 80 },
      { name: "UI/UX Tasarım", level: 75 }
    ],
    portfolio: [
      { title: "ABC Markası Rebrand", type: "Kurumsal Kimlik" },
      { title: "XYZ Uygulaması", type: "UI Tasarım" },
      { title: "123 Dergisi Kapakları", type: "İllüstrasyon" },
      { title: "Hayal Kahramanları", type: "Karakter Tasarımı" }
    ]
  },
  
  technical: {
    name: "Deniz Yıldırım",
    title: "Kıdemli Yazılım Mühendisi",
    contact: {
      email: "deniz.yildirim@email.com",
      phone: "+90 (542) 345 6789",
      location: "Ankara, Türkiye",
      github: "github.com/denizy",
      linkedin: "linkedin.com/in/denizyildirim"
    },
    summary: "8 yıllık deneyime sahip, ölçeklenebilir web uygulamaları ve mikroservis mimarileri konusunda uzmanlaşmış yazılım mühendisi. Agile metodolojiler ve DevOps pratikleri konusunda deneyimli.",
    experience: [
      {
        title: "Kıdemli Yazılım Mühendisi",
        company: "Teknoloji A.Ş.",
        date: "2020 - Günümüz",
        details: [
          "Mikroservis mimarisine geçişi yöneterek sistem yanıt süresini %60 azalttım",
          "CI/CD pipeline'ı kurarak deployment süresini %70 kısalttım",
          "Ekip içi eğitimler düzenleyerek bilgi paylaşımını artırdım"
        ]
      },
      {
        title: "Backend Geliştirici",
        company: "Yazılım Çözümleri Ltd.",
        date: "2017 - 2020",
        details: [
          "RESTful API'ler tasarlayıp geliştirdim",
          "Veritabanı optimizasyonu ile sorgu performansını %40 artırdım",
          "Bulut altyapısına geçişi yönettim"
        ]
      },
      {
        title: "Yazılım Geliştirici",
        company: "Web Teknolojileri A.Ş.",
        date: "2015 - 2017",
        details: [
          "E-ticaret platformunun geliştirilmesine katkıda bulundum",
          "Ödeme sistemi entegrasyonlarını tamamladım"
        ]
      }
    ],
    education: [
      {
        degree: "Bilgisayar Mühendisliği Yüksek Lisans",
        school: "ODTÜ",
        date: "2013 - 2015"
      },
      {
        degree: "Bilgisayar Mühendisliği Lisans",
        school: "Bilkent Üniversitesi",
        date: "2009 - 2013"
      }
    ],
    skills: [
      { name: "Java", level: 95 },
      { name: "Spring Boot", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 75 },
      { name: "AWS", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 90 },
      { name: "CI/CD", level: 85 }
    ],
    projects: [
      { name: "Mikro Servis Platformu", tech: "Java, Spring Boot, Docker" },
      { name: "Ölçeklenebilir API Gateway", tech: "Node.js, Redis, AWS" },
      { name: "Veri Analiz Platformu", tech: "Python, Kafka, Elasticsearch" }
    ]
  },
  
  modern: {
    name: "Elif Şahin",
    title: "Dijital Pazarlama Uzmanı",
    contact: {
      email: "elif.sahin@email.com",
      phone: "+90 (533) 678 9012",
      location: "İstanbul, Türkiye",
      linkedin: "linkedin.com/in/elifsahin",
      twitter: "@elif_digital"
    },
    summary: "Veri odaklı dijital pazarlama stratejileri geliştiren, 5 yıllık deneyime sahip pazarlama profesyoneli. SEO, SEM, sosyal medya ve içerik pazarlaması konularında kapsamlı bilgi ve deneyim sahibiyim.",
    experience: [
      {
        title: "Dijital Pazarlama Müdürü",
        company: "E-Ticaret Grubu",
        date: "2021 - Günümüz",
        details: [
          "Dijital pazarlama bütçesini optimize ederek ROI'yi %50 artırdım",
          "Yeni müşteri edinim maliyetini %30 düşürdüm",
          "8 kişilik pazarlama ekibini yöneterek dönüşüm oranlarını %25 artırdım"
        ]
      },
      {
        title: "SEO Uzmanı",
        company: "Dijital Pazarlama Ajansı",
        date: "2019 - 2021",
        details: [
          "15+ müşteri için SEO stratejileri geliştirdim",
          "Organik trafiği ortalama %60 artırdım",
          "İçerik stratejilerini yöneterek dönüşüm oranlarını iyileştirdim"
        ]
      },
      {
        title: "Pazarlama Asistanı",
        company: "Reklam Ajansı",
        date: "2018 - 2019",
        details: [
          "Sosyal medya kampanyalarında görev aldım",
          "Analitik raporlar hazırladım",
          "İçerik üretim süreçlerine destek verdim"
        ]
      }
    ],
    education: [
      {
        degree: "İşletme Yüksek Lisans (MBA)",
        school: "İstanbul Üniversitesi",
        date: "2016 - 2018"
      },
      {
        degree: "Halkla İlişkiler Lisans",
        school: "Marmara Üniversitesi",
        date: "2012 - 2016"
      }
    ],
    certifications: [
      "Google Ads Sertifikası",
      "Google Analytics Sertifikası",
      "Facebook Blueprint Sertifikası",
      "HubSpot Inbound Marketing Sertifikası",
      "SEMrush SEO Sertifikası"
    ],
    skills: [
      { name: "SEO", level: 95 },
      { name: "Google Ads", level: 90 },
      { name: "Sosyal Medya Pazarlama", level: 85 },
      { name: "İçerik Pazarlaması", level: 90 },
      { name: "Veri Analizi", level: 80 },
      { name: "E-posta Pazarlaması", level: 85 },
      { name: "Dönüşüm Optimizasyonu", level: 80 }
    ]
  },
  
  classic: {
    name: "Mustafa Öztürk",
    title: "Finans Müdürü",
    contact: {
      email: "mustafa.ozturk@email.com",
      phone: "+90 (535) 234 5678",
      location: "İstanbul, Türkiye"
    },
    summary: "15 yıllık finansal yönetim ve stratejik planlama tecrübesine sahip, uluslararası finans deneyimi olan bir finans profesyoneli. Maliyet optimizasyonu, bütçe yönetimi ve finansal raporlama konularında uzmanlaşmış.",
    experience: [
      {
        title: "Finans Müdürü",
        company: "Sanayi Holding A.Ş.",
        date: "2017 - Günümüz",
        details: [
          "Yıllık 250 milyon TL bütçe yönetimi",
          "Nakit akışı optimizasyonu ile finansal verimliliği %20 artırdım",
          "Maliyetleri %15 azaltarak karlılığı artırdım",
          "Uluslararası yatırımcılarla ilişkileri yönettim"
        ]
      },
      {
        title: "Finansal Kontrolör",
        company: "Üretim A.Ş.",
        date: "2012 - 2017",
        details: [
          "Aylık ve yıllık finansal raporlamaları hazırladım",
          "Bütçe planlama ve kontrol süreçlerini yönettim",
          "İç denetim ve risk yönetimini gerçekleştirdim"
        ]
      },
      {
        title: "Kıdemli Muhasebe Uzmanı",
        company: "Uluslararası Denetim Firması",
        date: "2008 - 2012",
        details: [
          "Çeşitli sektörlerde finansal denetim projeleri yürüttüm",
          "Uluslararası muhasebe standartlarına uyum süreçlerini yönettim"
        ]
      }
    ],
    education: [
      {
        degree: "İşletme Yüksek Lisans (MBA)",
        school: "Koç Üniversitesi",
        date: "2006 - 2008"
      },
      {
        degree: "İşletme Lisans",
        school: "Boğaziçi Üniversitesi",
        date: "2002 - 2006"
      }
    ],
    certifications: [
      "SMMM (Serbest Muhasebeci Mali Müşavir)",
      "CFA (Chartered Financial Analyst) Level 3",
      "SPK İleri Düzey Lisansı"
    ],
    skills: [
      "Finansal Analiz",
      "Bütçe Yönetimi",
      "Nakit Akışı Yönetimi",
      "Risk Yönetimi",
      "UFRS / TFRS",
      "Finansal Raporlama",
      "Kurumsal Finansman",
      "M&A Finansmanı"
    ],
    languages: [
      { name: "Türkçe", level: "Anadil" },
      { name: "İngilizce", level: "İleri Seviye" },
      { name: "Almanca", level: "Orta Seviye" }
    ]
  },
  
  // Yeni şablonlar için örnek veriler
  techstack: {
    name: "Burak Demir",
    title: "Full Stack Developer",
    summary: "7 yıllık deneyime sahip, modern web teknolojileri konusunda uzmanlaşmış yazılım geliştirici. Ölçeklenebilir ve performanslı uygulamalar geliştirme konusunda tutkulu.",
    contact: {
      email: "burak.demir@email.com",
      phone: "+90 (555) 123 4567",
      location: "İstanbul, Türkiye",
      github: "burakdemir",
      linkedin: "burakdemir"
    },
    experience: [
      {
        title: "Senior Full Stack Developer",
        company: "Tech Solutions A.Ş.",
        date: "2020 - Günümüz",
        details: [
          "Mikroservis mimarisinde React ve Node.js ile e-ticaret platformu geliştirdim",
          "CI/CD süreçlerini otomatize ederek deployment süresini %60 azalttım",
          "Performans optimizasyonu ile sayfa yüklenme süresini %40 iyileştirdim"
        ]
      },
      {
        title: "Frontend Developer",
        company: "Web Teknolojileri Ltd.",
        date: "2017 - 2020",
        details: [
          "React ve Redux ile SPA uygulamaları geliştirdim",
          "Responsive ve erişilebilir arayüzler tasarladım",
          "Jest ve React Testing Library ile test coverage'ını %80'in üzerine çıkardım"
        ]
      }
    ],
    education: [
      {
        degree: "Bilgisayar Mühendisliği",
        school: "İstanbul Teknik Üniversitesi",
        date: "2013 - 2017"
      }
    ],
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "React", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "GraphQL", level: 75 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 }
    ],
    projects: [
      {
        name: "E-Commerce Platform",
        description: "Mikroservis mimarisinde geliştirilmiş, ölçeklenebilir e-ticaret platformu",
        link: "https://github.com/burakdemir/ecommerce-platform",
        tech: "React, Node.js, GraphQL, MongoDB"
      },
      {
        name: "Task Management App",
        description: "Takımlar için gerçek zamanlı görev yönetim uygulaması",
        link: "https://github.com/burakdemir/task-manager",
        tech: "React, Redux, Firebase, Material UI"
      }
    ]
  },
  
  minimalpure: {
    name: "Ayşe Yılmaz",
    title: "İçerik Stratejisti",
    summary: "Markaların hikayelerini etkili bir şekilde anlatmalarına yardımcı olan, SEO odaklı içerik stratejileri geliştiren içerik uzmanı.",
    contact: {
      email: "ayse.yilmaz@email.com",
      phone: "+90 (532) 345 6789",
      location: "İzmir, Türkiye",
      linkedin: "ayseyilmaz",
      website: "ayseyilmaz.com"
    },
    experience: [
      {
        title: "Kıdemli İçerik Stratejisti",
        company: "Dijital Pazarlama Ajansı",
        date: "2019 - Günümüz",
        details: [
          "10+ marka için içerik stratejileri geliştirdim ve uyguladım",
          "İçerik ekibine liderlik ederek organik trafiği %70 artırdım",
          "SEO odaklı içerik yaklaşımı ile dönüşüm oranlarını %25 yükselttim"
        ]
      },
      {
        title: "İçerik Editörü",
        company: "Online Medya Platformu",
        date: "2016 - 2019",
        details: [
          "Günlük içerik üretim süreçlerini yönettim",
          "Editoryal takvimi planladım ve içerik kalitesini artırdım",
          "Sosyal medya stratejisi ile takipçi sayısını 3 katına çıkardım"
        ]
      }
    ],
    education: [
      {
        degree: "İletişim Bilimleri Yüksek Lisans",
        school: "Ege Üniversitesi",
        date: "2014 - 2016"
      },
      {
        degree: "Halkla İlişkiler ve Tanıtım Lisans",
        school: "Dokuz Eylül Üniversitesi",
        date: "2010 - 2014"
      }
    ],
    skills: [
      { name: "İçerik Stratejisi" },
      { name: "SEO Yazarlığı" },
      { name: "Marka Sesi Geliştirme" },
      { name: "İçerik Yönetimi" },
      { name: "Sosyal Medya Stratejisi" },
      { name: "Kopya Yazarlığı" },
      { name: "Blog Yazarlığı" },
      { name: "Editörlük" }
    ]
  },
  
  corporateblue: {
    name: "Ahmet Kaya",
    title: "Satış ve Pazarlama Direktörü",
    photo: "/images/profile-photos/ahmetkaya.png",
    summary: "15 yıllık deneyime sahip, B2B satış ve pazarlama stratejileri konusunda uzmanlaşmış yönetici. Uluslararası pazarlarda büyüme ve yeni pazar penetrasyonu konularında kanıtlanmış başarılara sahibim.",
    contact: {
      email: "ahmet.kaya@email.com",
      phone: "+90 (533) 456 7890",
      location: "İstanbul, Türkiye",
      linkedin: "ahmetkaya",
      website: "ahmetkaya.com"
    },
    experience: [
      {
        title: "Satış ve Pazarlama Direktörü",
        company: "Global Teknoloji A.Ş.",
        date: "2018 - Günümüz",
        details: [
          "Yıllık satış hedeflerini %30 aşarak şirket büyümesine katkı sağladım",
          "5 yeni uluslararası pazara giriş stratejisini başarıyla uyguladım",
          "25 kişilik satış ve pazarlama ekibini yönettim",
          "Müşteri memnuniyetini %40 artırarak müşteri sadakatini güçlendirdim"
        ]
      },
      {
        title: "Bölge Satış Müdürü",
        company: "Endüstriyel Çözümler Ltd.",
        date: "2013 - 2018",
        details: [
          "Orta Doğu ve Kuzey Afrika pazarlarında satışları %50 artırdım",
          "Kilit müşteri ilişkilerini geliştirerek büyük ölçekli anlaşmalar sağladım",
          "Yeni bayi ağı kurarak pazar penetrasyonunu %35 artırdım"
        ]
      }
    ],
    education: [
      {
        degree: "İşletme Yüksek Lisans (MBA)",
        school: "Boğaziçi Üniversitesi",
        date: "2010 - 2012"
      },
      {
        degree: "İşletme Lisans",
        school: "İstanbul Üniversitesi",
        date: "2006 - 2010"
      }
    ],
    skills: [
      { name: "B2B Satış", level: 95 },
      { name: "Stratejik Pazarlama", level: 90 },
      { name: "Müzakere", level: 85 },
      { name: "Ekip Yönetimi", level: 90 },
      { name: "CRM Sistemleri", level: 80 },
      { name: "Pazar Analizi", level: 85 },
      { name: "Uluslararası Ticaret", level: 80 }
    ]
  },
  
  creativesplit: {
    name: "Zehra Demir",
    title: "Sanat Yönetmeni",
    photo: "/images/profile-photos/zehrademir.png",
    summary: "Reklam ve dijital medya alanında 8 yıllık deneyime sahip yaratıcı sanat yönetmeni. Ödüllü kampanyalar ve etkileyici görsel hikayeler yaratma konusunda uzmanlaşmış.",
    contact: {
      email: "zehra.demir@email.com",
      phone: "+90 (535) 567 8901",
      location: "İstanbul, Türkiye",
      website: "zehrademir.com",
      instagram: "@zehrademir.design",
      behance: "behance.net/zehrademir"
    },
    experience: [
      {
        title: "Kıdemli Sanat Yönetmeni",
        company: "Yaratıcı Ajans",
        date: "2019 - Günümüz",
        details: [
          "Ulusal ve uluslararası markalar için ödüllü kampanyalar tasarladım",
          "Ajansın görsel dilini yeniden tanımlayarak marka kimliğini güçlendirdim",
          "Genç tasarımcılardan oluşan ekibe mentorluk yaparak yaratıcı süreçleri yönettim"
        ]
      },
      {
        title: "Sanat Yönetmeni",
        company: "Reklam Ajansı",
        date: "2016 - 2019",
        details: [
          "Büyük markalar için print, dijital ve sosyal medya kampanyaları tasarladım",
          "Marka kimliklerini güçlendiren görsel stratejiler geliştirdim",
          "Müşteri sunumları ve pitch'lerde yaratıcı konseptleri başarıyla anlattım"
        ]
      }
    ],
    education: [
      {
        degree: "Görsel İletişim Tasarımı",
        school: "Mimar Sinan Güzel Sanatlar Üniversitesi",
        date: "2012 - 2016"
      }
    ],
    skills: [
      { name: "Adobe Creative Suite" },
      { name: "Sanat Yönetimi" },
      { name: "Marka Yönetimi" },
      { name: "Tipografi" },
      { name: "Kullanıcı Arayüzü Tasarımı" },
      { name: "Hareket Grafikleri" },
      { name: "Fotoğrafçılık" }
    ],
    achievements: [
      "Kristal Elma Ödülü - En İyi Dijital Kampanya (2022)",
      "Felis Ödülleri - Mükemmellik Ödülü (2021)",
      "Cannes Lions - Shortlist (2020)",
      "Behance Featured Artist (2019)"
    ]
  },
  
  startuphustler: {
    name: "Emre Yılmaz",
    title: "Girişimci & Ürün Yöneticisi",
    photo: "/images/profile-photos/emreyılmaz.png",
    summary: "Teknoloji odaklı girişimlerde 6 yıllık deneyime sahip, kullanıcı odaklı ürünler geliştiren girişimci. İki başarılı startup kurdum ve bir exit gerçekleştirdim. Ürün yönetimi, growth hacking ve startup ekosistemleri konularında uzmanlığa sahibim.",
    contact: {
      email: "emre.yilmaz@email.com",
      phone: "+90 (537) 890 1234",
      linkedin: "emreyilmaz",
      twitter: "@emreyilmaz"
    },
    experience: [
      {
        title: "Kurucu & CEO",
        company: "TechSmart",
        date: "2020 - Günümüz",
        details: [
          "SaaS tabanlı B2B çözümü geliştirerek 18 ayda 100+ kurumsal müşteriye ulaştım",
          "1.5M$ tohum yatırımı aldım ve ekibi 15 kişiye büyüttüm",
          "Aylık tekrarlayan geliri (MRR) %25 büyüme oranıyla artırdım"
        ]
      },
      {
        title: "Ürün Yöneticisi",
        company: "MobilTech",
        date: "2018 - 2020",
        details: [
          "Kullanıcı sayısı 2M+'ya ulaşan mobil uygulamanın ürün stratejisini yönettim",
          "Kullanıcı aktivasyonunu %40 artıran yeni özellikleri tasarladım ve uyguladım",
          "Veri odaklı karar verme süreçleri ile ürün geliştirme döngüsünü hızlandırdım"
        ]
      }
    ],
    education: [
      {
        degree: "Bilgisayar Mühendisliği",
        school: "Orta Doğu Teknik Üniversitesi",
        date: "2014 - 2018"
      }
    ],
    skills: [
      { name: "Ürün Yönetimi", level: 95 },
      { name: "Growth Hacking", level: 90 },
      { name: "Kullanıcı Deneyimi", level: 85 },
      { name: "Veri Analizi", level: 80 },
      { name: "Agile Metodolojiler", level: 90 },
      { name: "Pitch Deck Hazırlama", level: 85 }
    ],
    projects: [
      {
        name: "TechSmart Platform",
        description: "Şirketler için AI tabanlı müşteri analiz platformu",
        tech: "React, Node.js, TensorFlow, AWS"
      },
      {
        name: "MobileAssist",
        description: "5M+ indirmeye ulaşan kişisel asistan uygulaması (2019'da exit)",
        tech: "React Native, Firebase, Python"
      }
    ],
    references: [
      {
        name: "Ayşe Kara",
        title: "Yatırımcı, ABC Ventures",
        contact: "ayse@abcventures.com",
        quote: "Emre, vizyoner bir girişimci ve mükemmel bir ürün stratejisti. TechSmart'a yatırım yapmak portföyümüzdeki en iyi kararlardan biriydi."
      },
      {
        name: "Mehmet Öz",
        title: "CTO, MobilTech",
        contact: "mehmet@mobiltech.com",
        quote: "Emre'nin ürün odaklı yaklaşımı ve analitik düşünce yapısı, şirketimizin büyümesinde kritik rol oynadı."
      }
    ]
  },
  
  // Yeni şablonlar için örnek veriler
  legal: {
    name: "Av. Mehmet Yılmaz",
    title: "Avukat / Hukuk Danışmanı",
    barInfo: {
      barName: "İstanbul Barosu",
      registrationNumber: "12345",
      registrationDate: "2015"
    },
    contact: {
      email: "mehmet.yilmaz@hukuk.com",
      phone: "+90 (555) 123 4567",
      location: "İstanbul, Türkiye",
      website: "mehmetyilmaz-hukuk.com"
    },
    summary: "10 yıllık deneyime sahip, ticaret hukuku ve şirketler hukuku alanlarında uzmanlaşmış hukuk danışmanı. Ulusal ve uluslararası şirketlere hukuki danışmanlık hizmeti veriyorum.",
    experience: [
      {
        title: "Kıdemli Avukat",
        company: "Yılmaz & Ortakları Hukuk Bürosu",
        date: "2018 - Günümüz",
        details: [
          "Çeşitli sektörlerde faaliyet gösteren 20+ şirkete hukuki danışmanlık hizmeti",
          "Şirket birleşme ve satın alma süreçlerinde hukuki due diligence çalışmaları",
          "Ticari sözleşmelerin hazırlanması ve müzakere edilmesi"
        ]
      },
      {
        title: "Avukat",
        company: "ABC Hukuk Bürosu",
        date: "2015 - 2018",
        details: [
          "Ticaret hukuku ve şirketler hukuku alanlarında danışmanlık",
          "Dava takibi ve müvekkil temsili",
          "Hukuki görüş ve raporların hazırlanması"
        ]
      }
    ],
    education: [
      {
        degree: "Hukuk Yüksek Lisans (LL.M.)",
        school: "İstanbul Üniversitesi",
        date: "2013 - 2015"
      },
      {
        degree: "Hukuk Fakültesi",
        school: "Ankara Üniversitesi",
        date: "2009 - 2013"
      }
    ],
    skills: [
      { name: "Ticaret Hukuku" },
      { name: "Şirketler Hukuku" },
      { name: "Sözleşme Hukuku" },
      { name: "Fikri Mülkiyet Hukuku" },
      { name: "Müzakere Becerileri" },
      { name: "Hukuki Analiz" }
    ],
    languages: [
      { name: "Türkçe", level: "Anadil" },
      { name: "İngilizce", level: "İleri Seviye" },
      { name: "Almanca", level: "Orta Seviye" }
    ]
  },
  
  nurse: {
    name: "Ayşe Demir",
    title: "Hemşire / Sağlık Teknisyeni",
    photo: "",
    certifications: [
      {
        name: "Yoğun Bakım Hemşireliği Sertifikası",
        issuer: "Sağlık Bakanlığı",
        date: "2020"
      },
      {
        name: "İleri Kardiyak Yaşam Desteği Sertifikası",
        issuer: "Türk Kardiyoloji Derneği",
        date: "2019"
      },
      {
        name: "Diyabet Hemşireliği Sertifikası",
        issuer: "Türk Diyabet Hemşireleri Derneği",
        date: "2018"
      }
    ],
    contact: {
      email: "ayse.demir@email.com",
      phone: "+90 (532) 456 7890",
      location: "İzmir, Türkiye"
    },
    summary: "7 yıllık deneyime sahip, yoğun bakım ve acil servis alanlarında uzmanlaşmış hemşire. Hasta bakımı, klinik değerlendirme ve ekip çalışması konularında güçlü becerilere sahibim.",
    experience: [
      {
        title: "Yoğun Bakım Hemşiresi",
        company: "Özel Sağlık Hastanesi",
        date: "2019 - Günümüz",
        details: [
          "Kritik durumdaki hastaların kapsamlı bakımını sağlama",
          "Hasta değerlendirmesi ve tedavi planlarının uygulanması",
          "Aile üyeleriyle iletişim ve eğitim",
          "Yeni hemşirelere mentorluk yapma"
        ]
      },
      {
        title: "Acil Servis Hemşiresi",
        company: "Devlet Hastanesi",
        date: "2016 - 2019",
        details: [
          "Acil vakaların triyajı ve ilk müdahalesi",
          "İlaç uygulamaları ve hasta takibi",
          "Kritik durumdaki hastaların stabilizasyonu"
        ]
      }
    ],
    education: [
      {
        degree: "Hemşirelik Yüksek Lisans",
        school: "Ege Üniversitesi",
        date: "2017 - 2019"
      },
      {
        degree: "Hemşirelik Lisans",
        school: "Dokuz Eylül Üniversitesi",
        date: "2012 - 2016"
      }
    ],
    languages: [
      { name: "Türkçe", level: "Anadil" },
      { name: "İngilizce", level: "İyi" }
    ],
    quickFacts: {
      bloodDraw: true,
      patientCare: true,
      emergencyResponse: true
    }
  },
  
  architect: {
    name: "Can Yıldız",
    title: "Mimar / Şehir Plancısı",
    photo: "",
    contact: {
      email: "can.yildiz@email.com",
      phone: "+90 (535) 789 0123",
      location: "İstanbul, Türkiye",
      website: "canyildiz-architecture.com"
    },
    summary: "8 yıllık deneyime sahip, sürdürülebilir mimari ve kentsel dönüşüm projelerinde uzmanlaşmış mimar. Yenilikçi tasarım yaklaşımları ve çevreye duyarlı çözümler üretme konusunda tutkulu.",
    projects: [
      {
        title: "Yeşil Vadi Konut Projesi",
        description: "LEED sertifikalı, sürdürülebilir 120 konutluk yerleşim",
        image: "/images/projects/yesilvadi.jpg"
      },
      {
        title: "Kültür Merkezi Renovasyonu",
        description: "Tarihi binanın modern kültür merkezine dönüşümü",
        image: "/images/projects/kulturmerkezi.jpg"
      },
      {
        title: "Sahil Şeridi Kentsel Tasarımı",
        description: "5 km'lik sahil şeridinin yeniden düzenlenmesi",
        image: "/images/projects/sahilseridi.jpg"
      },
      {
        title: "Akıllı Ofis Kompleksi",
        description: "Enerji verimli, teknoloji odaklı ofis binası",
        image: "/images/projects/akillibina.jpg"
      }
    ],
    experience: [
      {
        title: "Kıdemli Mimar",
        company: "XYZ Mimarlık",
        date: "2019 - Günümüz",
        description: "Sürdürülebilir konut ve ticari projeler tasarlama, proje yönetimi, müşteri ilişkileri"
      },
      {
        title: "Mimar",
        company: "ABC Mimarlık ve Şehircilik",
        date: "2015 - 2019",
        description: "Kentsel dönüşüm projeleri, kamu binaları tasarımı, 3D modelleme ve görselleştirme"
      }
    ],
    education: [
      {
        degree: "Mimarlık Yüksek Lisans",
        school: "İstanbul Teknik Üniversitesi",
        date: "2013 - 2015"
      },
      {
        degree: "Mimarlık Lisans",
        school: "Yıldız Teknik Üniversitesi",
        date: "2009 - 2013"
      }
    ],
    tools: [
      { name: "AutoCAD", level: 95 },
      { name: "Revit", level: 90 },
      { name: "SketchUp", level: 85 },
      { name: "3ds Max", level: 80 },
      { name: "Adobe Creative Suite", level: 75 },
      { name: "Rhino", level: 70 }
    ]
  },
  
  academic: {
    name: "Prof. Dr. Ahmet Kaya",
    title: "Akademisyen / Araştırmacı",
    researchInterests: [
      "Yapay Zeka Etiği",
      "İnsan-Bilgisayar Etkileşimi",
      "Bilişsel Psikoloji",
      "Eğitim Teknolojileri"
    ],
    contact: {
      email: "ahmet.kaya@universite.edu.tr",
      phone: "+90 (532) 345 6789",
      location: "Ankara, Türkiye"
    },
    publications: [
      {
        authors: "Kaya, A., Yılmaz, B., & Johnson, M.",
        year: "2022",
        title: "Yapay zeka sistemlerinin etik karar verme süreçlerinde insan faktörü",
        journal: "Bilişim Teknolojileri Dergisi",
        volume: "15",
        issue: "2",
        pages: "112-128",
        doi: "10.1234/btd.2022.15.2.112"
      },
      {
        authors: "Yılmaz, B., Kaya, A., & Smith, J.",
        year: "2021",
        title: "Uzaktan eğitimde öğrenci katılımını artırmak için yapay zeka destekli sistemler",
        journal: "Eğitim Teknolojileri Araştırmaları",
        volume: "12",
        issue: "3",
        pages: "78-95",
        doi: "10.5678/etar.2021.12.3.78"
      },
      {
        authors: "Kaya, A.",
        year: "2020",
        title: "Bilişsel psikoloji perspektifinden insan-bilgisayar etkileşimi",
        journal: "Psikoloji Çalışmaları",
        volume: "8",
        issue: "1",
        pages: "45-62",
        doi: "10.9876/pc.2020.8.1.45"
      }
    ],
    teaching: [
      {
        title: "Yapay Zeka ve Etik",
        institution: "Ankara Üniversitesi, Bilgisayar Mühendisliği",
        date: "2020 - Günümüz",
        description: "Lisansüstü düzeyde yapay zeka sistemlerinin etik boyutları"
      },
      {
        title: "İnsan-Bilgisayar Etkileşimi",
        institution: "Ankara Üniversitesi, Bilgisayar Mühendisliği",
        date: "2018 - Günümüz",
        description: "Lisans düzeyinde kullanıcı arayüzü tasarımı ve değerlendirmesi"
      },
      {
        title: "Bilişsel Psikoloji",
        institution: "ODTÜ, Psikoloji Bölümü (Misafir Öğretim Üyesi)",
        date: "2019 - 2021",
        description: "Lisans düzeyinde bilişsel süreçler ve bilgi işleme"
      }
    ],
    education: [
      {
        degree: "Doktora, Bilgisayar Bilimleri",
        institution: "Stanford Üniversitesi",
        date: "2010 - 2015",
        thesis: "Yapay Zeka Sistemlerinde Etik Karar Verme Modelleri",
        advisor: "Prof. Dr. Jennifer Smith"
      },
      {
        degree: "Yüksek Lisans, Bilişsel Bilimler",
        institution: "ODTÜ",
        date: "2008 - 2010",
        thesis: "İnsan-Bilgisayar Etkileşiminde Bilişsel Süreçler"
      },
      {
        degree: "Lisans, Bilgisayar Mühendisliği",
        institution: "Boğaziçi Üniversitesi",
        date: "2004 - 2008"
      }
    ],
    certifications: [
      {
        name: "Yüksek Öğretim Pedagojisi Sertifikası",
        issuer: "Eğitim Bilimleri Akademisi",
        date: "2016"
      },
      {
        name: "İleri Veri Analizi Sertifikası",
        issuer: "Veri Bilimi Enstitüsü",
        date: "2018"
      }
    ]
  },
  
  photographer: {
    name: "Zeynep Aydın",
    title: "Fotoğrafçı / İçerik Üreticisi",
    photo: "",
    bio: "8 yıllık deneyime sahip, doğa ve portre fotoğrafçılığında uzmanlaşmış görsel hikaye anlatıcısı. Ulusal ve uluslararası dergilerde yayınlanan çalışmalarım ve ödüllü fotoğraflarım bulunmaktadır. Fotoğrafın gücüyle insanları ve doğayı en doğal halleriyle belgelemeye çalışıyorum.",
    contact: {
      email: "zeynep@zeynepaydinfotograf.com",
      phone: "+90 (536) 789 0123",
      location: "İstanbul, Türkiye"
    },
    social: [
      {
        platform: "Instagram",
        username: "@zeynep.fotograf",
        url: "https://instagram.com/zeynep.fotograf"
      },
      {
        platform: "Behance",
        username: "zeynepaydın",
        url: "https://behance.net/zeynepaydin"
      },
      {
        platform: "Youtube",
        username: "Zeynep Aydın Fotoğrafçılık",
        url: "https://youtube.com/c/ZeynepAydinFotograf"
      }
    ],
    gear: [
      "Canon EOS R5",
      "Canon 24-70mm f/2.8L",
      "Canon 70-200mm f/2.8L IS",
      "Canon 50mm f/1.2L",
      "DJI Mavic 3 Pro",
      "Profoto B10 Plus"
    ],
    portfolio: [
      {
        title: "Kapadokya'nın Renkleri",
        image: "/images/portfolio/kapadokya.jpg"
      },
      {
        title: "Portreler Serisi",
        image: "/images/portfolio/portreler.jpg"
      },
      {
        title: "Doğa Manzaraları",
        image: "/images/portfolio/dogamanzaralari.jpg"
      },
      {
        title: "Sokak Hikayeleri",
        image: "/images/portfolio/sokakhikayeleri.jpg"
      },
      {
        title: "Mimari Detaylar",
        image: "/images/portfolio/mimari.jpg"
      },
      {
        title: "Makro Dünya",
        image: "/images/portfolio/makro.jpg"
      }
    ],
    experience: [
      {
        title: "Serbest Fotoğrafçı",
        company: "Freelance",
        date: "2018 - Günümüz",
        description: "Çeşitli dergiler, markalar ve özel müşteriler için fotoğraf projeleri"
      },
      {
        title: "Fotoğraf Editörü",
        company: "Doğa ve Gezi Dergisi",
        date: "2015 - 2018",
        description: "Dergi için görsel içerik üretimi, fotoğraf seçimi ve düzenleme"
      }
    ],
    education: [
      {
        degree: "Fotoğrafçılık ve Video",
        school: "Mimar Sinan Güzel Sanatlar Üniversitesi",
        date: "2011 - 2015"
      },
      {
        degree: "Dijital Sanatlar Sertifika Programı",
        school: "İstanbul Fotoğraf Akademisi",
        date: "2013"
      }
    ]
  },

  // Finans Müdürü şablonu için örnek veri
  finance: {
    name: "Ayşe Demir",
    title: "Finans Müdürü",
    contact: {
      email: "ayse.demir@email.com",
      phone: "+90 (555) 987 6543",
      location: "İstanbul, Türkiye"
    },
    summary: "10+ yıllık finans ve muhasebe deneyimine sahip, stratejik finansal planlama ve bütçe yönetimi konusunda uzmanlaşmış finans profesyoneli. Maliyet azaltma ve verimlilik artırma stratejileri geliştirme konusunda başarılı bir geçmişe sahibim.",
    experience: [
      {
        title: "Finans Müdürü",
        company: "Global Yatırım A.Ş.",
        date: "2018 - Günümüz",
        details: [
          "Yıllık 50M TL bütçe yönetimi ve finansal raporlama süreçlerini yönettim",
          "Maliyet optimizasyonu stratejileri ile operasyonel giderleri %15 azalttım",
          "Nakit akışı yönetimini iyileştirerek likiditeyi %20 artırdım",
          "Finansal risk yönetimi stratejileri geliştirerek döviz riskini %30 azalttım"
        ]
      },
      {
        title: "Kıdemli Finans Uzmanı",
        company: "Merkez Holding",
        date: "2014 - 2018",
        details: [
          "Aylık ve yıllık finansal raporları hazırladım ve analiz ettim",
          "Bütçe planlama ve tahmin süreçlerini yönettim",
          "Denetim süreçlerinde şirketi başarıyla temsil ettim"
        ]
      }
    ],
    education: [
      {
        degree: "İşletme Yüksek Lisans (MBA), Finans Uzmanlığı",
        school: "Boğaziçi Üniversitesi",
        date: "2012 - 2014"
      },
      {
        degree: "İşletme Lisans",
        school: "İstanbul Üniversitesi",
        date: "2008 - 2012"
      }
    ],
    certifications: [
      "SMMM (Serbest Muhasebeci Mali Müşavir), 2016",
      "CFA (Chartered Financial Analyst) Level II, 2018",
      "SPK İleri Düzey Lisansı, 2015"
    ],
    skills: [
      "Finansal Analiz",
      "Bütçe Yönetimi",
      "Nakit Akışı Yönetimi",
      "Risk Yönetimi",
      "Finansal Raporlama",
      "Maliyet Kontrolü",
      "Stratejik Planlama",
      "ERP Sistemleri (SAP)"
    ]
  },

  // UI/UX Tasarımcı şablonu için örnek veri
  uiux: {
    name: "Cem Yılmaz",
    title: "UI/UX Tasarımcı",
    photo: "",
    contact: {
      email: "cem.yilmaz@email.com",
      phone: "+90 (532) 123 4567",
      location: "İstanbul, Türkiye",
      website: "cemyilmaz.design"
    },
    summary: "6 yıllık deneyime sahip, kullanıcı odaklı dijital deneyimler tasarlayan UI/UX tasarımcısı. Mobil ve web uygulamaları için kullanılabilir, erişilebilir ve estetik arayüzler oluşturma konusunda uzmanlaşmış.",
    experience: [
      {
        title: "Kıdemli UI/UX Tasarımcı",
        company: "Dijital Çözümler A.Ş.",
        date: "2020 - Günümüz",
        description: "Fintech ve e-ticaret sektörlerindeki müşteriler için kullanıcı deneyimi tasarımı. Kullanıcı araştırması, wireframe oluşturma, prototipleme ve kullanılabilirlik testleri yürütme."
      },
      {
        title: "UI Tasarımcı",
        company: "Kreatif Ajans",
        date: "2018 - 2020",
        description: "Çeşitli web ve mobil uygulamalar için kullanıcı arayüzleri tasarladım. Marka kimliğine uygun görsel dil oluşturdum ve design system geliştirdim."
      }
    ],
    projects: [
      {
        title: "Finans Uygulaması",
        description: "Kişisel finans yönetimi için mobil uygulama tasarımı",
        tools: ["Figma", "Principle", "Miro"]
      },
      {
        title: "E-ticaret Platformu",
        description: "Büyük ölçekli e-ticaret platformunun yeniden tasarımı",
        tools: ["Figma", "Adobe XD", "InVision"]
      }
    ],
    education: [
      {
        degree: "Grafik Tasarım Yüksek Lisans",
        school: "Mimar Sinan Güzel Sanatlar Üniversitesi",
        date: "2016 - 2018"
      },
      {
        degree: "Görsel İletişim Tasarımı Lisans",
        school: "Bilgi Üniversitesi",
        date: "2012 - 2016"
      }
    ],
    skills: [
      {
        name: "Figma",
        icon: "fa-figma",
        level: 95
      },
      {
        name: "Adobe XD",
        icon: "fa-adobe",
        level: 90
      },
      {
        name: "Sketch",
        icon: "fa-sketch",
        level: 85
      },
      {
        name: "UI Design",
        level: 95
      },
      {
        name: "UX Research",
        level: 85
      },
      {
        name: "Prototyping",
        level: 90
      }
    ]
  },

  // Doktor şablonu için örnek veri
  doctor: {
    name: "Dr. Mehmet Yıldız",
    title: "Dahiliye Uzmanı",
    photo: "",
    contact: {
      email: "dr.mehmet@email.com",
      phone: "+90 (555) 234 5678",
      location: "Ankara, Türkiye",
      website: ""
    },
    summary: "10 yıllık klinik deneyime sahip, hasta odaklı yaklaşımı benimseyen dahiliye uzmanı. Kronik hastalık yönetimi ve preventif tıp konularında uzmanlaşmış.",
    clinicalExperience: [
      {
        title: "Dahiliye Uzmanı",
        institution: "Özel Sağlık Hastanesi",
        date: "2018 - Günümüz",
        description: "Poliklinik hizmetleri, yatan hasta takibi, konsültasyonlar ve acil servis nöbetleri."
      },
      {
        title: "Dahiliye Uzmanı",
        institution: "Devlet Hastanesi",
        date: "2015 - 2018",
        description: "Genel dahiliye poliklinik hizmetleri ve yoğun bakım ünitesi sorumluluğu."
      }
    ],
    education: [
      {
        degree: "Dahiliye Uzmanlık",
        school: "Ankara Üniversitesi Tıp Fakültesi",
        date: "2010 - 2015"
      },
      {
        degree: "Tıp Fakültesi",
        school: "Hacettepe Üniversitesi",
        date: "2004 - 2010"
      }
    ],
    certifications: [
      {
        name: "İleri Kardiyak Yaşam Desteği Sertifikası",
        issuer: "Türk Kardiyoloji Derneği",
        date: "2019"
      },
      {
        name: "Diyabet Yönetimi Sertifikası",
        issuer: "Endokrinoloji ve Metabolizma Derneği",
        date: "2017"
      }
    ],
    languages: [
      {
        name: "Türkçe",
        level: "Anadil"
      },
      {
        name: "İngilizce",
        level: "İleri Seviye"
      },
      {
        name: "Almanca",
        level: "Orta Seviye"
      }
    ]
  },

  // Öğretmen şablonu için örnek veri
  teacher: {
    name: "Aylin Kaya",
    title: "Matematik Öğretmeni",
    photo: "",
    contact: {
      email: "aylin.kaya@email.com",
      phone: "+90 (533) 456 7890",
      location: "İzmir, Türkiye"
    },
    summary: "8 yıllık deneyime sahip, öğrenci merkezli eğitim yaklaşımını benimseyen matematik öğretmeni. Farklı öğrenme stillerine sahip öğrencilere uygun yöntemler geliştirme ve teknoloji destekli eğitim konularında uzmanlaşmış.",
    education: [
      {
        degree: "Eğitim Yönetimi Yüksek Lisans",
        school: "Dokuz Eylül Üniversitesi",
        date: "2016 - 2018",
        description: "Teknoloji destekli matematik eğitimi üzerine tez çalışması."
      },
      {
        degree: "Matematik Öğretmenliği Lisans",
        school: "Ege Üniversitesi",
        date: "2011 - 2015"
      }
    ],
    teachingExperience: [
      {
        title: "Matematik Öğretmeni",
        school: "Atatürk Anadolu Lisesi",
        date: "2018 - Günümüz",
        subjects: "Matematik, Geometri",
        description: "9. ve 10. sınıflara matematik ve geometri dersleri. Matematik kulübü danışmanlığı ve TÜBİTAK proje rehberliği."
      },
      {
        title: "Matematik Öğretmeni",
        school: "Özel Bilge Koleji",
        date: "2015 - 2018",
        subjects: "Matematik, Geometri",
        description: "Ortaokul ve lise seviyesinde matematik dersleri. Sınav hazırlık programı koordinatörlüğü."
      }
    ],
    certifications: [
      {
        name: "Eğitimde Teknoloji Kullanımı Sertifikası",
        issuer: "Milli Eğitim Bakanlığı",
        date: "2020"
      },
      {
        name: "Proje Tabanlı Öğrenme Eğitimi",
        issuer: "Eğitim Akademisi",
        date: "2019"
      }
    ],
    languages: [
      {
        name: "Türkçe",
        level: 100,
        levelText: "Anadil"
      },
      {
        name: "İngilizce",
        level: 85,
        levelText: "İleri Seviye"
      }
    ]
  },

  // Depo ve Lojistik şablonu için örnek veri
  warehouse: {
    name: "Ali Yılmaz",
    title: "Depo ve Lojistik Sorumlusu",
    contact: {
      email: "ali.yilmaz@email.com",
      phone: "+90 (544) 567 8901",
      location: "Kocaeli, Türkiye"
    },
    summary: "7 yıllık depo ve lojistik deneyimine sahip, stok yönetimi ve sevkiyat süreçleri konusunda uzmanlaşmış profesyonel. Forklift operatörlüğü ve depo yönetim sistemleri konusunda sertifikalı.",
    warehouseExperience: [
      {
        title: "Depo Şefi",
        company: "Lojistik A.Ş.",
        date: "2019 - Günümüz",
        responsibilities: [
          "15 kişilik depo ekibinin yönetimi ve koordinasyonu",
          "Günlük 500+ sipariş sevkiyat süreçlerinin planlanması",
          "Stok sayım ve envanter yönetimi süreçlerinin iyileştirilmesi",
          "Depo düzeni ve iş güvenliği standartlarının sağlanması"
        ]
      },
      {
        title: "Depo Operasyon Sorumlusu",
        company: "Tedarik Zinciri Ltd.",
        date: "2016 - 2019",
        responsibilities: [
          "Mal kabul ve sevkiyat süreçlerinin yönetimi",
          "Stok yerleşim optimizasyonu ile alan kullanımını %25 artırma",
          "Depo yönetim sistemi implementasyonuna katkı sağlama"
        ]
      }
    ],
    certifications: [
      {
        name: "Forklift Operatörlük Sertifikası",
        date: "2015"
      },
      {
        name: "İş Güvenliği Uzmanlık Sertifikası (C Sınıfı)",
        date: "2018"
      },
      {
        name: "Depo Yönetim Sistemleri Eğitimi",
        date: "2017"
      }
    ],
    forkliftLicense: {
      hasLicense: true,
      licenseType: "Forklift Operatörlük Belgesi",
      issueDate: "2015",
      expiryDate: "2025"
    },
    education: [
      {
        degree: "Lojistik Önlisans",
        school: "Anadolu Üniversitesi",
        date: "2013 - 2015"
      },
      {
        degree: "Lise",
        school: "Teknik ve Endüstri Meslek Lisesi",
        date: "2009 - 2013"
      }
    ]
  },

  // Videograf şablonu için örnek veri
  videographer: {
    name: "Selin Akar",
    title: "Videograf / Hareket Tasarımcısı",
    photo: "",
    contact: {
      email: "selin.akar@email.com",
      phone: "+90 (535) 678 9012",
      location: "İstanbul, Türkiye",
      website: "selinakar.com"
    },
    summary: "5 yıllık deneyime sahip, yaratıcı görsel hikaye anlatımı konusunda tutkulu videograf ve hareket tasarımcısı. Reklam, belgesel ve kurumsal video projeleri üzerinde çalışma deneyimi. After Effects ve Premiere Pro konusunda uzman.",
    experience: [
      {
        title: "Kıdemli Videograf",
        company: "Dijital Medya Ajansı",
        date: "2020 - Günümüz",
        description: "Kurumsal müşteriler için video içerik üretimi, hareket grafikleri tasarımı ve post-prodüksiyon süreçlerinin yönetimi.",
        projects: "Otomotiv, bankacılık ve teknoloji sektörlerinde 20+ reklam kampanyası"
      },
      {
        title: "Hareket Tasarımcısı",
        company: "Görsel Efekt Stüdyosu",
        date: "2018 - 2020",
        description: "TV reklamları ve dijital platformlar için hareket grafikleri ve görsel efekt tasarımı.",
        projects: "3 ödüllü reklam kampanyası, 2 TV dizisi için jenerik tasarımı"
      }
    ],
    education: [
      {
        degree: "Görsel İletişim Tasarımı Lisans",
        school: "Bahçeşehir Üniversitesi",
        date: "2014 - 2018"
      }
    ],
    skills: [
      {
        name: "Video Prodüksiyon",
        level: 95
      },
      {
        name: "Hareket Grafikleri",
        level: 90
      },
      {
        name: "Renk Düzenleme",
        level: 85
      },
      {
        name: "Senaryo Yazımı",
        level: 80
      },
      {
        name: "Ses Tasarımı",
        level: 75
      }
    ],
    softwareSkills: [
      {
        name: "Adobe Premiere Pro",
        icon: "fa-adobe",
        level: 95
      },
      {
        name: "After Effects",
        icon: "fa-adobe",
        level: 90
      },
      {
        name: "DaVinci Resolve",
        icon: "fa-film",
        level: 85
      },
      {
        name: "Cinema 4D",
        icon: "fa-cube",
        level: 75
      },
      {
        name: "Adobe Audition",
        icon: "fa-adobe",
        level: 70
      }
    ],
    videoThumbnails: [
      {
        title: "Marka Tanıtım Filmi",
        image: "/images/portfolio/video1.jpg"
      },
      {
        title: "Ürün Reklamı",
        image: "/images/portfolio/video2.jpg"
      },
      {
        title: "Müzik Videosu",
        image: "/images/portfolio/video3.jpg"
      }
    ]
  }
};

// Kategorileri tanımlıyoruz
const categories = [
  { id: 'all', name: 'Tümü' },
  { id: 'professional', name: 'Profesyonel' },
  { id: 'creative', name: 'Yaratıcı' },
  { id: 'modern', name: 'Modern' },
  { id: 'simple', name: 'Sade' },
  { id: 'academic', name: 'Akademik' },
  { id: 'techstack', name: 'Teknoloji Yığını' },
  { id: 'minimalpure', name: 'Sade Minimal' },
  { id: 'corporateblue', name: 'Kurumsal Mavi' },
  { id: 'creativesplit', name: 'Yaratıcı Bölünmüş' },
  { id: 'startuphustler', name: 'Girişimci' }
  , { id: 'legal', name: 'Hukukçu' },
  { id: 'medical', name: 'Hemşire / Sağlık' },
  { id: 'architect', name: 'Mimar' },
  { id: 'academic', name: 'Akademisyen' },
  { id: 'photographer', name: 'Fotoğrafçı' }
];

// Şablonların listesi
const templates = [
  {
    id: 1,
    name: 'Yönetici',
    type: 'executive',
    category: 'professional',
    popular: true,
    userData: mockUserData.executive
  },
  {
    id: 2,
    name: 'Minimal',
    type: 'minimal',
    category: 'simple',
    popular: true,
    userData: mockUserData.minimal
  },
  {
    id: 3,
    name: 'Yaratıcı',
    type: 'creative',
    category: 'creative',
    popular: true,
    userData: mockUserData.creative
  },
  {
    id: 4,
    name: 'Teknik',
    type: 'technical',
    category: 'professional',
    popular: false,
    userData: mockUserData.technical
  },
  // Yeni şablonlar
  {
    id: 5,
    name: 'Teknoloji Yığını',
    type: 'techstack',
    category: 'professional',
    popular: true,
    userData: mockUserData.techstack
  },
  {
    id: 6,
    name: 'Sade Minimal',
    type: 'minimalpure',
    category: 'simple',
    popular: true,
    userData: mockUserData.minimalpure
  },
  {
    id: 7,
    name: 'Kurumsal Mavi',
    type: 'corporateblue',
    category: 'professional',
    popular: true,
    userData: mockUserData.corporateblue
  },
  {
    id: 8,
    name: 'Yaratıcı Bölünmüş',
    type: 'creativesplit',
    category: 'creative',
    popular: true,
    userData: mockUserData.creativesplit
  },
  {
    id: 9,
    name: 'Girişimci',
    type: 'startuphustler',
    category: 'modern',
    popular: true,
    userData: mockUserData.startuphustler
  },
  {
    "id": 10,
    "name": "Hukukçu",
    "type": "legal",
    "category": "professional",
    "popular": true,
    "userData": mockUserData.legal
  },
  {
    "id": 11,
    "name": "Hemşire / Sağlık",
    "type": "nurse",
    "category": "professional",
    "popular": true,
    "userData": mockUserData.nurse
  },
  {
    "id": 12,
    "name": "Mimar",
    "type": "architect",
    "category": "creative",
    "popular": true,
    "userData": mockUserData.architect
  },
  {
    "id": 13,
    "name": "Akademisyen",
    "type": "academic",
    "category": "academic",
    "popular": false,
    "userData": mockUserData.academic
  },
  {
    "id": 14,
    "name": "Fotoğrafçı",
    "type": "photographer",
    "category": "creative",
    "popular": true,
    "userData": mockUserData.photographer
  },
  // Finans Müdürü şablonu
  {
    id: "finance-manager",
    name: "Finans Müdürü",
    type: "finance",
    category: "professional",
    popular: false,
    userData: mockUserData.finance
  },
  
  // UI/UX Tasarımcı şablonu
  {
    id: "uiux-designer",
    name: "UI/UX Tasarımcı",
    type: "uiux",
    category: "creative",
    popular: true,
    userData: mockUserData.uiux
  },
  
  // Doktor şablonu
  {
    id: "doctor",
    name: "Doktor / Tıp Uzmanı",
    type: "doctor",
    category: "professional",
    popular: false,
    userData: mockUserData.doctor
  },
  
  // Öğretmen şablonu
  {
    id: "teacher",
    name: "Öğretmen / Eğitimci",
    type: "teacher",
    category: "professional",
    popular: false,
    userData: mockUserData.teacher
  },
  
  // Depo ve Lojistik şablonu
  {
    id: "warehouse",
    name: "Depo ve Lojistik",
    type: "warehouse",
    category: "simple",
    popular: false,
    userData: mockUserData.warehouse
  },
  
  // Videograf şablonu
  {
    id: "videographer",
    name: "Videograf / Hareket Tasarımcısı",
    type: "videographer",
    category: "creative",
    popular: false,
    userData: mockUserData.videographer
  }
];

export { mockUserData, categories, templates }; 