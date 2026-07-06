// quiz-data.js
const quizData = [
    {
        id: 1,
        title: "Passage 1 (Success)",
        context: "Success never comes automatically. (a) We work hard to attain success in our life (Complex). (b) Peace and prosperity is not possible without being industrious (Affirmative). (c) A man who leads an idle life, brings misery for his life (Simple). (d) He can never help the people of the society (Passive). Such kind of man is the burden on the society. (e) Everybody abhors him (Negative).",
        items: [
            { key: "a", instruction: "Complex", text: "We work hard to attain success in our life.", answers: ["We work hard so that we can attain success in our life."] },
            { key: "b", instruction: "Affirmative", text: "Peace and prosperity is not possible without being industrious.", answers: ["Peace and prosperity is impossible without being industrious.", "Peace and prosperity are impossible without being industrious."] },
            { key: "c", instruction: "Simple", text: "A man who leads an idle life, brings misery for his life.", answers: ["A man leading an idle life, brings miseries for his life.", "An idle man brings misery for his life."] },
            { key: "d", instruction: "Passive", text: "He can never help the people of the society.", answers: ["The people of the society can never be helped by him."] },
            { key: "e", instruction: "Negative", text: "Everybody abhors him.", answers: ["None loves him.", "There is nobody but abhors him."] }
        ]
    },
    {
        id: 2,
        title: "Passage 2 (Bayazid Bostami)",
        context: "You must have heard the name of Bayazid Bostami. (a) He was one of the greatest saints of Islam. (Positive) One night he was learning his lessons. (b) At that time his mother asked him for a glass of water. (Passive) (c) There was no drinking water in the house, so he went out to fetch it. (Complex) (d) When he came back, he found his mother sleeping. (Compound) Then he passed the whole night standing with a glass of water beside his mother. (e) He showed a great love and respect to his mother. (Exclamatory)",
        items: [
            { key: "a", instruction: "Positive", text: "He was one of the greatest saints of Islam.", answers: ["Very few saints of Islam were so great as he.", "Very few saints of Islam were as great as he."] },
            { key: "b", instruction: "Passive", text: "At that time his mother asked him for a glass of water.", answers: ["At that time, he was asked for a glass of water by his mother.", "At that time, he was asked by his mother for a glass of water."] },
            { key: "c", instruction: "Complex", text: "There was no drinking water in the house, so he went out to fetch it.", answers: ["As there was no drinking water in the house, he went out to fetch it.", "Since there was no drinking water in the house, he went out to fetch it.", "He went out to fetch water because there was no drinking water in the house."] },
            { key: "d", instruction: "Compound", text: "When he came back, he found his mother sleeping.", answers: ["He came back and found his mother sleeping."] },
            { key: "e", instruction: "Exclamatory", text: "He showed a great love and respect to his mother.", answers: ["What a love and respect he showed to his mother!", "What a love and respect to his mother he showed!"] }
        ]
    },
    {
        id: 3,
        title: "Passage 3 (Honest Man)",
        context: "(a) An honest man is honoured everywhere by all. (Active) (b) He is not only a teacher but also a singer. (Simple) (c) Though we are improving very fast, we have to work hard for the country. (Compound) (d) Very few cricket teams in the world are as unpredictable as Pakistan. (Superlative) (e) My friend came to me to get help from us. (Complex)",
        items: [
            { key: "a", instruction: "Active", text: "An honest man is honoured everywhere by all.", answers: ["All honour an honest man everywhere."] },
            { key: "b", instruction: "Simple", text: "He is not only a teacher but also a singer.", answers: ["Besides being a teacher, he is a singer.", "He is both a teacher and a singer."] },
            { key: "c", instruction: "Compound", text: "Though we are improving very fast, we have to work hard for the country.", answers: ["We are improving very fast but we have to work hard for the country."] },
            { key: "d", instruction: "Superlative", text: "Very few cricket teams in the world are as unpredictable as Pakistan.", answers: ["Pakistan is one of the most unpredictable cricket teams in the world."] },
            { key: "e", instruction: "Complex", text: "My friend came to me to get help from us.", answers: ["My friend came to me so that he could get help from us."] }
        ]
    },
    {
        id: 4,
        title: "Passage 4 (Dowry)",
        context: "Dowry is a curse for our society. It darkens the lives of many women. (a) Dowry hampers the peace of the society (Passive). (b) The brutal condition of the dark age must be stopped soon (Active). (c) This is one of the major problems of Bangladesh (Positive). (d) The dowry seekers are very greedy and demand money from bride's father (Simple). (e) What an unworthy crime the dowry is! (Assertive)",
        items: [
            { key: "a", instruction: "Passive", text: "Dowry hampers the peace of the society.", answers: ["The peace of the society is hampered by dowry."] },
            { key: "b", instruction: "Active", text: "The brutal condition of the dark age must be stopped soon.", answers: ["The government must stop the brutal condition of the dark age soon.", "We must stop the brutal condition of the dark age soon."] },
            { key: "c", instruction: "Positive", text: "This is one of the major problems of Bangladesh.", answers: ["Very few problems of Bangladesh are so major as this.", "Very few problems of Bangladesh are as major as this."] },
            { key: "d", instruction: "Simple", text: "The dowry seekers are very greedy and demand money from bride's father.", answers: ["The dowry seekers being very greedy, demand money from the bride's father."] },
            { key: "e", instruction: "Assertive", text: "What an unworthy crime the dowry is!", answers: ["The dowry is a very unworthy crime."] }
        ]
    },
    {
        id: 5,
        title: "Passage 5 (Tea Drink)",
        context: "(a) Tea is the most popular drink. (Comparative) (b) Tea helps us remove our fatigue. (Passive) (c) Almost everyone enjoys tea. (Negative) (d) Bangladesh is one of the tea producing countries, (Compound) (e) Bangladesh exports tea and earns a lot of foreign exchange. (Simple)",
        items: [
            { key: "a", instruction: "Comparative", text: "Tea is the most popular drink.", answers: ["Tea is more popular than any other drink."] },
            { key: "b", instruction: "Passive", text: "Tea helps us remove our fatigue.", answers: ["We are helped to remove our fatigue by tea.", "We are helped by tea to remove our fatigue."] },
            { key: "c", instruction: "Negative", text: "Almost everyone enjoys tea.", answers: ["There is hardly anyone who does not enjoy tea."] },
            { key: "d", instruction: "Compound", text: "Bangladesh is one of the tea producing countries.", answers: ["Many countries produce tea and Bangladesh is one of them."] },
            { key: "e", instruction: "Simple", text: "Bangladesh exports tea and earns a lot of foreign exchange.", answers: ["Exporting tea, Bangladesh earns a lot of foreign exchange.", "Bangladesh earns a lot of foreign exchange by exporting tea."] }
        ]
    },
    {
        id: 6,
        title: "Passage 6 (Tanvir & Tania)",
        context: "(a) 'Beautiful! Isn't she?' Tanvir whispered. (Assertive) (b) Tania nodded in agreement, but she was extremely nervous. (Complex) (c) The tigress was now quite close to them. (Interrogative) Tania's heart was pounding, but Tanvir seemed oblivious to any danger. (d) He got closer to the animal and pressed the shutter button with a boyish grin in the face. (Simple) (e) And it suddenly occurred to Tania that her husband was the strongest man she had ever met. (Positive)",
        items: [
            { key: "a", instruction: "Assertive", text: "'Beautiful! Isn't she?' Tanvir whispered.", answers: ["She is very beautiful."] },
            { key: "b", instruction: "Complex", text: "Tania nodded in agreement, but she was extremely nervous.", answers: ["Though Tania nodded in agreement, she was extremely nervous."] },
            { key: "c", instruction: "Interrogative", text: "The tigress was now quite close to them.", answers: ["Wasn't the tigress now quite close to them?"] },
            { key: "d", instruction: "Simple", text: "He got closer to the animal and pressed the shutter button with a boyish grin in the face.", answers: ["Getting closer to the animal, he pressed the shutter button with a boyish grin in the face."] },
            { key: "e", instruction: "Positive", text: "And it suddenly occurred to Tania that her husband was the strongest man she had ever met.", answers: ["No other man she had ever met was so strong as her husband."] }
        ]
    },
    {
        id: 7,
        title: "Passage 7 (Anger)",
        context: "Anger is nothing but a vice. (a) It begets only the worst. (Negative) (b) Anger is one of the most inhuman vices. (Positive) (c) So, we should control it for our own sake. (Passive) (d) He who is taken by anger causes a lot of troubles. (Simple) (e) Realizing it, we should try to be emotionally balanced. (Complex)",
        items: [
            { key: "a", instruction: "Negative", text: "It begets only the worst.", answers: ["It begets nothing but the worst.", "It does not beget anything but the worst."] },
            { key: "b", instruction: "Positive", text: "Anger is one of the most inhuman vices.", answers: ["Very few vices are so inhuman as anger.", "Very few vices are as inhuman as anger."] },
            { key: "c", instruction: "Passive", text: "So, we should control it for our own sake.", answers: ["So, it should be controlled by us for our own sake."] },
            { key: "d", instruction: "Simple", text: "He who is taken by anger causes a lot of troubles.", answers: ["He, taken by anger, causes a lot of troubles.", "Taken by anger, he causes a lot of troubles."] },
            { key: "e", instruction: "Complex", text: "Realizing it, we should try to be emotionally balanced.", answers: ["We should try to be emotionally balanced after we realize it.", "We should try to be emotionally balanced after we have realized it.", "We should try to be emotionally balanced if we realize it."] }
        ]
    },
    {
        id: 8,
        title: "Passage 8 (Bee)",
        context: "(a) Very few insects are as busy as a bee. (Comparative) (b) It is known as an industrious creature. (Active) (c) It flies from flower to flower and collects honey. (Simple) (d) It stores honey in the hive. (Passive) (e) In winter, it remains idle but it works hard in spring. (Complex) It leads a disciplined life.",
        items: [
            { key: "a", instruction: "Comparative", text: "Very few insects are as busy as a bee.", answers: ["A bee is busier than most other insects."] },
            { key: "b", instruction: "Active", text: "It is known as an industrious creature.", answers: ["People know it as an industrious creature.", "We know it as an industrious creature.", "Everybody knows it as an industrious creature."] },
            { key: "c", instruction: "Simple", text: "It flies from flower to flower and collects honey.", answers: ["It flies from flower to flower to collect honey.", "Flying from flower to flower, it collects honey."] },
            { key: "d", instruction: "Passive", text: "It stores honey in the hive.", answers: ["Honey is stored in the hive by it.", "Honey is stored in the hive."] },
            { key: "e", instruction: "Complex", text: "In winter, it remains idle but it works hard in spring.", answers: ["Though it remains idle in winter, it works hard in spring."] }
        ]
    },
    {
        id: 9,
        title: "Passage 9 (Frugality)",
        context: "Frugality is a good habit. (a) A man who is frugal does not like to spend money without reason. (Simple) (b) The target of a frugal man is to save money for future. (Complex) (c) Everyone should practise frugality to make a well planned family. (Passive) (d) A frugal man lives a solvent life. (Negative) (e) A frugal man is happier than a prodigal man. (Positive)",
        items: [
            { key: "a", instruction: "Simple", text: "A man who is frugal does not like to spend money without reason.", answers: ["A frugal man does not like to spend money without reasons."] },
            { key: "b", instruction: "Complex", text: "The target of a frugal man is to save money for future.", answers: ["A frugal man has a target that he should save money for future.", "A frugal man has a target that he will save money for future.", "A man who is frugal has a target to save money for future.", "A frugal man has a target so that he can save money for future.", "A frugal man has a target so that he may save money for future."] },
            { key: "c", instruction: "Passive", text: "Everyone should practise frugality to make a well planned family.", answers: ["Frugality should be practised to make a well planned family by everyone.", "Frugality should be practised to make a well planned family."] },
            { key: "d", instruction: "Negative", text: "A frugal man lives a solvent life.", answers: ["A frugal man does not live an insolvent life.", "A frugal man does not live a needy life.", "A frugal man does not live a poor life."] },
            { key: "e", instruction: "Positive", text: "A frugal man is happier than a prodigal man.", answers: ["A prodigal man is not so happy as a frugal man.", "A prodigal man is not as happy as a frugal man."] }
        ]
    },
    {
        id: 10,
        title: "Passage 10 (Independence 1971)",
        context: "(a) It was 1971 when Bangladesh achieved independence. (Simple) (b) It is the most significant event in the history of Bangladesh. (Comparative) (c) Our freedom fighters sacrificed their lives for the independence of Bangladesh. (Complex) (d) It was a great struggle for them. (Exclamatory) (e) We shall always remember them with pride. (Compound)",
        items: [
            { key: "a", instruction: "Simple", text: "It was 1971 when Bangladesh achieved independence.", answers: ["Bangladesh achieved independence in 1971."] },
            { key: "b", instruction: "Comparative", text: "It is the most significant event in the history of Bangladesh.", answers: ["It is more significant than any other event in the history of Bangladesh."] },
            { key: "c", instruction: "Complex", text: "Our freedom fighters sacrificed their lives for the independence of Bangladesh.", answers: ["Our freedom fighters sacrificed their lives because they wanted the independence of Bangladesh.", "Our freedom fighters sacrificed their lives so that they could achieve the independence of Bangladesh."] },
            { key: "d", instruction: "Exclamatory", text: "It was a great struggle for them.", answers: ["What a struggle it was for them!"] },
            { key: "e", instruction: "Compound", text: "We shall always remember them with pride.", answers: ["We shall always remember them and it is with pride."] }
        ]
    },
    {
        id: 11,
        title: "Passage 11 (Freedom Fighters)",
        context: "We are very much proud of our freedom fighters. (a) They fought for the country with a patriotic zeal. (Compound) (b) They are the most courageous sons of our nation. (Positive) (c) Everybody admires and respects them greatly. (Passive) (d) Nobody denies their contribution to their motherland. (Interrogative) (e) They will never be forgotten by their countrymen to the end. (Affirmative)",
        items: [
            { key: "a", instruction: "Compound", text: "They fought for the country with a patriotic zeal.", answers: ["They had a patriotic zeal and so they fought for the country."] },
            { key: "b", instruction: "Positive", text: "They are the most courageous sons of our nation.", answers: ["No other sons of our nation are so courageous as they."] },
            { key: "c", instruction: "Passive", text: "Everybody admires and respects them greatly.", answers: ["They are greatly admired and respected by everybody.", "They are greatly admired and respected."] },
            { key: "d", instruction: "Interrogative", text: "Nobody denies their contribution to their motherland.", answers: ["Who denies their contribution to their motherland?"] },
            { key: "e", instruction: "Affirmative", text: "They will never be forgotten by their countrymen to the end.", answers: ["They will ever be remembered by their countrymen to the end."] }
        ]
    },
    {
        id: 12,
        title: "Passage 12 (Farmers & Loans)",
        context: "(a) Some essential agricultural inputs are to be ensured to increase our food production. (Active) (b) The farmers who are poor do not get loans on easy terms. (Simple) (c) What a pity! (Assertive) (d) The farmers do not get the facilities necessary for food production. (Complex) (e) Unfortunately, they do not get the due price of their products. (Compound)",
        items: [
            { key: "a", instruction: "Active", text: "Some essential agricultural inputs are to be ensured to increase our food production.", answers: ["We are to ensure some essential agricultural inputs to increase our food production."] },
            { key: "b", instruction: "Simple", text: "The farmers who are poor do not get loans on easy terms.", answers: ["The poor farmers do not get loans on easy terms."] },
            { key: "c", instruction: "Assertive", text: "What a pity!", answers: ["It is a great pity."] },
            { key: "d", instruction: "Complex", text: "The farmers do not get the facilities necessary for food production.", answers: ["The farmers do not get the facilities which are necessary for food production."] },
            { key: "e", instruction: "Compound", text: "Unfortunately, they do not get the due price of their products.", answers: ["They do not get the due price of their products and it is unfortunate."] }
        ]
    },
    {
        id: 13,
        title: "Passage 13 (Solomon)",
        context: "(a) Long, long ago there was a king who was very wise. (Simple) (b) People called him wise Solomon. (Passive) (c) Actually at that time he was the wisest of all. (Comparative) (d) There was another ruler also named Queen of Sheba. (Complex) (e) One day she thought Solomon's wisdom should not remain untested. (Affirmative)",
        items: [
            { key: "a", instruction: "Simple", text: "Long, long ago there was a king who was very wise.", answers: ["Long, long ago there was a very wise king."] },
            { key: "b", instruction: "Passive", text: "People called him wise Solomon.", answers: ["He was called wise Solomon by people.", "He was called wise Solomon."] },
            { key: "c", instruction: "Comparative", text: "Actually at that time he was the wisest of all.", answers: ["Actually at that time, he was wiser than all other."] },
            { key: "d", instruction: "Complex", text: "There was another ruler also named Queen of Sheba.", answers: ["There was another ruler also who was named Queen of Sheba."] },
            { key: "e", instruction: "Affirmative", text: "One day she thought Solomon's wisdom should not remain untested.", answers: ["One day she thought Solomon's wisdom should be tested."] }
        ]
    },
    {
        id: 14,
        title: "Passage 14 (Jim and Della)",
        context: "(a) Jim and Della sacrificed their dearest possessions in order to buy Christmas presents for each other. (Compound) (b) Della had an ardent desire to give her husband a worthy gift. (Complex) (c) Jim also thought how he could give his wife a nice gift. (Simple) (d) Della saved a scanty amount of money for this. (Passive) (e) Jim was one of the sincerest husbands that we have ever known. (Positive)",
        items: [
            { key: "a", instruction: "Compound", text: "Jim and Della sacrificed their dearest possessions in order to buy Christmas presents for each other.", answers: ["Jim and Della sacrificed their dearest possessions and bought Christmas presents for each other.", "Jim and Della sacrificed their dearest possessions and wanted to buy Christmas presents for each other.", "Jim and Della wanted to buy Christmas presents for each other and so they sacrificed their dearest possessions."] },
            { key: "b", instruction: "Complex", text: "Della had an ardent desire to give her husband a worthy gift.", answers: ["Della had an ardent desire so that she could give her husband a worthy gift.", "Della had an ardent desire so that she might give her husband a worthy gift.", "Della had an ardent desire which was to give her husband a worthy gift.", "Della had an ardent desire to give her husband a gift which was worthy."] },
            { key: "c", instruction: "Simple", text: "Jim also thought how he could give his wife a nice gift.", answers: ["Jim also thought of giving his wife a nice gift.", "Jim also thought how to give his wife a nice gift."] },
            { key: "d", instruction: "Passive", text: "Della saved a scanty amount of money for this.", answers: ["A scanty amount of money was saved for this by Della."] },
            { key: "e", instruction: "Positive", text: "Jim was one of the sincerest husbands that we have ever known.", answers: ["Very few husbands that we have ever known were as sincere as Jim."] }
        ]
    },
    {
        id: 15,
        title: "Passage 15 (Water Pollution)",
        context: "(a) Water, an important vital element of environment, is polluted in various ways. (Complex) It is called life. (b) The water which is pure is necessary for us. (Simple) (c) Men pollute water by throwing waste in it. (Compound) (d) The farmers use water in time of cultivation largely. (Passive) (e) It is one of the most important elements of all living beings. (Positive)",
        items: [
            { key: "a", instruction: "Complex", text: "Water, an important vital element of environment, is polluted in various ways.", answers: ["Water which is an important vital element of environment, is polluted in various ways."] },
            { key: "b", instruction: "Simple", text: "The water which is pure is necessary for us.", answers: ["Pure water is necessary for us."] },
            { key: "c", instruction: "Compound", text: "Men pollute water by throwing waste in it.", answers: ["Men throw waste in water and pollute it."] },
            { key: "d", instruction: "Passive", text: "The farmers use water in time of cultivation largely.", answers: ["Water is used in time of cultivation largely by the farmers."] },
            { key: "e", instruction: "Positive", text: "It is one of the most important elements of all living beings.", answers: ["Very few elements of all living beings are so important as it.", "Very few elements of all living beings are as important as it."] }
        ]
    },
    {
        id: 16,
        title: "Passage 16 (Cricket)",
        context: "(a) Cricket is a very exciting game. (Exclamatory) (b) People of all ages enjoy this game. (Passive) (c) At present cricket is the most popular game in our country. (Comparative) (d) Though cricket is a costly game, people of all classes enjoy playing it. (Simple) (e) Bangladesh is a test playing country but its standard is not high. (Complex)",
        items: [
            { key: "a", instruction: "Exclamatory", text: "Cricket is a very exciting game.", answers: ["What an exciting game cricket is!"] },
            { key: "b", instruction: "Passive", text: "People of all ages enjoy this game.", answers: ["This game is enjoyed by people of all ages."] },
            { key: "c", instruction: "Comparative", text: "At present cricket is the most popular game in our country.", answers: ["At present, cricket is more popular than any other game in our country."] },
            { key: "d", instruction: "Simple", text: "Though cricket is a costly game, people of all classes enjoy playing it.", answers: ["In spite of being a costly game, people of all classes enjoy playing cricket."] },
            { key: "e", instruction: "Complex", text: "Bangladesh is a test playing country but its standard is not high.", answers: ["Though Bangladesh is a test playing country, its standard is not high."] }
        ]
    },
    {
        id: 17,
        title: "Passage 17 (Pahela Baishakh)",
        context: "a) Pahela Baishakh is undoubtedly the most celebrated festival in Bangladesh. (Complex) (b) It is the first day of the Bengali year when the city roads get so jam packed. (Simple) (c) Almost everyone enjoys the day in his own way. (Passive) (d) Although I do not like gathering, I enjoy the activities of this day. (Compound) (e) It is one of the most interesting days of the year. (Positive)",
        items: [
            { key: "a", instruction: "Complex", text: "Pahela Baishakh is undoubtedly the most celebrated festival in Bangladesh.", answers: ["It is Pahela Baishakh which is undoubtedly the most celebrated festival in Bangladesh."] },
            { key: "b", instruction: "Simple", text: "It is the first day of the Bengali year when the city roads get so jam packed.", answers: ["During the first day of the Bengali year, the city roads get so jam packed."] },
            { key: "c", instruction: "Passive", text: "Almost everyone enjoys the day in his own way.", answers: ["The day is enjoyed by almost everyone in his own way."] },
            { key: "d", instruction: "Compound", text: "Although I do not like gathering, I enjoy the activities of this day.", answers: ["I do not like gathering but I enjoy the activities of this day."] },
            { key: "e", instruction: "Positive", text: "It is one of the most interesting days of the year.", answers: ["Very few days of the year are so interesting as it."] }
        ]
    },
    {
        id: 18,
        title: "Passage 18 (Love and Friends)",
        context: "No person can be happy without friends. So, (a) everybody wants friends. (Negative) (b) The heart is formed for love and cannot be happy without the opportunity of giving and receiving love. (Complex) (c) But you cannot find others to love you unless you love them. (Simple) (d) You cannot be happy without it. (Interrogative) So (e) As love is divine, everybody wants to love. (Compound)",
        items: [
            { key: "a", instruction: "Negative", text: "everybody wants friends.", answers: ["Nobody wants enemies.", "There is nobody but wants friends."] },
            { key: "b", instruction: "Complex", text: "The heart is formed for love and cannot be happy without the opportunity of giving and receiving love.", answers: ["As the heart is formed for love, it cannot be happy without the opportunity of giving and receiving love."] },
            { key: "c", instruction: "Simple", text: "But you cannot find others to love you unless you love them.", answers: ["But without loving others, you can't find them to love you."] },
            { key: "d", instruction: "Interrogative", text: "You cannot be happy without it.", answers: ["Can you be happy without it?"] },
            { key: "e", instruction: "Compound", text: "As love is divine, everybody wants to love.", answers: ["Love is divine and everybody wants to love."] }
        ]
    },
    {
        id: 19,
        title: "Passage 19 (Tajmahal)",
        context: "The Tajmahal, the unique tomb is the 7th wonder of the world, (a) It was three hundred years ago since emperor Shah Jahan built the Taj. (Simple) (b) As he loved his wife Mamtaj very much, he built it as a tomb of his dear wife (Compound). (c) The building was made with fine white marbles. (Active) (d) It rests on a platform of red stone, therefore it looks very nice. (Complex) (e) The Tajmahal is one of the most beautiful buildings in the world. (Positive)",
        items: [
            { key: "a", instruction: "Simple", text: "It was three hundred years ago since emperor Shah Jahan built the Taj.", answers: ["Three hundred years ago, emperor Shah Jahan built the Taj."] },
            { key: "b", instruction: "Compound", text: "As he loved his wife Mamtaj very much, he built it as a tomb of his dear wife.", answers: ["He loved his wife Mamtaj very much and so he built it as a tomb of his dear wife."] },
            { key: "c", instruction: "Active", text: "The building was made with fine white marbles.", answers: ["The craftsmen made the building with fine white marbles."] },
            { key: "d", instruction: "Complex", text: "It rests on a platform of red stone, therefore it looks very nice.", answers: ["As it rests on a platform of red stone, it looks very nice."] },
            { key: "e", instruction: "Positive", text: "The Tajmahal is one of the most beautiful buildings in the world.", answers: ["Very few buildings in the world are as beautiful as the Tajmahal."] }
        ]
    },
    {
        id: 20,
        title: "Passage 20 (Beggars)",
        context: "(a) One who begs for alms is called a beggar. (Simple) (b) Begging is regarded as a serious social problem because it encourages idleness and apathy to work. (Compound) (c) There are some professional beggars. (Complex) (d) They find begging is easier than working. (Positive) (e) Arrangements should be made to turn them into a working force. (Active)",
        items: [
            { key: "a", instruction: "Simple", text: "One who begs for alms is called a beggar.", answers: ["One begging for alms is called a beggar."] },
            { key: "b", instruction: "Compound", text: "Begging is regarded as a serious social problem because it encourages idleness and apathy to work.", answers: ["Begging encourages idleness and apathy to work and so it is regarded as a serious social problem."] },
            { key: "c", instruction: "Complex", text: "There are some professional beggars.", answers: ["There are some beggars who are professional."] },
            { key: "d", instruction: "Positive", text: "They find begging is easier than working.", answers: ["They find working is not so easy as begging."] },
            { key: "e", instruction: "Active", text: "Arrangements should be made to turn them into a working force.", answers: ["The government should make arrangements to turn them into a working force."] }
        ]
    },
    {
        id: 21,
        title: "Passage 21 (Industry and Hard Work)",
        context: "(a) We work hard to attain success in our life (Complex), (b) Peace and prosperity is not possible without hard works (Affirmative), (c) A man, who leads an idle life, brings misery for his life (Simple), (d) He can never help people of the society (Passive). Such kind of man is the burden of the society, (e) Everybody dislikes him (Negative sentence without changing the meaning).",
        items: [
            { key: "a", instruction: "Complex", text: "We work hard to attain success in our life.", answers: ["We work hard so that we can attain success in our life."] },
            { key: "b", instruction: "Affirmative", text: "Peace and prosperity is not possible without hard works.", answers: ["Peace and prosperity is impossible without hard works."] },
            { key: "c", instruction: "Simple", text: "A man, who leads an idle life, brings misery for his life.", answers: ["A man leading an idle life brings misery for his life."] },
            { key: "d", instruction: "Passive", text: "He can never help people of the society.", answers: ["People of the society can never be helped by him."] },
            { key: "e", instruction: "Negative", text: "Everybody dislikes him.", answers: ["Nobody likes him."] }
        ]
    },
    {
        id: 22,
        title: "Passage 22 (The Padma)",
        context: "(a) The Padma is the biggest of all rivers in Bangladesh (Positive), (b) When it is summer, it becomes dry (Simple), (c) During the rainy season it assumes a terrible shape (Complex), (d) Everybody knows this (Interrogative), (e) Fishermen catch various kinds of fishes in the river. (Passive)",
        items: [
            { key: "a", instruction: "Positive", text: "The Padma is the biggest of all rivers in Bangladesh.", answers: ["No other river in Bangladesh is as big as the Padma."] },
            { key: "b", instruction: "Simple", text: "When it is summer, it becomes dry.", answers: ["It becomes dry in summer."] },
            { key: "c", instruction: "Complex", text: "During the rainy season it assumes a terrible shape.", answers: ["When it is the rainy season, it assumes a terrible shape."] },
            { key: "d", instruction: "Interrogative", text: "Everybody knows this.", answers: ["Who does not know this?"] },
            { key: "e", instruction: "Passive", text: "Fishermen catch various kinds of fishes in the river.", answers: ["Various kinds of fishes are caught in the river by fishermen."] }
        ]
    },
    {
        id: 23,
        title: "Passage 23 (Jerry)",
        context: "(a) Jerry was a small boy who lived in the orphanage. (Simple) (b) He was the strongest of all the boys (Positive). He used to cut wood for the writer, (c) He also did some unnecessary things for her. (Passive) (d) His mother visited him at the orphanage in autumn. (Complex) (e) One morning the writer was awakened by the sound of his tapping on the door (Active). She did not say anything, though she was disturbed.",
        items: [
            { key: "a", instruction: "Simple", text: "Jerry was a small boy who lived in the orphanage.", answers: ["Jerry was a small boy living in the orphanage."] },
            { key: "b", instruction: "Positive", text: "He was the strongest of all the boys.", answers: ["No other boy was so strong as he."] },
            { key: "c", instruction: "Passive", text: "He also did some unnecessary things for her.", answers: ["Some unnecessary things were also done for her by him."] },
            { key: "d", instruction: "Complex", text: "His mother visited him at the orphanage in autumn.", answers: ["His mother visited him at the orphanage when it was autumn."] },
            { key: "e", instruction: "Active", text: "One morning the writer was awakened by the sound of his tapping on the door.", answers: ["One morning the sound of his tapping on the door awakened the writer."] }
        ]
    },
    {
        id: 24,
        title: "Passage 24 (Body and Mind)",
        context: "(a) Since the body and the mind go together, the illness of the one, inevitably affects the other (Compound), (b) The development of the mind is greatly hampered by an unsound body (Active), (c) No jobs can be done properly if one's health is broken or suffers from diseases (Simple), (d) With ill health even the religious duties can not be performed (Complex). Education can improve our mind and develop our outlook but without a sound health everything remains incomplete, (e) True education ensures one's health and mind (Passive).",
        items: [
            { key: "a", instruction: "Compound", text: "Since the body and the mind go together, the illness of the one, inevitably affects the other.", answers: ["The body and the mind go together and so the illness of the one inevitably affects the other."] },
            { key: "b", instruction: "Active", text: "The development of the mind is greatly hampered by an unsound body.", answers: ["An unsound body greatly hampers the development of the mind."] },
            { key: "c", instruction: "Simple", text: "No jobs can be done properly if one's health is broken or suffers from diseases.", answers: ["Due to one's broken health or suffering from diseases, no jobs can be done properly."] },
            { key: "d", instruction: "Complex", text: "With ill health even the religious duties can not be performed.", answers: ["If one's health is ill, even the religious duties cannot be performed."] },
            { key: "e", instruction: "Passive", text: "True education ensures one's health and mind.", answers: ["One's health and mind is ensured by true education."] }
        ]
    },
    {
        id: 25,
        title: "Passage 25 (Eve-teasing)",
        context: "(a) Eve-teasing is one of the most serious problems (Positive), (b) It is an inhuman and barbarous act (Complex), (c) The problem cannot be solved overnight (Active voice), (d) We should create public awareness so that we can skive this problem (Simple), (e) All eve-teasers should be punished (Negative sentence without changing the meaning).",
        items: [
            { key: "a", instruction: "Positive", text: "Eve-teasing is one of the most serious problems.", answers: ["Very few problems are as serious as eve-teasing."] },
            { key: "b", instruction: "Complex", text: "It is an inhuman and barbarous act.", answers: ["It is an act which is inhuman and barbarous."] },
            { key: "c", instruction: "Active voice", text: "The problem cannot be solved overnight.", answers: ["We cannot solve the problem overnight."] },
            { key: "d", instruction: "Simple", text: "We should create public awareness so that we can skive this problem.", answers: ["We should create public awareness in order to solve this problem."] },
            { key: "e", instruction: "Negative", text: "All eve-teasers should be punished.", answers: ["No eve-teasers should remain unpunished."] }
        ]
    },
    {
        id: 26,
        title: "Passage 26 (Tired Rest)",
        context: "I was extremely tired, (a) I lay down on the grass which was very soft and short (Compound), (b) When I woke up, it was daylight (Simple), (c) I attempted to rise but could not (Complex), (d) I was strongly fastened to the ground (Active voice). I could only look upwards. I could see nothing except the sky. (e) The sun grew hot and its bright light hurt my eyes (Complex).",
        items: [
            { key: "a", instruction: "Compound", text: "I lay down on the grass which was very soft and short.", answers: ["I lay down on the grass and it was very soft and short."] },
            { key: "b", instruction: "Simple", text: "When I woke up, it was daylight.", answers: ["I woke up in daylight."] },
            { key: "c", instruction: "Complex", text: "I attempted to rise but could not.", answers: ["Though I attempted to rise, I could not."] },
            { key: "d", instruction: "Active voice", text: "I was strongly fastened to the ground.", answers: ["They strongly fastened me to the ground."] },
            { key: "e", instruction: "Complex", text: "The sun grew hot and its bright light hurt my eyes.", answers: ["As the sun grew hot, its bright light hurt my eyes."] }
        ]
    },
    {
        id: 27,
        title: "Passage 27 (Hospitality)",
        context: "Hospitality has long been a part of our culture in Bangladesh, (a) Although many other things are changing now, people are still quite polite and friendly (Make it compound), (b) They like speaking to foreigners (Make it passive), (c) It is quite common for Bangladeshis to ask personal questions (Make it complex), (d) Though they ask personal questions, there is no harm in it (Make it simple), (e) Hospitality is one of the most important parts of our culture (Make it positive).",
        items: [
            { key: "a", instruction: "Compound", text: "Although many other things are changing now, people are still quite polite and friendly.", answers: ["Many other things are changing now but people are still quite polite and friendly."] },
            { key: "b", instruction: "Passive", text: "They like speaking to foreigners.", answers: ["Speaking to foreigners is liked by them."] },
            { key: "c", instruction: "Complex", text: "It is quite common for Bangladeshis to ask personal questions.", answers: ["It is quite common that Bangladeshis ask personal questions."] },
            { key: "d", instruction: "Simple", text: "Though they ask personal questions, there is no harm in it.", answers: ["There is no harm in asking personal questions."] },
            { key: "e", instruction: "Positive", text: "Hospitality is one of the most important parts of our culture.", answers: ["Very few parts of our culture are as important as hospitality."] }
        ]
    },
    {
        id: 28,
        title: "Passage 28 (Traffic Drivers)",
        context: "(a) Most of the drivers of our country are illiterate (Negative sentence without changing the meaning), (b) They do not follow the traffic rules (Passive), (c) The traffic police who are on duty do not perform their duties sincerely (Simple), (d) Traffic jam is one of the most serious problems in our country (Positive). (e) The ignorant drivers always have an overtaking tendency (Complex).",
        items: [
            { key: "a", instruction: "Negative", text: "Most of the drivers of our country are illiterate.", answers: ["Most of the drivers of our country are not literate."] },
            { key: "b", instruction: "Passive", text: "They do not follow the traffic rules.", answers: ["The traffic rules are not followed by them."] },
            { key: "c", instruction: "Simple", text: "The traffic police who are on duty do not perform their duties sincerely.", answers: ["The traffic police on duty do not perform their duties sincerely."] },
            { key: "d", instruction: "Positive", text: "Traffic jam is one of the most serious problems in our country.", answers: ["Very few problems in our country are so serious as traffic jam."] },
            { key: "e", instruction: "Complex", text: "The ignorant drivers always have an overtaking tendency.", answers: ["The drivers who are ignorant always have an overtaking tendency."] }
        ]
    },
    {
        id: 29,
        title: "Passage 29 (Mobile Phone)",
        context: "(a) Mobile phone is one of the greatest inventions. (Positive) (b) Scientists believe that mobile phones cause brain tumour. (Compound) (c) Millions of people are getting benefits from mobile phones but most are unaware of the danger of it. (Complex) (d) The consumers of mobile phones are increasing day by day. (Interrogative) (e) But the children are affected much by mobile phones. (Active)",
        items: [
            { key: "a", instruction: "Positive", text: "Mobile phone is one of the greatest inventions.", answers: ["Very few inventions are as/so great as mobile phone."] },
            { key: "b", instruction: "Compound", text: "Scientists believe that mobile phones cause brain tumour.", answers: ["Mobile phones cause brain tumour and it is believed by scientists.", "Mobile phones cause brain tumour and it is the belief of scientists."] },
            { key: "c", instruction: "Complex", text: "Millions of people are getting benefits from mobile phones but most are unaware of the danger of it.", answers: ["Though/Although millions of people are getting benefits from mobile phones, most people/most of them are unaware of the danger of it."] },
            { key: "d", instruction: "Interrogative", text: "The consumers of mobile phones are increasing day by day.", answers: ["Aren't the consumers of mobile phones increasing day by day?"] },
            { key: "e", instruction: "Active", text: "But the children are affected much by mobile phones.", answers: ["But mobile phones affect the children much."] }
        ]
    },
    {
        id: 30,
        title: "Passage 30 (True Friend)",
        context: "(a) A true friend is an asset .(complex) (b) He helps his friend when he is in danger.(simple) (c) He does not leave his friend. (Affirmative) (d) A true friend is hardly found .(Active)(e) He is as good as an honest man (comparative).",
        items: [
            { key: "a", instruction: "complex", text: "A true friend is an asset.", answers: ["A friend who is true is an asset."] },
            { key: "b", instruction: "simple", text: "He helps his friend when he is in danger.", answers: ["He helps his friend in danger.", "He helps his friend at the time of his danger."] },
            { key: "c", instruction: "Affirmative", text: "He does not leave his friend.", answers: ["He stays with his friend."] },
            { key: "d", instruction: "Active", text: "A true friend is hardly found.", answers: ["We hardly find a true friend."] },
            { key: "e", instruction: "comparative", text: "He is as good as an honest man.", answers: ["An honest man is not better than he."] }
        ]
    },
    {
        id: 31,
        title: "Passage 31 (The Albatross)",
        context: "(a) The old sailor shot the Albatross.(Passive) (b) At this the sailors were very angry with him. (Negative) (c) Their throats were dry and they could not speak. (Complex) (d) Since the old sailor killed the bird, he brought bad luck to the sailors.(Simple) (e) It was a very unlucky day .(Exclamatory)",
        items: [
            { key: "a", instruction: "Passive", text: "The old sailor shot the Albatross.", answers: ["The Albatross was shot by the old sailor."] },
            { key: "b", instruction: "Negative", text: "At this the sailors were very angry with him.", answers: ["At this the sailors were not pleased with him at all."] },
            { key: "c", instruction: "Complex", text: "Their throats were dry and they could not speak.", answers: ["As their throats were dry, they could not speak."] },
            { key: "d", instruction: "Simple", text: "Since the old sailor killed the bird, he brought bad luck to the sailors.", answers: ["Killing the bird, the old sailor brought bad luck to the sailors."] },
            { key: "e", instruction: "Exclamatory", text: "It was a very unlucky day.", answers: ["What an unlucky day it was!"] }
        ]
    },
    {
        id: 32,
        title: "Passage 32 (Truthfulness)",
        context: "There are many virtues that man should possess, (a) Truthfulness is one of the greatest virtues in a man's life (make it comparative). It indicates the quality of a man. (b) Everybody respects a truthful person. (make interrogative), (c) A truthful person may lead a poor life, but is honoured everywhere (make it simple), (d) A truthful person is not afraid of anybody. (make it complex) (e) It brings peace in one's mind, (make it passive).",
        items: [
            { key: "a", instruction: "comparative", text: "Truthfulness is one of the greatest virtues in a man's life.", answers: ["Truthfulness is greater than most other virtues in a man's life."] },
            { key: "b", instruction: "interrogative", text: "Everybody respects a truthful person.", answers: ["Who does not respect a truthful person?"] },
            { key: "c", instruction: "simple", text: "A truthful person may lead a poor life, but is honoured everywhere.", answers: ["In spite of leading a poor life, a truthful person is honoured everywhere."] },
            { key: "d", instruction: "complex", text: "A truthful person is not afraid of anybody.", answers: ["A person who is truthful as not afraid of anybody."] },
            { key: "e", instruction: "passive", text: "It brings peace in one's mind.", answers: ["Peace is brought in one's mind by it."] }
        ]
    },
    {
        id: 33,
        title: "Passage 33 (Cox's Bazar)",
        context: "(a) Cox's Bazar sea-beach is the largest sea-beach in the world (Complex), (b) It is one of the most sea-beaches in the world (Positive), (c) It is called pleasure seekers' paradise (Active), (d) The visitors go there to enjoy natural beauties (Compound), (e) Those who become tired may go to relax there (Simple).",
        items: [
            { key: "a", instruction: "Complex", text: "Cox's Bazar sea-beach is the largest sea-beach in the world.", answers: ["It is Cox's Bazar sea-beach which is the largest sea-beach in the world."] },
            { key: "b", instruction: "Positive", text: "It is one of the most sea-beaches in the world.", answers: ["Very few sea-beaches in the world are as beautiful as it."] },
            { key: "c", instruction: "Active", text: "It is called pleasure seekers' paradise.", answers: ["People call it pleasure seekers' paradise."] },
            { key: "d", instruction: "Compound", text: "The visitors go there to enjoy natural beauties.", answers: ["The visitors go there and enjoy natural beauties."] },
            { key: "e", instruction: "Simple", text: "Those who become tired may go to relax there.", answers: ["The tired may go to relax there."] }
        ]
    },
    {
        id: 34,
        title: "Passage 34 (Language)",
        context: "There are two ways of developing competence in acquiring the language or learning it. (a) Acquiring a language is more successful than learning (Make it positive), (b) Teachers encourage the learners of a second language to practice the language (Make it passive), (c) Students who wish to acquire language should practice the language (Make it simple), (d) Communicative competence can be achieved in a short-time (Make it interrogative without changing meaning), (e) A language learner must shake off reticence and he is sure to succeed in his effort (Make it complex).",
        items: [
            { key: "a", instruction: "positive", text: "Acquiring a language is more successful than learning.", answers: ["Learning a language is not as successful as acquiring."] },
            { key: "b", instruction: "passive", text: "Teachers encourage the learners of a second language to practice the language.", answers: ["The learners of a second language are encouraged by teachers to practice the language."] },
            { key: "c", instruction: "simple", text: "Students who wish to acquire language should practice the language.", answers: ["Students wishing to acquire proficiency in a language should practice the language."] },
            { key: "d", instruction: "interrogative", text: "Communicative competence can be achieved in a short-time.", answers: ["Can't communicative competence be achieved in a short time?"] },
            { key: "e", instruction: "complex", text: "A language learner must shake off reticence and he is sure to succeed in his effort.", answers: ["If a language learner shakes off reticence, he is sure to succeed in his effort."] }
        ]
    },
    {
        id: 35,
        title: "Passage 35 (Water Snakes)",
        context: "a) But at last God took pity on him. (Make it negative without changing the meaning) b) One day the old sailor was watching the water snakes swimmings round the ship. (Make it passive) Their colours were very beautiful and. c) He was filled with a strange wonder. (Make it active) Then he felt a great love for them and blessed them from his heart. d) At once the dead albatross fell from his neck into the sea, and the old man fell into a deep sleep. (Make it complex) e) When he woke up, it was raining. (Make it simple)",
        items: [
            { key: "a", instruction: "negative", text: "But at last God took pity on him.", answers: ["But at last God could not but take pity on him."] },
            { key: "b", instruction: "passive", text: "One day the old sailor was watching the water snakes swimmings round the ship.", answers: ["One day the water snakes were being watched swimming round the ship by the old sailor."] },
            { key: "c", instruction: "active", text: "He was filled with a strange wonder.", answers: ["A strange wonder filled him."] },
            { key: "d", instruction: "complex", text: "At once the dead albatross fell from his neck into the sea, and the old man fell into a deep sleep.", answers: ["As soon as the dead albatross fell from his neck into the sea, the old man fell into a deep sleep."] },
            { key: "e", instruction: "simple", text: "When he woke up, it was raining.", answers: ["It was raining at the time of his walking up."] }
        ]
    },
    {
        id: 36,
        title: "Passage 36 (Migratory Birds)",
        context: "a) The birds that come to our country in winter are called migratory birds. (Make it simple). b) In winter the weather is too cold for them to live in the North. (Make it complex) c) They find a better shelter in Bangladesh. (Make it passive) d) We must protect them. (Make it negative) e) Migratory birds run faster than the dove. (Make it positive)",
        items: [
            { key: "a", instruction: "simple", text: "The birds that come to our country in winter are called migratory birds.", answers: ["The birds coming to our country in winter are called migratory birds."] },
            { key: "b", instruction: "complex", text: "In winter the weather is too cold for them to live in the North.", answers: ["In winter the weather is so cold for them that they cannot live in the North."] },
            { key: "c", instruction: "passive", text: "They find a better shelter in Bangladesh.", answers: ["A better shelter is found in Bangladesh by them."] },
            { key: "d", instruction: "negative", text: "We must protect them.", answers: ["We cannot but protect them."] },
            { key: "e", instruction: "positive", text: "Migratory birds run faster than the dove.", answers: ["The dove does not run as fast as migratory birds."] }
        ]
    },
    {
        id: 37,
        title: "Passage 37 (National Memorial)",
        context: "a) The National Memorial which is situated at Savar is a symbol of the nation's respect. (Simple) b) Standing in front of the graves, we bow down our heads. (Compound) c) The towers symbolize the loftiness of the spirit of the martyred freedom fighters. (Interrogative) d) We always remember their memories. (Negative) e) Everyday many people go to visit it. (Interrogative).",
        items: [
            { key: "a", instruction: "Simple", text: "The National Memorial which is situated at Savar is a symbol of the nation's respect.", answers: ["The National Memorial at Savar is a symbol of the nation's respect."] },
            { key: "b", instruction: "Compound", text: "Standing in front of the graves, we bow down our heads.", answers: ["We stand in front of it and bow down our heads."] },
            { key: "c", instruction: "Interrogative", text: "The towers symbolize the loftiness of the spirit of the martyred freedom fighters.", answers: ["Don't the tower symbolize the loftiness of the spirit of the martyred freedom fighters?"] },
            { key: "d", instruction: "Negative", text: "We always remember their memories.", answers: ["We never forget their memories."] },
            { key: "e", instruction: "Interrogative", text: "Everyday many people go to visit it.", answers: ["Don't everyday many people go to visit it?"] }
        ]
    },
    {
        id: 38,
        title: "Passage 38 (Stephen Hawking)",
        context: "Stephen Hawking was born in 1942. He was born in an educated family. a) He is considered the greatest physicist after Einstein. (active) b) In 1979 he joined Cambridge University. (Complex) c) When he was thirty two years old, he received the prestigious Albert Einstein award. (Simple) d) He wrote a book explaining cosmology for general public. (Compound) e) He is one of the greatest scientists in the present world. (Positive)",
        items: [
            { key: "a", instruction: "active", text: "He is considered the greatest physicist after Einstein.", answers: ["People consider him the greatest physicist after Einstein."] },
            { key: "b", instruction: "Complex", text: "In 1979 he joined Cambridge University.", answers: ["It is 1979 when he joined the Cambridge University."] },
            { key: "c", instruction: "Simple", text: "When he was thirty two years old, he received the prestigious Albert Einstein award.", answers: ["He received the prestigious Albert Einstein award at the age of thirty two."] },
            { key: "d", instruction: "Compound", text: "He wrote a book explaining cosmology for general public.", answers: ["He wrote a book explaining cosmology and it is for general public."] },
            { key: "e", instruction: "Positive", text: "He is one of the greatest scientists in the present world.", answers: ["Very few scientists in the present world are as great as he."] }
        ]
    },
    {
        id: 39,
        title: "Passage 39 (Cook and Duck)",
        context: "a) Once a cook roasted a duck for his master. (passive) b) The roast looked so delicious that the cook could not resist the temptation. (simple) He ate one of the drumsticks. c) When his master sat down to eat he quickly noticed the missing drumstick. (compound) d) The master enquired of the missing leg. (interrogative) e) But the cook told him that this duck had only one leg. (Negative).",
        items: [
            { key: "a", instruction: "passive", text: "Once a cook roasted a duck for his master.", answers: ["Once a duck was roasted by a cook for his master."] },
            { key: "b", instruction: "simple", text: "The roast looked so delicious that the cook could not resist the temptation.", answers: ["The roast looked too delicious for the cook to resist the temptation."] },
            { key: "c", instruction: "compound", text: "When his master sat down to eat he quickly noticed the missing drumstick.", answers: ["His master sat down to eat and quickly noticed the missing drumstick."] },
            { key: "d", instruction: "interrogative", text: "The master enquired of the missing leg.", answers: ["Didn't the master enquire of the missing leg?"] },
            { key: "e", instruction: "Negative", text: "But the cook told him that this duck had only one leg.", answers: ["But the cook told him that this duck had not more than one leg."] }
        ]
    },
    {
        id: 40,
        title: "Passage 40 (Health is Wealth)",
        context: "a) Health is wealth (complex). b) A healthy poor man is happier than a sick moneyed man (positive). c) When a healthy man is an asset to his family, an unhealthy man is a liability. (compound) d) He can succeed in life (interrogative). e) Everybody must be conscious of health (negative).",
        items: [
            { key: "a", instruction: "complex", text: "Health is wealth.", answers: ["It is health which is wealth."] },
            { key: "b", instruction: "positive", text: "A healthy poor man is happier than a sick moneyed man.", answers: ["A sick moneyed man is not as happy as a healthy poor man."] },
            { key: "c", instruction: "compound", text: "When a healthy man is an asset to his family, an unhealthy man is a liability.", answers: ["A healthy man is an asset to his family but an unhealthy man is a liability."] },
            { key: "d", instruction: "interrogative", text: "He can succeed in life.", answers: ["Can't he succeed in life?"] },
            { key: "e", instruction: "negative", text: "Everybody must be conscious of health.", answers: ["Nobody can but be conscious of health."] }
        ]
    },
    {
        id: 41,
        title: "Passage 41 (Environment Pollution)",
        context: "a) Nowadays, environment pollution is one of the most talked topics of the world. (Positive) b) Our environment is polluted in two ways. (active) c) Farmers who use chemical fertilizers and insecticides in their lands are responsible to a large extent. (Simple) d) Air pollution can be prevented by taking proper steps. (Compound) e) Thus environment pollution is really a significant issue for us. (Negative)",
        items: [
            { key: "a", instruction: "Positive", text: "Nowadays, environment pollution is one of the most talked topics of the world.", answers: ["Nowadays, very few topics of the world are as much talked as environment pollution."] },
            { key: "b", instruction: "active", text: "Our environment is polluted in two ways.", answers: ["We pollute our environment in two ways."] },
            { key: "c", instruction: "Simple", text: "Farmers who use chemical fertilizers and insecticides in their lands are responsible to a large extent.", answers: ["Farmers using chemical fertilizer and insecticides in their lands are responsible to a large extent."] },
            { key: "d", instruction: "Compound", text: "Air pollution can be prevented by taking proper steps.", answers: ["Take proper steps and you can prevent air pollution.", "Take proper steps and prevent air pollution."] },
            { key: "e", instruction: "Negative", text: "Thus environment pollution is really a significant issue for us.", answers: ["Thus environment pollution is not really an insignificant issue for us."] }
        ]
    },
    {
        id: 42,
        title: "Passage 42 (The Jamuna)",
        context: "The name of our motherland is Bangladesh. It is a land of rivers. a) The Jamuna is one of the biggest rivers in Bangladesh (Make it comparative). b) When it is summer, it becomes emaciated (Make it simple). c) During the rainy reason, it assumes a terrible shape (Make it complex). d) Everybody knows it (Make it interrogative). e) Tourists from home and abroad visit its shore (Make it passive).",
        items: [
            { key: "a", instruction: "comparative", text: "The Jamuna is one of the biggest rivers in Bangladesh.", answers: ["The Jamuna is bigger than most other rivers in Bangladesh."] },
            { key: "b", instruction: "simple", text: "When it is summer, it becomes emaciated.", answers: ["In summer, it becomes emaciated."] },
            { key: "c", instruction: "complex", text: "During the rainy reason, it assumes a terrible shape.", answers: ["When it is rainy season, it assumes a terrible shape."] },
            { key: "d", instruction: "interrogative", text: "Everybody knows it.", answers: ["Who doesn't know it?"] },
            { key: "e", instruction: "passive", text: "Touries from home and abroad visit its shore.", answers: ["Its shore is visited by tourists from home and abroad."] }
        ]
    },
    {
        id: 43,
        title: "Passage 43 (Dhaka Life)",
        context: "a) Day to day life in Dhaka is expensive (Negative). b) People living below the poverty line lead a miserable life (Complex). c) Price hike is one of the biggest problems for them (Positive). d) The government has taken necessary measures to keep the price hike under control (Passive). e) The people who are greedy, are responsible for price spiral (Simple).",
        items: [
            { key: "a", instruction: "Negative", text: "Day to day life in Dhaka is expensive.", answers: ["Day to day life in Dhaka is not inexpensive."] },
            { key: "b", instruction: "Complex", text: "People living below the poverty line lead a miserable life.", answers: ["People who live below poverty line lead a miserable life."] },
            { key: "c", instruction: "Positive", text: "Price hike is one of the biggest problems for them.", answers: ["Very few problems for them are as big as price hike."] },
            { key: "d", instruction: "Passive", text: "The government has taken necessary measures to keep the price hike under control.", answers: ["Necessary measure have been taken by the government to keep the price hike under control."] },
            { key: "e", instruction: "Simple", text: "The people who are greedy, are responsible for price spiral.", answers: ["The greedy people are responsible for price spiral."] }
        ]
    },
    {
        id: 44,
        title: "Passage 44 (Golden Egg Goose)",
        context: "a) A farmer had a wonderful goose (Complex). She laid a golden egg everyday. b) The farmer was very excited to see the golden egg. (Compound) c) He sold the eggs in the market and became rich. (Simple) d) But the farmer was too greedy to have all the eggs in a day. (Compound) Then he cut open the belly of the goose. He found no egg inside and became sad. He said to himself. e) She was one of the most wonderful geese of the world. (Positive). But I have killed it and lost my fortune.",
        items: [
            { key: "a", instruction: "Complex", text: "A farmer had a wonderful goose.", answers: ["A farmer had a goose which was wonderful."] },
            { key: "b", instruction: "Compound", text: "The farmer was very excited to see the golden egg.", answers: ["The farmer saw the golden egg and become very excited."] },
            { key: "c", instruction: "Simple", text: "He sold the eggs in the market and became rich.", answers: ["Selling the eggs in the market he became rich."] },
            { key: "d", instruction: "Compound", text: "But the farmer was too greedy to have all the eggs in a day.", answers: ["But the farmer was very greedy and wanted to have all the eggs in a day."] },
            { key: "e", instruction: "Positive", text: "She was one of the most wonderful geese of the world.", answers: ["Very few geese in the world are as wonderful as she."] }
        ]
    },
    {
        id: 45,
        title: "Passage 45 (Human Resources)",
        context: "We live in Bangladesh a) She is not the poorest country in the world (Positive). Too many people live here. b) It is not possible for her to give employment to all these people (Complex). c) People can train themselves in one or other of the vocations (Passive). d) Bangladesh can engage her human resources only after exploring all her other resources (Complex). Until then she can fruitfully utilize her manpower in overseas employment. e) Thus she earns a lot of foreign exchange (Complex).",
        items: [
            { key: "a", instruction: "Positive", text: "She is not the poorest country in the world.", answers: ["She is not as poor as some other countries in the world.", "She is not so poor as many other countries in the world."] },
            { key: "b", instruction: "Complex", text: "It is not possible for her to give employment to all these people.", answers: ["It is not possible for her that she will give employment to all the people."] },
            { key: "c", instruction: "Passive", text: "People can train themselves in one or other of the vocations.", answers: ["People can be trained by themselves in one or other of the vocations."] },
            { key: "d", instruction: "Complex", text: "Bangladesh can engage her human resources only after exploring all her other resources.", answers: ["Bangladesh can engage her human resources only after she has explored all her other resources."] },
            { key: "e", instruction: "Complex", text: "Thus she earns a lot of foreign exchange.", answers: ["This is how she earns a lot of foreign exchange."] }
        ]
    },
    {
        id: 46,
        title: "Passage 46 (First Day at College)",
        context: "a) No other day in my life is as memorable as my first day at college, (Superlative) b) I will never forget this day. (Affirmative) c) I passed the day amidst joy. (Passive) d) What a thrilling experience it was! (Assertive) e) Life was enjoyed with a new Zeal (Active)",
        items: [
            { key: "a", instruction: "Superlative", text: "No other day in my life is as memorable as my first day at college.", answers: ["My first day at college is the most memorable day in my life."] },
            { key: "b", instruction: "Affirmative", text: "I will never forget this day.", answers: ["I will always remember this day."] },
            { key: "c", instruction: "Passive", text: "I passed the day amidst joy.", answers: ["The day was passed amidst joy by me."] },
            { key: "d", instruction: "Assertive", text: "What a thrilling experience it was!", answers: ["It was a very thrilling experience."] },
            { key: "e", instruction: "Active", text: "Life was enjoyed with a new Zeal.", answers: ["We enjoyed life with a new zeal."] }
        ]
    },
    {
        id: 47,
        title: "Passage 47 (Child Labour)",
        context: "a) Child labour is one of the biggest curses of the 21st century (Positive). Child labour, especially employment of children in hazardous grown up work, is a complete violation of human rights. b) Unfortunately this has become very accepted in our society (Complex). c) Only poverty is responsible for this (Negative). d) In a family of five or six children, the parents have to send some of their kids to work so that they can fill their empty stomachs (Simple). e) Though these poor and helpless children have to do back-breaking work all day, in return they are rewarded with all kinds of abuse (Compound).",
        items: [
            { key: "a", instruction: "Positive", text: "Child labour is one of the biggest curses of the 21st century.", answers: ["Very few curses of 21st century are as big as child labour."] },
            { key: "b", instruction: "Complex", text: "Unfortunately this has become very accepted in our society.", answers: ["It is unfortunate that this has become very accepted in our society."] },
            { key: "c", instruction: "Negative", text: "Only poverty is responsible for this.", answers: ["Nothing but poverty is responsible for this."] },
            { key: "d", instruction: "Simple", text: "In a family of five or six children, the parents have to send some of their kids to work so that they can fill their empty stomachs.", answers: ["In a family of five or six children, the parents have to send some of their kids to work to fill their empty stomach."] },
            { key: "e", instruction: "Compound", text: "Though these poor and helpless children have to do back-breaking work all day, in return they are rewarded with all kinds of abuse.", answers: ["These poor and helpless children have to do back-breaking work all day but in return they are rewarded with all kinds of abuse."] }
        ]
    },
    {
        id: 48,
        title: "Passage 48 (Singapore City)",
        context: "a) Very few cities in the world are as busy as Singapore (Comparative). There are hotels in almost every streets. b) Of the hotels, Raffle is one of the finest (Positive). It is in fact, a heaven for the tourists c) Millions of people visit Singapore every year (Passive). d) People who love food can taste local as well as foreign food (Simple). e) The people of Singapore are very well-behaved (Negative).",
        items: [
            { key: "a", instruction: "Comparative", text: "Very few cities in the world are as busy as Singapore.", answers: ["Singapore is busier than most other cities in the world."] },
            { key: "b", instruction: "Positive", text: "Of the hotels, Raffle is one of the finest.", answers: ["Very few of the hotels are as fine as Raffle."] },
            { key: "c", instruction: "Passive", text: "Millions of people visit Singapore every year.", answers: ["Singapore is visited by millions of people every year."] },
            { key: "d", instruction: "Simple", text: "People who love food can taste local as well as foreign food.", answers: ["Food loving people can taste local as well as foreign food."] },
            { key: "e", instruction: "Negative", text: "The people of Singapore are very well-behaved.", answers: ["The people of Singapore are not rough behaved at all.", "The people of Singapore are not rude behaved at all."] }
        ]
    },
    {
        id: 49,
        title: "Passage 49 (Nawab Serajuddaula)",
        context: "a) Nawab Serajuddaula was the most courageous Nawab India has ever seen (Comparative). b) He forgave the English many a time (Passive). c) But the English got desperate because of the collaboration of some of the leading personalities of his court with the English (Complex). d) Serajuddaula was not afraid of it (Interrogative). e) Though they collaborated with the English., he decided to teach the English a lesson (Simple).",
        items: [
            { key: "a", instruction: "Comparative", text: "Nawab Serajuddaula was the most courageous Nawab India has ever seen.", answers: ["Nawab Serajuddaula was more courageous than any other Nawab India has ever seen."] },
            { key: "b", instruction: "Passive", text: "He forgave the English many a time.", answers: ["The English were forgiven many a time by him."] },
            { key: "c", instruction: "Complex", text: "But the English got desperate because of the collaboration of some of the leading personalities of his court with the English.", answers: ["But the English got desperate as some of the leading personalities of his court collaborated with the English."] },
            { key: "d", instruction: "Interrogative", text: "Serajuddaula was not afraid of it.", answers: ["Was Serajuddaula afraid of it?"] },
            { key: "e", instruction: "Simple", text: "Though they collaborated with the English., he decided to teach the English a lesson.", answers: ["In spite of their collaboration with the English, he decided to teach the English a lesson."] }
        ]
    },
    {
        id: 50,
        title: "Passage 50 (Taimur)",
        context: "Taimur was one of the greatest conquerors of the world. a) Young Taimur once attacked the province of a powerful prince (Passive). b) He entered the kingdom of the prince and captured a large village (Simple). It was situated far away from the capital. When the news reached the prince, he came with a large army. The area was surrounded on all sides. c) Taimur's soldiers were all killed by the army (Active). But Taimur escaped with great difficulty. d) He disguised himself as a poor traveller to survive (Complex). One day he became very hungry and could not get anything to eat. e) He came to a house to ask for something to eat (Compound).",
        items: [
            { key: "a", instruction: "Passive", text: "Young Taimur once attacked the province of a powerful prince.", answers: ["Once the province of a powerful prince was attacked by young Taimur."] },
            { key: "b", instruction: "Simple", text: "He entered the kingdom of the prince and captured a large village.", answers: ["Entering the kingdom of the prince he captured a large village."] },
            { key: "c", instruction: "Active", text: "Taimur's soldiers were all killed by the army.", answers: ["The army killed all of Taimur's soldiers."] },
            { key: "d", instruction: "Complex", text: "He disguised himself as a poor traveller to survive.", answers: ["He disguised himself as a poor traveller so that he could survive."] },
            { key: "e", instruction: "Compound", text: "He came to a house to ask for something to eat.", answers: ["He came to a house and asked for something to eat."] }
        ]
    },
    {
        id: 51,
        title: "Passage 51 (Ferocious Tigers)",
        context: "a) Tigers are known as ferocious animals. (Complex) Specialists say that they do not kill any animal that comes their way. A tiger kills to eat and it kills swiftly. b) As the paws are cushioned, a big tiger can walk through the driest leaves without causing a single crackle, (Simple) c) The tiger is one of the most ferocious animals (Comparative). Tigers start hunting an hour or two before dusk. d) Tigers are stronger than lions (Positive). The tiger's jaws are so strong that it can crush a human skull like an egg shell. e) Tigers are extremely strong. (Exclamatory)",
        items: [
            { key: "a", instruction: "Complex", text: "Tigers are known as ferocious animals.", answers: ["Tigers are known as animals that are ferocious."] },
            { key: "b", instruction: "Simple", text: "As the paws are cushioned, a big tiger can walk through the driest leaves without causing a single crackle.", answers: ["The paws beings cushioned, a big tiger can walk through the leaves without causing a single crackle."] },
            { key: "c", instruction: "Comparative", text: "The tiger is one of the most ferocious animals.", answers: ["The tiger is more ferocious than most other ferocious animals."] },
            { key: "d", instruction: "Positive", text: "Tigers are stronger than lions.", answers: ["Lions are not as strong as tigers."] },
            { key: "e", instruction: "Exclamatory", text: "Tigers are extremely strong.", answers: ["How strong tigers are!"] }
        ]
    },
    {
        id: 52,
        title: "Passage 52 (Information Technology)",
        context: "a) Information technology is a wonderful invention. (Exclamatory) b) There are many things that can be included in the information technology. (Simple) c) Computer has pushed the modern age a step ahead, (Complex) d) Internet is the greatest invention in the communication system. (Comparative) e) As Rahim is curious, he will try to invent new things. (Compound)",
        items: [
            { key: "a", instruction: "Exclamatory", text: "Information technology is a wonderful invention.", answers: ["What a wonderful invention information technology is!"] },
            { key: "b", instruction: "Simple", text: "There are many things that can be included in the information technology.", answers: ["Many things can be included in the information technology."] },
            { key: "c", instruction: "Complex", text: "Computer has pushed the modern age a step ahead.", answers: ["It is computer which has pushed the modern age a step ahead."] },
            { key: "d", instruction: "Comparative", text: "Internet is the greatest invention in the communication system.", answers: ["Internet is larger than any other invention in the communication system."] },
            { key: "e", instruction: "Compound", text: "As Rahim is curious, he will try to invent new things.", answers: ["Rahim is curious and so he will try to invent new things."] }
        ]
    },
    {
        id: 53,
        title: "Passage 53 (Science Wonders)",
        context: "a) Science has discovered many wonders (Passive). b) Computer is one of the greatest wonders in modern science (Positive). c) It was not invented by modern science overnight (Active). d) It has lessened our work load and made our life easy (Simple). e) What a great invention the computer is! (Assertive).",
        items: [
            { key: "a", instruction: "Passive", text: "Science has discovered many wonders.", answers: ["Many wonders have been discovered by science."] },
            { key: "b", instruction: "Positive", text: "Computer is one of the greatest wonders in modern science.", answers: ["Very few wonders in modern science are as great as computer."] },
            { key: "c", instruction: "Active", text: "It was not invented by modern science overnight.", answers: ["Modern science did not invent it overnight."] },
            { key: "d", instruction: "Simple", text: "It has lessened our work load and made our life easy.", answers: ["Having lessened our work load it has made our life easy."] },
            { key: "e", instruction: "Assertive", text: "What a great invention the computer is!", answers: ["The computer is a very great invention."] }
        ]
    },
    {
        id: 54,
        title: "Passage 54 (The Road Fool)",
        context: "a) A fool was sitting by the side of a village road (Make it complex) b) He was digging holes in several places (Make it passive). Now it happened that a king's minister was passing by that way. c) Seeing the strange appearance of the fool, he asked him about the reason of his action (Make it compound). He also told that people passing by would put their feet in them and fall down. The fool replied, 'Why should they fall in? I have not dug in the middle of the path. d) Only those who leave the straight road, will fall into my pit' (Make it negative). e) The minister then asked what his occupation was (Make it simple).",
        items: [
            { key: "a", instruction: "complex", text: "A fool was sitting by the side of a village road.", answers: ["It was the side of a village road by which a fool was sitting."] },
            { key: "b", instruction: "passive", text: "He was digging holes in several places.", answers: ["Holes were being dug in several places by him."] },
            { key: "c", instruction: "compound", text: "Seeing the strange appearance of the fool, he asked him about the reason of his action.", answers: ["He saw the strange appearance of the fool and asked him about the reason of his action."] },
            { key: "d", instruction: "negative", text: "Only those who leave the straight road, will fall into my pit.", answers: ["None but those who leave the straight road, will fall into my pit."] },
            { key: "e", instruction: "simple", text: "The minister then asked what his occupation was.", answers: ["The minister then asked about his occupation."] }
        ]
    },
    {
        id: 55,
        title: "Passage 55 (Virtuous Character)",
        context: "a) Truthfulness is one of the greatest virtues in a man's life (Positive). It means the quality of speaking the truth. b) It ennobles one's character and gives one high position in society (Simple). c) It may not make one rich but it brings peace in mind (Complex). d) A truthful person is loved and respected by all (Active). e) A truthful person cares nobody (Negative).",
        items: [
            { key: "a", instruction: "Positive", text: "Truthfulness is one of the greatest virtues in a man's life.", answers: ["Very few virtues in a man's life are as great as truthfulness."] },
            { key: "b", instruction: "Simple", text: "It ennobles one's character and gives one high position in society.", answers: ["Ennobling one's character, it gives one high position in society."] },
            { key: "c", instruction: "Complex", text: "It may not make one rich but it brings peace in mind.", answers: ["Though it may not make one rich, it brings peace in mind."] },
            { key: "d", instruction: "Active", text: "A truthful person is loved and respected by all.", answers: ["All love and respect a truthful person."] },
            { key: "e", instruction: "Negative", text: "A truthful person cares nobody.", answers: ["A truthful person does not care anybody."] }
        ]
    },
    {
        id: 56,
        title: "Passage 56 (Mohammad Muhsin)",
        context: "a) Mohammad Muhsin was a kind man (Negative). b) He inherited vast property from his father and sister (Interrogative). c) He did not marry (Affirmative). d) During his lifetime, he spent money lavishly to help the poor (Complex). e) One night when he was saying his prayer, a thief broke into his room (Simple).",
        items: [
            { key: "a", instruction: "Negative", text: "Mohammad Muhsin was a kind man.", answers: ["Mohammad Muhsin was not an unkind man."] },
            { key: "b", instruction: "Interrogative", text: "He inherited vast property from his father and sister.", answers: ["Didn't he inherit vast property from his father and sister?"] },
            { key: "c", instruction: "Affirmative", text: "He did not marry.", answers: ["He was unmarried."] },
            { key: "d", instruction: "Complex", text: "During his lifetime, he spent money lavishly to help the poor.", answers: ["When he survived, he spent money lavishly to help the poor."] },
            { key: "e", instruction: "Simple", text: "One night when he was saying his prayer, a thief broke into his room.", answers: ["One night at the time of his prayer, a thief broke into his room."] }
        ]
    },
    {
        id: 57,
        title: "Passage 57 (Invitation Journey)",
        context: "a) My friend invited me to pay a visit to Cox's Bazar. (Interrogative) b) I gladly accepted the invitation. (Passive) c) When I reached there, my friend received me cordially. (Compound) d) I was very glad to see the sea-beach. (Exclamatory) e) It was one of he most memorable journeys in my life. (Passive)",
        items: [
            { key: "a", instruction: "Interrogative", text: "My friend invited me to pay a visit to Cox's Bazar.", answers: ["Didn't my friend invite me to pay a visit to Cox's Bazar?"] },
            { key: "b", instruction: "Passive", text: "I gladly accepted the invitation.", answers: ["The invitation was gladly accepted by me."] },
            { key: "c", instruction: "Compound", text: "When I reached there, my friend received me cordially.", answers: ["I reached there and my friend received me cordially."] },
            { key: "d", instruction: "Exclamatory", text: "I was very glad to see the sea-beach.", answers: ["How glad I was to see the sea beach!"] },
            { key: "e", instruction: "Passive", text: "It was one of he most memorable journeys in my life.", answers: ["Very few journeys in my life were so memorable as it.", "Very few journeys in my life were as memorable as it."] }
        ]
    },
    {
        id: 58,
        title: "Passage 58 (Illiteracy Problem)",
        context: "a) No other problem in Bangladesh is as great as illiteracy (Comparative). Most of our people cannot read or write. b) So the literacy rate in Bangladesh is very poor (Negative). c) It is too poor to imagine (Complex). d) It is the duty of the educated people to educate the illiterate (Interrogative). e) The government has taken necessary steps to eradicate illiteracy (Passive).",
        items: [
            { key: "a", instruction: "Comparative", text: "No other problem in Bangladesh is as great as illiteracy.", answers: ["Illiteracy is greater than any other problem in Bangladesh."] },
            { key: "b", instruction: "Negative", text: "So the literacy rate in Bangladesh is very poor.", answers: ["So the literacy rate in Bangladesh is not very high."] },
            { key: "c", instruction: "Complex", text: "It is too poor to imagine.", answers: ["It is so poor that none can imagine it."] },
            { key: "d", instruction: "Interrogative", text: "It is the duty of the educated people to educate the illiterate.", answers: ["Isn't it the duty of the educated people to educate the illiterate?"] },
            { key: "e", instruction: "Passive", text: "The government has taken necessary steps to eradicate illiteracy.", answers: ["Necessary steps to eradicate illiteracy have been taken by the government."] }
        ]
    },
    {
        id: 59,
        title: "Passage 59 (Populous Country)",
        context: "Bangladesh is a small country but has a vast population. a) Very few countries in the world are as populous as it (Comparative). Most of the people here live in the villages. b) People, who live in the villages are farmers (Simple). c) The farmers work hard to support themselves (Complex). d) They are honest and pious (Negative). e) They should be taken care of (Active).",
        items: [
            { key: "a", instruction: "Comparative", text: "Very few countries in the world are as populous as it.", answers: ["It is more populous than most other countries in the world."] },
            { key: "b", instruction: "Simple", text: "People, who live in the villages are farmers.", answers: ["People living in the villages are farmers."] },
            { key: "c", instruction: "Complex", text: "The farmers work hard to support themselves.", answers: ["The farmers work hard so that they may support themselves."] },
            { key: "d", instruction: "Negative", text: "They are honest and pious.", answers: ["They are not dishonest and impious."] },
            { key: "e", instruction: "Active", text: "They should be taken care of.", answers: ["We should take care of them."] }
        ]
    },
    {
        id: 60,
        title: "Passage 60 (Old Woman and Buddha)",
        context: "There lived a poor old woman. She lost her only son. a) She had none who could look after her (Simple). b) The bereavement overwhelmed the old woman (Passive). She came to Buddha. c) She wanted Buddha to bring her dead child to life (Complex). d) Buddha was moved to pity at her great sorrow (Active). He bade her bring a handful of mustard from a house where none had ever died. e) Though she searched for such a house, she could not find any (Compound).",
        items: [
            { key: "a", instruction: "Simple", text: "She had none who could look after her.", answers: ["She had none to look after her."] },
            { key: "b", instruction: "Passive", text: "The bereavement overwhelmed the old woman.", answers: ["The old woman was overwhelmed at the bereavement."] },
            { key: "c", instruction: "Complex", text: "She wanted Buddha to bring her dead child to life.", answers: ["She wanted that Buddha would bring her dead child to life."] },
            { key: "d", instruction: "Active", text: "Buddha was moved to pity at her great sorrow.", answers: ["Her great sorrow moved Buddha to pity."] },
            { key: "e", instruction: "Compound", text: "Though she searched for such a house, she could not find any.", answers: ["She searched for such a house but she could not find any."] }
        ]
    },
    {
        id: 61,
        title: "Passage 61 (Sangsad Bhaban)",
        context: "a) The Sangsad Bhaban at Sher-e-Bangla Nagar in Dhaka is a wonder of modern architecture and technology (Complex). b) It is one of the largest and most spectacular parliament buildings in the world (Positive). c) It is Louis I Kahn who is the designer of the Parliament Bhaban (Simple). d) The main section is hidden by a strong outer wall (Active). e) Although construction work started in 1964, it was finally inaugurated in 1982 (Negative).",
        items: [
            { key: "a", instruction: "Complex", text: "The Sangsad Bhaban at Sher-e-Bangla Nagar in Dhaka is a wonder of modern architecture and technology.", answers: ["The Sangsad Bhaban which is at Sher-e-Bangla Nagar in Dhaka, is a wonder of modern architecture and technology."] },
            { key: "b", instruction: "Positive", text: "It is one of the largest and most spectacular parliament buildings in the world.", answers: ["Very few parliament buildings in the world are so large and spectacular as it is."] },
            { key: "c", instruction: "Simple", text: "It is Louis I Kahn who is the designer of the Parliament Bhaban.", answers: ["Louis I Kahn is the designer of the Parliament Bhaban."] },
            { key: "d", instruction: "Active", text: "The main section is hidden by a strong outer wall.", answers: ["A strong outer wall hides the main section."] },
            { key: "e", instruction: "Negative", text: "Although construction work started in 1964, it was finally inaugurated in 1982.", answers: ["Although construction work started in 1964, it was finally not inaugurated before 1982."] }
        ]
    },
    {
        id: 62,
        title: "Passage 62 (Poverty Condition)",
        context: "a) Poverty is the most undesirable condition in a person's life (Positive). b) It is a great problem of a country (Negative). c) It destroys the dignity of an individual as well as a nation (Passive). d) Bangladesh is a poor country but blessed with a lot of natural resources (Simple). e) Proper utilization of these resources can eradicate our poverty (Complex).",
        items: [
            { key: "a", instruction: "Positive", text: "Poverty is the most undesirable condition in a person's life.", answers: ["No other condition in a person's life is so undesirable as poverty."] },
            { key: "b", instruction: "Negative", text: "It is a great problem of a country.", answers: ["Isn't it a great problem of a country?"] },
            { key: "c", instruction: "Passive", text: "It destroys the dignity of an individual as well as a nation.", answers: ["The dignity of an individual as well as a nation is destroyed by it."] },
            { key: "d", instruction: "Simple", text: "Bangladesh is a poor country but blessed with a lot of natural resources.", answers: ["In spite of its poverty, Bangladesh is blessed with a lot of natural resources."] },
            { key: "e", instruction: "Complex", text: "Proper utilization of these resources can eradicate our poverty.", answers: ["If we utilize these resources properly, we can eradicate our poverty."] }
        ]
    },
    {
        id: 63,
        title: "Passage 63 (Newspaper Daily)",
        context: "a) Newspaper is such a thing without which we can't go a single day (Simple). b) It is one of the most important things in mundane life (Positive). c) It upholds the society, art and culture of a country (Passive). d) But a newspaper is never free from prejudice (Affirmative). e) There is no doubt that newspaper is a very essential thing (Interrogative).",
        items: [
            { key: "a", instruction: "Simple", text: "Newspaper is such a thing without which we can't go a single day.", answers: ["We cannot go a single day without newspaper."] },
            { key: "b", instruction: "Positive", text: "It is one of the most important things in mundane life.", answers: ["Very few things in mundane life are as important as it."] },
            { key: "c", instruction: "Passive", text: "It upholds the society, art and culture of a country.", answers: ["The society, art and culture of the country are upheld by it."] },
            { key: "d", instruction: "Affirmative", text: "But a newspaper is never free from prejudice.", answers: ["But a newspaper is always full of prejudice."] },
            { key: "e", instruction: "Interrogative", text: "There is no doubt that newspaper is a very essential thing.", answers: ["Is there any doubt that newspaper is a very essential thing?"] }
        ]
    },
    {
        id: 64,
        title: "Passage 64 (Honesty Policy)",
        context: "a) Honesty is the best policy (Positive). b) An honest man is respected everywhere (Interrogative). c) The students who keep this view in mind never do anything unjust (Simple). d) An honest man sometimes may have to face the hard realities of life but he/she can overcome all the obstacles successfully (Complex). e) We wish we could do so (Exclamatory).",
        items: [
            { key: "a", instruction: "Positive", text: "Honesty is the best policy.", answers: ["No other policy is as good as honesty."] },
            { key: "b", instruction: "Interrogative", text: "An honest man is respected everywhere.", answers: ["Isn't an honest man respected everywhere?"] },
            { key: "c", instruction: "Simple", text: "The students who keep this view in mind never do anything unjust.", answers: ["The students keeping this view in mind never do anything unjust."] },
            { key: "d", instruction: "Complex", text: "An honest man sometimes may have to face the hard realities of life but he/she can overcome all the obstacles successfully.", answers: ["Though an honest man sometimes may have to face the hard realities of life, he/she can overcome all the obstacles successfully.", "Although an honest man sometimes may have to face the hard realities of life, he/she can overcome all the obstacles successfully."] },
            { key: "e", instruction: "Exclamatory", text: "We wish we could do so.", answers: ["If we could do so!", "Would that we could do so!"] }
        ]
    },
    {
        id: 65,
        title: "Passage 65 (Good Teacher)",
        context: "a) A good teacher is one of the most important people in any country (Comparative). b) He plays a very significant role to educate the nation (Exclamatory). c) The good teacher discovers the treasure hidden inside each student (Complex). d) He keeps his students busy so that he can make them happy (Simple). e) Bangladesh is in need of good teachers (Interrogative).",
        items: [
            { key: "a", instruction: "Comparative", text: "A good teacher is one of the most important people in any country.", answers: ["A good teacher is more important than most other people in any country."] },
            { key: "b", instruction: "Exclamatory", text: "He plays a very significant role to educate the nation.", answers: ["What a significant role he plays to educate the nation!"] },
            { key: "c", instruction: "Complex", text: "The good teacher discovers the treasure hidden inside each student.", answers: ["A good teacher discovers the treasure which is hidden inside each student."] },
            { key: "d", instruction: "Simple", text: "He keeps his students busy so that he can make them happy.", answers: ["He keeps his students busy to make them happy."] },
            { key: "e", instruction: "Interrogative", text: "Bangladesh is in need of good teachers.", answers: ["Isn't Bangladesh in need of good teachers?"] }
        ]
    },
    {
        id: 66,
        title: "Passage 66 (English Importance)",
        context: "a) English is more important than any other language in the world (Positive). So organizations need employees who are expert in English. b) English helps people to get good jobs (Passive). c) English plays a very important role for better salaries (Exclamatory). This is admitted by everyone. d) If you acquire a good command in English, you must be successful in every sphere in life (Compound). This is the common belief and e) this is always true (Negative).",
        items: [
            { key: "a", instruction: "Positive", text: "English is more important than any other language in the world.", answers: ["No other language in the world is as important as English."] },
            { key: "b", instruction: "Passive", text: "English helps people to get good jobs.", answers: ["People are helped to get good jobs by English."] },
            { key: "c", instruction: "Exclamatory", text: "English plays a very important role for better salaries.", answers: ["What an important role for better salaries English plays!"] },
            { key: "d", instruction: "Compound", text: "If you acquire a good command in English, you must be successful in every sphere in life.", answers: ["Acquire a good command in English and you must be successful in every sphere life."] },
            { key: "e", instruction: "Negative", text: "this is always true.", answers: ["This is never false."] }
        ]
    },
    {
        id: 67,
        title: "Passage 67 (Acid Throwing)",
        context: "a) Acid throwing is one of the heinous crimes (Positive). b) It is an inhuman and barbarous act (Complex). c) The problem cannot be solved overnight (Passive). d) If we fail to solve the problem, law and order situation will deteriorate (Simple). e) Government has already made law for the punishment of the acid throwers (Compound).",
        items: [
            { key: "a", instruction: "Positive", text: "Acid throwing is one of the heinous crimes.", answers: ["Very few crimes are as heinous as acid throwing."] },
            { key: "b", instruction: "Complex", text: "It is an inhuman and barbarous act.", answers: ["It is an act which is inhuman and barbarous."] },
            { key: "c", instruction: "Passive", text: "The problem cannot be solved overnight.", answers: ["The problem cannot be solved overnight."] },
            { key: "d", instruction: "Simple", text: "If we fail to solve the problem, law and order situation will deteriorate.", answers: ["Law and order situation will deteriorate in case of our failure to solve the problem."] },
            { key: "e", instruction: "Compound", text: "Government has already made law for the punishment of the acid throwers.", answers: ["Government has already made law and, therefore, the acid throwers will be punished."] }
        ]
    },
    {
        id: 68,
        title: "Passage 68 (Nutrition Knowledge)",
        context: "a) We eat to preserve our health (Complex). b) People who live in plenty do not eat the right kind of food (Simple) c) In one sense, they are not less responsible than the poor (Positive). d) Because the poor think that costly food is better than any food (Superlative). e) The lack of knowledge of nutrition is the only cause of malnutrition (Negative).",
        items: [
            { key: "a", instruction: "Complex", text: "We eat to preserve our health.", answers: ["We eat because we want to preserve our health.", "We eat so that we may preserve our health."] },
            { key: "b", instruction: "Simple", text: "People who live in plenty do not eat the right kind of food.", answers: ["People living in plenty do not eat the right kind of food."] },
            { key: "c", instruction: "Positive", text: "In one sense, they are not less responsible than the poor.", answers: ["In one sense, they are as responsible as the poor."] },
            { key: "d", instruction: "Superlative", text: "Because the poor think that costly food is better than any food.", answers: ["Because the poor think that costly food is the best food."] },
            { key: "e", instruction: "Negative", text: "The lack of knowledge of nutrition is the only cause of malnutrition.", answers: ["The lack of knowledge of nutrition is nothing but the cause of malnutrition."] }
        ]
    },
    {
        id: 69,
        title: "Passage 69 (Mountain Orphanage)",
        context: "a) The orphanage is high in the Carolina Mountains (Interrogative). b) In winter the snowdrifts are so deep that the institution is cut off from the village below (Compound). c) Fog hides the mountain's peaks (Passive) d) The wind blows so bitterly and the orphanage boys feel severe pain (Complex). Jerry has been living at the orphanage since he was four. e) He is one of the most courageous boys in the orphanage (Positive).",
        items: [
            { key: "a", instruction: "Interrogative", text: "The orphanage is high in the Carolina Mountains.", answers: ["Isn't the orphanage high in the Carolina mountains?"] },
            { key: "b", instruction: "Compound", text: "In winter the snowdrifts are so deep that the institution is cut off from the village below.", answers: ["In winter the snowdrifts are very deep and so the institution is cut off fro the village below."] },
            { key: "c", instruction: "Passive", text: "Fog hides the mountain's peaks.", answers: ["The mountain peaks are hidden in fog.", "The mountain peaks are hidden by fog."] },
            { key: "d", instruction: "Complex", text: "The wind blows so bitterly and the orphanage boys feel severe pain.", answers: ["The wind blows so bitterly that the orphanage boys feel severe pain."] },
            { key: "e", instruction: "Positive", text: "He is one of the most courageous boys in the orphanage.", answers: ["Very few boys in the orphanage are as courageous as he."] }
        ]
    },
    {
        id: 70,
        title: "Passage 70 (Sleep & Brush)",
        context: "a) I went back to work, closing the door (Compound). b) At first the sound of the boy dragging brush annoyed me (Passive). He began to chop. c) The blows that he made were rhythmic and steady (Simple). d) The sound of his blow are rhythmic than a constant rain (Positive). e) Having forgotten the boy I went back to sleep (Interrogative).",
        items: [
            { key: "a", instruction: "Compound", text: "I went back to work, closing the door.", answers: ["I closed the door and went back to work."] },
            { key: "b", instruction: "Passive", text: "At first the sound of the boy dragging brush annoyed me.", answers: ["At first I was annoyed by the sound of the boy dragging brush."] },
            { key: "c", instruction: "Simple", text: "The blows that he made were rhythmic and steady.", answers: ["The blows made by him were rhythmic and steady."] },
            { key: "d", instruction: "Positive", text: "The sound of his blow are rhythmic than a constant rain.", answers: ["A constant rain was not as rhythmic as the sound of his blow."] },
            { key: "e", instruction: "Interrogative", text: "Having forgotten the boy I went back to sleep.", answers: ["Didn't I go back to sleep having forgotten the boy?"] }
        ]
    },
    {
        id: 71,
        title: "Passage 71 (Foyot's Restaurant)",
        context: "a) Foyot's is a restaurant at which the French senators eat. (Simple) b) It was so far beyond my means that I had never even thought of going there. (Compound) c) I was too young to have learned to say 'no' to a woman. (Compound) d) I had eighty francs to last me the rest of the month. (Complex) e) I thought a modest luncheon should not cost me more than fifteen. (Positive)",
        items: [
            { key: "a", instruction: "Simple", text: "Foyot's is a restaurant at which the French senators eat.", answers: ["Foyot's is a restaurant for the French senators' eating."] },
            { key: "b", instruction: "Compound", text: "It was so far beyond my means that I had never even thought of going there.", answers: ["It was very far beyond my means and so I had never even thought of going there."] },
            { key: "c", instruction: "Compound", text: "I was too young to have learned to say 'no' to a woman.", answers: ["I was very young and so I had not learned to say 'no' to a woman."] },
            { key: "d", instruction: "Complex", text: "I had eighty francs to last me the rest of the month.", answers: ["I had eighty francs by which I could last the rest of the month."] },
            { key: "e", instruction: "Positive", text: "I thought a modest luncheon should not cost me more than fifteen.", answers: ["I thought a modest luncheon should cost as much as fifteen francs."] }
        ]
    },
    {
        id: 72,
        title: "Passage 72 (Sundarbans)",
        context: "a) Sundarbans that is unique creation of nature is called the 52th World's Heritage Site. (Simple) b) It is called the mangrove forest. (Active) c) It is one of the biggest mangrove forests in the world. (Positive) d) Sundarbans protects southern part of our country in time of our natural disaster. (Complex) e) Many people go to the Sundarbans to observe natural beauties. (Compound)",
        items: [
            { key: "a", instruction: "Simple", text: "Sundarbans that is unique creation of nature is called the 52th World's Heritage Site.", answers: ["Sundarbans, a unique creation of nature, is called the 52th World Heritage Site."] },
            { key: "b", instruction: "Active", text: "It is called the mangrove forest.", answers: ["People call it the mangrove forest.", "We call it the mangrove forest."] },
            { key: "c", instruction: "Positive", text: "It is one of the biggest mangrove forests in the world.", answers: ["Very few mangrove forests in the world are as big as it."] },
            { key: "d", instruction: "Complex", text: "Sundarbans protects southern part of our country in time of our natural disaster.", answers: ["Sundarbans protects southern part of our country when we face natural disaster."] },
            { key: "e", instruction: "Compound", text: "Many people go to the Sundarbans to observe natural beauties.", answers: ["Many people go to the Sundarbans and observe natural beauties."] }
        ]
    },
    {
        id: 73,
        title: "Passage 73 (Rohingya Crisis)",
        context: "a) Rohingya crisis is one of the most alarming problems in the world. (Positive) b) Although they are real inhabitants of Myanmar, they are now being tyrannized by the govt. and the army of Myanmar. (Simple) c) The army of Myanmar killed thousand of people. (Passive) d) The Govt. of Myanmar is trying to rule out the genocide to avoid global pressure. (Complex) e) Many people wanted to save their lives, therefore, they entered into Bangladesh. (Complex)",
        items: [
            { key: "a", instruction: "Positive", text: "Rohingya crisis is one of the most alarming problems in the world.", answers: ["Very few problems in the world are so alarming as Rohingya crisis."] },
            { key: "b", instruction: "Simple", text: "Although they are real inhabitants of Myanmar, they are now being tyrannized by the govt. and the army of Myanmar.", answers: ["In spite of being real inhabitants of Myanmar, they are now being tyrannized by the govt. and the army of Myanmar."] },
            { key: "c", instruction: "Passive", text: "The army of Myanmar killed thousand of people.", answers: ["Thousand of people were killed by the army of Myanmar."] },
            { key: "d", instruction: "Complex", text: "The Govt. of Myanmar is trying to rule out the genocide to avoid global pressure.", answers: ["The govt. of Myanmar is trying to rule out the genocide so that they can avoid global pressure."] },
            { key: "e", instruction: "Complex", text: "Many people wanted to save their lives, therefore, they entered into Bangladesh.", answers: ["Many people entered into Bangladesh so that they can save their lives."] }
        ]
    },
    {
        id: 74,
        title: "Passage 74 (Anne Frank)",
        context: "a) Anne Frank is perhaps the most well-known victim of the Nazi Holocaust. (Positive) b) She was given a diary in which she chronicled her life from 1942 to 1944. (Simple) c) During this time, Anne spent two years in hiding. (Passive) d) She was sent to Bergen-Belsen Concentration Camp; for, she was betrayed and discovered. (complex) e) Notwithstanding being killed, her name remains undying (compound)",
        items: [
            { key: "a", instruction: "Positive", text: "Anne Frank is perhaps the most well-known victim of the Nazi Holocaust.", answers: ["No other victim of the Nazi Holocaust is perhaps as well-known as Anne Frank."] },
            { key: "b", instruction: "Simple", text: "She was given a diary in which she chronicled her life from 1942 to 1944.", answers: ["In a given diary, she chronicled her life from 1942 to 1944."] },
            { key: "c", instruction: "Passive", text: "During this time, Anne spent two years in hiding.", answers: ["During this time, two years were spent by Anne in hiding."] },
            { key: "d", instruction: "complex", text: "She was sent to Bergen-Belsen Concentration Camp; for, she was betrayed and discovered.", answers: ["She was sent to Bergen-Belsen Concentration Camp when she was betrayed and discovered.", "She was sent to Bergen-Belsen Concentration Camp as she was betrayed and discovered."] },
            { key: "e", instruction: "compound", text: "Notwithstanding being killed, her name remains undying.", answers: ["She was killed but her name remains undying."] }
        ]
    },
    {
        id: 75,
        title: "Passage 75 (House and Home)",
        context: "a) A house is the place where we live in (Compound). b) Houses keep us safe and sound (Passive). We live in houses in order to protect ourselves. c) People build homes to protect themselves from flood and wild animals (Complex). Houses keep people comfortable and happy. d) Everyone wants that he might live in good house (Simple). e) But does everyone have a good house? (Assertive)",
        items: [
            { key: "a", instruction: "Compound", text: "A house is the place where we live in.", answers: ["A house is a place and we live there."] },
            { key: "b", instruction: "Passive", text: "Houses keep us safe and sound.", answers: ["We are kept safe and sound by houses."] },
            { key: "c", instruction: "Complex", text: "People build homes to protect themselves from flood and wild animals.", answers: ["People build houses so that they can protect themselves from flood and wild animals."] },
            { key: "d", instruction: "Simple", text: "Everyone wants that he might live in good house.", answers: ["Everyone wants to live in a good house."] },
            { key: "e", instruction: "Assertive", text: "But does everyone have a good house?", answers: ["Everyone doesn't have a good house."] }
        ]
    },
    {
        id: 76,
        title: "Passage 76 (The Cuckoo)",
        context: "a) The cuckoo is a bird of very shy nature (Make it complex). b) It is not very often seen beside human habitation (Make it affirmative). c) They hide themselves and coo from the high branches of trees (Make it simple). d) Though they are very coward, they are very clever birds (Make it compound). e) They lay their eggs in the nests of crows (Make it complex).",
        items: [
            { key: "a", instruction: "complex", text: "The cuckoo is a bird of very shy nature.", answers: ["The cuckoo is a bird which is very shy by nature."] },
            { key: "b", instruction: "affirmative", text: "It is not very often seen beside human habitation.", answers: ["It is rarely seen beside human habitation."] },
            { key: "c", instruction: "simple", text: "They hide themselves and coo from the high branches of trees.", answers: ["Hiding themselves, they coo from the high branches of trees."] },
            { key: "d", instruction: "compound", text: "Though they are very coward, they are very clever birds.", answers: ["They are very coward but they are very clever birds."] },
            { key: "e", instruction: "complex", text: "They lay their eggs in the nests of crows.", answers: ["They lay their eggs in the nests which belong to crows."] }
        ]
    },
    {
        id: 77,
        title: "Passage 77 (Hakaluki Haor)",
        context: "a) Hakaluki haor is as very important resting place for migratory waterfowls flying in from the north. (Complex) b) The Bareheaded Goose is the most interesting species seen in the haor. (Positive) c) Many other important species of waterfowls make the haor their temporary home. (Passive) d) It is unfortunate that illegal poaching is threatening the waterfowl population in this vast wetland. (Simple) e) How cruel the illegal poachers are! (Assertive)",
        items: [
            { key: "a", instruction: "Complex", text: "Hakaluki haor is as very important resting place for migratory waterfowls flying in from the north.", answers: ["Hakaluki haor is a very important resting place for migratory waterfowls which fly in from the north."] },
            { key: "b", instruction: "Positive", text: "The Bareheaded Goose is the most interesting species seen in the haor.", answers: ["No other species seen in the haor is so interesting as the Bareheaded Goose.", "No other species seen in the haor is as interesting as the Bareheaded Goose."] },
            { key: "c", instruction: "Passive", text: "Many other important species of waterfowls make the haor their temporary home.", answers: ["The haor is made their temporary home by many other important species."] },
            { key: "d", instruction: "Simple", text: "It is unfortunate that illegal poaching is threatening the waterfowl population in this vast wetland.", answers: ["Unfortunately, illegal poaching is treating the waterfowl population in this vast wetland."] },
            { key: "e", instruction: "Assertive", text: "How cruel the illegal poachers are!", answers: ["The illegal poachers are very cruel."] }
        ]
    },
    {
        id: 78,
        title: "Passage 78 (Autumn Cabin)",
        context: "a) I was there when it was autumn. (Simple) b) I wanted a quiet place to finish some writings. (Complex) c) I hired a cabin that belonged to the orphanage. (Compound) d) I asked for a boy to chop wood for the fire place. (Passive) e) The first few days were warm. (Negative)",
        items: [
            { key: "a", instruction: "Simple", text: "I was there when it was autumn.", answers: ["I was there in autumn."] },
            { key: "b", instruction: "Complex", text: "I wanted a quiet place to finish some writings.", answers: ["I wanted a quiet place so that I could finish some writings."] },
            { key: "c", instruction: "Compound", text: "I hired a cabin that belonged to the orphanage.", answers: ["I hired a cabin and it belonged to the orphanage."] },
            { key: "d", instruction: "Passive", text: "I asked for a boy to chop wood for the fire place.", answers: ["A boy was asked for by me to chop wood for fire place."] },
            { key: "e", instruction: "Negative", text: "The first few days were warm.", answers: ["The first few days were not cold."] }
        ]
    },
    {
        id: 79,
        title: "Passage 79 (Julius Caesar)",
        context: "a) Julius Caesar is one of the greatest tragedies of Shakespeare. (Positive) It is one of the Roman tragedies. b) It depicts one of the most catastrophic events of the murder of Julius Caesar. (Passive) c) The day opens with the workmen of Rome, celebrating the victory of Caesar. (Complex) d) When Caesar returned to Rome, he was received with flowers. (Simple) e) Though everybody suspected the murder of Caesar, Caesar did not believe it. (Compound) Ultimately Julius Caesar was murdered by his close friend Brutus.",
        items: [
            { key: "a", instruction: "Positive", text: "Julius Caesar is one of the greatest tragedies of Shakespeare.", answers: ["Very few tragedies of Shakespeare are as great as Julius Caesar."] },
            { key: "b", instruction: "Passive", text: "It depicts one of the most catastrophic events of the murder of Julius Caesar.", answers: ["One of the most catastrophic events of the murder of Julius Caesar is depicted by it."] },
            { key: "c", instruction: "Complex", text: "The day opens with the workmen of Rome, celebrating the victory of Caesar.", answers: ["The day opens with the workmen of Rome who are celebrating the victory of Caesar."] },
            { key: "d", instruction: "Simple", text: "When Caesar returned to Rome, he was received with flowers.", answers: ["Returning to Rome, Caesar was received with flowers."] },
            { key: "e", instruction: "Compound", text: "Though everybody suspected the murder of Caesar, Caesar did not believe it.", answers: ["Everybody suspected the murder of Caesar but Caesar did not believe it."] }
        ]
    },
    {
        id: 80,
        title: "Passage 80 (Life and Industry)",
        context: "a) None can prosper in life without industry. (Affirmative) b) Those who are idle, always lag behind. (Simple) c) We have to work hard to earn money and knowledge. (Complex) d) In the society, woman should work as much as man. (Comparative) e) Once women were neglected. (Active)",
        items: [
            { key: "a", instruction: "Affirmative", text: "None can prosper in life without industry.", answers: ["Everybody can prosper in life with industry."] },
            { key: "b", instruction: "Simple", text: "Those who are idle, always lag behind.", answers: ["The idle always lag behind."] },
            { key: "c", instruction: "Complex", text: "We have to work hard to earn money and knowledge.", answers: ["We have to work hard if we want to earn money and knowledge."] },
            { key: "d", instruction: "Comparative", text: "In the society, woman should work as much as man.", answers: ["In the society, woman should not work more than man."] },
            { key: "e", instruction: "Active", text: "Once women were neglected.", answers: ["Once the society neglected women."] }
        ]
    }
];