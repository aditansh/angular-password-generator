import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [],
  template: `<div class="w-full">
    <div class="w-5/6 mx-auto mb-3 text-lg">Generated password:</div>
    <div
      class="bg-opacity-50 bg-zinc-500 w-5/6 mx-auto px-4 h-12 flex items-center text-lg rounded-lg"
    >
      <p class="pr-10">{{ password }}</p>
      <img
        (click)="copyPassword()"
        [src]="src"
        class="cursor-pointer ml-auto"
      />
    </div>
  </div>`,
  styleUrl: './display.component.css',
})
export class DisplayComponent {
  @Input() password: string | undefined;
  src = 'assets/copy.svg';

  copyPassword(): void {
    if (this.password) {
      navigator.clipboard.writeText(this.password).then(
        () => {
          console.log('Password copied to clipboard');
          this.src = 'assets/copied.svg';
          setTimeout(() => {
            this.src = 'assets/copy.svg';
          }, 1000);
        },
        (err) => console.error('Failed to copy password: ', err)
      );
    }
  }
}
