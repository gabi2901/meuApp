import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  private storageReady = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private storage: Storage,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  async ngOnInit() {
    await this.storage.create();
    this.storageReady = true;

  }

  async presentToast(message: string) {
    const t = await this.toastCtrl.create({
      message,
      duration: 2000,
      position: 'bottom'
    });
    await t.present();
  }


  async onSubmit() {
    if (this.loginForm.invalid) {
      this.presentToast('Preencha os campos corretamente.');
      return;
    }

    const loading = await this.loadingCtrl.create({
      message: 'Entrando...',
      duration: 700
    });
    await loading.present();

    const { email } = this.loginForm.value;


    if (this.storageReady) {
      await this.storage.set('isLogged', true);
      await this.storage.set('userEmail', email);
    }

    await this.router.navigateByUrl('/tabs', { replaceUrl: true });
  }
}
