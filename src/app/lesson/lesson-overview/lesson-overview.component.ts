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
  name: string;
  group: string;
  students: any;
  presenceList: any;
  presenceId: number;
  presentList: Array<number> = [];
  absenceList: Array<number> = [];
  prevPresence: Array<any> = [];
  savedSet: Boolean = false;
  isSaved: Boolean = false;
  savedColor: string = 'primary';
  columns = [
    {
      prop: 'present',
      name: 'Aanwezig',
      maxWidth: 100,
      width: 100
    },
    {
    prop: 'fullName',
    name: 'Naam'
  },{
    prop: 'student_number',
    name: 'Studentennummer'
  },{
    name: 'Aanwezigheid voorgaande lessen'
    }]
  constructor(private ls: LessonService, private router: Router, private route: ActivatedRoute, private presenceService: PresenceService) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getPrevPress();
    });
  }

  getLesson() {
    this.ls.getLessonById(this.id)
      .subscribe(data => {
        this.group = data[0].group;
        this.students = data[0].students;
        this.name = data[0].curname;

        this.getPresenceList();
      });
  }
  gotostudent(id){
    this.router.navigate(['/student/' + id ]);
  }

  getPrevPress() {
    this.ls.presenceOverview(this.id)
      .subscribe(data => {
        this.prevPresence = data;
        this.getLesson();
      });
  }

  guiPress(firstname, lastname) {
    const fullName = firstname + ' ' + lastname;
    const users = this.prevPresence.filter(data => {
      if(data.name === fullName) {
        return data;
      }
    });

    if(users.length > 0 ) {
      return users[0].lessons;
    }
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
          student.fullName = student.first_name + ' ' + student.last_name;
        });
      });
  }

  setPresent(data) {
      data.forEach((v, i) => {
        const body = JSON.parse(v._body);
        const present = body.present;

        this.prevPresence[i].lessons[0].presence = present;
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

    this.presenceService.savePresences(this.students)
      .subscribe(result => {
        if(result.length === this.students.length) {
          this.savedSet = true;
          this.isSaved = true;

          this.setPresent(result);
          this.clearMessage();
        } else {
          this.savedSet = true;
          this.isSaved = false;
          this.savedColor = 'warn';

          this.setPresent(result);
          this.clearMessage();
        }
      });
  }

  clearMessage() {
    setTimeout(() => {
      this.savedSet = false;
      this.isSaved = false;
      this.savedColor = 'primary';

    }, 5000);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
