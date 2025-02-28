import { Article } from '../types';

export const mockArticles: Article[] = [
  {
    id: '1',
    title: 'PM Modi Inaugurates New Parliament Building in Delhi',
    description: 'Prime Minister Narendra Modi inaugurated the new Parliament building in New Delhi, marking a significant milestone in India\'s democratic history.',
    content: 'Prime Minister Narendra Modi on Sunday inaugurated the new Parliament building, a triangular-shaped four-storey building with a built-up area of 64,500 square metres. The building, which has three main gates, has separate entrances for VVIPs, MPs, and visitors. The new building can comfortably seat 888 members in the Lok Sabha chamber and 300 in the Rajya Sabha chamber.',
    url: 'https://example.com/politics/modi-inaugurates-parliament',
    image: 'https://images.unsplash.com/photo-1565674484371-599c3c11c9d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwcGFybGlhbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    publishedAt: '2023-05-28T09:30:00Z',
    source: {
      name: 'Indian Express',
      url: 'https://indianexpress.com'
    },
    category: 'politics',
    aiSummary: 'PM Modi inaugurated the new Parliament building in Delhi, a significant milestone for Indian democracy.',
    language: 'english'
  },
  {
    id: '2',
    title: 'Sensex Hits All-Time High, Crosses 70,000 Mark',
    description: 'The BSE Sensex crossed the 70,000 mark for the first time ever, driven by strong foreign institutional investor inflows and positive global cues.',
    content: 'The BSE Sensex crossed the 70,000 mark for the first time on Monday, driven by strong foreign institutional investor (FII) inflows and positive global cues. The 30-share index rose by 650 points, or 0.93%, to hit an all-time high of 70,048.90 in early trade. The broader NSE Nifty also surged to a record high of 21,100.20, up 180 points or 0.86%. Banking, IT, and auto stocks led the rally, with HDFC Bank, TCS, and Maruti Suzuki being the top gainers.',
    url: 'https://example.com/business/sensex-hits-70000',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    publishedAt: '2023-11-20T04:15:00Z',
    source: {
      name: 'Economic Times',
      url: 'https://economictimes.indiatimes.com'
    },
    category: 'business',
    aiSummary: 'Sensex crossed 70,000 for the first time, driven by strong FII inflows and positive global cues.',
    language: 'english'
  },
  {
    id: '3',
    title: 'India Successfully Tests Indigenous Quantum Communication Technology',
    description: 'DRDO and IIT Delhi researchers have successfully tested a quantum key distribution (QKD) system, marking a significant advancement in secure communications technology.',
    content: 'In a major breakthrough, researchers from the Defence Research and Development Organisation (DRDO) and Indian Institute of Technology (IIT) Delhi have successfully tested an indigenous quantum key distribution (QKD) system. The technology enables secure communication between two parties by generating a shared random secret key known only to them. This development is significant as quantum communication is considered unhackable and could revolutionize India\'s data security infrastructure. The test was conducted over a distance of 100 kilometers, setting a new record for quantum communication in India.',
    url: 'https://example.com/technology/india-quantum-communication',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cXVhbnR1bSUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    publishedAt: '2023-11-18T11:45:00Z',
    source: {
      name: 'The Hindu',
      url: 'https://www.thehindu.com'
    },
    category: 'technology',
    aiSummary: 'India successfully tested indigenous quantum key distribution technology, advancing secure communications.',
    language: 'english'
  },
  {
    id: '4',
    title: 'India Wins T20 Series Against Australia 3-2',
    description: 'Team India clinched the five-match T20 series against Australia with a thrilling victory in the final match at M. Chinnaswamy Stadium in Bengaluru.',
    content: 'Team India clinched the five-match T20 series against Australia 3-2 with a thrilling 6-run victory in the final match at M. Chinnaswamy Stadium in Bengaluru on Sunday. Batting first, India posted a competitive total of 187/8, with Suryakumar Yadav scoring a blistering 80 off 42 balls. In reply, Australia were restricted to 181/7, despite a fighting 58 from Glenn Maxwell. Arshdeep Singh was the pick of the Indian bowlers, claiming 3 wickets for 37 runs. The series victory marks a positive start for new T20 captain Suryakumar Yadav.',
    url: 'https://example.com/sports/india-wins-t20-series',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3JpY2tldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    publishedAt: '2023-11-26T18:30:00Z',
    source: {
      name: 'Cricbuzz',
      url: 'https://www.cricbuzz.com'
    },
    category: 'sports',
    aiSummary: 'India won the T20 series against Australia 3-2 with a thrilling victory in the final match.',
    language: 'english'
  },
  {
    id: '5',
    title: 'Bollywood Film "Kalki 2898 AD" Breaks Box Office Records',
    description: 'The sci-fi epic "Kalki 2898 AD" starring Prabhas, Deepika Padukone, and Amitabh Bachchan has broken all box office records, collecting over ₹500 crore worldwide in its opening weekend.',
    content: 'The sci-fi epic "Kalki 2898 AD" directed by Nag Ashwin and starring Prabhas, Deepika Padukone, and Amitabh Bachchan has broken all box office records, collecting over ₹500 crore worldwide in its opening weekend. The film, which blends Hindu mythology with futuristic elements, has received critical acclaim for its visual effects and storytelling. Trade analysts predict that the film could become the highest-grossing Indian film ever, surpassing "Baahubali 2: The Conclusion". The film was made on a budget of ₹600 crore, making it one of the most expensive Indian films ever produced.',
    url: 'https://example.com/entertainment/kalki-box-office',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWUlMjB0aGVhdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    publishedAt: '2023-11-25T14:20:00Z',
    source: {
      name: 'Bollywood Hungama',
      url: 'https://www.bollywoodhungama.com'
    },
    category: 'entertainment',
    aiSummary: 'Sci-fi epic "Kalki 2898 AD" broke box office records with ₹500 crore worldwide in its opening weekend.',
    language: 'english'
  },
  {
    id: '6',
    title: 'Cyclone Michaung Hits Tamil Nadu Coast, Heavy Rainfall Expected',
    description: 'Cyclone Michaung made landfall on the Tamil Nadu coast near Chennai, bringing heavy rainfall and strong winds. Several districts are on high alert.',
    content: 'Cyclone Michaung made landfall on the Tamil Nadu coast near Chennai on Monday morning, bringing heavy rainfall and winds with speeds up to 110 kmph. The India Meteorological Department (IMD) has issued a red alert for Chennai, Tiruvallur, Kancheepuram, and Chengalpattu districts. Over 10,000 people have been evacuated from coastal areas and moved to relief camps. The Tamil Nadu government has declared a holiday for schools and colleges in the affected districts. The National Disaster Response Force (NDRF) has deployed 10 teams for rescue and relief operations.',
    url: 'https://example.com/regional/cyclone-michaung',
    image: 'https://images.unsplash.com/photo-1514632595-4944383f2737?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3ljbG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    publishedAt: '2023-11-27T08:10:00Z',
    source: {
      name: 'The News Minute',
      url: 'https://www.thenewsminute.com'
    },
    category: 'regional',
    aiSummary: 'Cyclone Michaung hit Tamil Nadu coast with heavy rainfall and strong winds. Several districts on high alert.',
    language: 'english'
  },
  {
    id: '7',
    title: 'प्रधानमंत्री मोदी ने किया नए संसद भवन का उद्घाटन',
    description: 'प्रधानमंत्री नरेंद्र मोदी ने नई दिल्ली में नए संसद भवन का उद्घाटन किया, जो भारत के लोकतांत्रिक इतिहास में एक महत्वपूर्ण मील का पत्थर है।',
    content: 'प्रधानमंत्री नरेंद्र मोदी ने रविवार को नए संसद भवन का उद्घाटन किया, जो एक त्रिकोणीय आकार का चार मंजिला इमारत है जिसका निर्मित क्षेत्र 64,500 वर्ग मीटर है। इस इमारत में तीन मुख्य द्वार हैं, जिसमें वीवीआईपी, सांसदों और आगंतुकों के लिए अलग-अलग प्रवेश द्वार हैं। नई इमारत में लोकसभा कक्ष में 888 सदस्यों और राज्यसभा कक्ष में 300 सदस्यों को आरामदायक बैठने की व्यवस्था है।',
    url: 'https://example.com/politics/modi-inaugurates-parliament-hindi',
    image: 'https://images.unsplash.com/photo-1565674484371-599c3c11c9d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwcGFybGlhbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    publishedAt: '2023-05-28T09:30:00Z',
    source: {
      name: 'Dainik Jagran',
      url: 'https://www.jagran.com'
    },
    category: 'politics',
    aiSummary: 'पीएम मोदी ने दिल्ली में नए संसद भवन का उद्घाटन किया, जो भारतीय लोकतंत्र के लिए एक महत्वपूर्ण मील का पत्थर है।',
    language: 'hindi'
  },
  {
    id: '8',
    title: 'சென்சேக்ஸ் அனைத்து நேரங்களிலும் உயர்ந்த அளவை எட்டியது, 70,000 மார்க்கைக் கடந்தது',
    description: 'பிஎஸ்இ சென்சேக்ஸ் முதல் முறையாக 70,000 மார்க்கைக் கடந்தது, வலுவான வெளிநாட்டு நிறுவன முதலீட்டாளர் உள்ளீடுகள் மற்றும் நேர்மறையான உலகளாவிய குறிப்புகளால் இயக்கப்பட்டது.',
    content: 'பிஎஸ்இ சென்சேக்ஸ் திங்கள்கிழமை முதல் முறையாக 70,000 மார்க்கைக் கடந்தது, வலுவான வெளிநாட்டு நிறுவன முதலீட்டாளர் (FII) உள்ளீடுகள் மற்றும் நேர்மறையான உலகளாவிய குறிப்புகளால் இயக்கப்பட்டது. 30 பங்குகளைக் கொண்ட குறியீடு 650 புள்ளிகள் அல்லது 0.93% உயர்ந்து, ஆரம்ப வர்த்தகத்தில் 70,048.90 என்ற அனைத்து நேரங்களிலும் உயர்ந்த அளவை எட்டியது. பரந்த NSE நிஃப்டியும் 21,100.20 என்ற சாதனை உயர்வைக் கண்டது, 180 புள்ளிகள் அல்லது 0.86% உயர்ந்தது. வங்கி, ஐடி மற்றும் ஆட்டோ பங்குகள் பேரணியை முன்னின்று நடத்தின, HDFC வங்கி, TCS மற்றும் மாருதி சுஸுகி ஆகியவை முன்னணி லாபம் ஈட்டியவர்களாக இருந்தன.',
    url: 'https://example.com/business/sensex-hits-70000-tamil',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    publishedAt: '2023-11-20T04:15:00Z',
    source: {
      name: 'Dinamani',
      url: 'https://www.dinamani.com'
    },
    category: 'business',
    aiSummary: 'சென்சேக்ஸ் முதல் முறையாக 70,000 ஐக் கடந்தது, வலுவான FII உள்ளீடுகள் மற்றும் நேர்மறையான உலகளாவிய குறிப்புகளால் இயக்கப்பட்டது.',
    language: 'tamil'
  },
  {
    id: '9',
    title: 'భారతదేశం ఆస్ట్రేలియాపై T20 సిరీస్‌ను 3-2తో గెలుచుకుంది',
    description: 'టీమ్ ఇండియా బెంగళూరులోని ఎం. చిన్నస్వామి స్టేడియంలో జరిగిన ఫైనల్ మ్యాచ్‌లో త్రిల్లింగ్ విక్టరీతో ఆస్ట్రేలియాతో ఐదు మ్యాచ్‌ల T20 సిరీస్‌ను గెలుచుకుంది.',
    content: 'టీమ్ ఇండియా ఆదివారం బెంగళూరులోని ఎం. చిన్నస్వామి స్టేడియంలో జరిగిన ఫైనల్ మ్యాచ్‌లో త్రిల్లింగ్ 6-రన్ల విక్టరీతో ఆస్ట్రేలియాతో ఐదు మ్యాచ్‌ల T20 సిరీస్‌ను 3-2తో గెలుచుకుంది. మొదట బ్యాటింగ్ చేసిన భారత్ 187/8 పరుగులు చేసింది, సూర్యకుమార్ యాదవ్ 42 బంతుల్లో 80 పరుగులు చేశాడు. ప్రత్యుత్తరంగా, గ్లెన్ మాక్స్‌వెల్ 58 పరుగులు చేసినప్పటికీ, ఆస్ట్రేలియా 181/7కి పరిమితమైంది. అర్ష్‌దీప్ సింగ్ 37 పరుగులకు 3 వికెట్లు తీసి భారత బౌలర్లలో అత్యుత్తమంగా నిలిచాడు. ఈ సిరీస్ విజయం కొత్త T20 కెప్టెన్ సూర్యకుమార్ యాదవ్‌కు సానుకూల ప్రారంభాన్ని సూచిస్తుంది.',
    url: 'https://example.com/sports/india-wins-t20-series-telugu',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3JpY2tldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    publishedAt: '2023-11-26T18:30:00Z',
    source: {
      name: 'Eenadu',
      url: 'https://www.eenadu.net'
    },
    category: 'sports',
    aiSummary: 'భారతదేశం ఫైనల్ మ్యాచ్‌లో త్రిల్లింగ్ విక్టరీతో ఆస్ట్రేలియాపై T20 సిరీస్‌ను 3-2తో గెలుచుకుంది.',
    language: 'telugu'
  },
  {
    id: '10',
    title: 'Indian Startup Raises $50 Million to Develop AI-Powered Healthcare Solutions',
    description: 'Bengaluru-based healthcare startup MedAssist AI has raised $50 million in Series B funding to develop AI-powered diagnostic tools for rural India.',
    content: 'Bengaluru-based healthcare startup MedAssist AI has raised $50 million in Series B funding led by Sequoia Capital India, with participation from existing investors Accel and Chiratae Ventures. The company plans to use the funds to develop AI-powered diagnostic tools specifically designed for rural India, where access to healthcare specialists is limited. MedAssist AI\'s flagship product is a portable device that can diagnose common illnesses using AI algorithms and provide treatment recommendations. The company claims that its technology has already been deployed in over 500 primary health centers across five states and has helped diagnose over 100,000 patients. The new funding will also be used to expand the company\'s presence to 10 more states in the next 18 months.',
    url: 'https://example.com/technology/medassist-funding',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoY2FyZSUyMHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    publishedAt: '2023-11-22T10:05:00Z',
    source: {
      name: 'YourStory',
      url: 'https://yourstory.com'
    },
    category: 'technology',
    aiSummary: 'Bengaluru-based MedAssist AI raised $50M to develop AI diagnostic tools for rural India where specialists are limited.',
    language: 'english'
  }
];