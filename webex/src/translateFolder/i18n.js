import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { years_webex } from '../data';
import { dotIcon } from '../iconFolder/icon';

i18n
  .use(initReactI18next)
  .init({
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
            reg_log: [
              'Sign in',
              'Register',
              'Confirm',
              'Send',
            ],

            // ====================toolsInfo========================================

            toolsInfo: [
              `More than ${years_webex} years in the market`,
              'Student',
              'Project',
              'Websites 1000+',
              'Supported Projects 500+',           
              'Programming Languages 30',
              'month',
              'date'
            ],

            // ===============ourAdvantages========================

            ourAdvantagesTitle: 'Our advantages',

            ourAdvantagesItemTitle:[
              'Development of web applications',
              'Web programming training',
              'Mobile applications',
              'Individual courses',
              'Site promotion',
              'Online Courses',
              'Application (game) development with Unity',
              'Job placement support',
              'Development and implementation of CRM systems',
              'Development and implementation of ERP systems'
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
              'With the help of the ERP system, there is no need to create several individual information systems, with the help of which the automation of each of the routes is carried out, followed by establishing the connection between these systems.'
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
              'Web development courses'
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
              'Order Project'
            ],
            // =============header==================================
            headerTitlePart1: 'With our professional team, you can.',
            headerTitlePart2: 'Order web systems with complex software solutions. - Order multifunctional CRM / ERP systems. - Order hardware programming works. - Order mobile systems with complex software solutions (iOS, Android). - Order multi-functional games for the App Store and Play Store.  - Order complex 3D models.  - Learning the web interface | web backend / Unity / JAVA programming. - improve your knowledge in the field of frontend/server programming․',

            // ===========================webexInfo==================
            webexInfo : [
              'About us',

             'Webex Technologies was founded in 2003 on November 21. Over the years, the company has implemented a large number of projects. Qualitatively and thoroughly approaches the process of creating new products. Webex Technologies works only with new and modern technologies, which in turn are regularly updated according to market requirements. The company was founded in Yerevan and cooperates with international partners all over the world. All projects implemented at Webex Technologies meet international IT standards.',
             ' Webex Technologie offers programming courses. The company focuses on quality education of students with an emphasis on practical knowledge. Webex Technologies has developed its training program based on many years of experience. Most Webex Technologies students find jobs in the IT industry. After completing the course, the best students are given a certificate, which gives them advantages when looking for a job. Webex Technologies welcomes new partners.'
            ],

            // ===========================createWebsitesAndMobileApp=============================
            createWebsitesAndMobileApp: 'Creation of websites and mobile applications',
            createWebsitesAndMobileAppTitle: [
              'Creating a web applications',
              'Mobile applications',
              'Creating games and Unity',
              '3D modeling',
              'Preparation of CRM systems'
            ],
            
            createWebsitesAndMobileAppTxt: [
            'Creation of websites from scratch - Webex Technologies company develops websites from scratch, participating in all stages of their creation. In other words, the client expresses his goals and wishes about the design and interface, and we develop the required website based on them.',
            'Creating mobile applications for IOS and Android - "Webex Technologies" is an Armenian mobile application development company with many years of experience in the field of mobile technologies and platforms. We offer a wide range of mobile application development services in the market of Armenia and other countries. The company provides IT consulting, development, design, testing, and technical support.',
            'Advantages of applications created by Webex Technologies with Unity - Our company is an experienced and reliable partner in developing solutions using Unity. We have been creating effective and reliable applications for customers all over the world for years. Using Unity technologies, we successfully solve problems in such fields as online commerce, gaming, healthcare, education, advertising, etc. If you want to discuss the details of the project, please contact us.',
            'Three-dimensional modeling or 3D modeling is the creation of three-dimensional images of any objects or objects. For this purpose, specialists use special computer programs, so-called 3D programs. With their help, geometric projects are transformed into three-dimensional images. The appeal of 3D modeling lies in the almost unlimited possibilities of the technology. Using 3D graphics, you can create a model of any real or imaginary building, static object, or phenomenon.',
            'Development and implementation of the CRM system are most in demand in situations where there is a qualitative leap in business and company management. That is the number of communications (sales, transactions) as well as business contacts (phone calls, e-mails, SMS notifications) during the day. that the manager performs in a month exceeds the threshold of working memory available to a person, in this case, the resources that the staff spends on documents and Excel spreadsheets. These functions can be transferred to the CRM system: 1. Automating order execution and transaction execution by tracking the status of each specific position; 2. Simplification of document circulation due to the automatic creation of contracts, acts, accounts, and invoices, 3. Maintaining a unified customer database that contains detailed information about each customer and the history of interactions with them; Development and implementation of ERP systems.'
            ],

            // ==============services=============================

            servicesTitle: [
              'Websites',
              'Mobile applications',
              '3D modeling',
              'Courses',
              'ERP-system',
              'Unity 3D',
              'Support',
              'CRM system'
            ],

            servicesCentreDivTitle: 'Services',

            // ==================videoCoursesSection=====================

            videoCoursesSectionTitle: 'Programming learning plan',

            videoCoursesSectionTxt: [
              'Free trial lesson. Our future students. You have the opportunity to familiarize yourself with Webex Technologies teaching methods and teachers for free.',
              'Course basic. We offer you basic programming courses at Webex Technologies. You have the opportunity to choose the time, format, and instructor that suits you. To do this, you need to register.',
              'Advanced programming course. Dear students. To improve your skills, we offer you an advanced course. At Webex Technologies, you can increase your knowledge and level of expertise in your preferred field. To do this, you need to register.'
            ],


            VideoCoursesSection_duration:[
              'Duration - 120 minutes',
              'Duration - 960 minutes',
              'Duration - 1440 minutes',
            ],

            VideoCoursesSection_value:[
              'Value 0 AMD',
              'Value 45000 AMD',
              'Value 60000 AMD',
            ],


            VideoCoursesSection_title:[
              'Trial course',
              'Standart course',
              'Professional course'
            ],
            // ===============Footer=======================

            footerMenu: [
              'Feedback',
              'E-mail: address',
              'Tel:',
              'Our address:',
              'M. Baghramyan Ave. 79 1/1',
              'Can you follow us'
            ],

             // ==================courseseRegistration==============================

           courseseRegistrationSlideCountLine: [
            'Duration ',
            'minute'
          ],

          validation_reg_log: [
            'This field is required',
            'Write the correct E-mail! address:',
            'Password must contain a number',
            'Password must contain a lowercase letter',
            'Passwords do not match',
            'Write only a number',
            'Password must contain at least 8 characters'
          ],

          resetPasswordModalError_message: 'Something is wrong',

          abouteUs_Header: [
            'Aboute US',
           'Webex Technologies LLC is specialized in creating websites. Most common programming languages that are used at work are, HTML5, CSS3-Flex, Grid, Parallax, Sprites, PHP, JavaScript, ES6, jQuery, Bootstrap, Ajax, React JS, Laravel, OOP/MVS , MySQL etc. WebEx Tech has been working for 20 years.'
          ],

          abouteUS_info_block: [
            'Why is it convenient and effective to cooperate with "WebEx Technologies" center',
            'Transparency of actions at any stage of the website creation. We provide regular reports and ensure full awareness of the work. Individual approach to each client. Careful study of the specifics of the client’s business at the preparatory stage of the creation of the website contributes to obtaining the maximum effect in the shortest possible time. Creating a website is a creative process for us. We not only use well-known and widespread solutions in the development of the website, but also new and unexpected solutions that make the website unique and memorable.When creating websites, we use only licensed (commercial and non-commercial) CMS, modules, components, designs.'
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
            'Webex Technologies LLC is specialized in creating websites. Most common programming languages that are used at work are, HTML5, CSS3-Flex, Grid, Parallax, Sprites, PHP, JavaScript, ES9, jQuery, Bootstrap, Ajax, React JS, Laravel, OOP/MVS , MySQL etc. WebEx Tech has been working for 20 years. People who work with us are grateful for the quality of work we perform. We build successful and inspirational sites. Already have a website? So you need - optimization and promotion of sites, advertising on the Internet, support, and maintenance of sites. We create internet solutions for our clients that will make the project development simple and functional.'
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
            'Liga uslug LLC'
          ],

          order_now: 'Order now',

          projectPage_translation: [
            'Description',
            'Project Name',
            'Programming languages',
            'Creation period',
            'Date of creation'
          ],

          orderFormTitle:[
            'Tell us',
            'about your project',
            'Choose services',
          ],

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
            'Yandex Market',
            'Google analytics',
            'Business process automation'
          ],

          contact_us_title: [
            'Contact Us',
            'Feedback'
          ],

          feedback: [
            'Name*',
            'Email address*',
            'Message'
          ],

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
             5) Testing. We test the service on different devices and guarantee the release of a high-quality product on time`
          ],

          projectType: [
            'All',
            'Web',
            'Mobile',
            'Games and 3D'
          ],
          dashboard_name: 'Dashboard',  


          web_project_page_top_div_title: 'Web App Development',

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
            ' 2D and 3D game development'
          ],

          web_project_page_web_development_title: 'Web App Development',

          web_project_page_web_development_info: [
            'Webex Technologies is operating for over 15 years. Our company has extensive experience in web application development, outsourcing, software development and web development, IT consulting, application integration, business process analysis, software testing, maintenance and support.',
            "Let's take a look at what the services provided by Webex Technologies are."
          ],




          account_Box: [
            'Account',
            'Edit profile',
          ],
          purchase_history: [
            'Purchase history',
            'Lessons',
            'of total'
          ],
          my_Training: 'My Training',

          description: 'description',

          homework_linne: [
            'Do homework',
            'Lesson',
            'm',
          ],

          cordial:'Contents',

          all_video_lessons: "All video lessons",

          profileArr: [
            'Your Profile',
            'Fill in your details',
            'Save',
            'Cancel',
            'write the current password',
            'write the new password',
            'repeat the new password'
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
            'Send'
          ],

          visitHistory: [
            'Visit history',
            'Number',
            'Lessons',
            'Total lessons',
            'Number lessons',
            'Payment'
          ],
          
            dashboard_name: "Dashboard",
            current_lessons: "Current lessons",
            profile: "Profile",
            helpp: "Help",
            visit_history: "Visit history",
            log_out: "Log out",

            lerne_more: 'Լearn more...',

            slide_section: [
              'We are teaching',
              'Our modern and professional approach has already attracted many customers'
            ],
            dashboard: 'Dashboard',
            currentLessons: 'Current lessons',
            profile: 'Profile',
            helpp: 'Help',
            visitHistoryy: 'Visit history',
            logOut:'Log out',

            //Website Promotion
            promotionTitle: 'Website Promotion',
            promotionText: '"WebexTech" offers you professional website promotion in Yerevan and other regions of Armenia. Choose the best options for your website promotion',
            photoDivs: [
                'Integrated Website Promotion',
                'Such website promotion combines various types of promotion: search engine promotion, contextual advertising, a comprehensive advertising website campaign on the Internet, including banner advertising, ads on bulletin boards, registration catalogs, etc.Through the integrated website promotion, you’ll get the most effective promotion for your website.',
                'Website Search Engine Promotion',
                'The goal of search engine promotion is to get the website to the top on search engines (such as Yandex, Rambler, Google). When your website is on the first of top 10 searches, your traffic will be automatically increased.',
                'Website Search Engine Promotion',
                'Contextual advertising is also another way for website promotion. It’s short text ads appearing on search engine results pages in response to user requests, as well as on other advertising websites of Yandex.Direct, Runner and Google AdWords.'
            ],
            textDivTop: [
              'WebExTech - a strategy for integrated website development.',
              'What are the advantages of promoting your website with "WebExTech":',
              'Transparency at any stage of website promotion. Regular reporting, full awareness of the work is provided. The preliminary stages approval of work, all actions to promote and optimize the website.',
              '"WebExTech" - the official Yandex partner.Contextual advertising on Yandex and media (banner) advertising on the Internet with the help of "webexTech" specialists - with Yandex-based prices. We provide support for your advertising campaign on Yandex by professionals and it is free of charge!',
              'Individual approach to each client. We ensure to deliver our clients the most effective website promotion that will meet his business needs.',
              'Want to order a website promotion? No need to spend time traveling. If your Company is located in Armenia, it is enough for you to call our center, schedule a convenient time and place for you, and our employee will come to you himself. All issues with customers located in other cities allow us to solve quickly modern information exchange systems: E-mail, ICQ, Skype, QIP and others.',
              'We use only legal and the best methods for your website promotion. We make sure to implement only legal methods for your website optimization so that the client’s website will not fall under the sanctions of the search engine.',
              'Website promotion is carried out on 1-10 place of search results. You choose what place you want to order your website promotion. No additional charge for performing the promotions mentioned above.',
              'Because each client is special for us, therefore we give each project the maximum time and attention.'
            ],
            middleSide:[
              'Branches',
              'WebEx Technologies offers software development services to companies from various industries.',
              'BANKING AND FINANCE',
              'TELECOMMUNICATION',
              'AUTO AND TRANSPORT',
              'HEALTH CARE',
              'TRADE AND COMMERCE',
              'LEARNING AND MARKETING'
            ],

            bottomSideTexts:[
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
              'Special offers allow us to make website creation for our Clients as efficient and profitable as possible.'
            ],
            buttonsSide:[
              'FOR INQUIRY OR QUESTION',
              'Website Development',
              'Website promotion/ SEO',
              'Service and Support',
              '3d Modeling Development',
              'Mobile App Development',
              'Unity Development'
            ],




            /////3d modeling///////////
            topSideUntilSlider:[
              '3D modeling',
              'Three-dimensional modeling , or 3D modeling',
              ', is the process of creating three-dimensional images of any subjects or objects. For these purposes, specialists use specialized computer programms, the so-called 3D editors. With their help, geometric projections are built on the plane, which are necessary for creating a three-dimensional any effect.',
              'The special beauty of',
              '3D modeling',
              'lies in the virtually unlimited possibilities of this technology. Using',
              '3D graphics',
              ', you can create a model of any real or imaginary building, inanimate object or phenomenon.'
            ],

            middleSideUnderSlider:[
              'INTRODUCING ADVANCED TECHNOLOGIES',
              'Blender',
              'Substance',
              'Gimp, c#',
              'MakeHuman'
            ],
            create3dModel:[
              'CREATING 3D MODELS',
              'The process of creating a three-dimensional model of any subject or object requires from the performer not only impeccable mastery of computer graphics skills, but also special thoroughness and scrupulous performance of the work. The success of the whole process as well its reliability depends on how realistic and exact the model will be displayed.',
              'High-quality performance of works assumes observance of several obligatory conditions. Lets name the most important of them.',
              'It is necessary to choose the most suitable specialized programm for the purposes of a project. So, the Autodesk 3ds Max mentioned above is famous for its universality. It can be used in any industry and for any task. And, for example, another programm AutoCAD has a narrower specialization - it is indispensable in modeling industrial and construction websites.',
              'The high quality of the 3D model implies precise order of the instructions of the documentation provided by the customer. Despite the creative nature of the modeling process, the manifestation of any initiative that goes against the terms of reference will be inappropriate and unprofessional here.',
              'To achieve the most realistic effects, you need to apply only the highest quality textures. This is a question of how well the technician is technically equipped.',
              'For the same purpose, one should carefully work out all the details and elements of the image of the 3D model, paying particular attention to the smallest of them. The secret of the realism of the final picture lies exactly in the accurate transfer of nuances.',
            ],
            table3dModel:[
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
              '22$'
            ],

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
          reg_log: [
            'Մուտք',
            'Գրանցվել',
            'Հաստատել',
            'Ուղարկել',
          ],

            // ====================toolsInfo========================================

          toolsInfo: [
            `Շուկայում ավելի քան ${years_webex} տարի`,
            'Ուսանող',
            'Պրոեկտ',
            'Վեբ կայքեր 1000+',
            'Սպասարկվող Պրոեկտներ 500+',
            'Ծրագրավորման Լեզու 30',
          ],

            // ===============ourAdvantages========================

          ourAdvantagesTitle: 'Մեր առավելությունները',

          ourAdvantagesItemTitle:[
            'Վեբ հավելվածների մշակում',
            'Վեբ ծրագրավորման ուսուցում',
            'Բջջային հավելվածներ',
            'Անհատական դասավանդում',
            'Կայքի առաջխաղացում',
            'Առցանց դասավանդում',
            'Հավելվածների (խաղերի) մշակում Unity-ով',
            'Աշխատանքի տեղավորման աջակցում',
            'CRM համակարգերի մշակում և ներդրում',
            'ERP համակարգերի մշակում և ներդրում'
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
            'ERP համակարգի օգնությամբ անհրաժեշտություն չկա ստեղծել մի շարք անհատական ​​տեղեկատվական համակարգեր, որոնց օգնությամբ իրականացվում է ուղություններից յուրաքանչյուրի ավտոմատացում, որին հաջորդում է այդ համակարգերի միջև կապի հաստատումը։'
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
            'Պատվիրել Նախագիծ'
          ],

            // =============header==================================

          headerTitlePart1: 'Մեր պրոֆեսիոնալ թիմին կարող եք.',
          headerTitlePart2: 'Պատվիրել բարդ ծրագրային լուծումներով Web համակարգեր․   - Պատվիրել բազմաֆունկծիոնալ CRM/ERP համակարգեր․  - Պատվիրել սարքավորումների ծրագրավորման աշխատանքներ․ - Պատվիրել բարդ ծրագրային լուծումներով Mobile համակարգեր(iOS, Android)․ - Պատվիրել բազմաֆունկցիոնալ  խաղեր App Store և Play Store-ի համար - Պատվիրել  բարդ 3D մոդելներ - Սովորել Web Frontend | Web Backend | Unity | JAVA ծրագրավորում - Կատարելագործել Frontend/Backend ծրագրավորման Ձեր գիտելիքները․',

            // ===========================webexInfo==================

          webexInfo: [
            'Մեր Մասին',
            
            'Webex Technologies ընկերությունը հիմնադրվել է 2003թ. նոյեմբերի 21-ին։ Տարիների ընթացքում ընկերությունն իրականացրել է մեծ թվով  ծրագրեր։ Որակապես և հիմնովին է մոտենում  նոր արտադրանքի ստեղծման գործընթացին։ Webex Technologies-ն աշխատում է միայն նոր և ժամանակակից տեխնոլոգիաներով, որոնք իրենց հերթին պարբերաբար թարմացվում են շուկայի պահանջներին համապատասխան: Ընկերությունը հիմնվել է Երևանում և համագործակցում է միջազգային գործընկերների հետ ամբողջ աշխարհում: Webex Technologies-ում իրականացված բոլոր նախագծերը համապատասխանում են միջազգային ՏՏ ստանդարտներին:',
            ' Webex Technologie-ն առաջարկում է ծրագրավորման դասընթացներ: Ընկերությունը կենտրոնացած է ուսանողների որակյալ կրթության վրա, շեշտը դնելով գործնական գիտելիքների  վրա: Webex Technologies-ը մշակել է իր դասավանդման ծրագիրը՝ հիմնված երկար տարիների փորձի վրա: Webex Technologies-ի ուսանողների մեծ մասը աշխատանք են գտնում   ՏՏ ոլորտում: Դասընթացն ավարտելուց հետո լավագույն ուսանողներին տրվում է վկայական, որը նրանց առավելություններ է տալիս աշխատանք փնտրելիս։ Webex Technologies-ը  ողջունում է նոր գործընկերներին:'
          ],

            // ===========================createWebsitesAndMobileApp=============================

          createWebsitesAndMobileApp: 'Վեբ կայքերի եվ բջջային հավելվածների ստեղծում',

          createWebsitesAndMobileAppTitle: [
            'Վեբ կայքերի մշակում',
            'Բջջային հավելվածներ',
            'Խաղերի եւ Unity-ի ստեղծում',
            '3D մոդելավորում',
            'CRM համակարգերի պատրաստում'
          ],

          createWebsitesAndMobileAppTxt: [
            'Կայքերի ստեղծում զրոյից-  Webex Technologies ընկերությունը մշակում է վեբ կայքեր  զրոյից՝ մասնակցելով դրա ստեղծման բոլոր փուլերին։Այլ կերպ ասած, հաճախորդը բարձրաձայնում է իր նպատակները, ցանկությունները դիզայնի և ինտերֆեյսի մասին և մենք դրանց հիման վրա մշակում  ենք պահանջվող կայք։',
            'IOS-ի եվ Android-ի համար բջջային հավելվածների  ստեղծում -“Webex Technologies” ընկերությունը բջջային հավելվածների ստեղծման Հայաստանյան ընկերություն է, ունի բազմաթիվ տարիների փորձ բջջային տեխնոլոգիաների և հարթակների ոլորտում։Մենք առաջարկում ենք բջջային հավելվածների ստեղծման ծառայությունների լայն շրջանակ Հայաստանի և այլ երկրների շուկայում։Մեր ընկերությունը տրամադրում է ՏՏ խորհրդատվություն, մշակում,նախագծում, փորձարկում և  տեխնիկական աջակցություն։',
            '“Webex Technologies” ընկերության կողմից Unity ծրագրով ստեղծված հավելվածների առավելությունները-Մեր ընկերությունը հանդիսանում է փորձառու և հուսալի գործընկեր Unity-ի միջոցով լուծումներ մշակելու գործում։Մենք տարիների ընթացքում ամբողջ աշխարհում հաճախորդների համար արդյունավետ և վստահելի ծրագրեր ենք ստեղծում։ Unity տեխնոլոգիաները օգտագործելով՝ մենք հաջողությամբ լուծում ենք խնդիրներ այնպիսի ոլորտում, ինչպիսիք են օնլայն առևտուրը, խաղերը, առողջապահությունը, կրթությունը, գովազդը և այլն։Եթե ցանկանում եք քննարկել նախագծի մանրամասները,խնդրում ենք կապնվել մեզ հետ։',
            'Եռաչափ մոդելավորում կամ 3D մոդելավորում- ցանկացած առարկաների կամ օբյեկտների եռաչափ պատկերների ստեղծումն է։Այս նպատակով մասնագետները օգտագործում են հատուկ համակարգչային ծրագրեր, այսպես կոչված 3D ծրագրեր։Նրանց օգնությամբ երկրաչափական նախագծերը վերածվում են  եռաչափ պատկերների։ 3D մոդելավորման գրավչությունը կայանում է տեխնոլոգիայի գրեթե անսահմանափակ հնարավորությունների մեջ։Օգտագործելով 3D գրաֆիկա՝ դուք կարող եք ստեղծել ցանկացած իրական կամ երևակայական շենքի, ստատիկ օբյեկտի կամ երևույթի մոդել։',
            'CRM համակարգի մշակումն ու ներդնումը - առավել պահանջարկ ունի այն իրավիճակներում, երբ տեղի է ունենում բիզնեսի և ընկերության կառավարման որակական թռիչք։Այսինքն՝ օրվա ընթացքում հաղորդակցությունների(վաճառքի, գործարքների), ինչպես նաև գործարար կապերի քանակը(հեռախոսազանգեր, էլ- նամակներ,SMS ծանուցումներ), որոնք կառավարիչը կատարում է մեկ ամսվա ընթացքում, գերազանցում է մարդուն հասանելի օպերատիվ հիշողության շեմը, այս դեպքում ռեսուրսները, որը անձնակազմը  ծախսում է փաստաթղթերի և Excel աղյուսակների վրա։ CRM համակարգին կարող են փոխանցել տվյալ գործառույթները՝ 1․ Պատվերի կատարման և գործարքների կնքման ավտոմատացում յուրաքանչյուր կոնկրետ դիրքի կարգավիճակը հետևելու միջոցով․ 2․ Փաստաթղթաշրջանառության պարզեցում՝ պայմանավորված պայմանագրերի, ակտերի, հաշիվների և հաշիվ ապրանքագրերի ավտոմատ ստեղծմամբ, 3․ Հաճախորդների միասնական բազայի վարում, որը պարունակում է մանրամասն տեղեկատվություն յուրաքանչյուր հաճախորդի և նրա հետ փոխազդեցությունների պատմության մասին․ ERP համակարգերի մշակում և ներդրում։', 
          ],

          // ==================services=====================================

          servicesTitle: [
            'Վեբ կայքեր',
            'Բջջային հավելվածներ',
            '3D մոդելավորում',
            'Դասընթացներ',
            'ERP-համակարգ ',
            'Unity 3D',
            'Սպասարկում',
            'CRM համակարգեր'
          ],

          servicesCentreDivTitle: 'Ծառայություններ',

          // ==================videoCoursesSection=====================

          videoCoursesSectionTitle: 'Ծրագրավորման ուսուցման պլան',

          videoCoursesSectionTxt: [
            'Անվճար փորձնական դաս. Մեր ապագա ուսանողները. Դուք հնարավորություն ունեք անվճար ծանոթանալու Webex Technologies-ի դասավանդման մեթոդներին և դասավանդողներին։',
            ' Դասընթաց հիմունքային. Մենք առաջարկում ենք Ձեզ ծրագրավորման հիմունքային դասընթացներ Webex Technologies-ում: Դուք հնարավորություն ունեք ընտրել ձեզ հարմար ժամանակ, ձևաչափ և դասավանդող։ Դա անելու համար անհրաժեշտ է գրանցվել։',
            'Ծրագրավորման խորացված դասընթաց. Սիրելի ուսանողներ. Ձեր հմտությունները բարելավելու համար մենք ձեզ առաջարկում ենք խորացված դասընթաց։ Webex Technologies-ում դուք կարող եք բարձրացնել ձեր գիտելիքները և ձեր մասնագիտացման մակարդակը նախընտրելի ոլորտում: Դա անելու համար անհրաժեշտ է գրանցվել։'
          ],

          VideoCoursesSection_duration:[
            'Տեվողությունը-120 Րոպե',
            'Տեվողությունը-960 Րոպե',
            'Տեվողությունը-1440 Րոպե',
          ],


          VideoCoursesSection_value:[
            'Արժեքը 0 դրամ',
            'Արժեքը 45000 դրամ',
            'Արժեքը 60000 դրամ',
          ],





          VideoCoursesSection_title: [
            'Փորձնական դասընթաց',
            'Ստանդարտ փաթեթ',
            'Պրոֆեսիոնալ փաթեթ'
          ],
          // ==================Footer===========================

          footerMenu: [
            'Հետադարձ կապ',
            'Էլ․ հասցե։',
            'Հեռ։',
            'Մեր հասցեն',
            'Մ․ Բաղրամյան պող․ 79 1/1',
            'Կարողեք հետևել մեզ'
          ],

          // ==================courseseRegistration==============================

          courseseRegistrationSlideCountLine: [
            'Տեվողությունը ',
            'րոպե'
          ],

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
           'Webex Technologies ՍՊԸ-ն մասնագիտացած է կայքերի ստեղծման գործում: Ծրագրավորման ամենատարածված լեզուներն են՝ HTML5, CSS3-Flex, Grid, Parallax, Sprites, PHP, JavaScript, ES6, jQuery, Bootstrap, Ajax, React JS, Laravel, OOP/MVS, MySQL և այլն: աշխատում է արդեն 20 տարի։'
          ],

          abouteUS_info_block: [
            'Ինչու՞ է հարմար և արդյունավետ համագործակցել «WebEx Technologies» կենտրոնի հետ',
            'Կայքի ստեղծման ցանկացած փուլում գործողությունների թափանցիկություն. Մենք պարբերաբար հաշվետվություններ ենք տրամադրում և ապահովում ենք աշխատանքի լիարժեք իրազեկում: Անհատական ​​մոտեցում յուրաքանչյուր հաճախորդին։ Կայքի ստեղծման նախապատրաստական ​​փուլում հաճախորդի բիզնեսի առանձնահատկությունների մանրակրկիտ ուսումնասիրությունը նպաստում է հնարավորինս սեղմ ժամկետում առավելագույն էֆեկտի ձեռքբերմանը: Կայքի ստեղծումը մեզ համար ստեղծագործական գործընթաց է։ Մենք ոչ միայն օգտագործում ենք հայտնի և լայն տարածում գտած լուծումներ կայքի մշակման համար, այլ նաև նոր և անսպասելի լուծումներ, որոնք դարձնում են կայքը յուրահատուկ և հիշվող: Կայքեր ստեղծելիս մենք օգտագործում ենք միայն լիցենզավորված (առևտրային և ոչ առևտրային) CMS, մոդուլներ, բաղադրիչներ, դիզայն։'
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
            'WebEx Tech-ն աշխատում է արդեն 20 տարի: Մարդիկ, ովքեր աշխատում են մեզ հետ, երախտապարտ են մեր կատարած աշխատանքի որակի համար: Մենք կառուցում ենք հաջողակ և ոգեշնչող կայքեր: Արդեն ունե՞ք կայք: Այսպիսով, ձեզ անհրաժեշտ է - կայքերի օպտիմալացում և առաջխաղացում, գովազդ ինտերնետում, կայքերի աջակցություն և սպասարկում: Մենք ստեղծում ենք ինտերնետային լուծումներ մեր հաճախորդների համար, որոնք կդարձնեն ծրագրի մշակումը պարզ և ֆունկցիոնալ:'
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
            'Լիգա ուսլուգ ՍՊԸ'
          ],

          order_now: 'Պատվիրե՛ք  հիմա',

          projectPage_translation: [
            'Նկարագրություն',
            'Նախագծի անվանումը',
            'Ծրագրավորման լեզուներ',
            'Ստեղծման ժամանակհատված',
            'Ստեղծման տարեթիվը',
            'ամիս',
            'թվական'
          ],

          orderFormTitle:[
            'Գրեք մեզ',
            'ձեր նախագծի մասին',
            'Ընտրեք ծառայություններ',
          ],

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
            'Yandex Market',
            'Google analytics',
            'Բիզնես գործընթացների ավտոմատացում'
          ],

          contact_us_title: [
            'Կապ',
            'Հետադարձ կապ'
          ],

          feedback: [
            'Անուն*',
            'Էլ․ հասցե*',
            'Հաղորդագրություն'
          ],


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
            5) Փորձարկում. Մենք փորձարկում ենք ծառայությունը տարբեր սարքերի վրա և երաշխավորում ենք որակյալ արտադրանքի ժամանակին թողարկումը:`
          ],

          projectType: [
            'Բոլորը',
            'Վեբ',
            'Բջջային',
            'Խաղեր և 3D'
          ],
          dashboard_name: 'Վահանակ',

          account_Box: [
            'Հաշիվ',
            'Խմբագրել պրոֆիլը',
          ],

          purchase_history: [
            'Գնումների պատմություն',
            'Դասեր',
            'ընդհանուրից'
          ],
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
            ' 2D և 3D խաղերի ստեղծում'
          ],

          web_project_page_web_development_title: 'Վեբ ծրագրի մշակում',

          web_project_page_web_development_info: [
            'Webex technologies ընկերությունը գործում է ավելի քան 15 տարի։ Մեր ընկերությունը ունի մեծ փորձ վեբ ծրագրերի մշակման, աութսորսինգի, ծրագրային ապահովման և վեբ ծրագրերի մշակման, ՏՏ խորհրդատվության, հավելվածների ինտեգրման, բիզնես գործընթացների վերլուծության, ծրագրային ապահովման փորձարկման, պահպանման և աջակցության ոլորտում։',
            'Եկեք նայենք, թե որոնք են Webex Technologies-ի մատուցած ծառայությունները:'
          ],

          homework_linne: [
            'Կատարել տնային առաջադրանքները',
            'Դաս',
            'ր․',
          ],

          cordial:'Բովանդակություն',

          all_video_lessons: "Բոլոր վիդեոդասերը",

          profileArr: [
            'Քո Պրոֆիլը',
            'Լրացրու տվյալներդ',
            'Պահպանել',
            'Չեղարկել',
            'գրիր գործող գաղտնաբառը',
            'գրիր նոր գաղտնաբառը',
            'կրկնիր նոր գաղտնաբառը'
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
            'Ուղարկել'
          ],

          visitHistory: [
            'Այցելեք պատմություն',
            'Թիվ',
            'Դասեր',
            'Ընդհանուր դասեր',
            'Թվերի դասեր',
            'Վճարում'
          ],
          dashboard_name: "Գլխավոր էջ",
          current_lessons: "Ընթացիկ դասեր",
          profile: "Անձնական էջ",
          helpp: "Օգնություն",
          visit_history: "Այցելության պատմություն",
          log_out: "Դուրս գալ",

          lerne_more: 'Իմացեք ավելին...',

          slide_section: [
            'Դասավանդում ենք',
            'Մեր ժամանակակից և մասնագիտական մոտեցումը գրավել է արդեն իսկ բազում հաճախորդների'
          ],
          dashboard: 'Վահանակ',
          currentLessons: 'Ընթացիկ դասեր',
          profile: 'Անձնագիր',
          helpp: 'Օգնություն',
          visitHistoryy: 'Այցելության պատմություն',
          logOut:'Դուրս գալ',

          //Website Promotion
          promotionTitle: 'Կայքի առաջխաղացում',
          promotionText: '«WebexTech»-ն առաջարկում է ձեզ պրոֆեսիոնալ կայքերի առաջմղում Երևանում և Հայաստանի այլ մարզերում։ Ընտրեք ձեր կայքի առաջխաղացման լավագույն տարբերակները',

          photoDivs: [
            'Կայքի ինտեգրված առաջխաղացում',
            'Նման վեբ կայքերի առաջխաղացումը համատեղում է տարբեր տեսակի առաջխաղացումներ. ձեր կայքի ամենաարդյունավետ խթանումը:',
            'Կայքի որոնման համակարգի առաջխաղացում',
            'Որոնողական համակարգի առաջխաղացման նպատակն է կայքէջը որոնողական համակարգերում (ինչպիսիք են Yandex, Rambler, Google) ամենաբարձր մակարդակը հասցնել: Երբ ձեր կայքը գտնվում է լավագույն 10 որոնումներից առաջինում, ձեր տրաֆիկը ավտոմատ կերպով կավելանա:',
            'Կայքի որոնման համակարգի առաջխաղացում',
            'Համատեքստային գովազդը նաև վեբ կայքի առաջմղման այլ միջոց է: Դա կարճ տեքստային գովազդ է, որը հայտնվում է որոնման արդյունքների էջերում՝ ի պատասխան օգտատերերի հարցումների, ինչպես նաև Yandex.Direct-ի, Runner-ի և Google AdWords-ի այլ գովազդային կայքերում:'
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
          'Քանի որ յուրաքանչյուր հաճախորդ մեզ համար առանձնահատուկ է, ուստի մենք յուրաքանչյուր նախագծին տալիս ենք առավելագույն ժամանակ և ուշադրություն:'
        ],

        middleSide:[
          'Մասնաճյուղերը',
          'WebEx Technologies-ն առաջարկում է ծրագրային ապահովման մշակման ծառայություններ տարբեր ոլորտների ընկերություններին:',
          'ԲԱՆԿ ԵՎ ՖԻՆԱՆՍՆԵՐ',
          'ՀԵՌԱԿԱՊ',
          'ԱՎՏՈ ԵՎ ՏՐԱՆՍՊՈՐՏ',
          'ԱՌՈՂՋԱՊԱՀՈՒԹՅՈՒՆ',
          'ԱՌԵՎՏՐԻ ԵՎ ԱՌԵՎՏՐՈՒԹՅԱՆ',
          'ՈՒՍՈՒՑՈՒՄ ԵՎ ՄԱՐԿԵՏԻՆԳ'
        ],

        bottomSideTexts:[
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
          'Հատուկ առաջարկները մեզ թույլ են տալիս մեր Հաճախորդների համար վեբկայքի ստեղծումը հնարավորինս արդյունավետ և շահավետ դարձնել:'
        ],
        buttonsSide:[
          'ՀԱՐՑՈՒՄ ԿԱՄ ՀԱՐՑԻ ՀԱՄԱՐ',
          'Կայքի մշակում',
          'Կայքի առաջխաղացում/ SEO',
          'Ծառայություն և աջակցություն',
          '3D մոդելավորման մշակում',
          'Բջջային հավելվածների մշակում',
          'Միասնության զարգացում'
        ],

         /////3d modeling///////////
            topSideUntilSlider:[
              '3D մոդելավորում',
              'Եռաչափ մոդելավորում կամ 3D մոդելավորում',
              ', ցանկացած առարկայի կամ առարկայի եռաչափ պատկերներ ստեղծելու գործընթացն է։ Այդ նպատակների համար մասնագետները օգտագործում են մասնագիտացված համակարգչային ծրագրեր, այսպես կոչված, 3D խմբագիրներ: Նրանց օգնությամբ հարթության վրա կառուցվում են երկրաչափական պրոյեկցիաներ, որոնք անհրաժեշտ են եռաչափ ցանկացած էֆեկտ ստեղծելու համար։',
              'Հատուկ գեղեցկությունը',
              '3D մոդելավորում',
              'կայանում է այս տեխնոլոգիայի գործնականում անսահմանափակ հնարավորությունների մեջ: Օգտագործելով',
              '3D գրաֆիկա',
              ', կարող եք ստեղծել ցանկացած իրական կամ երևակայական շենքի, անշունչ առարկայի կամ երևույթի մոդել։'
            ],
            middleSideUnderSlider:[
              'ՆԵՐԿԱՅԱՑՆԵԼ ԸՆԴՀԱՆՈՒՐ ՏԵԽՆՈԼՈԳԻԱՆԵՐ',
              'Բլենդեր',
              'Նյութ',
              'Gimp, c#',
              'MakeHuman'
            ],
            create3dModel:[
              '3D ՄՈԴԵԼՆԵՐԻ ՍՏԵՂԾՈՒՄ',
              'Ցանկացած առարկայի կամ առարկայի եռաչափ մոդել ստեղծելու գործընթացը կատարողից պահանջում է ոչ միայն համակարգչային գրաֆիկայի հմտությունների անբասիր տիրապետում, այլև ստեղծագործության առանձնահատուկ մանրակրկիտ և բծախնդիր կատարում: Ամբողջ գործընթացի հաջողությունը, ինչպես նաև դրա հուսալիությունը կախված է նրանից, թե որքան իրատեսական և ճշգրիտ կցուցադրվի մոդելը:',
              'Աշխատանքների որակյալ կատարումը ենթադրում է մի քանի պարտադիր պայմանների պահպանում. Թվարկենք դրանցից ամենագլխավորները։',
              'Նախագծի նպատակների համար անհրաժեշտ է ընտրել ամենահարմար մասնագիտացված ծրագիրը: Այսպիսով, վերը նշված Autodesk 3ds Max-ը հայտնի է իր ունիվերսալությամբ: Այն կարող է օգտագործվել ցանկացած ոլորտում և ցանկացած առաջադրանքի համար: Եվ, օրինակ, AutoCAD-ի մեկ այլ ծրագիր ունի ավելի նեղ մասնագիտացում. այն անփոխարինելի է արդյունաբերական և շինարարական կայքերի մոդելավորման համար:',
              'Եռաչափ մոդելի բարձր որակը ենթադրում է պատվիրատուի կողմից տրամադրված փաստաթղթերի հրահանգների ճշգրիտ կարգ: Չնայած մոդելավորման գործընթացի կրեատիվ բնույթին, ցանկացած նախաձեռնության դրսևորում, որը հակասում է լիազորություններին, այստեղ կլինի ոչ տեղին և ոչ պրոֆեսիոնալ:',
              'Առավել իրատեսական էֆեկտների հասնելու համար անհրաժեշտ է կիրառել միայն ամենաբարձր որակի հյուսվածքները: Սա հարց է, թե որքանով է տեխնիկապես հագեցած տեխնիկան:',
              'Նույն նպատակով, պետք է ուշադիր մշակել 3D մոդելի պատկերի բոլոր մանրամասներն ու տարրերը՝ առանձնահատուկ ուշադրություն դարձնելով դրանցից ամենափոքրին: Վերջնական պատկերի ռեալիզմի գաղտնիքը հենց նրբերանգների ճշգրիտ փոխանցման մեջ է։',
            ],
            table3dModel:[
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
              '22$'
            ],
        } 
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

          reg_log: [
            'Войти',
            'Регистрация',
            'Подтверждать',
            'Отправлять',
          ],
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

          ourAdvantagesItemTitle:[
            'Разработка веб-приложений',
            'Обучение веб программированию',
            'Мобильные приложения',
            'Индивидуальное обучение',
            'Продвижение сайтов',
            'Онлайн обучение',
            'Разработка приложений (игр) на Unity',
            'Помощь в трудоустройстве',
            'Разработка и внедрение CRM-системы',
            'Разработки и внедрения ERP-систем'
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
            'С помощью ERP-системы отпадает необходимость в создании целого ряда индивидуальных информационных систем, с помощью которых выполняется автоматизация каждого из направлений с последующей наладкой коммуникации между этими системами.'
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
            'Курсы программирования'
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
            'Заказать проект'
          ],

          // ====================header=============================

          headerTitlePart1: 'С нашей профессиональной командой вы можете․',
          headerTitlePart2: 'Заказать Веб-системы с комплексными программными решениями. - Заказать многофункциональные CRM/ERP системы. - Заказать работы по программированию оборудования. - Заказать мобильные системы с комплексными программными решениями (iOS, Android). - Заказ многофункциональных игр для App Store и Play Store. - Заказ сложных 3D-моделей․ - Изучите веб-интерфейс | Веб-бэкэнд |: Единство |: Программирование JAVA. Улучшите свои навыки программирования Frontend/Backend.',             
                        

          // ====================webexInfo=========================
          webexInfo: [
              'О нас',

             `Компания Webex Technologies основана  2003 году в ноябре 21.
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
              Компания Webex Technologies всегда рада новым партнерам.`
          ],

           // ===========================createWebsitesAndMobileApp=============================

          createWebsitesAndMobileApp: 'Создание сайтов и мобильных приложений',

          createWebsitesAndMobileAppTitle: [
            'Создание веб-приложении',
            'Мобильные приложения',
            'Создание игр и Unity',
            '3D моделирование',
            'Подготовка CRM систем'
          ],

          createWebsitesAndMobileAppTxt: [
            'Создание сайтов с нуля - компания Webex Technologies разрабатывает сайты с нуля, участвуя во всех этапах его создания.То есть клиент выражает свои цели, пожелания по дизайну и интерфейсу, а мы на их основе разрабатываем необходимый сайт.',
            'Создание мобильных приложений для IOS и Android - «Webex Technologies» - армянская компания по разработке мобильных приложений с многолетним опытом работы в сфере мобильных технологий и платформ.Мы предлагаем широкий спектр услуг по разработке мобильных приложений на рынке Армении и других стран.  Компания предоставляет ИТ-консалтинг, разработку, проектирование, тестирование и техническую поддержку.',
            'Преимущества приложений, созданных Webex Technologies с помощью Unity - Наша компания является опытным и надежным партнером в разработке решений с использованием Unity. Мы уже много лет создаем эффективные и надежные приложения для клиентов по всему миру. Используя технологии Unity, мы успешно решаем задачи в таких сферах, как онлайн-коммерция, игры, здравоохранение, образование, реклама и т. д. Если вы хотите обсудить детали проекта, свяжитесь с нами.',
            'Трехмерное моделирование или 3D-моделирование – это создание трехмерных изображений каких-либо предметов или объектов.Для этой цели специалисты используют специальные компьютерные программы, так называемые 3D-программы.С их помощью геометрические проекты преобразуются в трехмерные изображения. . Привлекательность 3D-моделирования заключается в практически неограниченных возможностях технологии: с помощью 3D-графики можно создать модель любого реального или воображаемого здания, статического объекта или явления.',
            'Разработка и внедрение CRM-системы наиболее востребованы в ситуациях, когда происходит качественный скачок в бизнесе и управлении компанией, то есть увеличивается количество коммуникаций (продажи, сделки), а также деловых контактов (телефонные звонки, электронные письма, СМС-уведомления) в течение дня, которые выполняет руководитель за месяц, превышает порог доступной человеку оперативной памяти, в данном случае ресурсов, которые сотрудники тратят на документы и таблицы Excel. В CRM-систему можно передать следующие функции: 1. Автоматизация исполнения заказов и исполнения транзакций путем отслеживания статуса каждой конкретной позиции; 2. Упрощение документооборота за счет автоматического создания договоров, актов, счетов и счет-фактур, 3. Ведение единой клиентской базы данных, содержащей подробную информацию о каждом клиенте и историю взаимодействия с ним; Разработка и внедрение ERP-систем.'
          ],

          // ======================services================================

          servicesTitle: [
            'Создание сайтов',
            'Мобильные приложения',
            '3D моделирование',
            'Oбучение',
            'ERP-систем',
            'Unity 3D',
            'Обслуживание',
            'Систем CRM'
          ],

          servicesCentreDivTitle: 'Услуги',

          // ==================videoCoursesSection=====================

          videoCoursesSectionTitle: 'План обучения программированию',
          
          videoCoursesSectionTxt: [
            'Бесплатный пробный урок. Наши будущие студенты. У вас есть возможность бесплатно ознакомится с методами обучения, и преподавателями компании Webex Technologies.',
            'Базовый курс. Предлагаем вам пройти базовый курс по  программированию в компании Webex Technologies. У вас есть возможность выбрать удобное для вас время, формат и преподавателя. Для этого вам нужно зарегистрироваться.',
            'Углубленный курс по программированию. Дорогие студенты. Для поднятия квалификации вам предлагается, углубленный курс. В компании Webex Technologies вы можете повысить знания и ваш уровень специализации в узкой области. Для этого вам нужно зарегистрироваться.'
          ],


          VideoCoursesSection_duration:[
            'Продолжительность - 120 минут',
            'Продолжительность - 960 минут',
            'Продолжительность - 1440 минут'
          ],

          VideoCoursesSection_value:[
            'Ценность 0 АМД',
            'Ценность 45000 АМД',
            'Ценность 60000 АМД',
          ],


          VideoCoursesSection_title:[
            'Пробный курс',
            'Стандартный пакет',
            'Профессиональный пакет'
          ],

          // ==========================Footer============================

          footerMenu: [
            'Обратная связь',
            'Электронная почта:',
            'Тел։',
            'Наш адрес:',
            'М. Баграмяна пр. 79 1/1',
            'следите за нами'
          ],

           // ==================courseseRegistration==============================

           courseseRegistrationSlideCountLine: [
            'Продолжительность ',
            'минута'
          ],

          validation_reg_log: [
            'Это поле является обязательным',
            'Пишите правильный E-mail!',
            'Пароль должен содержать цифру',
            'Пароль должен содержать строчные буквы',
            'Пароль не совпадают',
            'Пишите только цифру',
            'Пароль должен содержать не менее 8 символов'
          ],

          resetPasswordModalError_message: 'Что-то не так',

          abouteUs_Header: [
            'О нас',
           '«Webex Technologies» специализируется на создании веб-сайтов. Наиболее распространенными языками программирования, которые используются в работе, являются HTML5, CSS3-Flex, Grid, Parallax, Sprites, PHP, JavaScript, ES6, jQuery, Bootstrap, Ajax, React JS, Laravel, OOP/MVS, MySQL и др. WebEx Tech работает уже 20 лет.'
          ],

          abouteUS_info_block: [
            'Почему сотрудничать с центром «WebEx Technologies» удобно и эффективно',
            'Прозрачность действий на любом этапе создания сайта. Мы предоставляем регулярные отчеты и обеспечиваем полную осведомленность о работе. Индивидуальный подход к каждому клиенту. Тщательное изучение специфики бизнеса клиента на подготовительном этапе создания сайта способствует получению максимального эффекта в кратчайшие сроки. Создание сайта для нас – творческий процесс. Мы используем не только известные и распространённые решения при разработке сайта, но и новые и неожиданные решения, которые делают сайт уникальным и запоминающимся.При создании сайтов мы используем только лицензионные (коммерческие и некоммерческие) CMS, модули, компоненты, конструкции.'
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
            '«Webex Technologies» специализируется на создании веб-сайтов. Наиболее распространенными языками программирования, которые используются в работе, являются HTML5, CSS3-Flex, Grid, Parallax, Sprites, PHP, JavaScript, ES9, jQuery, Bootstrap, Ajax, React JS, Laravel, OOP/MVS, MySQL и т. д. WebEx Tech имеет работаю 20 лет. Люди, которые с нами работают, благодарны за качество выполняемой нами работы. Мы создаем успешные и вдохновляющие сайты. У вас уже есть сайт? Итак, Вам необходимо - оптимизация и продвижение сайтов, реклама в Интернете, поддержка и обслуживание сайтов. Мы создаем интернет-решения для наших клиентов, которые сделают разработку проекта простой и функциональной.'
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
            'ООО «Лига услуг»'
          ],

          order_now: 'Заказать сейчас',

          projectPage_translation: [
            'Описание',
            'Название проекта:',
            'Языки программирования',
            'Период создания',
            'Дата создания',
            'месяц',
            'дата'
          ],

          orderFormTitle:[
            'Расскажи нам',
            'о вашем проекте',
            'Выберите услуги',
          ],



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
            'Yandex Market',
            'Google analytics',
            'Автоматизация бизнес-процессов'
          ],

          contact_us_title: [
            'Контакт',
            'Обратная связь'
          ],

          feedback: [
            'Имя*',
            'Эл. адрес*',
            'Сообщение'
          ],

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
            5) Тестирование.  Тестируем сервис на разных устройствах и гарантируем выпуск качественного продукта точно в срок`

          ],

          projectType: [
            'Все',
            'Веб',
            'Мобильный',
            'Игры и 3D'
          ],

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
            ' 2D и 3D разработка игр'
          ],

          web_project_page_web_development_title: 'Разработка веб приложений',

          web_project_page_web_development_info: [
            'Компания ВэбЕкс Технолоджис была основана в ноябре 2007 года. Наша компания имеет большой опыт в области разработки веб-приложении, аутсорсинга разработки программного обеспечения и веб-разработки, ИТ-консалтинга, интеграции приложений, анализа бизнес-процессов, тестирования ПО, сопровождения и поддержки.',
            'Давайте разберем, что из себя представляют услуги, которые оказывает компания ВебЭкс Технолоджис.'
          ],
          dashboard_name: 'Панель управления',

          account_Box: [
            'Счет',
            'Редактировать профиль',
          ],

          purchase_history: [
            'История покупки',
            'Урок(и)',
            'с общего'
          ],
          my_Training: 'Пройденные уроки',

          description: 'Описание',

          homework_linne: [
            'Делать домашнюю работу',
            'Урок',
            'м',
          ],

          cordial:'Содержание',

          all_video_lessons: "Все видео уроки",

          profileArr: [
            'Ваш профиль',
            'Заполните свои данные',
            'Сохранять',
            'Отмена',
            'напиши текущий пароль',
            'напиши новый пароль',
            'повторите новый пароль'
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
            'Отправлять'
          ],

          visitHistory: [
            'История посещений',
            'Число',
            'Уроки',
            'Всего уроков',
            'Количество уроков',
            'Оплата'

          ],

          lerne_more: 'Узнать больше...',

          slide_section: [
            'Мы преподаем',
            'Наш современный и профессиональный подход уже привлек множество клиентов.'
          ],
          dashboard: 'Панель управления',
          currentLessons: 'Текущие уроки',
          profile: 'Профиль',
          helpp: 'Помощь',
          visitHistoryy: 'История посещений',
          logOut:'Выйти',

          //Website Promotion
          promotionTitle: 'Продвижение сайта',
          promotionText: '«WebexTech» предлагает Вам профессиональное продвижение сайтов в Ереване и других регионах Армении. Подберите оптимальные варианты продвижения вашего сайта',

          photoDivs: [
            'Комплексное продвижение сайта',
            'Такое продвижение сайта сочетает в себе различные виды продвижения: поисковое продвижение, контекстную рекламу, комплексную рекламную кампанию сайта в Интернете, в том числе баннерную рекламу, рекламу на досках объявлений, каталогах регистрации и т. д. Благодаря комплексному продвижению сайта вы получите максимально эффективное продвижение вашего сайта.',
            'Поисковое продвижение сайта',
            'Целью поискового продвижения является вывод сайта в ТОП поисковых систем (таких как Яндекс, Рамблер, Google). Когда ваш веб-сайт окажется в первых 10 поисковых запросах, ваш трафик будет автоматически увеличен.',
            'Поисковое продвижение сайта',
            'Контекстная реклама – еще один способ продвижения сайта. Это короткие текстовые объявления, которые появляются на страницах результатов поисковых систем в ответ на запросы пользователей, а также на других рекламных площадках Яндекс.Директ, Раннер и Google AdWords.'
        ],
        textDivTop: [
          'WebExTech — стратегия комплексной разработки веб-сайтов.',
          'В чем преимущества продвижения вашего сайта с помощью «WebExTech»:',
          'Прозрачность на любом этапе продвижения сайта. Регулярная отчетность, полная осведомленность о работе обеспечивается. Предварительные этапы согласования работ, всех действий по продвижению и оптимизации сайта.',
          '«WebExTech» - официальный партнер Яндекса. Контекстная реклама на Яндексе и медийная (баннерная) реклама в Интернете с помощью специалистов «webexTech» - по ценам Яндекса. Мы обеспечиваем поддержку вашей рекламной кампании на Яндексе профессионалами и это бесплатно!',
          'Индивидуальный подход к каждому клиенту. Мы гарантируем нашим клиентам наиболее эффективное продвижение сайта, которое будет отвечать потребностям его бизнеса.',
          'Хотите заказать продвижение сайта? Не нужно тратить время на дорогу. Если ваша компания находится в Армении, вам достаточно позвонить в наш центр, назначить удобное для вас время и место, и наш сотрудник сам приедет к вам. Все вопросы с клиентами, находящимися в других городах, позволяют нам оперативно решать современные системы обмена информацией: E-mail, ICQ, Skype, QIP и другие.',
          'Мы используем только легальные и лучшие методы продвижения вашего сайта. Мы обязательно применяем только легальные методы оптимизации вашего сайта, чтобы сайт клиента не попал под санкции поисковой системы.',
          'Продвижение сайта осуществляется на 1-10 место в результатах поиска. Вы сами выбираете, где заказать продвижение вашего сайта. Никакой дополнительной оплаты за проведение упомянутых выше рекламных акций.',
          'Поскольку каждый клиент для нас особенный, поэтому каждому проекту мы уделяем максимум времени и внимания.'
        ],

        middleSide:[
          'Ветви',
          'WebEx Technologies предлагает услуги по разработке программного обеспечения компаниям из различных отраслей.',
          'ФИНАНСЫ',
          'ТЕЛЕКОММУНИКАЦИЯ',
          'АВТО И ТРАНСПОРТ',
          'ЗДРАВООХРАНЕНИЕ',
          'ТОРГОВЛЯ',
          'ОБУЧЕНИЕ'
        ],
        bottomSideTexts:[
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
          'Специальные предложения позволяют нам сделать создание сайтов для наших Клиентов максимально эффективным и выгодным.'
        ],
        buttonsSide:[
          'ДЛЯ ЗАПРОСА ИЛИ ВОПРОСА',
          'Развитие веб-сайта',
          'Продвижение сайта/SEO',
          'Сервис и поддержка',
          'Разработка 3D-моделирования',
          'Разработка мобильных приложений',
          'Юнити Девелопмент'
        ],

        
        /////3d modeling///////////
        topSideUntilSlider:[
          '3D моделирование',
          'Трехмерное моделирование, или 3D моделирование.',
          ', — это процесс создания трехмерных изображений любых предметов или объектов. Для этих целей специалисты используют специализированные компьютерные программы, так называемые 3D-редакторы. С их помощью на плоскости строятся геометрические проекции, необходимые для создания объемного любого эффекта.',
          'Особая красота',
          '3D моделирование',
          'заключается в практически неограниченных возможностях этой технологии. С использованием',
          '3D графика',
          ', вы можете создать модель любого реального или воображаемого здания, неодушевленного предмета или явления.'
        ],
        middleSideUnderSlider:[
          'ВНЕДРЯЕМ ПЕРЕДОВЫЕ ТЕХНОЛОГИИ',
          'Блендер',
          'Вещество',
          'Gimp, c#',
          'MakeHuman'
        ],
        create3dModel:[
          'СОЗДАНИЕ 3D МОДЕЛЕЙ',
          'Процесс создания трехмерной модели любого предмета или объекта требует от исполнителя не только безупречного владения навыками компьютерной графики, но и особой тщательности и скрупулезного выполнения работы. От того, насколько реалистично и точно будет отображена модель, зависит успех всего процесса, а также его надежность.',
          'Качественное выполнение работ предполагает соблюдение нескольких обязательных условий. Назовем наиболее важные из них.',
          'Необходимо выбрать наиболее подходящую для целей проекта специализированную программу. Итак, упомянутый выше Autodesk 3ds Max славится своей универсальностью. Его можно использовать в любой отрасли и для любых задач. А, например, еще одна программа AutoCAD имеет более узкую специализацию – она незаменима при моделировании промышленных и строительных сайтов.',
          'Высокое качество 3D-модели предполагает точное соблюдение инструкций предоставленной заказчиком документации. Несмотря на творческий характер процесса моделирования, проявление любой инициативы, идущей вразрез с техническим заданием, здесь будет неуместно и непрофессионально.',
          'Чтобы добиться максимально реалистичных эффектов, нужно применять текстуры только самого высокого качества. Это вопрос того, насколько технически оснащен техник.',
          'С этой же целью следует тщательно проработать все детали и элементы изображения 3D-модели, уделяя особое внимание самым мелким из них. Секрет реалистичности финальной картинки заключается именно в точной передаче нюансов.',
        ],
        table3dModel:[
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
          '22$'
        ],

        }
      },
      // Add more languages as needed
    },
    lng: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'am', // Default language
    fallbackLng: localStorage.getItem('lang'), // Fallback language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;