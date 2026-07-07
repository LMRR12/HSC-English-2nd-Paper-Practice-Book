const completingSentenceRules = [

{
id:1,

pattern:"If",

category:"Condition",

structure:"If + Present Indefinite, Subject + will/can/may + V1",

explanation:"Used to express a real or possible condition in the future. The if-clause takes Present Indefinite while the main clause takes a future or modal verb.",

example:"If you study sincerely, you will succeed.",

mistake:"If you will study sincerely, you will succeed.",

correction:"If you study sincerely, you will succeed.",

note:"Never use 'will' in the if-clause of a real future condition."

},

{
id:2,

pattern:"If",

category:"Condition",

structure:"If + Past Indefinite, Subject + would/could/might + V1",

explanation:"Used to express an unreal or imaginary condition in the present.",

example:"If I were rich, I would help the poor.",

mistake:"If I was rich, I would help the poor.",

correction:"If I were rich, I would help the poor.",

note:"Use 'were' instead of 'was' in formal unreal conditions."

},

{
id:3,

pattern:"If",

category:"Condition",

structure:"If + Past Perfect, Subject + would have + V3",

explanation:"Used to express an unreal condition in the past.",

example:"If he had studied hard, he would have passed the exam.",

mistake:"If he studied hard, he would have passed.",

correction:"If he had studied hard, he would have passed the exam.",

note:"Past Perfect is compulsory in the if-clause."

},

{
id:4,

pattern:"Unless",

category:"Condition",

structure:"Unless + Positive Clause, Main Clause",

explanation:"'Unless' means 'if...not'. It introduces a negative condition.",

example:"Unless you work hard, you cannot succeed.",

mistake:"Unless you do not work hard, you cannot succeed.",

correction:"Unless you work hard, you cannot succeed.",

note:"Never use 'not' after 'unless'."

},

{
id:5,

pattern:"Provided that",

category:"Condition",

structure:"Main Clause + provided that + Condition",

explanation:"Expresses a condition that must be fulfilled.",

example:"You can go out provided that you finish your homework.",

mistake:"You can go out provided that you will finish your homework.",

correction:"You can go out provided that you finish your homework.",

note:"Use Present Indefinite after 'provided that'."

},

{
id:6,

pattern:"Providing that",

category:"Condition",

structure:"Main Clause + providing that + Condition",

explanation:"Same meaning and usage as 'provided that'.",

example:"You may join us providing that you arrive on time.",

mistake:"You may join us providing that you will arrive on time.",

correction:"You may join us providing that you arrive on time.",

note:"Do not use future tense after 'providing that'."

},

{
id:7,

pattern:"In case",

category:"Condition",

structure:"Main Clause + in case + Present Clause",

explanation:"Used to express precaution against a possible future event.",

example:"Take an umbrella in case it rains.",

mistake:"Take an umbrella in case it will rain.",

correction:"Take an umbrella in case it rains.",

note:"Use Present Indefinite after 'in case'."

},

{
    id:8,

    pattern:"As long as",

    category:"Condition",

    structure:"Main Clause + as long as + Present Indefinite",

    explanation:"Used to express a condition that must continue to be true.",

    example:"You can stay here as long as you obey the rules.",

    mistake:"You can stay here as long as you will obey the rules.",

    correction:"You can stay here as long as you obey the rules.",

    note:"Use Present Indefinite after 'as long as'."

},

{
    id:9,

    pattern:"So long as",

    category:"Condition",

    structure:"Main Clause + so long as + Present Indefinite",

    explanation:"It has the same meaning as 'as long as' and expresses a condition.",

    example:"You may use my laptop so long as you are careful.",

    mistake:"You may use my laptop so long as you will be careful.",

    correction:"You may use my laptop so long as you are careful.",

    note:"Avoid future tense after 'so long as'."

},

{
    id:10,

    pattern:"On condition that",

    category:"Condition",

    structure:"Main Clause + on condition that + Present Indefinite",

    explanation:"Expresses a condition that must be fulfilled before something happens.",

    example:"I will help you on condition that you tell me the truth.",

    mistake:"I will help you on condition that you will tell me the truth.",

    correction:"I will help you on condition that you tell me the truth.",

    note:"The clause after 'on condition that' takes Present Indefinite."

},

{
    id:11,

    pattern:"Otherwise",

    category:"Condition",

    structure:"Statement + otherwise + Result",

    explanation:"'Otherwise' means 'if not' and introduces the consequence of failing to meet a condition.",

    example:"Study hard; otherwise, you will fail.",

    mistake:"Study hard; otherwise, you fail.",

    correction:"Study hard; otherwise, you will fail.",

    note:"'Otherwise' usually introduces a future consequence."

},

{
    id:12,

    pattern:"Or else",

    category:"Condition",

    structure:"Statement + or else + Result",

    explanation:"Used to warn about the consequence if a condition is not fulfilled.",

    example:"Hurry up, or else you will miss the train.",

    mistake:"Hurry up, or else you miss the train.",

    correction:"Hurry up, or else you will miss the train.",

    note:"Frequently appears in Completing Sentence questions."

},

{
    id:13,

    pattern:"Suppose / Supposing",

    category:"Condition",

    structure:"Suppose + Subject + Past Indefinite",

    explanation:"Used to imagine an unreal or possible situation.",

    example:"Suppose you won a lottery, what would you do?",

    mistake:"Suppose you win a lottery, what would you do?",

    correction:"Suppose you won a lottery, what would you do?",

    note:"Usually followed by a hypothetical result."

},

{
    id:14,

    pattern:"Even if",

    category:"Condition",

    structure:"Even if + Present Indefinite, Main Clause",

    explanation:"Expresses that the result will remain unchanged despite the condition.",

    example:"Even if it rains, we will play.",

    mistake:"Even if it will rain, we will play.",

    correction:"Even if it rains, we will play.",

    note:"Do not use 'will' in the 'even if' clause."

},

{
    id:15,

    pattern:"Whether...or",

    category:"Condition",

    structure:"Whether + Clause + or + Clause",

    explanation:"Used when the result is the same regardless of two possible situations.",

    example:"Whether you like it or not, you have to obey the rules.",

    mistake:"Whether you like it or don't, you have to obey the rules.",

    correction:"Whether you like it or not, you have to obey the rules.",

    note:"A very common HSC board pattern."
},

,

{
    id:16,

    pattern:"When",

    category:"Time",

    structure:"When + Present Indefinite, Future/Imperative",

    explanation:"'When' refers to a future time. The subordinate clause takes Present Indefinite although the meaning is future.",

    example:"When the rain stops, we will go out.",

    mistake:"When the rain will stop, we will go out.",

    correction:"When the rain stops, we will go out.",

    note:"Never use 'will' after 'when' to express future time."

},

{
    id:17,

    pattern:"While",

    category:"Time",

    structure:"While + Past Continuous, Past Continuous/Simple Past",

    explanation:"'While' shows that two actions were happening at the same time.",

    example:"While I was reading, my brother was watching TV.",

    mistake:"While I read, my brother watched TV.",

    correction:"While I was reading, my brother was watching TV.",

    note:"Usually followed by a continuous tense."

},

{
    id:18,

    pattern:"As",

    category:"Time",

    structure:"As + Clause, Clause",

    explanation:"'As' means 'while' or 'at the same time that' when two actions happen simultaneously.",

    example:"As I was leaving the house, the phone rang.",

    mistake:"As I left the house, the phone was ringing.",

    correction:"As I was leaving the house, the phone rang.",

    note:"Context determines whether 'as' means time, reason or comparison."

},

{
    id:19,

    pattern:"Before",

    category:"Time",

    structure:"Before + Clause, Main Clause",

    explanation:"'Before' indicates that one action happened earlier than another.",

    example:"Finish your homework before you go outside.",

    mistake:"Finish your homework before you will go outside.",

    correction:"Finish your homework before you go outside.",

    note:"Do not use future tense after 'before'."

},

{
    id:20,

    pattern:"After",

    category:"Time",

    structure:"After + Clause, Main Clause",

    explanation:"Shows that one action follows another.",

    example:"After he had finished the work, he went home.",

    mistake:"After he finished the work, he had gone home.",

    correction:"After he had finished the work, he went home.",

    note:"Past Perfect often emphasizes the earlier action."

},

{
    id:21,

    pattern:"Until / Till",

    category:"Time",

    structure:"Main Clause + until/till + Clause",

    explanation:"Expresses continuation up to a particular time.",

    example:"Wait here until I return.",

    mistake:"Wait here until I will return.",

    correction:"Wait here until I return.",

    note:"Use Present Indefinite after 'until' for future meaning."

},

{
    id:22,

    pattern:"As soon as",

    category:"Time",

    structure:"As soon as + Present Indefinite, Future",

    explanation:"Shows that one action happens immediately after another.",

    example:"As soon as he arrives, we will start the meeting.",

    mistake:"As soon as he will arrive, we will start the meeting.",

    correction:"As soon as he arrives, we will start the meeting.",

    note:"No future tense after 'as soon as'."

},

{
    id:23,

    pattern:"No sooner...than",

    category:"Time",

    structure:"No sooner had + Subject + V3 + than + Subject + Past Indefinite",

    explanation:"Shows that one action happened immediately before another.",

    example:"No sooner had I reached the station than the train left.",

    mistake:"No sooner I reached the station than the train left.",

    correction:"No sooner had I reached the station than the train left.",

    note:"Requires inversion with 'had'."

},

{
    id:24,

    pattern:"Hardly...when",

    category:"Time",

    structure:"Hardly had + Subject + V3 + when + Subject + Past Indefinite",

    explanation:"Indicates that one event occurred immediately after another.",

    example:"Hardly had the teacher entered the class when the students became silent.",

    mistake:"Hardly the teacher had entered the class when the students became silent.",

    correction:"Hardly had the teacher entered the class when the students became silent.",

    note:"Remember the inversion after 'Hardly'."

},

{
    id:25,

    pattern:"Scarcely...when",

    category:"Time",

    structure:"Scarcely had + Subject + V3 + when + Subject + Past Indefinite",

    explanation:"Used to express that one event happened almost immediately after another.",

    example:"Scarcely had I closed the door when somebody knocked.",

    mistake:"Scarcely I had closed the door when somebody knocked.",

    correction:"Scarcely had I closed the door when somebody knocked.",

    note:"This is another common inversion pattern in HSC examinations."

},

,

{
    id:26,

    pattern:"So that",

    category:"Purpose",

    structure:"Main Clause + so that + Subject + can/could/may/might + V1",

    explanation:"Used to express purpose. 'Can/May' is used for present or future purpose, while 'Could/Might' is used for past purpose.",

    example:"He studies hard so that he can secure a good result.",

    mistake:"He studies hard so that he will secure a good result.",

    correction:"He studies hard so that he can secure a good result.",

    note:"After 'so that', generally use can, could, may or might instead of will."

},

{
    id:27,

    pattern:"In order that",

    category:"Purpose",

    structure:"Main Clause + in order that + Subject + can/could + V1",

    explanation:"Expresses the purpose of an action. It is more formal than 'so that'.",

    example:"The teacher explained the lesson in order that everyone could understand it.",

    mistake:"The teacher explained the lesson in order that everyone would understand it.",

    correction:"The teacher explained the lesson in order that everyone could understand it.",

    note:"Frequently interchangeable with 'so that'."

},

{
    id:28,

    pattern:"In order to",

    category:"Purpose",

    structure:"Subject + Verb + in order to + V1",

    explanation:"Used to express purpose before a verb.",

    example:"He works hard in order to support his family.",

    mistake:"He works hard in order that support his family.",

    correction:"He works hard in order to support his family.",

    note:"Always followed by the base form of the verb."

},

{
    id:29,

    pattern:"So as to",

    category:"Purpose",

    structure:"Subject + Verb + so as to + V1",

    explanation:"Used to express purpose. It has nearly the same meaning as 'in order to'.",

    example:"She saved money so as to buy a laptop.",

    mistake:"She saved money so as buying a laptop.",

    correction:"She saved money so as to buy a laptop.",

    note:"Always use 'to' after 'so as'."

},

{
    id:30,

    pattern:"Lest",

    category:"Purpose",

    structure:"Main Clause + lest + Subject + should + V1",

    explanation:"'Lest' means 'for fear that'. It expresses a negative purpose.",

    example:"Walk carefully lest you should fall.",

    mistake:"Walk carefully lest you fall down.",

    correction:"Walk carefully lest you should fall.",

    note:"'Should' is traditionally used after 'lest' in HSC grammar."

},

{
    id:31,

    pattern:"For fear that",

    category:"Purpose",

    structure:"Main Clause + for fear that + Subject + may/might/should + V1",

    explanation:"Used to express fear that something undesirable may happen.",

    example:"He spoke softly for fear that he might wake the baby.",

    mistake:"He spoke softly for fear that he woke the baby.",

    correction:"He spoke softly for fear that he might wake the baby.",

    note:"Very similar in meaning to 'lest'."

},

{
    id:32,

    pattern:"Too...to",

    category:"Result",

    structure:"Too + Adjective + to + V1",

    explanation:"Shows that something is excessive, making another action impossible.",

    example:"The box is too heavy to lift.",

    mistake:"The box is too heavy that I cannot lift it.",

    correction:"The box is too heavy to lift.",

    note:"Very common transformation in HSC."

},

{
    id:33,

    pattern:"Enough...to",

    category:"Result",

    structure:"Adjective + enough + to + V1",

    explanation:"Shows that someone or something has a sufficient quality to perform an action.",

    example:"She is old enough to vote.",

    mistake:"She is enough old to vote.",

    correction:"She is old enough to vote.",

    note:"'Enough' comes after adjectives but before nouns."

},

{
    id:34,

    pattern:"So...that",

    category:"Result",

    structure:"So + Adjective/Adverb + that + Clause",

    explanation:"Expresses the result of a degree or intensity.",

    example:"He was so tired that he fell asleep immediately.",

    mistake:"He was so tired to sleep.",

    correction:"He was so tired that he fell asleep immediately.",

    note:"Use 'that' after 'so'."

},

{
    id:35,

    pattern:"Such...that",

    category:"Result",

    structure:"Such + (a/an) + Adjective + Noun + that + Clause",

    explanation:"Used to emphasize the quality of a noun that leads to a result.",

    example:"It was such a beautiful day that we went for a picnic.",

    mistake:"It was so beautiful day that we went for a picnic.",

    correction:"It was such a beautiful day that we went for a picnic.",

    note:"Use 'such' before noun phrases and 'so' before adjectives."
},

,

{
    id:36,

    pattern:"As...as",

    category:"Comparison",

    structure:"As + Adjective/Adverb + as",

    explanation:"Used to show that two persons or things are equal in quality or degree.",

    example:"He is as honest as his father.",

    mistake:"He is as honest than his father.",

    correction:"He is as honest as his father.",

    note:"Always use 'as...as' to express equality."

},

{
    id:37,

    pattern:"Not so/as...as",

    category:"Comparison",

    structure:"Not so/as + Adjective + as",

    explanation:"Used to compare two persons or things when one possesses a quality to a lesser degree.",

    example:"Gold is not so cheap as silver.",

    mistake:"Gold is not so cheap than silver.",

    correction:"Gold is not so cheap as silver.",

    note:"Use 'as', never 'than'."

},

{
    id:38,

    pattern:"Comparative...than",

    category:"Comparison",

    structure:"Comparative Adjective + than",

    explanation:"Used to compare two persons, places or things.",

    example:"Rahim is taller than Karim.",

    mistake:"Rahim is more taller than Karim.",

    correction:"Rahim is taller than Karim.",

    note:"Do not use 'more' before a comparative adjective."

},

{
    id:39,

    pattern:"The...the",

    category:"Comparison",

    structure:"The + Comparative..., the + Comparative...",

    explanation:"Shows that one thing changes because another thing changes.",

    example:"The more you read, the more you learn.",

    mistake:"More you read, more you learn.",

    correction:"The more you read, the more you learn.",

    note:"Both clauses begin with 'the'."

},

{
    id:40,

    pattern:"Would rather",

    category:"Preference",

    structure:"Subject + would rather + V1 + than + V1",

    explanation:"Used to express preference between two actions.",

    example:"I would rather stay home than go outside.",

    mistake:"I would rather to stay home than go outside.",

    correction:"I would rather stay home than go outside.",

    note:"Use the base form of the verb after 'would rather'."

},

{
    id:41,

    pattern:"Would rather (Different Subjects)",

    category:"Preference",

    structure:"Subject + would rather + Subject + Past Indefinite",

    explanation:"Used when the preferred action is to be performed by another person.",

    example:"I would rather you stayed at home.",

    mistake:"I would rather you stay at home.",

    correction:"I would rather you stayed at home.",

    note:"Use Past Indefinite after 'would rather' when the subjects are different."

},

{
    id:42,

    pattern:"Had better",

    category:"Preference",

    structure:"Subject + had better + V1",

    explanation:"Used to give advice or express what is advisable.",

    example:"You had better consult a doctor.",

    mistake:"You had better to consult a doctor.",

    correction:"You had better consult a doctor.",

    note:"Never use 'to' after 'had better'."

},

{
    id:43,

    pattern:"Would prefer",

    category:"Preference",

    structure:"Subject + would prefer + to + V1",

    explanation:"Used to express preference for one action over another.",

    example:"She would prefer to stay at home.",

    mistake:"She would prefer stay at home.",

    correction:"She would prefer to stay at home.",

    note:"Always use 'to + V1' after 'would prefer'."

},

{
    id:44,

    pattern:"Rather than",

    category:"Preference",

    structure:"Subject + V1 + rather than + V1",

    explanation:"Used to indicate one choice in preference to another.",

    example:"He walked rather than take a bus.",

    mistake:"He walked rather than took a bus.",

    correction:"He walked rather than take a bus.",

    note:"Use the base form of the verb after 'rather than'."

},

{
    id:45,

    pattern:"Prefer...to",

    category:"Preference",

    structure:"Prefer + Noun/Gerund + to + Noun/Gerund",

    explanation:"Used to compare two things or activities and express preference.",

    example:"I prefer reading to watching television.",

    mistake:"I prefer reading than watching television.",

    correction:"I prefer reading to watching television.",

    note:"Use 'to', never 'than', after 'prefer'."

},

,

{
    id:46,

    pattern:"Wish (Present)",

    category:"Wish & Subjunctive",

    structure:"Subject + wish + Subject + Past Indefinite",

    explanation:"Used to express a wish about a present situation that is unreal or impossible.",

    example:"I wish I knew the answer.",

    mistake:"I wish I know the answer.",

    correction:"I wish I knew the answer.",

    note:"After 'wish', use Past Indefinite for present unreal situations."

},

{
    id:47,

    pattern:"Wish (Past)",

    category:"Wish & Subjunctive",

    structure:"Subject + wish + Subject + Past Perfect",

    explanation:"Used to express regret about something that happened in the past.",

    example:"She wishes she had studied harder.",

    mistake:"She wishes she studied harder.",

    correction:"She wishes she had studied harder.",

    note:"Use Past Perfect after 'wish' to express past regret."

},

{
    id:48,

    pattern:"Wish (Future)",

    category:"Wish & Subjunctive",

    structure:"Subject + wish + Subject + would + V1",

    explanation:"Used to express annoyance or hope that someone will change a future behavior.",

    example:"I wish you would stop making noise.",

    mistake:"I wish you will stop making noise.",

    correction:"I wish you would stop making noise.",

    note:"Never use 'will' after 'wish'."

},

{
    id:49,

    pattern:"If only",

    category:"Wish & Subjunctive",

    structure:"If only + Past Indefinite / Past Perfect",

    explanation:"'If only' expresses a strong wish or regret.",

    example:"If only I were a bird!",

    mistake:"If only I am a bird!",

    correction:"If only I were a bird!",

    note:"Use the same tense rules as 'wish'."

},

{
    id:50,

    pattern:"It's time",

    category:"Wish & Subjunctive",

    structure:"It's time + Subject + Past Indefinite",

    explanation:"Used to say that something should already have happened.",

    example:"It's time we started our journey.",

    mistake:"It's time we start our journey.",

    correction:"It's time we started our journey.",

    note:"Use Past Indefinite although the meaning refers to the present."

},

{
    id:51,

    pattern:"It's high time",

    category:"Wish & Subjunctive",

    structure:"It's high time + Subject + Past Indefinite",

    explanation:"Expresses that something is already overdue and should happen immediately.",

    example:"It's high time you took your studies seriously.",

    mistake:"It's high time you take your studies seriously.",

    correction:"It's high time you took your studies seriously.",

    note:"A very common HSC board pattern."

},

{
    id:52,

    pattern:"As if",

    category:"Subjunctive",

    structure:"As if + Past Indefinite / Past Perfect",

    explanation:"Used to describe an unreal appearance or situation.",

    example:"He talks as if he knew everything.",

    mistake:"He talks as if he knows everything.",

    correction:"He talks as if he knew everything.",

    note:"Use Past Indefinite when the comparison is unreal."

},

{
    id:53,

    pattern:"As though",

    category:"Subjunctive",

    structure:"As though + Past Indefinite / Past Perfect",

    explanation:"Has the same meaning and use as 'as if'.",

    example:"She looked as though she had seen a ghost.",

    mistake:"She looked as though she saw a ghost.",

    correction:"She looked as though she had seen a ghost.",

    note:"Past Perfect is used when referring to an unreal past event."

},

{
    id:54,

    pattern:"Suppose that",

    category:"Subjunctive",

    structure:"Suppose that + Past Indefinite",

    explanation:"Used to imagine an unreal or hypothetical situation.",

    example:"Suppose that you were the principal. What would you do?",

    mistake:"Suppose that you are the principal. What would you do?",

    correction:"Suppose that you were the principal. What would you do?",

    note:"Often followed by 'would'."

},

{
    id:55,

    pattern:"Would sooner",

    category:"Preference",

    structure:"Subject + would sooner + V1 + than + V1",

    explanation:"Used to express preference. It has nearly the same meaning as 'would rather'.",

    example:"I would sooner walk than wait for the bus.",

    mistake:"I would sooner to walk than wait.",

    correction:"I would sooner walk than wait for the bus.",

    note:"Always use the base form of the verb after 'would sooner'."

},

,

{
    id:56,

    pattern:"Both...and",

    category:"Correlative",

    structure:"Both + Noun/Pronoun + and + Noun/Pronoun",

    explanation:"Used to join two persons, things or ideas. It emphasizes that both are included.",

    example:"Both Rahim and Karim attended the meeting.",

    mistake:"Both Rahim as well as Karim attended the meeting.",

    correction:"Both Rahim and Karim attended the meeting.",

    note:"Use 'and' after 'both'."

},

{
    id:57,

    pattern:"Either...or",

    category:"Correlative",

    structure:"Either + Noun/Clause + or + Noun/Clause",

    explanation:"Used when one of two alternatives is possible.",

    example:"Either you or your brother has to do the work.",

    mistake:"Either you or your brother have to do the work.",

    correction:"Either you or your brother has to do the work.",

    note:"The verb agrees with the subject nearest to it."

},

{
    id:58,

    pattern:"Neither...nor",

    category:"Correlative",

    structure:"Neither + Noun/Clause + nor + Noun/Clause",

    explanation:"Used when both alternatives are negative.",

    example:"Neither the teacher nor the students were present.",

    mistake:"Neither the teacher or the students were present.",

    correction:"Neither the teacher nor the students were present.",

    note:"The verb agrees with the nearest subject."

},

{
    id:59,

    pattern:"Not only...but also",

    category:"Correlative",

    structure:"Not only + Clause + but also + Clause",

    explanation:"Used to add emphasis by mentioning two related ideas.",

    example:"He is not only intelligent but also hardworking.",

    mistake:"He is not only intelligent and also hardworking.",

    correction:"He is not only intelligent but also hardworking.",

    note:"Maintain parallel structure after both parts."

},

{
    id:60,

    pattern:"Whether...or",

    category:"Correlative",

    structure:"Whether + Clause + or + Clause",

    explanation:"Used to express two alternatives without affecting the result.",

    example:"Whether you agree or not, the decision will remain unchanged.",

    mistake:"Whether you agree nor not, the decision will remain unchanged.",

    correction:"Whether you agree or not, the decision will remain unchanged.",

    note:"Always pair 'whether' with 'or'."

},

{
    id:61,

    pattern:"Because",

    category:"Reason",

    structure:"Main Clause + because + Clause",

    explanation:"Used to give the reason for an action or event.",

    example:"He failed because he was careless.",

    mistake:"He failed because of he was careless.",

    correction:"He failed because he was careless.",

    note:"'Because' is followed by a clause, not a noun."

},

{
    id:62,

    pattern:"Since / As",

    category:"Reason",

    structure:"Since/As + Clause, Main Clause",

    explanation:"Used to express a known or obvious reason.",

    example:"Since it was raining, we stayed indoors.",

    mistake:"Since of the rain, we stayed indoors.",

    correction:"Since it was raining, we stayed indoors.",

    note:"Use a complete clause after 'since' and 'as'."

},

{
    id:63,

    pattern:"Although / Though",

    category:"Contrast",

    structure:"Although/Though + Clause, Main Clause",

    explanation:"Used to express contrast between two ideas.",

    example:"Although he is poor, he is honest.",

    mistake:"Although he is poor but he is honest.",

    correction:"Although he is poor, he is honest.",

    note:"Never use 'but' with 'although' or 'though'."

},

{
    id:64,

    pattern:"Even though",

    category:"Contrast",

    structure:"Even though + Clause, Main Clause",

    explanation:"Expresses a stronger contrast than 'although'.",

    example:"Even though he was ill, he attended the class.",

    mistake:"Even though he was ill but he attended the class.",

    correction:"Even though he was ill, he attended the class.",

    note:"Do not use 'but' in the main clause."

},

{
    id:65,

    pattern:"Despite / In spite of",

    category:"Contrast",

    structure:"Despite/In spite of + Noun/Gerund",

    explanation:"Used to express contrast before a noun or gerund.",

    example:"Despite his illness, he attended the meeting.",

    mistake:"Despite he was ill, he attended the meeting.",

    correction:"Despite his illness, he attended the meeting.",

    note:"Use a noun, pronoun or gerund after 'despite' or 'in spite of'."

},

,

{
    id:66,

    pattern:"No matter",

    category:"Advanced Condition",

    structure:"No matter + Wh-word + Clause, Main Clause",

    explanation:"Used to express that something happens regardless of any condition or situation.",

    example:"No matter how hard you try, you cannot please everyone.",

    mistake:"No matter how hard will you try, you cannot please everyone.",

    correction:"No matter how hard you try, you cannot please everyone.",

    note:"Never use 'will' inside the 'no matter' clause."

},

{
    id:67,

    pattern:"Whatever",

    category:"Advanced Condition",

    structure:"Whatever + Clause, Main Clause",

    explanation:"Means 'anything that' or 'regardless of what'.",

    example:"Whatever you do, do it honestly.",

    mistake:"Whatever will you do, do it honestly.",

    correction:"Whatever you do, do it honestly.",

    note:"A very common board pattern."

},

{
    id:68,

    pattern:"Whoever",

    category:"Advanced Condition",

    structure:"Whoever + Verb, Main Clause",

    explanation:"Means 'any person who'.",

    example:"Whoever works hard succeeds.",

    mistake:"Whoever will work hard succeeds.",

    correction:"Whoever works hard succeeds.",

    note:"Use Present Indefinite in the clause."

},

{
    id:69,

    pattern:"Whenever",

    category:"Advanced Time",

    structure:"Whenever + Clause, Main Clause",

    explanation:"Means 'every time that'.",

    example:"Whenever I see him, he smiles.",

    mistake:"Whenever I will see him, he smiles.",

    correction:"Whenever I see him, he smiles.",

    note:"Avoid future tense after 'whenever'."

},

{
    id:70,

    pattern:"Wherever",

    category:"Advanced Place",

    structure:"Wherever + Clause, Main Clause",

    explanation:"Means 'at any place where'.",

    example:"Wherever he goes, he makes friends.",

    mistake:"Wherever he will go, he makes friends.",

    correction:"Wherever he goes, he makes friends.",

    note:"Frequently appears in HSC Completing Sentence."

},

{
    id:71,

    pattern:"Once",

    category:"Time",

    structure:"Once + Clause, Main Clause",

    explanation:"Means 'as soon as' or 'after'.",

    example:"Once you understand the rule, the exercise becomes easy.",

    mistake:"Once you will understand the rule, the exercise becomes easy.",

    correction:"Once you understand the rule, the exercise becomes easy.",

    note:"Do not use future tense after 'once'."

},

{
    id:72,

    pattern:"By the time",

    category:"Time",

    structure:"By the time + Clause, Main Clause",

    explanation:"Shows that one action will be completed before another time.",

    example:"By the time we reached the station, the train had left.",

    mistake:"By the time we reached the station, the train left.",

    correction:"By the time we reached the station, the train had left.",

    note:"Past Perfect is commonly used."

},

{
    id:73,

    pattern:"The moment",

    category:"Time",

    structure:"The moment + Clause, Main Clause",

    explanation:"Means 'as soon as'.",

    example:"The moment he saw me, he smiled.",

    mistake:"The moment he had seen me, he smiled.",

    correction:"The moment he saw me, he smiled.",

    note:"Very useful alternative to 'as soon as'."

},

{
    id:74,

    pattern:"Only if",

    category:"Condition",

    structure:"Main Clause + only if + Clause",

    explanation:"Expresses that something will happen only under one condition.",

    example:"You will succeed only if you work hard.",

    mistake:"You will succeed only if you will work hard.",

    correction:"You will succeed only if you work hard.",

    note:"No future tense after 'only if'."

},

{
    id:75,

    pattern:"Now that",

    category:"Reason",

    structure:"Now that + Clause, Main Clause",

    explanation:"Means 'since' or 'because now'.",

    example:"Now that the rain has stopped, we can go outside.",

    mistake:"Now that the rain will stop, we can go outside.",

    correction:"Now that the rain has stopped, we can go outside.",

    note:"Often expresses a newly changed situation."

},

{
    id:76,

    pattern:"Had (Omitting If)",

    category:"Inversion",

    structure:"Had + Subject + V3, Subject + would have + V3",

    explanation:"In formal English, 'if' may be omitted by placing 'had' before the subject.",

    example:"Had I known the truth, I would have helped you.",

    mistake:"Had I knew the truth, I would have helped you.",

    correction:"Had I known the truth, I would have helped you.",

    note:"Equivalent to 'If I had known...'."

},

{
    id:77,

    pattern:"Were (Omitting If)",

    category:"Inversion",

    structure:"Were + Subject + Complement, Subject + would + V1",

    explanation:"Used instead of 'if' in unreal present conditions.",

    example:"Were I a king, I would help the poor.",

    mistake:"Were I am a king, I would help the poor.",

    correction:"Were I a king, I would help the poor.",

    note:"Equivalent to 'If I were...'."

},

{
    id:78,

    pattern:"Should (Omitting If)",

    category:"Inversion",

    structure:"Should + Subject + V1, Main Clause",

    explanation:"Used instead of 'if' for possible future conditions.",

    example:"Should you need any help, call me.",

    mistake:"Should you needed any help, call me.",

    correction:"Should you need any help, call me.",

    note:"A formal alternative to 'If you need...'."

},

{
    id:79,

    pattern:"Even if",

    category:"Condition",

    structure:"Even if + Clause, Main Clause",

    explanation:"Shows that the result remains the same despite the condition.",

    example:"Even if you apologize, I will not change my decision.",

    mistake:"Even if you will apologize, I will not change my decision.",

    correction:"Even if you apologize, I will not change my decision.",

    note:"Do not use 'will' after 'even if'."

},

{
    id:80,

    pattern:"Whether...or not",

    category:"Correlative",

    structure:"Whether + Clause + or not, Main Clause",

    explanation:"Shows that the result is independent of the condition.",

    example:"Whether you agree or not, we shall continue the work.",

    mistake:"Whether you agree nor not, we shall continue the work.",

    correction:"Whether you agree or not, we shall continue the work.",

    note:"A very common HSC and university admission pattern."

}

];