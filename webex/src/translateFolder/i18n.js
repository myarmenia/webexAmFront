import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

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
            'The first lesson with us is free'
          ],

          //====================== reg and log buttons===========================
            reg_log: [
              'Sign in',
              'Register'
            ],

            // ====================toolsInfo========================================

            toolsInfo: [
              'More than 20 years in the market',
              'Student 5000',
              'Project 1900+',
              'Websites 8000+',
              'Supported Projects 6000+',           
              'Programming Languages 30',
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
              'Projects'
            ],
            // =======================buttons=========================
            button: [
              'Courses',
              'Register',
              'To order',
              'Online',
              'Offline',
              'Perform'
            ],
            // =============header==================================
            headerTitlePart1: 'With us, you can conquer the whole world.',
            headerTitlePart2: ' Learn to program with us. Realize your ideas through Webex Technologies.',

            // ===========================webexInfo==================
            webexInfo : [
              'About us',

             'Webex Technologies was founded in 2003 on November 21. Over the years, the company has implemented a large number of projects. Qualitatively and thoroughly approaches the process of creating new products. Webex Technologies works only with new and modern technologies, which in turn are regularly updated according to market requirements. The company was founded in Yerevan and cooperates with international partners all over the world. All projects implemented at Webex Technologies meet international IT standards. Webex Technologie offers programming courses. The company focuses on quality education of students with an emphasis on practical knowledge. Webex Technologies has developed its training program based on many years of experience. Most Webex Technologies students find jobs in the IT industry. After completing the course, the best students are given a certificate, which gives them advantages when looking for a job. Webex Technologies welcomes new partners.'
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
              'CMR system'
            ],

            servicesCentreDivTitle: 'Services',

            // ==================videoCoursesSection=====================

            videoCoursesSectionTitle: 'Programming learning plan',

            videoCoursesSectionTxt: [
              'Free trial lesson. Our future students. You have the opportunity to familiarize yourself with Webex Technologies teaching methods and teachers for free.',
              'Course basic. We offer you basic programming courses at Webex Technologies. You have the opportunity to choose the time, format, and instructor that suits you. To do this, you need to register.',
              'Advanced programming course. Dear students. To improve your skills, we offer you an advanced course. At Webex Technologies, you can increase your knowledge and level of expertise in your preferred field. To do this, you need to register.'
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
          ]
        },
      },
      am: {
        translation: {
          // ==========================reg_and_log=============================
          reg_and_log: [
            'Դասընթացների Գրանցում',
            'Մուտք պրոֆիլ',
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
            'Մեզ մոտ առաաջին դասը անվճար է'
          ],
          
          //====================== reg and log buttons===========================
          reg_log: [
            'Մուտք',
            'Գրանցվել'
          ],

            // ====================toolsInfo========================================

          toolsInfo: [
            'Շուկայում ավելի քան 20 տարի',
            'Ուսանող 5000',
            'Պրոեկտ 1900+',
            'Վեբ կայքեր 8000+',
            'Սպասարկվող Պրոեկտներ 6000+',
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
            'Մեր Պրոեկտները',
            'Մեր Մասին',
            'Հետադարձ Կապ',
            'Գլխավոր էջ',
            'Նախագծեր'
          ],

            // =======================buttons=========================

          button: [
            'Դասընթացներ',
            'Գրանցվել',
            'Պատվիրել',
            'Օնլայն',
            'Օֆլայն',
            'Կատարել'
          ],

            // =============header==================================

          headerTitlePart1: 'Մեզ հետ դուք կարող եք գրավել ամբողջ աշխարհը։',
          headerTitlePart2: 'Սովորեք ծրագրավորել մեզ հետ։ Իրականացրեք ձեր գաղափարները Վեբէքս Թեքնոլոջիս ընկերության միջոցով։',

            // ===========================webexInfo==================

          webexInfo: [
            'Մեր Մասին',
            
            'Webex Technologies ընկերությունը հիմնադրվել է 2003թ. նոյեմբերի 21-ին։ Տարիների ընթացքում ընկերությունն իրականացրել է մեծ թվով  ծրագրեր։ Որակապես և հիմնովին է մոտենում  նոր արտադրանքի ստեղծման գործընթացին։ Webex Technologies-ն աշխատում է միայն նոր և ժամանակակից տեխնոլոգիաներով, որոնք իրենց հերթին պարբերաբար թարմացվում են շուկայի պահանջներին համապատասխան: Ընկերությունը հիմնվել է Երևանում և համագործակցում է միջազգային գործընկերների հետ ամբողջ աշխարհում: Webex Technologies-ում իրականացված բոլոր նախագծերը համապատասխանում են միջազգային ՏՏ ստանդարտներին: Webex Technologie-ն առաջարկում է ծրագրավորման դասընթացներ: Ընկերությունը կենտրոնացած է ուսանողների որակյալ կրթության վրա, շեշտը դնելով գործնական գիտելիքների  վրա: Webex Technologies-ը մշակել է իր դասավանդման ծրագիրը՝ հիմնված երկար տարիների փորձի վրա: Webex Technologies-ի ուսանողների մեծ մասը աշխատանք են գտնում   ՏՏ ոլորտում: Դասընթացն ավարտելուց հետո լավագույն ուսանողներին տրվում է վկայական, որը նրանց առավելություններ է տալիս աշխատանք փնտրելիս։ Webex Technologies-ը  ողջունում է նոր գործընկերներին:'
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
            'CMR համակարգեր'
          ],

          servicesCentreDivTitle: 'Ծառայություններ',

          // ==================videoCoursesSection=====================

          videoCoursesSectionTitle: 'Ծրագրավորման ուսուցման պլան',

          videoCoursesSectionTxt: [
            'Անվճար փորձնական դաս. Մեր ապագա ուսանողները. Դուք հնարավորություն ունեք անվճար ծանոթանալու Webex Technologies-ի դասավանդման մեթոդներին և դասավանդողներին։',
            ' Դասընթաց հիմունքային. Մենք առաջարկում ենք Ձեզ ծրագրավորման հիմունքային դասընթացներ Webex Technologies-ում: Դուք հնարավորություն ունեք ընտրել ձեզ հարմար ժամանակ, ձևաչափ և դասավանդող։ Դա անելու համար անհրաժեշտ է գրանցվել։',
            'Ծրագրավորման խորացված դասընթաց. Սիրելի ուսանողներ. Ձեր հմտությունները բարելավելու համար մենք ձեզ առաջարկում ենք խորացված դասընթաց։ Webex Technologies-ում դուք կարող եք բարձրացնել ձեր գիտելիքները և ձեր մասնագիտացման մակարդակը նախընտրելի ոլորտում: Դա անելու համար անհրաժեշտ է գրանցվել։'
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
            'Первое занятие у нас бесплатно'
          ],
          
          //====================== reg and log buttons===========================

          reg_log: [
            'Войти',
            'Регистрация'
          ],
           // ====================toolsInfo========================================

          toolsInfo: [
            'Более 20 лет на рынке',
            'Студентов 5000 чел.',
            'Проектов 1900+',
            'Сайтов 8000+',
            'Обслуживание сайтов 6000+',
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
            'Обратная связь',
            'Главная страница',
            'Проекты'
          ],

          // ===========buttons==========================
          button: [
            'Курсы',
            'Регистрация',
            'Заказать проект',
            'онлайн',
            'оффлайн',
            'Выполнять'
          ],

          // ====================header=============================

          headerTitlePart1: 'Вместе с нами вы можете покорить весь Мир.',
          headerTitlePart2: ' Изучайте программирование с нами. Создайте из идеи продукт с компанией Webex Technologie.',             
                        

          // ====================webexInfo=========================
          webexInfo: [
              'О нас',

             `Компания Webex Technologies основана  2003 году в ноябре 21.
              За эти годы компания имеет большое количество реализованных проектов.
              Качественно  и основательно подходит к процессу создания нового продукта.
              Webex Technologies работает только новыми и актуальными технологиями, которые в свою очередь переодически обновляются в соответствии с требованиями рынка.
              Компания базируется в г.Ереван, и взаимодействует с международными партнерами  по всему миру.
              В компании Webex Technologies все реализованные продукты соответствуют международной IT стандартизации. 
              В компании Webex Technologie есть курсы по программированию.
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
          ]
        },
      },
      // Add more languages as needed
    },
    lng: 'am', // Default language
    fallbackLng: 'am', // Fallback language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;