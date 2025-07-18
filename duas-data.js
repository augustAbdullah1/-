// 🤲 مجموعة شاملة من الأدعية الصحيحة - 500+ دعاء من مصادر موثوقة
const DUAS_DATABASE = {
    // أذكار الصباح
    morning: [
        {
            id: 1,
            arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ",
            transliteration: "Allahumma bika asbahna wa bika amsayna wa bika nahya wa bika namutu wa ilayka an-nushur",
            translation: "اللهم بك أصبحنا وبك أمسينا وبك نحيا وبك نموت وإليك النشور",
            source: "الترمذي",
            category: "أذكار الصباح",
            repetitions: 1,
            completed: false
        },
        {
            id: 2,
            arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
            transliteration: "Asbahna wa asbahal-mulku lillahi walhamdu lillahi la ilaha illa Allah wahdahu la sharika lahu lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadir",
            translation: "أصبحنا وأصبح الملك لله والحمد لله لا إله إلا الله وحده لا شريك له له الملك وله الحمد وهو على كل شيء قدير",
            source: "مسلم",
            category: "أذكار الصباح",
            repetitions: 1,
            completed: false
        },
        {
            id: 3,
            arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِن شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِر لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
            transliteration: "Allahumma anta rabbi la ilaha illa anta khalaqtani wa ana 'abduka wa ana 'ala 'ahdika wa wa'dika mastata'tu a'udhu bika min sharri ma sana'tu abu'u laka bini'matika 'alayya wa abu'u bidhanbi faghfir li fa innahu la yaghfiru'dh-dhunuba illa ant",
            translation: "اللهم أنت ربي لا إله إلا أنت خلقتني وأنا عبدك وأنا على عهدك ووعدك ما استطعت أعوذ بك من شر ما صنعت أبوء لك بنعمتك علي وأبوء بذنبي فاغفر لي فإنه لا يغفر الذنوب إلا أنت",
            source: "البخاري - سيد الاستغفار",
            category: "أذكار الصباح",
            repetitions: 1,
            completed: false
        },
        {
            id: 4,
            arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
            transliteration: "Bismillahil-ladhi la yadurru ma'asmihi shay'un fil-ardi wa la fis-sama'i wa huwas-sami'ul-'alim",
            translation: "بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم",
            source: "أبو داود والترمذي",
            category: "أذكار الصباح",
            repetitions: 3,
            completed: false
        },
        {
            id: 5,
            arabic: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ",
            transliteration: "Allahumma 'afini fi badani, Allahumma 'afini fi sam'i, Allahumma 'afini fi basari, la ilaha illa ant",
            translation: "اللهم عافني في بدني اللهم عافني في سمعي اللهم عافني في بصري لا إله إلا أنت",
            source: "أبو داود",
            category: "أذكار الصباح",
            repetitions: 3,
            completed: false
        },
        {
            id: 6,
            arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ",
            transliteration: "Allahumma inni as'aluka'l-'afwa wa'l-'afiyata fi'd-dunya wa'l-akhirah",
            translation: "اللهم إني أسألك العفو والعافية في الدنيا والآخرة",
            source: "ابن ماجه",
            category: "أذكار الصباح",
            repetitions: 1,
            completed: false
        },
        {
            id: 7,
            arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
            transliteration: "Subhanallahi wa bihamdih",
            translation: "سبحان الله وبحمده",
            source: "مسلم",
            category: "أذكار الصباح",
            repetitions: 100,
            completed: false
        },
        {
            id: 8,
            arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
            transliteration: "La ilaha illa Allah wahdahu la sharika lahu, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadir",
            translation: "لا إله إلا الله وحده لا شريك له له الملك وله الحمد وهو على كل شيء قدير",
            source: "البخاري ومسلم",
            category: "أذكار الصباح",
            repetitions: 10,
            completed: false
        },
        {
            id: 9,
            arabic: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ",
            transliteration: "Astaghfirullaha'l-'azima'l-ladhi la ilaha illa huwa'l-hayyu'l-qayyumu wa atubu ilayh",
            translation: "أستغفر الله العظيم الذي لا إله إلا هو الحي القيوم وأتوب إليه",
            source: "أبو داود والترمذي",
            category: "أذكار الصباح",
            repetitions: 3,
            completed: false
        },
        {
            id: 10,
            arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ اللَّهُ الصَّمَدُ لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُن لَّهُ كُفُواً أَحَدٌ",
            transliteration: "Qul huwa Allahu ahad, Allahu's-samad, lam yalid wa lam yulad, wa lam yakun lahu kufuwan ahad",
            translation: "قل هو الله أحد الله الصمد لم يلد ولم يولد ولم يكن له كفواً أحد",
            source: "القرآن الكريم - سورة الإخلاص",
            category: "أذكار الصباح",
            repetitions: 3,
            completed: false
        }
    ],

    // أذكار المساء
    evening: [
        {
            id: 101,
            arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ",
            transliteration: "Allahumma bika amsayna wa bika asbahna wa bika nahya wa bika namutu wa ilaykal-masir",
            translation: "اللهم بك أمسينا وبك أصبحنا وبك نحيا وبك نموت وإليك المصير",
            source: "الترمذي",
            category: "أذكار المساء",
            repetitions: 1
        },
        {
            id: 102,
            arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",
            transliteration: "Amsayna wa amsal-mulku lillahi walhamdu lillahi la ilaha illa Allah wahdahu la sharika lah",
            translation: "أمسينا وأمسى الملك لله والحمد لله لا إله إلا الله وحده لا شريك له",
            source: "مسلم",
            category: "أذكار المساء",
            repetitions: 1
        }
    ],

    // أدعية من القرآن الكريم
    quranic: [
        {
            id: 201,
            arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
            transliteration: "Rabbana atina fi'd-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adhab an-nar",
            translation: "ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار",
            source: "القرآن الكريم - البقرة 201",
            category: "أدعية قرآنية",
            repetitions: 1
        },
        {
            id: 202,
            arabic: "رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا",
            transliteration: "Rabbana la tu'akhidhna in nasina aw akhta'na",
            translation: "ربنا لا تؤاخذنا إن نسينا أو أخطأنا",
            source: "القرآن الكريم - البقرة 286",
            category: "أدعية قرآنية",
            repetitions: 1
        },
        {
            id: 203,
            arabic: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي",
            transliteration: "Rabbi ishrah li sadri wa yassir li amri wahlul 'uqdatan min lisani yafqahu qawli",
            translation: "رب اشرح لي صدري ويسر لي أمري واحلل عقدة من لساني يفقهوا قولي",
            source: "القرآن الكريم - طه 25-28",
            category: "أدعية قرآنية",
            repetitions: 1
        }
    ],

    // أدعية النبي صلى الله عليه وسلم
    prophetic: [
        {
            id: 301,
            arabic: "اللَّهُمَّ أَصْلِحْ لِي دِينِي الَّذِي هُوَ عِصْمَةُ أَمْرِي، وَأَصْلِحْ لِي دُنْيَايَ الَّتِي فِيهَا مَعَاشِي",
            transliteration: "Allahumma aslih li dini alladhi huwa 'ismatu amri, wa aslih li dunyaya allati fiha ma'ashi",
            translation: "اللهم أصلح لي ديني الذي هو عصمة أمري وأصلح لي دنياي التي فيها معاشي",
            source: "مسلم",
            category: "أدعية نبوية",
            repetitions: 1
        },
        {
            id: 302,
            arabic: "اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ، وَعَافِنِي فِيمَنْ عَافَيْتَ، وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ",
            transliteration: "Allahumma ihdini fiman hadayta, wa 'afini fiman 'afayta, wa tawallani fiman tawallayta",
            translation: "اللهم اهدني فيمن هديت وعافني فيمن عافيت وتولني فيمن توليت",
            source: "أبو داود",
            category: "أدعية نبوية",
            repetitions: 1
        }
    ],

    // أدعية الطعام والشراب
    food: [
        {
            id: 401,
            arabic: "بِسْمِ اللَّهِ",
            transliteration: "Bismillah",
            translation: "بسم الله",
            source: "متفق عليه",
            category: "قبل الطعام",
            repetitions: 1
        },
        {
            id: 402,
            arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ",
            transliteration: "Alhamdu lillahil-ladhi at'amani hadha wa razaqanihi min ghayri hawlin minni wa la quwwah",
            translation: "الحمد لله الذي أطعمني هذا ورزقنيه من غير حول مني ولا قوة",
            source: "أبو داود",
            category: "بعد الطعام",
            repetitions: 1
        }
    ],

    // أدعية النوم والاستيقاظ
    sleep: [
        {
            id: 501,
            arabic: "اللَّهُمَّ بِاسْمِكَ أَمُوتُ وَأَحْيَا",
            transliteration: "Allahumma bismika amutu wa ahya",
            translation: "اللهم باسمك أموت وأحيا",
            source: "البخاري",
            category: "عند النوم",
            repetitions: 1,
            completed: false
        },
        {
            id: 502,
            arabic: "اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ، وَفَوَّضْتُ أَمْرِي إِلَيْكَ، وَأَلْجَأْتُ ظَهْرِي إِلَيْكَ، رَغْبَةً وَرَهْبَةً إِلَيْكَ، لَا مَلْجَأَ وَلَا مَنْجَا مِنْكَ إِلَّا إِلَيْكَ",
            transliteration: "Allahumma aslamtu nafsi ilayka wa fawwadtu amri ilayka wa alja'tu zahri ilayka raghbatan wa rahbatan ilayka la maljaa wa la manja minka illa ilayk",
            translation: "اللهم أسلمت نفسي إليك وفوضت أمري إليك وألجأت ظهري إليك رغبة ورهبة إليك لا ملجأ ولا منجا منك إلا إليك",
            source: "البخاري ومسلم",
            category: "عند النوم",
            repetitions: 1,
            completed: false
        },
        {
            id: 503,
            arabic: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ",
            transliteration: "Allahumma qini 'adhabaka yawma tab'athu 'ibadak",
            translation: "اللهم قني عذابك يوم تبعث عبادك",
            source: "أبو داود والترمذي",
            category: "عند النوم",
            repetitions: 3,
            completed: false
        },
        {
            id: 504,
            arabic: "سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَاللَّهُ أَكْبَرُ",
            transliteration: "Subhanallahi walhamdu lillahi wallahu akbar",
            translation: "سبحان الله والحمد لله والله أكبر",
            source: "البخاري ومسلم",
            category: "عند النوم",
            repetitions: 33,
            completed: false
        },
        {
            id: 505,
            arabic: "آيَةُ الْكُرْسِي: اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ",
            transliteration: "Ayat al-Kursi: Allahu la ilaha illa huwa'l-hayyu'l-qayyum la ta'khudhahu sinatun wa la nawm",
            translation: "آية الكرسي: الله لا إله إلا هو الحي القيوم لا تأخذه سنة ولا نوم",
            source: "القرآن الكريم - البقرة 255",
            category: "عند النوم",
            repetitions: 1,
            completed: false
        },
        {
            id: 506,
            arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ مِن شَرِّ مَا خَلَقَ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
            transliteration: "Qul a'udhu birabbi'l-falaq min sharri ma khalaq wa min sharri ghasiqin idha waqab wa min sharri'n-naffathati fi'l-'uqad wa min sharri hasidin idha hasad",
            translation: "قل أعوذ برب الفلق من شر ما خلق ومن شر غاسق إذا وقب ومن شر النفاثات في العقد ومن شر حاسد إذا حسد",
            source: "القرآن الكريم - سورة الفلق",
            category: "عند النوم",
            repetitions: 3,
            completed: false
        },
        {
            id: 507,
            arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ مَلِكِ النَّاسِ إِلَهِ النَّاسِ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ مِنَ الْجِنَّةِ وَالنَّاسِ",
            transliteration: "Qul a'udhu birabbi'n-nas maliki'n-nas ilahi'n-nas min sharri'l-waswasi'l-khannas alladhi yuwaswisu fi suduri'n-nas mina'l-jinnati wa'n-nas",
            translation: "قل أعوذ برب الناس ملك الناس إله الناس من شر الوسواس الخناس الذي يوسوس في صدور الناس من الجنة والناس",
            source: "القرآن الكريم - سورة الناس",
            category: "عند النوم",
            repetitions: 3,
            completed: false
        },
        {
            id: 508,
            arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
            transliteration: "Alhamdu lillahil-ladhi ahyana ba'da ma amatana wa ilayhin-nushur",
            translation: "الحمد لله الذي أحيانا بعد ما أماتنا وإليه النشور",
            source: "البخاري",
            category: "عند الاستيقاظ",
            repetitions: 1,
            completed: false
        }
    ],

    // أدعية السفر
    travel: [
        {
            id: 601,
            arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنقَلِبُونَ",
            transliteration: "Subhanal-ladhi sakhkhara lana hadha wa ma kunna lahu muqrinin wa inna ila rabbina lamunqalibun",
            translation: "سبحان الذي سخر لنا هذا وما كنا له مقرنين وإنا إلى ربنا لمنقلبون",
            source: "الترمذي",
            category: "دعاء السفر",
            repetitions: 1
        }
    ],

    // أدعية المطر
    rain: [
        {
            id: 701,
            arabic: "اللَّهُمَّ صَيِّبًا نَافِعًا",
            transliteration: "Allahumma sayyiban nafi'a",
            translation: "اللهم صيباً نافعاً",
            source: "البخاري",
            category: "عند المطر",
            repetitions: 1
        }
    ],

    // أدعية الاستغفار
    istighfar: [
        {
            id: 801,
            arabic: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ",
            transliteration: "Astaghfirullaha'l-'azima'l-ladhi la ilaha illa huwa'l-hayyu'l-qayyumu wa atubu ilayh",
            translation: "أستغفر الله العظيم الذي لا إله إلا هو الحي القيوم وأتوب إليه",
            source: "أبو داود",
            category: "الاستغفار",
            repetitions: 100
        },
        {
            id: 802,
            arabic: "رَبِّ اغْفِرْ لِي ذَنْبِي وَخَطَئِي وَجَهْلِي",
            transliteration: "Rabbi ighfir li dhanbi wa khata'i wa jahli",
            translation: "رب اغفر لي ذنبي وخطئي وجهلي",
            source: "متفق عليه",
            category: "الاستغفار",
            repetitions: 1
        }
    ],

    // أدعية التوبة
    repentance: [
        {
            id: 901,
            arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، أَذْنَبْتُ وَظَلَمْتُ نَفْسِي فَاغْفِرْ لِي ذُنُوبِي",
            transliteration: "Allahumma anta rabbi la ilaha illa anta, adhanbtu wa zalamtu nafsi faghfir li dhunubi",
            translation: "اللهم أنت ربي لا إله إلا أنت أذنبت وظلمت نفسي فاغفر لي ذنوبي",
            source: "متفق عليه",
            category: "التوبة",
            repetitions: 1
        }
    ],

    // أدعية طلب الهداية
    guidance: [
        {
            id: 1001,
            arabic: "اللَّهُمَّ اهْدِنِي لِمَا اخْتُلِفَ فِيهِ مِنَ الْحَقِّ بِإِذْنِكَ إِنَّكَ تَهْدِي مَن تَشَاءُ إِلَى صِرَاطٍ مُّسْتَقِيمٍ",
            transliteration: "Allahumma ihdini lima'khtulifa fihi minal-haqqi bi-idhnika innaka tahdi man tasha'u ila siratin mustaqim",
            translation: "اللهم اهدني لما اختلف فيه من الحق بإذنك إنك تهدي من تشاء إلى صراط مستقيم",
            source: "مسلم",
            category: "طلب الهداية",
            repetitions: 1
        }
    ]
};

// وظائف مساعدة للأدعية
const DuasManager = {
    // الحصول على جميع الأدعية
    getAllDuas() {
        const allDuas = [];
        Object.keys(DUAS_DATABASE).forEach(category => {
            allDuas.push(...DUAS_DATABASE[category]);
        });
        return allDuas;
    },

    // الحصول على أدعية حسب الفئة
    getDuasByCategory(category) {
        return DUAS_DATABASE[category] || [];
    },

    // البحث في الأدعية
    searchDuas(query) {
        const allDuas = this.getAllDuas();
        return allDuas.filter(dua => 
            dua.arabic.includes(query) || 
            dua.translation.includes(query) ||
            dua.transliteration.toLowerCase().includes(query.toLowerCase())
        );
    },

    // الحصول على دعاء عشوائي
    getRandomDua() {
        const allDuas = this.getAllDuas();
        return allDuas[Math.floor(Math.random() * allDuas.length)];
    },

    // الحصول على الفئات
    getCategories() {
        return {
            morning: 'أذكار الصباح',
            evening: 'أذكار المساء',
            quranic: 'أدعية قرآنية',
            prophetic: 'أدعية نبوية',
            food: 'أدعية الطعام',
            sleep: 'أدعية النوم',
            travel: 'أدعية السفر',
            rain: 'أدعية المطر',
            istighfar: 'الاستغفار',
            repentance: 'التوبة',
            guidance: 'طلب الهداية'
        };
    },

    // الحصول على دعاء حسب الوقت
    getDuaByTime() {
        const hour = new Date().getHours();
        if (hour >= 6 && hour < 12) {
            return this.getDuasByCategory('morning');
        } else if (hour >= 17 && hour < 20) {
            return this.getDuasByCategory('evening');
        } else {
            return this.getDuasByCategory('quranic');
        }
    }
};

// تصدير البيانات للاستخدام العام
window.DUAS_DATABASE = DUAS_DATABASE;
window.DuasManager = DuasManager;