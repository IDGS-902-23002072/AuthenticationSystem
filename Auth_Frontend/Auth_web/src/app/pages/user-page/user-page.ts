import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user-page',
  imports: [],
  templateUrl: './user-page.html',
  styleUrl: './user-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPage {}
