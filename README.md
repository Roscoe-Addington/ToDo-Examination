Svar fråga 1:
Appen gör det på följande sätt: todos innehåller listan med uppgifter, och setTodos ändrar dem. Listan skapas med useState och är i början tom. Varje uppgift eller punkt på listan har en done som börjar som false. Blir done true stryks texten över. Det är setTodos som gör ändringen. När datan ändras ritar React om sidan direkt, utan att behöva ladda om.
