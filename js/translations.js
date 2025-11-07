/**
 * Learncation - Translations
 * Multi-language support for the website
 */

const translations = {
    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About",
        nav_programs: "Programs",
        nav_why_us: "Why Us",
        nav_faq: "FAQ",
        nav_book: "Book Now",

        // Hero
        hero_title: "Learn English. Explore the World",
        hero_subtitle: "Starting in Hong Kong and online!",
        hero_cta_primary: "Explore Programs",
        hero_cta_secondary: "Book a Free Trial",

        // About
        about_title: "Welcome to Learncation",
        about_intro: "Where language learning meets adventure! We combine English education with exciting experiences in Hong Kong and online.",

        // Programs
        programs_title: "Our Programs",
        program_hk_title: "Hong Kong Summer Camp",
        program_hk_duration: "2-4 weeks",
        program_hk_age: "Ages 8-16",
        program_hk_description: "Immersive English learning combined with exciting Hong Kong adventures. Students improve their English while experiencing the vibrant culture of one of Asia's most dynamic cities.",
        program_hk_features: [
            "Full English immersion environment",
            "Cultural excursions around Hong Kong",
            "Small class sizes (max 12 students)",
            "Qualified native English teachers",
            "Fun, interactive lessons",
            "Daily activities and workshops"
        ],

        program_online_title: "Online English Classes",
        program_online_duration: "Flexible scheduling",
        program_online_age: "Ages 6-16",
        program_online_description: "Interactive online English classes with experienced teachers. Learn from anywhere with our engaging virtual classroom that brings the Learncation experience to your home.",
        program_online_features: [
            "Live interactive sessions",
            "Small group classes (max 8 students)",
            "Personalized learning paths",
            "Regular progress reports",
            "Fun games and activities",
            "Flexible scheduling options"
        ],

        // Why Us
        why_us_title: "Why Choose",
        why_us_highlight: "Learncation?",
        feature_speaking_title: "Confidence in Speaking",
        feature_speaking_desc: "Build fluency through real conversations and interactive activities",
        feature_culture_title: "Cultural Experience",
        feature_culture_desc: "Experience Hong Kong culture while practicing English in authentic settings",
        feature_teachers_title: "Native Teachers",
        feature_teachers_desc: "Learn from experienced native English speakers who make lessons fun and engaging",
        feature_interactive_title: "Interactive Learning",
        feature_interactive_desc: "Games, activities, and hands-on experiences that make English learning exciting",
        feature_groups_title: "Small Groups",
        feature_groups_desc: "Maximum 8-12 students per class for personalized attention and practice",
        feature_results_title: "Proven Results",
        feature_results_desc: "Measurable improvement in speaking, listening, and confidence after each program",

        // Programs (actual page content)
        programs_page_title: "Our Products",
        program_hk_page_title: "🏝️ Hong Kong English Adventure",
        program_hk_page_desc: "Explore Victoria Harbor & cultural landmarks",
        program_hk_feature_1: "✓ Explore Victoria Harbor & cultural landmarks",
        program_hk_feature_2: "✓ Team-building games in English",
        program_hk_feature_3: "✓ Local food adventures & storytelling",
        program_hk_feature_4: "✓ Ages 7-14 | 5-day immersive experience",

        program_online_page_title: "💻 Online English Bootcamp",
        program_online_page_desc: "Interactive online classes from anywhere",
        program_online_feature_1: "✓ Live classes with native English teachers",
        program_online_feature_2: "✓ Fun activities, games & storytelling",
        program_online_feature_3: "✓ Small groups for personalized attention",
        program_online_feature_4: "✓ Flexible schedules | Join from home",

        // Testimonials
        testimonials_title: "What Parents Say",
        testimonial_1_text: "My daughter attended the summer program and came back speaking English with so much more confidence. The teachers were excellent and she made friends from all over the world!",
        testimonial_1_name: "Sarah L.",
        testimonial_1_location: "Hong Kong",
        testimonial_2_text: "A fantastic experience! The program was well-organized, safe, and most importantly, my son had a great time while improving his English significantly.",
        testimonial_2_name: "James M.",
        testimonial_2_location: "Lagos, Nigeria",
        testimonial_3_text: "The perfect balance of education and fun. My children have attended three times now and always want to go back. Highly recommended!",
        testimonial_3_name: "Li Wei",
        testimonial_3_location: "Shanghai, China",

        // Book Now
        book_title: "Ready to Start Your Adventure?",
        book_intro: "Join us for an unforgettable English learning experience!",
        book_hk_title: "🏝️ Hong Kong Adventure",
        book_hk_desc: "5-day immersive experience in Hong Kong",
        book_hk_button: "Book Hong Kong Camp",
        book_online_title: "💻 Online Bootcamp",
        book_online_desc: "Join from anywhere in the world",
        book_online_button: "Book Online Class",
        book_info_title: "What Happens Next?",
        book_step_1: "Fill out the contact form below",
        book_step_2: "We'll reach out within 24 hours",
        book_step_3: "Schedule a FREE consultation call",
        book_step_4: "Choose your program and dates",
        book_step_5: "Start your learning adventure!",

        // FAQ
        faq_title: "Frequently Asked Questions",
        faq_q1: "What age groups do you accept?",
        faq_a1: "We accept children aged 8-17 years. Programs are divided into age-appropriate groups to ensure optimal learning and social experiences.",
        faq_q2: "What is the teacher-to-student ratio?",
        faq_a2: "We maintain a maximum ratio of 1 teacher to 12 students in classes, and 1 supervisor to 8 students during activities, ensuring personalized attention and safety.",
        faq_q3: "What English level is required?",
        faq_a3: "We welcome children of all English levels, from beginners to advanced. We conduct placement assessments to ensure each child is in the appropriate class.",
        faq_q4: "Where are the programs held?",
        faq_a4: "Our programs are held in Belgium, in a safe and beautiful location with modern facilities and easy access to cultural sites.",
        faq_q5: "What is included in the program fee?",
        faq_a5: "The fee includes English lessons, accommodation, all meals, activities, excursions, supervision, and course materials. Airport transfers can be arranged for an additional fee.",
        faq_q6: "How do I enroll my child?",
        faq_a6: "Complete the inquiry form below and we'll contact you with detailed information about available programs and the enrollment process.",

        // About
        about_page_title: "About Learncation",
        about_heading: "Where Learning Meets Adventure",
        about_p1: "Learncation combines Learn + Vacation to create unforgettable English learning experiences for young learners across Asia.",
        about_p2: "Our Hong Kong-based immersive camps let kids practice English through cultural tours, teamwork activities, and exciting games in one of Asia's most vibrant cities.",
        about_p3: "Can't travel? Join our fun online bootcamps with live, interactive lessons led by engaging native English teachers from anywhere in the world!",

        // Contact
        contact_title: "Get in Touch",
        contact_intro: "Have questions or ready to enroll? We're here to help!",
        contact_info_title: "Contact Information",
        contact_form_title: "Send us a Message",
        contact_email: "Email:",
        contact_phone: "Phone:",
        contact_address: "Address:",

        // Common
        learn_more: "Learn More",
        start_now: "Start Now",
        book_now: "Book Now",
        contact_us: "Contact Us"
    },

    "zh-CN": {
        // Navigation
        nav_home: "首页",
        nav_about: "关于我们",
        nav_programs: "课程项目",
        nav_why_us: "为什么选择我们",
        nav_faq: "常见问题",
        nav_book: "立即预订",

        // Hero
        hero_title: "学英语·探世界",
        hero_subtitle: "从香港和在线课程开始！",
        hero_cta_primary: "探索课程",
        hero_cta_secondary: "预订免费试课",

        // About
        about_title: "欢迎来到Learncation",
        about_intro: "语言学习与冒险相遇！我们将英语教育与香港和在线的精彩体验相结合。",

        // Programs
        programs_title: "我们的课程",
        program_hk_title: "香港夏令营",
        program_hk_duration: "2-4周",
        program_hk_age: "8-16岁",
        program_hk_description: "沉浸式英语学习结合精彩的香港冒险。学生在体验亚洲最具活力城市之一的文化的同时提高英语水平。",
        program_hk_features: [
            "全英语沉浸式环境",
            "香港文化游览",
            "小班教学（最多12名学生）",
            "合格的英语母语教师",
            "有趣的互动课程",
            "每日活动和工作坊"
        ],

        program_online_title: "在线英语课程",
        program_online_duration: "灵活安排",
        program_online_age: "6-16岁",
        program_online_description: "与经验丰富的教师进行互动在线英语课程。在任何地方学习，我们引人入胜的虚拟教室将Learncation体验带到您的家中。",
        program_online_features: [
            "实时互动课程",
            "小组课程（最多8名学生）",
            "个性化学习路径",
            "定期进度报告",
            "有趣的游戏和活动",
            "灵活的时间安排"
        ],

        // Why Us
        why_us_title: "为什么选择",
        why_us_highlight: "Learncation？",
        feature_speaking_title: "口语自信",
        feature_speaking_desc: "通过真实对话和互动活动建立流利度",
        feature_culture_title: "文化体验",
        feature_culture_desc: "在真实环境中体验香港文化的同时练习英语",
        feature_teachers_title: "母语教师",
        feature_teachers_desc: "向经验丰富的英语母语人士学习，他们让课程充满乐趣和参与感",
        feature_interactive_title: "互动学习",
        feature_interactive_desc: "游戏、活动和实践经验让英语学习变得令人兴奋",
        feature_groups_title: "小班授课",
        feature_groups_desc: "每班最多8-12名学生，获得个性化关注和练习",
        feature_results_title: "经验证的成果",
        feature_results_desc: "每个课程后在口语、听力和自信心方面都有可衡量的提高",

        // Programs (actual page content)
        programs_page_title: "我们的产品",
        program_hk_page_title: "🏝️ 香港英语冒险",
        program_hk_page_desc: "探索维多利亚港和文化地标",
        program_hk_feature_1: "✓ 探索维多利亚港和文化地标",
        program_hk_feature_2: "✓ 英语团队建设游戏",
        program_hk_feature_3: "✓ 本地美食冒险和讲故事",
        program_hk_feature_4: "✓ 7-14岁 | 5天沉浸式体验",

        program_online_page_title: "💻 在线英语训练营",
        program_online_page_desc: "随时随地进行互动在线课程",
        program_online_feature_1: "✓ 与英语母语教师进行现场课程",
        program_online_feature_2: "✓ 有趣的活动、游戏和讲故事",
        program_online_feature_3: "✓ 小组个性化关注",
        program_online_feature_4: "✓ 灵活的时间表 | 在家参加",

        // Testimonials
        testimonials_title: "家长评价",
        testimonial_1_text: "我的女儿参加了暑期项目，回来后说英语时自信心大大增强。老师非常优秀，她结交了来自世界各地的朋友！",
        testimonial_1_name: "Sarah L.",
        testimonial_1_location: "香港",
        testimonial_2_text: "很棒的体验！该项目组织良好、安全，最重要的是，我儿子玩得很开心，同时英语水平显著提高。",
        testimonial_2_name: "James M.",
        testimonial_2_location: "尼日利亚拉各斯",
        testimonial_3_text: "教育和乐趣的完美平衡。我的孩子们已经参加了三次，总是想再回去。强烈推荐！",
        testimonial_3_name: "李伟",
        testimonial_3_location: "中国上海",

        // Book Now
        book_title: "准备开始您的冒险了吗？",
        book_intro: "加入我们，享受难忘的英语学习体验！",
        book_hk_title: "🏝️ 香港冒险",
        book_hk_desc: "香港5天沉浸式体验",
        book_hk_button: "预订香港夏令营",
        book_online_title: "💻 在线训练营",
        book_online_desc: "在世界任何地方参加",
        book_online_button: "预订在线课程",
        book_info_title: "接下来会发生什么？",
        book_step_1: "填写下面的联系表格",
        book_step_2: "我们将在24小时内与您联系",
        book_step_3: "安排免费咨询电话",
        book_step_4: "选择您的课程和日期",
        book_step_5: "开始您的学习冒险！",

        // FAQ
        faq_title: "常见问题",
        faq_q1: "你们接受哪些年龄段？",
        faq_a1: "我们接受8-17岁的儿童。课程按年龄分组，以确保最佳的学习和社交体验。",
        faq_q2: "师生比例是多少？",
        faq_a2: "我们在课堂上保持最多1名教师对12名学生的比例，在活动期间保持1名监督员对8名学生的比例，确保个性化关注和安全。",
        faq_q3: "需要什么英语水平？",
        faq_a3: "我们欢迎所有英语水平的儿童，从初学者到高级。我们进行分级评估，以确保每个孩子都在适当的班级中。",
        faq_q4: "课程在哪里举行？",
        faq_a4: "我们的课程在比利时举行，在一个安全而美丽的地方，拥有现代化的设施和便捷的文化景点。",
        faq_q5: "课程费用包括什么？",
        faq_a5: "费用包括英语课程、住宿、所有餐食、活动、游览、监督和课程材料。机场接送可额外安排。",
        faq_q6: "我如何为孩子报名？",
        faq_a6: "填写下面的查询表格，我们将与您联系，提供有关可用课程和注册流程的详细信息。",

        // About
        about_page_title: "关于Learncation",
        about_heading: "学习与冒险相遇的地方",
        about_p1: "Learncation将学习+假期结合起来，为亚洲的年轻学习者创造难忘的英语学习体验。",
        about_p2: "我们在香港的沉浸式夏令营让孩子们通过文化游览、团队活动和刺激的游戏在亚洲最具活力的城市之一练习英语。",
        about_p3: "不能旅行？加入我们有趣的在线训练营，由经验丰富的英语母语教师主持的现场互动课程，您可以在世界任何地方参加！",

        // Contact
        contact_title: "联系我们",
        contact_intro: "有疑问或准备报名？我们随时为您提供帮助！",
        contact_info_title: "联系信息",
        contact_form_title: "给我们留言",
        contact_email: "电子邮件：",
        contact_phone: "电话：",
        contact_address: "地址：",

        // Common
        learn_more: "了解更多",
        start_now: "立即开始",
        book_now: "立即预订",
        contact_us: "联系我们"
    },

    ja: {
        // Navigation
        nav_home: "ホーム",
        nav_about: "私たちについて",
        nav_programs: "プログラム",
        nav_why_us: "選ばれる理由",
        nav_faq: "よくある質問",
        nav_book: "今すぐ予約",

        // Hero
        hero_title: "英語を学ぶ・世界を探検",
        hero_subtitle: "香港とオンラインから始めよう！",
        hero_cta_primary: "プログラムを見る",
        hero_cta_secondary: "無料体験を予約",

        // About
        about_title: "Learncationへようこそ",
        about_intro: "語学学習と冒険が出会う場所！香港とオンラインでの刺激的な体験と英語教育を組み合わせています。",

        // Programs
        programs_title: "プログラム",
        program_hk_title: "香港サマーキャンプ",
        program_hk_duration: "2～4週間",
        program_hk_age: "8～16歳",
        program_hk_description: "没入型の英語学習と香港での刺激的な冒険を組み合わせています。アジアで最もダイナミックな都市の一つの活気ある文化を体験しながら、英語力を向上させます。",
        program_hk_features: [
            "完全英語イマージョン環境",
            "香港周辺の文化遠足",
            "少人数クラス（最大12名）",
            "資格を持つネイティブ英語教師",
            "楽しいインタラクティブなレッスン",
            "毎日のアクティビティとワークショップ"
        ],

        program_online_title: "オンライン英語クラス",
        program_online_duration: "柔軟なスケジュール",
        program_online_age: "6～16歳",
        program_online_description: "経験豊富な教師によるインタラクティブなオンライン英語クラス。魅力的なバーチャル教室で、どこからでもLearncation体験を学べます。",
        program_online_features: [
            "ライブインタラクティブセッション",
            "少人数グループクラス（最大8名）",
            "パーソナライズされた学習パス",
            "定期的な進捗レポート",
            "楽しいゲームとアクティビティ",
            "柔軟なスケジュールオプション"
        ],

        // Why Us
        why_us_title: "なぜ",
        why_us_highlight: "Learncation？",
        feature_speaking_title: "スピーキングの自信",
        feature_speaking_desc: "実際の会話とインタラクティブな活動を通じて流暢さを構築",
        feature_culture_title: "文化体験",
        feature_culture_desc: "本物の環境で英語を練習しながら香港文化を体験",
        feature_teachers_title: "ネイティブ教師",
        feature_teachers_desc: "レッスンを楽しく魅力的にする経験豊富なネイティブスピーカーから学ぶ",
        feature_interactive_title: "インタラクティブ学習",
        feature_interactive_desc: "英語学習をエキサイティングにするゲーム、アクティビティ、実践的な体験",
        feature_groups_title: "少人数グループ",
        feature_groups_desc: "クラスあたり最大8〜12名で個別の注意と練習",
        feature_results_title: "実証済みの結果",
        feature_results_desc: "各プログラム後のスピーキング、リスニング、自信の測定可能な向上",

        // Testimonials
        testimonials_title: "保護者の声",

        // FAQ
        faq_title: "よくある質問",

        // Book Now
        book_title: "始める準備はできましたか？",
        book_hk_title: "香港キャンプ",
        book_hk_desc: "香港での夏の冒険に参加",
        book_online_title: "オンラインクラス",
        book_online_desc: "世界のどこからでも英語を学ぶ",
        book_info_title: "予約方法",

        // Contact
        contact_title: "お問い合わせ",

        // Common
        learn_more: "詳細を見る",
        book_now: "今すぐ予約",
        contact_us: "お問い合わせ"
    },

    ko: {
        // Navigation
        nav_home: "홈",
        nav_about: "소개",
        nav_programs: "프로그램",
        nav_why_us: "선택 이유",
        nav_faq: "자주 묻는 질문",
        nav_book: "지금 예약",

        // Hero
        hero_title: "영어를 배우고 세계를 탐험하세요",
        hero_subtitle: "홍콩과 온라인에서 시작하세요!",
        hero_cta_primary: "프로그램 탐색",
        hero_cta_secondary: "무료 체험 예약",

        // About
        about_title: "Learncation에 오신 것을 환영합니다",
        about_intro: "언어 학습이 모험과 만나는 곳! 홍콩과 온라인에서 영어 교육과 흥미진진한 경험을 결합합니다.",

        // Programs
        programs_title: "프로그램",
        program_hk_title: "홍콩 여름 캠프",
        program_hk_duration: "2-4주",
        program_hk_age: "8-16세",
        program_hk_description: "몰입형 영어 학습과 흥미진진한 홍콩 모험을 결합합니다. 학생들은 아시아에서 가장 역동적인 도시 중 하나의 활기찬 문화를 경험하면서 영어를 향상시킵니다.",
        program_hk_features: [
            "완전한 영어 몰입 환경",
            "홍콩 주변 문화 체험",
            "소규모 수업 (최대 12명)",
            "자격을 갖춘 원어민 영어 교사",
            "재미있고 상호작용적인 수업",
            "매일 활동 및 워크샵"
        ],

        program_online_title: "온라인 영어 수업",
        program_online_duration: "유연한 일정",
        program_online_age: "6-16세",
        program_online_description: "경험 많은 교사와 함께하는 상호작용 온라인 영어 수업. 매력적인 가상 교실로 어디서나 Learncation 경험을 학습하세요.",
        program_online_features: [
            "실시간 상호작용 세션",
            "소그룹 수업 (최대 8명)",
            "맞춤형 학습 경로",
            "정기적인 진도 보고서",
            "재미있는 게임 및 활동",
            "유연한 일정 옵션"
        ],

        // Why Us
        why_us_title: "왜",
        why_us_highlight: "Learncation인가요?",
        feature_speaking_title: "말하기 자신감",
        feature_speaking_desc: "실제 대화와 상호작용 활동을 통해 유창성 구축",
        feature_culture_title: "문화 경험",
        feature_culture_desc: "진정한 환경에서 영어를 연습하면서 홍콩 문화를 경험",
        feature_teachers_title: "원어민 교사",
        feature_teachers_desc: "수업을 재미있고 매력적으로 만드는 경험 많은 원어민으로부터 배우기",
        feature_interactive_title: "상호작용 학습",
        feature_interactive_desc: "영어 학습을 흥미진진하게 만드는 게임, 활동 및 실습 경험",
        feature_groups_title: "소규모 그룹",
        feature_groups_desc: "수업당 최대 8-12명으로 개인화된 관심과 연습",
        feature_results_title: "입증된 결과",
        feature_results_desc: "각 프로그램 후 말하기, 듣기 및 자신감의 측정 가능한 향상",

        // Testimonials
        testimonials_title: "학부모님들의 말씀",

        // FAQ
        faq_title: "자주 묻는 질문",

        // Book Now
        book_title: "시작할 준비가 되셨나요?",
        book_hk_title: "홍콩 캠프",
        book_hk_desc: "홍콩에서의 여름 모험에 참여하세요",
        book_online_title: "온라인 수업",
        book_online_desc: "세계 어디서나 영어를 배우세요",
        book_info_title: "예약 방법",

        // Contact
        contact_title: "문의하기",

        // Common
        learn_more: "자세히 보기",
        book_now: "지금 예약",
        contact_us: "문의하기"
    },

    // For the other languages (ms, th, vi), I'll add basic translations
    // You can expand these as needed

    ms: {
        nav_home: "Laman Utama",
        nav_about: "Tentang Kami",
        nav_programs: "Program",
        nav_why_us: "Mengapa Kami",
        nav_faq: "Soalan Lazim",
        nav_book: "Tempah Sekarang",
        hero_title: "Belajar Bahasa Inggeris. Terokai Dunia",
        hero_subtitle: "Bermula di Hong Kong dan dalam talian!",
        hero_cta_primary: "Terokai Program",
        hero_cta_secondary: "Tempah Percubaan Percuma",
        why_us_title: "Mengapa Pilih",
        why_us_highlight: "Learncation?",
        programs_title: "Program Kami",
        testimonials_title: "Apa Kata Ibu Bapa",
        faq_title: "Soalan Lazim",
        book_title: "Bersedia untuk Mula?",
        contact_title: "Hubungi Kami"
    },

    th: {
        nav_home: "หน้าแรก",
        nav_about: "เกี่ยวกับเรา",
        nav_programs: "โปรแกรม",
        nav_why_us: "ทำไมต้องเรา",
        nav_faq: "คำถามที่พบบ่อย",
        nav_book: "จองเลย",
        hero_title: "เรียนภาษาอังกฤษ สำรวจโลก",
        hero_subtitle: "เริ่มต้นที่ฮ่องกงและออนไลน์!",
        hero_cta_primary: "สำรวจโปรแกรม",
        hero_cta_secondary: "จองทดลองฟรี",
        why_us_title: "ทำไมต้องเลือก",
        why_us_highlight: "Learncation?",
        programs_title: "โปรแกรมของเรา",
        testimonials_title: "ผู้ปกครองพูดว่า",
        faq_title: "คำถามที่พบบ่อย",
        book_title: "พร้อมที่จะเริ่มต้น?",
        contact_title: "ติดต่อเรา"
    },

    vi: {
        nav_home: "Trang chủ",
        nav_about: "Giới thiệu",
        nav_programs: "Chương trình",
        nav_why_us: "Tại sao chọn chúng tôi",
        nav_faq: "Câu hỏi thường gặp",
        nav_book: "Đặt ngay",
        hero_title: "Học tiếng Anh. Khám phá thế giới",
        hero_subtitle: "Bắt đầu tại Hồng Kông và trực tuyến!",
        hero_cta_primary: "Khám phá chương trình",
        hero_cta_secondary: "Đặt buổi học thử miễn phí",
        why_us_title: "Tại sao chọn",
        why_us_highlight: "Learncation?",
        programs_title: "Chương trình của chúng tôi",
        testimonials_title: "Phụ huynh nói gì",
        faq_title: "Câu hỏi thường gặp",
        book_title: "Sẵn sàng bắt đầu?",
        contact_title: "Liên hệ"
    }
};
