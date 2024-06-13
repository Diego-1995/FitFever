import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Self,
  WritableSignal,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { LoginFormHelper } from '../../helpers/login.form-helper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'fit-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LoginFormHelper]
})
export class LoginPage {
  hasError: WritableSignal<boolean> = signal(false);
  isPasswordVisible: WritableSignal<boolean> = signal(false);
  isLoading: WritableSignal<boolean> = signal(false);

  constructor(
    @Self() public formHelper: LoginFormHelper,
    private _authService: AuthService,
    private _router: Router
  ) {}

  async onSubmit(): Promise<void> {
    if (this.formHelper.form.invalid) {
      this.formHelper.form.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);

    // TODO: Api call
  }
}
