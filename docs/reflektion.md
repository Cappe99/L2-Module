# Namngivning (Clean Code kapitel 2)

| Namn | Förklaring | Reflektion och regler från *Clean Code* |
|------|------------|-----------------------------------------|
| `buyXPayForY(x, y)` | Metod som hanterar kampanjen ”köp X betala för Y” | **Avoid metnal mapping:**  I Clean code skrivs det att man ska och bör undvika veriabelnamn som x och y, eftersom de tvingar läsaren av koden att översätta symbolerna i huvudet och komma ihåg vad de betyder. Kod ska enligt principen vara så tydlig att den inte kräver någon sådan mental ansträngning. Jag förstår poängen och håller med om att det ofta är bättre att använda mer beskrivande nman. Samtidigt tycker jag att just detta fallet är ett undantag. Funktionens namn gör det enligt mig väldigt tydligt vad x och y står för(antal i kampanjen). Därför upplever jag inte att "metnal mapping" blir ett problem här, eftersom kontexten gör det uppenbart för läsaren vad argumenten betyder. **Use searchable names:** Här kan det dock bli problem om man som enligt boken anväder bokstaven "e" eftersom det finns i nästan alla engelska ord. Men åter igen finns inte varken x eller y så frekvent i orden, därför står jag fast vid min namngivning till denna funktion. Man skulle göra det möjligtvis tydligare med buyQuantity samt payForQuantity, men eftersom det är en sån liten funktion tycker jag inte att det är nödvändigt.  |
| `isFreeShipping(cartTotal)` | Returnerar `true` om kundvagnen kvalificerar för fri frakt |  **Method Names:** Prefixet `is` fungerar mycket bra här, eftersom det tydligt signalerar att metoden returnerar ett booleskt värde. Jag tycker att namnet är kort, koncist och direkt begripligt. Däremot tycker jag att namnet på argumentet kan bli mycket tydligare. **Avoid disinformation:** Blir svårt att veta om det är pengar eller kvantiteten som är i fokus. |
| `clearCart()` | Tömmer kundvagnen | **Use intention-Reviling names:** Jag skulle säga att denna funktion talar för sig själv, den tömmer en vagn... Men vilken vagn?! Jag tyckte från en början att den var väldigt tydlig och ingen kommentar eller förklaring krävs men sen så reflekterade jag över vad hela klassen heter "Cart". **Add Meaningful Context:** Skulle vara bra här och skulle rädda mig från mitt funktionsnamn. Genom att ändra kontexten på klassens namn och döpa den till "ShoppingCart" istället, skulle det blir mycket mer tydligt vad funktionens (`clearCart()`) syfte är. |
| `getFinalPrice()` | Räknar ut det slutliga priset för en kundvagn | **Don’t Be Cute:** Meningen "say what you mean, mean what you say" men även **Avoid disinformation:** + **Use intention-Reviling names:** skulle kunna komma in här. Efter mycket reflektion och kliande i huvudet känner jag att detta namnet inte är tydligt nog. `final` kan tolkas på olika sätt (är det efter rabatt? efter moms?). Ett annat namn på funktionen skulle kunna vara `calculateTotalPriceWithDiscounts`. Det blir längre, men också tydligare. Jag vet helt ärlig inte hur jag på bästa sätt ska döpa klassen. |
| `validateDiscountCode(code)` | Kollar om en rabattkod är giltig | **Don’t Add Gratuitous Context:** Efter att ha läst stycket Don’t Add Gratuitous Context i clean code, och reflekterade över min validator class insåg jag att jag har validate i början på alla funktioner. Detta kommer att leda till att jag kommer få hur många förslag som helst i vscode som min IDE, när jag ska lägga till dessa. Nu i efterhand skulle jag ha döpt alla dessa till mer specifika namn som tex "isValidCode", då det blir mer tydligt att det är true eller false och kan då applisera en annan regel **Method Names**, som kommer göra det ännu mer tydligt för läsaren av min kod.  |

---

## Kapitelreflektion kap 2

Även om jag läste kapitlet innan och hade hela tiden i bakhuvudet vissa av reglerna tappar man snabbt bort sig. Något som är tydligt för mig i stunden är helt feltolkande dagen efter, och tänk då om någon annan ska läsa och förstå vad jag menar om jag inte ens fattar dagen efter. Det är först när jag granskar min egen kod jag fattar hur svårt det faktiskt är att skriva bra namn till sina klasser, funktioner, veriabler och allt där emellan. 

Även om jag inte köper allt som står i boken som jag även argumenterade för i tabellen över så tycker jag att det är väldigt intressant hur namngivning kan göra så stor skillnad för att förstå kod. Vi döper nästan allt i koden och jag förstår nu hur svårt det faktiskt är att göra det bra. 

I sista delen av kapitel 2 står det att många är rädda att byta namn på saker för att andra programmerare kan bli griniga. Jag tycker att detta är en väldigt intressant poäng, då en diskussion om namn troligtvis kan leda till att koden blir ännu mer läsbar.

---

# Analys av funktioner (kapitel 3)

## Tabell över fem längsta metoder

| Metodnamn | Länk eller kod | Antal rader (ej ws) | Reflektion |
|-----------|----------------|----------------------|-------------|
| `addProduct(items, product, quantity)` | [addProduct](https://github.com/Cappe99/L2-Module/blob/main/Images/addProduct.PNG) | 12 | **Do one thing**: Gör flera saker (validerar, letar upp produkt, uppdaterar/pushar). Borde brytas ut i `findProduct`, `updateQuantity`, `addNewItem`. **Triads**: 3 argument. Har funderat mycket på denna men jag vet inte hur jag på ett bra sätt skulle lösa detta. |
| `removeProduct(items, product, quantity)` | [removeProduct](https://github.com/Cappe99/L2-Module/blob/main/Images/RemoveProduct.PNG) | 16 | Liknar `addProduct`, duplicerar en del logik. Bryter mot **Don't Repeat Yourself**. Gör också flera saker: validering, hitta produkt, uppdatera/splice. Hjälp funktioner skulle göra koden mycket bättre och kan få `addProduct(items, product, quantity)` och denna att smidigt och lätt kunna arbeta ihop. Även här har jag **Triads** som man helst bör unvika. |
|  `validateProduct(product)` | [ValidateProduct](https://github.com/Cappe99/L2-Module/blob/main/Images/Validate.PNG) | 11 |Gör flera kontroller på rad. Följer **Error handling is one thing** (kastar alltid fel, ändrar inget state). Svår att bryta upp utan att förlora sammanhanget, men kan extraheras i små hjälpfunktioner som `validateId`, `validatePrice`, `validateName` för bättre läsbarhet och följa **Blocks and indenting**. |
| `applyDiscountsRule(manager, cartItems, totalPrice)` | [ApplyDCRule](https://github.com/Cappe99/L2-Module/blob/main/Images/dcRulePNG.PNG) | 23 | Lång funktion. Gör både procentrabatter och “Buy X Pay for Y”  regler i samma funktion. Här bryts **Do one thing** och **One level of abstraction**. Kunde delas upp i `applyPercentageDiscounts` och `applyBuyXPayForY`. Men även här "bryter" jag mot reglen **Triads** med mina tre argument. |
| `applyDiscountCodeRule(manager, code)` | [applyDCCodeRule](https://github.com/Cappe99/L2-Module/blob/main/Images/codeRule.PNG) | 10 | **Have no side effects:** Efter att jag har läst detta stycket blev jag osäker på om jag har något som anses vara en side effect. Funktionen ändrar manager.appliedDiscounts när en giltig kod hittas. Den gör alltså mer än att bara kontrollera koden, vilket räknas som en side effect. Ett alternativ hade varit att döpa funktionen till validateAndApplyDiscountCode, så att det blir tydligt att funktionen både kontrollerar och uppdaterar, Men då skulle den bryta mot **Do one thing** men även **Small!**|


## Kapitelreflektion kap 3 

När jag analyserade mina längsta funktioner märkte jag snabbt att de ofta gör mer än en sak. Till exempel både `addProduct` och `removeProduct` gör validering, letar efter rätt objekt, och sedan uppdaterar eller modifierar arrayen. Detta bryter mot regeln **Do One Thing** och gör koden svårare att återanvända och testa. Jag ser också tydliga brott mot **Don’t Repeat Yourself**, eftersom logik för “om quantity är undefined  sätt 1” finns på flera ställen. Det borde ligga i en hjälpfunktion.  

En annan brist är att många av mina funktioner tar 2–3 argument, vilket går emot rekommendationen att helst bara ha 0–1 argument. Det gör koden mer svårtestad och kräver fler kombinationer i testfallen. 

Däremot tycker jag att felhanteringen i mina `validators` är ganska bra. De kastar alltid undantag istället för att returnera error koder, vilket följer rekommendationen **Prefer Exceptions to Returning Error Codes**.  

Jag håller med om de flesta av reglerna i kapitel 3, men jag märker också att det ibland blir överdrivet att bryta ner väldigt små funktioner. Exempelvis i `validateProduct` tycker jag det är mer läsbart att se alla kontroller i rad än att bryta ut varje enskild check i separata funktioner.  


## Reflektion över egen kodkvalitet

Jag hade läst både kap 2 och 3 innan jag började att koda, och hade i bakhuvudet hela tiden att funktioner ska vara små och namnen ska vara tydliga. Men när jag senare skulle analysera det jag faktiskt spottade ut mig blev det lite mer meckigt. Som jag ser det finns det båda en del styrkor men även svagheter av det jag lyckades få ihop.

Om jag ser generellt på min funktioner när jag går tillbaka och reflekterar, så tycker jag att det kan bli mycket bättre. Det är lätt att ha teorin i huvudet men att faktiskt implementera det... Det är en annan femma. Funktionerna är ibland lite för långa och gör INTE bara en sak. Till exempel gör varken addProduct och removeProduvt bara en sak.
Detta bryter mot principen Do One Thing och gör att koden blir svårare att återanvända och testa. Dessutom upprepar jag logik på flera ställen, som hanteringen av quantity när det inte är definierat. Här hade det varit bättre att extrahera en hjälpfunktion, som kan användas på båda ställerna.  

Jag ser också att många av mina funktioner använder två eller tre argument. Det fungerar, men det går emot bokens rekommendation om att helst hålla sig till noll parametrar eller en osv. Med flera parametrar blir funktionerna mer svårtestade och kräver fler kombinationer i testfallen. Här skulle det vara en förbättring att slå ihop argumenten i ett objekt eller att se över om alla parametrar verkligen behövs. Just nu vet jag inte hur jag ska lösa detta problemet.

Samtidigt finns det delar av koden jag är nöjd med. Mina validatorer, som validateProduct, följer principen Error handling is one thing. De kastar alltid undantag istället för att returnera felkoder, och de ändrar aldrig på state. Det gör logiken konsekvent och lättare att förstå. Däremot har jag funderat på hur långt man ska gå i att bryta ner en sådan funktion i mindre delar. Just nu tycker jag det är mer läsbart att ha alla valideringar i rad, även om boken föreslår att man kan dela upp dem i små hjälpfunktioner.

Namngivningen är den del jag från början tänkte på mest när jag började med modulen. Men även här tycker jag att vissa namn inte är helt 100. Utöver det jag skrivit om i tabellen om namngivning tycker jag generellt att namnen till stor del är okej, men som jag ser det är det först när någon annan granskar och ska förstå som det faktiskt blir tydligt. 
Tex som på workshoppen, vissa namn som var tydliga för min grupp när vi diskuterade var inte lika självklar för den andra gruppen. 

Jag förstår reglerna och köper dess innerbörd men jag vill ändå kunna diskitera kring när jag anser att det inte är lämpligt eller fördelaktigt att använda dessa regler till punkt och pricka.