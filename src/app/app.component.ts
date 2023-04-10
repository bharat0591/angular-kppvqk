import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { tab1 } from './tab1';
import { tab2 } from './tab2';

export interface TabType {
  label: string;
  fields: FormlyFieldConfig[];
}

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  model = {};
  demo1TabIndex: any = 0;
  // tabs = [ {'First', 'Second', 'Third'];
  tabs = [
    {
      name: 'first',
      fields: tab1,
    },
    {
      name: 'second',
      fields: tab2,
    },
  ];
  fields: any;
  form: any;

  ngOnInit() {
    this.fields = tab1;
    console.log('fields:', this.fields);
    this.InitializeForm(this.fields);
  }

  InitializeForm(fields) {
    this.form = new FormArray(fields.map(() => new FormGroup({})));
    this.form.reset();
  }

  onChaageTabs(event) {
    console.log('event infor:');
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
