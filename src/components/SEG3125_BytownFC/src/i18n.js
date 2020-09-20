import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";

i18n
   .use(LanguageDetector)
   .use(initReactI18next)
   .init({
      // we init with resources
      resources: {
         en: {
            translations: {
               "About_Header": "About",
               "Teams_Header": "Teams",
               "Fields_Header": "Fields",
               "Development_Header": "Development",
               "Help_Header": "Help",
               "Change_Language": "Change Language",
               "Cancel": "Cancel",
               "About_Explanation": "Learn what Bytown FC is about and its achievements. Giving you an insight on why choose BFC.",
               "Teams_Explanation": "Explore a variety of different team programs that players can participate in to play and compete in league action.",
               "Fields_Explanation": "Should you want to rent/reserve a field for your own private training or game, click to choose and learn how to rent one of our facilities for up to 3h.",
               "Development_Explanation": "Discover and learn about the various training and development programs offered at Bytown FC to help improve your game!",
               "All": `All`,
               "Or_Nothing": `Or Nothing`,
               "Subtitle": `Ranked #1 Soccer Club in Ottawa`,
               "aboutContent": `Bytown Football Club is soccer club based in Ottawa, Canada. BFC was founded by former Canadian International Jason DeVos in
               2001. Since then, the club has strive and proven to provide the best player development to help players reach their potential though quality coaching
               and training. The club has won numerous awards such being named the number one soccer club in Ottawa in 2020, being recognized with the Gold Standard for Club Excellence within Ontario Soccer, and
               winning the OPDL Cup in 2019.`,
               "fieldDescription": `Bytown FC owns and manages several soccer fields across Ottawa. Though most are solely used by the club, several fields can be rented/reserved to the public. There are seven fields owned under BFC that can be rented, each are charged on an hourly basis for a maximum rental time of 3h. All players are asked to respect and not damage the facilities that may accompany the fields. To rent a field, click on any of the cards below and input the required information.`,
               "Payment": "Payment",
               "Reserve": "Reserve",
               "Rent_Period": "How long are you renting this field for",
               "Reservation_Time": "Reservation time",
               "hour": "hour",
               "Name": `Name`,
               "Email": `Email`,
               "Card_Owner": "Card Owner",
               "Card_Number": "Card Number",
               "Expiry_Date": "Expiry Date",
               "Payment_penalty": "Users will be required to pay a $5 penalty should there be a cancellation",
               "CVV": "3-digit number on the back of the card",
               "Field_Rental":"Field Rental",
               "To_Register_Please_Contact": "To register, please contact",
               "description_fundamental": `The fundamental program focuses on the basics of soccer and gives players an introduction to the game. Teaching them positions, basic tactics, proper techniques, etc. There will be 2 sessions per week, each lasting 1h, where the final 15 minutes will be a scrimmage. By the end of the program, players will have a strong basic understanding of positional roles, techniques in shooting, tackle, passing, etc.`,
               "description_technical": `The technical program focuses on developing players' technical abilities and mindset on the pitch. This program is aimed towards more experienced players who have at least a basic understanding of the game. Players will learn (but not limited to) different styles of play (such as tiki-taka), skills that can help them in games and further improve their technical abilities and mindset. The program runs for 10 weeks with 1.5h sessions twice a week where the last 15-30 minutes will be a scrimmage.`,
               "description_goalkeeping": `The goalkeeping program focuses on the technical aspects of goalkeeping and introduces newer players to the goalkeeping position players will learn about ways to stop the ball, best practices for goalkeeping, the leadership capabilities that comes with being a goalkeeper, etc. The program runs for 8 weeks featuring 2 sessions per week, each lasting 45 minutes.`,
               "Fundamentals": "Fundamentals",
               "Technicals": "Technicals",
               "Goalkeeping": "Goalkeeping",
               "tdProgram": "Training and Development Programs",
               "click_below_for_more_info": "Click the cards below for more information about each program.",
               "programDescription": `Bytown FC offers three different intense training and development programs that players between the ages of 10 and 21 can participate in. Each program lasts for around 8-10 weeks and specializes in a certain aspects of the game; such as the goalkeeping. With the exception of the "Technical" program, all other programs are coeducational (boys and girls together) and all section are divided by age groups.`,
               "contact_techinical": "tonyadams@bytownfc.ca for men, christinesinclair@bytownfc.ca for women.",
               "teamsDescription": `Bytown FC houses many different teams across different leagues for anyone to join. Players can choose to join either recreation or competitive but only youth players from U13-U18 can choose to join the professional development program. Click on the cards below to learn about each program and find which one suits best for you.`,
               "Teams_Programs": "Teams Program",
               "Competitive": "Competitive",
               "Recreation": "Recreation",
               "Professional_Development": "Professional Development",
               "Overview": "Overview",
               "Professional_Development_Program": "Professional Development Program",
               "opdlContent": `Bytown Football Club is proud to be one of several club across Ontario that hold a license to play within the Ontario Player Development League.
               (Ontario soccer's first standards-based youth high performance league that combines top level competition with strict high performance training standards). 
               Players between the ages of 13-18 in this program are trained with the purpose of potentially joining a professional club or university team under high-performance professional training,
               conditioning, and guidance from our world class coaching staff. Players compete against the best players across Ontario in the highest level of competitive youth soccer. More information regarding OPDL can be found on their`,
               "website": "website",
               "Timeline_title": "Timeline",
               "Timeline_1": "Assessments and tryouts begins around late November with teams being finalized by mid December.",
               "Timeline_2": "All players will be provided with the proper kits.",
               "Timeline_3": "There will be 3 training sessions per week in addition to league and exhibition games, each lasting 1.5h.",
               "Timeline_4": "The program begins on January and continues until the end of October.",
               "Timeline_5_1": "Players new to the program and wishing to tryout must pay a",
               "Timeline_5_2": "fee and register before October 31st.",
               "Timeline_6": "Program cost: $2000",
               "additional_questions": "For any additional questions, concerns, or if you're wishing to register for tryouts. Please contact Gary Newell at",
               "Age_group": `Please select your age group`,
               "Adult": "Adult",
               "Youth": "Youth",
               "CompetitiveSoccer": "Competitive Soccer",
               "RecreationSoccer": "Recreation Soccer",
               "Men": "Men",
               "Women": "Women",
               "Mixed": "Mixed",
               "adultComp":`Competitive adult teams are split between divisons (competition 1 - competition 6), each varying by skill levels.
               Teams in each division will compete against teams from other clubs across Ottawa. Players are asked to pay a $100 tryout fee before tryouts. Tryouts
               will commence the beginning of March where teams will be finalized by the end of same month. Preseason will follow starting from April and the season will end
               by late September. All players will be provided their own kits. The cost of the program is $250.`,
               "adultRec": `Recreational adult teams compete in an inter-club league. Teams in the league will compete against other teams within the club. 
               All players will be provided their own jerseys. The cost of the program is $200. Contact your respective age group director to register for a team or create one`,
               "youthComp": `Competitive youth teams are split between divisons (competition 1 - competition 6), each varying by skill levels.
               Teams in each division will compete against teams from other clubs across Ottawa. Players are asked to pay a $75 tryout fee before tryouts. Tryouts
               will commence the beginning of March where teams will be finalized by the end of same month. Preseason will follow starting from April and the season will end
               by late September. All players will be provided their own kits. The cost of the program is $175.`,
               "youthRec": `Recreational youth teams compete in an inter-club league. Teams in the league will compete against other teams of the same age group. 
               All players will be provided their own jerseys. The cost of the program is $125. Contact your respective age group director to register for a team or create one`,
               "contact_teams": "The person of contact for different age groups are found below",
               "AdultComp_Header": "Adult Competitive",
               "YouthComp_Header": "Youth Competitive",
               "AdultRec_Header": "Adult Recreation",
               "YouthRed_Header": "Youth Recreation",
            }
         },
         fr: {
            translations: {
               "About_Header": "Subjet",
               "Teams_Header": "Équipe",
               "Fields_Header": "Terrain",
               "Development_Header": "Développement",
               "Help_Header": "Aid",
               "Change_Language": "Change Langue",
               "Cancel": "Annuler",
               "About_Explanation": "Découvrez ce qu'est Bytown FC et ses réalisations; pour vous donnant un idée pour pourquoi choisir BFC.",
               "Teams_Explanation": "Explorez une variété de programmes d'équipe différents auxquels les joueurs peuvent participer pour jouer et participer à l'action de la ligue.",
               "Fields_Explanation": "Si vous souhaitez louer/réserver un terrain pour votre propre entraînement ou jeu privé, cliquez ici pour choisir et apprendre comment à louer l'une de nos installations pour un maximum de 3h.",
               "Development_Explanation": "Découvrez et apprendrez les différents programmes d'entraînement et de développement proposés au Bytown FC pour vous aider à améliorer votre jeu!",
               "All": `Tout`,
               "Or_Nothing": `Ou Rien`,
               "Subtitle": `Le Numéro 1 Club de Soccer au d'Ottawa`,
               "aboutContent": `Le Bytown Football Club est un club de soccer basé à Ottawa, au Canada. BFC a été fondée par l'ancien international canadien Jason DeVos en 2001. Depuis lors, le club s'est efforcé et a prouvé de fournir le meilleur développement des joueurs pour aider les joueurs à atteindre leur potentiel grâce à un encadrement de qualité. et de la formation. Le club a remporté de nombreux prix, comme le titre de club de soccer numéro un à Ottawa en 2020, le Gold Standard pour l'excellence du club au sein d'Ontario Soccer, et remportant la Coupe OPDL en 2019.`,
               "fieldDescription": `Bytown FC possède et gère plusieurs terrains de soccer à Ottawa. Bien que la plupart soient uniquement utilisés par le club, plusieurs champs peuvent être loué / réservé au public. Il y a sept champs appartenant à BFC qui peuvent être loués, chacun étant facturé à l'heure pour un maximum temps de location de 3h. Tous les joueurs sont priés de respecter et de ne pas endommager les installations pouvant accompagner les terrains. Pour louer un terrain, cliquez sur l'une des cartes ci-dessous et saisissez les informations requises.`,
               "Payment": "Paiement",
               "Reserve": "Réserve",
               "Rent_Period": "Combien de temps louez-vous ce terrain",
               "Reservation_Time": "Heure de réservation",
               "hour": "heure",
               "Name": `Nom`,
               "Email": `Email`,
               "Card_Owner": "Propriétaire de la carte",
               "Card_Number": "Numéro de carte",
               "Expiry_Date": "Date d'expiration",
               "Payment_penalty": "Les utilisateurs devront payer une pénalité de 5 $ en cas d'annulation",
               "CVV": "Numéro à 3 chiffres au dos de la carte",
               "Field_Rental":"Réservation de Terrain",
               "To_Register_Please_Contact": "Pour vous inscrire, veuillez contacter",
               "description_fundamental": `Le programme fondamental se concentre sur les bases du football et donne aux joueurs une introduction au jeu. Leur enseigner les positions, les tactiques de base, les techniques appropriées, etc. Il y aura 2 sessions par semaine, chacune d'une durée de 1h, où les 15 dernières minutes seront une mêlée. À la fin du programme, les joueurs auront une solide compréhension de base des rôles de position, des techniques de tir, de plaquage, de passes, etc.`,
               "description_technical": `Le programme technique se concentre sur le développement des capacités techniques et de l'état d'esprit des joueurs sur le terrain. Ce programme s'adresse aux joueurs plus expérimentés qui ont au moins une compréhension de base du jeu. Les joueurs apprendront (mais sans s'y limiter) différents styles de jeu (tels que le tiki-taka), des compétences qui peuvent les aider dans les jeux et améliorer davantage leurs capacités techniques et leur état d'esprit. Le programme dure 10 semaines avec des sessions de 1.5h deux fois par semaine où les dernières 15-30 minutes seront une match.`,
               "description_goalkeeping": `Le programme de gardien de but se concentre sur les aspects techniques du gardien de but et présente aux nouveaux joueurs le poste de gardien de but que les joueurs apprendront sur les moyens d'arrêter le ballon, les meilleures pratiques pour le gardien de but, les capacités de leadership qui accompagnent le fait d'être gardien de but, etc. semaines avec 2 séances par semaine, chacune d'une durée de 45 minutes.`,
               "Fundamentals": "Fondamental",
               "Technicals": "Technique",
               "Goalkeeping": "Gardien de But",
               "tdProgram": "Programmes de L'entraînement et Développement",
               "click_below_for_more_info": "Cliquez sur les cartes ci-dessous pour plus d'informations sur chaque programme.",
               "programDescription": `Bytown FC propose trois programmes d'entraînement et de développement intensifs différents auxquels les joueurs âgés de 10 à 21 ans peuvent participer. Chaque programme dure environ 8 à 10 semaines et se spécialise dans certains aspects du jeu; comme le gardien de but. À l'exception du programme «technique», tous les autres programmes sont mixtes (garçons et filles ensemble) et toutes les sections sont divisées par groupes d'âge.`,
               "contact_techinical": "tonyadams@bytownfc.ca pour les hommes, christinesinclair@bytownfc.ca pour les femmes.",
               "teamsDescription": `Bytown FC héberge de nombreuses équipes différentes dans différentes ligues que tout le monde peut rejoindre. Les joueurs peuvent choisir de rejoindre le programme récréatif ou compétitif, mais seuls les jeunes joueurs U13-U18 peuvent choisir de rejoindre le programme de développement professionnel. Cliquez sur les cartes ci-dessous pour en savoir plus sur chaque programme et trouver celui qui vous convient le mieux.`,
               "Teams_Programs": "Programme d'Équipe",
               "Competitive": "Compétitif",
               "Recreation": "Récréatif",
               "Professional_Development": "Développment Professionnel",
               "Overview": "Aperçu",
               "Professional_Development_Program": "Programme de Développment Professionnel",
               "opdlContent": `Bytown Football Club est fier d'être l'un des nombreux clubs de l'Ontario qui détiennent une licence pour jouer au sein de la Ligue de développement des joueurs de l'Ontario.
               (La première ligue de football de haute performance de l'Ontario basée sur des normes qui combine une compétition de haut niveau avec des normes d'entraînement de haute performance strictes).
               Les joueurs âgés de 13 à 18 ans dans ce programme sont formés dans le but de rejoindre potentiellement un club professionnel ou une équipe universitaire dans le cadre d'une formation professionnelle de haut niveau,
               le conditionnement et les conseils de notre personnel d'entraîneurs de classe mondiale. Les joueurs affrontent les meilleurs joueurs de l'Ontario dans le plus haut niveau de compétition de soccer jeunesse. Vous trouverez plus d'informations sur OPDL sur leur`,
               "website": "site web",
               "Timeline_title": "Chronologie",
               "Timeline_1": "Les évaluations et les essais commencent vers la fin novembre et les équipes sont finalisées à la mi-décembre.",
               "Timeline_2": "Tous les joueurs recevront les kits appropriés.",
               "Timeline_3": "Il y aura 3 sessions d'entraînement par semaine en plus des matchs de championnat et d'exhibition, chacune d'une durée de 1,5 h.",
               "Timeline_4": "Le programme débute en Janvier et se poursuit jusqu'à fin Octobre.",
               "Timeline_5_1": "Les joueurs nouveaux dans le programme et souhaitant essayer doivent payer un",
               "Timeline_5_2": "frais et inscrivez-vous avant le 31 Octobre.",
               "Timeline_6": "Coût du programme: 2000$",
               "additional_questions": "Pour toute question supplémentaire, préoccupation ou si vous souhaitez vous inscrire à des essais. Veuillez contacter Gary Newell au",
               "Age_group": `Veuillez sélectionner votre tranche d'âge`,
               "Adult": "Adulte",
               "Youth": "Jeunes",
               "CompetitiveSoccer": "Soccer Compétitif",
               "RecreationSoccer": "Soccer Récréatif",
               "Men": "Hommes",
               "Women": "Femmes",
               "Mixed": "Mixte",
               "adultComp":`Les équipes compétitive pour les adultes sont réparties entre les divisions (compétition 1 - compétition 6), chacune variant selon le niveau de compétence. Les équipes de chaque division s'affronteront contre des équipes d'autres clubs d'Ottawa. Les joueurs sont priés de payer des frais d'essai de 100 $ avant les essais. Tryouts commencera début Mars où les équipes seront finalisées à la fin du même mois. La pré-saison suivra à partir d'Avril et la saison se terminera fin Septembre. Tous les joueurs recevront leurs propres kits. Le coût du programme est de 250 $.`,
               "adultRec": `Les équipes récréative pour les adultes participent à une ligue interclubs. Les équipes de la ligue s'affronteront contre d'autres équipes du club. Tous les joueurs recevront leurs propres maillots. Le coût du programme est de 200 $. Contactez votre directeur de groupe d'âge respectif pour vous inscrire à une équipe ou en créer une.`,
               "youthComp": `Les équipes compétitive pour les jeunes sont réparties entre les divisions (compétition 1 - compétition 6), chacune variant selon le niveau de compétence. Les équipes de chaque division s'affronteront contre des équipes d'autres clubs d'Ottawa. Les joueurs sont priés de payer des frais d'essai de 75 $ avant les essais. Tryouts commencera début mars où les équipes seront finalisées à la fin du même mois. La pré-saison suivra à partir d'avril et la saison se terminera fin septembre. Tous les joueurs recevront leurs propres kits. Le coût du programme est de 175 $.`,
               "youthRec": `Les équipes récréative pour les jeunes s'affrontent dans une ligue interclubs. Les équipes de la ligue s'affronteront contre d'autres équipes du même groupe d'âge. Tous les joueurs recevront leurs propres maillots. Le coût du programme est de 125 $. Contactez votre directeur de groupe d'âge respectif pour vous inscrire à une équipe ou en créer une.`,
               "contact_teams": "La personne de contact pour les différentes tranches d'âge se trouve ci-dessous",
               "AdultComp_Header": `Adulte Compétitif`,
               "YouthComp_Header": `Jeunes Compétitif`,
               "AdultRec_Header": `Adulte Récréatif`,
               "YouthRec_Header": `Jeunes Récréatif`,
            }
         }
      },
      fallbackLng: "en",
      debug: true,

      // have a common namespace used around the full app
      ns: ["translations"],
      defaultNS: "translations",

      keySeparator: false, // we use content as keys

      interpolation: {
         escapeValue: false, // not needed for react!!
         formatSeparator: ","
      },

      react: {
         wait: true
      }
   });
export default i18n;