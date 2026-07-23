import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { LoginModal } from '../../components/login-modal/login-modal';
import { RegistroModal } from '../../components/registro-modal/registro-modal';

@Component({
  selector: 'app-landing-page',
  imports: [LoginModal, RegistroModal],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPage {
  isLoginModalActive = signal<boolean>(false);
  isRegistroModalActive = signal<boolean>(false);
}
