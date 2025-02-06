import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { years_webex } from '../data';
import { dotIcon } from '../iconFolder/icon';

i18n.use(initReactI18next).init({
   resources: {
      en: {
         translation: {
            // ==========================reg_and_log=============================
            reg_and_log: [
               'Course Registration',
               'Login profile',
               'Name Surname',
               'E-mail: address',
               'Phone',
               'Password',
               'Confirm password',
               'Already have a profile? ',
               'Dont have a profile yet? ',
               'Sign in',
               'Register',
               'Registration for the first course',
               'Course',
               'The first lesson with us is free',
               'I forgot my password',
               'Restore',
               'Reset password',
               'Send',
               'Change password',
            ],

            //====================== reg and log buttons===========================
            reg_log: ['Sign in', 'Register', 'Confirm', 'Send'],

            // ====================toolsInfo========================================

            toolsInfo: [
               `More than ${years_webex} years in the market`,
               'Student',
               'Project',
               'Websites 1000+',
               'Supported Projects 500+',
               'Programming Languages 30',
               'month',
               'date',
            ],

            // ===============ourAdvantages========================

            ourAdvantagesTitle: 'Our advantages',

            ourAdvantagesItemTitle: [
               'Development of web applications',
               'Web programming training',
               'Mobile applications',
               'Individual courses',
               'Site promotion',
               'Online Courses',
               'Application (game) development with Unity',
               'Job placement support',
               'Development and implementation of CRM systems',
               'Development and implementation of ERP systems',
               'Security systems'
            ],

            ourAdvantagesItemTxt: [
               'Adaptability. Principles of clean code. Implementation Strategy. We make websites fast and reliable. We ensure the optimal performance of the tasks set before us.',
               'The practical programmer conducts the course. The course is prepared individually. Training videos have been created based on our knowledge base. The course can be conducted online.',
               'We offer a wide range of mobile app development services. Product development, design, testing, and support.',
               'Webex Technologies offers an opportunity to purchase an individual web programming course. In which the student, together with the teachers, chooses an appropriate teaching method and action plan for the task.',
               'Website Promotion - Transparency of actions at any stage of website promotion. You receive regular reports and are fully informed about the work being done. Preliminary approval of all stages of work, all site promotion and optimization activities are carried out.',
               'Online training at Webex Technologies caters to all requirements and focuses on imparting practical and theoretical knowledge:',
               'Application (Game) Development in Unity - We offer professional full-cycle Unity development services for various industries. Our team has deep knowledge and experience in game development, web, desktop, mobile, and cross-platform applications using all the benefits and tools of Unity.',
               'Top students who complete their studies at Webex Technologies get an opportunity to intern at the company. Based on the results of the internship, Webex Technologies provides jobs.',
               'Automation of order fulfillment and transactions with status tracking for each specific product; simplifying the flow of documents, due to the automatic creation of contracts, acts, and invoices; maintaining a unified customer database with detailed information about each contact and interaction history.',
               'With the help of the ERP system, there is no need to create several individual information systems, with the help of which the automation of each of the routes is carried out, followed by establishing the connection between these systems.',
               'We implement various access security system solutions, devices and equipment.'
            ],
            // ===================nav-menu=================================
            navMenu: [
               'Courses',
               'Programming',
               'Our Projects',
               'About us',
               'Feedback',
               'Home Page',
               'Projects',
               'News',
               'Application Development',
               'Site Promotion',
               'Service and Support',
               'Development of 3D modeling',
               'Mobile Application Development',
               'Making Games',
               'E-mail',
               'Phone',
               'Web development courses',
               'Turnstiles'
            ],
            // =======================buttons=========================
            button: [
               'Courses',
               'Register',
               'To order',
               'Online',
               'Offline',
               'Perform',
               'Ok',
               'Register for the Course',
               'Order Project',
               'Demo',
               'See more',
               'Order website',
               'Free Consultation'
            ],
            // =============header==================================
            headerTitlePart1: 'With our professional team, you can.',
            headerTitlePart2:
               'Order web systems with complex software solutions. - Order mechanical, automatic or optical turnstiles. - Order multifunctional CRM / ERP systems. - Order hardware programming works. - Order mobile systems with complex software solutions (iOS, Android).   - Order complex 3D models.  - Learning the web interface | web backend / Unity / JAVA programming. - improve your knowledge in the field of frontend/server programming․',

            // ===========================webexInfo==================
            webexInfo: [
               'About us',

               'Webex Technologies was founded in 2007 on November 21. Over the years, the company has implemented a large number of projects. Qualitatively and thoroughly approaches the process of creating new products. Webex Technologies works only with new and modern technologies, which in turn are regularly updated according to market requirements. The company was founded in Yerevan and cooperates with international partners all over the world. All projects implemented at Webex Technologies meet international IT standards.',
               ' Webex Technologie offers programming courses. The company focuses on quality education of students with an emphasis on practical knowledge. Webex Technologies has developed its training program based on many years of experience. Most Webex Technologies students find jobs in the IT industry. After completing the course, the best students are given a certificate, which gives them advantages when looking for a job. Webex Technologies welcomes new partners.',
            ],

            // ===========================createWebsitesAndMobileApp=============================
            createWebsitesAndMobileApp: 'Creation of websites, mobile applications, 3D models and creation of access security systems',
            createWebsitesAndMobileAppTitle: [
               'Creating a web applications',
               'Mobile applications',
               'Creating games and Unity',
               '3D modeling',
               'Preparation of CRM systems',
               'Entry systems'
            ],

            createWebsitesAndMobileAppTxt: [
               'Creation of websites from scratch - Webex Technologies company develops websites from scratch, participating in all stages of their creation. In other words, the client expresses his goals and wishes about the design and interface, and we develop the required website based on them.',
               'Creating mobile applications for IOS and Android - "Webex Technologies" is an Armenian mobile application development company with many years of experience in the field of mobile technologies and platforms. We offer a wide range of mobile application development services in the market of Armenia and other countries. The company provides IT consulting, development, design, testing, and technical support.',
               'Advantages of applications created by Webex Technologies with Unity - Our company is an experienced and reliable partner in developing solutions using Unity. We have been creating effective and reliable applications for customers all over the world for years. Using Unity technologies, we successfully solve problems in such fields as online commerce, gaming, healthcare, education, advertising, etc. If you want to discuss the details of the project, please contact us.',
               'Three-dimensional modeling or 3D modeling is the creation of three-dimensional images of any objects or objects. For this purpose, specialists use special computer programs, so-called 3D programs. With their help, geometric projects are transformed into three-dimensional images. The appeal of 3D modeling lies in the almost unlimited possibilities of the technology. Using 3D graphics, you can create a model of any real or imaginary building, static object, or phenomenon.',
               'Development and implementation of the CRM system are most in demand in situations where there is a qualitative leap in business and company management. That is the number of communications (sales, transactions) as well as business contacts (phone calls, e-mails, SMS notifications) during the day. that the manager performs in a month exceeds the threshold of working memory available to a person, in this case, the resources that the staff spends on documents and Excel spreadsheets. These functions can be transferred to the CRM system: 1. Automating order execution and transaction execution by tracking the status of each specific position; 2. Simplification of document circulation due to the automatic creation of contracts, acts, accounts, and invoices, 3. Maintaining a unified customer database that contains detailed information about each customer and the history of interactions with them; Development and implementation of ERP systems.',
               'Our advanced entry system integrates modern technologies such as RFID (Radio Frequency Identification), QR codes, and facial recognition to provide seamless and secure access control through turnstiles. This system ensures efficient management of entry points in various environments such as office buildings, educational institutions, and public venues.'
            ],

            // ==============services=============================

            servicesTitle: [
               'Websites',
               'Mobile applications',
               '3D modeling',
               'Courses',
               'ERP-system',
               'Access systems',
               'Support',
               'CRM system',
            ],

            servicesCentreDivTitle: 'Services',

            // ==================videoCoursesSection=====================

            videoCoursesSectionTitle: 'Programming learning list',
            videoCoursesSectionTitle_H: 'Programming learning plan',

            videoCoursesSectionTxt: [
               'Free trial lesson. Our future students. You have the opportunity to familiarize yourself with Webex Technologies teaching methods and teachers for free.',
               'Course basic. We offer you basic programming courses at Webex Technologies. You have the opportunity to choose the time, format, and instructor that suits you. To do this, you need to register.',
               'The Advanced Programming Course - Professional Package offers a flexible learning format that includes one-on-one tutoring. Students have access to online resources, assignments, and projects to help them explore selected topics in depth. Students can seek help from experienced teachers to clarify difficult points and provide advice on projects. This course allows students to develop their programming skills at their own pace and receive support from experts in the field.',
               "Individual Premium courseAs part of this course, you will study with a teacher in a cozy classroom or online, receiving all the attention and support of the lecturer-programmer.about having to share the spotlight with other students - our Individual Premium Course will allow you to be the center of attention. Your teacher will be fully focused on you, helping you develop your programming skills in one-on-one lessons. A flexible class schedule will allow you to choose a convenient time for studying, and an individual approach to each student guarantees maximum learning efficiency. Don't miss the opportunity to become a programming professional with our Custom Premium Course!",
            ],

            videoCoursesSectionfeatures: [
               'free',
               'group',
               'partial individual approach',
               'individual approach',
            ],

            VideoCoursesSection_duration: [
               'Duration - 120 minutes',
               'Duration - 960 minutes',
               'Duration - 1440 minutes',
               'Duration - 1440 minutes',
            ],

            VideoCoursesSection_price: "Dram",

            VideoCoursesSection_title: [
               'Trial course',
               'Standart course',
               'Professional course',
               'Premium course',
            ],

            videoCoursesSectionTitleGround: ['React JS', 'Java', 'Laravel', 'Node.JS'],
            videoCoursesSectionTitleCourses: 'Course',
            videoCoursesSectionTitleCourses_month: '6 months',
            videoCoursesSectionTitleCourses_week: '3 days/week',

            // ===============Footer=======================

            footerMenu: [
               'Feedback',
               'E-mail: address',
               'Tel:',
               'Our address:',
               'M. Baghramyan Ave. 79 1/1',
               'Can you follow us',
            ],

            // ==================courseseRegistration==============================

            courseseRegistrationSlideCountLine: ['Duration ', 'minute'],

            validation_reg_log: [
               'This field is required',
               'Write the correct E-mail! address:',
               'Password must contain a number',
               'Password must contain a lowercase letter',
               'Passwords do not match',
               'Write only a number',
               'Password must contain at least 8 characters',
            ],

            resetPasswordModalError_message: 'Something is wrong',

            abouteUs_Header: [
               'About US',
               'Webex Technologies LLC is specialized in creating websites. Most common programming languages that are used at work are, HTML5, CSS3-Flex, Grid, Parallax, Sprites, PHP, JavaScript, ES6, jQuery, Bootstrap, Ajax, React JS, Laravel, OOP/MVS , MySQL etc. WebEx Tech has been working for 20 years.',
            ],

            abouteUS_info_block: [
               'Why is it convenient and effective to cooperate with "WebEx Technologies" center',
               'Transparency of actions at any stage of the website creation. We provide regular reports and ensure full awareness of the work. Individual approach to each client. Careful study of the specifics of the client’s business at the preparatory stage of the creation of the website contributes to obtaining the maximum effect in the shortest possible time. Creating a website is a creative process for us. We not only use well-known and widespread solutions in the development of the website, but also new and unexpected solutions that make the website unique and memorable.When creating websites, we use only licensed (commercial and non-commercial) CMS, modules, components, designs.',
            ],

            abouteUs_training: [
               'Webex technologies / training',
               'Webex Tech, in cooperation with Webex Technologies, conducts individual web, android technology training courses.',
               'Training is conducted by experienced programmers.',
               'Individual courses.',
               'Educational videos are the basis of knowledge.',
               'Training can be done online.',
               'Technology and programming languages research.HTML5, CSS3-Flex, Grid, Parallax, Sprites, PHP, JavaScript, ES8, jQuery, Bootstrap, Ajax, React JS, Laravel, OOP/MVS , MySQL etc.',
               'Reliable partner.',
               'A strong team.',
               'Years of experience.',
               'Webex Technologies LLC is specialized in creating websites. Most common programming languages that are used at work are, HTML5, CSS3-Flex, Grid, Parallax, Sprites, PHP, JavaScript, ES9, jQuery, Bootstrap, Ajax, React JS, Laravel, OOP/MVS , MySQL etc. WebEx Tech has been working for 20 years. People who work with us are grateful for the quality of work we perform. We build successful and inspirational sites. Already have a website? So you need - optimization and promotion of sites, advertising on the Internet, support, and maintenance of sites. We create internet solutions for our clients that will make the project development simple and functional.',
            ],

            abouteUs_ourPartnersTitle: 'Our partners',
            abouteUs_ourPartners: [
               'RA Ministry of Education, Science, Culture and Sports',
               'RA Ministry of Territorial Administration and Infrastructures',
               'RA Ministry of High-tech Industry',
               'Migration Service of RA Territorial Administration and Development',
               'V.A. Fanarjyan National Oncology Center CJSC',
               'RA Public Services Regulatory Commission',
               'Property Appraisal and Auction Center',
               'RA Ministry of Defense',
               'National Oncology Center',
               'Youth center of KGSMN',
               'Armenian Center of Hemophilia and Thrombophilia',
               'Prism Center for Research and Analysis',
               'Orbel Analytical - Research Center',
               'RA police',
               'LGG foundation',
               'Elnarti LLC',
               'Angel investor Club of Armenia',
               'Investment Support Center',
               'Cadastre Committee',
               'Masis community',
               'Liga uslug LLC',
            ],

            order_now: 'Order now',

            projectPage_translation: [
               'Description',
               'Project Name',
               'Programming languages',
               'Creation period',
               'Date of creation',
               'month',
               'year',
            ],

            orderFormTitle: ['Tell us', 'about your project', 'Choose services'],

            orderForm: [
               'Name*',
               'Phone number*',
               'E-mail*',
               'Website address',
               'Message',
               'Choose file',
               'Corporate website development',
               'Online stores development',
               'Search engine optimization (SEO)',
               'Contextual advertising',
               'Website development',
               'Technical website support',
               'E-mail marketing',
               'Invitation card',
               'Google analytics',
               'Business process automation',
            ],

            contact_us_title: ['Contact Us', 'Feedback'],

            feedback: ['Name*', 'Email address*', 'Message'],

            our_teem_title: 'Our Teem',

            servicesPagesItemsTitle: [
               'Web Application development',
               'Website Promotion',
               'Service and Support',
               '3D Modeling Development',
               'Unity Game Development',
               'Mobile App Development',
            ],

            servicesPagesItems_small_txt: [
               'We offer a wide range of web development services with using the most popular server languages ​​and frameworks.',
               'Website optimization and promotion. Integrated Website Promotion. Search Engine Website Promotion Advertising on the Internet.',
               'They include both technical and informational support, as well as comprehensive website maintenance. Choose the best option.',
               'This is a sufficiently complex area, which is associated with many industries, from the production of games and films to architecture and engineering projects.',
               'If you want to grow your online business quickly then creating online stores will bring traffic to your business.',
               'Original projects. Android and IOS development.',
            ],

            servicesPagesItems_full_txt: [
               `WebEx Technologies specialists have extensive experience in developing IT products. Our company’s services can be comprehensive or include some part of the development.
            Turnkey websites are web resources that WebEx Technologies makes from scratch, participating at all stages of its creation. In other words, the customer voices his goals and wishes for design and interface, and we put them into the website.
            Development of electronic document management automation systems (EDMS) - the creation of this system is an integral and very important part of the corporate information platform.
            Software development (software) is the activity of creating new software. To simplify the work of employees and automate internal processes
            The development and implementation of a CRM system are most in demand in situations where there is a qualitative leap in doing business and managing a company.
             Basic principles of our activities
                                                                                         
             1)  Adaptability.
             2)  Clean Code Principles.
             3)  Strategically thought out implementation.
             4)  Reliability.
             5)  Safety.
             6)  Оптимальность и эффективностью`,

               `You can choose any option for promoting your website:
             Comprehensive website promotion - search engine promotion, contextual advertising, and comprehensive advertising campaign for your product on the Internet.
             Search engine promotion of websites - ensuring that the site is in higher positions in search engines (such as Yandex, Rambler, and Google). As a result of search engine promotion of the site and bringing your site to the top 10 queries of search engines, you receive an increase in site traffic for targeted queries.
             Contextual advertising is short text ads that appear on search engine results pages in response to user requests.`,

               `Website maintenance carried out by the center’s specialists may include both technical support or information support, and comprehensive website maintenance. There are various options for monthly software maintenance, including various types of technical and information support. There is no longer a need to keep a special employee servicing the site in the company - support for your site, and updating the site, is carried out by WebEx Technologies specialists.


             You can order both one-time website maintenance work and monthly website maintenance. We have developed convenient tariff plans for website maintenance.
             Also, as part of organizing support for the effective operation of the site, the following work is performed:

             1)  Website update, transfer of static websites to modern CMS (content management systems).
             2)  Website audit, website analysis.
             3)  Website modernization, including redesign, integration of CMS, additional modules, and interactive interaction systems.`,

               `Three-dimensional modeling or 3D modeling is the process of creating three-dimensional images of any objects or objects.
             Using 3D graphics, you can create a model of any real or imaginary building, inanimate object, or phenomenon.
             Areas of application of 3D modeling
             Using 3D modeling you can create the following objects:

             1)  architectural models;
             2) heroes and characters of games, and films;
             3) locations for filming films and games;
             4)  statues and souvenirs;
             5) housings for equipment and devices;
             6) prostheses, orthoses;
             7) details of various mechanisms and much more.`,

               `Our team has deep knowledge and experience in developing games, and web, desktop, mobile, and cross-platform applications using all the benefits and tools of Unity to achieve customer goals.
             The advantages of Unity are the presence of a visual development environment, cross-platform support, and a modular system
             development includes:

             1) 2D and 3D game development
             2) Development of Unity 3D cross-platform applications
             3) Development of mobile, web, and desktop applications using Unity3D
             4) Interactive Application Development
             5) UI/UX design
             6) 3D models
             7) Application configuration and support
             8) Development of console games (for PS, Xbox, Wii, etc.)`,

               `WebEx Technologies develops applications, first by designing a business model and a strategy for its development. Analytics plays an important role in our work: analysis of requirements and business processes, marketing and technical audit, and requirements management at all stages of the project.
             Our goal is to create a product that is not only profitable but also useful to society. While developing the concept, you will receive a ready-made working prototype, which will allow you to evaluate the quality of the application, make changes, and refine the product.
             
             With the help of mobile applications, you can take your business to a new level: conduct transactions, train employees, plan and set tasks, and purchase and deliver goods in the most convenient format for the company and the client. We cooperate not only with large companies but also with startups that require solutions to problems that do not yet have interface examples.
             
             Stages of work:
             1) Analytics. We conduct specific market analyses and use the best solutions to create first-class products.
             2) Design. We implement business tasks using user-friendly interfaces based on analytics.
             3) Design. We create the best user interface. We draw a convenient and understandable product design.
             4) Development. We implement the application in code. We write clean and stable code for fast and active work.
             5) Testing. We test the service on different devices and guarantee the release of a high-quality product on time`,
            ],

            projectType: ['All', 'Web', 'Mobile', 'Games and 3D'],
            dashboard_name: 'Dashboard',

            web_project_page_top_div_title: 'Web App Development',

            all_promotion: 'Site Promotion',

            modeling_3d: 'Development of 3D modeling',

            KeyWordComponent: 'Keywords',

            KeyWordComponentItem: [
               'Integrated website promotion,',
               'Budget Promotion,',
               'Internet advertising,',
               'Search Engine,',
               'Promotion Site Optimization,',
               ' SEO - Search Engine Optimization,',
               ' Contextual Advertising,',
               'Promotion on social networks, blogs, service,',
               ' Free Site Audit,',
               'Free counter installation,',
               ' Website promotion and optimization: question - answer,',
               ' Articles about website promotion,',
               ' Cost of website promotion,',
               '  Price Brand Pages Creation and Groups in Social Networks,',
               ' 3D modeling,',
               ' Blender,',
               'Gimp,',
               ' 3D Visualization of the general plan,',
               ' 3D modeling,',
               '  3D interior visualization,',
               '  ИТ-consulting,',
               ' iOS,',
               ' Android,',
               'Design,',
               'Unity development,',
               'UI/UX design,',
               ' 2D and 3D game development',
            ],

            web_project_page_web_development_title: 'Web App Development',

            web_project_page_web_development_info: [
               'Webex Technologies is operating for over 15 years. Our company has extensive experience in web application development, outsourcing, software development and web development, IT consulting, application integration, business process analysis, software testing, maintenance and support.',
               "Let's take a look at what the services provided by Webex Technologies are.",
            ],

            account_Box: ['Account', 'Edit profile'],
            purchase_history: ['Purchase history', 'Lessons', 'of total'],
            my_Training: 'My Training',

            description: 'description',

            homework_linne: ['Do homework', 'Lesson', 'm'],

            homework_linneHom: ['Do homework', 'Task', 'm'],

            cordial: 'Contents',

            all_video_lessons: 'All video lessons',

            profileArr: [
               'Your Profile',
               'Fill in your details',
               'Save',
               'Cancel',
               'write the current password',
               'write the new password',
               'repeat the new password',
            ],
            help: [
               'Help',
               'Fast support',
               'Answers to the most frequently asked questions are just one click away.',
               'Write your question',
               'Name Surname',
               'Email address',
               'phone number',
               'message',
               'Send',
            ],

            visitHistory: [
               'Visit history',
               'Number',
               'Lessons',
               'Total lessons',
               'Number lessons',
               'Payment',
            ],

            dashboard_name: 'Dashboard',
            current_lessons: 'Current lessons',
            profile: 'Profile',
            helpp: 'Help',
            visit_history: 'Visit history',
            log_out: 'Log out',

            lerne_more: 'Լearn more...',

            slide_section: [
               'We are teaching',
               'Our modern and professional approach has already attracted many customers',
            ],
            dashboard: 'Dashboard',
            currentLessons: 'Current lessons',
            profile: 'Profile',
            helpp: 'Help',
            visitHistoryy: 'Visit history',
            logOut: 'Log out',

            //Website Promotion
            promotionTitle: 'Website Promotion',
            promotionText:
               'Here are some optimal options for promoting your website offered by WebexTech:',
            photoDivs: [
               'Integrated Website Promotion',
               'This option includes various types of promotion, such as search engine promotion, contextual advertising, as well as various online advertising campaigns, such as banner advertising, bulletin board advertising, etc. Integrated promotion ensures the most effective promotion of your site.',
               'Search engine website promotion:',
               'This type of promotion is aimed at bringing your website to the top of search engines such as Yandex, Rambler and Google. When your website appears in the first 10 search results, it automatically increases traffic to your website.',
               'Contextual Advertising: ',
               'This promotion method involves short text ads that appear on search results pages in response to user queries. They can also be displayed on other advertising platforms, such as Yandex.Direct, Rambler and Google AdWords.',
               'The choice of a specific option depends on your goals and budget. Integrated promotion may be the most effective option as it combines different promotion methods to achieve the best results.',
            ],
            textDivTop: [
               'Benefits of promoting your website using WebExTech:',
               '1. Transparency: You will be aware of every stage of your website promotion thanks to regular reporting and full awareness of the work done. We will coordinate the preliminary stages of work and all actions to promote and optimize the site with you.',
               '2. Official Yandex partner: Thanks to our status as an official Yandex partner, we provide contextual and media advertising on Yandex at Yandex prices. We also provide free support for your advertising campaign on Yandex by professional specialists.',
               '3. Individual approach: We guarantee our clients the most effective website promotion, taking into account the characteristics and needs of your business. We have an individual approach to each client.',
               '4. Convenience: Our employee will come to you himself if your company is located in Armenia. We quickly resolve all issues with clients from other cities through modern information exchange systems',
               '5. Legal methods of promotion: We use only legal methods of promoting your site so that it does not fall under the sanctions of search engines.',
               '6. High positions in search results: We guarantee promotion of your website to 1-10 places in search results without additional payment for promotions.',
               '7. Individual attention: We devote maximum time and attention to each project, since each client is special to us.',
               '',
            ],
            middleSide: [
               'Branches',
               'WebEx Technologies offers software development services to companies from various industries.',
               'BANKING AND FINANCE',
               'TELECOMMUNICATION',
               'AUTO AND TRANSPORT',
               'HEALTH CARE',
               'TRADE AND COMMERCE',
               'LEARNING AND MARKETING',
            ],

            bottomSideTexts: [
               'Adaptability. Clean Code Principles. Strategic Implementation.',
               'We build fast and reliable websites. We provide optimal implementation of the tasks.',
               'When creating a website with "Webex Tech" you also get:',
               'Free domain name registration ',
               'prefered by the client for one year. We will help you to check for free if the selected domain name options are free for registration.',
               'Free site registration in major search engines ',
               'such as Yandex, Google, Rambler, Mail.ru. Registration is done only manually, which guarantees the correctness and timeliness of providing information about your site in search engines.',
               'Free installation visitors ',
               'statistics counter on the created website (Yandex, LiveInternet systems, Mail.ru, or another one at your request).',
               'Placement and configuration of the website on the hosting. ',
               'Qualified hosting selection that meets the technical requirements to ensure the correct operation of the site. You get a completely ready to work site.',
               'Free training for clients ',
               'who order a website (in any place convenient for you in Volgograd or online) to work with the website and the website management system.',
               'Free technical support -',
               '6 months (updates installation for required system, program errors correction that may occur).',
               'Why to cooperate with "WebExTech" Center:',
               'Transparency of actions at any stage of the website creation. ',
               'We provide regular reports and ensure full awareness of the work.',
               'Individual approach to each client. ',
               'Careful study of the specifics of the client’s business at the preparatory stage of creating the website helps to obtain the maximum effect in the shortest possible time.',
               'Have you decided to create a website? Then no need to spend time traveling. If your Company is located in Yerevan, just call our Center, arrange a convenient time and place for you, and our employee will come to you himself. All issues with customers located in other cities allow us to quickly solve modern information exchange systems: ',
               'E-mail, Skype, ICQ, QIP and others.',
               'Optimal content management system selection (CMS), options for creating a responsive website design, ideas generation and the search for solutions that increase the functionality, individuality and efficiency of the website.',
               'Creating a website is a passion for our developers. ',
               'We try to use in the website development not only well-known and widespread solutions, but also new unexpected solutions that make the website unique and inspirational.',
               'When creating websites,',
               'we use only licensed (commercial and non-commercial) CMS, modules, components, designs.',
               'Each Client is UNIQUE for us. You can be sure that when you create a website with us, your project will be given the maximum time and attention.',
               'Special offers allow us to make website creation for our Clients as efficient and profitable as possible.',
            ],
            buttonsSide: [
               'FOR INQUIRY OR QUESTION',
               'Website Development',
               'Website promotion/ SEO',
               'Service and Support',
               '3d Modeling Development',
               'Mobile App Development',
               'Unity Development',
            ],
           

           
            /////3d modeling///////////
            topSideUntilSlider: [
               '3D modeling',
               'Three-dimensional modeling , or 3D modeling',
               ', is the process of creating three-dimensional images of any subjects or objects. For these purposes, specialists use specialized computer programms, the so-called 3D editors. With their help, geometric projections are built on the plane, which are necessary for creating a three-dimensional any effect.',
               'The special beauty of',
               '3D modeling',
               'lies in the virtually unlimited possibilities of this technology. Using',
               '3D graphics',
               ', you can create a model of any real or imaginary building, inanimate object or phenomenon.',
            ],

            middleSideUnderSlider: [
               'INTRODUCING ADVANCED TECHNOLOGIES',
               'Blender',
               'Substance',
               'Gimp, c#',
               'MakeHuman',
            ],
            create3dModel: [
               'CREATING 3D MODELS',
               'The process of creating a three-dimensional model of any subject or object requires from the performer not only impeccable mastery of computer graphics skills, but also special thoroughness and scrupulous performance of the work. The success of the whole process as well its reliability depends on how realistic and exact the model will be displayed.',
               'High-quality performance of works assumes observance of several obligatory conditions. Lets name the most important of them.',
               'It is necessary to choose the most suitable specialized programm for the purposes of a project. So, the Autodesk 3ds Max mentioned above is famous for its universality. It can be used in any industry and for any task. And, for example, another programm AutoCAD has a narrower specialization - it is indispensable in modeling industrial and construction websites.',
               'The high quality of the 3D model implies precise order of the instructions of the documentation provided by the customer. Despite the creative nature of the modeling process, the manifestation of any initiative that goes against the terms of reference will be inappropriate and unprofessional here.',
               'To achieve the most realistic effects, you need to apply only the highest quality textures. This is a question of how well the technician is technically equipped.',
               'For the same purpose, one should carefully work out all the details and elements of the image of the 3D model, paying particular attention to the smallest of them. The secret of the realism of the final picture lies exactly in the accurate transfer of nuances.',
            ],
            table3dModel: [
               'Prices and deadlines',
               'Project',
               'Deadline',
               'Prices',
               '3D visualization of the cottage with the territory',
               '2-5 days',
               'from 110$ 2-3 angles',
               'Architectural 3D visualization of shopping malls, apartment buildings',
               '3-10 days',
               'from 440$ 3-5 angles',
               '3D Visualization of land development, residential complexes',
               '5-14 days',
               'from 720$ 5-10 angles',
               '3D Visualization of the general plan',
               '5-10 days',
               'from 580$ 1 angles',
               '3D interior visualization',
               'from 2 days',
               '2-10$ for m2 3 angles of the room',
               'Video presentation of a house, apartment or architectural object',
               'from 3 days',
               'from 22$ per 1 second of video + cost of modeling',
               'Characters of the game',
               'from 2 days',
               '22$',
            ],

            ifrem_text: [
               'Welcome to the world of innovative 3D photography, where every corner of your room comes to life before your eyes. 360-degree 3D photography allows you to experience a fully interactive experience of viewing a room as if you were inside it. Our team of professional photographers and designers use advanced equipment and technology to create unique and attractive 3D surveys that can be used for a variety of purposes.',
               'Discover all the benefits of 3D 360 degree shooting:',
               'Full interactivity: Users can freely rotate the image and view the room from any angle, getting the most realistic impression of its space and design.',
               'Convenient and Accessible: 3D walkthroughs can be easily embedded into websites, presentations or applications, providing easy access to property information for potential clients or interested parties.',
               'Eye-catching and visual impact: With high-quality images and the ability to interact with them, 3D photography creates a powerful impression and helps draw attention to your subject.',
               'Whether you need a virtual tour of a property, interior renderings for a design project, or simply an impressive way to present your space, our 360 degree 3D photography services will help you achieve your goals. Contact us today to learn more about how we can transform your space into a 3D virtual world.',
            ],

            wey_title: 'Directions in the development',

            way: 'The specialists of our company are of a high level of professionalism in their path, in the categories of services that they provide to you. Each service is provided as a set of works or in a separate part of the development.',
            title_h1: [
               'Turnkey websites',
               'Development of automation systems for electronic document management ',
               'Software development ',
               'Business automation',
               'Automation of car services',
               'Automation of pharmacies -',
               'Hotel automation ',
               'Document flow automation',
               'Store automation',
               'Rental automation - ',
               'Restaurant automation -',
               'Automation of beauty salons - ',
               'Warehouse automation',
               'Construction automation software ',
            ],
            way_info: [
               'WebEx Technologies is a team of professionals with many years of experience in the development of IT products. We offer a wide range of services, ranging from complex solutions to participation in specific stages of development.',
               'The turnkey concept for websites represents our commitment to creating customized online experiences. Our team is actively involved in every stage of website creation - from the initial idea to its implementation. In simple terms, clients formulate their goals, design preferences and interface requirements, and we carefully bring them to life through the creation of a full-fledged website.',
               "The development of an electronic document management automation system is a key element of a modern corporate information infrastructure. WebEx Technologies offers unique solutions, ensuring effective interaction and automation of business processes. Our innovative technologies create a simple, easy-to-use user experience that increases productivity and gives you control over your company's performance.",
               'Software Development - In the field of software development, we are focused on creating customized solutions that optimize business processes and increase employee productivity. Our team of specialists offers a wide range of services, adapting software products to the specific needs of clients.',
               ' Automation of car services, pharmacies, hotels, shops, rentals, restaurants, beauty salons, warehouses and construction becomes easy and efficient thanks to our software. We offer integrated solutions that provide complete automation of business processes, increase the efficiency and accuracy of accounting, and optimize interaction with clients and suppliers.',
               ' Construction automation through software is an integral part of the modern construction industry, where every detail of the project is of great importance. Our global automation system provides complete control over construction processes, materials used, cost analysis and procurement planning. This allows you to optimize costs and increase construction efficiency.',
               'Web development is a creative process that involves creating websites and applications. Our specialists offer comprehensive solutions, ranging from web design and page layout to programming and server configuration. We follow modern trends and use advanced technologies to create high-quality and unique web projects for you.',
               'The development and implementation of CRM systems is a key point for companies wishing to improve interaction with customers and optimize sales processes. We develop custom CRM solutions that automate order fulfillment, simplify document flow and provide a unified customer database with a detailed interaction history.',
               'The development of ERP systems is a comprehensive approach to business automation, which allows you to combine all company processes into a single information system. Our ERP solutions are based on a modular principle, which allows you to create individual modules for each line of business. This provides comprehensive company management and reduces the need for multiple separate information systems',
               ' Our team of specialists offers a wide range of services in the field of web development, CRM and ERP systems, guaranteeing high quality and professionalism in every project. Contact us and we will help you create effective and modern IT solutions for your business.',
               " in this industry, software is multidisciplinary and multifunctional. The software may convey the restaurant's policy to customers or meet the needs of the restaurant's inner workings.",
               ' to automate the work of a beauty salon, online registration of salon visitors, creating an online calendar.',
               "is a system for accounting of warehouse goods, ensuring the transparency of employees' work within the system. System integration with other systems and much more.",
               'is a global construction automation system, namely, accounting, analysis, analytics of spent building material or analytics of the purchase of building material for the upcoming construction. Web development is the process of creating a website or web application. The main stages of the process are web design, page layout, client and server side programming, and web server configuration.',
               '',
            ],
            way_list: [
               '1.Website or web application design (collection and analysis of requirements, development of technical specifications, design of interfaces)',
               '2.Development of a creative concept for the site',
               '3.Creation of the site design concept',
               '4.Creation of page layouts',
               '5.Creation of multimedia objects',
               '6.Layout of pages and templates',
               '7.Programming (development of functional tools) or integration into a content management system',
               '8.Optimization and placement of site materials',
               '9.Testing and making adjustments',
               '10.Publishing the project on the hosting',
               '11.Maintenance of a working website or its software base.',
            ],
            development: 'CRM development',

            development_crm: [
               'The development and implementation of a CRM system',
               'Web development ',
               'Development of ERP systems ',
               'Development of ERP systems ',
            ],

            crm_title: [
               'is most in demand in situations where there is a qualitative leap in business and company management. That is, the number of communications (sales, transactions) during the day, as well as the number of business contacts (phone calls, emails, SMS notifications) that a manager performs during a month, exceeds the threshold of RAM available to humans, in this case, the resource that spends staff on documentation and Excel spreadsheets. The following functions can be transferred to the CRM system:',
               'automation of order execution and conclusion of transactions with tracking the status for each position',
               'simplification of document circulation due to the automatic generation of contracts, acts, and invoices',
               'maintaining a single customer base with detailed information about each contact and the history of interactions',
               'development and implementation of ERP systems',
               'as a rule, ERP development is carried out according to a modular construction principle',
            ],
            crm_titleP: [
               'Our web development team closely follows the latest trends in web development, which allows us to create quality custom web applications. We specialize both in the development of technically complex, but at the same time convenient and ergonomic applications, and in the creation of websites of any complexity. We provide a full cycle of web application development: from business analysis and design, to implementation, quality testing, maintenance and support.',
               'Business analytics in IT is the collection of data, proposals for solving problems and taking into account customer requirements. Based on this information, we develop technical specifications and carry out further design of the project.',
               'IT infrastructure design involves developing a clear plan of action and identifying resources to create an information system that meets business needs. Our task is to find optimal solutions that will help the company achieve the desired results.',
               ' Software implementation is the process of customizing software for specific conditions of use, as well as training users to work with the software product.',
               'Software implementation requires work in three main areas:',
            ],
            crm_title_li: [
               '1.Identification of critical procedures in the organization’s activities that require the use of IT solutions. The developed IT solution becomes key for the organization, ensuring transparency and efficiency of processes.',
               '2.Expanding the regulatory framework of the organization by including regulations that describe the procedure for performing automated process procedures',
               '3.Standardize the existing activities of the organization and incorporate best practices into the developed IT solution, ensuring its usefulness and relevance to all participants',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               'CRM development',
            ],

            busines_analytic: [
               'Business analytics',
               'IT infrastructure design',
               'Software implementation',
            ],
            busines_analytic_title: [
               'in IT is the collection of data, a proposal for solving problems and customer requirements, on the basis of which a technical task and further project design are drawn up.',
               'is about drawing up a clear action plan and describing resources to create an information system that meets the needs of the business. The task is to find what and in what way will lead the company to the wished results.',
               'is the process of customizing software for certain conditions of use, as well as training users to work with a software product.',
               'Software implementation requires actions in the following three work planes.',
            ],
            busines_analytic_li: [
               'Allocation of critical, from the point of view of the overall result, procedures in the organizations activities. When a set of such procedures is determined, it is necessary first of all to use an IT solution to automate operations within these particular procedures. Thus, the developed IT solution automatically becomes vital and in demand for the organization. It will also ensure the publicity of the implementation process.',
               'xpanding the regulatory framework of the organization by including in it regulations that describe the order of performing procedures for automated processes. Otherwise, there is a danger of inconsistency between the automated procedures and the rest of the organizations processes.',
               'Performing work on the general standardization of the existing activities of the organization. Best practices for performing procedures are highlighted and included in the IT solution, in accordance with the principle of the most useful for the majority of participants. The percentage of such procedures in relation to the total volume of automation may be small, but this gives the process of building a solution weight in the organization by increasing its "usefulness".',
            ],

            busines_analytic_p: 'Software testing',

            busines_analytic_title_p: [
               'Software testing is a critical phase of development that involves examining and testing a software product to verify its consistency between actual and expected behavior on various sets of tests',
               'Software maintenance (support) is a continuous process of improving, optimizing and eliminating software defects after it has been put into operation. This phase of the software life cycle follows the release of the software into production. During the maintenance process, changes occur aimed at correcting detected defects, improving and adding new functionality to improve the ease of use and applicability of the software.',
               "Webex Technologies' expertise in the field of web application development includes the creation of technically complex, but at the same time convenient and ergonomic applications, as well as the development of websites of any complexity. We offer a full cycle of web application development, starting with business analysis and design, and ending with implementation, quality testing, maintenance and support.",
            ],
            introducing: 'INTRODUCING ADVANCED TECHNOLOGIES',

            adaptability: 'Adaptability. Clean Code Principles. Strategic Implementation.',

            adaptability_title: [
               'We build fast and reliable websites. We provide optimal implementation of the tasks.',
               'When creating a website with "Webex Tech" you also get:',
               'Why to cooperate with "WebExTech" Center:":',
            ],

            adaptability_title_h: [
               '1.Free domain name registration ',
               '2.Registration in search engines',
               '3.Installing a visit statistics counter:',
               '4. Hosting and configuration: ',
               '5.Free training:',
               '6.Free technical support:',
            ],
            adaptability_title_text: [
               'We provide free registration of the domain name of your choice for 1 year. Our team will help you check the availability of your chosen domain name for registration.',
               ' We will register your site for free in major search engines such as Yandex, Google, Rambler, Mail.ru. All registration is done manually to ensure that your site information is submitted correctly and in a timely manner.',
               'We will install a visit statistics counter on your website for free. You can choose a statistics system of your choice, such as Yandex, LiveInternet, Mail.ru or another.',
               'Our team will provide hosting and configuration of your website. We will select qualified hosting that meets the technical requirements so that your website runs smoothly.',
               "We will provide free training for your company's employee to work with the site and the site management system. Training can be conducted in any place convenient for you in Volgograd or via the Internet.",
               ' We will provide free technical support for 6 months after the website is created. This includes installing required system updates and correcting any software errors that may occur.',

               'E-mail -',
               'Facebook -',
               'Linkedin -',
               'Instagram -',
               'WhatsApp -',
            ],
            Why_to_H: [
               'Transparency of actions at any stage of the website creation.',
               'Individual approach to each client.',

               'Optimal content management system selection (CMS), options for creating a responsive website design, ideas generation and the search for solutions that increase the functionality, individuality and efficiency of the website.',
               'Creating a website is a passion for our developers.',
               'we use only licensed (commercial and non-commercial) CMS, modules, components, designs.',

               'Special offers allow us to make website creation for our Clients as efficient and profitable as possible.',

               'Contact e-mail by mail',
               ' (https://www.facebook.com/WebExTech)',
               '(https://www.linkedin.com/groups/13856890/)',
               '(https://www.instagram.com/webex.am/)',
               '(+37496400073)',
            ],
            Why_to_text: [
               'We provide regular reports and ensure full awareness of the work.',
               'Our company offers an individual approach to each client, taking into account the specifics and needs of their business. We pay special attention to studying your business at the initial stage of website creation in order to achieve maximum effect in the shortest possible time.',
               'If your company is located in Yerevan, there is no need to waste time traveling. Just contact us, set a convenient time and place, and our employee will come to you. To quickly interact with clients from other cities, we use modern information exchange systems,',

               'We strive to use not only widespread, but also new, unexpected solutions when developing your website to make it unique and memorable. When creating a website, we pay special attention to the selection of the optimal content management system (CMS), design and functionality so that your site is as effective and personal as possible.',

               'We use only licensed (commercial and non-commercial) CMS, modules, components and designs when creating websites. Each client is unique to us, and we guarantee that your project will be given the maximum necessary time and attention.',
               'Our special offers make website creation for our clients as efficient and profitable as possible. We strive to make the website creation process creative and enjoyable for you, achieving the best results.',
               'Facebook (https://www.facebook.com/WebExTech) Log in or sign up to view See posts, photos and more on Facebook.',
               'E-mail -',
               'Facebook -',
               'Linkedin -',
               'Instagram -',
               'WhatsApp -',
            ],

            buttons_title: 'FOR INQUIRY OR QUESTION ',

            inquiry: [
               'Website Development',
               'Website promotion/ SEO',
               'Service and Support',
               '3d Modeling Development ',
               'Mobile App Development ',
               'Unity Development ',
            ],

            suport: 'Website Support and Maintenance',
            suport_title:
               'Website maintenance, performed by WebExTech center specialists may include both technical support or informative support, as well as comprehensive website maintenance. There are various options for monthly maintenance for your website, including various types of technical and informative support. There is no longer any need to keep a special employee maintaining the website in the company - website support and website update is done by "WebExTech" specialists. ',
            MaintenanceTypes: ['Maintenance Types', 'Technical Support', 'TInformative Support'],

            MaintenanceTypes_title: [
               '1. Technical support: Our specialists are ready to help you with any technical issues related to your website. This may include bug fixes, software updates, server configuration, etc.',
               '2. Information support: We also provide information support, helping you with updating content on the site, adding new pages, changing design, etc.',
               '3. Comprehensive maintenance: We offer comprehensive maintenance of your website, which may include both technical and information support, as well as regular content updates and analysis of the site’s effectiveness.',
               '4. Monthly Maintenance: We offer a variety of monthly maintenance options for your website that can be tailored to suit your needs. This allows you to avoid the need to have a special employee responsible for website maintenance.',
            ],
            MaintenanceTypes_ul: [
               'Website update, translation of static websites to modern CMS (content management systems).',
               'Website audit, website analysis.',
               'Websites modernization, including redesign, CMS integration, additional modules and interactive systems of interaction.',
            ],

            //  ====================Mobail=================================

            mobail: 'Mobile Application Development',

            mobail_text:
               'Webex Technologies has more than 15 years of experience in the provision of outsourcing software development and web development, IT consulting, application integration, business process analysis, software testing, maintenance and support. High quality services are designed to provide our customers with information security and maximum comfort. During our work experience we have been entrusted to various companies in Europe, USA, Russia and Ukraine.',

            Reliable_text:
               'Webex Technologies has more than 15 years of experience in the provision of outsourcing software development and web development, IT consulting, application integration, business process analysis, software testing, maintenance and support. High quality services are designed to provide our customers with information security and maximum comfort. During our work experience we have been entrusted to various companies in Europe, USA, Russia and Ukraine.',
            Reliable: [
               'Reliable development of mobile applications for iOS and Android devices',
               "Welcome to WebEx Technologies, your premier mobile app development company based in Armenia! With a team of skilled professionals, we specialize in crafting high-quality Android and iOS applications that secure prime placement in both the App Store and Play Store. Here's why partnering with us ensures your app's success:",
            ],
            Development_of_Mobile: [
               'Development of Mobile Applications for IOS',
               "1. Leverage the Power of React Native: Harnessing the capabilities of React Native, we provide unparalleled benefits for your app development journey. React Native allows us to build cross-platform applications with a single codebase, significantly reducing development time and costs. Moreover, it ensures a seamless user experience across various devices and operating systems, enhancing your app's reach and scalability.",
               'Development of mobile applications for Android',
               '2. Strategic Planning for Success: At WebEx Technologies], we understand the importance of meticulous planning in app development. Our team works closely with you to define clear objectives, outline project milestones, and devise a comprehensive roadmap for success. By meticulously planning each phase of development, we ensure efficient resource allocation, timely delivery, and alignment with your business goals.',
               'Dedicated team of developers for mobile development for iOS',
               '3. Rigorous Quality Assurance: Quality is at the forefront of everything we do. Our dedicated Quality Assurance (QA) team conducts rigorous testing across multiple devices and platforms to identify and address any potential issues or bugs. Through thorough testing protocols, we guarantee that your app meets the highest standards of performance, functionality, and user satisfaction, leading to positive reviews and enhanced retention rates.',
               'Dedicated team of developers of mobile applications for Android',
               '4. Armenia-Based Excellence: Based in Armenia, our team combines technical expertise with a deep understanding of global market trends. We pride ourselves on delivering cutting-edge solutions tailored to meet the unique needs of our clients. With a proven track record of success, we strive to exceed expectations and establish long-term partnerships built on trust, transparency, and exceptional results',
            ],

            Reliable_ios: [
               'Services for creating applications for Android, developing applications for iOS',
               "Choose WebEx Technologies for your mobile app development needs and experience the difference of working with a dedicated team committed to delivering excellence every step of the way. Let's transform your vision into reality and propel your app to new heights of success in the competitive digital landscape.",
            ],

            bottomSideTexts_mobile: [
               "Crafting a standout presence in today's competitive market requires more than just an idea – it demands strategic execution. At Webex Technologies LLC, we delve deep into market dynamics and brand essence to unearth your unique competitive edge.",

               'Unlock the Potential of Mobile App Innovation',

               'Harness the power of market insights and brand identity to carve out your niche and elevate your brand.',
               'Product Design:',

               ' Let our experts guide you through every stage, from concept finalization to platform compatibility, ensuring a roadmap tailored for success.',
               'Mobile App Consulting:',

               'Immerse your users in an intuitive and visually stunning experience that drives conversions and fosters engagement.',
               ' Mobile App Design:',

               ' With a track record of over 350 successfully implemented projects, our developers deliver robust, lightning-fast apps that exceed expectations.Elevate Your Online Presence Beyond Mobile',
               'Mobile App Development:',

               ' Complement your mobile app with a seamlessly integrated web presence, from portals to online stores, crafted to captivate your audience.',
               ' Web Development:',

               ' Seamlessly connect your app with backend systems and third-party software, ensuring smooth operations across all fronts.',
               '  Mobile App Integration:',

               'Ensure Excellence Every Step of the Way',

               'Testing and QA: Rest easy knowing that our ISTQB-certified engineers rigorously test every aspect, from functionality to security, guaranteeing a flawless user experience.',

               " From post-launch support to ongoing compliance and performance management, we're committed to your app's continued success.",
               ' Maintenance and Support:',

               ' Mobile App Modernization:',
               'Revitalize Your Legacy Apps for the Modern Era',

               ' Transform outdated apps into sleek, efficient powerhouses with revamped architecture and enhanced user experiences.Ready to Transform Your Brand?',

               " Partner with Webex Technologies LLC today and embark on a journey of innovation and success. Let's shape the future of your brand together.",
               ' In Webex Technologies LLC we use the following technologies we use in  Mobile App Development: React Native, Objective C, Java Kotlin',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
            ],

            // ======================Games==============================

            games_title:'Making Games',
            games: [
               'Unity Application Development Services Outsourcing',
               'Webex Technologies is a company with extensive development experience. We offer full cycle of professional Unity development services for various industries. Our team has deep knowledge and experience in the areas of game development, web, desktop, mobile and cross-platform applications using all the advantages and tools of Unity to achieve the goals of customers.',
            ],

            games_Benefits: [
               'Benefits of developing Unity applications from “Webex Technologies”',
               'Our company is an experienced and reliable partner in developing solutions with Unity. We have been implementing efficient and reliable applications for customers around the world over the years. We successfully implement solutions using Unity technology for such areas as e-commerce, games, healthcare, education, advertising, etc. If you want to discuss the details of the project, please contact us',
            ],
            uniti: 'Technological experience of our Unity developers includes:',

            uniti_text: [
               'Technology',
               'WEBGL, OPENGL, JAVASCRIPT, C#, C++',
               'Operation Systems',
               'OS, ANDROID, WINDOWS, OS X, LINUX',
               'Database',
               'MYSQL, SQLITE, MONGO DB, FIREBASE',
            ],

            INTRODUCING: 'INTRODUCING ADVANCED TECHNOLOGIES',

            Our_expertise: [
               'Our expertise in developing solutions with Unity includes:',
               '2D and 3D game development',
               'Development of Unity 3D cross-platform applications',
               'Development of mobile, web and desktop applications on Unity',
               'Development of interactive applications',
               'UI/UX design',
               '3D models',
               'Setup and support of applications',
               'Development of console games (for PS, Xbox, Wii, etc.)',
            ],

            canvas3D: ['Deactivate control', 'Activate control'],

            proj: [
               "Birthday Invitation Card",
               "Party Invitation",
               "Wedding invitation card",
            ],

            projTitle: 'Web Invitations',

            turnstileTitle: 'Turnstiles',

            turnstileInfoTitle: 'We offer security and access control systems that will allow you to.',

            turnstileInfo: [
               'Block unauthorized access.',
               'Allow access to employees or persons authorized to do so using QR cards, RFID cards, FaceID equipment, fingerprint reading equipment.',
               'Control the days and hours of arrival and departure of employees.',
               'Create reports on the arrival and departure of employees for different periods of time /month, quarter, year.',
               'Control the entry and exit of visitors, with the ability to limit the number of entries. In addition, we implement other functions and capabilities in the system according to the needs of the Client.'
            ],

            turnstileOrder: 'Order',

            turnstileOrderTitle: 'Connect us',

            turnstileType: [
               'Unilateral',
               'Double sided',
            ],

            turnstile_videos_section_title: 'Work done',

            turnstile_videos_titles: [
               'Turnstile for supermarkets',
               'Turnstile intended for offices',
               'Outdoor Turnstile with Facial Recognition: Secure and Intelligent Access Control System',
               'Turnstile: The Best Security and Management Solutions for Your Company',
               'Employee monitoring equipment with facial recognition and QR scanning capabilities',
               'Demonstration of entry with a QR ticket of the unified ticketing system'
            ],

            web_project_cycle_title: 'What is needed to create a web application?',

            web_projectPage_cycleTitles:[
               'Planning',
               'UX/UI Design',
               'Programming',
               'Testing',
               'Issue:'
            ],

            web_projectPage_cycleTexts:[
               'The purpose, features and requirements of the application are defined.',
               'The interface is being developed to be convenient and efficient.',
               'Programming languages ​​(eg JavaScript, Python, PHP) are used for the functionality of the web application.',
               'The app is being tested for bugs.',
               'The application is put into operation and the work of its constant updates and technical support continues.'
            ],

            web_projectPage_servicesTitles:[
               'What technologies do we work with?',
               'When developing web applications, we use a number of leading technologies based on the complexity and functionality of the applications. Here are some of the main technologies we work with:'
            ],

            web_projectPageTitle: 'Web Application Development',

            web_projectPageDescription: 'Web Application Development is one of the areas of information systems development that includes the creation of interactive and user-friendly web applications that operate over the Internet. It has a wide range of applications, from trading systems to social networks, tools, databases and other useful services.',

            web_projectPage_info_part1: [
               'What is Web Application Development?',
               'Web application development is the process of creating interactive software solutions accessible through Internet browsers. These applications provide a simplified interaction between businesses and users, allowing complex operations to be performed without downloading additional software.'
            ],

            web_projectPage_info_part2: [
               'Why is web application development necessary?',
               'Availability: Web applications are accessible from any device: computers, smartphones, and tablets.',
               'Ease of use. Users can work with the application without any complicated software.',
               "Data collection and processing. It's easy to collect and analyze data with apps.",
               'Manageability and support. Technical support can be provided to users and new updates can be made easily.',
               'Capacity building. Web applications can be easily integrated with other systems, adding new functions and services.'
            ],

            
            webProject_ourPartnersTitles:[
               'Our partners',
               'We work with leading organizations to provide quality and reliable solutions.'
            ],

            webProject_comments_name: [
               'Anna Markosyan',
               'Levon Karapetyan',
               'Arman Sargsyan',
               'Satenik Harutyunyan'
            ],

            webProject_comments: [
               'The partnership with Webex was an important step forward for our organization. Their professional team fulfilled all our technical requirements quickly and with quality.',
               'Webex exceeded our expectations with professionalism and quick response. Every issue and problem was resolved in a timely and quality manner.',
               'Thanks to Webex, we acquired modern and smart technological solutions that contributed to the development and success of our business.',
               "We are impressed with Webex's commitment and results, their team approached all our technical needs with great responsibility and professionalism."
            ],


            commentsTitle: [
               'Reviews',
               "Our students' opinions"
            ],

            studentComments_name: [
               'Silva Poghosyan',
               'Karen Ayvazyan',
               'Narine Keshishyan',
               'Harutyun Arakelyan'
            ],

            studentComments: [
               'By participating in this course, I not only gained professional skills, but also found a job opportunity. It was a great experience that completely changed my career.',
               'The courses were tailored to my schedule. Thanks to the projects and practical assignments, I felt like I was actually learning what employers needed.',
               'The individual approach greatly helped me overcome the difficult sections. The instructors were always ready to answer questions.',
               'I was able to learn without changing my daily routine, thanks to the flexible schedule. Now my skills allow me to work in international teams.'
            ],


            otherServicesTitle: 'Other services',

            otherServicesItemsTitles: [
               'Web development',
               '3D modeling',
               'SEO',
               'Game development',
               'Mobile application development'
            ],

            otherServicesItemsTexts: [
               'Building a mobile app involves building a comfortable and user-friendly platform, ensuring a seamless experience for users.',
               'We provide high-quality 3D modeling for a variety of industries, including product presentations, construction projects, and promotional materials.',
               "Our SEO services increase your website's visibility on search engines, which helps increase organic traffic and boost business growth.",
               'Our business analytics services help identify business strengths and weaknesses based on data for strategic decision making.',
               'Thanks to it, you can automatically accept orders, issue invoices, ship products and much more with minimal human involvement.'
            ],

            tell_us_sub_title: 'Send us a message and our specialists will gladly answer you within 1-2 working days',

            tell_us_right_block_titles:[
               'Contact information',
               'Social platforms'
            ],

            tell_us_right_block_location: 'Baghramyan Ave. 79, 1/1',

            mobail_appDevelopendPageTitle: 'Creating mobile applications',

            mobail_appDevelopendPageDescription: 'Mobile app development is a necessity because it not only provides a smooth and comfortable user experience, but also enables businesses to grow and expand using all the capabilities of mobile technology.',

            mobail_appDevelopendPageInfo_part1: [
               'What is mobile app development?',
               'Mobile app development is a technological process that involves developing a program and adapting it to mobile devices such as smartphones and tablets. This process includes several stages, from the initial design of the program to coding, testing and final launch. Apps can serve a variety of purposes, from social networks and games to trading platforms and business tools. It is important that the app design is intuitive, user-friendly, and optimized for different devices and screen sizes.'
            ],

            mobile_services_title: 'The technologies used in the process of creating a mobile app depend on the nature of the project, its goals, and the platforms. Here are the most common technologies used in mobile app development:',

            mobail_appDevelopendPageInfo_part2: [
               'Why is mobile app development necessary?',
               'Immediate access. Applications provide immediate and quick access for the user. Users can easily download the app and use it anywhere and anytime.',
               'Improving the user experience. Apps enable users to offer a personalized and seamless experience, providing better interaction with the brand.',
               'Growing mobile market. The number of mobile users is constantly increasing. Apps enable companies to reach their customers in new ways and better respond to market demands.',
               'High involvement. With constant notifications and push messages, mobile apps enable customers to stay better connected and engaged.',
               'Business development and revenue growth. Mobile apps can help increase sales by enabling users to make purchases, orders or services directly from the app.'
            ],

            development_page_header: [
               'Programming courses',
               'Learn to code, develop software solutions, and hone your skills on real projects.'
            ],



            development_page_our_advantages_titles: [
               'Skills',
               'Certificate',
               'Internship',
               'Team',
               'Experience',
               'Flexibility',
               'Personalization',
               'Confidence'
            ],

            development_page_our_advantages_texts: [
               'Acquiring new professional skills to achieve success in the relevant field.',
               'We provide all students with a certificate for professional credibility.',
               'All of our students have the opportunity to complete a one-month internship with us.',
               'Using real-world projects and group work, students learn to collaborate effectively with a team.',
               'Practical projects are implemented through the courses, thanks to which the knowledge gained is used in solving real problems.',
               "The hours and format of the courses are adapted to the students' daily lives, ensuring comfort.",
               'A personalized learning approach for each student based on their needs and goals.',
               'Mastering new skills and successfully completing projects helps increase self-confidence, which is also important in professional life.'
            ],

            development_courses_cycles_title: 'What are the stages of our courses?',

            development_courses_cycles_stage_menu: [
               '1st stage',
               '2nd round',
               '3rd round'
            ],

            development_courses_cycles_stage_Texts: [
               'We will learn frontend programming, a clean way to write code, learn to create adaptive websites for different sizes, learn JavaScript functions, and use the React JS library.',
               'We will learn Backend programming, working with databases, connecting to the frontend through APIs, and using the PHP library to learn Laravel or Node JS programming languages ​​for 2-5 months.',
               'In the final stage, the student will have the opportunity to undergo an internship. During this period, we will consolidate the knowledge we have gained during our studies, the work will be carried out within the framework of real projects with the programming team for 1-2 months.'
            ],

            development_courses_cycles_stage_time: '4-6 months',

            development_courses_page_certificate_section_titles: [
               'What will you get at the end of the course?',
               'All our students receive a certificate and an internship opportunity at the end of the course.',
               'Certificate',
               'Internship'
            ],


            frequently_asked_questions: [
               'What are the main requirements for participating in the courses?',
               'Is a certificate provided at the end of the course?',
               'What format are the lessons held in?',
               'Which direction to choose: Frontend or Backend?',
               'Will I be able to find a job?',
            ],

            frequently_asked_questions_answers: [
               'The basic requirements for participating in the courses include basic technological knowledge and a willingness to learn. In some cases, language or specific field knowledge may be required, such as programming basics.',
               "Yes, the certificate is provided compulsorily. The certificate indicates the number of study hours, the student's progress score (on a 0-100 point system), which is determined based on his/her performance. The certificate also indicates the period of the student's internship and the technologies with which he/she worked during the internship.",
               'Webex Technologies courses are organized with an individual approach. This means that students can choose the days and times that are convenient for them, as well as the appropriate period of study. The teaching methodology developed by Webex Technologies allows students to effectively master the course materials in the prescribed time. The knowledge and experience gained at Webex Technologies provide students with the necessary skills that will allow them to successfully transition to work in the future.',
               "At Webex Technologies, each student receives an individual approach from the lecturers. During the course, the lecturers assess the student's skills and abilities, advising on which direction it is advisable to continue: Frontend or Backend. Students who demonstrate excellent progress in both directions will have the opportunity to become Full Stack developers, opening up broader prospects for their professional development.",
               'After completing the course, students have the opportunity to undergo an internship at Webex Technologies. During the internship, they work with the programming team, participating in the development of real projects. By the end of the internship, students already have a clear understanding of the work process, gain valuable experience and are able to easily integrate into the industry, gaining a solid foundation for further professional development.'
            ],

            frequently_asked_questions_title: 'Frequently asked questions',

            services_and_support_tile: 'Service and support',

            services_and_supportDescription: 'Website support and maintenance ensure the long-term effectiveness of the site, which is vital for both the business and the users. Without quality service, the site can lose the trust and effectiveness of its users.',

            services_and_support_info_part1: [
               'What is website support and maintenance?',
               'Website support and maintenance is the process of maintaining the smooth operation of a website and assisting users in case of technical problems. It includes a number of services, such as website updates, security, content updates, and bug fixes. Website support services include: Technical Support and Informational Support.'
            ],

            services_and_support_info_part2: [
               'Technical support',
               'Data backup',
               'Backup website recovery monitoring',
               'Forum management and editing',
               'Notice boards',
               'Antivirus',
               'Support for interaction with the hosting provider',
               'Creation of mailing addresses and technical support at your address',
               'Website transfer to new server',
               'Domain registration support',
               'FTP server management',
               'Monitoring website visits through reports'
            ],

            services_and_support_info_part3: [
               'Informational support',
               'Website content addition',
               'Copying',
               'Write articles',
               'Creating product photo catalogs',
               'Website news update',
               'Add and update materials on the website: articles, descriptions of services and products',
               'Competitive environment monitoring'
            ],

            modeling3D_title: '3D modeling development',

            modeling3D_description: '3D modeling is widely used in various fields, from product design to cartoon creation, providing professional and effective results.',

            modeling3D_info_part1: [
               'What is 3D modeling development?',
               'Three-dimensional modeling, or 3D modeling, is the process of creating three-dimensional images of any object or subject. For these purposes, specialists use specialized computer programs, the so-called 3D editors. With their help, geometric projections are built on a plane, which are necessary to create any three-dimensional effect.'
            ],

            modeling3D_part2: [
               'Why is 3D modeling development necessary?',
               'High quality visualization. Allows you to create realistic images that are used for design, construction, and product presentation.',
               'Efficiency in the design process. 3D modeling allows designers and engineers to see the result in advance, make changes, and avoid mistakes.',
               'Marketing and advertising: Models are often used in advertising campaigns because they provide visual engagement.',
               'In the construction industry: Architects and builders can see designs more clearly, and receive digital versions of physical models.',
               'Virtual Reality (VR) and Gaming: During the development of VR applications and video games, high-quality 3D models are needed to provide interactive experiences.'
            ],

            modeling3D_services: 'For 3D modeling development, we use leading technologies and programs that ensure high quality and efficiency. Here are the main technologies we work with:',

            modelind3D_work_section_title: 'One of our works',

            modeling3D_tabel_title: 'Prices and terms',

            modeling3D_tabel_th: [
               'Project',
               'Deadline',
               'Price',
            ],

            modeling3D_tabel: [
               {
                  id: '1',
                  project: '3D visualization of the cottage with the area',
                  time: '2-5 Days',
                  price: '110$',
                  priceText: '(from 2-3 angles)',
               },

               {
                  id: '2',
                  project: 'Architectural 3D visualization of shopping centers and apartment buildings',
                  time: '3-10 Days',
                  price: '1440$',
                  priceText: '(from 3-5 corners)',
               },

               {
                  id: '3',
                  project: '3D visualization of land and residential complexes',
                  time: '5-14 Days',
                  price: '720$',
                  priceText: '(from 5-10 angles)',
               },

               {
                  id: '4',
                  project: '3D visualization of the general plan',
                  time: '5-10 days',
                  price: '580$',
                  priceText: 'starting from (1 corner)',
               },

               {
                  id: '5',
                  project: '3D interior visualization',
                  time: '2 days',
                  price: '2-10$',
                  priceText: '(for 2-3 corners)',
               },

               {
                  id: '6',
                  project: 'Video presentation of a house, apartment or architectural object',
                  time: 'In 3 days',
                  price: '22$',
                  priceText: 'Starting from (1 second of video + simulation cost)',
               },

               {
                  id: '7',
                  project: 'Video presentation of a house, apartment or architectural object',
                  time: 'In 2 days',
                  price: '22$',
                  priceText: '-',
               },
            ],

            making_gamesPage_title: 'Game creation',

            making_gamesPage_description: 'Game creation is not only part of the entertainment industry, but also an important technological and socially influential tool that continues to evolve the ways in which human interaction occurs.',

            making_gamesPage_top_div_part1: [
               'What is game creation?',
               'Game development is a complex process that involves the development of interactive video games or virtual environments. It consists of a number of stages, such as idea development, script writing, creation of 3D or 2D graphics, programming, audio integration, and final testing. Game development uses various platforms and engines, such as Unreal Engine, Unity, or Godot, which allow for the creation of interactive and visually appealing experiences.'
            ],

            making_gamesPage_top_div_part2: [
               'Why is game creation necessary?',
               'Economic Growth: The gaming industry is considered one of the fastest growing sectors, generating billions of dollars in revenue and creating a huge number of jobs.',
               'Social Engagement: Games unite communities, engage users, and often become a tool for social interaction.',
               'Educational and teaching tools: Many games have an educational component that promotes the acquisition of new skills or knowledge.',
               'Innovation and Technological Development: Game creation promotes the use of new technologies, such as virtual and augmented reality.',
               'Creative Expression: Through games, creators can bring their ideas to life, presenting unique stories and designs.'
            ],
            making_gamesPage_servicesTitle: 'We use leading technologies and software to create games that ensure high quality and efficiency. Here are the main technologies we work with:',

            making_games_carousel: [
               'Our works',
               'Our experienced team continues to work with innovative approaches, creating unique and high-quality models. We guarantee to bring your ideas to life with amazing visualizations.'
            ],
            
            web_promotion_page_title: 'Website promotion',

            web_promotion_page_description: 'Website promotion is an important tool for business success, allowing you to attract new customers, develop your brand, and maintain a competitive advantage.',

            web_promotion_page_info_part_1: [
               'What is website promotion?',
               'Website promotion is a process that aims to increase the visibility of a website in search engines, attract more visitors, and improve the online presence of a brand. This process includes SEO (search engine optimization), content strategy, link management, and social media marketing. It ensures that the website has the correct technical structure and high-quality content in accordance with the requirements of search engines.'
            ],

            web_promotiion_page_info_part_2: [
               'Why is website promotion necessary?',
               'Increased Visibility: Website promotion ensures that your website appears on the first pages of Google or other search engines, which helps attract new customers.',
               'Traffic Growth: An optimized website receives more visits, which contributes to business growth and increased sales.',
               'Competitive Advantage: Through targeted promotion, your business can outperform competitors by winning new market segments.',
               'Long-Term Results: Search engine optimization provides stable and long-term results without additional advertising costs.',
               'Effective Analytics: Analytical tools are used in the promotion process to assess results and improve strategy.'
            ],

            web_promotion_info_part_3_title: "Types of website promotion include a number of strategies aimed at increasing a website's ranking in search engines, attracting visitors, and increasing brand visibility. Here are the main types:",

            web_promotion_info_part_3_data: [
               {
                  title: 'SEO (Search Engine Optimization)',
                  desc: 'It aims to improve the organic visibility of the website in Google, Bing, and other search engines.'
               },

               {
                  title: "Social Media Marketing (SMM)",
                  desc: 'Website promotion through social platforms (Facebook, Instagram, Twitter, LinkedIn).'
               },

               {
                  title: 'PPC (Paid Advertising)', 
                  desc: 'Paid advertising campaigns on Google Ads, Bing Ads, and social media platforms.'
               },

               {
                  title: 'Content promotion',
                  desc: 'Creating high-quality and interesting content that is aimed at the target audience.'
               },

               {
                  title: 'Link Building',
                  desc: "Obtaining external links from highly ranked websites, which increases the website's credibility and ranking."
               },

               {
                  title: 'Analytics and optimization',
                  desc: 'Continuous improvement of strategy through data analysis and user behavior studies.'
               },
            ]

         },
      },
      am: {
         translation: {
            // ==========================reg_and_log=============================
            reg_and_log: [
               'Դասընթացների Գրանցում',
               'Մուտք',
               'Անուն Ազգանուն',
               'Էլ․ հասցե',
               'Հեռախոս',
               'Գաղտնաբառ',
               'Հաստատել գաղտնաբառը',
               'Արդեն ունեք պրոֆիլ? ',
               'Դեռ չունեք պրոֆիլ? ',
               'Մուտք',
               'Գրանցվել',
               'Գրանցում առաջին դասընթացին',
               'Դասընթաց',
               'Մեզ մոտ առաաջին դասը անվճար է',
               'Մոռացել եմ գաղտնաբառը',
               'Վերականգնել',
               'Վերականգնել գաղտնաբառը',
               'Ուղարկել',
               'Փոխել գաղտնաբառը',
            ],

            //====================== reg and log buttons===========================
            reg_log: ['Մուտք', 'Գրանցվել', 'Հաստատել', 'Ուղարկել'],

            // ====================toolsInfo========================================

            toolsInfo: [
               `Շուկայում ավելի քան ${years_webex} տարի`,
               'Ուսանող',
               'Պրոեկտ',
               'Վեբ կայքեր 100+',
               'Սպասարկվող Պրոեկտներ 50+',
               'Ծրագրավորման Լեզու 30',
            ],

            // ===============ourAdvantages========================

            ourAdvantagesTitle: 'Մեր առավելությունները',

            ourAdvantagesItemTitle: [
               'Վեբ հավելվածների մշակում',
               'Վեբ ծրագրավորման ուսուցում',
               'Բջջային հավելվածներ',
               'Անհատական դասավանդում',
               'Կայքի առաջխաղացում',
               'Առցանց դասավանդում',
               'Հավելվածների (խաղերի) մշակում Unity-ով',
               'Աշխատանքի տեղավորման աջակցում',
               'CRM համակարգերի մշակում և ներդրում',
               'ERP համակարգերի մշակում և ներդրում',
               'Անվտանգության համակարգեր'
            ],

            ourAdvantagesItemTxt: [
               'Ադապտիվություն. Մաքուր կոդի սկզբունքներ. Իրականացման  Ստրատեգիա. Մենք պատրաստում ենք կայքեր արագ և հուսալի: Մենք ապահովում ենք մեր առջև դրված առաջադրանքների օպտիմալ կատարումը։',
               'Դասընթացը վարում է պրակտիկ ծրագրավորողը Դասընթացը կազմված է անհատապես։ Մեր գիտելիքների բազայի հիման վրա ստեղծվել են ուսուցման տեսահոլովակներ։ Դասընթացը կարող է իրականացվել առցանց։',
               'Մենք առաջարկում ենք բջջային հավելվածների մշակման ծառայությունների լայն շրջանակ: Արտադրանքի մշակում, դիզայն, փորձարկում և աջակցություն:',
               'Webex Technologies-ն առաջարկում է վեբ ծրագրավորման անհատական ​​դասընթաց գնելու հնարավորություն։ Որում ուսանողը դասավանդողների հետ միասին ընտրում է համապատասխան դասավանդման մեթոդ և գործողությունների ծրագիր՝ համապատասխան առաջադրանքին։',
               'Կայքի առաջխաղացում - Կայքի առաջխաղացման ցանկացած փուլում գործողությունների թափանցիկություն: Դուք պարբերաբար հաշվետվություններ եք ստանում և ամբողջությամբ տեղեկացված եք կատարվող աշխատանքների մասին։ Կատարվում է աշխատանքի բոլոր փուլերի նախնական հաստատում, կայքի խթանման և օպտիմալացման բոլոր գործողությունները:',
               'Webex Technologies-ում առցանց ուսուցումը համապատասխանում է բոլոր պահանջներին և կենտրոնացած է գործնական և տեսական գիտելիքների ներդրման վրա: Դասընթացն ավարտելուց հետո ուսանողները անցնում են պրակտիկա:',
               'Հավելվածի (խաղի) մշակում Unity-ում - Մենք առաջարկում ենք պրոֆեսիոնալ ամբողջական ցիկլի Unity-ի մշակման ծառայություններ տարբեր ոլորտների համար: Մեր թիմն ունի խորը գիտելիքներ և փորձ խաղերի մշակման, վեբ, դեսքթոփ, բջջային և միջպլատֆորմային հավելվածներում՝ օգտագործելով Unity-ի բոլոր առավելություններն ու գործիքները:',
               'Լավագույն ուսանողները, ովքեր ավարտում են իրենց ուսումը Webex Technologies-ում, հնարավորություն են ստանում պրակտիկա անցնել ընկերությունում: Պրակտիկայի արդյունքների հիման վրա Webex Technologies-ն ապահովում է աշխատատեղեր։',
               'Պատվերների կատարման և գործարքների ավտոմատացում՝ յուրաքանչյուր կոնկրետ ապրանքի համար կարգավիճակի հետևումով. փաստաթղթերի հոսքի պարզեցում, պայմանագրերի, ակտերի, հաշիվ-ապրանքագրերի ավտոմատ ձևավորման շնորհիվ. հաճախորդների միասնական տվյալների բազայի պահպանում՝ յուրաքանչյուր կոնտակտի և փոխգործակցության պատմության մասին մանրամասն տեղեկություններով:',
               'ERP համակարգի օգնությամբ անհրաժեշտություն չկա ստեղծել մի շարք անհատական ​​տեղեկատվական համակարգեր, որոնց օգնությամբ իրականացվում է ուղություններից յուրաքանչյուրի ավտոմատացում, որին հաջորդում է այդ համակարգերի միջև կապի հաստատումը։',
               'Մենք իրականացնում ենք մուտքի անվտանգության համակարգի տարբեր լուծումներ, սարքեր և սարքավորումներ:'
            ],

            // ===================nav-menu=================================

            navMenu: [
               'Դասընթացներ',
               'Ծրագրավորում',
               'Մեր Նախագծերը',
               'Մեր Մասին',
               'Կապ',
               'Գլխավոր էջ',
               'Նախագծեր',
               'Նորություններ',
               'Վեբ հավելվածների մշակում',
               'Կայքի առաջխաղացում',
               'Սպասարկում և աջակցություն',
               '3D մոդելավորման մշակում',
               'Բջջային հավելվածների մշակում',
               'Խաղերի ստեղծում',
               'Էլ․ Հասցե',
               'Հեռախոս',
               'Ծրագրավորման դասընթացներ',
               'Տուռնիկետներ'
            ],

            // =======================buttons=========================

            button: [
               'Դասընթացներ',
               'Գրանցվել',
               'Պատվիրել',
               'Օնլայն',
               'Օֆլայն',
               'Կատարել',
               'Լավ',
               'Գրանցվել Դասընթացի',
               'Պատվիրել Նախագիծ',
               'Օրինակը',
               'Տեսնել ավելին',
               'Պատվիրել կայք',
               'Անվճար Խորրդատվություն'
            ],
            // =============header==================================

            headerTitlePart1: 'Մեր պրոֆեսիոնալ թիմին կարող եք.',
            headerTitlePart2:
               'Պատվիրել բարդ ծրագրային լուծումներով Web համակարգեր․ - Պատվիրել մեխանիկական, ավտոմատ կամ օպտիկական տուռնիկետներ. - Պատվիրել բազմաֆունկցիոնալ CRM/ERP համակարգեր․  - Պատվիրել սարքավորումների ծրագրավորման աշխատանքներ․ - Պատվիրել բարդ ծրագրային լուծումներով Mobile համակարգեր(iOS, Android)․ - Պատվիրել  բարդ 3D մոդելներ - Սովորել Web Frontend | Web Backend | Unity | JAVA ծրագրավորում - Կատարելագործել Frontend/Backend ծրագրավորման Ձեր գիտելիքները․',

            // ===========================webexInfo==================

            webexInfo: [
               'Մեր Մասին',

               'Webex Technologies ընկերությունը հիմնադրվել է 2007թ. նոյեմբերի 21-ին։ Տարիների ընթացքում ընկերությունն իրականացրել է մեծ թվով  ծրագրեր։ Որակապես և հիմնովին է մոտենում  նոր արտադրանքի ստեղծման գործընթացին։ Webex Technologies-ն աշխատում է միայն նոր և ժամանակակից տեխնոլոգիաներով, որոնք իրենց հերթին պարբերաբար թարմացվում են շուկայի պահանջներին համապատասխան: Ընկերությունը հիմնվել է Երևանում և համագործակցում է միջազգային գործընկերների հետ ամբողջ աշխարհում: Webex Technologies-ում իրականացված բոլոր նախագծերը համապատասխանում են միջազգային ՏՏ ստանդարտներին:',
               ' Webex Technologie-ն առաջարկում է ծրագրավորման դասընթացներ: Ընկերությունը կենտրոնացած է ուսանողների որակյալ կրթության վրա, շեշտը դնելով գործնական գիտելիքների  վրա: Webex Technologies-ը մշակել է իր դասավանդման ծրագիրը՝ հիմնված երկար տարիների փորձի վրա: Webex Technologies-ի ուսանողների մեծ մասը աշխատանք են գտնում   ՏՏ ոլորտում: Դասընթացն ավարտելուց հետո լավագույն ուսանողներին տրվում է վկայական, որը նրանց առավելություններ է տալիս աշխատանք փնտրելիս։ Webex Technologies-ը  ողջունում է նոր գործընկերներին:',
            ],

            // =====values======================createWebsitesAndMobileApp=============================

            createWebsitesAndMobileApp:
               'Վեբ կայքերի, բջջային հավելվածների, 3D մոդելների ստեղծում եւ Մուտքի անվտանգության համակարգերի ստեղծում',

            createWebsitesAndMobileAppTitle: [
               'Վեբ կայքերի մշակում',
               'Բջջային հավելվածներ',
               'Խաղերի եւ Unity-ի ստեղծում',
               '3D մոդելավորում',
               'CRM համակարգերի պատրաստում',
               'Մուտքի անվտանգության համակարգեր'
            ],

            createWebsitesAndMobileAppTxt: [
               'Կայքերի ստեղծում զրոյից-  Webex Technologies ընկերությունը մշակում է վեբ կայքեր  զրոյից՝ մասնակցելով դրա ստեղծման բոլոր փուլերին։Այլ կերպ ասած, հաճախորդը բարձրաձայնում է իր նպատակները, ցանկությունները դիզայնի և ինտերֆեյսի մասին և մենք դրանց հիման վրա մշակում  ենք պահանջվող կայք։',
               'IOS-ի եվ Android-ի համար բջջային հավելվածների  ստեղծում -“Webex Technologies” ընկերությունը բջջային հավելվածների ստեղծման Հայաստանյան ընկերություն է, ունի բազմաթիվ տարիների փորձ բջջային տեխնոլոգիաների և հարթակների ոլորտում։Մենք առաջարկում ենք բջջային հավելվածների ստեղծման ծառայությունների լայն շրջանակ Հայաստանի և այլ երկրների շուկայում։Մեր ընկերությունը տրամադրում է ՏՏ խորհրդատվություն, մշակում,նախագծում, փորձարկում և  տեխնիկական աջակցություն։',
               '“Webex Technologies” ընկերության կողմից Unity ծրագրով ստեղծված հավելվածների առավելությունները-Մեր ընկերությունը հանդիսանում է փորձառու և հուսալի գործընկեր Unity-ի միջոցով լուծումներ մշակելու գործում։Մենք տարիների ընթացքում ամբողջ աշխարհում հաճախորդների համար արդյունավետ և վստահելի ծրագրեր ենք ստեղծում։ Unity տեխնոլոգիաները օգտագործելով՝ մենք հաջողությամբ լուծում ենք խնդիրներ այնպիսի ոլորտում, ինչպիսիք են օնլայն առևտուրը, խաղերը, առողջապահությունը, կրթությունը, գովազդը և այլն։Եթե ցանկանում եք քննարկել նախագծի մանրամասները,խնդրում ենք կապնվել մեզ հետ։',
               'Եռաչափ մոդելավորում կամ 3D մոդելավորում- ցանկացած առարկաների կամ օբյեկտների եռաչափ պատկերների ստեղծումն է։Այս նպատակով մասնագետները օգտագործում են հատուկ համակարգչային ծրագրեր, այսպես կոչված 3D ծրագրեր։Նրանց օգնությամբ երկրաչափական նախագծերը վերածվում են  եռաչափ պատկերների։ 3D մոդելավորման գրավչությունը կայանում է տեխնոլոգիայի գրեթե անսահմանափակ հնարավորությունների մեջ։Օգտագործելով 3D գրաֆիկա՝ դուք կարող եք ստեղծել ցանկացած իրական կամ երևակայական շենքի, ստատիկ օբյեկտի կամ երևույթի մոդել։',
               'CRM համակարգի մշակումն ու ներդնումը - առավել պահանջարկ ունի այն իրավիճակներում, երբ տեղի է ունենում բիզնեսի և ընկերության կառավարման որակական թռիչք։Այսինքն՝ օրվա ընթացքում հաղորդակցությունների(վաճառքի, գործարքների), ինչպես նաև գործարար կապերի քանակը(հեռախոսազանգեր, էլ- նամակներ,SMS ծանուցումներ), որոնք կառավարիչը կատարում է մեկ ամսվա ընթացքում, գերազանցում է մարդուն հասանելի օպերատիվ հիշողության շեմը, այս դեպքում ռեսուրսները, որը անձնակազմը  ծախսում է փաստաթղթերի և Excel աղյուսակների վրա։ CRM համակարգին կարող են փոխանցել տվյալ գործառույթները՝ 1․ Պատվերի կատարման և գործարքների կնքման ավտոմատացում յուրաքանչյուր կոնկրետ դիրքի կարգավիճակը հետևելու միջոցով․ 2․ Փաստաթղթաշրջանառության պարզեցում՝ պայմանավորված պայմանագրերի, ակտերի, հաշիվների և հաշիվ ապրանքագրերի ավտոմատ ստեղծմամբ, 3․ Հաճախորդների միասնական բազայի վարում, որը պարունակում է մանրամասն տեղեկատվություն յուրաքանչյուր հաճախորդի և նրա հետ փոխազդեցությունների պատմության մասին․ ERP համակարգերի մշակում և ներդրում։',
               'Մուտքի առաջադեմ համակարգը միավորում է ժամանակակից տեխնոլոգիաները, ինչպիսիք են RFID (Ռադիոհաճախականության նույնականացում), QR կոդերը և դեմքի ճանաչումը, որպեսզի ապահովի մուտքի անխափան և անվտանգ կառավարում տուռնիկետների միջոցով: Այս համակարգը ապահովում է մուտքի կետերի արդյունավետ կառավարում տարբեր միջավայրերում, ինչպիսիք են գրասենյակային շենքերը, կրթական հաստատությունները և հանրային վայրերը:'
            ],

            // ==================services=====================================

            servicesTitle: [
               'Վեբ կայքեր',
               'Բջջային հավելվածներ',
               '3D մոդելավորում',
               'Դասընթացներ',
               'ERP-համակարգ ',
               'Մուտքի համակարգեր',
               'Սպասարկում',
               'CRM համակարգեր',
            ],

            servicesCentreDivTitle: 'Ծառայություններ',

            // ==================videoCoursesSection=====================

            videoCoursesSectionTitle: 'Ծրագրավորման ուսուցման ցանկ',
            videoCoursesSectionTitle_H: 'Ծրագրավորման ուսուցման պլան ',

            videoCoursesSectionTxt: [
               'Անվճար փորձնական դաս. Մեր ապագա ուսանողները. Դուք հնարավորություն ունեք անվճար ծանոթանալու Webex Technologies-ի դասավանդման մեթոդներին և դասավանդողներին։',
               ' Դասընթաց հիմունքային. Մենք առաջարկում ենք Ձեզ ծրագրավորման հիմունքային դասընթացներ Webex Technologies-ում: Դուք հնարավորություն ունեք ընտրել ձեզ հարմար ժամանակ, ձևաչափ և դասավանդող։ Դա անելու համար անհրաժեշտ է գրանցվել։',
               'Ծրագրավորման խորացված դասընթաց. Մասնակի անհատական տարբերակում ուսանողները մի լսարանում տարբեր վիդեոնյութերուվ ուսումնասիրիրում են թեմաները: Միաժամանակ լսարանում կարող են լինել մինչև 6 ուսանող: Դասվար ծրագրավորողը բոլոր ուսանողներին անհատապես ուշադրություն է դարձնում: Ուսանողներից ամեն մեկը տարբեր արագությունով է առաջ գնում',
               'Անհատական  Պրեմիում դասընթաց. ուսանողը լսարանում կամ օնլայն մենակ է լինում դասախոսի հետ և դասախոս ծրագրավորողի ամբողջ ուշադրութտունը միայն այդ ուսանողինն է ուղղված լինում: Դասերը անցկացվում են ուսանողին հարմար ժամերին:',
            ],

            videoCoursesSectionfeatures: [
               'անվճար',
               'խմբաին',
               'մասնակի անհատական մոտեցում',
               'անհատական մոտեցում',
            ],

            videoCoursesSectionTitleGround: ['React JS', 'Java', 'Laravel', 'Node.JS'],

            VideoCoursesSection_duration: [
               'Տեվողությունը-120 Րոպե',
               'Տեվողությունը-960 Րոպե',
               'Տեվողությունը-1440 Րոպե',
               'Տեվողությունը-1440 Րոպե',
            ],

            VideoCoursesSection_price: "Դրամ",


            

            VideoCoursesSection_title: [
               'Փորձնական դասընթաց',
               'Ստանդարտ փաթեթ',
               'Պրոֆեսիոնալ փաթեթ',
               'Պրեմիում դասընթաց',
            ],
            videoCoursesSectionTitleCourses_month: '6 ամիս',
            videoCoursesSectionTitleCourses_week: '3 օր /շաբաթ',
            videoCoursesSectionTitleCourses: 'Courses',
            // ==================Footer===========================

            footerMenu: [
               'Հետադարձ կապ',
               'Էլ․ հասցե։',
               'Հեռ։',
               'Մեր հասցեն',
               'Մ․ Բաղրամյան պող․ 79 1/1',
               'Կարողեք հետևել մեզ',
            ],

            // ==================courseseRegistration==============================

            courseseRegistrationSlideCountLine: ['Տեվողությունը ', 'րոպե'],

            validation_reg_log: [
               'Այս դաշտը պարտադիր է',
               'Գրե՜ք ճիշտ Էլ. հասցե',
               'Գաղտնաբառը պետք է պարունակի թվանշան',
               'Գաղտնաբառը պետք է պարունակի  Փոքրատառ',
               'Գաղտնաբառները չեն համնկնում',
               'Գրե՜ք միայն թվանշան',
               'Գաղտնաբառը ամենաքիչ պետք է պարունակի 8 նիշ',
            ],

            resetPasswordModalError_message: 'Ինչ որ բան այն չէ',

            abouteUs_Header: [
               'Մեր մասին',
               'Webex Technologies ՍՊԸ-ն մասնագիտացած է կայքերի ստեղծման գործում: Ծրագրավորման ամենատարածված լեզուներն են՝ HTML5, CSS3-Flex, Grid, Parallax, Sprites, PHP, JavaScript, ES6, jQuery, Bootstrap, Ajax, React JS, Laravel, OOP/MVS, MySQL և այլն: աշխատում է արդեն 20 տարի։',
            ],

            abouteUS_info_block: [
               'Ինչու՞ է հարմար և արդյունավետ համագործակցել «WebEx Technologies» կենտրոնի հետ',
               'Կայքի ստեղծման ցանկացած փուլում գործողությունների թափանցիկություն. Մենք պարբերաբար հաշվետվություններ ենք տրամադրում և ապահովում ենք աշխատանքի լիարժեք իրազեկում: Անհատական ​​մոտեցում յուրաքանչյուր հաճախորդին։ Կայքի ստեղծման նախապատրաստական ​​փուլում հաճախորդի բիզնեսի առանձնահատկությունների մանրակրկիտ ուսումնասիրությունը նպաստում է հնարավորինս սեղմ ժամկետում առավելագույն էֆեկտի ձեռքբերմանը: Կայքի ստեղծումը մեզ համար ստեղծագործական գործընթաց է։ Մենք ոչ միայն օգտագործում ենք հայտնի և լայն տարածում գտած լուծումներ կայքի մշակման համար, այլ նաև նոր և անսպասելի լուծումներ, որոնք դարձնում են կայքը յուրահատուկ և հիշվող: Կայքեր ստեղծելիս մենք օգտագործում ենք միայն լիցենզավորված (առևտրային և ոչ առևտրային) CMS, մոդուլներ, բաղադրիչներ, դիզայն։',
            ],

            abouteUs_training: [
               'Webex Technologies / ուսուցում',
               'Webex Tech-ը Webex Technologies-ի հետ համատեղ անցկացնում է անհատական վեբ, android տեխնոլոգիաների ուսուցման դասընթացներ։',
               'Դասընթացն անցկացվում է փորձառու ծրագրավորողների կողմից։',
               'Անհատական դասընթացներ։',
               'Ուսումնական տեսանյութերը գիտելիքների հիմքն են։',
               'Դասընթացը կարող է իրականացվել առցանց։',
               'Տեխնոլոգիաների և ծրագրավորման լեզուների հետազոտություն: HTML5, CSS3-Flex, Grid, Parallax, Sprites, PHP, JavaScript, ES8, jQuery, Bootstrap, Ajax, React JS, Laravel, OOP/MVS, MySQL և այլն:',
               'Վստահելի գործընկեր։',
               'Ուժեղ թիմ։',
               'Տարիների փորձ։',
               'WebEx Tech-ն աշխատում է արդեն 20 տարի: Մարդիկ, ովքեր աշխատում են մեզ հետ, երախտապարտ են մեր կատարած աշխատանքի որակի համար: Մենք կառուցում ենք հաջողակ և ոգեշնչող կայքեր: Արդեն ունե՞ք կայք: Այսպիսով, ձեզ անհրաժեշտ է - կայքերի օպտիմալացում և առաջխաղացում, գովազդ ինտերնետում, կայքերի աջակցություն և սպասարկում: Մենք ստեղծում ենք ինտերնետային լուծումներ մեր հաճախորդների համար, որոնք կդարձնեն ծրագրի մշակումը պարզ և ֆունկցիոնալ:',
            ],

            abouteUs_ourPartnersTitle: 'Մեր գործընկերները',
            abouteUs_ourPartners: [
               'ՀՀ Կրթության գիտության, մշակույթի եվ սպորտի նախարարություն',
               'ՀՀ տարածքային կառավարման եվ ենթակառուցվածքների նախարարություն',
               'ՀՀ բարձր տեխնոլոգիական արդյունաբերության նախարարություն',
               'ՀՀ տարածքային կառավարման եվ զարգացման միգրացիոն ծառայություն',
               'Վ․Ա․ Ֆանարջյանի անվան ուռուցքաբանության ազգային կենտրոն ՓԲԸ',
               'ՀՀ Հանրային ծառայությունները կարգավորող հանձնաժողով',
               'Գույքի գնահատման և աճուրդի կենտրոն',
               'ՀՀ Պաշտպանության նախարարություն',
               'ՈՒռուցքաբանության ազգային կենտրոն',
               'ԿԳՄՍՆ երիտասարդական կենտրոն',
               'Հեմոֆիլիայի և թրոմբոֆիլիայի հայկական կենտրոն',
               'Պրիզմա հետազոտության և վերլուծության կենտրոն',
               'Օրբելի վերլուծական - հետազոտական կենտրոն',
               'ՀՀ ոստիկանություն',
               'LGG foundation',
               'Էլնարտի ՍՊԸ',
               'Angel investor Club of Armenia',
               'Ներդրումների աջակցման կենտրոն',
               'Կադաստրի Կոմիտե',
               'Մասիսի համայնք',
               'Լիգա ուսլուգ ՍՊԸ',
            ],

            order_now: 'Պատվիրե՛ք  հիմա',

            projectPage_translation: [
               'Նկարագրություն',
               'Նախագծի անվանումը',
               'Ծրագրավորման լեզուներ',
               'Ստեղծման ժամանակհատված',
               'Ստեղծման տարեթիվը',
               'ամիս',
               'թվական',
            ],

            orderFormTitle: ['Գրեք մեզ', 'ձեր նախագծի մասին', 'Ընտրեք ծառայություններ'],

            orderForm: [
               'Անուն*',
               'Հեռախոսահամար*',
               'Էլ.փոստ*',
               'Կայքի հասցեն',
               'Հաղորդագրություն',
               'Ընտրել ֆայլը',
               'Կորպորատիվ վեբ կայքի մշակում',
               'Առցանց խանութների մշակում',
               'Որոնման համակարգի օպտիմալացում (SEO)',
               'Համատեքստային գովազդ',
               'Կայքի մշակում',
               'Կայքի տեխնիկական աջակցություն',
               'E-mail marketing',
               'Հրավիրատոմս',
               'Google analytics',
               'Բիզնես գործընթացների ավտոմատացում',
            ],

            contact_us_title: ['Կապ', 'Հետադարձ կապ'],

            feedback: ['Անուն*', 'Էլ․ հասցե*', 'Հաղորդագրություն'],

            our_teem_title: 'Մեր Թիմը',

            servicesPagesItemsTitle: [
               'Վեբ ծրագրի մշակում',
               'Կայքի առաջխաղացում',
               'Տեխնիկական աջակցություն',
               '3D մոդելավորում',
               'Խաղերի եւ Unity-ի ստեղծում',
               'Բջջային հավելվածներ',
            ],

            servicesPagesItems_small_txt: [
               'Վեբ ծրագրի մշակման ծառայություններ՝ սերվերի ամենատարածված լեզուներով:',
               'Կայքերի օպտիմալացում և առաջխաղացում: Կայքերի որոնման առաջխաղացման: Գովազդ համացանցում:',
               'Այն իր մեջ նեռառում է ինչպես տեխնիկական, այնպես էլ տեղեկատվական աջակցություն, ինչպես նաև կոմպլեքսային կայքի սպասարկում:',
               'Բավականին բարդ տարածք է, որը կապված է տարբեր ոլորտների հետ՝ սկսած խաղերի և ֆիլմերի արտադրությունից մինչև ճարտ․ նախագծեր:',
               'Unity-ի առավելություններն են վիզուալ զարգացման միջավայրի, խաչաձև հարթակներ աջակցության և մոդուլային համակարգի առկայությունը:',
               'Բջջային ծառայությունների տարբերակները․ այս ամենը բացարձակապես անհրաժեշտ է iOS-ի և Android-ի բջջային սարքի սեփականատիրոջ համար:',
            ],

            servicesPagesItems_full_txt: [
               `WebEx Technologies-ի մասնագետները ՏՏ արտադրանքի մշակման մեծ փորձ ունեն: Մեր ընկերության ծառայությունները կարող են լինել համապարփակ կամ ներառել զարգացման որոշ մասը:
            Անտառային կայքերը վեբ ռեսուրս են, որը WebEx Technologies-ը պատրաստում է զրոյից՝ մասնակցելով իր ստեղծման բոլոր փուլերին: Այլ կերպ ասած, հաճախորդը բարձրաձայնում է իր նպատակները, դիզայնի և ինտերֆեյսի ցանկությունները, և մենք դրանք տեղադրում ենք կայքում:
            Էլեկտրոնային փաստաթղթերի կառավարման ավտոմատացման համակարգերի (EDMS) մշակում - այս համակարգի ստեղծումը կորպորատիվ տեղեկատվական հարթակի անբաժանելի և շատ կարևոր մասն է:
            Ծրագրային ապահովման մշակումը (ծրագրային ապահովում) նոր ծրագրային ապահովման ստեղծման գործունեություն է՝ աշխատակիցների աշխատանքը պարզեցնելու և ներքին գործընթացների ավտոմատացման համար։
            CRM համակարգի մշակումն ու ներդրումն առավել պահանջված է այն իրավիճակներում, երբ առկա է որակական թռիչք բիզնես վարելու և ընկերության կառավարման գործում:
            
            Մեր գործունեության հիմնական սկզբունքները
                                                                                         
            1) Հարմարվողականություն.
            2) Մաքուր օրենսգրքի սկզբունքները.
            3) Ռազմավարականորեն մտածված իրականացում.
            3) Հուսալիություն.
            4) Անվտանգություն.
            4) Օպտիմալություն և արդյունավետություն`,
               `WebEx Technologies-ն առաջարկում է ձեզ վեբ կայքերի, բջջային հավելվածների կամ խաղերի պրոֆեսիոնալ առաջմղում:
            Դուք կարող եք ընտրել ձեր կայքի առաջխաղացման ցանկացած տարբերակ.
            Ինտեգրված վեբ կայքի առաջմղում - որոնման համակարգի առաջխաղացում, համատեքստային գովազդ, ձեր արտադրանքի համապարփակ գովազդային արշավ ինտերնետում:
            Որոնողական կայքերի առաջխաղացում՝ ապահովելով, որ կայքը ավելի բարձր դիրքերում է որոնման համակարգերում (օրինակ՝ Yandex, Rambler, Google): Կայքի որոնման համակարգի առաջխաղացման և ձեր կայքը որոնման համակարգերի TOP10 հարցումներին բերելու արդյունքում դուք ստանում եք կայքի տրաֆիկի ավելացում նպատակային հարցումների համար:
            Համատեքստային գովազդը կարճ տեքստային գովազդ է, որը հայտնվում է որոնման արդյունքների էջերում՝ ի պատասխան օգտվողների հարցումների:`,
               `Կենտրոնի մասնագետների կողմից իրականացվող վեբկայքերի սպասարկումը կարող է ներառել ինչպես տեխնիկական աջակցություն կամ տեղեկատվական աջակցություն, այնպես էլ կայքի ամբողջական սպասարկում: Ծրագրային ապահովման ամսական սպասարկման տարբեր տարբերակներ կան, ներառյալ տեխնիկական և տեղեկատվական աջակցության տարբեր տեսակներ: Այլևս կարիք չկա ընկերությունում պահել կայքի սպասարկող հատուկ աշխատակից. Ձեր կայքի աջակցությունը, կայքի թարմացումը իրականացվում է WebEx Technologies-ի մասնագետների կողմից։

            Կարող եք պատվիրել ինչպես վեբ կայքի մեկանգամյա սպասարկում, այնպես էլ կայքի ամսական սպասարկում: Մենք մշակել ենք հարմար սակագնային պլաններ կայքերի սպասարկման համար։

            Նաև կայքի արդյունավետ աշխատանքին աջակցության կազմակերպման շրջանակներում կատարվում են հետևյալ աշխատանքները.
            1) Կայքի թարմացում, ստատիկ կայքերի տեղափոխում ժամանակակից CMS (բովանդակության կառավարման համակարգեր):
            2) Կայքի աուդիտ, կայքի վերլուծություն։
            3) Կայքի արդիականացում, ներառյալ վերանախագծում, CMS-ի ինտեգրում, լրացուցիչ մոդուլներ և ինտերակտիվ փոխազդեցության համակարգեր:`,
               `Եռաչափ մոդելավորումը կամ եռաչափ մոդելավորումը ցանկացած առարկայի կամ առարկայի եռաչափ պատկերներ ստեղծելու գործընթաց է:
            Օգտագործելով 3D գրաֆիկա՝ դուք կարող եք ստեղծել ցանկացած իրական կամ երևակայական շենքի, անշունչ առարկայի կամ երևույթի մոդել:
            3D մոդելավորման կիրառման ոլորտները
            Օգտագործելով 3D մոդելավորում, կարող եք ստեղծել հետևյալ օբյեկտները.
            1) ճարտարապետական ​​մոդելներ;
            2) խաղերի, ֆիլմերի հերոսներ և հերոսներ;
            3) ֆիլմերի և խաղերի նկարահանման վայրեր;
            4) արձաններ և հուշանվերներ;
            5) սարքավորումների և սարքերի համար նախատեսված պատյաններ;
            6) պրոթեզներ, օրթեզներ;
            7) տարբեր մեխանիզմների մանրամասներ և շատ ավելին:`,
               `Մեր թիմը խորը գիտելիքներ և փորձ ունի խաղերի, վեբ, աշխատասեղանի, բջջային և միջպլատֆորմային հավելվածների մշակման գործում՝ օգտագործելով Unity-ի բոլոր առավելություններն ու գործիքները՝ հաճախորդների նպատակներին հասնելու համար:
            Unity-ի առավելություններն են տեսողական զարգացման միջավայրի առկայությունը, միջպլատֆորմային աջակցությունը և մոդուլային համակարգը
            զարգացումը ներառում է.
            1)  2D և 3D խաղերի մշակում
            2) Unity 3D միջպլատֆորմային հավելվածների մշակում
            3) Unity3D-ի միջոցով բջջային, վեբ և աշխատասեղանի հավելվածների մշակում
            4) Ինտերակտիվ հավելվածների մշակում
            5) UI/UX դիզայն
            6) 3D մոդելներ
            7)  Հավելվածի կազմաձևում և աջակցություն
            8) Վահանակով խաղերի մշակում (PS, Xbox, Wii և այլն)`,

               `WebEx Technologies-ը մշակում է հավելվածներ՝ նախ նախագծելով բիզնես մոդել և դրա զարգացման ռազմավարություն: Վերլուծությունը կարևոր դեր է խաղում մեր աշխատանքում՝ պահանջների և բիզնես գործընթացների վերլուծություն, մարքեթինգային և տեխնիկական աուդիտ, պահանջների կառավարում նախագծի բոլոր փուլերում:
            Մեր նպատակն է ստեղծել այնպիսի ապրանք, որը ոչ միայն շահավետ է, այլև օգտակար հասարակության համար: Հայեցակարգը մշակելիս դուք կստանաք պատրաստի աշխատանքային նախատիպ, որը թույլ կտա գնահատել հավելվածի որակը, փոփոխություններ կատարել և կատարելագործել արտադրանքը։
            
            Բջջային հավելվածների օգնությամբ դուք կարող եք ձեր բիզնեսը տեղափոխել նոր մակարդակ՝ իրականացնել գործարքներ, վերապատրաստել աշխատակիցներին, պլանավորել և դնել առաջադրանքներ, գնել և առաքել ապրանքներ ընկերության և հաճախորդի համար ամենահարմար ձևաչափով: Մենք համագործակցում ենք ոչ միայն խոշոր ընկերությունների, այլեւ ստարտափների հետ, որոնք պահանջում են խնդիրների լուծումներ, որոնք դեռ չունեն ինտերֆեյսի օրինակներ։
          
            Աշխատանքի փուլերը.
            1) Վերլուծություն. Մենք իրականացնում ենք շուկայի կոնկրետ վերլուծություն և օգտագործում ենք լավագույն լուծումները՝ առաջին կարգի ապրանքներ ստեղծելու համար:
            2) Դիզայն. Մենք իրականացնում ենք բիզնես առաջադրանքներ՝ օգտագործելով օգտագործողի համար հարմար ինտերֆեյսներ՝ հիմնված վերլուծական տվյալների վրա:
            3) Դիզայն. Մենք ստեղծում ենք լավագույն օգտագործողի միջերեսը: Մենք նկարում ենք արտադրանքի հարմար և հասկանալի դիզայն:
            4) Զարգացում. Հավելվածն իրականացնում ենք կոդով։ Մենք գրում ենք մաքուր և կայուն կոդ արագ և ակտիվ աշխատանքի համար։
            5) Փորձարկում. Մենք փորձարկում ենք ծառայությունը տարբեր սարքերի վրա և երաշխավորում ենք որակյալ արտադրանքի ժամանակին թողարկումը:`,
            ],

            projectType: ['Բոլորը', 'Վեբ', 'Բջջային', 'Խաղեր և 3D'],
            dashboard_name: 'Վահանակ',

            account_Box: ['Հաշիվ', 'Խմբագրել պրոֆիլը'],

            purchase_history: ['Գնումների պատմություն', 'Դասեր', 'ընդհանուրից'],
            my_Training: 'Իմ Թրեյնինգը',

            description: 'Նկարագրություն',

            web_project_page_top_div_title: 'Վեբ ծրագրի մշակում',

            KeyWordComponent: 'Բանալի բառեր',

            KeyWordComponentItem: [
               'Ինտեգրված կայքի առաջխաղացում,',
               'Բյուջեի առաջխաղացում,',
               'Ինտերնետ գովազդ,',
               'Որոնման համակարգ,',
               'Կայքի օպտիմզացում,',
               ' SEO - Որոնման համակարգի օպտիմալացում,',
               'Համատեքստային գովազդ,',
               'Սոցիալական ցանցերում առաջխաղացում, բլոգեր, ծառայություններ,',
               ' Կայքերի ազատ աուդիտ,',
               'Հաշվի անվճար տեղադրում,',
               ' Կայքերի առաջխաղացում և օպտիմալացում. հարց / պատասխան,',
               ' Հոդվածների կայքի առաջխաղացման մասին,',
               ' Կայքի առաջխաղացման արժեք,',
               'Գներ Բրենդային էջերի ստեղծումը սոցիալական ցանցերում,',
               'Եռաչափ մոդելավորում,',
               ' Blender,',
               'Gimp,',
               ' Քոթեջի և իր տարածքի 3D վիզուալացում,',
               ' 3D մոդելավորում,',
               'Ինտերիերի 3D վիզուալիզացիում,',
               ' ՏՏ - խորհրդատվություն,',
               ' iOS,',
               ' Android,',
               ' Դիզայն,',
               'Unity-ով ստեղծում,',
               ' UI / UX դիզայն,',
               ' 2D և 3D խաղերի ստեղծում',
            ],

            web_project_page_web_development_title: 'Վեբ ծրագրի մշակում',

            all_promotion: 'Կայքի առաջխաղացում',

            modeling_3d: '3D մոդելավորման մշակում',

            web_project_page_web_development_info: [
               'Webex technologies ընկերությունը գործում է ավելի քան 15 տարի։ Մեր ընկերությունը ունի մեծ փորձ վեբ ծրագրերի մշակման, աութսորսինգի, ծրագրային ապահովման և վեբ ծրագրերի մշակման, ՏՏ խորհրդատվության, հավելվածների ինտեգրման, բիզնես գործընթացների վերլուծության, ծրագրային ապահովման փորձարկման, պահպանման և աջակցության ոլորտում։',
               'Եկեք նայենք, թե որոնք են Webex Technologies-ի մատուցած ծառայությունները:',
            ],

            homework_linne: ['Կատարել տնային առաջադրանքները', 'Դաս', 'ր․'],

            homework_linneHom: ['Կատարել տնային առաջադրանքները', 'Աառաջադրանք', 'ր․'],

            cordial: 'Բովանդակություն',

            all_video_lessons: 'Բոլոր վիդեոդասերը',

            profileArr: [
               'Քո Պրոֆիլը',
               'Լրացրու տվյալներդ',
               'Պահպանել',
               'Չեղարկել',
               'գրիր գործող գաղտնաբառը',
               'գրիր նոր գաղտնաբառը',
               'կրկնիր նոր գաղտնաբառը',
            ],

            help: [
               'Օգնություն',
               'Արագ աջակցություն',
               'Ամենահաճախ տրվող հարցերի պատասխաններն ընդամենը մեկ սեղմումով:',
               'Գրեք ձեր հարցը',
               'Անուն Ազգանուն',
               'Էլ. հասցե',
               'հեռախոսի համար',
               'հաղորդագրություն',
               'Ուղարկել',
            ],

            visitHistory: [
               'Այցելեք պատմություն',
               'Թիվ',
               'Դասեր',
               'Ընդհանուր դասեր',
               'Թվերի դասեր',
               'Վճարում',
            ],
            dashboard_name: 'Գլխավոր էջ',
            current_lessons: 'Ընթացիկ դասեր',
            profile: 'Անձնական էջ',
            helpp: 'Օգնություն',
            visit_history: 'Այցելության պատմություն',
            log_out: 'Դուրս գալ',

            lerne_more: 'Իմացեք ավելին...',

            slide_section: [
               'Դասավանդում ենք',
               'Մեր ժամանակակից և մասնագիտական մոտեցումը գրավել է արդեն իսկ բազում հաճախորդների',
            ],
            dashboard: 'Վահանակ',
            currentLessons: 'Ընթացիկ դասեր',
            profile: 'Անձնագիր',
            helpp: 'Օգնություն',
            visitHistoryy: 'Այցելության պատմություն',
            logOut: 'Դուրս գալ',

            //Website Promotion
            promotionTitle: 'Կայքի առաջխաղացում',
            promotionText:
               '«WebexTech»-ն առաջարկում է ձեզ պրոֆեսիոնալ կայքերի առաջմղում Երևանում և Հայաստանի այլ մարզերում։ Ընտրեք ձեր կայքի առաջխաղացման լավագույն տարբերակները',

            photoDivs: [
               'Կայքի ինտեգրված առաջխաղացում',
               'Նման վեբ կայքերի առաջխաղացումը համատեղում է տարբեր տեսակի առաջխաղացումներ. ձեր կայքի ամենաարդյունավետ խթանումը:',
               'Կայքի որոնման համակարգի առաջխաղացում',
               'Որոնողական համակարգի առաջխաղացման նպատակն է կայքէջը որոնողական համակարգերում (ինչպիսիք են Yandex, Rambler, Google) ամենաբարձր մակարդակը հասցնել: Երբ ձեր կայքը գտնվում է լավագույն 10 որոնումներից առաջինում, ձեր տրաֆիկը ավտոմատ կերպով կավելանա:',
               'Կայքի որոնման համակարգի առաջխաղացում',
               'Համատեքստային գովազդը նաև վեբ կայքի առաջմղման այլ միջոց է: Դա կարճ տեքստային գովազդ է, որը հայտնվում է որոնման արդյունքների էջերում՝ ի պատասխան օգտատերերի հարցումների, ինչպես նաև Yandex.Direct-ի, Runner-ի և Google AdWords-ի այլ գովազդային կայքերում:',
               '',
            ],
            textDivTop: [
               'WebExTech - ինտեգրված վեբ կայքի մշակման ռազմավարություն:',
               'Որո՞նք են «WebExTech»-ի միջոցով ձեր կայքի առաջխաղացման առավելությունները.',
               'Թափանցիկություն կայքի առաջխաղացման ցանկացած փուլում: Ապահովվում է պարբերական հաշվետվություն, աշխատանքի լիարժեք իրազեկում։ Աշխատանքի հաստատման նախնական փուլերը, կայքի առաջխաղացման և օպտիմալացման բոլոր գործողությունները:',
               '«WebExTech» - Yandex-ի պաշտոնական գործընկերը: Համատեքստային գովազդ Yandex-ում և մեդիա (banner) գովազդ ինտերնետում «webexTech» մասնագետների օգնությամբ՝ Yandex-ի վրա հիմնված գներով: Մենք աջակցում ենք Yandex-ում ձեր գովազդային արշավին մասնագետների կողմից և այն անվճար է:',
               'Անհատական ​​մոտեցում յուրաքանչյուր հաճախորդին։ Մենք ապահովում ենք մեր հաճախորդներին մատուցել կայքի ամենաարդյունավետ առաջխաղացումը, որը կբավարարի նրա բիզնեսի կարիքները:',
               'Ցանկանու՞մ եք պատվիրել կայքի առաջխաղացում: Կարիք չկա ժամանակ ծախսել ճանապարհորդելու վրա։ Եթե ​​ձեր Ընկերությունը գտնվում է Հայաստանում, բավական է, որ դուք զանգահարեք մեր կենտրոն, նշանակեք ձեզ հարմար ժամ և վայր, և մեր աշխատակիցն ինքը կգա ձեզ մոտ: Այլ քաղաքներում գտնվող հաճախորդների հետ կապված բոլոր խնդիրները մեզ թույլ են տալիս արագ լուծել տեղեկատվության փոխանակման ժամանակակից համակարգերը՝ E-mail, ICQ, Skype, QIP և այլն:',
               'Մենք օգտագործում ենք միայն օրինական և լավագույն մեթոդները ձեր կայքի առաջխաղացման համար: Մենք համոզված ենք, որ ձեր վեբ կայքի օպտիմալացման համար կիրառում ենք միայն օրինական մեթոդներ, որպեսզի հաճախորդի կայքը չհայտնվի որոնման համակարգի պատժամիջոցների տակ:',
               'Կայքի առաջխաղացումն իրականացվում է որոնման արդյունքների 1-10-րդ տեղում: Դուք ընտրում եք, թե որտեղ եք ցանկանում պատվիրել ձեր կայքի առաջխաղացումը: Վերը նշված ակցիաները կատարելու համար լրացուցիչ վճար չկա:',
               'Քանի որ յուրաքանչյուր հաճախորդ մեզ համար առանձնահատուկ է, ուստի մենք յուրաքանչյուր նախագծին տալիս ենք առավելագույն ժամանակ և ուշադրություն:',
            ],

            middleSide: [
               'Մասնաճյուղերը',
               'WebEx Technologies-ն առաջարկում է ծրագրային ապահովման մշակման ծառայություններ տարբեր ոլորտների ընկերություններին:',
               'ԲԱՆԿ ԵՎ ՖԻՆԱՆՍՆԵՐ',
               'ՀԵՌԱԿԱՊ',
               'ԱՎՏՈ ԵՎ ՏՐԱՆՍՊՈՐՏ',
               'ԱՌՈՂՋԱՊԱՀՈՒԹՅՈՒՆ',
               'ԱՌԵՎՏՐԻ ԵՎ ԱՌԵՎՏՐՈՒԹՅԱՆ',
               'ՈՒՍՈՒՑՈՒՄ ԵՎ ՄԱՐԿԵՏԻՆԳ',
            ],

            bottomSideTexts: [
               'Հարմարվողականություն. Մաքուր օրենսգրքի սկզբունքները. Ռազմավարական իրականացում.',
               'Մենք կառուցում ենք արագ և հուսալի կայքեր: Մենք ապահովում ենք առաջադրանքների օպտիմալ կատարումը։',
               '«Webex Tech»-ով կայք ստեղծելիս դուք նաև ստանում եք.',
               'Դոմենի անվճար գրանցում ',
               'նախընտրելի է հաճախորդի կողմից մեկ տարի ժամկետով: Մենք կօգնենք ձեզ անվճար ստուգել, թե արդյոք ընտրված տիրույթի անվան ընտրանքները գրանցման համար անվճար են:',
               'Կայքի անվճար գրանցում խոշոր որոնման համակարգերում ',
               'ինչպիսիք են Yandex-ը, Google-ը, Rambler-ը, Mail.ru-ն: Գրանցումը կատարվում է միայն ձեռքով, ինչը երաշխավորում է որոնման համակարգերում Ձեր կայքի մասին տեղեկատվության տրամադրման ճիշտությունն ու ժամանակին։',
               'Անվճար տեղադրման այցելուներ ',
               'Վիճակագրության հաշվիչ ստեղծված կայքում (Yandex, LiveInternet համակարգեր, Mail.ru կամ ձեր խնդրանքով մեկ այլ):',
               'Կայքի տեղադրում և կազմաձևում հոսթինգում: ',
               'Որակավորված հոսթինգի ընտրություն, որը համապատասխանում է կայքի ճիշտ շահագործումն ապահովելու տեխնիկական պահանջներին: Դուք լիովին պատրաստ եք աշխատանքի տեղամաս:',
               'Անվճար ուսուցում հաճախորդների համար ',
               'ովքեր պատվիրում են կայք (վոլգոգրադում ձեզ հարմար ցանկացած վայրում կամ առցանց) կայքի և կայքի կառավարման համակարգի հետ աշխատելու համար:',
               'Անվճար տեխնիկական աջակցություն - ',
               '6 ամիս (թարմացումների տեղադրում պահանջվող համակարգի համար, ծրագրի սխալների ուղղում, որը կարող է առաջանալ):',
               'Ինչու՞ համագործակցել «WebExTech» կենտրոնի հետ.',
               'Կայքի ստեղծման ցանկացած փուլում գործողությունների թափանցիկություն. ',
               'Մենք պարբերաբար հաշվետվություններ ենք տրամադրում և ապահովում ենք աշխատանքի լիարժեք իրազեկում:',
               'Անհատական մոտեցում յուրաքանչյուր հաճախորդին։ ',
               'Հաճախորդի բիզնեսի առանձնահատկությունների մանրակրկիտ ուսումնասիրությունը կայքի ստեղծման նախապատրաստական փուլում օգնում է հնարավորինս կարճ ժամանակում ստանալ առավելագույն ազդեցություն:',
               'Որոշե՞լ եք կայք ստեղծել: Այնուհետև կարիք չկա ժամանակ ծախսել ճամփորդության վրա: Եթե ձեր Ընկերությունը գտնվում է Երևանում, պարզապես զանգահարեք մեր Կենտրոն, կազմակերպեք ձեզ համար հարմար ժամ և վայր, և մեր աշխատակիցն ինքը կգա ձեզ մոտ: Այլ քաղաքներում գտնվող հաճախորդների հետ կապված բոլոր խնդիրները մեզ թույլ են տալիս արագ լուծել տեղեկատվության փոխանակման ժամանակակից համակարգերը. ',
               'Էլփոստ, Skype, ICQ, QIP և այլն:',
               'Բովանդակության կառավարման համակարգի օպտիմալ ընտրություն (CMS), ռեսպոնսիվ կայքի դիզայն ստեղծելու տարբերակներ, գաղափարների ստեղծում և լուծումների որոնում, որոնք բարձրացնում են կայքի ֆունկցիոնալությունը, անհատականությունը և արդյունավետությունը:',
               'Կայքի ստեղծումը մեր ծրագրավորողների կիրքն է: ',
               'Մենք փորձում ենք կայքի մշակման մեջ օգտագործել ոչ միայն հայտնի և տարածված լուծումներ, այլև նոր անսպասելի լուծումներ, որոնք կայքը դարձնում են յուրահատուկ և ոգեշնչող։',
               'Կայքեր ստեղծելիս,',
               'մենք օգտագործում ենք միայն լիցենզավորված (առևտրային և ոչ առևտրային) CMS, մոդուլներ, բաղադրիչներ, ձևավորումներ:',
               'Յուրաքանչյուր հաճախորդ մեզ համար եզակի է: Դուք կարող եք վստահ լինել, որ երբ մեզ մոտ կայք ստեղծեք, ձեր նախագծին կտրվի առավելագույն ժամանակ և ուշադրություն:',
               'Հատուկ առաջարկները մեզ թույլ են տալիս մեր Հաճախորդների համար վեբկայքի ստեղծումը հնարավորինս արդյունավետ և շահավետ դարձնել:',
            ],
            buttonsSide: [
               'ՀԱՐՑՈՒՄ ԿԱՄ ՀԱՐՑԻ ՀԱՄԱՐ',
               'Կայքի մշակում',
               'Կայքի առաջխաղացում/ SEO',
               'Սպասարկում և աջակցություն',
               '3D մոդելավորման մշակում',
               'Բջջային հավելվածների մշակում',
               'Միասնության զարգացում',
            ],

            /////3d modeling///////////
            topSideUntilSlider: [
               '3D մոդելավորում',
               'Եռաչափ մոդելավորում կամ 3D մոդելավորում',
               ', ցանկացած առարկայի կամ առարկայի եռաչափ պատկերներ ստեղծելու գործընթացն է։ Այդ նպատակների համար մասնագետները օգտագործում են մասնագիտացված համակարգչային ծրագրեր, այսպես կոչված, 3D խմբագիրներ: Նրանց օգնությամբ հարթության վրա կառուցվում են երկրաչափական պրոյեկցիաներ, որոնք անհրաժեշտ են եռաչափ ցանկացած էֆեկտ ստեղծելու համար։',
               'Հատուկ գեղեցկությունը',
               '3D մոդելավորում',
               'կայանում է այս տեխնոլոգիայի գործնականում անսահմանափակ հնարավորությունների մեջ: Օգտագործելով',
               '3D գրաֆիկա',
               ', կարող եք ստեղծել ցանկացած իրական կամ երևակայական շենքի, անշունչ առարկայի կամ երևույթի մոդել։',
            ],
            middleSideUnderSlider: [
               'ՆԵՐԿԱՅԱՑՆԵԼ ԸՆԴՀԱՆՈՒՐ ՏԵԽՆՈԼՈԳԻԱՆԵՐ',
               'Բլենդեր',
               'Նյութ',
               'Gimp, c#',
               'MakeHuman',
            ],
            create3dModel: [
               '3D ՄՈԴԵԼՆԵՐԻ ՍՏԵՂԾՈՒՄ',
               'Ցանկացած առարկայի կամ առարկայի եռաչափ մոդել ստեղծելու գործընթացը կատարողից պահանջում է ոչ միայն համակարգչային գրաֆիկայի հմտությունների անբասիր տիրապետում, այլև ստեղծագործության առանձնահատուկ մանրակրկիտ և բծախնդիր կատարում: Ամբողջ գործընթացի հաջողությունը, ինչպես նաև դրա հուսալիությունը կախված է նրանից, թե որքան իրատեսական և ճշգրիտ կցուցադրվի մոդելը:',
               'Աշխատանքների որակյալ կատարումը ենթադրում է մի քանի պարտադիր պայմանների պահպանում. Թվարկենք դրանցից ամենագլխավորները։',
               'Նախագծի նպատակների համար անհրաժեշտ է ընտրել ամենահարմար մասնագիտացված ծրագիրը: Այսպիսով, վերը նշված Autodesk 3ds Max-ը հայտնի է իր ունիվերսալությամբ: Այն կարող է օգտագործվել ցանկացած ոլորտում և ցանկացած առաջադրանքի համար: Եվ, օրինակ, AutoCAD-ի մեկ այլ ծրագիր ունի ավելի նեղ մասնագիտացում. այն անփոխարինելի է արդյունաբերական և շինարարական կայքերի մոդելավորման համար:',
               'Եռաչափ մոդելի բարձր որակը ենթադրում է պատվիրատուի կողմից տրամադրված փաստաթղթերի հրահանգների ճշգրիտ կարգ: Չնայած մոդելավորման գործընթացի կրեատիվ բնույթին, ցանկացած նախաձեռնության դրսևորում, որը հակասում է լիազորություններին, այստեղ կլինի ոչ տեղին և ոչ պրոֆեսիոնալ:',
               'Առավել իրատեսական էֆեկտների հասնելու համար անհրաժեշտ է կիրառել միայն ամենաբարձր որակի հյուսվածքները: Սա հարց է, թե որքանով է տեխնիկապես հագեցած տեխնիկան:',
               'Նույն նպատակով, պետք է ուշադիր մշակել 3D մոդելի պատկերի բոլոր մանրամասներն ու տարրերը՝ առանձնահատուկ ուշադրություն դարձնելով դրանցից ամենափոքրին: Վերջնական պատկերի ռեալիզմի գաղտնիքը հենց նրբերանգների ճշգրիտ փոխանցման մեջ է։',
            ],
            table3dModel: [
               'Գները և ժամկետները',
               'Նախագիծ',
               'Վերջնաժամկետ',
               'Գները',
               'Քոթեջի 3D պատկերացում տարածքի հետ',
               '2-5 օր',
               '110$ 2-3 անկյուններից',
               'Առևտրի կենտրոնների, բազմաբնակարան շենքերի ճարտարապետական 3D վիզուալիզացիա',
               '3-10 օր',
               '440$ 3-5 անկյուններից',
               'Հողատարածքի, բնակելի համալիրների 3D պատկերացում',
               '5-14 օր',
               '720$ 5-10 անկյուններից',
               'Ընդհանուր պլանի 3D պատկերացում',
               '5-10 օր',
               'fռոմ 580$ 1 անկյուն',
               'Ինտերիերի 3D վիզուալիզացիա',
               '2 օրից',
               'Սենյակի մ2 3 անկյունների համար 2-10$',
               'Տան, բնակարանի կամ ճարտարապետական օբյեկտի վիդեո ներկայացում',
               '3 օրից',
               'սկսած 22$-ից տեսանյութի 1 վայրկյանը + մոդելավորման արժեքը',
               'Խաղի կերպարները',
               '2 օրից',
               '22$',
            ],

            ifrem_text: [
               'Բարի գալուստ նորարարական 3D լուսանկարչության աշխարհ, որտեղ ձեր սենյակի յուրաքանչյուր անկյուն կենդանանում է ձեր աչքի առաջ: 360 աստիճան 3D լուսանկարչությունը թույլ է տալիս զգալ սենյակը դիտելու լիովին ինտերակտիվ փորձառություն, կարծես դու ներսում լինես: Պրոֆեսիոնալ լուսանկարիչների և դիզայներների մեր թիմը օգտագործում է առաջադեմ սարքավորումներ և տեխնոլոգիաներ՝ ստեղծելու եզակի և գրավիչ 3D հարցումներ, որոնք կարող են օգտագործվել տարբեր նպատակներով:',
               'Բացահայտեք 3D 360 աստիճան նկարահանման բոլոր առավելությունները.',
               'Ամբողջական ինտերակտիվություն. օգտատերերը կարող են ազատորեն պտտել պատկերը և դիտել սենյակը ցանկացած տեսանկյունից՝ ստանալով դրա տարածքի և դիզայնի ամենաիրատեսական տպավորությունը:',
               'Հարմարավետ և մատչելի. 3D ուղեցույցները կարող են հեշտությամբ ներառվել կայքերում, շնորհանդեսներում կամ հավելվածներում՝ ապահովելով պոտենցիալ հաճախորդների կամ շահագրգիռ կողմերի համար գույքի վերաբերյալ տեղեկատվության հեշտ հասանելիություն:',
               'Աչք գրավող և տեսողական ազդեցություն. բարձրորակ պատկերներով և դրանց հետ շփվելու ունակությամբ՝ 3D լուսանկարչությունը հզոր տպավորություն է ստեղծում և օգնում ուշադրություն հրավիրել ձեր թեմայի վրա:',
               'Անկախ նրանից, թե ձեզ անհրաժեշտ է վիրտուալ էքսկուրսիա անշարժ գույքով, ինտերիերի նկարազարդումներ դիզայնի նախագծի համար կամ պարզապես տպավորիչ միջոց՝ ձեր տարածքը ներկայացնելու համար, մեր 360 աստիճան 3D լուսանկարչության ծառայությունները կօգնեն ձեզ հասնել ձեր նպատակներին: Կապվեք մեզ հետ այսօր՝ ավելին իմանալու համար, թե ինչպես կարող ենք ձեր տարածքը վերածել 3D վիրտուալ աշխարհի:',
            ],

            wey_title: 'Ընկերության զարգացման ուղղությունները',

            way: 'Մեր ընկերության մասնագետները բարձր մակարդակի պրոֆեսիոնալիզմ ունեն` իրենց կողմից մատուցվող ծառայությունների ոլորտում: Յուրաքանչյուր ծառայություն մատուցվում է որպես աշխատանքների ամբողջություն կամ որպես մշակման առանձին մաս:',

            title_h1: [
               'Կայքերի ստեղծում զրոյից - ',
               'Էլեկտրոնային փաստաթղթաշրջանառության համակարգերի մշակում -',
               'Ծրագրային ապահովման մշակումը',
               'Բիզնեսի ավտոմատացում,',
               'Ավտոմեքենաների սպասարկման ավտոմատացում',
               'Դեղատների ավտոմատացում`',
               'Հյուրանոցների ավտոմատացումը',
               'Փաստաթղթաշրջանառության ավտոմատացումը',
               'Խանութների ավտոմատացումը',
               'Վարձույթի ավտոմատացում -',
               'Ռեստորանների ավտոմատացում -',
               'Գեղեցկության սրահների ավտոմատացում - ',
               'Պահեստների ավտոմատացումը',
               'Շինարարության ավտոմատացման',
               '',
            ],
            way_info: [
               'Մեր ընկերության մասնագետները բարձր մակարդակի պրոֆեսիոնալիզմ ունեն` իրենց կողմից մատուցվող ծառայությունների ոլորտում: Յուրաքանչյուր ծառայություն մատուցվում է որպես աշխատանքների ամբողջություն կամ որպես մշակման առանձին մաս:',
               'դա վեբ ռեսուրս է, որը Webex Technologies ընկերությունը պատրաստում է զրոյից՝ մասնակցելով դրա ստեղծման բոլոր փուլերին: Այլ կերպ ասած, հաճախորդը բարձրաձայնում է իր նպատակները, ցանկությունները դիզայնի և ինտերֆեյսի մասին, և մենք դրանց հիման վրա ձևավորում ենք վաճառող կայք:',
               ' այս համակարգի ստեղծումը կորպորատիվ տեղեկատվական հարթակի բաղկացուցիչ և շատ կարևոր մասն է: Էլեկտրոնային փաստաթղթաշրջանառության ավտոմատացման համակարգերի մշակման գործում Webex Technologies ընկերությունը առավել հաճախ միացնում և ավտոմատացնում է համակարգերը` ապահովելով այդ համակարգերի արդյունավետ փոխազդեցությունը, իսկ հարմար սպառողական ինտերֆեյսը մեծացնում է աշխատողների արտադրողականությունը, բիզնես գործընթացների արդյունավետության վերահսկումը, գործադիր կարգապահության ապահովումը, օպերատիվ, ակտուալ տվյալների տրամադրումը տարբեր զեկույցներում:',
               'նոր ծրագրային ապահովում ստեղծելու գործողություն է, որն օգտագործվում է աշխատողների աշխատանքը պարզեցնելու և ներքին գործընթացներն ավտոմատացնելու համար: Սա ծրագրային ապահովման փոխկապակցման համակարգ է արտաքին համակարգերի հետ, որոնք ապահովում են հաճախորդի կարիքները և շատ ավելին: Ծրագրային ապահովման լայն ֆունկցիոնալությունը ապահովում է մեծ թվով ոլորտների աշխատանքը: Մենք կքննարկենք դրանցից մի քանիսը:',
               ' այն է՝ առօրեական առաջադրանքների փոխանցում ինտերնետ հարթակ ավտոմատացման համար: Դրա շնորհիվ դուք կարող եք ավտոմատ կերպով ընդունել պատվերներ, ապրանքագրեր տրամադրել, ապրանքներ ուղարկել և շատ ավելին՝ նվազագույն թվով մարդկանց մասնակցությամբ:',
               ' խոշոր, միջին կամ փոքր բիզնեսի համար: Այս ծառայության նպատակն է ավտոմատացնել ներքին գործընթացները և ապահովել գործունեության թափանցիկություն ինչպես համակարգի ներսում, այնպես էլ արտաքին օգտագործողների մոտ:',
               'մեկ դեղատան կամ դեղատների ցանցի գործունեության ապահովում, վաճառված ապրանքների վերաբերյալ հաշվետվությունների տրամադրում և դեղատների արտադրանքի պահեստային մնացորդների հետ հարաբերակցություն, համակարգի վերլուծական գործընթացների ապահովում:',
               'նախատեսված է հյուրանոցային ազատ սենյակների առցանց ամրագրման հեշտության ապահովման, կարծիքներ թողնելու, ընկերությանը և սպասարկող անձնակազմին գնահատելու համար, համակարգի և հյուրանոցի ղեկավարության միջև հաղորդակցության ապահովման, հյուրերի հետ հյուրանոցի աշխատանքի արդյունավետությունը հաշվարկելու և վերլուծելու համար:',
               'նախատեսված է փաստաթղթաշրջանառության հետ աշխատողների աշխատանքը պարզեցնելու համար, և, որ ամենակարևորն է, ծրագրային ապահովումը նախատեսված է աշխատողների աշխատանքում խախտումներից և սխալներից խուսափելու համար',
               'հատկապես կարևոր գործընթաց է խանութներում ապրանքների և շրջանառության հաշվարկման համար: Ինտեգրում 1C-ի հետ և առանձին պահեստային հաշվառում:',
               'այս ծառայությունը նախատեսված է ապրանքների վարձույթն ապահովելու և ծախսված ժամանակի գինը որոշելու համար: Վճարային համակարգին կապելը այս դեպքում ակտուալ է:',
               'այս ոլորտում ծրագրային ապահովումը բազմապրոֆիլ է և բազմաֆունկցիոնալ: Ծրագրային ապահովումը կարող է կրել ռեստորանի քաղաքականությունը հաճախորդների համար կամ բավարարել ռեստորանի ներքին գործունեության կարիքները:',
               ' գեղեցկության սրահի աշխատանքը ավտոմատացնելու, սրահի այցելուների առցանց գրանցման, առցանց օրացույցի ստեղծման համար:',
               'պահեստային ապրանքների հաշվառման համակարգ է, որն ապահովում է համակարգի ներսում աշխատողների աշխատանքի թափանցիկությունը: Համակարգի ինտեգրում այլ համակարգերի հետ և շատ ավելին:',
               'ծրագրային ապահովումը շինարարության ավտոմատացման գլոբալ համակարգ է, այն է` հաշվապահական հաշվառում, վերլուծություն, ծախսված շինանյութի վերլուծություն կամ ապագա շինարարության համար շինանյութի գնման վերլուծություն:',
               'Վեբ մշակումը կայք կամ վեբ հավելված ստեղծելու գործընթաց է: Գործընթացի հիմնական փուլերն են վեբ դիզայնը, էջերի դասավորությունը, հաճախորդի և սերվերի կողմի ծրագրավորումը, ինչպես նաև վեբ սերվերի կարգավորումը:',
               'Վեբ կայքի մշակման փուլերը',
               'Այսօր գոյություն ունի վեբ կայքերի մշակման մի քանի փուլ.',
            ],
            way_list: [
               '1.վեբ կայքի կամ վեբ հավելվածի նախագծում (պահանջների հավաքում և վերլուծություն, տեխնիկական բնութագրերի մշակում, ինտերֆեյսների նախագծում)',
               '2.կայքի համար ստեղծագործական հայեցակարգի մշակում',
               '3.կայքի դիզայն-հայեցակարգի ստեղծում',
               '4.էջերի մակետի ստեղծում',
               '5.մուլտիմեդիա օբյեկտների ստեղծում',
               '6.էջերի և ձևանմուշների դասավորություն',
               '7.ծրագրավորում (ֆունկցիոնալ գործիքների մշակում) կամ բովանդակության կառավարման համակարգում ինտեգրում',
               '8.կայքի նյութերի օպտիմիզացում և տեղադրում',
               '9.փորձարկում և ճշգրտումներ',
               '10.նախագծի հրապարակում հոստինգում',
               '11.աշխատանքային կայքի կամ դրա ծրագրային բազայի սպասարկում:',
            ],
            development: 'CRM մշակում,',

            development_crm: [
               'CRM համակարգի մշակումն ու ներդրումը',
               'Վեբ մշակում -',
               'ERP համակարգերի զարգացում-',
               'ERP համակարգերի զարգացում- ',
            ],

            crm_title: [
               'առավել պահանջարկ ունի այն իրավիճակներում, երբ տեղի է ունենում բիզնեսի և ընկերության կառավարման որակական թռիչք: Այսինքն՝ օրվա ընթացքում հաղորդակցությունների (վաճառքի, գործարքների), ինչպես նաև գործարար կապերի քանակը (հեռախոսազանգեր, էլ. նամակներ, SMS ծանուցումներ), որոնք կառավարիչը կատարում է մեկ ամսվա ընթացքում, գերազանցում է մարդուն հասանելի օպերատիվ հիշողության շեմը, այս դեպքում ռեսուրսները, որը անձնակազմ է ծախսում փաստաթղթերի և Excel աղյուսակների վրա: CRM համակարգին կարող են փոխանցվել տվյալ գործառույթները.',
               'պատվերի կատարման և գործարքների կնքման ավտոմատացում` յուրաքանչյուր կոնկրետ դիրքի կարգավիճակը հետևելու միջոցով.',
               'փաստաթղթաշրջանառության պարզեցում` պայմանավորված պայմանագրերի, ակտերի, հաշիվների և հաշիվ- ապրանքագրերի ավտոմատ ստեղծմամբ.',
               'հաճախորդների միասնական բազայի վարում, որը պարունակում է մանրամասն տեղեկատվություն յուրաքանչյուր հաճախորդի և նրա հետ փոխազդեցությունների պատմության մասին.',
               'ERP համակարգերի մշակում և ներդրում',
               'Որպես կանոն, ERP մշակումն իրականացվում է մոդուլային կառուցման սկզբունքով',
            ],

            crm_titleP: [
               ' որպես կանոն, ERP-ի մշակումն իրականացվում է ըստ մոդուլային կառուցվածքի սկզբունքի: Ավելին, յուրաքանչյուր մոդուլ «պատասխանատու է» բիզնեսի կամ ընկերության գործունեության առանձին ուղղության համար: Մասնավորապես, ERP համակարգի մեկ մոդուլի ուղղվածությունը կարող է լինել արտադրության գործընթացի ավտոմատացումը, մեկ այլ մոդուլինը` մարքեթինգային գործունեության ավտոմատացումը: Դրանք կարող են ընդգրկել մարդկային ռեսուրսների, ֆինանսների, որակի կառավարումը և այլ ոլորտներ: Այսպիսով, բիզնեսի ավտոմատացումը, օգտագործելով այն հնարավորությունները, որոնք տալիս են ժամանակակից ERP համակարգերը, թույլ է տալիս ապահովել նույնիսկ ամենամեծ ընկերության արդյունավետ կառավարումը իր գործունեության բոլոր ասպեկտներում: Միևնույն ժամանակ, բոլոր մոդուլները համակցված են ընդհանուր, ամբողջական տեղեկատվական համակարգի մեջ, որն ապահովում է ինտեգրված և համապարփակ բիզնեսի կառավարում: ERP համակարգի մշակման և ներդրման շնորհիվ կարիք չկա ստեղծել մի շարք անհատական տեղեկատվական համակարգեր, որոնց օգնությամբ իրականացվում է յուրաքանչյուր ուղղության ավտոմատացում` այդ համակարգերի հաղորդակցության հետագա ճշգրտմամբ, որը կարող է զգալիորեն բարդանալ ինչպես տեխնիկական պատճառներով, այնպես էլ ծրագրային համատեղելիության խնդիրներով:',
               ' Մենք առաջարկում ենք վեբ մշակման ծառայությունների լայն տեսականի` օգտագործելով ամենատարածված ծրագրավորման լեզուներն ու ֆրեյմվորկերը:',
               ' Մեր վեբ ծրագրավորողների թիմը մշտապես հետևում է վեբ ծրագրավորման վերջին միտումներին, ինչը թույլ է տալիս մեզ ստեղծել որակյալ վեբ հավելվածներ:',
               ' Վեբ ծրագրավորման ծառայություններ',
               'Webex Technologies-ի փորձը վեբ հավելվածների մշակման ոլորտում ներառում է ինչպես տեխնիկապես բարդ, այնուամենայնիվ, միևնույն ժամանակ էրգոնոմիկ և օգտագործման համար հեշտ հավելվածներ, այնպես էլ ցանկացած բարդության կայքերի ստեղծում: Մենք առաջարկում ենք վեբ հավելվածների մշակման ամբողջական ցիկլ՝ բիզնեսի վերլուծություն, դիզայն, ներդրում, որակի փորձարկում, սպասարկում և աջակցություն:',
            ],

            crm_title_li: [
               'Java ծրագրավորում',
               'Ծրագրավորողներ',
               'Վեբ հավելվածների մշակում',
               'Խաղերի մշակում',
               'Բջջային հավելվածների մշակում',
               'Վիրտուալ իրականության հավելվածների մշակում',
               'Լրացված իրականության հավելվածների մշակում',
               'Չաթբոտերի մշակում',
               'Համակարգային ծրագրավորում',
               'Համակարգային վերլուծաբաններ',
               'Վեբ կայքերի ստեղծում',
               'Վեբ կայքերի դասավորություն',
               'Հարմարվող դասավորություն',
               'Էլ. փոստի դասավորություն',
               'Կայքի բջջային տարբերակը',
               'Վեբ կայքի կատարելագործում',
               'Կայքերի համար շաբլոնների գրում',
               'Վճարային համակարգերի միացում',
               'Փորձարկողներ',
               'Աշխատանք տեքստերի հետ',
               'CRM- ի ներդրում',
               'ERP համակարգի ներդրում',
               'CRM-ի մշակում',
            ],
            busines_analytic: [
               'Բիզնեսի վերլուծությունը ՏՏ ',
               'ՏՏ ենթակառուցվածքի ձևավորումը',
               'Ծրագրային ապահովման ներդրումը',
            ],
            busines_analytic_title: [
               'ոլորտում տվյալների հավաքագրումն է, խնդիրների և հաճախորդների պահանջների լուծման առաջարկ, որի հիման վրա կազմվում է տեխնիկական առաջադրանք և նախագծի հետագա ձևավորում:',
               'գործողությունների հստակ ծրագիր կազմելու և բիզնեսի կարիքները բավարարող տեղեկատվական համակարգ ստեղծելու համար ռեսուրսներ նկարագրելու մասին է: Խնդիրն է պարզել, թե ինչն ու ինչ եղանակով կբերի ընկերությունը ցանկալի արդյունքների:',
               'ծրագրային ապահովման կարգավորման գործընթացն է `օգտագործման որոշակի պայմանների համար, ինչպես նաև օգտվողներին ծրագրային արտադրանքի հետ աշխատելու ուսուցումը:',
               'պահանջում է գործողություններ հետևյալ երեք աշխատանքային հարթություններում',
            ],
            busines_analytic_li: [
               'Կազմակերպության գործունեության մեջ ընդհանուր արդյունքի տեսանկյունից կրիտիկական ընթացակարգերի առանձնացում: Երբ սահմանված է այդպիսի ընթացակարգերի մի ամբողջություն, անհրաժեշտ է նախ և առաջ օգտագործել ՏՏ լուծում՝ տվյալ ընթացակարգերի շրջանակներում գործողություններն ավտոմատացնելու համար: Այսպիսով, մշակված ՏՏ լուծումը ինքնաբերաբար դառնում է կենսական կարևոր և պահանջարկ ունեցող կազմակերպության համար: Այն նաև կապահովի ներդրման գործընթացի հրապարակայնությունը:',
               'Կազմակերպության նորմատիվ դաշտի ընդլայնում` դրանում ներառելով կանոնակարգեր, որոնք նկարագրում են ավտոմատացված գործընթացների ընթացակարգերի կատարման կարգը: Հակառակ դեպքում, կա անհամապատասխանության վտանգ ավտոմատացված ընթացակարգերի և կազմակերպության մնացած գործընթացների միջև:',
               'Կազմակերպության առկա գործունեության ընդհանուր ստանդարտացման ուղղությամբ աշխատանքների իրականացում: Ընթացակարգերի կատարման լավագույն փորձը առանձնանում և ներառվում է ՏՏ լուծման մեջ` համաձայն մասնակիցների մեծամասնության համար առավել օգտակարի սկզբունքի: Նման ընթացակարգերի տոկոսը` համեմատ ավտոմատացման ընդհանուր ծավալի հետ, կարող է փոքր լինել, բայց դա կազմակերպության մեջ որոշման կայացման գործընթացին տալիս է կշիռ ` դրա «օգտակարության» բարձրացման հաշվին:',
            ],
            busines_analytic_p: 'Ծրագրային ապահովման փորձարկումը ուսումնասիրության',
            busines_analytic_title_p: [
               'Ծրագրային ապահովման սպասարկում (աջակցություն) - շահագործման հանձնելուց հետո ծրագրային ապահովման բարելավման, օպտիմալացման և թերությունների վերացման գործընթացն է:',
               'Ծրագրային ապահովման սպասարկումը ծրագրային ապահովման կյանքի ցիկլի փուլերից մեկն է, որը հաջորդում է ծրագրային ապահովումը շահագործման հանձնելու փուլին: Սպասարկման ընթացքում ծրագրում փոփոխություններ են կատարվում` օգտագործման ընթացքում հայտնաբերված թերությունները շտկելու, ինչպես նաև ծրագրային ապահովման կիրառելիությունը բարձրացնելու նպատակով նոր գործառույթներ ավելացնելու համար:',
            ],

            introducing: 'Ընդլայնված տեխնոլոգիաների ներկայացում',

            adaptability:
               'Ադապտիվություն: Մաքուր կոդի սկզբունքները: Նախագծված ռազմավարության իրականացում:',

            adaptability_title: [
               'Մենք ստեղծում ենք արագ և հուսալի կայքեր: Մենք կատարում ենք առաջադրանքների օպտիմիալ իրականացում:',
               '«Webex Tech»-ի հետ կայք ստեղծելիս դուք ստանում եք.',
               'Ինչո՞ւ է Ձեզ հարմար եւ արդյունավետ համագործակցել «WebEx Technologies» ընկերության հետ:',
            ],

            adaptability_title_h: [
               'Հաճախորդի նախընտրած դոմեյնի անվճար գրանցումը ',
               'Կայքի անվճար գրանցումը հիմնական որոնման համակարգերում,',
               'Այցելուների վիճակագրության անվճար տեղադրումը ստեղծված կայքում ',
               'Հոսթինգի վրա կայքի տեղադրումը: ',
               'Կայքը պատվիրող հաճախորդների անվճար ուսուցում ',
               'Անվճար տեխնիկական աջակցությունը ',
            ],
            adaptability_title_text: [
               'մեկ տարով: Մենք կօգնենք ձեզ անվճար ստուգել՝ ընտրված դոմեյնի տարբերակները՝ անվճար գրանցվելու համար:',
               'ինչպիսիք են Yandex, Google, Rambler, Mail.ru: Գրանցումը կատարվում է միայն ձեռքով, որը երաշխավորում է որոնման համակարգերում ձեր կայքի մասին տեղեկություններ տրամադրելու ճշտությունը:',
               '(Yandex, LiveInternet համակարգեր, Mail.ru կամ ձեր ցանկությամբ մեկ այլը):',
               'Կայքի ճիշտ աշխատանքի ապահովման տեխնիկական պահանջներին համապատասխանող որակավորված հոստինգի ընտրություն: Դուք լիովին պատրաստ կլինեք աշխատելու կայքով:',
               '(ձեզ հարմար ցանկացած վայրում, Վոլգոգրադում կամ առցանց)՝ կայքի և կայքի կառավարման համակարգի հետ աշխատելու համար:',
               '՝ 6 ամիս (պահանջվող համակարգերի թարմացումները տեղադրելու համար, առաջացած ծրագրային սխալների ուղղում):',
            ],

            Why_to_H: [
               'Կայքերի ստեղծման ցանկացած փուլում գործողությունների <<թափանցիկություն>>:',
               'Անհատական մոտեցում յուրաքանչյուր հաճախորդին:',

               'Օպտիմալ բովանդակության կառավարման համակարգի ընտրություն (CMS), ադապտիվ կայքի դիզայնի ստեղծման տարբերակներ, գաղափարային գենեռացում եւ լուծումների որոնում, որոնք մեծացնում են կայքի գործունակությունը, անհատականությունը եւ արդյունավետությունը:',
               'Կայքի ստեղծումը մեզ համար ստեղծագործական գործընթաց է: ',
               'մենք օգտագործում ենք միայն լիցենզավորված (կոմերցիոն և ոչ կոմերցիոն) CMS, մոդուլներ, բաղադրիչներ, նմուշներ:',

               'Յուրաքանչյուր հաճախորդ յուրահատուկ է մեզ համար: Դուք կարող եք վստահ լինել՝ երբ Դուք ստեղծում եք Ձեր կայքը մեր հետ, ձեր նախագծին տրվում է առավելագույն ժամանակը եւ ուշադրությունը:',

               'Կապ էլ. փոստով',
               ' (https://www.facebook.com/WebExTech)',
               '(https://www.linkedin.com/groups/13856890/)',
               '(https://www.instagram.com/webex.am/)',
               '(+37496400073)',
            ],
            Why_to_text: [
               ' Մենք տրամադրում ենք կանոնավոր հաշվետվություններ եւ ապահովում ենք աշխատանքի լիարժեք իրազեկվածություն:',
               'Կայքի ստեղծման նախապատրաստական փուլում հաճախորդի բիզնեսի առանձնահատկությունները մանրամասն ուսումնասիրելը նպաստում է հնարավորինս կարճ ժամանակում առավելագույն արձյունքին հասնելուն:',

               'Դուք որոշե՞լ եք կայքի առաջխաղացում պատվիրել: Պարզապես պետք է զանգահարել մեր կենտրոն, նշանակել հարմար ժամանակ և տեղ ձեզ համար, և մեր աշխատակիցը ձեզ հետ կապ կհաստատի և կնշանակվի գործնական հանդիպում: Այլ երկրներում գտնվող հաճախորդների հետ բոլոր խնդիրները թույլ են տալիս արագ լուծել ժամանակակից կապի համակարգեր',

               'Օպտիմալ բովանդակության կառավարման համակարգի ընտրություն (CMS), ադապտիվ կայքի դիզայնի ստեղծման տարբերակներ, գաղափարային գենեռացում եւ լուծումների որոնում, որոնք մեծացնում են կայքի գործունակությունը, անհատականությունը եւ արդյունավետությունը:',
               ' Մենք ոչ միայն օգտագործում ենք հայտնի եւ տարածված լուծումները կայքի ստեղծման ժամանակ, այլեւ փորձում ենք գտնել նոր եւ արտասովոր լուծումներ, որոնք դարձնում են կայքի յուրահատուկ եւ հիշարժան:',
               'Կայքերը ստեղծելիս',
               'Յուրաքանչյուր հաճախորդ յուրահատուկ է մեզ համար: Դուք կարող եք վստահ լինել՝ երբ Դուք ստեղծում եք Ձեր կայքը մեր հետ, ձեր նախագծին տրվում է առավելագույն ժամանակը եւ ուշադրությունը:',

               'E-mail -',
               'Facebook -',
               'Linkedin -',
               'Instagram -',
               'WhatsApp -',
            ],

            buttons_title: 'ՏԵՂԵԿՈՒԹՅՈՒՆՆԵՐԻ կամ ՀԱՐՑԵՐԻ ՀԱՄԱՐ ',
            inquiry: [
               'Վեբ կայքի ստեղծում',
               'Կայքի առաջխաղացում',
               'Տեխ. աջակցություն',
               '3D մոդելավորում ',
               'Բջջ. հավելվածի ստեղծում ',
               'Խաղերի ստեղծում',
            ],

            suport: 'Վեբ կայքի աջակցություն և սպասարկում',
            suport_title:
               'Վեբ կայքերի սպասարկումը, որը իրականացվում է WebExTech-ի մասնագետների կողմից, կարող է ներառել ինչպես տեխնիկական աջակցություն, այնպես էլ ինֆորմատիվ աջակցություն, ինչպես նաև կայքերի ամբողջական սպասարկում: Ձեր կայքի համար ամսական պահպանման տարբեր տարբերակներ կան ՝ ներառյալ տարբեր տեսակի տեխնիկական և ինֆորմատիվ աջակցության: Այլևս կարիք չկա ընկերությունում վեբ-կայքը սպասարկող հատուկ աշխատող պահել. կայքի աջակցությունն ու կայքի թարմացումը կատարվում են «WebExTech»-ի մասնագետների կողմից:',

            MaintenanceTypes: [
               'Սպասարկման տեսակները.',
               'Տեխնիկական աջակցություն',
               'Ինֆորմատիվ աջակցություն',
            ],
            MaintenanceTypes_title: [
               'Ձեր կայքի տեխնիկական աջակցությունը կարող է ներառել հետևյալ աշխատանքները. Տվյալների պահուստավորում, պահուստավորման կայքէջի վերականգնման մոնիթորինգ, ֆորումների կառավարում և փոփոխում, տեղեկագրերի տախտակներ, հակավիրուս, հոստինգի մատակարարի հետ փոխգործակցության աջակցություն, ձեր հասցեում փոստային հասցեների ստեղծում և տեխնիկական աջակցություն: տիրույթ, վեբ կայքի նոր սերվերի փոխանցում, դոմենային գրանցման հարցում աջակցություն, FTP սերվերի կառավարում, հաշվետվությունների միջոցով կայքի այցելությունների մոնիթորինգ:',
               'Ձեր կայքի ինֆորմատիվ աջակցությունը կարող է ներառել հետևյալ աշխատանքները. վեբ կայքի բովանդակության լրացում, պատճենագրում, հոդվածներ գրել, արտադրան քի լուսանկարների կատալոգների ստեղծում, կայքի նորությունների թարմացում (կայքի թեմայի վերաբերյալ նորություններ և իրադարձություններ փնտրելը և վերաշարադրելը), ավելացնել և թարմացնել կայքում նյութեր՝ հոդվածներ, ծառայությունների և ապրանքների նկարագրություններ, մրցակցային միջավայրի մոնիթորինգ:',
               'Դուք կարող եք պատվիրել ինչպես մեկանգամյա սպասարկում, այնպես էլ ամսեկան բաժանորդագրության ծառայություն ձեր կայքի համար: Մենք մշակել ենք հարմար սակագնային պլաներ` կայքի պահպանման համար:',
               'Կայքի շրջանակներում կայքի արդյունավետ աշխատանքն աջակցելու համար հետևյալ աշխատանքներ են կատարվում.',
            ],

            MaintenanceTypes_ul: [
               'Վեբ կայքի թարմացում, ստատիկ կայքերի ժամանակակից CMS (բովանդակության կառավարման համակարգեր) թարգմանությունը:',
               'Վեբ կայքի աուդիտ, կայքի վերլուծություն:',
               'Վեբ կայքերի արդիականացում, ներառյալ վերափոխումը, CMS ինտեգրացիա, լրացուցիչ մոդուլներ և փոխգործակցության ինտերակտիվ համակարգեր:',
            ],

            // ================mobaile=========

            mobail: 'Բջջային հավելվածի ստեղծում',
            mobail_text:
               'Webex Technologies-ը ունի ավելի քան 15 տարվա աշխատանքային փորձ՝ աութսորսինգի, ծրագրային ապահովման և կայքի ստեղծման, տեղեկատվական տեխնոլոգիաների խորհրդատվության, ծրագրի ինտեգրման, բիզնես գործընթացների վերլուծության, ծրագրային ապահովման փորձարկումների, սպասարկման եւ աջակցության ապահովման գործում: Բարձրորակ ծառայություններն ուղղված են մեր հաճախորդներին տեղեկատվական անվտանգության եւ առավելագույն հարմարավետության ապահովման համար: Մեր աշխատանքի ընթացքում մեզ վստահեցին Եվրոպայում, ԱՄՆ-ում, Ռուսաստանում եւ Ուկրաինայում տարբեր ընկերություններ:',

            Reliable: [
               'IOS-ի եւ Android-ի համար բջջային հավելվածների հուսալի ստեղծում',
               '“Webex Technologies”-ը բջջային հավելվածների ստեղծման հայաստանյան ընկերությունն է, ունի բազմաթիվ տարիների փորձ բջջային ոլորտի տեխնոլոգիաների եւ հարթակների հետ: Մենք առաջարկում ենք բջջային հավելվածների զարգացման ծառայությունների լայն շրջանակ Հայաստանի եւ այլ երկրների շուկայում: Մեր ընկերությունը տրամադրում է ՏՏ խորհրդատվություն, մշակում, նախագծում, փորձարկում եւ արտադրանքի տեխնիկական աջակցություն:',
            ],
            Reliable_text:
               'Webex Technologies-ը ունի ավելի քան 15 տարվա աշխատանքային փորձ՝ աութսորսինգի, ծրագրային ապահովման և կայքի ստեղծման, տեղեկատվական տեխնոլոգիաների խորհրդատվության, ծրագրի ինտեգրման, բիզնես գործընթացների վերլուծության, ծրագրային ապահովման փորձարկումների, սպասարկման եւ աջակցության ապահովման գործում: Բարձրորակ ծառայություններն ուղղված են մեր հաճախորդներին տեղեկատվական անվտանգության եւ առավելագույն հարմարավետության ապահովման համար: Մեր աշխատանքի ընթացքում մեզ վստահեցին Եվրոպայում, ԱՄՆ-ում, Ռուսաստանում եւ Ուկրաինայում տարբեր ընկերություններ:',

            Development_of_Mobile: [
               'IOS բջջային հավելվածի մշակում',
               'ՄԵՐ ՓՈՐՁԱՌՈՒ ԾՐԱԳՐԱՎՈՐՈՂՆԵՐԸ OBJECTIVE C-Ի ԽՈՐԸ ԳԻՏԵԼԻՔՆԵՐՈՎ ԿԿԱՏԱՐԵՆ ՑԱՆԿԱՑԱԾ ԲԱՐԴՈՒԹՅԱՆ ԱՌԱՋԱԴՐԱՆՔՆԵՐ։',
               'IOS բջջային հավելված մշակողների թիմերը',
               'IOS ՄՇԱԿՈՂ ՄԵՐ ԹԻՄԸ ԱՇԽԱՏՈՒՄ ԵՆ ԱՇԽԱՐՀԻ ՏԱՐԲԵՐ ԸՆԿԵՐՈՒԹՅՈՒՆԵՐԻ ՀԵՏ՝ IOS- Ի ՀԱՄԱՐ Բջջային հավելվածներ ստեղծելոՎ (IPAD, IPHONE, IPOD TOCH)',
               'Android բջջային հավելվածի մշակում',
               'ՄԵՔՆ ՍՏԵՂԾՈՒՄ ԵՆՔ ՍՄԱՐԹՖՈՆՆԵՐԻ, ՊԼԱՆՇԵՏՆԵՐԻ ԵՎ ԱՅԼ ԲՋՋԱՅԻՆ ՀԵՌԱԽՈՍՆԵՐԻ ՀԱՄԱՐ ԲԱԶՄԱՖՈՒՆԿՑԻՈՆԱԼ ANDROID ՀԱՎԵԼՎԱԾԸ',
               'Android բջջային հավելված մշակողների թիմը',
               'ANDROID բջջային հավելված մշակողների պրոֆեսիոնալ թիմերը JAVA, GOOGLE ANDROID SDK եւ NDK- ի խորը գիտելիքներով',
            ],

            Reliable_ios: [
               'Android-ի և iOS-ի համար հավելվածներ ստեղծելու ծառայություններ',
               'Webex Technologies- ն առաջարկում է իր ծառայություններն iOS և Android բջջային հավելվածների նեյթիվ և հիբրիդ օպերացիոն համակարգերի մշակման համար: Ծրագրավորողների մեր պրոֆեսիոնալ թիմը հաջողությամբ մշակում է բարդ եւ բազմաֆունկցիոնալ ծրագրեր տարբեր բիզնես ոլորտների համար, ինչպիսիք են տրանսպորտը, բանկերը եւ ֆինանսները, առողջապահությունը, զվարճանքները, հեռահաղորդակցությունը, կրթությունը եւ էլեկտրոնային առեւտուրը:',
            ],

            bottomSideTexts_mobile: [
               '  Webex Technologies ՍՊԸ-ում մենք խորապես ուսումնասիրում ենք շուկայի դինամիկան և ապրանքանիշի էությունը՝ բացահայտելու ձեր մրցակցային առավելությունը:',

               'Բացեք բջջային հավելվածների նորարարության ներուժը:',

               '    - Արտադրանքի ձևավորում. օգտագործեք շուկայի հետազոտության և ապրանքանիշի ինքնության ուժը՝ ձեր տեղը տարբերակելու և ձեր ապրանքանիշը բարձրացնելու համար:',

               ' - Բջջային հավելվածների խորհրդատվություն. թույլ տվեք մեր փորձագետներին ուղղորդել ձեզ ամեն քայլի մեջ՝ սկսած հավելվածի հայեցակարգի ստեղծումից մինչև հարթակի համատեղելիություն՝ տրամադրելով հաջողության համար ստեղծված ճանապարհային քարտեզ:',

               '  - Բջջային հավելվածների ձևավորում. Ընկղմեք ձեր օգտատերերին ինտուիտիվ և տեսողականորեն ցնցող փորձի մեջ, որը խթանում է փոխարկումները և խթանում ներգրավվածությունը:',

               ' - Բջջային հավելվածների մշակում. ունենալով ավելի քան 50 հաջողությամբ ավարտված նախագծերի փորձ՝ մեր մշակողները առաջարկում են հուսալի, կայծակնային արագ հավելվածներ, որոնք գերազանցում են սպասելիքները:',

               'Բարձրացրեք ձեր առցանց ներկայությունը բջջային սարքերից դուրս',

               '- Վեբ մշակում. Բարելավեք ձեր բջջային հավելվածը՝ ստեղծելով բեքէնդ ֆունկցիոնալություն՝ ավելի առաջադեմ գործառույթների և ֆունկցիոնալության համար:',

               '- Բջջային հավելվածների ինտեգրում. անխափան կերպով կապեք ձեր հավելվածը բեքէնդ համակարգերին և երրորդ կողմի ծրագրերի հետ՝ ապահովելով սահուն և անխափան աշխատանք ամեն առումներով:',

               '   - Թեստավորում /QA/. Իմանալով, որ մեր ISTQB հավաստագրված ինժեներները մանրակրկիտ փորձարկում են բոլոր բջջային հավելվածների ամեն ասպեկտը՝ ֆունկցիոնալությունից մինչև անվտանգություն՝ ապահովելով օգտագործողի անթերի փորձ:',

               ' - Սպասարկում և աջակցություն. գործարկումից հետո աջակցությունից մինչև ընթացիկ համապատասխանության և կատարողականի կառավարում, մենք պատրաստ ենք աջակցել ձեր դիմումի անթերի կատարումը:',

               'Վերականգնեք ձեր ժամանակին ստեղծված բջջային հավելվածները արդիականացնելով դրանք',

               '  - Բջջային հավելվածների արդիականացում. հին հավելվածները վերածեք հզոր և ոճային գործիքների՝ թարմացված ճարտարապետությամբ և բարելավված օգտատիրոջ փորձով:',

               'Պատրա՞ստ եք փոխել ձեր ապրանքանիշը:',

               'Այսօր համագործակցեք Webex Technologies LLC-ի հետ և սկսեք նորարարության և հաջողության ճանապարհորդություն: Եկեք միասին կերտենք ձեր ապրանքանիշի ապագան:',

               'Webex Technologies ՍՊԸ-ում մենք օգտագործում ենք հետևյալ տեխնոլոգիաները, որոնք օգտագործում ենք բջջային հավելվածների մշակման համար՝ React Native, Objective C, Java Kotlin',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
            ],

            // ======================Games==============================
            games_title:'Խաղերի ստեղծում',
            games: [
               'Unity-ով հավելվածների ստեղծման ծառայությունների աութսորսինգ',
               '“ Webex Technologies” ընկերությունը լայնածավալ աշխատանք կատարելու մեծ փորձ ունեցող ընկերություն է: Մենք առաջարկում ենք Unity ծրագրով մասնագիտացված ծառայությունների ամբողջական փուլի մատուցում տարբեր ոլորտների համար: Մեր թիմը խորը գիտելիքներ և փորձ ունի խաղերի ստեղծման, վեբ, համակարգչային, բջջային եւ խաչաձեւ պլատֆորմների հավելվածների ստեղծման ոլորտում՝ կիրառելով Unity-ի բոլոր առավելություններն ու գործիքները` հաճախորդների նպատակներին հասնելու համար:',
            ],
            games_Benefits: [
               '"Webex Technologies" ընկերության կողմից Unity ծրագրով ստեղծված հավելվածների առավելությունները.',
               'Մեր ընկերությունը հանդիսանում է փորձառու եւ հուսալի գործընկեր Unity-ի միջոցով լուծումներ մշակելու գործում: Մենք տարիների ընթացքում ամբողջ աշխարհում հաճախորդների համար արդյունավետ եւ վստահելի ծրագրեր ենք ստեղծում: Unity տեխնոլոգիաները օգտագործելով՝ մենք հաջողությամբ լուծում ենք խնդիրներ այնպիսի ոլորտներում, ինչպիսիք են օնլայն առեւտրի, խաղերի, առողջապահության, կրթության, գովազդի եւ այլն: Եթե ցանկանում եք քննարկել նախագծի մանրամասները, խնդրում ենք կապվել մեզ հետ:',
            ],

            uniti: 'Unity-ի մեր ծրագրավորողների փորձը ներառում է.',

            uniti_text: [
               'Տեխնոլոգիա',
               'WEBGL, OPENGL, JAVASCRIPT, C#, C++',
               'Օպերացիոն համակարգեր',
               'OS, ANDROID, WINDOWS, OS X, LINUX',
               'Դատաբազա',
               'MYSQL, SQLITE, MONGO DB, FIREBASE',
            ],
            INTRODUCING: 'Ընդլայնված տեխնոլոգիաների ներկայացում',

            Our_expertise: [
               'Մեր փորձը Unity-ով նորարարական լուծումներ ստեղծելիս ներառում է.',
               '2D եւ 3D խաղերի ստեղծում',
               'Unity 3D խաչաձեւ հարթակի ծրագրերի ստեղծում',
               'Unity-ով բջջային, վեբ եւ համակարգչային ծրագրերի ստեղծում',
               'Ինտերակտիվ ծրագրերի ստեղծում',
               'UI / UX դիզայն',
               '3D մոդելներ',
               'Ծրագրերի տեղադրում եւ աջակցություն',
               'Կոնսոլային խաղերի ստեղծում (PS, Xbox, Wii եւ այլն)',
            ],

            canvas3D: ['Պասիվ. կառավարում', 'Ակտիվ կառավարումը, '],

            proj: [
               'Ծննդյան հրավիրատոմս ',
               'Երեկույթի հրավիրատոմս ',
               'Հարսանեկան հրավիրատոմս ',
               
            ],

            projTitle: 'Վեբ հրավիրատոմսեր',

            turnstileTitle: 'Տուռնիկետներ',

            turnstileInfoTitle: 'Մենք առաջարկում ենք մուտքի անվտանգության և վերահսկողության համակարգեր, որոնց օգնությամբ հնարավոր կլինի՝',

            turnstileInfo: [
               'Արգելափակել մուտքի իրավունք չունեցող անձանց մուտքը:',
               'Թույլատրել աշխատակիցների կամ դրա իրավունքը ունեցող անձանց մուտքը QR-ով, RFID քարտերով, FaceID սարքավորումներով, մատնահետքեր կարդացող սարքավորումներով:',
               'Վերահսկել աշխատակիցների մուտքի և ելքի օրերը և ժամերը:',
               'Հաշվետվություններ ներկայացնել տարբեր ժամանակահատվածների կտրվածքով աշխատակիցների մուտքի-ելքի վերաբերյալ /ամիս, եռամսյակ, տարի:',
               'Այցելուների մուտքի-ելքի վերահսկողություն, մուտքի քանակի սահմանափակման հնարավորությամբԲացի դա իրականացնում ենք Պատվիրատուի կարիքներին համապատասխան այլ հնարավորությունների և ֆունկցիոնալի ներդրում համակարգում:'
            ],

            turnstileOrder: 'Պատվեր',

            turnstileOrderTitle: 'Կապվեք մեզ հետ',


            turnstileType: [
               'Միակողմանի',
               'Երկողմանի',
            ],

            turnstile_videos_section_title: 'Կատարված աշխատանքները',

            turnstile_videos_titles: [
               'Սուպերմարկետների համար նախատեսված տուրնիկետ',
               'Գրասենյակների համար նախատեսված տուռնիկետ',
               'Բացօդյա Տուռնիկետ՝ Դեմքի Ճանաչմամբ․ Ապահով և Խելացի Մուտքի Վերահսկման Համակարգ',
               'Տուռնիկետների Վաճառք․ Ձեր Ընկերության Ապահովության և Կառավարման Լավագույն Լուծումները',
               'Աշխատակիցների վերահսկման սարքավորում դեմքի ճանաչման, QR սկանավորման հնարավորությամբ',
               'Տոմսային միասնական համակարգի QR տոմսով մուտքի դեմոնստրացիա'
            ],

            web_project_cycle_title: 'Ինչ է անհրաժեշտ վեբ հավելված ստեղծելու համար',

            web_projectPage_cycleTitles:[
               'Պլանավորում',
               'UX/UI Design',
               'Ծրագրավորում',
               'Թեստավորում',
               'Թողարկում'
            ],

            web_projectPage_cycleTexts:[
               'Սահմանվում է հավելվածի նպատակը, առանձնահատկությունները և պահանջները։',
               'Մշակվում է ինտերֆեյսը, որպեսզի այն լինի հարմար և արդյունավետ։',
               'Օգտագործվում են ծրագրավորման լեզուներ (օրինակ՝ JavaScript, Python, PHP) վեբ հավելվածի ֆունկցիոնալության համար։',
               'Հավելվածը թեստավորվում է սխալների հայտնաբերման համար։',
               'Հավելվածը դրվում է շահագործման և շարունակվում է նրա մշտական թարմացումների ու տեխնիկական աջակցության աշխատանքը։'
            ],

            web_projectPage_servicesTitles:[
               'Ի՞նչ տեխնոլոգիաներով ենք աշխատում',
               'Վեբ հավելվածների մշակման ժամանակ մենք օգտագործում ենք մի շարք առաջատար տեխնոլոգիաներ՝ հիմնված հավելվածների բարդության և ֆունկցիոնալության վրա։ Ահա որոշ հիմնական տեխնոլոգիաներ, որոնցով աշխատում ենք.'
            ],

            web_projectPageTitle: 'Վեբ հավելվածների մշակում',

            web_projectPageDescription: 'Վեբ հավելվածների մշակումը (Web Application Development) տեղեկատվական համակարգերի մշակման ուղղություններից է, որը ներառում է ինտերակտիվ և օգտատերերի կողմից օգտագործվող վեբ հավելվածների ստեղծումը, որոնք գործում են ինտերնետի միջոցով։ Այն ունի լայն կիրառություն՝ սկսած առևտրային համակարգերից մինչև սոցիալական ցանցեր, գործիքներ, տեղեկատվական բազաներ և այլ օգտակար ծառայություններ։',

            web_projectPage_info_part1: [
               'Ինչ է Վեբ հավելվածների մշակումը',
               'Վեբ հավելվածների մշակումը գործընթաց է, որի նպատակն է ստեղծել ինտերակտիվ ծրագրային լուծումներ, որոնք հասանելի են ինտերնետ բրաուզերների միջոցով։ Այս հավելվածները ապահովում են բիզնեսների և օգտատերերի միջև պարզեցված փոխազդեցություն՝ թույլ տալով կատարել բարդ գործողություններ առանց հավելյալ ծրագրեր ներբեռնելու։'
            ],

            web_projectPage_info_part2: [
               'Ինչու է վեբ հավելվածների մշակումը անհրաժեշտ',
               'Հասանելիություն. Վեբ հավելվածները հասանելի են ցանկացած սարքից՝ համակարգիչներից, սմարթֆոններից և պլանշետներից։',
               'Օգտագործման հեշտություն. Օգտատերերը կարող են աշխատել հավելվածի հետ առանց որևէ բարդ ծրագրային ապահովման։',
               'Տվյալների հավաքագրում և մշակում. Հավելվածների միջոցով հեշտ է հավաքել և վերլուծել տվյալները։',
               'Կառավարելիություն և աջակցություն. Օգտագործողներին կարելի է ապահովել տեխնիկական աջակցություն և հեշտությամբ կատարել նոր թարմացումներ։',
               'Կարողությունների ընդլայնում. Վեբ հավելվածները կարող են հեշտությամբ ինտեգրվել այլ համակարգերի հետ՝ ավելացնելով նոր գործառույթներ և ծառայություններ։'
            ],

            webProject_ourPartnersTitles:[
               'Մեր գործընկերները',
               'Մենք աշխատում ենք առաջատար կազմակերպությունների հետ՝ ապահովելով որակյալ և հուսալի լուծումներ:'
            ],

            webProject_comments_name: [
               'Աննա Մարկոսյան',
               'Լեվոն Կարապետյան',
               'Արման Սարգսյան',
               'Սաթենիկ Հարությունյան'
            ],

            webProject_comments: [
               'Համագործակցությունը Վեբեքսի հետ մեր կազմակերպության համար կարևոր առաջընթաց էր: Նրանց պրոֆեսիոնալ թիմը արագ ու որակով իրականացրեց մեր բոլոր տեխնիկական պահանջները։',
               'Վեբեքսը գերազանցեց մեր սպասելիքները՝ պրոֆեսիոնալիզմի և արագ արձագանքման շնորհիվ։ Ամեն հարց ու խնդիր լուծվում էր ժամանակին և որակյալ ձևով։',
               'Վեբեքսի շնորհիվ մենք ձեռք բերեցինք ժամանակակից ու խելացի տեխնոլոգիական լուծումներ, որոնք նպաստեցին մեր բիզնեսի զարգացմանը և հաջողությանը։',
               'Հիացած ենք Վեբեքսի նվիրվածությամբ և արդյունքներով՝ նրանց թիմը մեր բոլոր տեխնիկական կարիքներին մոտեցավ մեծ պատասխանատվությամբ և պրոֆեսիոնալիզմով։'
            ],

            commentsTitle: [
               'Կարծիքներ',
               'Մեր ուսանողների կարծիքները'
            ],

            studentComments_name: [
               'Սիլվա Պողոսյան',
               'Կարեն Այվազյան',
               'Նարինե Քեշիշյան',
               'Հարություն Առաքելյան'
            ],

            studentComments: [
               'Մասնակցելով այս դասընթացին՝ ես ոչ միայն ստացա մասնագիտական հմտություններ, այլև հնարավորություն գտա աշխատանքի տեղավորման։ Հիանալի փորձ էր, որն ամբողջովին փոխեց իմ կարիերան։',
               'Դասընթացները հարմարեցված էին իմ ժամանակացույցին։ Նախագծերի և գործնական առաջադրանքների շնորհիվ զգացի, որ իրականում սովորում եմ այն, ինչ պետք է գործատուներին։',
               'Անհատական մոտեցումը մեծապես օգնեց ինձ հաղթահարել բարդ հատվածները։ Ինստրուկտորները միշտ պատրաստ էին պատասխանելու հարցերին։',
               'Կարողացա սովորել առանց իմ առօրյան փոխելու, շնորհիվ հարմարեցված գրաֆիկի։ Հիմա իմ հմտությունները թույլ են տալիս աշխատել միջազգային թիմերում։'
            ],


            otherServicesTitle: 'Այլ ծառայություններ',

            otherServicesItemsTitles: [
               'Մոբայլ հավելվածի ստեղծում',
               '3D Մոդելավորում',
               'SEO',
               'Բիզնեսի Վերլուծություն',
               'Բիզնեսի ավտոմատացում'
            ],

            otherServicesItemsTexts: [
               'Մոբայլ հավելվածի ստեղծումը ներառում է հարմարավետ և օգտագործողի համար մատչելի պլատֆորմի կառուցումը՝ ապահովելով անխափան փորձ օգտատերերի համար։',
               'Ապահովում ենք բարձր որակի 3D մոդելավորում՝ տարբեր ոլորտների համար, ներառյալ արտադրանքների ներկայացում, շինարարական նախագծեր և գովազդային նյութեր:',
               'Մեր SEO ծառայությունները բարձրացնում են ձեր կայքի տեսանելիությունը որոնողական համակարգերում, ինչն օգնում է ավելացնել օրգանական այցելուների քանակը և նպաստում բիզնեսի աճին:',
               'Մեր բիզնես վերլուծության ծառայությունները օգնում են հայտնաբերել բիզնեսի ուժեղ և թույլ կողմերը՝ հիմնված տվյալների վրա՝ ռազմավարական որոշումներ կայացնելու համար:',
               'Դրա շնորհիվ դուք կարող եք ավտոմատ կերպով ընդունել պատվերներ, ապրանքագրեր տրամադրել, ապրանքներ ուղարկել և շատ ավելին՝ նվազագույն թվով մարդկանց մասնակցությամբ:'
            ],

            tell_us_sub_title: 'Ուղարկեք մեզ հաղորդագրություն եվ մեր մասնագետները սիրով կպատասխանեն ձեզ 1-2 աշխատանքային օրվա ընթացքում',

            tell_us_right_block_titles:[
               'Կոնտակտային տվյալներ',
               'Սոցիալական հարթակներ'
            ],

            tell_us_right_block_location: 'Բաղրամյան պող. 79, 1/1',


            mobail_appDevelopendPageTitle: 'Բջջային հավելվածների ստեղծում',

            mobail_appDevelopendPageDescription: 'Բջջային հավելվածների ստեղծումը անհրաժեշտություն է, քանի որ այն ոչ միայն ապահովում է սահուն ու հարմարավետ օգտագործողի փորձ, այլև հնարավորություն է տալիս բիզնեսներին աճել և ընդլայնվել՝ օգտագործելով մոբայլ տեխնոլոգիաների բոլոր հնարավորությունները։',

            mobail_appDevelopendPageInfo_part1: [
               'Ի՞նչ է բջջային հավելվածների ստեղծումը',
               'Բջջային հավելվածների ստեղծումը տեխնոլոգիական գործընթաց է, որը ներառում է ծրագիր մշակելու և այն հարմարեցնելու շարժական սարքերին, ինչպիսիք են սմարթֆոնները և պլանշետները։ Այս գործընթացը ներառում է մի քանի փուլ՝ սկսած ծրագրի նախնական նախագծումից մինչև կոդավորման, թեստավորման և վերջնական գործարկման։ Հավելվածները կարող են լինել տարբեր նպատակների համար՝ սկսած սոցիալական ցանցերից և խաղերից, մինչև առևտրային հարթակներ և բիզնեսի գործիքներ։ Կարևոր է, որ հավելվածի դիզայնը լինի ինտուիտիվ, օգտագործողի համար հարմար, և օպտիմալացված՝ տարբեր սարքերի ու էկրանների չափսերին համապատասխան։'
            ],

            mobail_appDevelopendPageInfo_part2: [
               'Ինչու է բջջային հավելվածների ստեղծումը անհրաժեշտ',
               'Անմիջական հասանելիություն. Հավելվածները ապահովում են անմիջական և արագ հասանելիություն օգտատիրոջ համար։ Օգտատերերը կարող են հեշտությամբ ներբեռնել հավելվածը և օգտագործել այն ցանկացած վայրում և ցանկացած ժամանակ։',
               'Օգտագործողի փորձի բարելավում. Հավելվածները հնարավորություն են տալիս առաջարկել օգտատերերին անհատականացված և սահուն փորձառություն՝ ավելի լավ փոխազդեցություն ապահովելով բրենդի հետ։',
               'Աճող մոբայլ շուկա. Մոբայլ օգտատերերի թիվը անընդհատ աճում է։ Հավելվածները հնարավորություն են տալիս ընկերություններին հասնել իրենց հաճախորդներին նոր ձևերով և շուկայի պահանջներին ավելի լավ արձագանքել։',
               'Բարձր ներգրավվածություն. Մշտական ծանուցումների և push-հաղորդագրությունների միջոցով բջջային հավելվածները հնարավորություն են տալիս հաճախորդներին ավելի լավ կապ պահպանել և ներգրավվածություն ապահովել։',
               'Բիզնեսի զարգացում և եկամուտների աճ. Մոբայլ հավելվածները կարող են նպաստել վաճառքների աճին՝ հնարավորություն տալով օգտատերերին կատարել գնումներ, պատվերներ կամ ծառայություններ անմիջապես հավելվածից։'
            ],

            mobile_services_title: 'Բջջային հավելվածի ստեղծման գործընթացում օգտագործվող տեխնոլոգիաները կախված են ծրագրի բնույթից, նպատակներից և պլատֆորմներից։ Ահա ամենատարածված տեխնոլոգիաները, որոնք կիրառվում են բջջային հավելվածների զարգացման մեջ.',

            development_page_header: [
               'Ծրագրավորման դաընթացներ',
               'Սովորեք կոդ գրել, ծրագրային լուծումներ մշակել և կատարելագործել ձեր հմտությունները իրական նախագծերի վրա:'
            ],

            development_page_our_advantages_titles: [
               'Հմտություններ',
               'Սերտիֆիկատ',
               'Ինտերնշիփ',
               'Թիմ',
               'Փորձ',
               'Ճկունություն',
               'Անհատականացում',
               'Վստահություն'
            ],

            development_page_our_advantages_texts: [
               'Նոր մասնագիտական հմտությունների ձեռքբերում՝ համապատասխան ոլորտում հաջողության հասնելու համար:',
               'Մենք բոլոր ուսանողներին տրամադրում ենք սերտիֆիկատ՝ մասնագիտական վստահության համար:',
               'Մեր բոլոր ուսանողները հնարավորություն ունեն անցնելու մեկ ամսյա ինտերնշիփ հենց մեզ մոտ։',
               'Օգտագործելով իրական նախագծեր և խումբային աշխատանքներ՝ ուսանողները սովորում են արդյունավետորեն համագործակցել թիմի հետ։',
               'Դասընթացների միջոցով իրականացվում են գործնական նախագծեր, որոնց շնորհիվ ստացած գիտելիքները օգտագործվում են իրական խնդիրների լուծման մեջ:',
               'Դասընթացների ժամերը և ձևաչափը հարմարեցված են ուսանողների առօրյային՝ ապահովելով հարմարավետություն։',
               'Յուրաքանչյուր ուսանողի համար անհատականացված ուսուցման մոտեցում՝ հիմնված նրա կարիքների և նպատակների վրա:',
               'Նոր հմտությունների յուրացումը և նախագծերի հաջող ավարտը նպաստում են ինքնավստահության բարձրացմանը, ինչը նաև կարևոր է մասնագիտական կյանքում։'
            ],

            development_courses_cycles_title: 'Ի՞նչ փուլերով են անցնում մեր դասընթացները',

            development_courses_cycles_stage_menu: [
               '1-ին փուլ',
               '2-ին փուլ',
               '3-ին փուլ'
            ],

            development_courses_cycles_stage_Texts: [
               'Սովորելու ենք frontend ծրագրավորում, կոդ գրելու մաքուր ձեվ, սովորելու ենք ստեղծել ադապտիվ վեբ կայքեր համապատասխան տարբեր չափերի, սեվորելու ենք java script ի ֆունկցիաները, օգտագործելու ենք react JS գրադարան',
               'Սովորելու ենք Backend ծրագրավորում, բազաների հետ աշխատանք, API ների միջոցով կապվելու ենք frontend ի հետ, PHP ի գրադարանով անցնելու ենք Laravel կամ Node JS ծրագրավորման լեզուները 2-5 ամիս',
               'Վերջին փուլում ուսանողը հնարավորություն կստանա անցնել ինտերնշիփ։ Այս ընթացքում ամրապնդելու ենք գիտելիքները, որոնք ստացել ենք ուսման ընթացքում, աշխատանքը կատարվելու է իրական պրոեկտների շրջանակներում՝ ծրագրավորման թիմի հետ 1-2 ամիս'
            ],

            development_courses_cycles_stage_time: '4-6 ամիս',

            development_courses_page_certificate_section_titles: [
               'Ի՞նչ կստանաք դասընթացի վերջում',
               'Մեր բոլոր ուսանողները դասընթացի ավարտին ստանում են սերտիֆիկատ եվ ինտերնշիփի հնարավորություն',
               'Սերտիֆիկատ',
               'Ինտերնշիփ'
            ],

            frequently_asked_questions: [
               'Որո՞նք են դասընթացներին մասնակցելու հիմնական պահանջները։',
               'Արդյո՞ք դասընթացի ավարտին սերտիֆիկատ է տրամադրվում։',
               'Ի՞նչ ձևաչափով են անցկացվում դասերը։',
               'Որ ուղությունը ընտրել՝ Frontend թե Backend?',
               'Արդյոք կկարողանամ գտնել աշխատանք՞',
            ],

            frequently_asked_questions_answers: [
               'Դասընթացներին մասնակցելու հիմնական պահանջները ներառում են տարրական տեխնոլոգիական գիտելիքներ և ուսման պատրաստակամություն։ Որոշ դեպքերում կարող են պահանջվել լեզվի կամ հատուկ ոլորտի գիտելիքներ, օրինակ՝ ծրագրավորման հիմունքներ։',
               'Այո, սերտիֆիկատը տրամադրվում է պարտադիր կերպով։ Սերտիֆիկատում նշվում են ուսումնական ժամերի քանակը, ուսանողի առաջադիմության գնահատականը (0-100 բալային համակարգով), որը սահմանվում է ելնելով նրա ցուցանիշներից։ Սերտիֆիկատում նշվում է նաև ուսանողի պրակտիկայի անցկացման ժամանակահատվածը և այն տեխնոլոգիաները, որոնց հետ նա աշխատել է պրակտիկայի ընթացքում։',
               'Webex Technologies-ում դասընթացները կազմակերպվում են անհատական մոտեցմամբ: Սա նշանակում է, որ ուսանողները կարող են ընտրել իրենց համար հարմար օրերն ու ժամերը, ինչպես նաև ուսուցման համապատասխան ժամանակահատվածը: Ուսուցման մեթոդիկան, որը մշակվել է Webex Technologies-ի կողմից, հնարավորություն է տալիս ուսանողներին արդյունավետորեն յուրացնել դասընթացի նյութերը սահմանված ժամանակում: Webex Technologies-ում ստացած գիտելիքներն ու փորձը ուսանողներին ապահովում են անհրաժեշտ հմտություններով, որոնք թույլ կտան նրանց հետագայում հաջողությամբ անցնել աշխատանքի:',
               "Webex Technologies-ում յուրաքանչյուր ուսանող ստանում է անհատական մոտեցում դասախոսների կողմից: Դասընթացի ընթացքում դասախոսները գնահատում են ուսանողի հմտություններն ու հնարավորությունները՝ խորհուրդ տալով, թե որ ուղղությամբ է նպատակահարմար շարունակել՝ Frontend թե Backend: Այն ուսանողները, ովքեր գերազանց առաջադիմություն կցուցաբերեն երկու ուղղություններով, հնարավորություն կունենան դառնալու Full Stack ծրագրավորողներ՝ բացելով առավել լայն հեռանկարներ իրենց մասնագիտական զարգացման համար։",
               'Դասընթացի ավարտից հետո ուսանողները հնարավորություն են ստանում անցնել փորձաշրջան Webex Technologies ընկերությունում: Փորձաշրջանի ընթացքում նրանք աշխատում են ծրագրավորման թիմի հետ՝ մասնակցելով իրական նախագծերի մշակմանը: Փորձաշրջանի ավարտին ուսանողներն արդեն ունենում են հստակ պատկերացում աշխատանքային պրոցեսի մասին, ձեռք բերում արժեքավոր փորձ և կարողանում հեշտությամբ ինտեգրվել ոլորտում՝ ստանալով կայուն հիմք հետագա մասնագիտական զարգացման համար։'
            ],

            frequently_asked_questions_title: 'Հաճախ տրվող հարցեր',

            services_and_support_tile: 'Սպասարկում և աջակցություն',

            services_and_supportDescription: 'Վեբ կայքի աջակցությունն ու սպասարկումը ապահովում են կայքի երկարաժամկետ արդյունավետությունը, ինչը կենսական է ինչպես բիզնեսի, այնպես էլ օգտագործողների համար։ Առանց որակյալ սպասարկման, կայքը կարող է կորցնել իր օգտատերերի վստահությունը և արդյունավետությունը։',

            services_and_support_info_part1: [
               'Ի՞նչ է վեբ կայքի աջակցությունը և սպասարկումը',
               'Վեբ կայքի աջակցությունը և սպասարկումը վեբ կայքի անխափան աշխատանքը պահպանելու և տեխնիկական խնդիրների ժամանակ օգտատերերին աջակցելու գործընթացն է։ Այն ներառում է մի շարք ծառայություններ, ինչպիսիք են կայքի թարմացումները, անվտանգության ապահովումը, բովանդակության արդիականացումը, և սխալների շտկումը։ Կայքի աջակցության ծառայությունը ներառում է՝ Տեխնիկական աջակցություն եվ Ինֆորմատիվ աջակցություն։'
            ],

            services_and_support_info_part2: [
               'Տեխնիկական աջակցություն',
               'Տվյալների պահուստավորում',
               'Պահուստավորման կայքէջի վերականգնման մոնիթորինգ',
               'Ֆորումների կառավարում և փոփոխում',
               'Տեղեկագրերի տախտակներ',
               'Հակավիրուս',
               'Հոստինգի մատակարարի հետ փոխգործակցության աջակցություն',
               'Ձեր հասցեում փոստային հասցեների ստեղծում և տեխնիկական աջակցություն',
               'Վեբ կայքի նոր սերվերի փոխանցում',
               'Դոմենային գրանցման հարցում աջակցություն',
               'FTP սերվերի կառավարում',
               'Հաշվետվությունների միջոցով կայքի այցելությունների մոնիթորինգ'

            ],

            services_and_support_info_part3: [
               'Ինֆորմատիվ աջակցություն',
               'Վեբ կայքի բովանդակության լրացում',
               'Պատճենագրում',
               'Հոդվածներ գրել',
               'Արտադրանքի լուսանկարների կատալոգների ստեղծում',
               'Կայքի նորությունների թարմացում ',
               'Ավելացնել և թարմացնել կայքում նյութեր՝ հոդվածներ, ծառայությունների և ապրանքների նկարագրություններ',
               'Մրցակցային միջավայրի մոնիթորինգ'
            ],

            modeling3D_title: '3D մոդելավորման մշակում',

            modeling3D_description: '3D մոդելավորումը լայնորեն կիրառվում է տարբեր ոլորտներում՝ արտադրանքների դիզայնից մինչև մուլտֆիլմերի ստեղծում, ապահովելով պրոֆեսիոնալ և արդյունավետ արդյունք։',

            modeling3D_info_part1: [
               'Ի՞նչ է 3D մոդելավորման մշակումը',
               'Եռաչափ մոդելավորում կամ 3D մոդելավորում, ցանկացած առարկայի կամ առարկայի եռաչափ պատկերներ ստեղծելու գործընթացն է։ Այդ նպատակների համար մասնագետները օգտագործում են մասնագիտացված համակարգչային ծրագրեր, այսպես կոչված, 3D խմբագիրներ: Նրանց օգնությամբ հարթության վրա կառուցվում են երկրաչափական պրոյեկցիաներ, որոնք անհրաժեշտ են եռաչափ ցանկացած էֆեկտ ստեղծելու համար։'
            ],

            modeling3D_part2: [
               'Ինչո՞ւ է 3D մոդելավորման մշակումը անհրաժեշտ',
               'Վիզուալիզացիայի բարձր որակ։ Թույլ է տալիս ստեղծել իրականությանը մոտեցված պատկերներ, որոնք օգտագործվում են դիզայնի, շինարարության և արտադրանքի ներկայացման համար։',
               'Արդյունավետություն նախագծման գործընթացում։ 3D մոդելավորումը դիզայներներին և ինժեներներին հնարավորություն է տալիս նախապես տեսնել արդյունքը, կատարել փոփոխություններ և խուսափել սխալներից։',
               'Մարքեթինգ և գովազդ։ Մոդելները հաճախ օգտագործվում են գովազդային արշավներում, քանի որ դրանք ապահովում են տեսողական ներգրավվածություն։',
               'Շինարարության ոլորտում։ Ճարտարապետները և շինարարները կարող են ավելի հստակ տեսնել նախագծերը, ստանալ ֆիզիկական մոդելների թվային տարբերակները։',
               'Վիրտուալ իրականություն (VR) և Խաղային ոլորտ։ VR հավելվածների և վիդեոխաղերի մշակման ընթացքում անհրաժեշտ են բարձրորակ 3D մոդելներ՝ ինտերակտիվ փորձառություններ ապահովելու համար։'
            ],

            modeling3D_services: '3D մոդելավորման մշակման համար մենք օգտագործում ենք առաջատար տեխնոլոգիաներ և ծրագրեր, որոնք ապահովում են բարձր որակ և արդյունավետություն: Ահա հիմնական տեխնոլոգիաները, որոնցով աշխատում ենք՝',

            modelind3D_work_section_title: 'Մեր կատարած աշխատանքներից մեկը',

            modeling3D_tabel_title: 'Գները եվ ժամկետները',

            modeling3D_tabel_th: [
               'Նախագիծ',
               'Վերջնաժամկետ',
               'Գին',
            ],

            modeling3D_tabel: [
               {
                  id: '1',
                  project: 'Քոթեջի 3D պատկերացում տարածքի հետ',
                  time: '2-5 Օր',
                  price: '110$',
                  priceText: '(2-3 անկյուններից)',
               },

               {
                  id: '2',
                  project: 'Առևտրի կենտրոնների, բազմաբնակարան շենքերի ճարտարապետական 3D վիզուալիզացիա',
                  time: '3-10 Օր',
                  price: '1440$',
                  priceText: '(3-5 անկյուններից)',
               },

               {
                  id: '3',
                  project: 'Հողատարածքի, բնակելի համալիրների 3D պատկերացում',
                  time: '5-14 Օր',
                  price: '720$',
                  priceText: '(5-10 անկյուններից)',
               },

               {
                  id: '4',
                  project: 'Ընդհանուր պլանի 3D պատկերացում',
                  time: '5-10 օր',
                  price: '580$',
                  priceText: '- ից սկսած (1 անկյուն)',
               },

               {
                  id: '5',
                  project: 'Ինտերիերի 3D վիզուալիզացիա',
                  time: '2 օր',
                  price: '2-10$',
                  priceText: '(2-3 անկյունների համար)',
               },

               {
                  id: '6',
                  project: 'Տան, բնակարանի կամ ճարտարապետական օբյեկտի վիդեո ներկայացում',
                  time: '3 օրից',
                  price: '22$',
                  priceText: '- ից սկսած (տեսանյութի 1 վայրկյանը + մոդելավորման արժեքը)',
               },

               {
                  id: '7',
                  project: 'Տան, բնակարանի կամ ճարտարապետական օբյեկտի վիդեո ներկայացում',
                  time: '2 օրից',
                  price: '22$',
                  priceText: '-',
               },
            ],

            making_gamesPage_title: 'Խաղերի ստեղծում',

            making_gamesPage_description: 'Խաղերի ստեղծումը ոչ միայն ժամանցային ոլորտի մասն է, այլև կարևոր տեխնոլոգիական և սոցիալական ազդեցություն ունեցող գործիք, որը շարունակում է զարգացնել մարդկային փոխգործակցության ձևերը։',

            making_gamesPage_top_div_part1: [
               'Ի՞նչ է խաղերի ստեղծումը',
               'Խաղերի ստեղծումը բարդ գործընթաց է, որը ներառում է ինտերակտիվ վիդեոխաղերի կամ վիրտուալ միջավայրերի մշակումը։ Այն բաղկացած է մի շարք փուլերից, ինչպիսիք են գաղափարի մշակումը, սցենարի գրվելը, 3D կամ 2D գրաֆիկայի ստեղծումը, ծրագրավորումը, աուդիո ինտեգրումը և վերջնական թեստավորումը։ Խաղերի ստեղծման համար օգտագործվում են տարբեր պլատֆորմներ և շարժիչներ, օրինակ՝ Unreal Engine, Unity, կամ Godot, որոնք թույլ են տալիս ստեղծել ինտերակտիվ և վիզուալ գրավիչ փորձառություններ։'
            ],

            making_gamesPage_top_div_part2: [
               'Ինչո՞ւ  է խաղերի ստեղծումը անհրաժեշտ',
               'Տնտեսական Աճ։ Խաղերի ինդուստրիան համարվում է ամենաարագ զարգացող ոլորտներից մեկը՝ ապահովելով միլիարդավոր դոլարների եկամուտ և հսկայական աշխատատեղեր։',
               'Սոցիալական Ներգրավվածություն։ Խաղերը միավորում են համայնքներ, ներգրավում օգտատերերին և հաճախ դառնում են սոցիալական փոխգործակցության գործիք։',
               'Կրթական և ուսուցողական գործիքներ։ Շատ խաղեր ունեն ուսուցողական բաղադրիչ, որոնք նպաստում են նոր հմտությունների կամ գիտելիքների ձեռքբերմանը։',
               'Նորարարություն և Տեխնոլոգիական Զարգացում։ Խաղերի ստեղծումը խթանում է նոր տեխնոլոգիաների կիրառումը, ինչպիսիք են վիրտուալ և լրացված իրականությունը։',
               'Ստեղծագործական Արտահայտություն։ Խաղերի միջոցով ստեղծագործողները կարող են կյանքի կոչել իրենց գաղափարները՝ ներկայացնելով եզակի պատմություններ և դիզայններ։'
            ],
            making_gamesPage_servicesTitle: 'Խաղերի ստեղծման համար մենք օգտագործում ենք առաջատար տեխնոլոգիաներ և ծրագրեր, որոնք ապահովում են բարձր որակ և արդյունավետություն: Ահա հիմնական տեխնոլոգիաները, որոնցով աշխատում ենք՝',

            making_games_carousel: [
               'Մեր աշխատանքները',
               'Մեր փորձառու թիմը շարունակում է աշխատել նորարարական մոտեցումներով՝ ստեղծելով եզակի և բարձրորակ մոդելներ։ Մենք երաշխավորում ենք ձեր գաղափարների կյանքի կոչումը՝ զարմանալի վիզուալիզացիաներով։'
            ],

            web_promotion_page_title: 'Կայքի առաջխաղացում',

            web_promotion_page_description: 'Կայքի առաջխաղացումը բիզնեսի հաջողության կարևոր գործիք է, որը հնարավորություն է տալիս գրավել նոր հաճախորդներ, զարգացնել բրենդը և պահպանել մրցակցային առավելությունը։',

            web_promotion_page_info_part_1: [
               'Ի՞նչ է կայքի առաջխաղացումը',
               'Կայքի առաջխաղացումը գործընթաց է, որը նպատակ ունի բարձրացնել կայքի տեսանելիությունը որոնողական համակարգերում, ներգրավել ավելի շատ այցելուներ և բարելավել բրենդի առցանց ներկայությունը։ Այս գործընթացը ներառում է SEO (որոնողական համակարգերի օպտիմիզացիա), բովանդակության ռազմավարություն, հղումների կառավարում, և սոցիալական մեդիա մարքեթինգ։ Այն ապահովում է կայքի տեխնիկական ճիշտ կառուցվածքը և բարձրորակ բովանդակությունը՝ որոնողական համակարգերի պահանջներին համապատասխան։'
            ],

            web_promotiion_page_info_part_2: [
               'Ինչո՞ւ  է կայքի առաջխաղացումը անհրաժեշտ',
               'Տեսանելիության Բարձրացում։ Կայքի առաջխաղացումը ապահովում է, որ ձեր կայքը հայտնվի Google-ի կամ այլ որոնողական համակարգերի առաջին էջերում, ինչը նպաստում է նոր հաճախորդների ներգրավմանը։',
               'Տրաֆիկի Աճ։ Օպտիմիզացված կայքը ստանում է ավելի շատ այցելություններ, ինչը նպաստում է բիզնեսի աճին և վաճառքների ավելացմանը։',
               'Մրցակցային Առավելություն։ Թիրախավորված առաջխաղացման միջոցով ձեր բիզնեսը կարող է գերազանցել մրցակիցներին՝ շահելով շուկայի նոր հատվածներ։',
               'Երկարաժամկետ Արդյունքներ։ Որոնողական համակարգերի օպտիմիզացիան ապահովում է կայուն և երկարաժամկետ արդյունքներ՝ առանց հավելյալ գովազդային ծախսերի։',
               'Արդյունավետ Վերլուծություն։ Առաջխաղացման գործընթացում կիրառվում են վերլուծական գործիքներ, որոնք թույլ են տալիս գնահատել արդյունքներն ու բարելավել ռազմավարությունը։'
            ],

            web_promotion_info_part_3_title: 'Կայքի առաջխաղացման տեսակները ներառում են մի շարք ռազմավարություններ, որոնք ուղղված են կայքի վարկանիշի բարձրացմանը որոնողական համակարգերում, այցելուների ներգրավմանը և բրենդի տեսանելիության մեծացմանը։ Ահա հիմնական տեսակները․',

            web_promotion_info_part_3_data: [
               {
                  title: 'SEO (Որոնողական համակարգերի օպտիմիզացիա)',
                  desc: 'Նպատակ ունի բարելավել կայքի օրգանական տեսանելիությունը Google, Bing և այլ որոնողական համակարգերում։'
               },

               {
                  title: "Սոցիալական մեդիա մարքեթինգ (SMM)",
                  desc: 'Կայքի առաջխաղացումը սոցիալական հարթակների միջոցով (Facebook, Instagram, Twitter, LinkedIn):'
               },

               {
                  title: 'PPC (Վճարովի գովազդ)', 
                  desc: 'Վճարովի գովազդային արշավներ Google Ads, Bing Ads և սոցիալական մեդիայի հարթակներում։'
               },

               {
                  title: 'Բովանդակության առաջխաղացում',
                  desc: 'Բարձրորակ և հետաքրքիր բովանդակության ստեղծում, որն ուղղված է թիրախային լսարանին։'
               },

               {
                  title: 'Հղումների կառուցում (Link Building)',
                  desc: 'Արտաքին հղումների ստացում բարձր վարկանիշ ունեցող կայքերից, ինչը մեծացնում է կայքի վստահելիությունն ու վարկանիշը։'
               },

               {
                  title: 'Վերլուծություն և օպտիմիզացում',
                  desc: 'Տվյալների վերլուծության և օգտատերերի վարքագծի ուսումնասիրության միջոցով ռազմավարության շարունակական բարելավում։'
               },
            ]

         },
      },

      ru: {
         translation: {
            // ==========================reg_and_log=============================
            reg_and_log: [
               'Регистрация на курс',
               'Профиль входа',
               'Имя Фамилия',
               'Электронная почта',
               'Телефон',
               'Пароль',
               'Подтвердите пароль',
               'У вас уже есть профиль? ',
               'У вас еще нет профиля? ',
               'Войти',
               'Регистрация',
               'Запись на первый курс',
               'Курс',
               'Первое занятие у нас бесплатно',
               'Я забыл пароль',
               'Восстановить',
               'Сброс пароля',
               'Отправлять',
               'Изменить пароль',
            ],

            //====================== reg and log buttons===========================

            reg_log: ['Войти', 'Регистрация', 'Подтверждать', 'Отправлять'],
            // ====================toolsInfo========================================

            toolsInfo: [
               `Более ${years_webex} лет на рынке`,
               'Студентов ',
               'Проектов',
               'Сайтов 1000+',
               'Обслуживание сайтов 500+',
               'Язык программирования 30',
            ],

            // ===============ourAdvantages========================

            ourAdvantagesItemTitle: [
               'Разработка веб-приложений',
               'Обучение веб программированию',
               'Мобильные приложения',
               'Индивидуальное обучение',
               'Продвижение сайтов',
               'Онлайн обучение',
               'Разработка приложений (игр) на Unity',
               'Помощь в трудоустройстве',
               'Разработка и внедрение CRM-системы',
               'Разработки и внедрения ERP-систем',
               'Системы безопасности'
            ],
            ourAdvantagesItemTxt: [
               'Адаптивность. Принципы чистого кода. Стратегически продуманная реализация. Делаем сайты быстрыми, надежными. Обеспечиваем оптимальную реализацию поставленных задач.',
               'Курс ведет программист-практик.Курс составляется индивидуально. Обучающие видеоролики созданы на основе нашей базы знаний. Курс можно проводить онлайн.',
               'Предлагаем широкий спектр услуг по разработке мобильных приложений. Разработка, дизайн, тестирование и поддержку продукта.',
               'В компании Webex Technologies есть возможность приобрести  индивидуальный курс по веб программированию. В котором обучающийся совместно с преподавателями подбирают подходящий метод обучения и план действия в соотвествии с поставленной задачей.',
               'Прозрачность действий на любых этапах продвижения сайта. Вы получаете регулярную отчетность, обеспечивается полная информированность о проведении работ. Проводится предварительное согласование всех этапов работ, всех действий по продвижению и оптимизации сайта.',
               'Прохождение онлайн обучение в компании Webex Technologies соответствует всем требованиям и ориентировано на внедрение практических и теоретических знаний. По завершению курса студенты проходят практику.',
               'Разработка приложений (игр) на Unity - Предлагаем профессиональные услуги Unity разработки полного цикла для различных отраслей. Наша команда обладает глубокими знаниями и опытом в сфере разработки игр, веб, десктоп, мобильных и кроссплатформенных приложений с использованием всех преимуществ и инструментов Unity.',
               'Лучшие студенты, завершившие обучение в Webex Technologies, получают возможность пройти стажировку в компании. По результатам стажировки компания Webex Technologies предоставляет рабочие места.',
               'Автоматизация выполнения заказов и заключения сделок с отслеживанием статуса по каждой конкретной позиции; упрощение документооборота за счет автоматического формирования договоров, актов, счетов и накладных; ведение единой базы клиентов с подробной информацией о каждом контакте и историей взаимодействий.',
               'С помощью ERP-системы отпадает необходимость в создании целого ряда индивидуальных информационных систем, с помощью которых выполняется автоматизация каждого из направлений с последующей наладкой коммуникации между этими системами.',
               'Мы реализуем различные решения, устройства и оборудование систем безопасности доступа.'
            ],

            ourAdvantagesTitle: 'Наши преимущества',

            // ===================nav-menu=================================

            navMenu: [
               'Курсы',
               'Программирование',
               'Наши проекты',
               'О нас',
               'Связь',
               'Главная страница',
               'Проекты',
               'Новости',
               'Разработка веб-приложений',
               'Продвижение сайта',
               'Сервис и поддержка',
               'Развитие 3D моделирования',
               'Разработка мобильных приложений',
               'Создание игр',
               'Эл. адрес',
               'Телефон',
            ],

            navMenu: [
               'Курсы',
               'Программирование',
               'Наши проекты',
               'О нас',
               'Связь',
               'Главная страница',
               'Проекты',
               'Новости',
               'Разработка веб-приложений',
               'Продвижение сайта',
               'Сервис и поддержка',
               'Развитие 3D моделирования',
               'Разработка мобильных приложений',
               'Создание игр',
               'Эл. адрес',
               'Телефон',
               'Курсы программирования',
               'Турникеты'
            ],
            // ===========buttons==========================
            button: [
               'Курсы',
               'Регистрация',
               'Заказать',
               'онлайн',
               'оффлайн',
               'Выполнять',
               'Ок',
               'Зарегистрироваться на курс',
               'Заказать проект',
               'Например',
               'Посмотреть больше',
               'Заказать сайт',
               'Бесплатное Консультация'
            ],

            // ====================header=============================

            headerTitlePart1: 'С нашей профессиональной командой вы можете․',
            headerTitlePart2:
               'Заказать Веб-системы с комплексными программными решениями. - Заказать механические, автоматические или  же оптические турникеты.  - Заказать многофункциональные CRM/ERP системы. - Заказать работы по программированию оборудования. - Заказать мобильные системы с комплексными программными решениями (iOS, Android). - Заказ сложных 3D-моделей․ - Изучите веб-интерфейс | Веб-бэкэнд |: Единство |: Программирование JAVA. Улучшите свои навыки программирования Frontend/Backend.',

            // ====================webexInfo=========================
            webexInfo: [
               'О нас',

               `Компания Webex Technologies основана  2007 году в ноябре 21.
              За эти годы компания имеет большое количество реализованных проектов.
              Качественно  и основательно подходит к процессу создания нового продукта.
              Webex Technologies работает только новыми и актуальными технологиями, которые в свою очередь переодически обновляются в соответствии с требованиями рынка.
              Компания базируется в г.Ереван, и взаимодействует с международными партнерами  по всему миру.
              В компании Webex Technologies все реализованные продукты соответствуют международной IT стандартизации.`,

               ` В компании Webex Technologie есть курсы по программированию.
              Компания фокусирует свое внимание на качественном обучении студентов, делая упор на практические знания.
              В Компании Webex Technologies разработана собственная программа обучения, основанная на многолетнем опыте.
              Большинство студентов компании Webex Technologies находят себя в IT сфере.
              По окончанию обучения лучшим студентам выдается сертификат, что дает им преимущества при поиске работы.
              Компания Webex Technologies всегда рада новым партнерам.`,
            ],

            // ===========================createWebsitesAndMobileApp=============================

            createWebsitesAndMobileApp: 'Создание сайтов, мобильных приложений, 3D моделей и создание систем безопасности доступа',

            createWebsitesAndMobileAppTitle: [
               'Создание веб-приложении',
               'Мобильные приложения',
               'Создание игр и Unity',
               '3D моделирование',
               'Подготовка CRM систем',
               'Система организации входа'
            ],

            createWebsitesAndMobileAppTxt: [
               'Создание сайтов с нуля - компания Webex Technologies разрабатывает сайты с нуля, участвуя во всех этапах его создания.То есть клиент выражает свои цели, пожелания по дизайну и интерфейсу, а мы на их основе разрабатываем необходимый сайт.',
               'Создание мобильных приложений для IOS и Android - «Webex Technologies» - армянская компания по разработке мобильных приложений с многолетним опытом работы в сфере мобильных технологий и платформ.Мы предлагаем широкий спектр услуг по разработке мобильных приложений на рынке Армении и других стран.  Компания предоставляет ИТ-консалтинг, разработку, проектирование, тестирование и техническую поддержку.',
               'Преимущества приложений, созданных Webex Technologies с помощью Unity - Наша компания является опытным и надежным партнером в разработке решений с использованием Unity. Мы уже много лет создаем эффективные и надежные приложения для клиентов по всему миру. Используя технологии Unity, мы успешно решаем задачи в таких сферах, как онлайн-коммерция, игры, здравоохранение, образование, реклама и т. д. Если вы хотите обсудить детали проекта, свяжитесь с нами.',
               'Трехмерное моделирование или 3D-моделирование – это создание трехмерных изображений каких-либо предметов или объектов.Для этой цели специалисты используют специальные компьютерные программы, так называемые 3D-программы.С их помощью геометрические проекты преобразуются в трехмерные изображения. . Привлекательность 3D-моделирования заключается в практически неограниченных возможностях технологии: с помощью 3D-графики можно создать модель любого реального или воображаемого здания, статического объекта или явления.',
               'Разработка и внедрение CRM-системы наиболее востребованы в ситуациях, когда происходит качественный скачок в бизнесе и управлении компанией, то есть увеличивается количество коммуникаций (продажи, сделки), а также деловых контактов (телефонные звонки, электронные письма, СМС-уведомления) в течение дня, которые выполняет руководитель за месяц, превышает порог доступной человеку оперативной памяти, в данном случае ресурсов, которые сотрудники тратят на документы и таблицы Excel. В CRM-систему можно передать следующие функции: 1. Автоматизация исполнения заказов и исполнения транзакций путем отслеживания статуса каждой конкретной позиции; 2. Упрощение документооборота за счет автоматического создания договоров, актов, счетов и счет-фактур, 3. Ведение единой клиентской базы данных, содержащей подробную информацию о каждом клиенте и историю взаимодействия с ним; Разработка и внедрение ERP-систем.',
               'Наша передовая система входа объединяет современные технологии, такие как RFID (радиочастотная идентификация), QR-коды и распознавание лиц, чтобы обеспечить бесперебойный и безопасный контроль доступа через турникеты. Эта система обеспечивает эффективное управление точками входа в различных средах, таких как офисные здания, учебные заведения и общественные места.'
            ],

            // ======================services================================

            servicesTitle: [
               'Создание сайтов',
               'Мобильные приложения',
               '3D моделирование',
               'Oбучение',
               'ERP-систем',
               'Системы доступа',
               'Обслуживание',
               'Систем CRM',
            ],

            servicesCentreDivTitle: 'Услуги',

            // ==================videoCoursesSection=====================

            videoCoursesSectionTitle: 'Список обучения программированию',
            videoCoursesSectionTitle_H: 'План обучения программированию',

            videoCoursesSectionTxt: [
               'Бесплатный пробный урок. Наши будущие студенты. У вас есть возможность бесплатно ознакомится с методами обучения, и преподавателями компании Webex Technologies.',
               'Базовый курс. Предлагаем вам пройти базовый курс по  программированию в компании Webex Technologies. У вас есть возможность выбрать удобное для вас время, формат и преподавателя. Для этого вам нужно зарегистрироваться.',
               'Курс продвинутого программирования – Профессиональный пакет предлагает гибкий формат обучения, который включает в себя  индивидуальные подход к занятиям с  преподавателем.Студенты имеют доступ к онлайн-ресурсам, заданиям и проектам, которые помогают им углубленно изучать выбранные темы. Студенты могут обратиться за помощью к опытным преподавателям для разъяснения сложных моментов и консультации по проектам. Этот курс позволяет студентам развивать свои навыки программирования в удобном темпе и получать поддержку от экспертов в области.',
               'Хотите максимально эффективно освоить программирование? Тогда наш Индивидуальный Премиум-курс – идеальный выбор для вас! В рамках этого курса вы будете заниматься  с преподавателем в уютном классе, либо онлайн, получая всю внимание и поддержку лектора-программиста.   Забудьте о том, что вам придется делить внимание с другими студентами – наш Индивидуальный Премиум-курс позволит вам быть в центре внимания. Ваш преподаватель будет полностью сосредоточен на вас, помогая развивать ваши навыки программирования на индивидуальных занятиях. Гибкий график занятий позволит вам выбирать удобное время для обучения, а индивидуальный подход к каждому студенту гарантирует максимальную эффективность обучения. Не упустите возможность стать профессионалом в области программирования с помощью нашего Индивидуального Премиум-курса!'
            ],

            videoCoursesSectionfeatures: [
               'бесплатно',
               'группа',
               'частичный индивидуальный подход',
               'индивидуальный подход',
            ],

            VideoCoursesSection_duration: [
               'Продолжительность - 120 минут',
               'Продолжительность - 960 минут',
               'Продолжительность - 1440 минут',
               'Продолжительность - 1440 минут',
            ],

            VideoCoursesSection_price: "драм",

            

            VideoCoursesSection_title: [
               'Пробный курс',
               'Стандартный пакет',
               'Профессиональный пакет',
               'Премиум курс',
            ],
            videoCoursesSectionTitleGround: ['React JS', 'Java', 'Laravel', 'Node.JS'],
            videoCoursesSectionTitleCourses: 'Курс:',
            videoCoursesSectionTitleCourses_month: '6 месяцев',
            videoCoursesSectionTitleCourses_week: '3 дня/неделю',

            // ==========================Footer============================

            footerMenu: [
               'Обратная связь',
               'Электронная почта:',
               'Тел։',
               'Наш адрес:',
               'М. Баграмяна пр. 79 1/1',
               'следите за нами',
            ],

            // ==================courseseRegistration==============================

            courseseRegistrationSlideCountLine: ['Продолжительность ', 'минута'],

            validation_reg_log: [
               'Это поле является обязательным',
               'Пишите правильный E-mail!',
               'Пароль должен содержать цифру',
               'Пароль должен содержать строчные буквы',
               'Пароль не совпадают',
               'Пишите только цифру',
               'Пароль должен содержать не менее 8 символов',
            ],

            resetPasswordModalError_message: 'Что-то не так',

            abouteUs_Header: [
               'О нас',
               '«Webex Technologies» специализируется на создании веб-сайтов. Наиболее распространенными языками программирования, которые используются в работе, являются HTML5, CSS3-Flex, Grid, Parallax, Sprites, PHP, JavaScript, ES6, jQuery, Bootstrap, Ajax, React JS, Laravel, OOP/MVS, MySQL и др. WebEx Tech работает уже 20 лет.',
            ],

            abouteUS_info_block: [
               'Почему сотрудничать с центром «WebEx Technologies» удобно и эффективно',
               'Прозрачность действий на любом этапе создания сайта. Мы предоставляем регулярные отчеты и обеспечиваем полную осведомленность о работе. Индивидуальный подход к каждому клиенту. Тщательное изучение специфики бизнеса клиента на подготовительном этапе создания сайта способствует получению максимального эффекта в кратчайшие сроки. Создание сайта для нас – творческий процесс. Мы используем не только известные и распространённые решения при разработке сайта, но и новые и неожиданные решения, которые делают сайт уникальным и запоминающимся.При создании сайтов мы используем только лицензионные (коммерческие и некоммерческие) CMS, модули, компоненты, конструкции.',
            ],

            abouteUs_training: [
               'Webex technologies / Обучение',
               'Webex Tech в сотрудничестве с Webex Technologies проводит индивидуальные курсы обучения веб-технологиям и технологиям Android.',
               'Обучение проводят опытные программисты.',
               'Индивидуальные курсы.',
               'Обучающие видеоролики – основа знаний.',
               'Обучение можно пройти онлайн.',
               'Исследование технологий и языков программирования.HTML5, CSS3-Flex, Grid, Parallax, Sprites, PHP, JavaScript, ES8, jQuery, Bootstrap, Ajax, React JS, Laravel, OOP/MVS, MySQL и т. д.',
               'Надежный партнер.',
               'Сильная команда.',
               'Многолетний опыт.',
               '«Webex Technologies» специализируется на создании веб-сайтов. Наиболее распространенными языками программирования, которые используются в работе, являются HTML5, CSS3-Flex, Grid, Parallax, Sprites, PHP, JavaScript, ES9, jQuery, Bootstrap, Ajax, React JS, Laravel, OOP/MVS, MySQL и т. д. WebEx Tech имеет работаю 20 лет. Люди, которые с нами работают, благодарны за качество выполняемой нами работы. Мы создаем успешные и вдохновляющие сайты. У вас уже есть сайт? Итак, Вам необходимо - оптимизация и продвижение сайтов, реклама в Интернете, поддержка и обслуживание сайтов. Мы создаем интернет-решения для наших клиентов, которые сделают разработку проекта простой и функциональной.',
            ],

            abouteUs_ourPartnersTitle: 'Наши партнеры',
            abouteUs_ourPartners: [
               'Министерство образования, науки, культуры и спорта РА',
               'Министерство территориального управления и инфраструктур РА',
               'Министерство высокотехнологичной промышленности РА',
               'Миграционная служба Территориального управления и развития РА',
               'В.А. ЗАО Национальный онкологический центр Фанарджяна',
               'Комиссия по регулированию общественных услуг РА',
               'Центр оценки недвижимости и аукционов',
               'Министерство Обороны РА',
               'Национальный онкологический центр',
               'Молодежный центр КГСМН',
               'Армянский центр гемофилии и тромбофилии',
               'Центр исследований и анализа «Призма»',
               'Орбел Аналитикал - Исследовательский центр',
               'Полиция РА',
               'LGG foundation',
               'ООО «Элнарти»',
               'Angel investor Club of Armenia',
               'Центр поддержки инвестиций',
               'Кадастровый комитет',
               'Сообщество Масиси',
               'ООО «Лига услуг»',
            ],

            order_now: 'Заказать сейчас',

            projectPage_translation: [
               'Описание',
               'Название проекта:',
               'Языки программирования',
               'Период создания',
               'Дата создания',
               'месяц',
               'дата',
            ],

            orderFormTitle: ['Расскажи нам', 'о вашем проекте', 'Выберите услуги'],

            orderForm: [
               'Имя*',
               'Телефон*',
               'Эл. адрес*',
               'Адрес веб-сайта',
               'Сообщение',
               'Выберите файл',
               'Разработка корпоративного сайта',
               'Разработка интернет-магазинов',
               'Поисковая оптимизация (SEO)',
               'Контекстная реклама',
               'Разработка веб-сайтов',
               'Техническая поддержка сайта',
               'E-mail marketing',
               'Пригласительная открытка',
               'Google analytics',
               'Автоматизация бизнес-процессов',
            ],

            contact_us_title: ['Контакт', 'Обратная связь'],

            feedback: ['Имя*', 'Эл. адрес*', 'Сообщение'],

            our_teem_title: 'Наша команда',

            servicesPagesItemsTitle: [
               'Разработка веб-приложений',
               'Продвижение сайтов',
               'Обслуживание и поддержка',
               '3D моделирование на заказ',
               'Разработка Unity Игр',
               'Мобильные приложения',
            ],

            servicesPagesItems_small_txt: [
               'Мы предлагаем широкий спектр услуг в области веб-разработки с использованием самых популярных серверных языков и фреймворков.',
               'Оптимизация и продвижение сайтов. Комплексное продвижение сайтов. Поисковое продвижение сайтов. Реклама в интернете.',
               'Включает в себя как техническую так и информационную поддержку, так и комплексное обслуживание сайта.',
               'Это достаточно сложная сфера, которая связана с множеством отраслей, от производства игр и фильмов до архитектуры и инженерных проектов.',
               'Преимуществами Unity наличие визуальной среды разработки, межплатформенной поддержки и модульной системы.',
               'Оригинальные проекты, мобильные версии служб – всё это совершенно необходимо владельцу мобильного устройства на IOS и Android.',
            ],

            servicesPagesItems_full_txt: [
               `Специалисты ВэбЕкс Технолоджис имеют богатый опыт в разработке IT продукции. Услуги нашей компании могут быть комплексными или включать в себя какую-то часть разработки.
            Сайты под ключ - это веб-ресурс, который компания ВэбЕкс Технолоджис делает с нуля, участвуя на всех этапах его создания. Иначе говоря, заказчик озвучивает свои цели, пожелания к дизайну и интерфейсу и мы оформляем их в сайт.
            Разработка систем автоматизации электронного документооборота (СЭД)- создание данной системы является неотъемлемой и очень важной частью корпоративной информационной площадки.
            Разработка программного обеспечения (ПО)— деятельность по созданию нового программного обеспечения.Для упрощения работы сотрудников и автоматизации внутренних процессов
            Разработка и внедрение CRM-системы наиболее востребована в ситуациях, когда происходит качественный скачок в ведении бизнеса и управлении компанией.

            Основные принципы нашей деятельности
                                                                                         
            1) Адаптивность. 
            2) Принципы чистого кода. 
            3) Стратегически продуманная реализация.
            4) Надежность. 
            5) Безопасность.
            6) Оптимальность и эффективностью.`,

               `Вы можете выбрать любой вариант продвижения вашего сайта:
            Комплексное продвижение сайтов- поисковое продвижение, контекстную рекламу, комплексную рекламную кампанию Вашего продукта в Интернете.
            Поисковое продвижение сайтов- обеспечение нахождения сайта на более высоких позициях в поисковых системах (таких как Яндекс, Рамблер, Google). В результате поискового продвижения сайта и выведения Вашего сайта в ТОП10 запросов поисковых систем, Вы получаете увеличение посещаемости сайта по целевым запросам.
            Контекстная реклама-краткие текстовые объявления, возникающие на страницах выдачи результатов поисковых систем в ответ на запросы пользователя`,

               `Обслуживание сайта, осуществляемое специалистами центра, может включать как техническую поддержку или информационную поддержку, так и комплексное обслуживание сайта. Возможны различные варианты ежемесячного обслуживания программного обеспечения, включающие различные виды технической и информационной поддержки. Больше нет необходимости держать в компании специального сотрудника, обслуживающего сайт - поддержка Вашего сайта, обновление сайта, осуществляется специалистами ВебЕкс Технолоджис.

            Вы можете заказать как разовые работы по обслуживанию сайта, так и ежемесячное абонентское обслуживание сайта. Нами разработаны удобные тарифные планы на сопровождение сайтов.   
            Также в рамках организации поддержки эффективной работы сайта выполняются работы:

            1) Обновление сайта, перевод статических сайтов на современные CMS (системы управления контентом).
            2) Аудит сайтов, анализ сайтов.
            3) Модернизация сайтов, в том числе редизайн, интеграция CMS, дополнительных модулей и интерактивных систем взаимодействия.`,

               `Трехмерное моделирование или 3D моделирование, представляет собой процесс создания объемных изображений каких-либо предметов или объектов.
            Используя 3D графику , вы можете создать модель любого реального или воображаемого здания, неодушевленного предмета или явления.
            Сферы применения 3D моделирования
            При помощи 3D моделирования можно создать следующие объекты:

            1) архитектурные макеты;
            2) герои и персонажи игр, фильмов;
            3) локации для съемки фильмов и игр;
            4) статуи и сувенирную продукцию;
            5) корпусы для техники и приборов;
            6) протезы, ортезы;
            7) детали различных механизмов и многое другое.`,

               ` Наша команда обладает глубокими знаниями и опытом в сфере разработки игр, веб, десктоп, мобильных и кроссплатформенных приложений с использованием всех преимуществ и инструментов Unity для достижения целей заказчиков. 
            Преимуществами Unity являются наличие визуальной среды разработки, межплатформенной поддержки и модульной системы
            разработка включает в себя:

              1) 2D и 3D разработка игр
              2) Разработка Unity 3D кроссплатформенных приложений
              3) Разработка мобильных, веб и десктоп приложений на Unity3D
              4) Разработка интерактивных приложений
              5) UI/UX дизайн
              6) 3D модели
              7) Настройка и поддержка приложений
              8) Разработка консольных игр (для PS, Xbox, Wii и др.)`,

               `ВебЕкс Технолоджис  разрабатывает приложения, вначале с проектирования бизнес-модели и стратегии его развития. Важное место в нашей работе занимает аналитика: анализ требований и бизнес-процессов, маркетинговый и технический аудит, управление требованиями на всех этапах проекта.
            Наша цель - создать продукт, не только приносящий прибыль, но и полезный для общества. Во время проработки концепции вы получите готовый рабочий прототип, который позволит оценить качество приложения, внести правки и доработать продукт. 
            
             С помощью мобильных приложений вы сможете вывести бизнес на новый уровень: проводить сделки, обучать сотрудников, планировать и ставить задачи, закупать и доставлять товары в максимально удобном для компании и клиента формате. Мы сотрудничаем не только с крупными компаниями, но и стартапами, для которых требуется решение задач, у которых еще нет примеров интерфейса.
            
            Этапы работ: 
            1) Аналитика. Проводим конкретный анализ рынка, используем лучшие решения для создания первоклассных продуктов. 
            2) Проектирование. Реализуем бизнес- задачи с помощью дружественных пользователю интерфейсов на базе аналитики. 
            3) Дизайн. Создаем лучший пользовательский интерфейс. Рисуем удобный и понятный дизайн продукта. 
            4) Разработка. Воплощаем приложение в коде. Пишем чистый и стабильный код, для быстрой и активной работе. 
            5) Тестирование.  Тестируем сервис на разных устройствах и гарантируем выпуск качественного продукта точно в срок`,
            ],

            projectType: ['Все', 'Веб', 'Мобильный', 'Игры и 3D'],

            web_project_page_top_div_title: 'Разработка веб приложений',

            KeyWordComponent: 'Ключевые слова',

            KeyWordComponentItem: [
               'Комплексное продвижение сайтов,',
               'Бюджетное продвижение,',
               'Реклама в интернете,',
               'Поисковое продвижение сайта,',
               'Оптимизация сайта,',
               'SEO - поисковая оптимизация,',
               'Контекстная реклама,',
               'Продвижение в соцсетях, блогах, сервисах,',
               'Бесплатный экспресс-аудит сайта,',
               'Бесплатная установка счетчика,',
               'Продвижение и оптимизация сайтов: вопрос-ответ,',
               'Статьи о продвижении сайтов,',
               ' Стоимость продвижения сайтов,',
               ' Создание бренд-страниц и групп в соцсетях,',
               'Трехмерное моделирование,',
               ' Blender,',
               'Gimp,',
               ' 3D Визуализация коттеджа с территорией,',
               ' 3D моделирование,',
               ' 3D Визуализация интерьеров,',
               ' ИТ-консалтинг,',
               ' iOS,',
               ' Android,',
               'Дизайн,',
               ' Unity разработкиа,',
               'UI/UX дизайн,',
               ' 2D и 3D разработка игр',
            ],

            web_project_page_web_development_title: 'Разработка веб приложений',

            web_project_page_web_development_info: [
               'Компания ВэбЕкс Технолоджис была основана в ноябре 2007 года. Наша компания имеет большой опыт в области разработки веб-приложении, аутсорсинга разработки программного обеспечения и веб-разработки, ИТ-консалтинга, интеграции приложений, анализа бизнес-процессов, тестирования ПО, сопровождения и поддержки.',
               'Давайте разберем, что из себя представляют услуги, которые оказывает компания ВебЭкс Технолоджис.',
            ],

            all_promotion: 'Продвижение сайта',

            modeling_3d: 'Развитие 3D моделирования',

            dashboard_name: 'Панель управления',

            account_Box: ['Счет', 'Редактировать профиль'],

            purchase_history: ['История покупки', 'Урок(и)', 'с общего'],
            my_Training: 'Пройденные уроки',

            description: 'Описание',

            homework_linne: ['Делать домашнюю работу', 'Урок', 'м'],

            homework_linneHom: ['Делать домашнюю работу', 'Задание', 'м'],

            cordial: 'Содержание',

            all_video_lessons: 'Все видео уроки',

            profileArr: [
               'Ваш профиль',
               'Заполните свои данные',
               'Сохранять',
               'Отмена',
               'напиши текущий пароль',
               'напиши новый пароль',
               'повторите новый пароль',
            ],

            help: [
               'Помощь',
               'Быстрая поддержка',
               'Ответы на наиболее часто задаваемые вопросы находятся всего в одном клике.',
               'Напишите свой вопрос',
               'Имя Фамилия',
               'Адрес электронной почты',
               'номер телефона',
               'сообщение',
               'Отправлять',
            ],

            visitHistory: [
               'История посещений',
               'Число',
               'Уроки',
               'Всего уроков',
               'Количество уроков',
               'Оплата',
            ],

            lerne_more: 'Узнать больше...',

            slide_section: [
               'Мы преподаем',
               'Наш современный и профессиональный подход уже привлек множество клиентов.',
            ],
            dashboard: 'Панель управления',
            currentLessons: 'Текущие уроки',
            profile: 'Профиль',
            helpp: 'Помощь',
            visitHistoryy: 'История посещений',
            logOut: 'Выйти',

            wey_title: 'Направления в разработках',
            way: 'Специалисты ВэбЕкс Технолоджис имеют богатый опыт в разработке IT продукции. Услуги нашей компании могут быть комплексными или включать в себя какую-то часть разработки.',
            title_h1: [
               'Концепция "под ключ"-',
               'Разработка систем автоматизации электронного документооборота-',
               'Разработка програмнного обеспечения — ',
               'Автоматизация автосервисов, аптек, гостиниц, магазинов, проката, ресторанов, салонов красоты,',
               'Веб-разработка ',
               'Разработка и внедрение CRM-систем',
               'Разработка ERP-систем',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
            ],
            way_info: [
               'ВебЭкс Технолоджис - это команда профессионалов с многолетним опытом в сфере разработки IT-продуктов. Мы предлагаем широкий спектр услуг, начиная от комплексных решений до участия в конкретных этапах разработки.',
               '- для веб-сайтов олицетворяет наше стремление к созданию индивидуальных интернет-ресурсов. Наша команда активно участвует в каждом этапе создания сайта - от начальной идеи до ее реализации. Простыми словами, клиенты формулируют свои цели, предпочтения в дизайне и требования к интерфейсу, а мы тщательно воплощаем их в жизнь через создание полноценного веб-сайта.',
               '  является ключевым элементом современной корпоративной информационной инфраструктуры. ВебЭкс Технолоджис предлагает уникальные решения, обеспечивая эффективное взаимодействие и автоматизацию бизнес-процессов. Наши инновационные технологии создают простой и удобный пользовательский интерфейс, повышающий производительность и обеспечивающий контроль над эффективностью работы компании.',
               '  складов и строительства становится легкой и эффективной благодаря нашему программному обеспечению. Мы предлагаем интегрированные решения, обеспечивающие полную автоматизацию бизнес-процессов, повышение оперативности и точности учета, а также оптимизацию взаимодействия с клиентами и поставщиками.',
               'Автоматизация строительства через программное обеспечение – это неотъемлемая часть современной индустрии строительства, где каждая деталь проекта имеет огромное значение. Наша глобальная система автоматизации обеспечивает полный контроль над процессами строительства, учетом используемых материалов, анализом расходов и планированием закупок. Это позволяет оптимизировать затраты и повысить эффективность стройки. ',
               '– это творческий процесс, включающий в себя создание веб-сайтов и приложений. Наши специалисты предлагают комплексные решения, начиная от веб-дизайна и вёрстки страниц, и заканчивая программированием и настройкой серверов. Мы следуем современным трендам и используем передовые технологии, чтобы создать для вас качественные и уникальные веб-проекты. ',
               ' Разработка и внедрение CRM-систем – это ключевой момент для компаний, желающих улучшить взаимодействие с клиентами и оптимизировать процессы продаж. Мы разрабатываем индивидуальные CRM-решения, которые автоматизируют выполнение заказов, упрощают документооборот и обеспечивают единую базу данных клиентов с подробной историей взаимодействия.',
               'Разработка ERP-систем – это комплексный подход к автоматизации бизнеса, который позволяет объединить все процессы компании в единую информационную систему. Наши ERP-решения основаны на модульном принципе, что позволяет создавать индивидуальные модули для каждого направления бизнеса. Это обеспечивает комплексное управление компанией и снижает необходимость во множестве отдельных информационных систем. ',
               ' Наша команда специалистов предлагает широкий спектр услуг в области веб-разработки, CRM и ERP-систем, гарантируя высокое качество и профессионализм в каждом проекте. Обращайтесь к нам, и мы поможем вам создать эффективные и современные IT-решения для вашего бизнеса.',
               ' ',
               ' ',
               ' ',
               ' ',
               ' ',
               ' ',
               // 'подходит как крупному, среднему, так и малому бизнесу. Данный сервис поможет автоматизировать работу как внутренних, так и внешних процессов, обеспечит прозрачную деятельность внутренних и внешних пользователей системы.',
               // 'позволяет следить за деятельностью одной или целой сетью аптек. Предоставлением отчетности за проданный продукт и соотношение с складскими остатками продукции аптеки, обеспечении аналитическими процессами системы.',
               // 'предназначена для обеспечения простоты онлайн бронирования свободных комнат в гостинице, оставление отзывов, оценка состояний компаний и обслуживающего персонала. И связь между системой и администрации гостиницы. Для учета и анализа эффективности работы с клиентами.',
               // 'предназначена для упрощения работы сотрудников с документооборотом, а самое главное программное обеспечение предназначено для того чтобы избежать нарушения и погрешности в работе сотрудников.',
               // 'это особо важный процесс для учета товаров и оборота в магазине. Интеграция с 1С и отдельный складской учет.',
               // 'данный сервис предназначен для проката товара и определение его стоимости. Привязка к системе оплаты актуальна в данном случае.',
               // ' в данной отрасли многопрофильное и многофункциональное. Оно может отвечать за политику ресторанов, клиентов, а также отвечать внутренним требованиям работы самих ресторанов.',
               // ' нужна для упрощения регистрации посетителей, и создание онлайн календаря на их сайтах.',
               // 'это система для учета складских товаров и прозрачности работы сотрудников внутри системы, а также возможность интеграции ее с другими системами.',
               // ' это глобальная система автоматизации строительства, учета, анализа, аналитики потраченного строительного материала и аналитика закупки строительного материала для предстоящей стройки. Веб-разработка — процесс создания веб-сайта или веб-приложения. Основными этапами процесса являются веб-дизайн, вёрстка страниц, программирование на стороне клиента и сервера, а также конфигурирование веб-сервера. Этапы разработки веб-сайта На сегодняшний день существуют несколько этапов разработки веб-сайта:',
            ],
            way_list: [
               '1.Проектирование сайта или веб-приложения (сбор и анализ требований, разработка технического задания, проектирование интерфейсов)',
               '2.Разработка креативной концепции сайта',
               '3.Создание дизайн-концепции сайта',
               '4.Создание макетов страниц',
               '5.Создание мультимедиа-объектов',
               '6.Вёрстка страниц и шаблонов',
               '7.Программирование (разработка функциональных инструментов) или интеграция в уже имеющуюся систему управления',
               '8.Оптимизация и размещение материалов сайта',
               '9.Тестирование и внесение корректировок',
               '10.Публикация проекта на хостинге',
               '11.Обслуживание работающего сайта или его программной основы',
            ],
            development: 'Разработка CRM',

            slide_section: [
               'Мы преподаем',
               'Наш современный и профессиональный подход уже привлек множество клиентов.',
            ],
            dashboard: 'Панель управления',
            currentLessons: 'Текущие уроки',
            profile: 'Профиль',
            helpp: 'Помощь',
            visitHistoryy: 'История посещений',
            logOut: 'Выйти',

            //Website Promotion
            promotionTitle: 'Продвижение сайта',
            promotionText:
               'Вот несколько оптимальных вариантов продвижения вашего сайта, предлагаемых "WebexTech":',

            photoDivs: [
               'Комплексное продвижение сайта',
               'Этот вариант включает в себя различные виды продвижения, такие как поисковое продвижение, контекстную рекламу, а также различные рекламные кампании в Интернете, такие как баннерная реклама, реклама на досках объявлений и т. д. Комплексное продвижение обеспечивает максимально эффективное продвижение вашего сайта.',
               'Поисковое продвижение сайта',
               'Этот вид продвижения направлен на вывод вашего сайта в топ поисковых систем, таких как Яндекс, Рамблер и Google. Когда ваш сайт появляется в первых 10 результатах поиска, это автоматически увеличивает трафик на вашем сайте.',
               'Контекстная реклама:',
               'Этот метод продвижения включает короткие текстовые объявления, которые появляются на страницах результатов поиска в ответ на запросы пользователей. Они также могут отображаться на других рекламных площадках, таких как Яндекс.Директ, Рамблер и Google AdWords.',
               'Выбор конкретного варианта зависит от ваших целей и бюджета. Комплексное продвижение может быть наиболее эффективным вариантом, так как оно объединяет различные методы продвижения для достижения наилучших результатов.',
            ],
            textDivTop: [
               'Преимущества продвижения вашего сайта с помощью «WebExTech»:',
               '1. Прозрачность: Вы будете в курсе каждого этапа продвижения вашего сайта благодаря регулярной отчетности и полной осведомленности о проделанной работе. Мы согласуем предварительные этапы работ и все действия по продвижению и оптимизации сайта с вами',
               '2. Официальный партнер Яндекса: Благодаря нашему статусу официального партнера Яндекса, мы предоставляем контекстную и медийную рекламу на Яндексе по ценам Яндекса. Мы также обеспечиваем бесплатную поддержку вашей рекламной кампании на Яндексе профессиональными специалистами.',
               '3. Индивидуальный подход: Мы гарантируем нашим клиентам наиболее эффективное продвижение сайта, учитывая особенности и потребности вашего бизнеса. У нас индивидуальный подход к каждому клиенту.',
               '4. Удобство: Наш сотрудник сам приедет к вам, если ваша компания находится в Армении. Мы оперативно решаем все вопросы с клиентами из других городов через современные системы обмена информацией.',
               '5. Легальные методы продвижения: Мы используем только легальные методы продвижения вашего сайта, чтобы он не попал под санкции поисковых систем.',
               '6. Высокие позиции в поисковых результатах: Мы гарантируем продвижение вашего сайта на 1-10 место в результатах поиска без дополнительной оплаты за рекламные акции.',
               '7. Индивидуальное внимание: Каждому проекту мы уделяем максимум времени и внимания, поскольку каждый клиент для нас особенный.',
               '',
            ],

            middleSide: [
               'Ветви',
               'WebEx Technologies предлагает услуги по разработке программного обеспечения компаниям из различных отраслей.',
               'ФИНАНСЫ',
               'ТЕЛЕКОММУНИКАЦИЯ',
               'АВТО И ТРАНСПОРТ',
               'ЗДРАВООХРАНЕНИЕ',
               'ТОРГОВЛЯ',
               'ОБУЧЕНИЕ',
            ],
            bottomSideTexts: [
               'Адаптивность. Принципы чистого кода. Стратегическая реализация.',
               'Мы создаем быстрые и надежные сайты. Мы обеспечиваем оптимальную реализацию поставленных задач.',
               'Создавая веб-сайт с помощью «Webex Tech», вы также получаете:',
               'Бесплатная регистрация доменного имени ',
               'по желанию клиента на один год. Мы бесплатно поможем вам проверить, свободны ли выбранные варианты доменного имени для регистрации.',
               'Бесплатная регистрация сайта в крупнейших поисковых системах ',
               'такие как Яндекс, Google, Рамблер, Mail.ru. Регистрация производится только вручную, что гарантирует корректность и своевременность предоставления информации о вашем сайте в поисковых системах.',
               'Бесплатная установка посетителей ',
               'счетчик статистики на созданном сайте (системы Яндекс, LiveInternet, Mail.ru или другой по вашему желанию).',
               'Размещение и настройка сайта на хостинге. ',
               'Квалифицированный подбор хостинга, соответствующего техническим требованиям для обеспечения корректной работы сайта. Вы получаете полностью готовый к работе сайт.',
               'Бесплатное обучение для клиентов. ',
               'которые заказывают сайт (в любом удобном для вас месте в Волгограде или онлайн) для работы с сайтом и системой управления сайтом.',
               'Бесплатная техническая поддержка -',
               '6 месяцев (установка обновлений необходимой системы, исправление возможных ошибок программы).',
               'Почему стоит сотрудничать с Центром «WebExTech»:',
               'Прозрачность действий на любом этапе создания сайта. ',
               'Мы предоставляем регулярные отчеты и обеспечиваем полную осведомленность о работе.',
               'Индивидуальный подход к каждому клиенту. ',
               'Тщательное изучение специфики бизнеса клиента на подготовительном этапе создания сайта помогает получить максимальный эффект в кратчайшие сроки.',
               'Вы решили создать сайт? Тогда не придется тратить время на дорогу. Если Ваша Компания находится в Ереване, просто позвоните в наш Центр, согласуйте удобное для Вас время и место, и наш сотрудник сам приедет к Вам. Все вопросы с клиентами, находящимися в других городах, позволяют нам оперативно решать современные системы обмена информацией: ',
               'Электронная почта, Skype, ICQ, QIP и другие.',
               'Выбор оптимальной системы управления контентом (CMS), варианты создания адаптивного дизайна сайта, генерация идей и поиск решений, повышающих функциональность, индивидуальность и эффективность сайта.',
               'Создание веб-сайта — страсть наших разработчиков. ',
               'Мы стараемся использовать при разработке сайта не только известные и распространенные решения, но и новые неожиданные решения, которые делают сайт уникальным и вдохновляющим.',
               'При создании веб-сайтов',
               'мы используем только лицензионные (коммерческие и некоммерческие) CMS, модули, компоненты, разработки.',
               'Каждый Клиент для нас УНИКАЛЕН. Вы можете быть уверены, что создавая сайт у нас, вашему проекту будет уделено максимум времени и внимания.',
               'Специальные предложения позволяют нам сделать создание сайтов для наших Клиентов максимально эффективным и выгодным.',
            ],
            buttonsSide: [
               'ДЛЯ ЗАПРОСА ИЛИ ВОПРОСА',
               'Развитие веб-сайта',
               'Продвижение сайта/SEO',
               'Сервис и поддержка',
               'Разработка 3D-моделирования',
               'Разработка мобильных приложений',
               'Юнити Девелопмент',
            ],

            /////3d modeling///////////
            topSideUntilSlider: [
               '3D моделирование',
               'Трехмерное моделирование, или 3D моделирование.',
               ', — это процесс создания трехмерных изображений любых предметов или объектов. Для этих целей специалисты используют специализированные компьютерные программы, так называемые 3D-редакторы. С их помощью на плоскости строятся геометрические проекции, необходимые для создания объемного любого эффекта.',
               'Особая красота',
               '3D моделирование',
               'заключается в практически неограниченных возможностях этой технологии. С использованием',
               '3D графика',
               ', вы можете создать модель любого реального или воображаемого здания, неодушевленного предмета или явления.',
            ],
            middleSideUnderSlider: [
               'ВНЕДРЯЕМ ПЕРЕДОВЫЕ ТЕХНОЛОГИИ',
               'Блендер',
               'Вещество',
               'Gimp, c#',
               'MakeHuman',
            ],
            create3dModel: [
               'СОЗДАНИЕ 3D МОДЕЛЕЙ',
               'Создание трехмерных моделей требует от художника или дизайнера не только умения работать с компьютерной графикой, но и внимательности к деталям и умения следовать инструкциям заказчика. Важно выбрать правильную программу для работы с трехмерной графикой, которая подходит для конкретного проекта. Например, Autodesk 3ds Max является универсальным инструментом, который может применяться в различных отраслях, в то время как AutoCAD специализируется на промышленных и строительных проектах.',
               'Качественное выполнение работ подразумевает строгое соблюдение технического задания от заказчика. Это важно для достижения желаемого результата и предотвращения несоответствий.',
               'Для достижения максимально реалистичных эффектов необходимо использовать высококачественные текстуры и тщательно проработать каждую деталь модели. Тщательная проработка всех элементов помогает создать трехмерную модель с высокой степенью реализма и детализации.',
               'Важно помнить, что создание трехмерных моделей - это творческий процесс, который требует сочетания технических навыков и художественного воображения для достижения наилучшего результата.',
               '',
               '',
            ],
            table3dModel: [
               'Цены и сроки',
               'Проект',
               'Крайний срок',
               'Цены',
               '3D визуализация коттеджа с территорией',
               '2-5 дней',
               'от 110$ 2-3 ракурса',
               'Архитектурная 3D визуализация торговых центров, многоквартирных домов',
               '3-10 дней',
               'от 440$ 3-5 ракурсов',
               '3D Визуализация земельной застройки, жилых комплексов',
               '5-14 дней',
               'от 720$ 5-10 ракурсов',
               '3D Визуализация генерального плана',
               '5-10 дней',
               'от 580$ 1 ракурс',
               '3D визуализация интерьера',
               'от 2 дней',
               '2-10$ за м2 3 угла комнаты',
               'Видеопрезентация дома, квартиры или архитектурного объекта',
               'от 3 дней',
               'от 22$ за 1 секунду видео + стоимость моделирования',
               'Персонажи игры',
               'от 2 дней',
               '22$',
            ],

            ifrem_text: [
               'Добро пожаловать в мир инновационной 3D съемки, где каждый угол вашего помещения оживает перед вашими глазами. 3D съемка 360 градусов позволяет вам окунуться в полностью интерактивный опыт осмотра помещения, словно вы находитесь внутри него. Наша команда профессиональных фотографов и дизайнеров использует передовое оборудование и технологии для создания уникальных и привлекательных 3D обзоров, которые могут быть использованы для различных целей.',
               'Откройте для себя все преимущества 3D съемки 360 градусов:',
               'Полная интерактивность: Пользователи могут свободно вращать изображение и рассматривать помещение с любого угла, получая максимально реалистичное представление о его пространстве и дизайне.',
               'Удобство и доступность: 3D обзоры могут быть легко встроены в веб-сайты, презентации или приложения, обеспечивая простой доступ к информации о помещении для потенциальных клиентов или заинтересованных сторон.',
               'Привлекательность и визуальный эффект: Благодаря высокому качеству изображений и возможности взаимодействия с ними, 3D съемка создает мощное впечатление и помогает привлечь внимание к вашему объекту.',
               'Независимо от того, нужен ли вам виртуальный тур по недвижимости, визуализация интерьера для дизайн-проекта или просто впечатляющий способ представить ваше помещение, наши услуги по 3D съемке 360 градусов помогут вам достичь ваших целей. Свяжитесь с нами сегодня, чтобы узнать больше о том, как мы можем преобразить ваше пространство в виртуальный мир 3D.',
            ],

            development_crm: [
               'Разработка и внедрение CRM-системы',
               'Веб-разработка',
               'Разработка ERP-систем',
               'Разработка ERP-систем',
            ],

            crm_title: [
               'Автоматизация строительства через программное обеспечение – это неотъемлемая часть современной индустрии строительства, где каждая деталь проекта имеет огромное значение. Наша глобальная система автоматизации обеспечивает полный контроль над процессами строительства, учетом используемых материалов, анализом расходов и планированием закупок. Это позволяет оптимизировать затраты и повысить эффективность стройки.',
               ' – это творческий процесс, включающий в себя создание веб-сайтов и приложений. Наши специалисты предлагают комплексные решения, начиная от веб-дизайна и вёрстки страниц, и заканчивая программированием и настройкой серверов. Мы следуем современным трендам и используем передовые технологии, чтобы создать для вас качественные и уникальные веб-проекты.',
               '– это ключевой момент для компаний, желающих улучшить взаимодействие с клиентами и оптимизировать процессы продаж. Мы разрабатываем индивидуальные CRM-решения, которые автоматизируют выполнение заказов, упрощают документооборот и обеспечивают единую базу данных клиентов с подробной историей взаимодействия.',
               ' – это комплексный подход к автоматизации бизнеса, который позволяет объединить все процессы компании в единую информационную систему. Наши ERP-решения основаны на модульном принципе, что позволяет создавать индивидуальные модули для каждого направления бизнеса. Это обеспечивает комплексное управление компанией и снижает необходимость во множестве отдельных информационных систем.',
               'Наша команда специалистов предлагает широкий спектр услуг в области веб-разработки, CRM и ERP-систем, гарантируя высокое качество и профессионализм в каждом проекте. Обращайтесь к нам, и мы поможем вам создать эффективные и современные IT-решения для вашего бизнеса.',
               'как правило, разработка ERP ведется по модульному принципу построения',
            ],
            crm_titleP: [
               'Наша команда веб-разработчиков тесно следит за последними тенденциями в сфере веб-разработки, что позволяет нам создавать качественные пользовательские веб-приложения. Мы специализируемся как на разработке технически сложных, но при этом удобных и эргономичных приложений, так и на создании сайтов любой сложности. Мы предоставляем полный цикл разработки веб-приложений: начиная с бизнес-анализа и проектирования, и заканчивая внедрением, тестированием качества, сопровождением и поддержкой.',
               'Бизнес-аналитика в IT представляет собой сбор данных, предложение по решению проблем и учет требований заказчика. На основе этой информации мы разрабатываем техническое задание и проводим дальнейшее проектирование проекта.',
               'Проектирование ИТ-инфраструктуры включает в себя разработку четкого плана действий и определение ресурсов для создания информационной системы, которая соответствует потребностям бизнеса. Наша задача - найти оптимальные решения, которые помогут компании достичь желаемых результатов.',
               'Внедрение программного обеспечения - это процесс настройки программного обеспечения под определенные условия использования, а также обучение пользователей работе с программным продуктом.',
               'Внедрение программного обеспечения требует работ в трех основных направлениях:',
            ],
            crm_title_li: [
               '1.Выделение критически важных процедур в деятельности организации, для которых необходимо использование ИТ-решений. Разработанное ИТ-решение становится ключевым для организации, обеспечивая прозрачность и эффективность процессов.',
               '2.Расширение нормативной базы организации путем включения в нее регламентов, описывающих порядок выполнения процедур автоматизированных процессов',
               '3.Стандартизация существующей деятельности организации и включение лучших практик в разработанное ИТ-решение, что обеспечивает его полезность и значимость для всех участников.',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
            ],
            busines_analytic: [
               'Бизнес-аналитика ',
               'Проектирование ИТ-инфраструктуры —',
               'ԾВнедрение программного обеспечения',
            ],
            busines_analytic_title: [
               'в IT это сбор данных, предложение по решению проблем и требовании заказчика, на основании чего, составляем техническое задание и дальнейшее проектирование проекта.',
               'это составление четкого плана действий и описание ресурсов для создания информационной системы, которая отвечает потребностям бизнеса. Задача в том, чтобы найти, что и каким способом приведет компанию к желаемым результатам.',
               ' — процесс настройки программного обеспечения под определённые условия использования, а также обучения пользователей работе с программным продуктом.',
               'Внедрение программного обеспечения требует действий в трёх следующих плоскостях работ.',
            ],

            busines_analytic_li: [
               'Выделение критических, с точки зрения общего результата, процедур в деятельности организации. Когда набор таких процедур определен, необходимо в первую очередь использовать ИТ-решение для автоматизации операций внутри именно этих процедур. Таким образом, разработанное ИТ-решение автоматически становится жизненно важным и востребованным для организации. Также это обеспечит публичность процесса внедрения.',
               'Расширение нормативной базы организации путём включения в неё регламентов, описывающих порядок выполнения процедур автоматизируемых процессов. В противном случае есть опасность возникновения рассогласования между автоматизированными процедурами и остальными процессами организации.',
               'Выполнение работ по общей стандартизации существующей деятельности организации. Лучшие практики выполнения процедур выделяются и включаются в ИТ-решение, в соответствии с принципом наибольшей полезности для большинства участников. Процент таких процедур относительно общего объема автоматизации может быть невелик, но это придает процессу построения решения вес в организации за счет увеличения его «полезности».',
            ],
            busines_analytic_p: 'Сопровождение (поддержка) программного обеспечения - ',
            busines_analytic_title_p: [
               'Тестирование программного обеспечения - это важнейший этап разработки, включающий в себя исследование и испытания программного продукта для проверки его соответствия между реальным и ожидаемым поведением на различных наборах тестов.:',
               ' это непрерывный процесс улучшения, оптимизации и устранения дефектов программного обеспечения после его передачи в эксплуатацию. Эта фаза жизненного цикла программного обеспечения следует за передачей ПО в эксплуатацию. В процессе сопровождения происходят изменения, направленные на исправление обнаруженных дефектов, доработку и добавление новой функциональности для повышения удобства использования и применимости ПО.',
               'Экспертиза Webex Technologies в области разработки веб-приложений включает в себя создание технически сложных, но при этом удобных и эргономичных приложений, а также разработку сайтов любой сложности. Мы предлагаем полный цикл разработки веб-приложений, начиная с бизнес-анализа и проектирования, и заканчивая внедрением, тестированием качества, сопровождением и поддержкой.',
            ],

            introducing: 'ВНЕДРЯЕМ ПЕРЕДОВЫЕ ТЕХНОЛОГИИ',

            adaptability:
               'Адаптивность. Принципы чистого кода. Стратегически продуманная реализация.',
            adaptability_title: [
               'Делаемc сайты быстрыми, надежными. Обеспечиваем оптимальную реализацию',
               'При создании сайта в "Webex Tech" вы получаете ряд дополнительных бесплатных услуг:',
               'Почему удобно и эффективно сотрудничать с центром "WebExTech":',
            ],

            adaptability_title_h: [
               'Бесплатная регистрация доменного имени:',
               'Регистрация в поисковых системах:',
               'Установка счетчика статистики посещений:',
               'Размещение и настройка на хостинге:',
               'Бесплатное обучение:',
               'Бесплатная техническая поддержка:  ',
            ],
            adaptability_title_text: [
               ' Мы предоставляем возможность бесплатной регистрации доменного имени, выбранного вами, на 1 год. Наша команда поможет вам проверить доступность выбранного доменного имени для регистрации.',
               'Мы бесплатно зарегистрируем ваш сайт в крупных поисковых системах, таких как Яндекс, Google, Рамблер, Mail.ru. Вся регистрация проводится вручную для обеспечения правильности и своевременности представления информации о вашем сайте.',
               'Мы бесплатно установим счетчик статистики посещений на вашем сайте. Вы можете выбрать систему статистики по вашему желанию, такую как Яндекс, LiveInternet, Mail.ru или другую.',
               'Наша команда обеспечит размещение и настройку вашего сайта на хостинге. Мы подберем квалифицированный хостинг, соответствующий техническим требованиям, чтобы ваш сайт работал без сбоев.',
               'Мы предоставим бесплатное обучение сотрудника вашей компании работе с сайтом и системой управления сайтом. Обучение может проводиться в любом удобном для вас месте в Волгограде или через интернет.',
               'Мы обеспечим бесплатную техническую поддержку в течение 6 месяцев после создания сайта. Это включает установку требуемых обновлений системы и исправление возникших программных ошибок.',
            ],
            Why_to_H: [
               'Прозрачность действий на любых этапах создания сайта..',
               'Индивидуальный подход к каждому Клиенту..',

               'Подбор оптимальной системы управления контентом (CMS), выбор варианта создания дизайна сайта, генерация идей и поиск решений, повышающих функциональность, индивидуальность и эффективность сайта.',
               'Создание сайта для нас - творческий процесс.',
               'при создании сайтов только лицензированные (коммерческие и некоммерческие) CMS, модули, компоненты, дизайны.',

               'Специальные предложения позволяют сделать создание сайта для наших Клиентов максимально эффективным и выгодным.',

               'Почта для связи по почте',
               ' (https://www.facebook.com/WebExTech)',
               '(https://www.linkedin.com/groups/13856890/)',
               '(https://www.instagram.com/webex.am/)',
               '(+37496400073)',
            ],
            Why_to_text: [
               'Мы предоставляем регулярную отчетность и обеспечиваем полную информированность о проведении работ.',
               'Наша компания предлагает индивидуальный подход к каждому клиенту, учитывая специфику и потребности его бизнеса. Мы уделяем особое внимание изучению вашего бизнеса на начальном этапе создания сайта, чтобы достичь максимального эффекта в кратчайшие сроки.',

               'Если ваша компания находится в Ереване, нет необходимости тратить время на поездки. Просто свяжитесь с нами, назначьте удобное время и место, и наш сотрудник сам приедет к вам. Для оперативного взаимодействия с клиентами из других городов мы используем современные информационные системы обмена информацией, такие как электронная почта .',

               'Мы стремимся использовать не только широко распространенные, но и новые, неожиданные решения при разработке вашего сайта, чтобы сделать его уникальным и запоминающимся. При создании сайта мы уделяем особое внимание выбору оптимальной системы управления контентом (CMS), дизайну и функциональности, чтобы ваш сайт был как можно более эффективным и индивидуальным.',
               'Мы используем только лицензированные (коммерческие и некоммерческие) CMS, модули, компоненты и дизайны при создании сайтов. Каждый клиент для нас уникален, и мы гарантируем, что вашему проекту будет уделено максимально необходимое время и внимание.',
               'Наши специальные предложения делают создание сайта для наших клиентов максимально эффективным и выгодным. Мы стремимся сделать процесс создания сайта для вас творческим и приятным, достигая лучших результатов.',

               'Facebook (https://www.facebook.com/WebExTech) Log in or sign up to view See posts, photos and more on Facebook.',
               'E-mail -',
               'Facebook -',
               'Linkedin -',
               'Instagram -',
               'WhatsApp -',
            ],

            buttons_title: 'ВАШ ЗАПРОС ИЛИ ВОПРОС ПО ТЕМЕ',
            inquiry: [
               'Разработка Сайта',
               'Раскрутка сайта / SEO',
               'Сервис и Поддержка',
               '3D Моделирования ',
               ' Мобильные приложения ',
               'Разработка Unity и игр',
            ],

            suport: 'Поддержка и обслуживание сайтов',

            suport_title:
               'Поддержка и обслуживание сайтов, предоставляемые центром "WebExTech", включают в себя следующие услуги:',

            MaintenanceTypes: [
               'Виды обслуживания сайтов:.',
               'Техническое обслуживание',
               'Информационная поддержка сайтов',
            ],

            MaintenanceTypes_title: [
               '1. Техническая поддержка: Наши специалисты готовы помочь вам с любыми техническими вопросами, связанными с вашим сайтом. Это может включать в себя исправление ошибок, обновление программного обеспечения, настройку сервера и т.д.',
               '2. Информационная поддержка: Мы также предоставляем информационную поддержку, помогая вам в обновлении контента на сайте, добавлении новых страниц, изменении дизайна и т.д.',
               '3. Комплексное обслуживание: Мы предлагаем комплексное обслуживание вашего сайта, которое может включать как техническую, так и информационную поддержку, а также регулярное обновление контента и анализ эффективности сайта.',
               '4. Ежемесячное обслуживание: Мы предлагаем различные варианты ежемесячного обслуживания вашего сайта, которые могут быть адаптированы под ваши потребности. Это позволяет вам избежать необходимости содержать в компании специального сотрудника, ответственного за обслуживание сайта.',
            ],

            MaintenanceTypes_ul: [
               'Обновление сайта, перевод статических сайтов на современные CMS (системы управления контентом).   ',
               'Аудит сайтов, анализ сайтов.Аудит сайтов, анализ сайтов.',
               'Модернизация сайтов, в том числе редизайн, интеграция CMS, дополнительных модулей и интерактивных систем взаимодействия.',
            ],

            // =====================mobaile=============

            mobail: 'Разработка мобильных приложений',

            mobail_text:
               'Компания ВэбЕкс Технолоджис была основана в ноябре 2007 года. Наша компания имеет большой опыт работы в разработки мобильных приложений, аутсорсинга разработки программного обеспечения и веб-разработки, ИТ-консалтинга, интеграции приложений, анализа бизнес-процессов, тестирования ПО, сопровождения и поддержки. Высокое качество услуг призванно обеспечить нашим клиентам информационную безопасность и максимальный комфорт. За время нашей работы нам доверились компании различных стран: Европы, США, России и Украины.',

            Reliable: [
               'Надежная разработка мобильных приложений для iOS и Android устройств',
               'Выберите ВебЭкс Технолоджис для ваших потребностей в разработке мобильных приложений и ощутите разницу работы с преданным коллективом, нацеленным на обеспечение превосходства на каждом этапе работы. Давайте превратим вашу мечту в реальность и поднимем ваше приложение на новые вершины успеха в конкурентной цифровой среде.',
            ],
            Development_of_Mobile: [
               'Разработка мобильных приложений для iOS',
               '1. Используйте силу React Native: Используя возможности React Native, мы предоставляем непревзойденные преимущества для вашего путешествия в разработке приложений. React Native позволяет нам создавать кроссплатформенные приложения с единой кодовой базой, что значительно сокращает время и затраты на разработку. Более того, это обеспечивает безупречный пользовательский опыт на различных устройствах и операционных системах, расширяя охват и масштабируемость вашего приложения.',
               'Development of mobile applications for Android',
               '2. Стратегическое планирование для успеха: В ВебЭкс Технолоджис мы понимаем важность тщательного планирования в разработке приложений. Наша команда тесно сотрудничает с вами, чтобы определить четкие цели, определить этапы проекта и разработать всестороннюю стратегию успеха. Благодаря тщательному планированию каждой фазы разработки мы гарантируем эффективное распределение ресурсов, своевременную поставку и соответствие вашим бизнес-целям.',
               'Dedicated team of developers for mobile development for iOS',
               '3. Тщательное тестирование качества: Качество занимает важное место во всем, что мы делаем. Наша отдельная команда по контролю качества (QA) проводит тщательное тестирование на различных устройствах и платформах, чтобы выявить и устранить любые потенциальные проблемы или ошибки. Благодаря тщательным протоколам тестирования мы гарантируем, что ваше приложение соответствует самым высоким стандартам производительности, функциональности и удовлетворенности пользователей, что приводит к положительным отзывам и улучшению показателей удержания.',
               'Dedicated team of developers of mobile applications for Android',
               '4. Превосходство в Армении: Находясь в Армении, наша команда объединяет техническое мастерство с глубоким пониманием мировых тенденций рынка. Мы гордимся тем, что предлагаем передовые решения, адаптированные под уникальные потребности наших клиентов. Обладая доказанным опытом успеха, мы стремимся превзойти ожидания и установить долгосрочные партнерские отношения, основанные на доверии, прозрачности и исключительных результатах.',
            ],

            Reliable_ios: [
               'Services for creating applications for Android, developing applications for iOS',
               'Выберите ВебЭкс Технолоджис для ваших потребностей в разработке мобильных приложений и ощутите разницу работы с преданным коллективом, нацеленным на обеспечение превосходства на каждом этапе работы. Давайте превратим вашу мечту в реальность и поднимем ваше приложение на новые вершины успеха в конкурентной цифровой среде.',
            ],
            Reliable_text:
               'Webex Technologies - компания разработчик мобильных приложений в Армении, имеет многолетний опыт работы с технологиями и платформами в мобильной сфере. Мы предлагаем широкий спектр услуг по разработке мобильных приложений на рынке Армении и других стран. Наша компания предоставляет IT-консалтинг, разработку, дизайн, тестирование и поддержку продукта.',

            bottomSideTexts_mobile: [
               'В Webex Technologies LLC мы глубоко погружаемся в динамику рынка и сущность бренда, чтобы обнаружить ваш конкурентный преимущество.',

               'Разблокируйте потенциал инноваций в мобильных приложениях.',

               '- Дизайн продукта: Используйте силу рыночных исследований и идентичности бренда, чтобы выделить свою нишу и поднять свой бренд.',

               '  - Консультирование по мобильным приложениям:',
               ' Позвольте нашим экспертам провести вас через каждый этап, от завершения концепции до совместимости с платформой, обеспечивая дорожную карту, созданную для успеха.',

               '- Дизайн мобильных приложений:',
               'Погрузите ваших пользователей в интуитивный и визуально потрясающий опыт, который стимулирует конверсии и способствует вовлеченности.',

               '  - Разработка мобильных приложений: ',
               'С имеющимся опытом более чем в 350 успешно реализованных проектах наши разработчики предлагают надежные, молниеносные приложения, которые превосходят ожидания.',

               ' Поднимите ваше онлайн-присутствие за пределы мобильных устройств',

               '- Веб-разработка:',
               ' Дополните ваше мобильное приложение создавая бэк-энд фунциональность для более многоисленных возможностей и функционалов.',

               '- Интеграция мобильных приложений:',
               'Безупречно свяжите ваше приложение с системами бэк-энда и сторонним программным обеспечением, обеспечивая плавную работу на всех фронтах.',

               'Обеспечьте превосходство на каждом этапе',

               '- Тестирование и QA: Спокойно зная, что наши сертифицированные инженеры ISTQB тщательно тестируют каждый аспект, от функциональности до безопасности, гарантируя безупречный пользовательский опыт.',

               '- Обслуживание и поддержка: ',
               ' От пост-запускной поддержки до постоянного соблюдения и управления производительностью мы готовы поддерживать успех вашего приложения. Возродите ваши устаревшие приложения для современной эры',

               '- Модернизация мобильных приложений:',
               ' Превратите устаревшие приложения в эффективные и стильные инструменты с обновленной архитектурой и улучшенным пользовательским опытом.  Готовы изменить свой бренд?',

               ' Сотрудничайте с Webex Technologies LLC уже сегодня и отправляйтесь в путешествие инноваций и успеха. Давайте вместе формировать будущее вашего бренда.',

               'В ООО «Webex Technologies» мы используем следующие технологии, которые используем для разработки мобильных приложений: React Native, Objective C, Java Kotlin.',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
               '',
            ],
            // ======================Games==============================
            games_title:'Создание игр',
            games: [
               'Аутсорсинг услуг по разработке приложений на Unity',
               'WebЕx Technologies это компания с большим опытом разработки. Мы предлагаем профессиональные услуги Unity разработки полного цикла для различных отраслей. Наша команда обладает глубокими знаниями и опытом в сфере разработки игр, веб, десктоп, мобильных и кроссплатформенных приложений с использованием всех преимуществ и инструментов Unity для достижения целей заказчиков.',
            ],

            games_Benefits: [
               'Преимущества разработки Unity приложений в компании Webex Technologies',
               'Наша компания является опытным и надежным партнером в разработке решений с Unity. Мы реализовываем эффективные и надежные приложения для клиентов по всему миру на протяжении многих лет. Решения с использованием технологии Unity мы успешно внедряем для таких сфер, как электронная коммерция, игры, здравоохранение, образование, реклама и т.д. Если Вы хотите обсудить детали проекта, свяжитесь с нами.',
            ],

            uniti: 'Технологический опыт наших Unity разработчиков включает:',

            uniti_text: [
               'Технологии',
               'WEBGL, OPENGL, JAVASCRIPT, C#, C++',
               'Операционные системы',
               'OS, ANDROID, WINDOWS, OS X, LINUX',
               'Базы данных',
               'MYSQL, SQLITE, MONGO DB, FIREBASE',
            ],

            INTRODUCING: 'ВНЕДРЯЕМ ПЕРЕДОВЫЕ ТЕХНОЛОГИИ',

            Our_expertise: [
               'Наш опыт в разработке решений с Unity включает в себя:',
               '2D и 3D разработка игр',
               'Разработка Unity 3D кроссплатформенных приложений',
               'Разработка мобильных, веб и десктоп приложений на Unity3D',
               'Разработка интерактивных приложений',
               'UI/UX дизайн',
               '3D модели',
               'Настройка и поддержка приложений',
               'Разработка консольных игр (для PS, Xbox, Wii и др.)',
            ],

            canvas3D: ['Пасив. контроль', 'Актив контроль'],

            proj: [
               'Приглашение на день рождения',
               'Приглашение на вечеринку',
               'Свадебное приглашение',
               
            ],

            projTitle: 'Веб-приглашения',

            turnstileTitle: 'Турникеты',

            turnstileInfoTitle: 'Мы предлагаем системы безопасности и контроля доступа, которые позволят Вам:',

            turnstileInfo: [
               'Блокировать несанкционированный доступ.',
               'Разрешить доступ сотрудникам или лицам, имеющим на это право, с помощью QR-карт, RFID-карт, оборудования FaceID, оборудования для считывания отпечатков пальцев.',
               'Контролировать дни и часы прихода и выхода сотрудников.',
               'Создавать отчеты о приходе и уходе сотрудников за разные периоды времени /месяц, квартал, год.',
               'Контроль входа-выхода посетителей, с возможностью ограничения количества входов.'
            ],

            turnstileOrder: 'Заказ',

            turnstileOrderTitle: 'Связаться с нами',

            turnstileType: [
               'Односторонний',
               'Двусторонний',
            ],

            turnstile_videos_section_title: 'Сделано работ',

            turnstile_videos_titles: [
               'Турникет для супермаркетов',
               'Турникет для офисов',
               'Уличный турникет с распознаванием лиц: Безопасная и интеллектуальная система контроля доступа',
               'Продажа турникетов: Лучшие решения по безопасности и управлению для вашей компании',
               'Оборудование для мониторинга сотрудников с распознаванием лиц и возможностью QR-сканирования',
               'Демонстрация ввода QR-билетов единой билетной системы'
            ],

            web_project_cycle_title: 'Что необходимо для создания веб-приложения?',

            web_projectPage_cycleTitles:[
               'Планирование',
               'UX/UI-дизайн:',
               'Программирование',
               'Тестирование',
               'Проблема'
            ],

            web_projectPage_cycleTexts:[
               'Определены цель, особенности и требования приложения.',
               'Интерфейс разрабатывается, чтобы быть удобным и эффективным.',
               'Языки программирования (например, JavaScript, Python, PHP) используются для функциональности веб-приложения.',
               'Приложение тестируется на наличие ошибок.',
               'Приложение введено в эксплуатацию и продолжается работа по его постоянным обновлениям и технической поддержке.'
            ],

            web_projectPage_servicesTitles:[
               'С какими технологиями мы работаем?',
               'При разработке веб-приложений мы используем ряд ведущих технологий, исходя из сложности и функциональности приложений. Вот некоторые из основных технологий, с которыми мы работаем:'
            ],

            web_projectPageTitle: 'Разработка веб-приложений',

            web_projectPageDescription: 'Разработка веб-приложений — одно из направлений разработки информационных систем, включающее создание интерактивных и удобных для пользователя веб-приложений, работающих через Интернет. Имеет широкий спектр приложений: от торговых систем до социальных сетей, инструментов, баз данных и других полезных сервисов.',

            
            web_projectPage_info_part1: [
               'Что такое разработка веб-приложений?',
               'Разработка веб-приложений — это процесс создания интерактивных программных решений, доступных через интернет-браузеры. Эти приложения обеспечивают упрощенное взаимодействие между предприятиями и пользователями, позволяя выполнять сложные операции без загрузки дополнительного программного обеспечения.'
            ],

            web_projectPage_info_part2: [
               'Зачем нужна разработка веб-приложений?',
               'Доступность: Веб-приложения доступны с любого устройства: компьютеров, смартфонов и планшетов.',
               'Простота использования. Пользователи могут работать с приложением без какого-либо сложного программного обеспечения.',
               'Сбор и обработка данных. С помощью приложений легко собирать и анализировать данные.',
               'Управляемость и поддержка. Пользователям может быть предоставлена ​​техническая поддержка, и можно легко вносить новые обновления.',
               'Наращивание потенциала. Веб-приложения можно легко интегрировать с другими системами, добавляя новые функции и сервисы.'
            ],

            
            webProject_ourPartnersTitles:[
               'Наши партнеры',
               'Мы работаем с ведущими организациями, чтобы предоставлять качественные и надежные решения.'
            ],

            webProject_comments_name: [
               'Анна Маркосян',
               'Левон Карапетян',
               'Арман Саргсян',
               'Сатеник Арутюнян'
            ],

            webProject_comments: [
               'Партнерство с Webex стало важным шагом вперед для нашей организации. Их профессиональная команда быстро и качественно выполнила все наши технические требования.',
               'Партнерство с Webex стало важным шагом вперед для нашей организации. Их профессиональная команда быстро и качественно выполнила все наши технические требования.',
               'Благодаря Webex мы приобрели современные и умные технологические решения, которые способствовали развитию и успеху нашего бизнеса.',
               'Мы впечатлены приверженностью и результатами Webex, их команда подошла ко всем нашим техническим потребностям с большой ответственностью и профессионализмом.'
            ],

            commentsTitle: [
               'Отзывы',
               'Мнения наших студентов'
            ],

            studentComments_name: [
               'Сильва Погосян',
               'Карен Айвазян',
               'Нарине Кешишян',
               'Арутюн Аракелян'
            ],

            studentComments: [
               'Участвуя в этом курсе, я не только приобрел профессиональные навыки, но и нашел возможности трудоустройства. Это был потрясающий опыт, который полностью изменил мою карьеру.',
               'Курсы были адаптированы к моему графику. Благодаря проектам и практическим заданиям я почувствовал, что действительно учусь тому, что нужно работодателям.',
               'Индивидуальный подход очень помог мне преодолеть сложные моменты. Преподаватели всегда были готовы ответить на вопросы.',
               'Благодаря скорректированному графику я смог заниматься, не меняя своего распорядка дня. Теперь мои навыки позволяют мне работать в международных командах.'
            ],

            otherServicesTitle: 'Другие услуги',

            otherServicesItemsTitles: [
               'Разработка веб-приложений',
               '3D моделирование',
               'SEO',
               'Разработка игр',
               'Разработка мобильных приложений'
            ],

            otherServicesItemsTexts: [
               'Мобильная разработка включает создание интерактивной, удобной платформы, обеспечивающей бесшовный пользовательский опыт.',
               'Наши услуги SEO повышают видимость вашего сайта в поисковых системах, что помогает увеличить органический трафик и стимулировать рост бизнеса.',
               'Наши услуги SEO повышают видимость вашего сайта в поисковых системах, что помогает увеличить органический трафик и стимулировать рост бизнеса.',
               'Наши услуги бизнес-аналитики помогают выявить сильные и слабые стороны бизнеса на основе данных для принятия стратегических решений.',
               'Благодаря ему вы сможете автоматически принимать заказы, выставлять счета, отгружать продукцию и многое другое с минимальным участием человека.'
            ],

            tell_us_sub_title: 'Отправьте нам сообщение и наши специалисты с радостью ответят Вам в течение 1-2 рабочих дней.',

            tell_us_right_block_titles:[
               'Контактная информация',
               'Социальные платформы'
            ],

            tell_us_right_block_location: 'Баграмяна пр. 79, 1/1',

            mobail_appDevelopendPageTitle: 'Создание мобильных приложений',

            mobail_appDevelopendPageDescription: 'Разработка мобильных приложений является необходимостью, поскольку она не только обеспечивает плавный и комфортный пользовательский опыт, но также позволяет компаниям расти и расширяться, используя все возможности мобильных технологий.',

            mobail_appDevelopendPageInfo_part1: [
               'Что такое разработка мобильных приложений?',
               'Разработка мобильного приложения — это технологический процесс, который включает в себя разработку программы и ее адаптацию к мобильным устройствам, таким как смартфоны и планшеты. Этот процесс включает в себя несколько этапов: от первоначального проектирования программы до кодирования, тестирования и окончательного запуска. Приложения могут служить самым разным целям: от социальных сетей и игр до торговых платформ и бизнес-инструментов. Важно, чтобы дизайн приложения был интуитивно понятным, удобным и оптимизированным для разных устройств и размеров экрана.'
            ],

            mobile_services_title: 'Технологии, используемые в процессе создания мобильного приложения, зависят от характера проекта, целей и платформ. Вот наиболее распространенные технологии, используемые при разработке мобильных приложений:',

            mobail_appDevelopendPageInfo_part2: [
               'Зачем нужна разработка мобильных приложений?',
               'Немедленный доступ. Приложения обеспечивают немедленный и быстрый доступ для пользователя. Пользователи могут легко загрузить приложение и использовать его где угодно и когда угодно.',
               'Улучшение пользовательского опыта. Приложения позволяют пользователям предлагать персонализированный и удобный опыт, обеспечивая лучшее взаимодействие с брендом.',
               'Растущий рынок мобильной связи. Число мобильных пользователей постоянно увеличивается. Приложения позволяют компаниям по-новому обращаться к своим клиентам и лучше реагировать на требования рынка.',
               'Высокая вовлеченность. Благодаря постоянным уведомлениям и push-сообщениям мобильные приложения позволяют клиентам оставаться на связи и оставаться на связи.',
               'Развитие бизнеса и рост доходов. Мобильные приложения могут помочь увеличить продажи, позволяя пользователям совершать покупки, заказы или услуги непосредственно из приложения.'
            ],

            development_page_header: [
               'Курсы программирования',
               'Научитесь программировать, разрабатывать программные решения и оттачивать свои навыки на реальных проектах.'
            ],

            development_page_our_advantages_titles: [
               'Навыки',
               'Сертификат',
               'Стажировка',
               'Команда',
               'Опыт',
               'Гибкость',
               'Кастомизация',
               'Уверенность'
            ],

            development_page_our_advantages_texts: [
               'Приобретение новых профессиональных навыков для достижения успеха в соответствующей области.',
               'Всем студентам мы предоставляем сертификат профессионального доверия.',
               'Все наши студенты имеют возможность пройти у нас месячную стажировку.',
               'Используя реальные проекты и групповую работу, студенты учатся эффективно сотрудничать в команде.',
               'Посредством курсов реализуются практические проекты, благодаря которым полученные знания используются при решении реальных задач.',
               'Часы и формат курсов адаптированы к повседневной жизни студентов, обеспечивая удобство.',
               'Индивидуальный подход к обучению для каждого студента, исходя из его потребностей и целей.',
               'Приобретение новых навыков и успешное выполнение проектов способствуют повышению уверенности в себе, что также немаловажно в профессиональной жизни.'
            ],

            development_courses_cycles_title: 'Каковы этапы наших курсов?',

            development_courses_cycles_stage_menu: [
               '1-й этап',
               '2-й этап',
               '3-й этап'
            ],

            development_courses_cycles_stage_Texts: [
               'Мы изучим фронтенд-программирование, чистый способ написания кода, научимся создавать адаптивные веб-сайты разных размеров, изучим функции Java-скриптов, будем использовать JS-библиотеку React.',
               'Мы изучим Backend-программирование, работу с базами данных, будем подключаться к frontend через API, будем использовать библиотеку PHP для изучения языков программирования Laravel или Node JS за 2-5 месяцев.',
               'На последнем этапе студент получит возможность пройти стажировку. За этот период мы закрепим полученные во время учебы знания, работа будет вестись в рамках реальных проектов с командой программистов в течение 1-2 месяцев.'
            ],

            development_courses_cycles_stage_time: '4-6 месяцев',

            development_courses_page_certificate_section_titles: [
               'Что вы получите в конце курса?',
               'По окончании курса все наши студенты получают сертификат и возможность стажировки.',
               'Сертификат',
               'Стажировка'
            ],

            frequently_asked_questions: [
               'Каковы основные требования для участия в курсах?',
               'Есть ли сертификат по окончании курса?',
               'Каков формат уроков?',
               'Какой путь выбрать: Frontend или Backend?',
               'Смогу ли я найти работу?',
            ],

            frequently_asked_questions_answers: [
               'Основные требования для участия в курсах включают базовые технологические знания и желание учиться. В некоторых случаях может потребоваться знание языка или конкретной области, например, основ программирования.',
               'Да, сертификат предоставляется в обязательном порядке. В сертификате указывается количество учебных часов, оценка успеваемости студента (по системе 0-100 баллов), которая определяется исходя из его показателей. В сертификате также упоминается период стажировки студента и технологии, с которыми он работал во время стажировки.',
               'В Webex Technologies курсы организуются с индивидуальным подходом. Это означает, что студенты могут выбирать подходящие им дни и время, а также подходящий период обучения. Методика обучения, разработанная Webex Technologies, позволяет студентам эффективно осваивать материалы курса в установленные сроки. Знания и опыт, полученные в Webex Technologies, дают студентам необходимые навыки, которые позволят им успешно выйти на рынок труда.',
               "В Webex Technologies каждый студент получает индивидуальный подход от преподавателей. В ходе курса преподаватели оценивают навыки и возможности студента, рекомендуя, в каком направлении целесообразно продолжить: Frontend или Backend. Те студенты, которые продемонстрируют отличный прогресс в обоих направлениях, получат возможность стать Full Stack разработчиками, открывая более широкие перспективы для своего профессионального развития.",
               'После прохождения курса студенты имеют возможность пройти испытательный срок в Webex Technologies. В течение испытательного периода они работают с командой программистов, участвуя в разработке реальных проектов. По окончании испытательного срока студенты уже имеют четкое представление о процессе работы, приобретают ценный опыт и способны легко интегрироваться в сферу, получая стабильную основу для дальнейшего профессионального развития.'
            ],

            frequently_asked_questions_title: 'Часто задаваемые вопросы',

            services_and_support_tile: 'Сервис и поддержка',

            services_and_supportDescription: 'Поддержка и обслуживание сайта обеспечивают его долгосрочную работу, что жизненно важно как для бизнеса, так и для пользователей. Без качественного обслуживания сайт может потерять доверие и эффективность своих пользователей.',

            services_and_support_info_part1: [
               'Что такое поддержка и обслуживание сайта?',
               'Поддержка и обслуживание веб-сайта — это процесс обеспечения бесперебойной работы веб-сайта и оказания помощи пользователям в решении технических проблем. Он включает в себя различные услуги, такие как обновления сайта, безопасность, обновление контента и исправление ошибок. Услуга поддержки сайта включает в себя: Техническую поддержку и Информационную поддержку.'
            ],

            services_and_support_info_part2: [
               'Техническая поддержка',
               'Резервное копирование данных',
               'Мониторинг восстановления резервного сайта',
               'Управление и редактирование форумов',
               'Доски объявлений',
               'Антивирус',
               'Поддержка взаимодействия с хостинг-провайдером',
               'Создание почтовых адресов и техническая поддержка по вашему адресу',
               'Перенос сайта на новый сервер',
               'Поддержка регистрации домена',
               'Управление FTP-сервером',
               'Мониторинг посещений сайта с помощью отчетов'
            ],

            services_and_support_info_part3: [
               'Информационная поддержка',
               'Добавление контента на сайт',
               'Копирование',
               'Пишите статьи',
               'Создание фотокаталогов продукции.',
               'Обновление новостей сайта',
               'Добавляйте и обновляйте контент на сайте: статьи, описания услуг и товаров.',
               'Мониторинг конкурентной среды'
            ],

            modeling3D_title: 'Разработка 3D-моделирования',

            modeling3D_description: '3D-моделирование широко используется в различных сферах: от дизайна изделий до создания мультфильмов, обеспечивая профессиональный и эффективный результат.',

            modeling3D_info_part1: [
               'Что такое разработка 3D-моделирования?',
               'Трехмерное моделирование, или 3D-моделирование, — это процесс создания трехмерных изображений любого объекта или предметов. Для этих целей специалисты используют специализированные компьютерные программы, так называемые 3D-редакторы.'
            ],

            modeling3D_part2: [
               'Зачем нужна разработка 3D-моделирования?',
               'Высокое качество визуализации. Позволяет создавать реалистичные изображения, которые используются для проектирования, строительства и презентации продукции.',
               'Эффективность процесса проектирования. 3D-моделирование позволяет дизайнерам и инженерам предварительно просмотреть результат, внести изменения и избежать ошибок.',
               'Маркетинг и реклама. Модели часто используются в рекламных кампаниях, поскольку они обеспечивают визуальное взаимодействие.',
               'В сфере строительства. Архитекторы и строители смогут более четко видеть проекты, получать цифровые версии физических моделей.',
               'Виртуальная реальность (VR) и игры. При разработке VR-приложений и видеоигр необходимы высококачественные 3D-модели, обеспечивающие интерактивный опыт.'
            ],

            modeling3D_services: 'Для разработки 3D моделирования мы используем передовые технологии и программы, обеспечивающие высокое качество и эффективность. Вот основные технологии, с которыми мы работаем:',

            modelind3D_work_section_title: 'Одна из наших работ',

            modeling3D_tabel_title: 'Цены и условия',

            modeling3D_tabel_th: [
               'Проект',
               'Крайний срок',
               'Цена',
            ],

            modeling3D_tabel: [
               {
                  id: '1',
                  project: '3D визуализация коттеджа с участком',
                  time: '2-5 дней',
                  price: '110$',
                  priceText: '(из 2-3 углов)',
               },

               {
                  id: '2',
                  project: 'Архитектурная 3D визуализация торговых центров, многоквартирных домов',
                  time: '3-10 дней',
                  price: '1440$',
                  priceText: '(из 3-5 углов)',
               },

               {
                  id: '3',
                  project: '3D визуализация земельных участков, жилых комплексов',
                  time: '5-14 дней',
                  price: '720$',
                  priceText: '(из 5-10 углов)',
               },

               {
                  id: '4',
                  project: '3D визуализация генерального плана',
                  time: '5-10 дней',
                  price: '580$',
                  priceText: 'из (1 угол)',
               },

               {
                  id: '5',
                  project: '3D визуализация интерьера',
                  time: '2 дня',
                  price: '2-10$',
                  priceText: '(на 2-3 угла)',
               },

               {
                  id: '6',
                  project: 'Видеопрезентация дома, квартиры или архитектурного объекта',
                  time: 'через 3 дня',
                  price: '22$',
                  priceText: 'от (1 секунда видео + стоимость моделирования)',
               },

               {
                  id: '7',
                  project: 'Видеопрезентация дома, квартиры или архитектурного объекта',
                  time: 'через 2 дня',
                  price: '22$',
                  priceText: '-',
               },
            ],
            

            making_gamesPage_title: 'Создание игр',

            making_gamesPage_description: 'Создание игр — это не только часть индустрии развлечений, но и важный инструмент технологического и социального воздействия, который продолжает развивать формы человеческого взаимодействия.',

            making_gamesPage_top_div_part1: [
               'Что такое разработка игр?',
               'Разработка игр — это сложный процесс, включающий разработку интерактивных видеоигр или виртуальных сред. Он состоит из нескольких этапов, таких как разработка идеи, написание сценария, создание 3D или 2D графики, программирование, интеграция звука и финальное тестирование. Для создания игр используются различные платформы и движки, такие как Unreal Engine, Unity или Godot, которые позволяют создавать интерактивные и визуально привлекательные игры.'
            ],

            making_gamesPage_top_div_part2: [
               'Зачем нужна разработка игр?',
               'Экономический рост. Игровая индустрия считается одной из самых быстрорастущих отраслей, приносящей миллиарды долларов дохода и огромные рабочие места.',
               'Социальная вовлеченность. Игры объединяют сообщества, вовлекают пользователей и часто становятся инструментом социального взаимодействия.',
               'Образовательные и обучающие инструменты. Многие игры имеют образовательную составляющую, способствующую приобретению новых навыков или знаний.',
               'Инновации и технологическое развитие. Создание игр способствует использованию новых технологий, таких как виртуальная и дополненная реальность.',
               'Творческое выражение. С помощью игр создатели могут воплощать свои идеи в жизнь, представляя уникальные истории и дизайны.'
            ],
            making_gamesPage_servicesTitle: 'Мы используем передовые технологии и программное обеспечение для создания игр, обеспечивающих высокое качество и производительность. Вот основные технологии, с которыми мы работаем:',

            making_games_carousel: [
               'Наши работы',
               'Наша опытная команда продолжает работать с инновационными подходами, создавая уникальные и качественные модели. Мы гарантируем воплощение ваших идей в жизнь с помощью потрясающих визуализаций.'
            ],


            web_promotion_page_title: 'Продвижение сайта',

            web_promotion_page_description: 'Продвижение сайта – важный инструмент успеха в бизнесе, позволяющий привлекать новых клиентов, развивать бренд и сохранять конкурентные преимущества.',

            web_promotion_page_info_part_1: [
               'Что такое продвижение сайта?',
               'Продвижение сайта — это процесс, целью которого является повышение видимости сайта в поисковых системах, привлечение большего количества посетителей и улучшение присутствия бренда в Интернете. Этот процесс включает в себя SEO (поисковую оптимизацию), контент-стратегию, управление ссылками и маркетинг в социальных сетях. Это обеспечивает правильную техническую структуру сайта и качественный контент в соответствии с требованиями поисковых систем.'
            ],

            web_promotiion_page_info_part_2: [
               'Зачем необходимо продвижение сайта?',
               'Повышение видимости. Продвижение сайта гарантирует появление вашего сайта на первых страницах Google или других поисковых системах, что способствует привлечению новых клиентов.',
               'Рост трафика. Оптимизированный сайт получает больше трафика, что способствует росту бизнеса и увеличению продаж.',
               'Конкурентное преимущество. Благодаря целенаправленному продвижению ваш бизнес может превзойти конкурентов, завоевав новые сегменты рынка.',
               'Долгосрочные результаты. Поисковая оптимизация обеспечивает стабильные и долгосрочные результаты без дополнительных затрат на рекламу.',
               'Эффективный анализ. В процессе продвижения используются аналитические инструменты, которые позволяют оценить результаты и улучшить стратегию.'
            ],

            web_promotion_info_part_3_title: 'Виды продвижения сайта включают в себя ряд стратегий, направленных на повышение рейтинга сайта в поисковых системах, привлечение посетителей и повышение узнаваемости бренда. Вот основные виды:',

            web_promotion_info_part_3_data: [
               {
                  title: 'SEO (поисковая оптимизация)',
                  desc: 'Целью проекта является улучшение органической видимости веб-сайта в Google, Bing и других поисковых системах.'
               },

               {
                  title: "Маркетинг в социальных сетях (SMM)",
                  desc: 'Продвижение сайта через социальные платформы (Facebook, Instagram, Twitter, LinkedIn).'
               },

               {
                  title: 'PPC (Платная реклама)', 
                  desc: 'Платные рекламные кампании в Google Ads, Bing Ads и социальных сетях.'
               },

               {
                  title: 'Продвижение контента',
                  desc: 'Создание качественного и интересного контента, ориентированного на целевую аудиторию.'
               },

               {
                  title: 'Создание ссылок',
                  desc: 'Получение внешних ссылок с высокорейтинговых сайтов, что повышает авторитет и рейтинг сайта.'
               },

               {
                  title: 'Анализ и оптимизация',
                  desc: 'Постоянное совершенствование стратегии посредством анализа данных и исследования поведения пользователей.'
               },
            ]

         },
      },
      // Add more languages as needed
   },
   lng: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'am', // Default language
   fallbackLng: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'am', // Fallback language
   interpolation: {
      escapeValue: false,
   },
});

export default i18n;
