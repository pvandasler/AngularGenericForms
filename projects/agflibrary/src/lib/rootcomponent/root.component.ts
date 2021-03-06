import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AGFLibraryService } from '../agflibrary.service';

@Component({
    selector: 'agf-generator',
    templateUrl: 'root.component.html',
    styleUrls: ['root.component.scss']
})

export class RootComponent implements OnInit {
    private agfFormGroup = new FormGroup({});

    constructor(private service: AGFLibraryService) {
    }

    ngOnInit() {}

}
