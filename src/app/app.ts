/*
* File: app.ts
* Author: Csorba Péter
* Copyright: 2026, Csorba Péter
* Group: Szoft II-N
* Date: 2026-10-14
* Github: https://github.com/gunkhu
* Licenc: MIT
*/
import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('rombatlo');
}
