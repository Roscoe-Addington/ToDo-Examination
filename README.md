Svar fråga 1: (State)
Appen gör det på följande sätt: todos innehåller listan med uppgifter, och setTodos ändrar dem. Listan skapas med useState och är i början tom. Varje uppgift eller punkt på listan har en done som börjar som false. Blir done true stryks texten över. Det är setTodos som gör ändringen. När datan ändras ritar React om sidan direkt, utan att behöva ladda om.

Svar på fråga 2: Immutability (Oförändlighet)
React kollar om det är samma array som förut, alltså jämför den nya och den gamla. .push() ändrar den gamla arrayen så React märker inget och sidan ritas inte om. Med andra ord händer det inget på skärmen. Vill man lägga till uppgifter får man skapa en ny array [...todos, newTodo]. När man tar bort uppgifter används filter som behåller de uppgifter som ska vara kvar och lägger dem i en ny array.

Kodgranskning

Del 1: .push() ändrar den gamla arrayen och funktionen returnerar samma array, så React märker ingen förändring och sidan ritas inte om. Den lägger bara in en text, så uppgiften saknar id och done. Saknar uppgiften id då vet inte funktionerna (toggleTodo och deleteTodo) som använder id vilken uppgift som ska bockas av eller tas bort. Saknar den done kan man inte bocka av den.

Del 2:

```javascript
function addTodo(text) {
  const newTodo = { id: crypto.randomUUID(), text: text, done: false };
  setTodos([...todos, newTodo]);
}
```

Min kodversion skapar en ny array jämfört med .push() som inte gör det. newTodo innehåller den nya uppgiften och även id, text och done.
