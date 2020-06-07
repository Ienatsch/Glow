import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChildService } from 'src/app/services/child.service';
import { Child } from 'src/app/models/child.model';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'glow-add-edit-child-modal',
  templateUrl: './add-edit-child-modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./add-edit-child-modal.component.scss']
})
export class AddEditChildModalComponent {
  user: User;
  title: string;
  closeResult: string;
  addEditChildForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    birthDate: new Date(),
    height: 0,
    weight: 0,
    gender: ["", Validators.required]
  });

  constructor(private modalService: NgbModal, private childService: ChildService, private accountService: AccountService, private formBuilder: FormBuilder) {
    this.user = this.accountService.userValue;
   }

  openModal(content, title) {
    this.title = title;
    this.modalService.open(content, {size: 'md', centered: true, ariaLabelledBy: 'add-edit-child-modal'}).result.then((result) => {
      if (result == "saved") {
        var child: Child = {
          childId: null,
          userId: this.user.userId,
          childFirstName: this.addEditChildForm.get('firstName').value,
          childBirthDate: this.addEditChildForm.get('birthDate').value,
          childHeight: parseInt(this.addEditChildForm.get('height').value),
          childHeightType: "in",
          childWeight: parseInt(this.addEditChildForm.get('weight').value),
          childWeightType: "lb",
          childGender: this.addEditChildForm.get('gender').value
        }
        this.saveChildModal(child);
      }
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }

  saveChildModal(child: Child) {
    this.childService.addChild(child);
  }

}
