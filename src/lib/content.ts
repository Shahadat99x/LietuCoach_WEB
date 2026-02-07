export interface ContentItem {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML string for simplicity in Phase 0
  date: string;
  category: "Resource" | "Blog";
  author?: string;
}

export const resources: ContentItem[] = [
  {
    slug: "lithuanian-alphabet-pronunciation",
    title: "The Lithuanian Alphabet: A Guide to Pronunciation",
    excerpt: "Master the 32 letters of the Lithuanian alphabet, including the unique 'nosinės' and dotted vowels. Start speaking correctly today.",
    date: "2024-03-15",
    category: "Resource",
    content: `
      <h2>It's Latin-based (mostly!)</h2>
      <p>Good news: Lithuanian uses the Latin alphabet, just like English. You won't need to learn a whole new script like Cyrillic or Greek. However, we have a few extra friends that bring specific sounds.</p>
      
      <h2>The "Nosinės" (ą, ę, į, ų)</h2>
      <p>These letters have a little "tail" or hook at the bottom called a <em>nosinė</em>. Originally, these indicated a nasal sound, but in modern standard Lithuanian, they simply make the vowel <strong>long</strong>.</p>
      <ul>
        <li><strong>ą</strong> sounds like the <em>a</em> in "father" (long).</li>
        <li><strong>ę</strong> sounds like the <em>a</em> in "cat" (but longer).</li>
        <li><strong>į</strong> sounds like the <em>ee</em> in "sheep".</li>
        <li><strong>ų</strong> sounds like the <em>oo</em> in "moon".</li>
      </ul>

      <h2>The "Dotless" e (ė)</h2>
      <p>The letter <strong>ė</strong> is unique. It makes a very specific sound, like the <em>ai</em> in "air" (without the 'r' sound), or a closed "e". It is distinct from <strong>e</strong> (short, like "met") and <strong>ę</strong> (long/open).</p>

      <h2>Consonants with hats (č, š, ž)</h2>
      <p>These are straightforward if you know English:</p>
      <ul>
        <li><strong>č</strong> = <strong>ch</strong> as in "cherry".</li>
        <li><strong>š</strong> = <strong>sh</strong> as in "shoe".</li>
        <li><strong>ž</strong> = <strong>s</strong> as in "pleasure" (or <em>zh</em>).</li>
      </ul>

      <h2>Quick Practice</h2>
      <p>Try saying these words:</p>
      <ul>
        <li><strong>Ačiū</strong> (Ah-choo) - Thank you.</li>
        <li><strong>Šalta</strong> (Shal-ta) - Cold.</li>
        <li><strong>Žuvis</strong> (Zhoo-vis) - Fish.</li>
      </ul>

      <h3>FAQ</h3>
      <p><strong>Q: How do I roll my R?</strong><br>A: Lithuanian 'R' is rolled at the tip of the tongue, similar to Spanish or Italian. Practice saying "butter" very quickly!</p>
    `
  },
  {
    slug: "everyday-lithuanian-phrases",
    title: "50 Essential Lithuanian Phrases for Total Beginners",
    excerpt: "From 'Labas' to 'Ačiū', learn the absolute must-know phrases for surviving and thriving in Lithuania.",
    date: "2024-03-10",
    category: "Resource",
    content: `
      <h2>Greetings</h2>
      <p>The most common way to say hello is <strong>Labas</strong> (informal) or <strong>Laba diena</strong> (Good day - formal).</p>
      <ul>
        <li><strong>Labas rytas</strong> - Good morning.</li>
        <li><strong>Labas vakaras</strong> - Good evening.</li>
        <li><strong>Viso gero</strong> - Goodbye (formal).</li>
        <li><strong>Iki!</strong> - Bye! (informal).</li>
      </ul>

      <h2>Politeness</h2>
      <p>Lithuanians appreciate politeness. Use these often:</p>
      <ul>
        <li><strong>Ačiū</strong> (Ah-choo) - Thank you.</li>
        <li><strong>Prašau</strong> (Pra-shaoo) - Please / You're welcome.</li>
        <li><strong>Atsiprašau</strong> - Excuse me / I'm sorry.</li>
      </ul>

      <h2>Introductions</h2>
      <p><strong>Mano vardas...</strong> (My name is...)<br><strong>Malonu susipažinti.</strong> (Nice to meet you.)</p>

      <h2>Emergency / Survival</h2>
      <p><strong>Ar kalbate angliškai?</strong> - Do you speak English?<br><strong>Nesuprantu.</strong> - I don't understand.<br><strong>Kur yra tualetas?</strong> - Where is the toilet?</p>

      <h2>Quick Practice</h2>
      <p>Try a mini-dialogue:<br>
      - Labas!<br>
      - Labas, ar kalbate angliškai?<br>
      - Taip (Yes), šiek tiek (a little).</p>
    `
  },
  {
    slug: "lithuanian-cases-beginners",
    title: "Lithuanian Grammar: Cases Made Simple(r)",
    excerpt: "Don't panic about the 7 cases. We explain why word endings change and focus on the 3 most important ones for beginners.",
    date: "2024-03-05",
    category: "Resource",
    content: `
      <h2>The Elephant in the Room</h2>
      <p>Yes, Lithuanian has 7 grammatical cases. This means the ending of a noun changes depending on its job in the sentence. It sounds scary, but English has a tiny bit of this too (Review: He vs. Him).</p>

      <h2>Why endings change (Context is King)</h2>
      <p>In English, word order tells you who does what ("Dog bites man" vs "Man bites dog"). In Lithuanian, the <em>endings</em> tell you who does what, so the word order can be flexible.</p>

      <h2>The Big 3 for Beginners</h2>
      <p>Focus on these first:</p>
      <ol>
        <li><strong>Nominative (Vardininkas):</strong> The Subject (Who?). Dictionary form.<br>Ex: <em>Kava</em> (Coffee) is mostly nominative.</li>
        <li><strong>Genitive (Kilmininkas):</strong> Usage/Possession/Of/After "No".<br>Ex: <em>Puodelis kavos</em> (Cup of coffee). <em>Noriu kavos</em> (I want coffee).</li>
        <li><strong>Accusative (Galininkas):</strong> The Object (Receive action).<br>Ex: <em>Geriu kavą</em> (I drink coffee - notice the ą).</li>
      </ol>

      <h2>Quick Practice</h2>
      <p><strong>Mama</strong> (Subject) myli <strong>tėtį</strong> (Object - Tėtis changes to Tėtį).<br>Mom loves dad.</p>
    `
  },
  {
    slug: "ordering-food-drink-lithuanian",
    title: "How to Order Food & Drink in Lithuania",
    excerpt: "Avoid hungry stares. Learn how to order 'cepelinai' or a coffee with confidence.",
    date: "2024-03-01",
    category: "Resource",
    content: `
      <h2>Entering a Cafe</h2>
      <p>You can sit anywhere usually, unless a sign says otherwise. A waiter might greet you with <em>Prašome sėstis</em> (Please sit).</p>

      <h2>Ordering</h2>
      <p>Use the phrase <strong>Norėčiau...</strong> (I would like...).</p>
      <ul>
        <li><strong>Norėčiau kavos.</strong> (I'd like coffee - Genitive case!)</li>
        <li><strong>Norėčiau meniu.</strong> (I'd like the menu.)</li>
        <li><strong>Man, prašau, šaltibarščių.</strong> (For me, please, cold beet soup.)</li>
      </ul>

      <h2>Special Requests</h2>
      <ul>
        <li><strong>Aš vegetaras/vegetarė.</strong> - I am vegetarian (m/f).</li>
        <li><strong>Be pieno.</strong> - Without milk.</li>
      </ul>

      <h2>Paying the Bill</h2>
      <p><strong>Sąskaitą, prašau.</strong> (The bill, please.)</p>
      <p>Tip is usually 10% if the service was good.</p>
    `
  },
  {
    slug: "lithuanian-numbers-counting",
    title: "Numbers and Counting in Lithuania",
    excerpt: "Learn to count to 10 and handle money. Essential for markets and shops.",
    date: "2024-02-28",
    category: "Resource",
    content: `
      <h2>1-10</h2>
      <ol>
        <li>Vienas</li>
        <li>Du</li>
        <li>Trys</li>
        <li>Keturi</li>
        <li>Penki</li>
        <li>Šeši</li>
        <li>Septyni</li>
        <li>Aštuoni</li>
        <li>Devyni</li>
        <li>Dešimt</li>
      </ol>

      <h2>Teens and Tens</h2>
      <p>Teens usually end in <em>-lika</em> (e.g., Vienuolika = 11).<br>Tens end in <em>-šimt</em> or <em>-iasdešimt</em> (Dvidešimt = 20).</p>

      <h2>Money</h2>
      <p>Lithuania uses the <strong>Euro</strong>.<br>Kiek kainuoja? (How much does it cost?)</p>

      <h2>Time</h2>
      <p>Kelinta valanda? (What time is it?)</p>
    `
  }
];

export const blogPosts: ContentItem[] = [
  {
    slug: "vilnius-newcomer-language-guide",
    title: "New to Vilnius? Your A1 Survival Guide",
    excerpt: "Moving to Vilnius is exciting, but the language barrier can be intimidating. Here is how to survive your first month.",
    date: "2024-04-01",
    category: "Blog",
    author: "LietuCoach Team",
    content: `
      <p>Moving to Vilnius is exciting. The baroque architecture, the tech scene, the coffee culture... but then you walk into a Maxima supermarket and realize you don't know which carton is milk and which is kefir. (Hint: <em>Pienas</em> is milk, <em>Kefyras</em> is kefir).</p>

      <h2>Why English is common but Lithuanian connects</h2>
      <p>Yes, many young people in Vilnius speak excellent English. You can survive without Lithuanian. But to <em>thrive</em>? To make local friends? A few phrases go a long way.</p>

      <h2>Public Transport (Vilniečio kortelė)</h2>
      <p>You'll need a card or the app (m.Ticket). Look for words like <strong>Stotelė</strong> (Stop) and <strong>Tvarkaraštis</strong> (Timetable).</p>

      <h2>Supermarket Survival</h2>
      <ul>
        <li><strong>Akcija</strong> - Sale/Discount (Your favorite word).</li>
        <li><strong>Duona</strong> - Bread.</li>
        <li><strong>Vanduo</strong> - Water.</li>
      </ul>

      <h2>Setting up Internet/Gym</h2>
      <p>These contracts can be tricky. Look for <strong>Sutartis</strong> (Contract) and <strong>Mėnesinis mokestis</strong> (Monthly fee).</p>

      <p><em>Want to practice these scenarios? Download LietuCoach for our specialized "Newcomer" module.</em></p>
    `
  },
  {
    slug: "is-lithuanian-oldest-language",
    title: "Is Lithuanian Really the Oldest Language?",
    excerpt: "You've heard the rumors—Lithuanian is related to Sanskrit. Let's look at the facts behind this fascinating linguistic history.",
    date: "2024-03-20",
    category: "Blog",
    author: "Jonas K.",
    content: `
      <p>If you tell a Lithuanian you're learning their language, the first thing they'll likely tell you is: "Did you know it's the oldest living language in Europe?"</p>

      <h2>Indo-European Roots</h2>
      <p>Lithuanian is part of the Baltic branch of the Indo-European language family. It has retained ancient grammatical structures and sounds that have disappeared from other related languages like English, German, or even Russian.</p>

      <h2>The Sanskrit Connection</h2>
      <p>Linguists usually compare Lithuanian to <strong>Sanskrit</strong> (ancient Indian language) to show this conservatism. For example:</p>
      <ul>
        <li>Sanskrit: <em>viras</em> (man) -> Lithuanian: <em>vyras</em>.</li>
        <li>Sanskrit: <em>devas</em> (god) -> Lithuanian: <em>dievas</em>.</li>
        <li>Sanskrit: <em>sunus</em> (son) -> Lithuanian: <em>sūnus</em>.</li>
      </ul>

      <h2>Why this makes it special</h2>
      <p>When you learn Lithuanian, you aren't just learning a communication tool. You are essentially time-traveling. You are speaking a language that sounds very close to what our ancestors spoke thousands of years ago.</p>
    `
  },
  {
    slug: "lithuanian-pronunciation-mistakes",
    title: "5 Common Pronunciation Mistakes Beginners Make",
    excerpt: "Stop saying 'Aciu' like 'A-see-you'. Improve your accent with these simple fixes.",
    date: "2024-03-05",
    category: "Blog",
    author: "LietuCoach Team",
    content: `
      <p>Lithuanian pronunciation is actually quite consistent once you know the rules. But beginners often fall into a few traps.</p>

      <h2>1. The "Ačiū" Trap</h2>
      <p>It looks like "A-see-you", but it's pronounced <strong>Ah-choo</strong> (like a sneeze!).</p>

      <h2>2. Short vs. Long Vowels</h2>
      <p>U and Ū are different. I and Y are different.
      <br><strong>Butas</strong> (Apartment) vs <strong>Būtas</strong> (Past). Okay, maybe context helps, but try to stretch those long vowels!</p>

      <h2>3. Ignoring the "Check Marks" (š, ž, č)</h2>
      <p>These are not optional decorations! <strong>S</strong> is "s", but <strong>Š</strong> is "sh". Mixing them up changes the meaning entirely.</p>

      <h2>4. Stress Placement</h2>
      <p>Lithuanian stress is free-moving. It can move from the start of the word to the end depending on the case. Only listening practice helps here.</p>

      <h2>5. The Soft "L"</h2>
      <p>Lithuanian 'L' is often softer than the heavy English 'L' (as in "ball"). Think of the 'L' in "leaf".</p>

      <p><em>Use the LietuCoach audio recorder to check your pronunciation against native speakers!</em></p>
    `
  }
];
