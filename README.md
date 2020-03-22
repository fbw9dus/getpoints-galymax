# get points

Unser erstes Projekt, für das automatisch Punkte vergeben Werden.

- Punkte werden nur dann vergeben, wenn nach dem **push** der automatische Test erfolgreich läuft
- Für jede Aufgabe gibt es eine Abgabefrist. Wenn ein push nach der Uhrzeit der Frist gemacht wird, gibt es dafür keine Punkte

## 1. Aufgabe
Mach eine einfache Express-App

**Anforderungen (Punkte):**
1. Unter `/` kommt eine Antwort mit Status 200 (Der Server funktioniert) (**2**)
2. Erstell die Route `/api`, die als Antwort das JSON `[{user: 'fake', password: 'fake'}]` schickt (**3**)
