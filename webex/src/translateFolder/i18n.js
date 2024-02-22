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
            ],
            // =============header==================================
            headerTitlePart1: 'With our professional team, you can.',
            headerTitlePart2:
               'Order web systems with complex software solutions. - Order multifunctional CRM / ERP systems. - Order hardware programming works. - Order mobile systems with complex software solutions (iOS, Android). - Order multi-functional games for the App Store and Play Store.  - Order complex 3D models.  - Learning the web interface | web backend / Unity / JAVA programming. - improve your knowledge in the field of frontend/server programming․',

            // ===========================webexInfo==================
            webexInfo: [
               'About us',

               'Webex Technologies was founded in 2003 on November 21. Over the years, the company has implemented a large number of projects. Qualitatively and thoroughly approaches the process of creating new products. Webex Technologies works only with new and modern technologies, which in turn are regularly updated according to market requirements. The company was founded in Yerevan and cooperates with international partners all over the world. All projects implemented at Webex Technologies meet international IT standards.',
               ' Webex Technologie offers programming courses. The company focuses on quality education of students with an emphasis on practical knowledge. Webex Technologies has developed its training program based on many years of experience. Most Webex Technologies students find jobs in the IT industry. After completing the course, the best students are given a certificate, which gives them advantages when looking for a job. Webex Technologies welcomes new partners.',
            ],

            // ===========================createWebsitesAndMobileApp=============================
            createWebsitesAndMobileApp: 'Creation of websites and mobile applications',
            createWebsitesAndMobileAppTitle: [
               'Creating a web applications',
               'Mobile applications',
               'Creating games and Unity',
               '3D modeling',
               'Preparation of CRM systems',
            ],

            createWebsitesAndMobileAppTxt: [
               'Creation of websites from scratch - Webex Technologies company develops websites from scratch, participating in all stages of their creation. In other words, the client expresses his goals and wishes about the design and interface, and we develop the required website based on them.',
               'Creating mobile applications for IOS and Android - "Webex Technologies" is an Armenian mobile application development company with many years of experience in the field of mobile technologies and platforms. We offer a wide range of mobile application development services in the market of Armenia and other countries. The company provides IT consulting, development, design, testing, and technical support.',
               'Advantages of applications created by Webex Technologies with Unity - Our company is an experienced and reliable partner in developing solutions using Unity. We have been creating effective and reliable applications for customers all over the world for years. Using Unity technologies, we successfully solve problems in such fields as online commerce, gaming, healthcare, education, advertising, etc. If you want to discuss the details of the project, please contact us.',
               'Three-dimensional modeling or 3D modeling is the creation of three-dimensional images of any objects or objects. For this purpose, specialists use special computer programs, so-called 3D programs. With their help, geometric projects are transformed into three-dimensional images. The appeal of 3D modeling lies in the almost unlimited possibilities of the technology. Using 3D graphics, you can create a model of any real or imaginary building, static object, or phenomenon.',
               'Development and implementation of the CRM system are most in demand in situations where there is a qualitative leap in business and company management. That is the number of communications (sales, transactions) as well as business contacts (phone calls, e-mails, SMS notifications) during the day. that the manager performs in a month exceeds the threshold of working memory available to a person, in this case, the resources that the staff spends on documents and Excel spreadsheets. These functions can be transferred to the CRM system: 1. Automating order execution and transaction execution by tracking the status of each specific position; 2. Simplification of document circulation due to the automatic creation of contracts, acts, accounts, and invoices, 3. Maintaining a unified customer database that contains detailed information about each customer and the history of interactions with them; Development and implementation of ERP systems.',
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
               'CRM system',
            ],

            servicesCentreDivTitle: 'Services',

            // ==================videoCoursesSection=====================

            videoCoursesSectionTitle: 'Programming learning plan',

            videoCoursesSectionTxt: [
               'Free trial lesson. Our future students. You have the opportunity to familiarize yourself with Webex Technologies teaching methods and teachers for free.',
               'Course basic. We offer you basic programming courses at Webex Technologies. You have the opportunity to choose the time, format, and instructor that suits you. To do this, you need to register.',
               'Advanced programming course. Dear students. To improve your skills, we offer you an advanced course. At Webex Technologies, you can increase your knowledge and level of expertise in your preferred field. To do this, you need to register.',
            ],

            VideoCoursesSection_duration: [
               'Duration - 120 minutes',
               'Duration - 960 minutes',
               'Duration - 1440 minutes',
            ],

            VideoCoursesSection_value: ['Value 0 AMD', 'Value 45000 AMD', 'Value 60000 AMD'],

            VideoCoursesSection_title: ['Trial course', 'Standart course', 'Professional course'],
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
               'Aboute US',
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
               'Yandex Market',
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
               'The specialists of our company are of a high level of professionalism in their path, in the categories of services that they provide to you. Each service is provided as a set of works or in a separate part of the development.',
               'are a web resource that the company Webex Technologies makes from scratch, participating in all stages of its creation. In other words, the customer voices his goals, wishes for the design and interface, and we form them into a selling site.',
               ' the creation of this system is an integral and very important part of the corporate information platform. In the development of EDMS, Webex Technologies most often connects and automates systems, ensuring the effective interaction of these systems, and a convenient user interface increases employee productivity, monitoring business process efficiency, ensuring executive discipline, providing operational, up-to-date data in various reports',
               "is the activity of creating new software that is used to simplify the work of employees and automate internal processes. It is a system of software interconnection with external systems that provide the client's needs and much more. The volumetric functionality of the software provides work for a large number of industries. We will consider some of them.",
               ' is the transfer of routine tasks to the Internet platform for automation. Thanks to this, you can take orders, deliver invoices, send goods and much more automatically, with the participation of a minimum number of people.',
               'for large, medium or small businesses. The purpose of this service is to automate internal processes and ensure transparency of activities, both inside and with external users of the system.',
               ' ensuring the activity of one pharmacy or a network of pharmacies, providing reports for the sold product and the ratio with warehouse balances of pharmacy products, providing system analytical processes..',
               "is designed to ensure the simplicity of online booking of available hotel rooms, leaving reviews, assessing the company and service personnel, communication between the system and the hotel administration, for accounting and analyzing the effectiveness of the hotel's work with guests.",
               'is designed to simplify the work of employees with document flow, and most importantly, the software is designed to avoid violations and errors in the work of employees.',
               'is a particularly important process for accounting of goods and store turnover. Integration with 1C and separate warehouse accounting.',
               ' this service is designed to ensure the rental of goods and determine the cost for the time spent. Linking to the payment system is relevant in this case.',
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

            development_crm: ['The development and implementation of a CRM system'],

            crm_title: [
               'is most in demand in situations where there is a qualitative leap in business and company management. That is, the number of communications (sales, transactions) during the day, as well as the number of business contacts (phone calls, emails, SMS notifications) that a manager performs during a month, exceeds the threshold of RAM available to humans, in this case, the resource that spends staff on documentation and Excel spreadsheets. The following functions can be transferred to the CRM system:',
               'automation of order execution and conclusion of transactions with tracking the status for each position',
               'simplification of document circulation due to the automatic generation of contracts, acts, and invoices',
               'maintaining a single customer base with detailed information about each contact and the history of interactions',
               'development and implementation of ERP systems',
               'as a rule, ERP development is carried out according to a modular construction principle',
            ],
            crm_titleP: [
               ' Moreover, each module is "responsible" for a separate line of business or company activity. In particular, the focus of one module of the ERP system can be the automation of the production process, another module - the automation of marketing activities. They can cover human resources, finance, quality management and other areas. Thus, business automation using the capabilities that modern ERP systems provide, allows to ensure effective management of even the largest company in all aspects of its activities. At the same time, all modules are combined into a common, holistic information system that provides integrated and comprehensive business management. Thanks to the development and implementation of an ERP system, there is no need to create a whole range of individual information systems, with the help of which automation of each of the directions is carried out with the subsequent adjustment of communication between these systems, which can be significantly complicated by both technical reasons and problems of software compatibility.',
               ' We offer a wide range of web development services using the most popular server-sidelanguages and frameworks.',
               ' Our web development team constantly monitors the latest trends in web development, which allows us to create quality custom web applications.',
               ' Web development services',
               ' Webex Technologies expertise in web application development includes both the development of technically complex, yet ergonomic and easy-to-use applications, as well as the development of sites of any complexity. We offer a full cycle of web application development: business analysis, design, implementation, quality testing, maintenance and support.',
            ],
            crm_title_li: [
               'Java development',
               'Data scientist',
               'Data scientist',
               'Games development',
               'Development of mobile applications',
               'Virtual Reality Applications Development',
               'Augmented Reality Applications Development',
               'Chatbot development',
               'System Programming',
               'System analysts',
               'Website development',
               'Website layout',
               'Adaptive layout',
               'Email layout',
               'Mobile version of the site',
               'Website improvement',
               'Writing scripts for sites',
               'Connection of payment systems',
               'Testers',
               'Working with texts',
               'CRM implementation',
               'ERP system implementation',
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
               'is a process of research, testing of a software product, aimed at checking the correspondence between the real behavior of a program and its expected behavior on a final set of tests.',
               'Maintenance (support) of software - the process of improving, optimizing and eliminating defects in software after putting it into operation. Software maintenance is one of the phases of the software life cycle, following the phase of putting software into operation. During maintenance, changes are made to the program in order to correct the defects and shortcomings found during use, as well as to add new functionality in order to increase the usability and applicability of the software.',
            ],
            introducing: 'INTRODUCING ADVANCED TECHNOLOGIES',

            adaptability: 'Adaptability. Clean Code Principles. Strategic Implementation.',

            adaptability_title: [
               'We build fast and reliable websites. We provide optimal implementation of the tasks.',
               'When creating a website with "Webex Tech" you also get:',
               'Why to cooperate with "WebExTech" Center:":',
            ],

            adaptability_title_h: [
               'Free domain name registration ',
               'Free site registration in major search engines',
               'Free installation visitors',
               'Placement and configuration of the website on the hosting.',
               'Free training for clients',
               'Free technical support - ',
            ],
            adaptability_title_text: [
               'prefered by the client for one year. We will help you to check for free if the selected domain name options are free for registration.',
               'such as Yandex, Google, Rambler, Mail.ru. Registration is done only manually, which guarantees the correctness and timeliness of providing information about your site in search engines.',
               'statistics counter on the created website (Yandex, LiveInternet systems, Mail.ru, or another one at your request).',
               ' Qualified hosting selection that meets the technical requirements to ensure the correct operation of the site. You get a completely ready to work site.',
               'who order a website (in any place convenient for you in Volgograd or online) to work with the website and the website management system.',
               ' 6 months (updates installation for required system, program errors correction that may occur).',
            ],
            Why_to_H: [
               'Transparency of actions at any stage of the website creation.',
               'Individual approach to each client.',

               'E-mail, Skype, ICQ, QIP and others.',

               'Optimal content management system selection (CMS), options for creating a responsive website design, ideas generation and the search for solutions that increase the functionality, individuality and efficiency of the website.',
               'Creating a website is a passion for our developers.',
               'we use only licensed (commercial and non-commercial) CMS, modules, components, designs.',

               'Special offers allow us to make website creation for our Clients as efficient and profitable as possible.',
            ],
            Why_to_text: [
               'We provide regular reports and ensure full awareness of the work.',
               'Careful study of the specifics of the client’s business at the preparatory stage of creating the website helps to obtain the maximum effect in the shortest possible time.',

               'Have you decided to create a website? Then no need to spend time traveling. If your Company is located in Yerevan, just call our Center, arrange a convenient time and place for you, and our employee will come to you himself. All issues with customers located in other cities allow us to quickly solve modern information exchange systems:',

               'Optimal content management system selection (CMS), options for creating a responsive website design, ideas generation and the search for solutions that increase the functionality, individuality and efficiency of the website.',
               'We try to use in the website development not only well-known and widespread solutions, but also new unexpected solutions that make the website unique and inspirational.',
               'When creating websites',

               'Each Client is UNIQUE for us. You can be sure that when you create a website with us, your project will be given the maximum time and attention.',
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
               'Technical support for your website may include the following works: data backup, monitoring website recovery from backup, forums administration and moderation, bulletin boards, anti-virus, support for interaction with a hosting provider, setting up and technical support for postal addresses on your domain, website transfer to a new server, assistance in domain registration, FTP server administration, monitoring website attendance with reporting.',
               'Informative support for your website may include the following works: Website content filling, copywriting, writing articles, creating products photos catalogs, updating the website’s news feed (searching and rewriting news and events on the website’s topic), adding and updating materials on the website: articles, descriptions of services and goods, monitoring the competitive environment.',
               'You can order both one-time maintenances and monthly subscription services for your website. We have developed convenient tariff plans for website maintenance.',
               'Also within the framework of the organization supporting the effective work of the website, work is performed:',
            ],
            MaintenanceTypes_ul: [
               'Website update, translation of static websites to modern CMS (content management systems).',
               'Website audit, website analysis.',
               'Websites modernization, including redesign, CMS integration, additional modules and interactive systems of interaction.',
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
            reg_log: ['Մուտք', 'Գրանցվել', 'Հաստատել', 'Ուղարկել'],

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
            ],

            // =============header==================================

            headerTitlePart1: 'Մեր պրոֆեսիոնալ թիմին կարող եք.',
            headerTitlePart2:
               'Պատվիրել բարդ ծրագրային լուծումներով Web համակարգեր․   - Պատվիրել բազմաֆունկցիոնալ CRM/ERP համակարգեր․  - Պատվիրել սարքավորումների ծրագրավորման աշխատանքներ․ - Պատվիրել բարդ ծրագրային լուծումներով Mobile համակարգեր(iOS, Android)․ - Պատվիրել բազմաֆունկցիոնալ  խաղեր App Store և Play Store-ի համար - Պատվիրել  բարդ 3D մոդելներ - Սովորել Web Frontend | Web Backend | Unity | JAVA ծրագրավորում - Կատարելագործել Frontend/Backend ծրագրավորման Ձեր գիտելիքները․',

            // ===========================webexInfo==================

            webexInfo: [
               'Մեր Մասին',

               'Webex Technologies ընկերությունը հիմնադրվել է 2003թ. նոյեմբերի 21-ին։ Տարիների ընթացքում ընկերությունն իրականացրել է մեծ թվով  ծրագրեր։ Որակապես և հիմնովին է մոտենում  նոր արտադրանքի ստեղծման գործընթացին։ Webex Technologies-ն աշխատում է միայն նոր և ժամանակակից տեխնոլոգիաներով, որոնք իրենց հերթին պարբերաբար թարմացվում են շուկայի պահանջներին համապատասխան: Ընկերությունը հիմնվել է Երևանում և համագործակցում է միջազգային գործընկերների հետ ամբողջ աշխարհում: Webex Technologies-ում իրականացված բոլոր նախագծերը համապատասխանում են միջազգային ՏՏ ստանդարտներին:',
               ' Webex Technologie-ն առաջարկում է ծրագրավորման դասընթացներ: Ընկերությունը կենտրոնացած է ուսանողների որակյալ կրթության վրա, շեշտը դնելով գործնական գիտելիքների  վրա: Webex Technologies-ը մշակել է իր դասավանդման ծրագիրը՝ հիմնված երկար տարիների փորձի վրա: Webex Technologies-ի ուսանողների մեծ մասը աշխատանք են գտնում   ՏՏ ոլորտում: Դասընթացն ավարտելուց հետո լավագույն ուսանողներին տրվում է վկայական, որը նրանց առավելություններ է տալիս աշխատանք փնտրելիս։ Webex Technologies-ը  ողջունում է նոր գործընկերներին:',
            ],

            // ===========================createWebsitesAndMobileApp=============================

            createWebsitesAndMobileApp: 'Վեբ կայքերի եվ բջջային հավելվածների ստեղծում',

            createWebsitesAndMobileAppTitle: [
               'Վեբ կայքերի մշակում',
               'Բջջային հավելվածներ',
               'Խաղերի եւ Unity-ի ստեղծում',
               '3D մոդելավորում',
               'CRM համակարգերի պատրաստում',
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
               'CRM համակարգեր',
            ],

            servicesCentreDivTitle: 'Ծառայություններ',

            // ==================videoCoursesSection=====================

            videoCoursesSectionTitle: 'Ծրագրավորման ուսուցման պլան',

            videoCoursesSectionTxt: [
               'Անվճար փորձնական դաս. Մեր ապագա ուսանողները. Դուք հնարավորություն ունեք անվճար ծանոթանալու Webex Technologies-ի դասավանդման մեթոդներին և դասավանդողներին։',
               ' Դասընթաց հիմունքային. Մենք առաջարկում ենք Ձեզ ծրագրավորման հիմունքային դասընթացներ Webex Technologies-ում: Դուք հնարավորություն ունեք ընտրել ձեզ հարմար ժամանակ, ձևաչափ և դասավանդող։ Դա անելու համար անհրաժեշտ է գրանցվել։',
               'Ծրագրավորման խորացված դասընթաց. Սիրելի ուսանողներ. Ձեր հմտությունները բարելավելու համար մենք ձեզ առաջարկում ենք խորացված դասընթաց։ Webex Technologies-ում դուք կարող եք բարձրացնել ձեր գիտելիքները և ձեր մասնագիտացման մակարդակը նախընտրելի ոլորտում: Դա անելու համար անհրաժեշտ է գրանցվել։',
            ],

            VideoCoursesSection_duration: [
               'Տեվողությունը-120 Րոպե',
               'Տեվողությունը-960 Րոպե',
               'Տեվողությունը-1440 Րոպե',
            ],

            VideoCoursesSection_value: ['Արժեքը 0 դրամ', 'Արժեքը 45000 դրամ', 'Արժեքը 60000 դրամ'],

            VideoCoursesSection_title: [
               'Փորձնական դասընթաց',
               'Ստանդարտ փաթեթ',
               'Պրոֆեսիոնալ փաթեթ',
            ],
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
               'Yandex Market',
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

            web_project_page_web_development_info: [
               'Webex technologies ընկերությունը գործում է ավելի քան 15 տարի։ Մեր ընկերությունը ունի մեծ փորձ վեբ ծրագրերի մշակման, աութսորսինգի, ծրագրային ապահովման և վեբ ծրագրերի մշակման, ՏՏ խորհրդատվության, հավելվածների ինտեգրման, բիզնես գործընթացների վերլուծության, ծրագրային ապահովման փորձարկման, պահպանման և աջակցության ոլորտում։',
               'Եկեք նայենք, թե որոնք են Webex Technologies-ի մատուցած ծառայությունները:',
            ],

            homework_linne: ['Կատարել տնային առաջադրանքները', 'Դաս', 'ր․'],

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

            development_crm: ['CRM համակարգի մշակումն ու ներդրումը'],

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

               '`E-mail, Skype, Telegram, Viber, Whatsapp հավելվածների միջոցով',

               'Օպտիմալ բովանդակության կառավարման համակարգի ընտրություն (CMS), ադապտիվ կայքի դիզայնի ստեղծման տարբերակներ, գաղափարային գենեռացում եւ լուծումների որոնում, որոնք մեծացնում են կայքի գործունակությունը, անհատականությունը եւ արդյունավետությունը:',
               'Կայքի ստեղծումը մեզ համար ստեղծագործական գործընթաց է: ',
               'մենք օգտագործում ենք միայն լիցենզավորված (կոմերցիոն և ոչ կոմերցիոն) CMS, մոդուլներ, բաղադրիչներ, նմուշներ:',

               'Յուրաքանչյուր հաճախորդ յուրահատուկ է մեզ համար: Դուք կարող եք վստահ լինել՝ երբ Դուք ստեղծում եք Ձեր կայքը մեր հետ, ձեր նախագծին տրվում է առավելագույն ժամանակը եւ ուշադրությունը:',
            ],
            Why_to_text: [
               ' Մենք տրամադրում ենք կանոնավոր հաշվետվություններ եւ ապահովում ենք աշխատանքի լիարժեք իրազեկվածություն:',
               'Կայքի ստեղծման նախապատրաստական փուլում հաճախորդի բիզնեսի առանձնահատկությունները մանրամասն ուսումնասիրելը նպաստում է հնարավորինս կարճ ժամանակում առավելագույն արձյունքին հասնելուն:',

               'Դուք որոշե՞լ եք կայքի առաջխաղացում պատվիրել: Պարզապես պետք է զանգահարել մեր կենտրոն, նշանակել հարմար ժամանակ և տեղ ձեզ համար, և մեր աշխատակիցը ձեզ հետ կապ կհաստատի և կնշանակվի գործնական հանդիպում: Այլ երկրներում գտնվող հաճախորդների հետ բոլոր խնդիրները թույլ են տալիս արագ լուծել ժամանակակից կապի համակարգեր',

               'Օպտիմալ բովանդակության կառավարման համակարգի ընտրություն (CMS), ադապտիվ կայքի դիզայնի ստեղծման տարբերակներ, գաղափարային գենեռացում եւ լուծումների որոնում, որոնք մեծացնում են կայքի գործունակությունը, անհատականությունը եւ արդյունավետությունը:',
               ' Մենք ոչ միայն օգտագործում ենք հայտնի եւ տարածված լուծումները կայքի ստեղծման ժամանակ, այլեւ փորձում ենք գտնել նոր եւ արտասովոր լուծումներ, որոնք դարձնում են կայքի յուրահատուկ եւ հիշարժան:',
               'Կայքերը ստեղծելիս',
               'Յուրաքանչյուր հաճախորդ յուրահատուկ է մեզ համար: Դուք կարող եք վստահ լինել՝ երբ Դուք ստեղծում եք Ձեր կայքը մեր հետ, ձեր նախագծին տրվում է առավելագույն ժամանակը եւ ուշադրությունը:',
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
            ],

            // ====================header=============================

            headerTitlePart1: 'С нашей профессиональной командой вы можете․',
            headerTitlePart2:
               'Заказать Веб-системы с комплексными программными решениями. - Заказать многофункциональные CRM/ERP системы. - Заказать работы по программированию оборудования. - Заказать мобильные системы с комплексными программными решениями (iOS, Android). - Заказ многофункциональных игр для App Store и Play Store. - Заказ сложных 3D-моделей․ - Изучите веб-интерфейс | Веб-бэкэнд |: Единство |: Программирование JAVA. Улучшите свои навыки программирования Frontend/Backend.',

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
              Компания Webex Technologies всегда рада новым партнерам.`,
            ],

            // ===========================createWebsitesAndMobileApp=============================

            createWebsitesAndMobileApp: 'Создание сайтов и мобильных приложений',

            createWebsitesAndMobileAppTitle: [
               'Создание веб-приложении',
               'Мобильные приложения',
               'Создание игр и Unity',
               '3D моделирование',
               'Подготовка CRM систем',
            ],

            createWebsitesAndMobileAppTxt: [
               'Создание сайтов с нуля - компания Webex Technologies разрабатывает сайты с нуля, участвуя во всех этапах его создания.То есть клиент выражает свои цели, пожелания по дизайну и интерфейсу, а мы на их основе разрабатываем необходимый сайт.',
               'Создание мобильных приложений для IOS и Android - «Webex Technologies» - армянская компания по разработке мобильных приложений с многолетним опытом работы в сфере мобильных технологий и платформ.Мы предлагаем широкий спектр услуг по разработке мобильных приложений на рынке Армении и других стран.  Компания предоставляет ИТ-консалтинг, разработку, проектирование, тестирование и техническую поддержку.',
               'Преимущества приложений, созданных Webex Technologies с помощью Unity - Наша компания является опытным и надежным партнером в разработке решений с использованием Unity. Мы уже много лет создаем эффективные и надежные приложения для клиентов по всему миру. Используя технологии Unity, мы успешно решаем задачи в таких сферах, как онлайн-коммерция, игры, здравоохранение, образование, реклама и т. д. Если вы хотите обсудить детали проекта, свяжитесь с нами.',
               'Трехмерное моделирование или 3D-моделирование – это создание трехмерных изображений каких-либо предметов или объектов.Для этой цели специалисты используют специальные компьютерные программы, так называемые 3D-программы.С их помощью геометрические проекты преобразуются в трехмерные изображения. . Привлекательность 3D-моделирования заключается в практически неограниченных возможностях технологии: с помощью 3D-графики можно создать модель любого реального или воображаемого здания, статического объекта или явления.',
               'Разработка и внедрение CRM-системы наиболее востребованы в ситуациях, когда происходит качественный скачок в бизнесе и управлении компанией, то есть увеличивается количество коммуникаций (продажи, сделки), а также деловых контактов (телефонные звонки, электронные письма, СМС-уведомления) в течение дня, которые выполняет руководитель за месяц, превышает порог доступной человеку оперативной памяти, в данном случае ресурсов, которые сотрудники тратят на документы и таблицы Excel. В CRM-систему можно передать следующие функции: 1. Автоматизация исполнения заказов и исполнения транзакций путем отслеживания статуса каждой конкретной позиции; 2. Упрощение документооборота за счет автоматического создания договоров, актов, счетов и счет-фактур, 3. Ведение единой клиентской базы данных, содержащей подробную информацию о каждом клиенте и историю взаимодействия с ним; Разработка и внедрение ERP-систем.',
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
               'Систем CRM',
            ],

            servicesCentreDivTitle: 'Услуги',

            // ==================videoCoursesSection=====================

            videoCoursesSectionTitle: 'План обучения программированию',

            videoCoursesSectionTxt: [
               'Бесплатный пробный урок. Наши будущие студенты. У вас есть возможность бесплатно ознакомится с методами обучения, и преподавателями компании Webex Technologies.',
               'Базовый курс. Предлагаем вам пройти базовый курс по  программированию в компании Webex Technologies. У вас есть возможность выбрать удобное для вас время, формат и преподавателя. Для этого вам нужно зарегистрироваться.',
               'Углубленный курс по программированию. Дорогие студенты. Для поднятия квалификации вам предлагается, углубленный курс. В компании Webex Technologies вы можете повысить знания и ваш уровень специализации в узкой области. Для этого вам нужно зарегистрироваться.',
            ],

            VideoCoursesSection_duration: [
               'Продолжительность - 120 минут',
               'Продолжительность - 960 минут',
               'Продолжительность - 1440 минут',
            ],

            VideoCoursesSection_value: [
               'Ценность 0 АМД',
               'Ценность 45000 АМД',
               'Ценность 60000 АМД',
            ],

            VideoCoursesSection_title: [
               'Пробный курс',
               'Стандартный пакет',
               'Профессиональный пакет',
            ],

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
               'Yandex Market',
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
            dashboard_name: 'Панель управления',

            account_Box: ['Счет', 'Редактировать профиль'],

            purchase_history: ['История покупки', 'Урок(и)', 'с общего'],
            my_Training: 'Пройденные уроки',

            description: 'Описание',

            homework_linne: ['Делать домашнюю работу', 'Урок', 'м'],

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
               'Сайты под ключ -',
               'Разработка систем автоматизации электронного документооборота-',
               'Разработка програмнного обеспечения — ',
               'Автоматизация автосервисов',
               'Автоматизация аптек ',
               'Автоматизация гостиниц',
               'Автоматизация документооборота',
               'Автоматизация магазинов',
               'Автоматизация проката-',
               'Автоматизация ресторанов',
               'Автоматизация салонов красоты',
               'Автоматизация складов -',
               'Автоматизация строительства программное обеспечение -',
            ],
            way_info: [
               'Специалисты ВэбЕкс Технолоджис имеют богатый опыт в разработке IT продукции. Услуги нашей компании могут быть комплексными или включать в себя какую-то часть разработки.',
               'это веб-ресурс, который компания ВэбЕкс Технолоджис делает с нуля, участвуя на всех этапах его создания. Иначе говоря, заказчик озвучивает свои цели, пожелания к дизайну и интерфейсу и мы оформляем их в сайт.',
               'создание данной системы является неотъемлемой и очень важной частью корпоративной информационной площадки. В разработке СЭД, ВебЭкс Технолоджис чаще всего соединяет и автоматизирует системы, обеспечивая эффективное взаимодействие этих систем, а удобный пользовательский интерфейс повышает производительность труда сотрудников, и осуществляет контрол эффективности бизнес-процессов, обеспечение исполнительской дисциплины, предоставление оперативных актуальных данных в различных отчетах.',
               ' деятельность по созданию нов ого программного обеспечения.Для упрощения работы сотрудников и автоматизации внутренних процессов. Система взаимосвязи программное обеспечение с внешними системами которые обеспечивают потребностям клиента и многое другое. Объемный функционал программное обеспечение обеспечивает работу для большого числа отраслей. Некоторые из них мы с вами рассмотрим.',
               ' обеспечивает поток новых заказов. Дает возможности выставлять счета, отправлять товары, принимат закази без потери клиентов.',
               'подходит как крупному, среднему, так и малому бизнесу. Данный сервис поможет автоматизировать работу как внутренних, так и внешних процессов, обеспечит прозрачную деятельность внутренних и внешних пользователей системы.',
               'позволяет следить за деятельностью одной или целой сетью аптек. Предоставлением отчетности за проданный продукт и соотношение с складскими остатками продукции аптеки, обеспечении аналитическими процессами системы.',
               'предназначена для обеспечения простоты онлайн бронирования свободных комнат в гостинице, оставление отзывов, оценка состояний компаний и обслуживающего персонала. И связь между системой и администрации гостиницы. Для учета и анализа эффективности работы с клиентами.',
               'предназначена для упрощения работы сотрудников с документооборотом, а самое главное программное обеспечение предназначено для того чтобы избежать нарушения и погрешности в работе сотрудников.',
               'это особо важный процесс для учета товаров и оборота в магазине. Интеграция с 1С и отдельный складской учет.',
               'данный сервис предназначен для проката товара и определение его стоимости. Привязка к системе оплаты актуальна в данном случае.',
               ' в данной отрасли многопрофильное и многофункциональное. Оно может отвечать за политику ресторанов, клиентов, а также отвечать внутренним требованиям работы самих ресторанов.',
               ' нужна для упрощения регистрации посетителей, и создание онлайн календаря на их сайтах.',
               'это система для учета складских товаров и прозрачности работы сотрудников внутри системы, а также возможность интеграции ее с другими системами.',
               ' это глобальная система автоматизации строительства, учета, анализа, аналитики потраченного строительного материала и аналитика закупки строительного материала для предстоящей стройки. Веб-разработка — процесс создания веб-сайта или веб-приложения. Основными этапами процесса являются веб-дизайн, вёрстка страниц, программирование на стороне клиента и сервера, а также конфигурирование веб-сервера. Этапы разработки веб-сайта На сегодняшний день существуют несколько этапов разработки веб-сайта:',
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

            development_crm: ['Разработка и внедрение CRM-системы'],

            crm_title: [
               'наиболее востребована в ситуациях, когда происходит качественный скачок в ведении бизнеса и управлении компанией. То есть количество коммуникаций (продаж, сделок) в течение дня, а также количество бизнес-контактов (телефонных звонков, электронных писем, смс-уведомлений), которые выполняет менеджер в течение месяца, превышает порог, доступный оперативной памяти человека. В этом случае ресурс, который тратит персонал на ведение документации и составление таблиц в Excel, на CRM-систему можно переложить такие функции: автоматизация выполнения заказов и заключения сделок с отслеживанием статуса по каждой конкретной позиции; упрощение документооборота за счет автоматического формирования договоров, актов, счетов и накладных; ведение единой базы клиентов с подробной информацией о каждом контакте и историей взаимодействий.',
               'автоматизация исполнения ордеров и заключения сделок с отслеживанием статуса по каждой позиции',
               'упрощение документооборота за счет автоматического формирования договоров, актов и счетов-фактур',
               'ведение единой клиентской базы с подробной информацией о каждом контакте и историей взаимодействия',
               'разработка и внедрение ERP-систем',
               'как правило, разработка ERP ведется по модульному принципу построения',
            ],
            crm_titleP: [
               'Как правило, разработка ERP осуществляется по модульному принципу построения. При этом каждый модуль «отвечает» за отдельное направление бизнеса или деятельности компании. В частности, направленностью одного модуля ERP-системы может быть автоматизация производственного процесса, другого модуля – автоматизация маркетинговой деятельности. Они могут охватывать управление кадрами, финансами, качеством и другие направления. Таким образом, автоматизация бизнеса с использованием возможностей, которые дают современные ERP-системы, позволяет обеспечить эффективное управление даже самой крупной компанией во всех аспектах ее деятельности. При этом все модули объединены в общую, целостную информационную систему, обеспечивающую интегрированное и комплексное управление бизнесом. Благодаря разработке и внедрению ERP-системы отпадает необходимость в создании целого ряда индивидуальных информационных систем, с помощью которых выполняется автоматизация каждого из направлений с последующей наладкой коммуникации между этими системами, что может быть значительно осложнено как техническими причинами, так и проблемами программной совместимости.',
               'Мы предлагаем широкий спектр услуг в области веб разработки с использованием самых популярных серверных языков и фреймворков.',
               'Наша команда веб разработчиков постоянно следит за последними тенденциями в области веб разработки, что позволяет нам создавать качественные пользовательские веб',
               'разработки веб-приложении включает в себя разработку технически сложных но при этом эргономичных и удобных в использовании приложении, так и разработку сайтов любой',
               'сложности. Мы предлагаем полный цикл разработки веб-приложении: бизнес-анализ, проектирование, внедрение, тестирование качества, сопровождение и поддержку.',
            ],
            crm_title_li: [
               'Разработка на Java',
               'Программисты',
               'Data scientist',
               'Разработка веб-приложений',
               'Разработка игр',
               'Разработка мобильных приложений',
               'Разработка приложений виртуальной реальности',
               'Разработка чат-ботов',
               'Системное программирование',
               'Системные аналитики',
               'Создание сайтов',
               'Вёрстка сайтов',
               'Адаптивная вёрстка',
               'Вёрстка email',
               'Мобильная версия сайта',
               'Доработка сайта',
               'Написание скриптов для сайтов',
               'Подключение платёжных систем',
               'Тестирование',
               'Работа с текстами',
               'Внедрение CRM',
               'Разработка CRM',
               'Внедрение ERP-системы',
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
            busines_analytic_p: 'естирование программного обеспечения ',
            busines_analytic_title_p: [
               'процесс исследования, испытания программного продукта, имеющий своей целью проверку соответствия между реальным поведением программы и её ожидаемым поведением на конечном наборе тестов.:',
               'Сопровожде́ние (поддержка) программного обеспечения — процесс улучшения, оптимизации и устранения дефектов программного обеспечения (ПО) после передачи в эксплуатацию. Сопровождение ПО — это одна из фаз жизненного цикла программного обеспечения, следующая за фазой передачи ПО в эксплуатацию. В ходе сопровождения в программу вносятся изменения, с тем, чтобы исправить обнаруженные в процессе использования дефекты и недоработки, а также для добавления новой функциональности, с целью повысить удобство использования (юзабилити) и применимость ПО.Экспертиза Webex Technologies в области разработки веб-приложении включает в себя разработку технически сложных но при этом эргономичных и удобных в использовании приложении, так и разработку сайтов любой сложности. Мы предлагаем полный цикл разработки веб-приложении бизнес-анализ, проектирование, внедрение, тестирование качества, сопровождение и поддержку.,',
            ],

            introducing: 'ВНЕДРЯЕМ ПЕРЕДОВЫЕ ТЕХНОЛОГИИ',

            adaptability:
               'Адаптивность. Принципы чистого кода. Стратегически продуманная реализация.',
            adaptability_title: [
               'Делаем сайты быстрыми, надежными. Обеспечиваем оптимальную реализацию поставленных задач.',
               'При создании сайта в "Webex Tech" дополнительно вы получаете:',
               'Почему удобно и эффективно сотрудничать с центром "WebExTech":',
            ],

            adaptability_title_h: [
               'Бесплатная регистрация доменного имени',
               'Бесплатная регистрация созданного сайта в крупных поисковых системах',
               'Бесплатная установка счетчика',
               'Размещение и настройка созданного сайта на хостинге.',
               'Бесплатное обучение сотрудника',
               'Бесплатная техническая поддержка – ',
            ],
            adaptability_title_text: [
               'выбранного вами, на 1 год. Мы поможем вам бесплатно проверить свободны ли для регистрации выбранные вами варианты доменного имени.',
               'таких как Яндекс, Google, Рамблер, Mail.ru. Вся регистрация проводится только вручную, что гарантирует правильность и своевременность предоставление информации о вашем сайте в поисковых системах',
               'статистики посещений на созданном сайте (системы Яндекс, LiveInternet, Mail.ru, или другой по вашему желанию).',
               'Квалифицированный подбор хостинга, соответствующего техническим требованиям, обеспечивающим правильную работу сайта. Вы получаете полностью готовый к работе сайт.',
               'клиента (в любом удобном для вас месте Волгограда или через интернет) работе с сайтом и системой управления сайтом.',
               '6 месяцев (установка требуемых обновлений системы, исправление возникших программных ошибок).',
            ],
            Why_to_H: [
               'Прозрачность действий на любых этапах создания сайта..',
               'Индивидуальный подход к каждому Клиенту..',

               'E-mail, Skype, ICQ, QIP и другие.',

               'Подбор оптимальной системы управления контентом (CMS), выбор варианта создания дизайна сайта, генерация идей и поиск решений, повышающих функциональность, индивидуальность и эффективность сайта.',
               'Создание сайта для нас - творческий процесс.',
               'при создании сайтов только лицензированные (коммерческие и некоммерческие) CMS, модули, компоненты, дизайны.',

               'Специальные предложения позволяют сделать создание сайта для наших Клиентов максимально эффективным и выгодным.',
            ],
            Why_to_text: [
               'Мы предоставляем регулярную отчетность и обеспечиваем полную информированность о проведении работ.',
               'Тщательное изучение специфики бизнеса Клиента на подготовительном этапе создания сайта способствует получению максимального эффекта в кратчайшие сроки.',

               'Вы решили создать сайт? Нет необходимости тратить время на поездки. Если ваша компания находится в Ереване, вам достаточно позвонить в наш центр, назначить удобное для Вас время и место, и наш сотрудник сам к Вам приедет. Все вопросы с заказчиками, расположенными в других городах, позволяют оперативно решить современные информационные системы обмена информацией',

               ' мы стараемся использовать при разработке сайта не только известные и широко распространенные, но и новые неожиданные решения, делающие сайт уникальным и запоминающимся.',
               'Мы используем',
               'Каждый клиент для нас - как единственный. Вы можете быть уверены, что при создании сайта вашему проекту будет уделено максимально необходимое время и внимание.',

               'Специальные предложения позволяют сделать создание сайта для наших Клиентов максимально эффективным и выгодным.',
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
               'Обслуживание сайта, осуществляемое специалистами центра "WebExTech", может включать как техническую поддержку или информационную поддержку, так и комплексное обслуживание сайта. Возможны различные варианты ежемесячного обслуживания Вашего сайта, включающие различные виды технической и информационной поддержки. Больше нет необходимости держать в компании специального сотрудника, обслуживающего сайт - поддержка Вашего сайта, обновление сайта, осуществляется специалистами "WebExTech". ',

            MaintenanceTypes: [
               'Виды обслуживания сайтов:.',
               'Техническое обслуживание',
               'Информационная поддержка сайтов'
               
            ],

            MaintenanceTypes_title: [
               'Техническая поддержка Вашего сайта может включать следующие работы: резервное копирование данных, контроль за восстановлением сайта из резервной копии, модерирование и администрирование форумов, досок объявлений, борьба с вирусами, поддержка взаимодействия с хостинг-провайдером, настройка и техническая поддержка почтовых адресов на Вашем домене, перенос сайта на новый сервер, помощь в регистрации доменов, администрирование ftp-сервера, мониторинг посещаемости сайта с составлением отчетов.',
               'Информационная поддержка Вашего сайта может включать следующие работы: наполнение сайта контентом, копирайтинг, написание статей, создание фотокаталогов продукции, обновление новостной ленты сайта (поиск и рерайт новостей и событий по теме сайта), добавление и обновление материалов на сайте: статьи, описания услуг и товаров, мониторинг конкурентной среды.',
               'Вы можете заказать как разовые работы по обслуживанию сайта, так и ежемесячное абонентское обслуживание сайта. Нами разработаны удобные тарифные планы на сопровождение сайтов.',
               'Также в рамках организации поддержки эффективной работы сайта выполняются работы:',
            ],




            MaintenanceTypes_ul: [
               'Обновление сайта, перевод статических сайтов на современные CMS (системы управления контентом).   ',
               'Аудит сайтов, анализ сайтов.Аудит сайтов, анализ сайтов.',
               'Модернизация сайтов, в том числе редизайн, интеграция CMS, дополнительных модулей и интерактивных систем взаимодействия.',
            ],
         },
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
