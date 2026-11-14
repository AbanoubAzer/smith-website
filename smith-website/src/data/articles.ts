// src/data/articles.ts
import { url } from '../utils/paths';

export interface ArticleSection {
  heading?: string;
  subheading?: string;
  paragraphs: string[];
  list?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
  callout?: string;
}

export interface Article {
  slug: string;
  title: string;
  titleAr: string;
  subtitle: string;
  subtitleAr: string;
  category: string;
  categoryAr: string;
  readTime: string;
  readTimeAr: string;
  date: string;
  dateAr: string;
  image: string;
  excerpt: string;
  excerptAr: string;
  sectionsEn: ArticleSection[];
  sectionsAr: ArticleSection[];
}

export const articles: Article[] = [
  {
    slug: 'reliable-manufacturers-china',
    title: 'How to Find Reliable Manufacturers in China',
    titleAr: 'كيف تختار مصانع موثوقة في الصين وتضمن سلاسل توريد آمنة',
    subtitle: 'Complete Sourcing Solutions in China: Your Gateway to Unlimited Industries',
    subtitleAr: 'حلول التوريد المتكاملة في الصين: بوابتك إلى مختلف القطاعات الصناعية وتجنب الوسطاء',
    category: 'Sourcing & Manufacturing',
    categoryAr: 'التوريد والتصنيع',
    readTime: '5 min read',
    readTimeAr: '5 دقائق للقراءة',
    date: 'November 2026',
    dateAr: 'نوفمبر 2026',
    image: url('/images/articles/reliable-manufacturers-china.png'),
    excerpt: 'Finding a verified, reliable manufacturer in China is the foundation of any successful global business. Learn our proven on-the-ground matrix for supplier audits, legal verification, and multi-industry procurement.',
    excerptAr: 'اختيار مصنع موثوق في الصين هو الركيزة الأساسية لنجاح أي عمل تجاري دولي. تعرف على منهجيتنا الميدانية في فحص خطوط الإنتاج والتحقق القانوني والتوريد لمختلف القطاعات.',
    sectionsEn: [
      {
        paragraphs: [
          'Finding a reliable manufacturer in China is the foundation of any successful global business. Whether you are looking for specific raw materials, custom-engineered architectural systems, or consumer goods, navigating the massive Chinese market requires local expertise, strict legal verification, and absolute quality control.',
          'At EITCO Ltd, we provide comprehensive sourcing solutions across all industries and product categories. We do not just find suppliers; we secure your entire supply chain from A to Z.'
        ]
      },
      {
        heading: 'Sourcing Building Materials: A Prime Example of Our Expertise',
        paragraphs: [
          'To understand how we protect your business, look at how we handle highly technical sectors like Building Materials, Premium Architectural Doors, and Engineered Aluminum Facades:',
          'The Challenge: International buyers often struggle with hidden trading brokers posing as direct factories, inconsistent raw material quality, or critical communication gaps regarding technical blueprints and millimeter-accurate tolerances.',
          'Our Sourcing Matrix: We filter out the middlemen by physically auditing production lines in Foshan, Zhejiang, and China major industrial hubs. Our local legal team inspects factory business licenses, manufacturing scopes, and international compliance certificates (such as ISO 9001 and thermal break standards). Finally, we conduct rigorous on-site, piece-by-piece pre-shipment inspections so that what leaves the port perfectly matches your exact engineering drawings.'
        ],
        callout: 'We eliminate the middlemen by physically auditing factory floors and legally verifying business licenses on the ground in China.'
      },
      {
        heading: 'We Source Everything: Multi-Industry Expertise',
        paragraphs: [
          'While architectural products showcase our technical precision, our capabilities span far and wide. Over the years, we have built a diverse network of top-tier, verified manufacturers across China, allowing us to seamlessly source for a variety of sectors:'
        ],
        list: [
          'Building & Architectural Materials: Bespoke grand entrance doors, aluminum window facades, luxury vanities, marble, and quartz surfaces.',
          'Industrial Machinery & Equipment: Digital printing machines, manufacturing components, and custom hardware.',
          'Plastic & Chemical Products: PVC films, commercial banner materials, and high-pressure laminates (HPL).',
          'Furniture & Modern Interior Fit-outs: Customized commercial and residential interior millwork solutions.',
          'And Much More: No matter your industry or custom product specifications, our team possesses the localized knowledge to find the right verified source.'
        ]
      },
      {
        heading: 'Why Choose EITCO Ltd as Your Ground Partner in China',
        paragraphs: [
          'Sourcing from China should not be a gamble. By partnering with EITCO Ltd, you gain a dedicated, professional team on the ground that protects your financial interests, enforces strict quality standards, and speaks the native language of production.',
          'We manage everything—from initial factory matching and technical blueprint translation to quality assurance, export compliance, and container logistics—giving you absolute peace of mind.'
        ],
        callout: 'Ready to secure your global supply chain? Contact our sourcing team today to review your project specifications.'
      }
    ],
    sectionsAr: [
      {
        paragraphs: [
          'يُعد اختيار مصنع معتمد وموثوق في الصين الركيزة الأساسية لنجاح أي استيراد أو مشروع تجاري عالمي. سواء كنت تبحث عن مواد خام دقيقة، أو منتجات هندسية مصنعة خصيصاً، أو حلول معمارية متطورة، فإن التعامل مع السوق الصناعي الصيني الضخم يتطلب خبرة ميدانية وتوثيقاً قانونياً صارماً ومراقبة جودة لا تقبل المساومة.',
          'في شركة إيتكو (EITCO Ltd)، نقدم حلول توريد متكاملة تغطي مختلف القطاعات الصناعية، فنحن لا نكتفي بربطك بالمصنع، بل نؤمن سلسلة التوريد بالكامل من الألف إلى الياء.'
        ]
      },
      {
        heading: 'توريد مواد البناء: نموذج لخبرتنا الهندسية الدقيقة',
        paragraphs: [
          'لفهم كيف نحمي مصالحك التجارية، انظر إلى أسلوب إدارتنا للقطاعات الهندسية عالية الدقة مثل الأبواب المعمارية الفاخرة، وأنظمة واجهات الألومنيوم العازلة، والرخام الطبيعي:',
          'التحدي الحقيقي: يواجه المستورد الدولي دائماً مخاطر التعامل مع وسطاء تجاريين يدّعون أنهم مصانع مباشرة، أو تفاوت في خامات التصنيع، أو أخطاء كارثية في فهم المخططات التنفيذية والملليمترات المطلوبة.',
          'منظومة الفحص الميداني لدينا: نقوم باستبعاد الوسطاء عبر الزيارات الميدانية المباشرة لخطوط الإنتاج في فوشان وتشجيانغ وأهم المدن الصناعية. يفحص فريقنا القانوني تراخيص المصانع ونطاق التصنيع المعتمد والشهادات الدولية (مثل ISO 9001)، ثم نجري فحصاً شاملاً قطعة بقطعة قبل الشحن لضمان مطابقة المنتج التامة لرسوماتك الهندسية.'
        ],
        callout: 'نستبعد الوسطاء من خلال التواجد الميداني في المصانع والتحقق القانوني المباشر من التراخيص وخطوط الإنتاج في الصين.'
      },
      {
        heading: 'نورد كافة المنتجات: خبرة صناعية متعددة القطاعات',
        paragraphs: [
          'رغم تميزنا البارز في قطاع المنتجات المعمارية ومواد البناء، إلا أن شبكتنا الصناعية تمتد لتشمل كبرى المصانع في مختلف المجالات:'
        ],
        list: [
          'المواد المعمارية ومواد البناء: أبواب المداخل الفاخرة، واجهات النوافذ الذكية، المطابخ المجهزة، أثاث الحمامات، والأسطح الحجرية والكوارتز.',
          'الآلات والمعدات الصناعية: ماكينات الطباعة الرقمية، قطع الغيار الهندسية، ومستلزمات الإنتاج.',
          'المنتجات البلاستيكية والكيميائية: رقائق PVC، خامات البانر الإعلانية، وألواح HPL المقاومة.',
          'الأثاث والديكور الداخلي: حلول التأثيث المتكامل للمشاريع السكنية والتجارية والفندقية.',
          'مختلف المنتجات المخصصة: أياً كان مجال عملك، نمتلك الخبرة الميدانية لربطك بأفضل المصانع المباشرة.'
        ]
      },
      {
        heading: 'لماذا تختار إيتكو (EITCO Ltd) كشريكك الميداني في الصين؟',
        paragraphs: [
          'الاستيراد من الصين لا ينبغي أن يكون مخاطرة. باختيارك لشركة إيتكو، تحصل على فريق هندسي وقانوني متخصص متواجد على الأرض يحمي استثماراتك، ويفرض أعلى معايير الجودة، ويتحدث لغة المصانع الصينية بطلاقة.',
          'نتولى كل خطوة: من التدقيق المبدئي للمصانع والترجمة الفنية للمخططات، إلى التفتيش الميداني، والتخليص الجمركي، وحجز الشحن الدولي.'
        ],
        callout: 'هل تخطط لبدء التوريد أو تأمين مشترياتك من الصين؟ تواصل مع فريق إيتكو اليوم لمناقشة مواصفات مشروعك.'
      }
    ]
  },
  {
    slug: 'china-to-usa-shipping',
    title: 'Complete Guide to Shipping from China to the USA',
    titleAr: 'الدليل المتكامل للشحن البحري والجوي من الصين إلى الولايات المتحدة',
    subtitle: 'Strategic Freight Options, Customs Compliance, and Landed Cost Planning',
    subtitleAr: 'خيارات الشحن الاستراتيجية، متطلبات الجمارك الأمريكية، وحساب التكلفة الإجمالية الواصلة',
    category: 'Shipping & Logistics',
    categoryAr: 'الشحن واللوجستيات',
    readTime: '6 min read',
    readTimeAr: '6 دقائق للقراءة',
    date: 'November 2026',
    dateAr: 'نوفمبر 2026',
    image: url('/images/articles/china-to-usa-shipping.png'),
    excerpt: 'Shipping commercial cargo or architectural materials from China to the United States requires navigating freight selection, US Customs compliance (ISF, HS Codes), quality verification, and landed cost optimization.',
    excerptAr: 'شحن البضائع ومواد البناء من الصين إلى الولايات المتحدة يتطلب فهماً دقيقاً لاختيار وسيلة الشحن، وإجراءات الجمارك الأمريكية (ISF ورموز HS)، ومراقبة الجودة، وحساب التكلفة الإجمالية.',
    sectionsEn: [
      {
        paragraphs: [
          'Shipping products from China to the United States is a vital artery of international trade. Whether you are importing commercial architectural components, retailer inventory, or large-scale construction materials, selecting the optimal shipping strategy saves substantial capital, prevents port delays, and streamlines your import supply chain.',
          'At EITCO Ltd, we guide businesses across every phase of the journey from Chinese manufacturing floors to final U.S. delivery destinations, integrating direct procurement, quality audits, export compliance, and international logistics.'
        ]
      },
      {
        heading: '1. Choose the Right Shipping Method',
        paragraphs: [
          'The optimal transport mode balances cargo volume, gross weight, target budget, and delivery milestones:'
        ],
        list: [
          'Sea Freight: The most cost-effective solution for bulk or heavy architectural materials. Available as Full Container Load (FCL) for dedicated volume or Less than Container Load (LCL) for consolidated pallets.',
          'Air Freight: Ideal for expedited project schedules, urgent samples, or high-value architectural fittings requiring 3 to 7 days transit.',
          'Express Air Couriers: Best suited for pre-production prototypes, architectural hardware samples, and urgent documentation via DHL, FedEx, or UPS.'
        ]
      },
      {
        heading: '2. Master U.S. Customs and Import Compliance',
        paragraphs: [
          'U.S. Customs and Border Protection (CBP) enforces strict regulatory standards. Prior to vessel departure, accurate product classification (Harmonized Tariff Schedule / HS Code) must be determined to calculate exact duties and tariffs.',
          'Essential documentation required for smooth U.S. customs entry includes:'
        ],
        list: [
          'Commercial Invoice detailing seller, buyer, exact item descriptions, unit values, and country of origin.',
          'Packing List detailing gross weight, net weight, cubic meters, and package quantities.',
          'Ocean Bill of Lading (B/L) or Air Waybill (AWB) serving as the cargo title and carriage contract.',
          'Importer Security Filing (ISF 10+2) transmitted to U.S. Customs at least 24 hours prior to container loading in China.',
          'Certificate of Origin and specialized safety compliance certificates (e.g., EPA for composite woods, UL for fire-rated systems).'
        ],
        callout: 'Filing the ISF (10+2) at least 24 hours before loading in China is mandatory to avoid severe U.S. Customs fines.'
      },
      {
        heading: '3. Quality Verification Before Loading',
        paragraphs: [
          'Correcting manufacturing defects after cargo crosses the Pacific Ocean is exponentially costly and disruptive to construction timelines. Rigorous pre-shipment inspection (PSI), packaging reinforcement, and container stuffing audits in China prevent damaged cargo and customs holds upon U.S. arrival.'
        ]
      },
      {
        heading: '4. Calculate the True Landed Cost',
        paragraphs: [
          'A common pitfall for importers is focusing solely on the ocean freight rate. The true landed cost consists of: factory FOB price + ocean/air freight + marine cargo insurance + U.S. customs duties and merchandise processing fees (MPF/HMF) + port terminal handling charges + destination drayage to your warehouse or job site.'
        ]
      },
      {
        heading: '5. Streamline Your Imports with EITCO Ltd',
        paragraphs: [
          'From booking container space with tier-1 ocean carriers to preparing clean export customs paperwork and managing delivery coordination through our New Jersey partner office, EITCO Ltd delivers an end-to-end, stress-free shipping experience.'
        ]
      }
    ],
    sectionsAr: [
      {
        paragraphs: [
          'يُعد شحن المنتجات ومواد البناء من الصين إلى الولايات المتحدة شرياناً رئيسياً في التجارة الدولية. وسواء كنت تستورد حلولاً معمارية متطورة، أو بضائع تجارية، فإن اختيار وسيلة الشحن المناسبة يوفر آلاف الدولارات ويمنع التأخيرات المكلفة في الموانئ.',
          'في شركة إيتكو (EITCO Ltd)، نرافق عملاءنا في كل مرحلة من أرض المصنع بالصين حتى التسليم النهائي في أمريكا، مع دمج التوريد، ومراقبة الجودة، وتجهيز المستندات الجمركية، واللوجستيات الدولية.'
        ]
      },
      {
        heading: '1. اختيار وسيلة الشحن المناسبة لمشروعك',
        paragraphs: [
          'يعتمد اختيار وسيلة النقل على حجم البضاعة، ووزنها الإجمالي، والميزانية المرصودة، والجدول الزمني للمشروع:'
        ],
        list: [
          'الشحن البحري (Sea Freight): الخيار الأكثر توفيراً للبضائع الكبيرة ومواد البناء الثقيلة، وينقسم إلى حاوية كاملة (FCL) أو شحن جزئي (LCL).',
          'الشحن الجوي (Air Freight): الحل المثالي للطلبات المستعجلة والمعدات ذات القيمة العالية التي تتطلب وصولاً خلال 3 إلى 7 أيام.',
          'الشحن السريع (Express Courier): الأنسب لعينات المنتجات، وقطع الإكسسوارات الدقيقة، والمستندات عبر شركات البريد الدولية.'
        ]
      },
      {
        heading: '2. متطلبات الجمارك الأمريكية وتجهيز المستندات',
        paragraphs: [
          'تفرض هيئة الجمارك وحماية الحدود الأمريكية (CBP) لوائح صارمة، ويجب تحديد رمز البند الجمركي (HS Code) بدقة لحساب الرسوم والضرائب المستحقة.',
          'المستندات الأساسية المطلوبة للتخليص الجمركي في أمريكا تشمل:'
        ],
        list: [
          'الفاتورة التجارية (Commercial Invoice) الموضحة لقيم البضائع ومواصفاتها الدقيقة.',
          'بيان التعبئة (Packing List) الموضح للأوزان والأبعاد وعدد الطرود.',
          'بوليصة الشحن البحري (Bill of Lading) أو الجوي (Air Waybill).',
          'تسجيل بيانات الأمن الجمركي (ISF 10+2) قبل شحن الحاوية من الصين بـ 24 ساعة على الأقل لتجنب الغرامات.',
          'شهادات المنشأ والشهادات الفنية المتخصصة (مثل شهادات EPA للأخشاب وشهادات UL لأنظمة السلامة).'
        ],
        callout: 'يجب تقديم إقرار ISF (10+2) للسلطات الأمريكية قبل تحميل الحاوية في الصين بـ 24 ساعة على الأقل لتفادي الغرامات المالية الكبيرة.'
      },
      {
        heading: '3. فحص الجودة والتغليف قبل الشحن',
        paragraphs: [
          'اكتشاف أي خلل في المواصفات بعد وصول الشحنة إلى أمريكا يكلف وقتاً ومالاً مضاعفاً. لذلك نضمن في إيتكو إجراء فحص ميداني صارم للمنتجات واختبار متانة التغليف قبل إغلاق الحاوية في الموانئ الصينية.'
        ]
      },
      {
        heading: '4. حساب التكلفة الإجمالية الواصلة (Landed Cost)',
        paragraphs: [
          'التكلفة الحقيقية لا تقتصر على نولون الشحن البحري فقط، بل تشمل: سعر المصنع + تكلفة الشحن + التأمين البحري + الرسوم الجمركية الأمريكية ورسوم الموانئ + النقل الداخلي (Drayage) حتى موقع المشروع أو المستودع.'
        ]
      },
      {
        heading: '5. شحن آمن ومنضبط مع إيتكو (EITCO Ltd)',
        paragraphs: [
          'ننسق مع كبرى خطوط الملاحة البحرية الدولية، ونجهز كافة المستندات التصديرية المعقدة، وندعم الاستلام عبر مكتب شريكنا في نيو جيرسي لضمان تجربة استيراد سلسة وناجحة.'
        ]
      }
    ]
  },
  {
    slug: 'inspect-building-materials-china',
    title: 'How to Inspect Building Materials from China',
    titleAr: 'كيفية فحص ومراقبة جودة مواد البناء والتشطيبات المستوردة من الصين',
    subtitle: 'A Complete On-Site Quality Control Guide for International Buyers',
    subtitleAr: 'دليل شامل لمراقبة الجودة الميدانية والتأكد من مطابقة المواصفات الهندسية قبل الشحن',
    category: 'Quality Control',
    categoryAr: 'مراقبة الجودة',
    readTime: '7 min read',
    readTimeAr: '7 دقائق للقراءة',
    date: 'November 2026',
    dateAr: 'نوفمبر 2026',
    image: url('/images/articles/quality-inspection-materials.png'),
    excerpt: 'Purchasing architectural products and building materials from China requires stringent on-site inspection. Learn how to verify raw material grades, tolerances, surface finishes, and export packaging.',
    excerptAr: 'استيراد المواد المعمارية ومواد البناء من الصين يتطلب إجراءات فحص ميداني دقيقة. تعرف على كيفية التحقق من جودة الخامات والتفاوتات المسموحة والتشطيب والتغليف التصديري.',
    sectionsEn: [
      {
        paragraphs: [
          'China is the premier global powerhouse for architectural products and construction materials, delivering unmatched scale, diverse styles, and competitive pricing. However, purchasing high-value building materials overseas requires uncompromising quality control to verify that finished units match exact architectural blueprints, building codes, and structural safety standards.',
          'At EITCO Ltd, quality assurance is at the core of our operations. We safeguard international contractors, developers, and homeowners by mitigating manufacturing risks on the ground before cargo ever leaves the factory.'
        ]
      },
      {
        heading: '1. Verify the Supplier and Manufacturing Capacity',
        paragraphs: [
          'Never place capital at risk based solely on website catalogs or virtual showrooms. A thorough supplier audit examines production facilities, equipment sophistication, operational workforce, legal business scopes, and past international export records.',
          'Confirming direct manufacturer status and securing approved physical production samples sets an indisputable benchmark for mass production.'
        ]
      },
      {
        heading: '2. Audit Specifications with Millimeter Precision',
        paragraphs: [
          'Building products allow zero margin for error. Discrepancies of even a few millimeters can cause severe site installation failures and schedule delays. Crucial inspection checkpoints include:'
        ],
        list: [
          'Dimensions, Profiles & Thickness: Precision caliper verification of aluminum extrusions, glass sheet thickness, and steel core gauges.',
          'Raw Material Grades: Verifying solid hardwoods, stainless steel hardware grades (304 vs 316), and thermal break polyamide strips.',
          'Surface Coatings & Textures: Checking powder coating thickness, anodizing micron depth, fluorocarbon paint adhesion, and marble slab vein alignment.',
          'Hardware & Component Integration: Testing European lock cylinders, heavy-duty hinges, hydraulic closers, and weatherproofing EPDM seals.',
          'Safety & Code Compliance: Verifying tempered glass safety stamps, fire-rated core certifications, and sound transmission ratings.'
        ]
      },
      {
        heading: '3. In-Line Production Inspections',
        paragraphs: [
          'Monitoring quality during fabrication prevents irreversible mistakes. For example, verifying aluminum frame miter joint cuts, internal corner brackets, and adhesive curing before packaging ensures structural longevity that cannot be visually confirmed once units are fully boxed.'
        ]
      },
      {
        heading: '4. Pre-Shipment Inspection (PSI)',
        paragraphs: [
          'Once production reaches 100% completion, an intensive piece-by-piece pre-shipment audit is conducted. Inspectors verify order quantities against purchase contracts, test mechanical functionality (opening/closing cycles), inspect aesthetics under controlled lighting, and review comprehensive photographic inspection logs.'
        ],
        callout: 'A comprehensive pre-shipment inspection report with high-resolution photos gives you documented verification before final supplier payment.'
      },
      {
        heading: '5. Heavy-Duty Export Packaging & Container Loading',
        paragraphs: [
          'Architectural products are highly susceptible to moisture, impact shocks, and shifting during ocean transport. Proper packaging standards mandate protective polyethylene film, reinforced corner protectors, high-density foam cushioning, and fumigated solid wooden crates.'
        ]
      },
      {
        heading: '6. Quality Assurance with EITCO Ltd',
        paragraphs: [
          'Managing multiple Chinese factories for a single architectural project is challenging. EITCO Ltd acts as your dedicated technical extension on the ground—handling specification verification, unannounced factory visits, rigorous quality reports, and secure container stuffing.'
        ]
      }
    ],
    sectionsAr: [
      {
        paragraphs: [
          'تعد الصين المورد العالمي الأول للمنتجات المعمارية ومواد البناء، حيث توفر تنوعاً هائلاً وأسعاراً تنافسية وإمكانات تصنيعية متطورة. ومع ذلك، فإن شراء مواد البناء عالية القيمة من الخارج يتطلب فحصاً هندسياً دقيقاً لضمان مطابقة المنتجات للمواصفات المعمارية ومعايير السلامة الدولية.',
          'في شركة إيتكو (EITCO Ltd)، نضع الجودة في صميم خدماتنا لمساعدة المطورين والمقاولين وأصحاب المشاريع على استيراد منتجات موثوقة مع تقليل مخاطر التصنيع إلى الصفر.'
        ]
      },
      {
        heading: '1. التحقق من المصنع والقدرة الإنتاجية الحقيقية',
        paragraphs: [
          'لا تعتمد أبداً على الكتالوجات الإلكترونية أو المكاتب التجارية دون تدقيق ميداني. يشمل تقييم المصنع فحص خطوط الإنتاج، والآلات المستخدمة، والتراخيص القانونية، وسجل التصدير الدولي السابق.',
          'من الضروري التأكد من أنك تتعامل مباشرة مع المصنع المصنّع، واعتماد عينة مطابقة وموقعة قبل بدء الإنتاج الكمي.'
        ]
      },
      {
        heading: '2. مراجعة المواصفات الفنية بالملليمتر',
        paragraphs: [
          'في مواد البناء والتشطيب، لا مجال للأخطاء؛ فاختلاف بضعة ملليمترات في الأبواب أو النوافذ أو الخزائن قد يفسد التركيب بالكامل في موقع المشروع. تشمل نقاط الفحص الرئيسية:'
        ],
        list: [
          'الأبعاد والسمك والوزن: القياس بأدوات كاليبر دقيقة لسمك قطاعات الألومنيوم، وطبقات الزجاج، وهياكل الحديد والأبواب.',
          'جودة الخامات الأساسية: التأكد من أنواع الأخشاب، ودرجات الاستانلس ستيل (304 أو 316)، وعوازل البولي أميد الحرارية.',
          'التشطيب السطحي والألوان: فحص سمك طبقة دهان البودرة، أو الأنودايز، أو الطلاء المقاوم للعوامل الجوية، وتجانس عروق الرخام الطبيعي.',
          'الإكسسوارات والمفصلات: اختبار كفاءة الأقفال الأوروبية، والمفصلات الثقيلة، والجوانات المطاطية العازلة (EPDM).',
          'شهادات السلامة: التحقق من أختام الزجاج السيكوريت المقسى وشهادات مقاومة الحريق والعزل الصوتي.'
        ]
      },
      {
        heading: '3. الفحص أثناء مراحل التصنيع (In-Line Inspection)',
        paragraphs: [
          'متابعة التصنيع على خط الإنتاج يمنع الأخطاء غير القابلة للتعديل لاحقاً؛ مثل التأكد من دقة زوايا لحام قطاعات النوافذ وعزلها الداخلي قبل تجميع الزجاج وإغلاق الهيكل.'
        ]
      },
      {
        heading: '4. الفحص الشامل قبل الشحن (Pre-Shipment Inspection)',
        paragraphs: [
          'عند اكتمال التصنيع، يجري مفتشونا فحصاً دقيقاً لكل وحدة: مطابقة العدد والموديلات، اختبار الحركة والفتح والإغلاق، وفحص المظهر الخارجي تحت إضاءة كافية، مع إصدار تقرير فحص مصور مفصل.'
        ],
        callout: 'تقرير الفحص النهائي الموثق بالصور يمنحك راحة البال والقرار الحاسم قبل سداد الدفعة الختامية للمصنع.'
      },
      {
        heading: '5. التغليف التصديري المحمي وتحميل الحاويات',
        paragraphs: [
          'مواد البناء معرضة للرطوبة والصدمات أثناء النقل البحري، ولذلك نلزم المصانع باستخدام طبقات حماية ممتصة للصدمات، وحواف مدعمة، وصناديق خشبية قوية معالجة ومبخرة وفق معايير الشحن الدولي.'
        ]
      },
      {
        heading: '6. راحة البال وضمان الجودة مع إيتكو (EITCO Ltd)',
        paragraphs: [
          'إدارة عدة مصانع وموردين في الصين لمشروع واحد مهمة معقدة وشاقة. تعمل شركة إيتكو كفريقك الفني الميداني الموثوق في الصين لحماية استثماراتك والتأكد من استلام ما طلبته تماماً.'
        ]
      }
    ]
  },
  {
    slug: 'lcl-vs-fcl-shipping',
    title: 'LCL vs FCL Shipping: Which Is Better for Your Business?',
    titleAr: 'مقارنة الشحن الجزئي (LCL) والحاوية الكاملة (FCL): أيهما أفضل لمشروعك؟',
    subtitle: 'Strategic Freight Analysis, Cost Structures, and Transit Time Comparison',
    subtitleAr: 'تحليل استراتيجي لتكاليف الشحن البحري، زمن الوصول، واختيار الحل الأمثل لشحنتك',
    category: 'Freight Guide',
    categoryAr: 'دليل الشحن البحري',
    readTime: '5 min read',
    readTimeAr: '5 دقائق للقراءة',
    date: 'November 2026',
    dateAr: 'نوفمبر 2026',
    image: url('/images/articles/lcl-vs-fcl-shipping.png'),
    excerpt: 'Comparing Less than Container Load (LCL) and Full Container Load (FCL) sea freight options. Understand container space, cargo handling, pricing structures, and total landed cost calculation.',
    excerptAr: 'مقارنة عملية بين الشحن الجزئي (LCL) وحجز حاوية كاملة (FCL). فهم كيفية حساب تكاليف المساحة، زمن العبور، تقليل مخاطر التلف، وحساب التكلفة الواصلة لمشروعك.',
    sectionsEn: [
      {
        paragraphs: [
          'When importing commercial cargo or architectural materials from China, choosing the right ocean freight method makes an enormous impact on your shipping budget, delivery timeline, and overall supply chain efficiency.',
          'The two primary sea freight shipping models are LCL (Less than Container Load) and FCL (Full Container Load). Understanding how each option works empowers you to choose the most economical and secure solution for your project.'
        ]
      },
      {
        heading: '1. What Is LCL Shipping?',
        paragraphs: [
          'LCL stands for Less than Container Load. It means your cargo shares container space with shipments belonging to other international importers. This option is ideal when your order volume is insufficient to justify booking an entire 20ft or 40ft container.'
        ],
        list: [
          'Advantage: Pay only for the specific cubic meters (CBM) or weight your cargo occupies.',
          'Advantage: High flexibility for small or trial orders without waiting to accumulate full container volume.',
          'Disadvantage: Cargo consolidation at departure and deconsolidation at destination ports can add 5 to 10 days to transit time.',
          'Disadvantage: Increased handling between warehouses raises the potential risk of package scuffing unless crated securely.'
        ]
      },
      {
        heading: '2. What Is FCL Shipping?',
        paragraphs: [
          'FCL stands for Full Container Load. You book an exclusive, dedicated shipping container (typically 20ft, 40ft, or 40ft High Cube) solely for your cargo, regardless of whether you utilize every cubic meter.'
        ],
        list: [
          'Advantage: Maximum security—your container is loaded and sealed at the factory in China and remains untouched until arrival.',
          'Advantage: Faster transit times by bypassing consolidation freight stations.',
          'Advantage: Significantly lower freight cost per unit when shipping medium to large volumes.',
          'Disadvantage: Flat container rate is payable regardless of vacant volume inside.'
        ]
      },
      {
        heading: '3. LCL vs FCL: Direct Comparison',
        paragraphs: [
          'Here is a quick side-by-side comparison of key logistics factors:'
        ],
        table: {
          headers: ['Logistics Feature', 'LCL (Shared Container)', 'FCL (Full Container)'],
          rows: [
            ['Container Space', 'Shared with other shippers', 'Exclusive dedicated container'],
            ['Best For', 'Small shipments (1 – 15 CBM)', 'Volume orders (> 15 – 20 CBM)'],
            ['Pricing Model', 'Per Cubic Meter (CBM) or Ton', 'Flat rate per container size'],
            ['Cargo Handling', 'Multiple transfers (CFS warehouses)', 'Direct loading and factory sealing'],
            ['Transit Time', 'Slower (consolidation overhead)', 'Fastest direct ocean route'],
            ['Cargo Security', 'Requires heavy-duty wooden crating', 'Lowest risk of handling damage']
          ]
        }
      },
      {
        heading: '4. Which Shipping Method Should You Choose?',
        paragraphs: [
          'Select LCL when shipping small quantities, testing newly sourced products, or managing smaller inventory replenishments.',
          'Select FCL when shipping complete residential architectural packages (doors, windows, and cabinetry), bulk commercial orders, or when scheduling and cargo integrity are critical.',
          'Crucial Advice: Always evaluate the complete landed cost rather than ocean freight quotes alone. CFS destination charges, customs clearance, duties, and drayage determine your true bottom line.'
        ],
        callout: 'Rule of thumb: If your shipment exceeds 15 CBM, booking a 20ft FCL container is frequently more economical and secure than LCL.'
      },
      {
        heading: '5. Ship Smarter with EITCO Ltd',
        paragraphs: [
          'Selecting between LCL and FCL is just one component of a successful import. EITCO Ltd manages supplier coordination, cargo collection, crating inspections, export customs clearance, and global ocean freight booking.',
          'Whether you need three pallets shipped LCL or multiple 40ft High Cube containers shipped FCL, our team guarantees competitive rates and professional logistics management.'
        ]
      }
    ],
    sectionsAr: [
      {
        paragraphs: [
          'عند استيراد البضائع أو المواد المعمارية من الصين، فإن اختيار طريقة الشحن البحري الصحيحة يحدث فرقاً كبيراً في ميزانيتك، ومواعيد وصول الشحنة، وكفاءة عملياتك التجارية.',
          'ينقسم الشحن البحري بشكل أساسي إلى نوعين: الشحن الجزئي LCL (أقل من حمولة حاوية) والشحن بالحاوية الكاملة FCL. يساعدك فهم الفروق الجوهرية على اتخاذ القرار الأوفر والأكثر أماناً لمشروعك.'
        ]
      },
      {
        heading: '1. ما هو الشحن الجزئي (LCL)؟',
        paragraphs: [
          'المقصود بالشحن الجزئي (Less than Container Load) هو أن بضاعتك تشترك في نفس الحاوية مع بضائع لمستوردين آخرين. هذا الخيار مثالي للطلبات التي لا تكفي لملء حاوية كاملة سعة 20 أو 40 قدماً.'
        ],
        list: [
          'الميزة: تدفع فقط مقابل حجم البضاعة الفعلي بالمتر المكعب (CBM) أو الوزن.',
          'الميزة: مرونة عالية للطلبات الصغيرة أو تجربة منتجات جديدة دون الحاجة للانتظار حتى تجمع كميات كبيرة.',
          'العيوب: قد يستغرق وقتاً أطول بسبب عمليات التجميع في ميناء المغادرة وفرز الشحنات في ميناء الوصول.',
          'العيوب: تكرار تداول البضاعة بين المستودعات يتطلب تغليفاً خشبياً صلباً لحمايتها من الخدوش.'
        ]
      },
      {
        heading: '2. ما هو الشحن بالحاوية الكاملة (FCL)؟',
        paragraphs: [
          'المقصود بالحاوية الكاملة (Full Container Load) هو حجز حاوية شحن كاملة مخصصة لبضاعتك فقط (عادة حاوية 20 قدماً أو 40 قدماً أو 40 قدماً هاي كيوب High Cube)، سواء شغلت مساحتها كاملة أم لا.'
        ],
        list: [
          'الميزة: أقصى درجات الأمان؛ يتم تحميل الحاوية وإغلاقها بقفل جمركي محكم في المصنع ولا تفتح إلا عند وصولها لمستودعك.',
          'الميزة: وصول أسرع لتجنب تأخيرات مستودعات التجميع والفرز.',
          'الميزة: تكلفة شحن أقل لكل وحدة عند شحن كميات متوسطة إلى كبيرة.',
          'العيوب: دفع تكلفة الحاوية بالكامل حتى لو لم تستغل كل مساحتها الداخلية.'
        ]
      },
      {
        heading: '3. مقارنة مباشرة بين الشحن الجزئي والحاوية الكاملة',
        paragraphs: [
          'مقارنة عملية سريعة لأهم الجوانب اللوجستية:'
        ],
        table: {
          headers: ['الميزة اللوجستية', 'الشحن الجزئي (LCL)', 'الحاوية الكاملة (FCL)'],
          rows: [
            ['مساحة الحاوية', 'مشتركة مع مستوردين آخرين', 'حاوية خاصة ومخصصة لبضاعتك فقط'],
            ['الحجم الأنسب', 'الشحنات الصغيرة (1 إلى 15 متر مكعب)', 'الشحنات المتوسطة والكبيرة (أكثر من 15-20 CBM)'],
            ['طريقة حساب السعر', 'حسب المتر المكعب (CBM) أو الطن', 'سعر ثابت للحاوية بالكامل'],
            ['تداول ومناولة البضاعة', 'تداول متكرر في مستودعات التجميع', 'تحميل مباشر من المصنع وإغلاق محكم'],
            ['زمن العبور والوصول', 'أطول نسبياً (بسبب التجميع والتفريغ)', 'أسرع مسار بحري مباشر'],
            ['أمان الشحنة', 'تتطلب صناديق خشبية قوية مدعمة', 'أقل عرضة لمخاطر التداول والمناولة']
          ]
        }
      },
      {
        heading: '4. أي وسيلة شحن تختار لمشروعك؟',
        paragraphs: [
          'اختر الشحن الجزئي (LCL) عند استيراد كميات محدودة أو تجربة منتج جديد أو عند شحن قطع غيار وإكسسوارات إضافية.',
          'اختر الحاوية الكاملة (FCL) عند توريد مواد بناء متكاملة لفيلا أو مبنى (أبواب، نوافذ، مطابخ، رخام) أو عند شحن طلبيات كبيرة تتطلب أقصى درجات الأمان والانضباط في مواعيد الوصول.',
          'نصيحة ذهبية: احسب دائماً التكلفة الإجمالية الواصلة (Landed Cost) وليس نولون البحر فقط؛ فرسوم التفريغ بالموانئ والجمارك والنقل الداخلي تؤثر في التكلفة النهائية.'
        ],
        callout: 'قاعدة عملية: إذا تجاوز حجم شحنتك 15 متراً مكعباً، فإن حجز حاوية كاملة 20 قدماً يكون غالباً أوفر وأكثر أماناً من الشحن الجزئي.'
      },
      {
        heading: '5. حلول شحن بحري ذكية واقتصادية مع إيتكو (EITCO Ltd)',
        paragraphs: [
          'فريق شركة إيتكو يتولى التنسيق الكامل مع المصانع الصينية، وفحص جودة الصناديق الخشبية، واستخراج مستندات التصدير، وحجز مساحات الشحن بأفضل الأسعار التنافسية مع خطوط الملاحة العالمية.'
        ]
      }
    ]
  }
];

export function getArticle(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}
