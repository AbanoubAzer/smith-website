// src/i18n/translations.ts
import { url } from '../utils/paths';

export const translations = {
  en: {
    // NAV
    nav: {
      home: 'Home',
      products: 'Products',
      globalSourcing: 'Global Sourcing',
      orderInspection: 'Order Inspection',
      exportDocs: 'Export Documentation',
      seaAirFreight: 'Sea & Air Freight',
      ourNetwork: 'Our Network',
      aboutUs: 'About Us',
      contactUs: 'Contact Us',
      requestQuote: 'Request a Quote',
    },
    // MEGA MENU PRODUCT CATEGORIES
    megaMenu: {
      doors: {
        title: 'Doors',
        items: [
          { label: 'Main Entrance Doors', href: url('/products/#cat-doors') },
          { label: 'Interior Doors', href: url('/products/#cat-doors') },
          { label: 'Pivot Doors', href: url('/products/#cat-doors') },
          { label: 'Garage Doors', href: url('/products/#cat-doors') },
          { label: 'Custom Doors', href: url('/products/#cat-doors') },
        ],
      },
      windows: {
        title: 'Windows & Aluminum',
        items: [
          { label: 'Aluminum Windows', href: url('/products/#cat-windows') },
          { label: 'Sliding Windows', href: url('/products/#cat-windows') },
          { label: 'Casement Windows', href: url('/products/#cat-windows') },
          { label: 'Custom Window Systems', href: url('/products/#cat-windows') },
        ],
      },
      outdoor: {
        title: 'Outdoor Living',
        items: [
          { label: 'Pergolas', href: url('/products/#cat-outdoor') },
          { label: 'Sunrooms', href: url('/products/#cat-outdoor') },
          { label: 'Outdoor Structures', href: url('/products/#cat-outdoor') },
        ],
      },
      metalwork: {
        title: 'Wrought Iron & Metalwork',
        items: [
          { label: 'Iron Gates', href: url('/products/#cat-metalwork') },
          { label: 'Fences & Railings', href: url('/products/#cat-metalwork') },
          { label: 'Stair & Balcony Railings', href: url('/products/#cat-metalwork') },
          { label: 'Decorative Window Grilles', href: url('/products/#cat-metalwork') },
          { label: 'Iron Pergolas', href: url('/products/#cat-metalwork') },
        ],
      },
      kitchens: {
        title: 'Kitchens & Interiors',
        items: [
          { label: 'Kitchen Cabinets', href: url('/products/#cat-kitchens') },
          { label: 'Kitchen Countertops', href: url('/products/#cat-kitchens') },
          { label: 'Bar Tops', href: url('/products/#cat-kitchens') },
          { label: 'Bathroom Vanities', href: url('/products/#cat-kitchens') },
          { label: 'Wardrobes & Walk-in Closets', href: url('/products/#cat-kitchens') },
        ],
      },
      stone: {
        title: 'Stone Surfaces',
        items: [
          { label: 'Quartz', href: url('/products/#cat-stone') },
          { label: 'Marble', href: url('/products/#cat-stone') },
          { label: 'Granite', href: url('/products/#cat-stone') },
          { label: 'Custom Stone Surfaces', href: url('/products/#cat-stone') },
        ],
      },
    },
    // HOME PAGE
    home: {
      hero: {
        tagline: 'YOUR GLOBAL PARTNER IN',
        headline: 'Architectural Products & Trade Solutions',
        sub: 'We connect quality building materials and architectural products with customers, contractors, builders, and businesses across the United States and international markets.',
        cta1: 'Explore Our Products',
        cta2: 'Contact Us',
      },
      features: {
        title: 'One Partner. Multiple Solutions.',
        items: [
          { icon: '◈', title: 'Quality Products', desc: 'Wide range of architectural and building materials' },
          { icon: '🌐', title: 'Global Sourcing', desc: 'From China and beyond' },
          { icon: '✔', title: 'Inspection & Documentation', desc: 'Quality control and customs support' },
          { icon: '🚢', title: 'Sea & Air Freight', desc: 'Reliable and cost-effective shipping' },
          { icon: '🤝', title: 'Local Partners', desc: 'Installation and handover support in the U.S.' },
        ],
      },
      products: {
        tag: 'OUR PRODUCTS',
        title: 'Architectural Solutions for Every Space',
        desc: 'From entrance doors to custom kitchens, we provide high-quality products and tailored sourcing services to match your design and project needs.',
        viewAll: 'View All Products',
        categories: [
          { title: 'Doors', img: url('/images/doors/entrance door.jpg'), href: url('/products/#cat-doors') },
          { title: 'Windows & Aluminum', img: url('/images/windows/1.jpg'), href: url('/products/#cat-windows') },
          { title: 'Pergolas & Sunrooms', img: url('/images/windows/pergola.png'), href: url('/products/#cat-outdoor') },
          { title: 'Wrought Iron & Metalwork', img: url('/images/metalwork/full-facade.png'), href: url('/products/#cat-metalwork') },
          { title: 'Kitchens & Bars', img: url('/images/kitchens/Kitchen 1.png'), href: url('/products/#cat-kitchens') },
          { title: 'Bathroom Vanities', img: url('/images/bathrooms/b1.JPG'), href: url('/products/#cat-kitchens') },
          { title: 'Quartz, Marble & Stone', img: url('/images/marble/M 1.jpg'), href: url('/products/#cat-stone') },
        ],
      },
      sourcing: {
        tag: 'Global Sourcing',
        title: 'Your Product. Our Network.',
        desc: 'We source products according to your specifications, coordinate with trusted suppliers, and handle inspections, documentation and shipping — so you can focus on your business.',
        cta: 'Learn More',
      },
      presence: {
        title: 'Our Global Presence',
        locations: [
          { icon: '🏢', name: 'China — Company Office' },
          { icon: '📍', name: 'New Jersey (USA) — Partner Office' },
          { icon: '🔧', name: 'Tennessee, New York & NJ — Installation Partners' },
          { icon: '🏢', name: 'Kuwait — Company Office' },
          { icon: '👥', name: 'Egypt & Saudi Arabia — Local Representatives' },
        ],
      },
      footer: {
        q1: 'Quality Products',
        q1sub: 'Premium materials & designs',
        q2: 'Global Network',
        q2sub: 'Across multiple markets',
        q3: 'Reliable Support',
        q3sub: 'From sourcing to delivery',
        tagline: 'Building Connections. Creating Opportunities.',
      },
    },
    // FOOTER
    footer: {
      rights: '© 2025 SMITH Co. LTD. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
    },
  },

  ar: {
    nav: {
      home: 'الرئيسية',
      products: 'المنتجات',
      globalSourcing: 'التوريد العالمي',
      orderInspection: 'فحص الطلبات',
      exportDocs: 'وثائق التصدير',
      seaAirFreight: 'الشحن البحري والجوي',
      ourNetwork: 'شبكتنا',
      aboutUs: 'من نحن',
      contactUs: 'اتصل بنا',
      requestQuote: 'طلب عرض سعر',
    },
    megaMenu: {
      doors: {
        title: 'الأبواب',
        items: [
          { label: 'أبواب المداخل الرئيسية', href: url('/products/#cat-doors') },
          { label: 'الأبواب الداخلية', href: url('/products/#cat-doors') },
          { label: 'أبواب البيفوت', href: url('/products/#cat-doors') },
          { label: 'أبواب الجراج', href: url('/products/#cat-doors') },
          { label: 'أبواب مخصصة', href: url('/products/#cat-doors') },
        ],
      },
      windows: {
        title: 'النوافذ والألومنيوم',
        items: [
          { label: 'نوافذ ألومنيوم', href: url('/products/#cat-windows') },
          { label: 'نوافذ منزلقة', href: url('/products/#cat-windows') },
          { label: 'نوافذ كازمنت', href: url('/products/#cat-windows') },
          { label: 'أنظمة نوافذ مخصصة', href: url('/products/#cat-windows') },
        ],
      },
      outdoor: {
        title: 'المعيشة الخارجية',
        items: [
          { label: 'البرجولات', href: url('/products/#cat-outdoor') },
          { label: 'الغرف الشمسية', href: url('/products/#cat-outdoor') },
          { label: 'الهياكل الخارجية', href: url('/products/#cat-outdoor') },
        ],
      },
      metalwork: {
        title: 'الحديد المطروق والمعادن',
        items: [
          { label: 'البوابات الحديدية', href: url('/products/#cat-metalwork') },
          { label: 'الأسوار والدرابزين', href: url('/products/#cat-metalwork') },
          { label: 'درابزين السلالم والبلكونات', href: url('/products/#cat-metalwork') },
          { label: 'شبكات النوافذ الزخرفية', href: url('/products/#cat-metalwork') },
          { label: 'برجولات حديدية', href: url('/products/#cat-metalwork') },
        ],
      },
      kitchens: {
        title: 'المطابخ والديكور الداخلي',
        items: [
          { label: 'خزائن المطبخ', href: url('/products/#cat-kitchens') },
          { label: 'أسطح المطبخ', href: url('/products/#cat-kitchens') },
          { label: 'أسطح البار', href: url('/products/#cat-kitchens') },
          { label: 'أثاث الحمامات', href: url('/products/#cat-kitchens') },
          { label: 'خزائن الملابس وغرف الدريسنج', href: url('/products/#cat-kitchens') },
        ],
      },
      stone: {
        title: 'الأسطح الحجرية',
        items: [
          { label: 'الكوارتز', href: url('/products/#cat-stone') },
          { label: 'الرخام', href: url('/products/#cat-stone') },
          { label: 'الغرانيت', href: url('/products/#cat-stone') },
          { label: 'أسطح حجرية مخصصة', href: url('/products/#cat-stone') },
        ],
      },
    },
    home: {
      hero: {
        tagline: 'شريكك العالمي في',
        headline: 'المنتجات المعمارية وحلول التجارة',
        sub: 'نربط مواد البناء عالية الجودة والمنتجات المعمارية بالعملاء والمقاولين والمطورين والشركات في الولايات المتحدة والأسواق الدولية.',
        cta1: 'استكشف منتجاتنا',
        cta2: 'تواصل معنا',
      },
      features: {
        title: 'شريك واحد. حلول متعددة.',
        items: [
          { icon: '◈', title: 'منتجات عالية الجودة', desc: 'مجموعة واسعة من المنتجات المعمارية ومواد البناء' },
          { icon: '🌐', title: 'التوريد العالمي', desc: 'من الصين وما بعدها' },
          { icon: '✔', title: 'الفحص والتوثيق', desc: 'مراقبة الجودة ودعم الجمارك' },
          { icon: '🚢', title: 'الشحن البحري والجوي', desc: 'شحن موثوق وفعّال من حيث التكلفة' },
          { icon: '🤝', title: 'شركاء محليون', desc: 'دعم التركيب والتسليم في الولايات المتحدة' },
        ],
      },
      products: {
        tag: 'منتجاتنا',
        title: 'حلول معمارية لكل مساحة',
        desc: 'من أبواب المداخل إلى المطابخ المخصصة، نوفر منتجات عالية الجودة وخدمات توريد مصممة لتناسب تصميمك ومتطلبات مشروعك.',
        viewAll: 'عرض جميع المنتجات',
        categories: [
          { title: 'الأبواب', img: url('/images/doors/entrance door.jpg'), href: url('/products/#cat-doors') },
          { title: 'النوافذ والألومنيوم', img: url('/images/windows/1.jpg'), href: url('/products/#cat-windows') },
          { title: 'البرجولات والغرف الشمسية', img: url('/images/windows/pergola.png'), href: url('/products/#cat-outdoor') },
          { title: 'الحديد المطروق والمعادن', img: url('/images/metalwork/full-facade.png'), href: url('/products/#cat-metalwork') },
          { title: 'المطابخ والبارات', img: url('/images/kitchens/Kitchen 1.png'), href: url('/products/#cat-kitchens') },
          { title: 'أثاث الحمامات', img: url('/images/bathrooms/b1.JPG'), href: url('/products/#cat-kitchens') },
          { title: 'الكوارتز والرخام والحجر', img: url('/images/marble/M 1.jpg'), href: url('/products/#cat-stone') },
        ],
      },
      sourcing: {
        tag: 'التوريد العالمي',
        title: 'منتجك. شبكتنا.',
        desc: 'نوفر المنتجات وفق مواصفاتك، ننسق مع موردين موثوقين، ونتولى الفحص والتوثيق والشحن — حتى تتفرغ لعملك.',
        cta: 'اعرف أكثر',
      },
      presence: {
        title: 'حضورنا العالمي',
        locations: [
          { icon: '🏢', name: 'الصين — المكتب الرئيسي' },
          { icon: '📍', name: 'نيو جيرسي (الولايات المتحدة) — مكتب الشريك' },
          { icon: '🔧', name: 'تينيسي، نيويورك ونيو جيرسي — شركاء التركيب' },
          { icon: '🏢', name: 'الكويت — المكتب الإقليمي' },
          { icon: '👥', name: 'مصر والسعودية — ممثلون محليون' },
        ],
      },
      footer: {
        q1: 'منتجات عالية الجودة',
        q1sub: 'مواد وتصاميم فاخرة',
        q2: 'شبكة عالمية',
        q2sub: 'عبر أسواق متعددة',
        q3: 'دعم موثوق',
        q3sub: 'من التوريد إلى التسليم',
        tagline: 'بناء الروابط. خلق الفرص.',
      },
    },
    footer: {
      rights: '© 2025 SMITH Co. LTD. جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'الشروط والأحكام',
    },
  },
};

export type Lang = keyof typeof translations;
export const getLang = (lang: Lang) => translations[lang];
