import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  inCrew: boolean = false;
  crew: object[] = [];
  hoveredCandidate: object;
  
  candidates: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

//   add(memberName: string, isFirst: boolean) {
//     this.crew.push({name: memberName, firstMission: isFirst});
//   }

//   remove(member: object) {
//     let index = this.crew.indexOf(member);
//     this.crew.splice(index, 1);
//   }

//   edit(member: object) {
//     this.memberBeingEdited = member;
//  }

//  save(name: string, member: object) {
//   member['name'] = name;
//   this.memberBeingEdited = null;
//   }
constructor() { }

  ngOnInit() {
  }

  addCrewMember(candidate: object) {
    for (let i = 0; i < this.crew.length; i++) {
      if (this.crew[i]['name'] === candidate['name']) {
        this.crew.splice(i,1);
        return;
      }
    }

    if (this.crew.length >= 3) {
      return;
    }

    this.crew.push(candidate);
  }

isCandidateSelected(candidate: object): boolean {
  for (let i = 0; i < this.crew.length; i++) {
    if (this.crew[i]['name'] === candidate['name']) {
      return true;
    }
  }
  return false;
}

setMemberHovered(candidate: object) {
  this.hoveredCandidate = candidate;
}

}
