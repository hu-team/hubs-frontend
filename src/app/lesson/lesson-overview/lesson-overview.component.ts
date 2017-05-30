import { Component, OnInit, OnDestroy } from '@angular/core';
import {LessonService} from '../lesson.service';
import { Router, ActivatedRoute } from '@angular/router';
import {PresenceService} from '../../presence/presence.service';

@Component({
  selector: 'lesson-overview',
  templateUrl: './lesson-overview.component.html',
  styleUrls: ['./lesson-overview.component.scss']
})
export class LessonOverviewComponent implements OnInit {
  id: number;
  private sub: any;
  group: string;
  students: any;
  presenceList: Array<number> = [];

  constructor(private ls: LessonService, private router: Router, private route: ActivatedRoute, private presenceService: PresenceService) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getLesson();
    });
  }

  getLesson() {
    this.ls.getLessonById(this.id)
      .subscribe(data => {
        this.group = data[0].group;
        this.students = data[0].students;

        console.log(data);
      });
  }

  updatePresenceList(item, e) {
    var target = e.target.checked;

    if(target) {
      this.addItem(item.id);
    } else {
      this.removeItem(item.id);
    }
  }

  addItem(id) {
    if(this.presenceList.indexOf(id) === -1) {
      console.log("Add");
      this.presenceList.push(id);
    }
  }

  removeItem(id) {
    const index = this.presenceList.indexOf(id);
    console.log(index);
    if(index >= 0 ) {
      this.presenceList.splice(index, 1);
    }
  }

  savePresences() {
    if(this.presenceList.length > 0) {
      this.presenceService.savePresences(this.presenceList, this.id);
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
