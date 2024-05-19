import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DisplayComponent } from './display/display.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, DisplayComponent, CommonModule],
  template: ` <main
    class="flex min-h-screen items-center flex-col w-full pt-12 gap-4"
  >
    <p class="text-3xl font-bold mb-8">Password Generator</p>
    <app-form
      class="w-full flex"
      (passwordGenerated)="onPasswordGenerated($event)"
    ></app-form>
    <app-display *ngIf="password" [password]="password" class="w-full flex" />
  </main>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-password-generator';
  password: string | undefined = undefined;

  onPasswordGenerated(newPassword: string): void {
    this.password = newPassword;
  }
}
