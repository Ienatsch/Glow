import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChildService } from 'src/app/services/child.service';
import { Child } from 'src/app/models/child.model';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
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
  closeResult: string;
  addEditChildForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    birthDate: new Date(),
    height: 0,
    weight: 0
  });

  constructor(private modalService: NgbModal, private childService: ChildService, private accountService: AccountService, private formBuilder: FormBuilder) {
    this.user = this.accountService.userValue;
   }

  openModal(content) {
    this.modalService.open(content, {size: 'lg', centered: true, ariaLabelledBy: 'add-edit-child-modal'}).result.then((result) => {
      if (result == "saved") {
        var child: Child = {
          childId: "",
          userId: this.user.userId,
          childFirstName: this.addEditChildForm.get('firstName').value,
          childBirthDate: this.addEditChildForm.get('birthDate').value,
          childHeight: this.addEditChildForm.get('height').value,
          childHeightType: "in",
          childWeight: this.addEditChildForm.get('weight').value,
          childWeightType: "lb"
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
