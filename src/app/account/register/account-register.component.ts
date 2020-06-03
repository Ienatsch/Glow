import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService } from '../../services/account.service';

@Component({ 
    selector: 'glow-account-register',
    templateUrl: 'account-register.component.html' 
})
export class AccountRegisterComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            userFirstName: ['', Validators.required],
            userLastName: ['', Validators.required],
            userUsername: ['', Validators.required],
            userPassword: ['', [Validators.required, Validators.minLength(6)]],
            userEmail: ['', [Validators.required, Validators.email]],
            userPhoneNumber: ['', [ ]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        this.accountService.register(this.form.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(['../glow-account-login'], { relativeTo: this.route });
                },
                error => {
                    this.loading = false;
                });
    }
}