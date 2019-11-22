import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { LoginService } from 'src/app/modules';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  mobileQuery: MediaQueryList;

  get user() {
    return this.loginService.user;
  }

  constructor(
    private loginService: LoginService,
    private router: Router,
    private snackBar: MatSnackBar,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }

  logout(): void {
    this.loginService.logout()
      .then(() => {
        this.loginService.clearUser();
        this.router.navigateByUrl('/login');
      })
      .catch(error => {
        this.snackBar.open(error.message, null, { duration: 5000 });
      });
    // .subscribe({
    //   next: () => {
    //     this.router.navigateByUrl('/login');
    //   },
    //   error: (error) => {
    //     this.snackBar.open(error.message, null, { duration: 5000 });
    //   }
    // });
  }

}
