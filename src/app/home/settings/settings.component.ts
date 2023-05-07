import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { IProfile } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

export function phoneLengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const clearedVal = control.value.replace(/[^+\d]/g, '');
    return clearedVal.length !== 11 && clearedVal.length > 0 ? {length: {value: control.value}} : null;
  };
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  @Input() set profile(value: IProfile) {
    this._profile = value || {};
    this.cancel(this._profile);
  };

  private _readonly = true;
  get readonly(): boolean {
    return this._readonly;
  }
  set readonly(val: boolean) {
    this._readonly = val;
    Object.values(this.form.controls).forEach(control => {
      val ? control.disable() : control.enable();
    });
  }

  form = this.fb.group({
    // email: this.fb.control<string>('', [Validators.required, Validators.email]),
    // password:  this.fb.control<string>('', [Validators.required]),
    name: this.fb.control<string>({value: '', disabled: true}),
    surname: this.fb.control<string>({value: '', disabled: true}),
    phone: this.fb.control<string>({value: '', disabled: true}, [phoneLengthValidator()]),
  });

  private _profile: IProfile;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  cancel(profile: IProfile = this._profile) {
    if (profile && Object.keys(profile).length) {
      Object.entries(profile).forEach(([key, val]) => {
        this.form.get(key).setValue(val);
      });
    } else {
      this.form.reset();
    }

    this.form.markAsPristine();
  }
  
  save() {
    this.userService.updateUserProfile(this.form.getRawValue()).then(res => this.readonly = true);
  }
}
