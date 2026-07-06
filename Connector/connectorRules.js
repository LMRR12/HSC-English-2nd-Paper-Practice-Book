// ===========================================
// HSC English 2nd Paper Practice Book
// Connectors Database
// ===========================================

const connectorRules = [

/*==================================================
REASON
==================================================*/

/*==================================================
REASON
==================================================*/

{
    id:1,
    category:"Reason",
    title:"Because",
    structure:"Because + clause",
    explanation:"'Because' is used to introduce the direct reason of an action.",
    example:"He stayed at home because he was ill.",
    note:"Always followed by a complete clause (Subject + Verb)."
},

{
    id:2,
    category:"Reason",
    title:"Because of",
    structure:"Because of + noun / pronoun / gerund",
    explanation:"'Because of' is followed by a noun or noun phrase.",
    example:"The match was cancelled because of heavy rain.",
    note:"Never use a complete clause after 'because of'."
},

{
    id:3,
    category:"Reason",
    title:"Since",
    structure:"Since + clause",
    explanation:"'Since' may mean 'because' when giving a reason.",
    example:"Since you are busy, I will do the work.",
    note:"Can also express time depending on the context."
},

{
    id:4,
    category:"Reason",
    title:"As",
    structure:"As + clause",
    explanation:"'As' can also introduce the reason of an action.",
    example:"As it was raining, we stayed inside.",
    note:"May also express time."
},

{
    id:5,
    category:"Reason",
    title:"For",
    structure:"Clause, for + clause",
    explanation:"'For' is a formal connector meaning 'because'.",
    example:"He could not attend, for he was sick.",
    note:"Mostly used in formal or literary English."
},

{
    id:6,
    category:"Reason",
    title:"Owing to",
    structure:"Owing to + noun / gerund",
    explanation:"'Owing to' expresses cause or reason.",
    example:"The flight was delayed owing to dense fog.",
    note:"Formal equivalent of 'because of'."
},

{
    id:7,
    category:"Reason",
    title:"Due to",
    structure:"Due to + noun phrase",
    explanation:"Means 'because of'.",
    example:"The school remained closed due to heavy rainfall.",
    note:"Followed by a noun phrase."
},

{
    id:8,
    category:"Reason",
    title:"On account of",
    structure:"On account of + noun / gerund",
    explanation:"Used to express the cause of something.",
    example:"The game was postponed on account of bad weather.",
    note:"Formal expression."
},

{
    id:9,
    category:"Reason",
    title:"As a result of",
    structure:"As a result of + noun / gerund",
    explanation:"Shows the cause behind a consequence.",
    example:"Many houses collapsed as a result of the earthquake.",
    note:"Do not confuse with 'As a result'."
},

{
    id:10,
    category:"Reason",
    title:"Thanks to",
    structure:"Thanks to + noun",
    explanation:"Usually expresses a positive reason.",
    example:"Thanks to your help, I finished the project.",
    note:"Generally used for favourable results."
},

/*==================================================
ADDITION
==================================================*/

{
    id:11,
    category:"Addition",
    title:"And",
    structure:"Clause/Word + and + Clause/Word",
    explanation:"Joins two similar ideas or statements.",
    example:"He is honest and hardworking.",
    note:"The most common coordinating conjunction."
},

{
    id:12,
    category:"Addition",
    title:"Also",
    structure:"Subject + also + verb",
    explanation:"Adds another similar idea.",
    example:"She also dances beautifully.",
    note:"Usually comes before the main verb."
},

{
    id:13,
    category:"Addition",
    title:"Besides",
    structure:"Besides + noun / Sentence. Besides, sentence.",
    explanation:"Adds extra information.",
    example:"Besides English, he knows French.",
    note:"May function as both a preposition and an adverb."
},

{
    id:14,
    category:"Addition",
    title:"Moreover",
    structure:"Sentence. Moreover, sentence.",
    explanation:"Introduces an additional important point.",
    example:"He is intelligent. Moreover, he is very polite.",
    note:"Widely used in formal writing."
},

{
    id:15,
    category:"Addition",
    title:"Furthermore",
    structure:"Sentence. Furthermore, sentence.",
    explanation:"Adds another formal supporting idea.",
    example:"Furthermore, this method saves time.",
    note:"Common in essays and reports."
},

{
    id:16,
    category:"Addition",
    title:"In addition",
    structure:"Sentence. In addition, sentence.",
    explanation:"Introduces extra information.",
    example:"In addition, students will receive free notes.",
    note:"Formal connector."
},

{
    id:17,
    category:"Addition",
    title:"Additionally",
    structure:"Sentence. Additionally, sentence.",
    explanation:"Adds further information.",
    example:"Additionally, every participant received a certificate.",
    note:"Frequently used in academic writing."
},

{
    id:18,
    category:"Addition",
    title:"Not only...but also",
    structure:"Not only + A + but also + B",
    explanation:"Adds emphasis by connecting two important ideas.",
    example:"He is not only talented but also hardworking.",
    note:"The verb agrees according to the subject nearest to it."
},

{
    id:19,
    category:"Addition",
    title:"As well as",
    structure:"A + as well as + B",
    explanation:"Connects two similar ideas.",
    example:"She speaks English as well as Bangla.",
    note:"The verb agrees with the first subject."
},

{
    id:20,
    category:"Addition",
    title:"Too",
    structure:"Sentence + too",
    explanation:"Means 'also', generally used at the end of a sentence.",
    example:"I enjoyed the movie too.",
    note:"Usually placed at the end of affirmative sentences."
},

/*==================================================
CONTRAST
==================================================*/

{
    id:21,
    category:"Contrast",
    title:"Although",
    structure:"Although + clause, main clause.",
    explanation:"Used to show contrast between two ideas.",
    example:"Although he was poor, he was honest.",
    note:"Never use 'but' after although."
},

{
    id:22,
    category:"Contrast",
    title:"Though",
    structure:"Though + clause, main clause.",
    explanation:"Shows contrast. Similar to 'although'.",
    example:"Though she was tired, she continued working.",
    note:"Do not use 'but' with though."
},

{
    id:23,
    category:"Contrast",
    title:"Even though",
    structure:"Even though + clause",
    explanation:"Shows a stronger contrast than although.",
    example:"Even though it was raining, they played football.",
    note:"Used for stronger emphasis."
},

{
    id:24,
    category:"Contrast",
    title:"However",
    structure:"Sentence. However, sentence.",
    explanation:"Introduces an opposite idea.",
    example:"He is rich. However, he is unhappy.",
    note:"Usually followed by a comma."
},

{
    id:25,
    category:"Contrast",
    title:"Nevertheless",
    structure:"Sentence. Nevertheless, sentence.",
    explanation:"Means 'in spite of that'.",
    example:"The road was dangerous. Nevertheless, they continued.",
    note:"Very common in formal writing."
},

{
    id:26,
    category:"Contrast",
    title:"Nonetheless",
    structure:"Sentence. Nonetheless, sentence.",
    explanation:"Very similar to nevertheless.",
    example:"She was exhausted. Nonetheless, she completed the race.",
    note:"Formal connector."
},

{
    id:27,
    category:"Contrast",
    title:"Whereas",
    structure:"Clause whereas clause",
    explanation:"Shows comparison with contrast.",
    example:"He likes tea whereas I prefer coffee.",
    note:"Used between two contrasting clauses."
},

{
    id:28,
    category:"Contrast",
    title:"While",
    structure:"While + clause",
    explanation:"Can show contrast between two ideas.",
    example:"While I enjoy cricket, my brother likes football.",
    note:"Can also express time."
},

{
    id:29,
    category:"Contrast",
    title:"On the other hand",
    structure:"Sentence. On the other hand, sentence.",
    explanation:"Presents an opposite point of view.",
    example:"Cars are fast. On the other hand, bicycles are cheaper.",
    note:"Often used in comparison."
},

{
    id:30,
    category:"Contrast",
    title:"Instead",
    structure:"Sentence. Instead, sentence.",
    explanation:"Shows replacement of one idea by another.",
    example:"He didn't walk. Instead, he took a bus.",
    note:"Do not confuse with 'instead of'."
},

/*==================================================
RESULT
==================================================*/

{
    id:31,
    category:"Result",
    title:"So",
    structure:"Clause, so clause.",
    explanation:"Shows result.",
    example:"He was ill, so he stayed home.",
    note:"Very common in HSC."
},

{
    id:32,
    category:"Result",
    title:"Therefore",
    structure:"Sentence. Therefore, sentence.",
    explanation:"Introduces a logical result.",
    example:"He worked hard. Therefore, he succeeded.",
    note:"Usually separated by commas."
},

{
    id:33,
    category:"Result",
    title:"Thus",
    structure:"Sentence. Thus, sentence.",
    explanation:"Shows result or conclusion.",
    example:"The road was blocked. Thus, we returned home.",
    note:"Formal connector."
},

{
    id:34,
    category:"Result",
    title:"Hence",
    structure:"Sentence. Hence, sentence.",
    explanation:"Means 'for this reason'.",
    example:"The shop was closed. Hence, we came back.",
    note:"Frequently used in academic writing."
},

{
    id:35,
    category:"Result",
    title:"Consequently",
    structure:"Sentence. Consequently, sentence.",
    explanation:"Shows consequence.",
    example:"He ignored the warning. Consequently, he failed.",
    note:"Formal connector."
},

{
    id:36,
    category:"Result",
    title:"As a result",
    structure:"Sentence. As a result, sentence.",
    explanation:"Introduces a consequence.",
    example:"The river flooded. As a result, many villages were submerged.",
    note:"Very common in board exams."
},

{
    id:37,
    category:"Result",
    title:"Accordingly",
    structure:"Sentence. Accordingly, sentence.",
    explanation:"Means 'therefore'.",
    example:"The plan changed. Accordingly, everyone adjusted.",
    note:"Formal usage."
},

{
    id:38,
    category:"Result",
    title:"For this reason",
    structure:"Sentence. For this reason, sentence.",
    explanation:"Introduces the reason behind a result.",
    example:"He was inexperienced. For this reason, he needed training.",
    note:"Useful in compositions."
},

/*==================================================
PURPOSE
==================================================*/

{
    id:39,
    category:"Purpose",
    title:"To",
    structure:"to + verb",
    explanation:"Expresses purpose.",
    example:"He studies hard to pass the examination.",
    note:"Most common purpose connector."
},

{
    id:40,
    category:"Purpose",
    title:"In order to",
    structure:"In order to + verb",
    explanation:"Shows purpose more formally.",
    example:"She saved money in order to buy a laptop.",
    note:"Formal alternative to 'to'."
},

{
    id:41,
    category:"Purpose",
    title:"So that",
    structure:"Main clause + so that + clause",
    explanation:"Shows intended purpose.",
    example:"He spoke slowly so that everyone could understand.",
    note:"Very common in HSC."
},

{
    id:42,
    category:"Purpose",
    title:"For the purpose of",
    structure:"For the purpose of + noun/gerund",
    explanation:"Expresses purpose formally.",
    example:"The meeting was arranged for the purpose of discussion.",
    note:"Mostly used in formal writing."
},

{
    id:43,
    category:"Purpose",
    title:"With a view to",
    structure:"With a view to + gerund",
    explanation:"Means 'for the purpose of'.",
    example:"He joined the course with a view to improving his English.",
    note:"Frequently appears in board exams."
},

/*==================================================
CONDITION
==================================================*/

{
    id:44,
    category:"Condition",
    title:"If",
    structure:"If + clause, main clause.",
    explanation:"'If' is used to express a condition.",
    example:"If you work hard, you will succeed.",
    note:"The most common conditional connector."
},

{
    id:45,
    category:"Condition",
    title:"Unless",
    structure:"Unless + clause, main clause.",
    explanation:"'Unless' means 'if...not'.",
    example:"Unless you study, you will fail.",
    note:"Do not use another 'not' after 'unless'."
},

{
    id:46,
    category:"Condition",
    title:"Provided that",
    structure:"Provided that + clause",
    explanation:"Expresses a condition that must be fulfilled.",
    example:"You can go out provided that you finish your homework.",
    note:"Formal alternative to 'if'."
},

{
    id:47,
    category:"Condition",
    title:"Providing that",
    structure:"Providing that + clause",
    explanation:"Similar in meaning to 'provided that'.",
    example:"Providing that it does not rain, we will play cricket.",
    note:"Frequently used in formal English."
},

{
    id:48,
    category:"Condition",
    title:"As long as",
    structure:"As long as + clause",
    explanation:"Means 'only if' or 'provided that'.",
    example:"You may stay here as long as you remain quiet.",
    note:"Shows a continuing condition."
},

{
    id:49,
    category:"Condition",
    title:"In case",
    structure:"In case + clause",
    explanation:"Shows precaution against a possible situation.",
    example:"Take an umbrella in case it rains.",
    note:"Do not confuse with 'if'."
},

{
    id:50,
    category:"Condition",
    title:"Whether...or",
    structure:"Whether + clause + or + clause",
    explanation:"Expresses alternatives without changing the result.",
    example:"Whether you agree or not, I will continue.",
    note:"Often used in formal writing."
},

{
    id:51,
    category:"Condition",
    title:"Otherwise",
    structure:"Sentence. Otherwise, sentence.",
    explanation:"Means 'if not'.",
    example:"Study hard. Otherwise, you may fail.",
    note:"Very common in HSC exams."
},

/*==================================================
TIME
==================================================*/

{
    id:52,
    category:"Time",
    title:"When",
    structure:"When + clause",
    explanation:"Introduces a specific time.",
    example:"Call me when you arrive.",
    note:"One of the most frequently used time connectors."
},

{
    id:53,
    category:"Time",
    title:"While",
    structure:"While + clause",
    explanation:"Shows two actions happening at the same time.",
    example:"She was cooking while he was reading.",
    note:"Can also express contrast."
},

{
    id:54,
    category:"Time",
    title:"As",
    structure:"As + clause",
    explanation:"Shows two actions happening simultaneously.",
    example:"As I was leaving, he arrived.",
    note:"Can also mean 'because'."
},

{
    id:55,
    category:"Time",
    title:"Before",
    structure:"Before + clause",
    explanation:"Shows an earlier action.",
    example:"Wash your hands before you eat.",
    note:"Very common in board questions."
},

{
    id:56,
    category:"Time",
    title:"After",
    structure:"After + clause",
    explanation:"Shows a later action.",
    example:"After he finished his homework, he went outside.",
    note:"Opposite of 'before'."
},

{
    id:57,
    category:"Time",
    title:"Until",
    structure:"Until + clause",
    explanation:"Shows continuation up to a particular time.",
    example:"Wait here until I return.",
    note:"Often confused with 'unless'."
},

{
    id:58,
    category:"Time",
    title:"Till",
    structure:"Till + clause",
    explanation:"Informal equivalent of 'until'.",
    example:"Stay here till I come back.",
    note:"Both 'till' and 'until' are correct."
},

{
    id:59,
    category:"Time",
    title:"Since",
    structure:"Since + clause",
    explanation:"Shows the starting point of an action.",
    example:"He has lived here since he was a child.",
    note:"Do not confuse with 'since' meaning 'because'."
},

{
    id:60,
    category:"Time",
    title:"As soon as",
    structure:"As soon as + clause",
    explanation:"Shows that one action happens immediately after another.",
    example:"Call me as soon as you reach home.",
    note:"Very common in HSC examinations."
},

/*==================================================
TIME (CONTINUED)
==================================================*/

{
    id:61,
    category:"Time",
    title:"Whenever",
    structure:"Whenever + clause",
    explanation:"Used to mean 'every time that'.",
    example:"Whenever I see him, he smiles.",
    note:"Indicates repeated actions."
},

{
    id:62,
    category:"Time",
    title:"Once",
    structure:"Once + clause",
    explanation:"Means 'as soon as' or 'after'.",
    example:"Once you finish the work, call me.",
    note:"Frequently used in conditional and time clauses."
},

{
    id:63,
    category:"Time",
    title:"The moment",
    structure:"The moment + clause",
    explanation:"Shows that something happens immediately.",
    example:"The moment he entered, everyone stood up.",
    note:"Similar to 'as soon as'."
},

{
    id:64,
    category:"Time",
    title:"Immediately",
    structure:"Immediately + clause",
    explanation:"Means 'as soon as'.",
    example:"Immediately he saw the police, he ran away.",
    note:"Common in formal English."
},

{
    id:65,
    category:"Time",
    title:"Meanwhile",
    structure:"Sentence. Meanwhile, sentence.",
    explanation:"Shows that another action happens during the same period.",
    example:"She was preparing dinner. Meanwhile, her brother cleaned the room.",
    note:"Often connects two simultaneous actions."
},

{
    id:66,
    category:"Time",
    title:"No sooner...than",
    structure:"No sooner + had + subject + V3 + than + clause",
    explanation:"Shows that one action happened immediately before another.",
    example:"No sooner had he reached the station than the train left.",
    note:"Always use 'than', never 'when'."
},

{
    id:67,
    category:"Time",
    title:"Hardly...when",
    structure:"Hardly + had + subject + V3 + when + clause",
    explanation:"Shows immediate sequence of actions.",
    example:"Hardly had I entered the room when the phone rang.",
    note:"Always use 'when', never 'than'."
},

{
    id:68,
    category:"Time",
    title:"Scarcely...before",
    structure:"Scarcely + had + subject + V3 + before + clause",
    explanation:"Expresses that one event happened immediately before another.",
    example:"Scarcely had the meeting begun before the electricity went out.",
    note:"Always pair 'Scarcely' with 'before'."
},

{
    id:69,
    category:"Time",
    title:"By the time",
    structure:"By the time + clause",
    explanation:"Shows that an action was completed before another time.",
    example:"By the time we arrived, the movie had started.",
    note:"Often used with Past Perfect."
},

{
    id:70,
    category:"Time",
    title:"While",
    structure:"While + verb + ing / clause",
    explanation:"Shows simultaneous actions.",
    example:"Please don't talk while I am speaking.",
    note:"Different from 'while' expressing contrast."
},

/*==================================================
COMPARISON
==================================================*/

{
    id:71,
    category:"Comparison",
    title:"As...as",
    structure:"As + adjective + as",
    explanation:"Shows equality in comparison.",
    example:"He is as tall as his brother.",
    note:"Use the base form of the adjective."
},

{
    id:72,
    category:"Comparison",
    title:"Than",
    structure:"Comparative adjective + than",
    explanation:"Used to compare two people or things.",
    example:"Rahim is taller than Karim.",
    note:"Used after comparative adjectives."
},

{
    id:73,
    category:"Comparison",
    title:"Like",
    structure:"Like + noun/pronoun",
    explanation:"Shows similarity.",
    example:"She sings like a professional singer.",
    note:"'Like' is followed by a noun, not a clause."
},

{
    id:74,
    category:"Comparison",
    title:"Unlike",
    structure:"Unlike + noun/pronoun",
    explanation:"Shows difference between two people or things.",
    example:"Unlike his brother, he is very punctual.",
    note:"Opposite of 'like'."
},

{
    id:75,
    category:"Comparison",
    title:"Similarly",
    structure:"Sentence. Similarly, sentence.",
    explanation:"Introduces a similar idea.",
    example:"The first team worked hard. Similarly, the second team performed well.",
    note:"Common in academic writing."
},

{
    id:76,
    category:"Comparison",
    title:"Likewise",
    structure:"Sentence. Likewise, sentence.",
    explanation:"Means 'in the same way'.",
    example:"She enjoys reading. Likewise, her sister loves books.",
    note:"Formal connector."
},

{
    id:77,
    category:"Comparison",
    title:"In the same way",
    structure:"Sentence. In the same way, sentence.",
    explanation:"Shows similarity between ideas.",
    example:"Birds migrate in winter. In the same way, some animals move to warmer places.",
    note:"Useful in descriptive writing."
},

{
    id:78,
    category:"Comparison",
    title:"Compared to",
    structure:"Compared to + noun",
    explanation:"Introduces comparison.",
    example:"Compared to last year, this year's result is better.",
    note:"Common in reports and essays."
},

/*==================================================
SEQUENCE
==================================================*/

{
    id:79,
    category:"Sequence",
    title:"First / Firstly",
    structure:"First/Firstly, sentence.",
    explanation:"Introduces the first point or step.",
    example:"Firstly, we should identify the problem.",
    note:"Useful in paragraphs and compositions."
},

{
    id:80,
    category:"Sequence",
    title:"Second / Secondly",
    structure:"Second/Secondly, sentence.",
    explanation:"Introduces the second point.",
    example:"Secondly, we need to collect the necessary information.",
    note:"Used in ordered explanations."
},

/*==================================================
SEQUENCE (CONTINUED)
==================================================*/

{
    id:81,
    category:"Sequence",
    title:"Then",
    structure:"Sentence. Then, sentence.",
    explanation:"Shows the next step or event.",
    example:"He finished breakfast. Then, he went to school.",
    note:"Simple sequence connector."
},

{
    id:82,
    category:"Sequence",
    title:"Next",
    structure:"Sentence. Next, sentence.",
    explanation:"Introduces the next action.",
    example:"Next, mix all the ingredients thoroughly.",
    note:"Frequently used in process writing."
},

{
    id:83,
    category:"Sequence",
    title:"Afterwards",
    structure:"Sentence. Afterwards, sentence.",
    explanation:"Shows something happening later.",
    example:"We had lunch. Afterwards, we visited the museum.",
    note:"Similar to 'later'."
},

{
    id:84,
    category:"Sequence",
    title:"Subsequently",
    structure:"Sentence. Subsequently, sentence.",
    explanation:"Means 'after that' in formal writing.",
    example:"The proposal was accepted. Subsequently, the work began.",
    note:"Formal connector."
},

{
    id:85,
    category:"Sequence",
    title:"Finally",
    structure:"Finally, sentence.",
    explanation:"Introduces the last step or point.",
    example:"Finally, submit your answer script.",
    note:"Very common in HSC writing."
},

{
    id:86,
    category:"Sequence",
    title:"Eventually",
    structure:"Eventually, sentence.",
    explanation:"Means 'in the end after some time'.",
    example:"After many attempts, he eventually succeeded.",
    note:"Shows a delayed result."
},

{
    id:87,
    category:"Sequence",
    title:"At last",
    structure:"At last, sentence.",
    explanation:"Shows relief after a long wait.",
    example:"At last, the missing child was found.",
    note:"Different from 'finally' in meaning."
},

{
    id:88,
    category:"Sequence",
    title:"Later",
    structure:"Sentence. Later, sentence.",
    explanation:"Shows a later point in time.",
    example:"He called me later that evening.",
    note:"Simple time-sequence connector."
},

/*==================================================
ILLUSTRATION
==================================================*/

{
    id:89,
    category:"Illustration",
    title:"For example",
    structure:"Sentence. For example, sentence.",
    explanation:"Introduces an example.",
    example:"Many fruits are rich in vitamins. For example, oranges contain vitamin C.",
    note:"Very common in paragraphs."
},

{
    id:90,
    category:"Illustration",
    title:"For instance",
    structure:"Sentence. For instance, sentence.",
    explanation:"Introduces a specific example.",
    example:"Some animals migrate. For instance, many birds travel south in winter.",
    note:"Almost identical to 'for example'."
},

{
    id:91,
    category:"Illustration",
    title:"Such as",
    structure:"Such as + noun",
    explanation:"Introduces examples within a sentence.",
    example:"We study subjects such as Physics and Chemistry.",
    note:"Do not use it before a complete clause."
},

{
    id:92,
    category:"Illustration",
    title:"Namely",
    structure:"Sentence. Namely, noun.",
    explanation:"Specifies exactly what is meant.",
    example:"Two students qualified, namely Rahim and Karim.",
    note:"Used before naming examples."
},

{
    id:93,
    category:"Illustration",
    title:"In particular",
    structure:"Sentence. In particular, sentence.",
    explanation:"Highlights one specific example or detail.",
    example:"I enjoy science. In particular, I love Physics.",
    note:"Adds emphasis to one item."
},

/*==================================================
CONCESSION
==================================================*/

{
    id:94,
    category:"Concession",
    title:"Despite",
    structure:"Despite + noun / gerund",
    explanation:"Shows contrast although something happened.",
    example:"Despite the rain, they continued playing.",
    note:"Never use a clause directly after 'despite'."
},

{
    id:95,
    category:"Concession",
    title:"In spite of",
    structure:"In spite of + noun / gerund",
    explanation:"Has the same meaning as 'despite'.",
    example:"In spite of his illness, he attended the meeting.",
    note:"Followed by a noun phrase."
},

{
    id:96,
    category:"Concession",
    title:"Even if",
    structure:"Even if + clause",
    explanation:"Shows that something will happen regardless of the condition.",
    example:"Even if it rains, we will play.",
    note:"Different from 'even though'."
},

{
    id:97,
    category:"Concession",
    title:"Admittedly",
    structure:"Admittedly, sentence.",
    explanation:"Accepts a fact before presenting another idea.",
    example:"Admittedly, the task is difficult, but it is possible.",
    note:"Common in formal writing."
},

{
    id:98,
    category:"Concession",
    title:"Granted that",
    structure:"Granted that + clause",
    explanation:"Means 'even if we accept that'.",
    example:"Granted that he is talented, he still needs practice.",
    note:"Formal expression."
},

/*==================================================
CONCLUSION
==================================================*/

{
    id:99,
    category:"Conclusion",
    title:"In conclusion",
    structure:"In conclusion, sentence.",
    explanation:"Introduces the concluding statement.",
    example:"In conclusion, education is the key to national development.",
    note:"Very common in HSC compositions."
},

{
    id:100,
    category:"Conclusion",
    title:"To sum up",
    structure:"To sum up, sentence.",
    explanation:"Summarizes the main points.",
    example:"To sum up, regular practice leads to success.",
    note:"Excellent connector for ending paragraphs."
},

/*==================================================
SPECIAL HSC CONNECTOR PATTERNS
==================================================*/

{
    id:101,
    category:"Special Pattern",
    title:"Either...or",
    structure:"Either + noun/clause + or + noun/clause",
    explanation:"Used to express a choice between two alternatives.",
    example:"Either you apologize or you leave the room.",
    note:"The verb agrees with the subject nearest to it."
},

{
    id:102,
    category:"Special Pattern",
    title:"Neither...nor",
    structure:"Neither + noun/clause + nor + noun/clause",
    explanation:"Used when both alternatives are negative.",
    example:"Neither Rahim nor Karim was present.",
    note:"The verb agrees with the nearer subject."
},

{
    id:103,
    category:"Special Pattern",
    title:"Not only...but also",
    structure:"Not only + A + but also + B",
    explanation:"Adds emphasis by joining two ideas.",
    example:"She is not only intelligent but also hardworking.",
    note:"A very common HSC pattern."
},

{
    id:104,
    category:"Special Pattern",
    title:"Both...and",
    structure:"Both + A + and + B",
    explanation:"Shows that two people or things are included.",
    example:"Both the teacher and the students enjoyed the program.",
    note:"Usually takes a plural verb."
},

{
    id:105,
    category:"Special Pattern",
    title:"Whether...or",
    structure:"Whether + clause + or + clause",
    explanation:"Expresses alternatives regardless of the outcome.",
    example:"Whether he comes or not, the meeting will begin on time.",
    note:"Often followed by 'not'."
},

{
    id:106,
    category:"Special Pattern",
    title:"As if",
    structure:"As if + clause",
    explanation:"Shows that something appears to be true.",
    example:"He talks as if he knew everything.",
    note:"Often followed by a past form for unreal situations."
},

{
    id:107,
    category:"Special Pattern",
    title:"As though",
    structure:"As though + clause",
    explanation:"Similar in meaning to 'as if'.",
    example:"She looked as though she had seen a ghost.",
    note:"Formal alternative to 'as if'."
},

{
    id:108,
    category:"Special Pattern",
    title:"So...that",
    structure:"So + adjective/adverb + that + clause",
    explanation:"Shows result.",
    example:"The question was so easy that everyone answered it.",
    note:"Do not confuse with 'so that'."
},

{
    id:109,
    category:"Special Pattern",
    title:"Such...that",
    structure:"Such + noun phrase + that + clause",
    explanation:"Expresses result with a noun phrase.",
    example:"It was such a beautiful day that we went out.",
    note:"Use 'such' before nouns."
},

{
    id:110,
    category:"Special Pattern",
    title:"Too...to",
    structure:"Too + adjective + to + verb",
    explanation:"Shows excessive degree preventing an action.",
    example:"He is too weak to walk.",
    note:"Frequently transformed into 'so...that...not'."
},

{
    id:111,
    category:"Special Pattern",
    title:"Enough...to",
    structure:"Adjective + enough + to + verb",
    explanation:"Shows sufficient degree for an action.",
    example:"She is old enough to drive.",
    note:"Opposite idea of 'too...to'."
},

{
    id:112,
    category:"Special Pattern",
    title:"So that",
    structure:"Main clause + so that + clause",
    explanation:"Expresses purpose.",
    example:"He spoke loudly so that everyone could hear him.",
    note:"Purpose, not result."
},

{
    id:113,
    category:"Special Pattern",
    title:"In order that",
    structure:"Main clause + in order that + clause",
    explanation:"Formal connector showing purpose.",
    example:"She saved money in order that she could buy a computer.",
    note:"Formal alternative to 'so that'."
},

{
    id:114,
    category:"Special Pattern",
    title:"Lest",
    structure:"Lest + clause",
    explanation:"Means 'for fear that'.",
    example:"Walk carefully lest you should fall.",
    note:"A favourite in grammar books though less common in conversation."
},

{
    id:115,
    category:"Special Pattern",
    title:"Now that",
    structure:"Now that + clause",
    explanation:"Introduces a reason that has recently become true.",
    example:"Now that the rain has stopped, we can go outside.",
    note:"Expresses a current reason."
},

/*==================================================
SPECIAL HSC CONNECTOR PATTERNS (CONTINUED)
==================================================*/

{
    id:116,
    category:"Special Pattern",
    title:"Even if",
    structure:"Even if + clause",
    explanation:"Expresses that the result will remain the same regardless of the condition.",
    example:"Even if it rains, we will continue the match.",
    note:"Do not confuse it with 'even though'."
},

{
    id:117,
    category:"Special Pattern",
    title:"Even though",
    structure:"Even though + clause",
    explanation:"Shows contrast by introducing a real fact.",
    example:"Even though he was tired, he finished the work.",
    note:"Used for real situations; 'even if' is used for hypothetical ones."
},

{
    id:118,
    category:"Special Pattern",
    title:"Supposing",
    structure:"Supposing + clause",
    explanation:"Introduces a hypothetical condition.",
    example:"Supposing you lost your passport, what would you do?",
    note:"Similar to 'what if'."
},

{
    id:119,
    category:"Special Pattern",
    title:"Assuming that",
    structure:"Assuming that + clause",
    explanation:"Means 'if we suppose that'.",
    example:"Assuming that the weather is fine, the picnic will be held tomorrow.",
    note:"Common in formal English."
},

{
    id:120,
    category:"Special Pattern",
    title:"On condition that",
    structure:"On condition that + clause",
    explanation:"Expresses a strict condition.",
    example:"You may borrow the book on condition that you return it tomorrow.",
    note:"Formal alternative to 'if'."
},

{
    id:121,
    category:"Special Pattern",
    title:"Seeing that",
    structure:"Seeing that + clause",
    explanation:"Means 'because' or 'since'.",
    example:"Seeing that you are busy, I will come later.",
    note:"Used to introduce a reason."
},

{
    id:122,
    category:"Special Pattern",
    title:"Considering that",
    structure:"Considering that + clause",
    explanation:"Introduces a reason based on circumstances.",
    example:"Considering that he is only fifteen, he is remarkably mature.",
    note:"Useful in formal writing."
},

{
    id:123,
    category:"Special Pattern",
    title:"By the time",
    structure:"By the time + clause",
    explanation:"Indicates that one action has already happened before another.",
    example:"By the time we reached the station, the train had left.",
    note:"Usually followed by the Past Perfect in the main clause."
},

{
    id:124,
    category:"Special Pattern",
    title:"Every time",
    structure:"Every time + clause",
    explanation:"Means 'whenever'.",
    example:"Every time I meet him, he greets me warmly.",
    note:"Expresses repeated actions."
},

{
    id:125,
    category:"Special Pattern",
    title:"The instant",
    structure:"The instant + clause",
    explanation:"Means 'immediately when'.",
    example:"The instant she heard the news, she called her parents.",
    note:"Similar to 'the moment'."
},

{
    id:126,
    category:"Special Pattern",
    title:"Barely...when",
    structure:"Barely + had + subject + V3 + when + clause",
    explanation:"Shows that one event happened immediately before another.",
    example:"Barely had I sat down when the phone rang.",
    note:"A close variant of 'Hardly...when'."
},

{
    id:127,
    category:"Special Pattern",
    title:"Much as",
    structure:"Much as + clause",
    explanation:"Means 'although' or 'even though'.",
    example:"Much as I wanted to help, I had no money.",
    note:"Common in advanced English."
},

{
    id:128,
    category:"Special Pattern",
    title:"Inasmuch as",
    structure:"Inasmuch as + clause",
    explanation:"Means 'because' or 'to the extent that'.",
    example:"Inasmuch as he was responsible, he apologized.",
    note:"A formal connector rarely used in conversation."
},

{
    id:129,
    category:"Special Pattern",
    title:"The sooner...the better",
    structure:"The + comparative..., the + comparative...",
    explanation:"Shows that one improvement leads to another.",
    example:"The sooner you start, the better your result will be.",
    note:"A fixed comparative structure."
},

{
    id:130,
    category:"Special Pattern",
    title:"Otherwise",
    structure:"Clause. Otherwise, clause.",
    explanation:"Introduces the consequence if something does not happen.",
    example:"Leave now. Otherwise, you will miss the bus.",
    note:"Equivalent to 'if not' in many contexts."
}

];