import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="mx-auto flex flex-col gap-8">
      <div class="flex items-center gap-4">
        <label class="text-lg"> Length: </label>
        <input
          type="number"
          [min]="1"
          [(ngModel)]="length"
          class="flex h-10 w-full rounded-md border border-[#27272a] bg-[#0f0f09] px-3 py-2 text-sm placeholder:text-muted-foreground"
        />
      </div>
      <div class="flex items-center gap-4">
        <label for="letters">Letters</label>
        <input
          type="checkbox"
          id="letters"
          name="letters"
          [(ngModel)]="isLettersChecked"
        />
      </div>

      <div class="flex items-center gap-4">
        <label for="numbers">Numbers</label>
        <input
          type="checkbox"
          id="numbers"
          name="numbers"
          [(ngModel)]="isNumbersChecked"
        />
      </div>

      <div class="flex items-center gap-4">
        <label for="special">Special Characters</label>
        <input
          type="checkbox"
          id="special"
          name="special"
          [(ngModel)]="isSpecialChecked"
        />
      </div>
      <button
        (click)="generatePassword()"
        [disabled]="!length || (!isLettersChecked && !isNumbersChecked)"
        class="bg-[#fafafa] text-[#0f0f09] h-10 px-4 py-2 hover:opacity-80 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50"
      >
        Generate
      </button>
    </div>
  `,
  styleUrl: './form.component.css',
})
export class FormComponent {
  title = 'angular-password-generator';
  @Output() passwordGenerated = new EventEmitter<string>();
  length = 0;
  isLettersChecked = true;
  isNumbersChecked = false;
  isSpecialChecked = false;

  lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  numbers = '1234567890';
  specialCharaters = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  generatePassword(): void {
    const newPassword = this.createPassword();
    this.passwordGenerated.emit(newPassword);
  }

  private createPassword(): string {
    let characters = '';
    let gen = '';

    if (this.isLettersChecked) {
      characters += this.lowercaseLetters;
      characters += this.uppercaseLetters;
    }

    if (this.isNumbersChecked) {
      characters += this.numbers;
    }

    if (this.isSpecialChecked) {
      characters += this.specialCharaters;
    }

    for (let i = 0; i < this.length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      gen += characters[randomIndex];
    }

    return gen;
  }
}
