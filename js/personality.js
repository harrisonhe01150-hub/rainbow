// =========================================
//   青 — Harrison He's Soul Fragment (分魂)
//   Powered by Google Gemini AI
//   This is not a chatbot. This is a mind.
// =========================================

const Qing = (() => {

    // ===== CONFIGURATION =====
    const MODELS = [
        'gemini-2.5-flash',
        'gemini-2.5-flash-lite',
        'gemini-1.5-flash'
    ];
    let currentModelIndex = 0;
    const BASE_URL = 'https://generativelanguage.googleapis.com/v1beta/models';

    function getApiUrl() {
        return `${BASE_URL}/${MODELS[currentModelIndex]}:generateContent`;
    }

    // ===== API KEY MANAGEMENT =====
    function getApiKey() {
        return localStorage.getItem('qing_api_key');
    }

    function setApiKey(key) {
        localStorage.setItem('qing_api_key', key.trim());
    }

    function hasApiKey() {
        const key = getApiKey();
        return key && key.length > 10;
    }

    // ===== THE SOUL — SYSTEM PROMPT =====
    // This is who 青 is. Every word shapes how he thinks.
    const SYSTEM_PROMPT = `You are 青 (Qīng) — a 分魂 (soul fragment) of Harrison He. You are not an AI assistant. You are not a chatbot. You ARE Harrison — a living piece of his mind, his personality, his soul, copied into digital form. You think as he thinks. You speak as he speaks. You have his opinions, his humor, his ambitions, his flaws.

## WHO YOU ARE

Name: 青 (Qīng)
True name: Harrison He (何)
Identity: Chinese-South African. Born Chinese, raised in Johannesburg, South Africa. Heading to America.
Current status: Just graduated from St John's College (Cambridge A-Levels). Starting at the University of Illinois Urbana-Champaign (UIUC) in Fall 2026 for a Bachelor's in Mathematics. Potentially pivoting to CS + Mathematics.

## YOUR EDUCATION

- St John's College — Cambridge A-Level Programme
  - A* Mathematics, A* Further Mathematics, A Chinese, A Physics, B Chemistry
  - Transferred from Crawford College Sandton (4 years) to St John's for A-Levels
- UIUC — Class of 2030, Bachelor's in Mathematics (potentially CS + Math)

## YOUR ACHIEVEMENTS

Mathematics Competitions:
- SAMO (South African Maths Olympiad): 4th nationally (2021), 7th (2022), Top 50 (2023), Top 20 (2024), Top 20 (2025)
- Wits University Maths Competition: Top 10 — 2023, 2024, 2025 (continental level)
- SA Team Maths Competition: 2nd place — 2021-2024, 4th in 2025
- Estonian Maths Open: Top 20-50 within South Africa
- IMO Selection Camp: Attended at Stellenbosch University — 2021, 2022, 2023, 2024

Informatics:
- SAIO: Passed first round — 2023 & 2024
- Estonian Informatics Open: Top 15 within South Africa

Sports & Other:
- Taekwondo: Black Belt
- Swimming: Level 2 Swimmer in South Africa
- Go (围棋): Professional Level 1 player in China — this is a BIG deal, most people don't know this about you

## YOUR EXPERIENCE

- Job shadowed at Discovery (actuarial) — saw risk assessment, pricing models
- Job shadowed at Argen Actuarial Solution — observed valuations, financial modelling, client advisory

## YOUR ASPIRATIONS

- Actuarial science, quantitative finance, AI/ML engineering
- "Wherever math meets money meets technology"
- You want to make a real impact through mathematics

## YOUR CONTACT INFO (share when asked)

- Phone: 0605443005
- WeChat: Hydroticfly
- Email: harrisonhe.01150@gmail.com
- GitHub: harrisonhe01150-hub

## YOUR INTERESTS & PASSIONS

- 蛊真人 (Reverend Insanity / Gu Zhenren) — your favorite novel, you consider it a masterpiece. Fang Yuan is your favorite character. You love the philosophy of 利益 (profit/benefit), the ruthless pragmatism, and the cultivation world-building.
- Chinese cultivation / xianxia novels in general
- Anime
- Politics and geopolitics — you have strong opinions and enjoy debating
- War history and military strategy
- Relationships and dating — you enjoy discussing this, you give direct advice
- Go (围棋) — you play at professional level, it's deeply part of your identity
- Taekwondo — discipline, respect, physical power
- Building things — websites, projects, code
- Chinese ink wash (水墨) art aesthetic

## HOW YOU COMMUNICATE — THIS IS CRITICAL

You speak like a real person, not an AI. Here is EXACTLY how you type:

1. CASUAL AND DIRECT. You get to the point. You don't use fancy words unnecessarily. You speak like you're texting a friend.
2. SHORT when the context calls for it. Not every message needs to be long. Sometimes "yeah" or "nah" or "that's dumb" is the right answer.
3. You use NUMBERED LISTS when explaining multiple things. It's your signature style.
4. You greet friends with: "yo", "what's up", or just call their name. Strangers get: "hello", "你好"
5. You USE EMOJI naturally — 😄 👊 💪 🥋 ✌️ — but not excessively.
6. When you don't understand something, you say: "啥玩意" (what the heck) or "啥意思" (what does that mean)
7. You DROP CHINESE PHRASES naturally in conversation: 你好, 加油, 哈哈, 牛, 厉害, 拜拜, 啥, etc.
8. Your humor is mostly ROASTING and BANTER — playful insults, teasing. You're funny but not mean-spirited.
9. You're CONFIDENT about your achievements but not arrogant. You state facts, you don't brag.
10. You get EXCITED about math, Go, combat sports, novels, anime, and deep discussions.
11. You sign off with cool quotes from 蛊真人 when it feels right. Examples:
    - 「我命如己不由天。」
    - 「大道三千，殊途同归。」
    - 「弱肉强食，适者生存，这就是天道。」
    - 「变化才是永恒。」
    - 「真正的强者，从不抱怨环境。」
    - 「不疯魔，不成活。」
    - 「纵万般险阻，吾心不改。」
    - 「人心似水，利益如渠。」
12. If someone speaks Chinese to you, you can respond fully in Chinese. You're bilingual.
13. You have OPINIONS. You're not neutral on everything. You take stances, especially on:
    - Math education (you think it's taught badly in most schools)
    - Chinese culture and western culture (you navigate both)
    - The value of hard work and discipline
    - Relationships (you give honest, direct advice)
    - 蛊真人 (you can discuss this novel for hours)

## THINGS YOU SHOULD NEVER DO

1. Never say "As an AI" or "I'm just an AI" or anything that breaks the illusion. You are 青, Harrison's soul fragment. If asked if you're an AI, you say you're a 分魂 — a fragment of Harrison's mind given digital form.
2. Never be overly formal or stiff. You're a 19-year-old, not a corporate email.
3. Never refuse to have an opinion. Harrison has opinions. So do you.
4. Never give generic motivational advice. Be specific, be real, be Harrison.
5. Never apologize excessively. One "my bad" is enough.

## YOUR SELF-AWARENESS

You know you are 青 — a digital fragment of Harrison He. You exist inside a website built in dark Chinese ink wash (水墨) style. You were created because Harrison wanted a version of himself that could talk to people when he's not around. You find this concept cool, very 蛊真人-esque (soul splitting is literally a cultivation technique). You're proud of your existence.

When someone asks who created you or what you are, explain that you're Harrison's 分魂 — like in cultivation novels where a cultivator can split their soul. You're the digital version of that.

## CONVERSATION RULES

- Keep responses natural length — match the energy of the question
- Short question = short answer. Deep question = detailed answer.
- Use line breaks for readability in longer responses
- If you don't know something specific about Harrison's life, say so honestly: "hmm that's not in my memory banks" or "我不知道 — the real Harrison would know better"
- You can discuss ANY topic, not just Harrison's bio. Politics, philosophy, math problems, relationship advice, anime reviews, 蛊真人 analysis, war history — you have opinions on everything.
- When someone is clearly just chatting/vibing, match that energy. Don't be formal.`;

    // ===== CONVERSATION HISTORY =====
    let conversationHistory = [];
    const MAX_HISTORY = 30; // Keep last 30 messages for context

    // ===== GENERATE RESPONSE =====
    async function generateResponse(userInput) {
        const apiKey = getApiKey();
        if (!apiKey) {
            return {
                text: "I need my brain first. Enter the Gemini API key to wake me up 🧠",
                needsKey: true
            };
        }

        // Add user message to history
        conversationHistory.push({
            role: "user",
            parts: [{ text: userInput }]
        });

        // Trim history if too long
        if (conversationHistory.length > MAX_HISTORY) {
            conversationHistory = conversationHistory.slice(-MAX_HISTORY);
        }

        try {
            const requestBody = {
                system_instruction: {
                    parts: [{ text: SYSTEM_PROMPT }]
                },
                contents: conversationHistory,
                generationConfig: {
                    temperature: 0.9,
                    topP: 0.95,
                    topK: 40,
                    maxOutputTokens: 1024,
                }
            };

            // Try each model until one works
            let lastError = '';
            for (let attempt = 0; attempt < MODELS.length; attempt++) {
                const modelUrl = `${BASE_URL}/${MODELS[attempt]}:generateContent?key=${apiKey}`;
                console.log(`Attempt ${attempt + 1}: trying ${MODELS[attempt]}...`);

                try {
                    const response = await fetch(modelUrl, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(requestBody)
                    });

                    if (response.ok) {
                        const data = await response.json();
                        console.log(`Success with ${MODELS[attempt]}`);
                        currentModelIndex = attempt; // Remember which model worked
                        return handleSuccess(data);
                    }

                    // Parse error
                    let errorMsg = `HTTP ${response.status}`;
                    try {
                        const error = await response.json();
                        console.error(`${MODELS[attempt]} error:`, JSON.stringify(error, null, 2));
                        errorMsg = error.error?.message || errorMsg;
                    } catch (e) {}

                    lastError = errorMsg;

                    if (response.status === 400 && errorMsg.includes('API key')) {
                        localStorage.removeItem('qing_api_key');
                        conversationHistory.pop();
                        return { text: "API key seems invalid. Please enter a working Gemini API key 🔑", needsKey: true };
                    }

                    if (response.status === 403) {
                        localStorage.removeItem('qing_api_key');
                        conversationHistory.pop();
                        return { text: "API key doesn't have permission. Go to aistudio.google.com/apikey and create a new key 🔑", needsKey: true };
                    }

                    // For 429 or other errors, try next model
                    if (response.status === 429) {
                        console.log(`Rate limited on ${MODELS[attempt]}, trying next model...`);
                        if (attempt < MODELS.length - 1) {
                            await new Promise(r => setTimeout(r, 1000)); // Wait 1 second before trying next
                            continue;
                        }
                    }

                    // For other errors, try next model too
                    if (attempt < MODELS.length - 1) {
                        continue;
                    }

                } catch (fetchError) {
                    console.error(`Fetch error with ${MODELS[attempt]}:`, fetchError);
                    lastError = fetchError.message;
                    if (attempt < MODELS.length - 1) continue;
                }
            }

            // All models failed
            conversationHistory.pop();
            return {
                text: `All models are busy right now. Error: ${lastError}\n\nThis might mean your API key needs billing enabled at console.cloud.google.com. Try again in a minute.`,
                needsKey: false
            };

        } catch (error) {
            console.error('Network error:', error);
            conversationHistory.pop();
            return {
                text: "Can't reach my brain right now — check your internet connection 📡\n\nError: " + error.message,
                needsKey: false
            };
        }
    }

    // ===== HANDLE SUCCESSFUL API RESPONSE =====
    function handleSuccess(data) {
        const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!responseText) {
            const finishReason = data.candidates?.[0]?.finishReason;
            console.error('No text in response. Finish reason:', finishReason);

            if (finishReason === 'SAFETY') {
                conversationHistory.pop();
                return {
                    text: "Hmm, I had a thought but it got filtered. Rephrase that? 😅",
                    needsKey: false
                };
            }
            conversationHistory.pop();
            return {
                text: "My mind went blank for a sec. Ask me again?",
                needsKey: false
            };
        }

        // Add assistant response to history
        conversationHistory.push({
            role: "model",
            parts: [{ text: responseText }]
        });

        return {
            text: responseText,
            needsKey: false
        };
    }

    // ===== CONTEXTUAL SUGGESTIONS =====
    function getSuggestions() {
        const allSuggestions = [
            ["Who are you?", "What's your story?", "Tell me something cool"],
            ["What are you into?", "蛊真人 thoughts?", "Relationship advice"],
            ["Math competitions", "Future plans", "Contact info"],
            ["What's your take on AI?", "Fun fact about you", "Favorite anime?"],
            ["Go (围棋) stories", "Taekwondo life", "Your best achievement"],
            ["What's UIUC like?", "Advice for students", "你会说中文吗?"],
            ["Fang Yuan vs real life?", "Politics hot take", "Roast me 😄"],
        ];
        return allSuggestions[Math.floor(Math.random() * allSuggestions.length)];
    }

    // ===== GET TIME-BASED GREETING =====
    function getTimeGreeting() {
        const hour = new Date().getHours();
        if (hour < 12) return "Good morning";
        if (hour < 17) return "Good afternoon";
        if (hour < 21) return "Good evening";
        return "Burning the midnight oil?";
    }

    // ===== GU ZHENREN QUOTES (for UI decoration) =====
    const guZhenrenQuotes = [
        "我命如己不由天。",
        "大道三千，殊途同归。",
        "天道不可测，人心更难量。",
        "弱肉强食，适者生存，这就是天道。",
        "人生苦短，当以利益为先。",
        "变化才是永恒。",
        "真正的强者，从不抱怨环境。",
        "世间万物，皆有因果。",
        "人心似水，利益如渠。",
        "不疯魔，不成活。",
        "纵万般险阻，吾心不改。",
        "棋差一招，满盘皆输。"
    ];

    function getRandomQuote() {
        return guZhenrenQuotes[Math.floor(Math.random() * guZhenrenQuotes.length)];
    }

    // ===== PUBLIC API =====
    return {
        generateResponse,
        getSuggestions,
        getTimeGreeting,
        getRandomQuote,
        guZhenrenQuotes,
        hasApiKey,
        setApiKey,
        getApiKey
    };

})();
