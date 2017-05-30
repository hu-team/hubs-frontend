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
  presenceList: any;
  presenceId: number;
  presentList: Array<number> = [];
  absenceList: Array<number> = [];

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

        this.getPresenceList();
      });
  }

  getPresenceList() {
    this.presenceService.getPresences(this.id)
      .subscribe(presenceList => {
        this.presenceList = presenceList;

        this.students.forEach(student => {
          if(this.isStudentPresence(student.id)) {
            student.present = true;
          } else {
            student.present = false;
          }

          student.presence_id = this.presenceId;
        });
      });
  }

  isStudentPresence(studentId) {
    let bool = false;

    this.presenceList.forEach(present => {
      if(present.student === studentId) {
        bool = present.present;
        this.presenceId = present.id;
      }
    });

    return bool;
  }

  setCheckbox(present) {
    if(present) {
      return 'checked';
    } else {
      return '';
    }
  }

  updatePresenceList(item, e) {
    var target = e.target.checked;

    if(target) {
      item.present = true;
    } else {
      item.present = false;
    }
  }

  savePresences() {
    this.presenceService.savePresences(this.students);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
