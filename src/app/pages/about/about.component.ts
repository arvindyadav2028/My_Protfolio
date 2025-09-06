import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { PersonalData } from '../../shared/models/personal-data';
import { CommonService } from '../../shared/services/common.service';

import { gsap } from 'gsap';

interface WavePath {
  d: string;
  color: string;
}


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit, AfterViewInit {

  personaldata: PersonalData[] = [];
  skillsData: any[] = [];
  
  // get all skill card elements
  @ViewChildren('skillCard') skillCards!: QueryList<ElementRef<HTMLDivElement>>;

  @ViewChildren('lineEl') lineEls!: QueryList<ElementRef<SVGPathElement>>;

 

  constructor(private commonService:CommonService){}

ngOnInit(): void {
    this.getSkill();
}

// Define all wave paths in an array
  wavePaths: WavePath[] = [
    { d: 'M100,50 C50,150 150,250 100,350 C50,450 150,550 100,700', color: 'lime' },
    { d: 'M180,100 C120,200 200,300 150,400 C100,500 200,600 150,750', color: 'limegreen' },
    { d: 'M400,50 C380,200 420,300 390,450 C360,600 420,650 400,750', color: 'cyan' },
    { d: 'M600,200 C650,300 550,400 600,500 C650,600 550,700 600,780', color: 'red' },
    { d: 'M700,80 C750,150 680,250 740,350 C780,450 700,550 760,650', color: 'yellow' },
    { d: 'M650,400 C700,480 600,550 700,640 C750,720 620,780 700,820', color: 'gold' }
  ];



ngAfterViewInit(): void {

    // react when Angular finishes rendering the *ngFor / @for list
    this.skillCards.changes.subscribe(() => {
      this.animateSkills();
    });

// floating parallel animation
    gsap.to(this.skillCards.map(el => el.nativeElement), {
      x: '+=15',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: { each: 0.2, from: 'random' }
    });

 this.lineEls.forEach((el, i) => {
      const length = el.nativeElement.getTotalLength();

      gsap.set(el.nativeElement, { strokeDasharray: length, strokeDashoffset: length });

      gsap.to(el.nativeElement, {
        strokeDashoffset: 0,
        duration: 3,
        delay: i * 0.3, // stagger effect
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
    });
  
  

  



}





  animateSkills() {
    if (this.skillCards && this.skillCards.length > 0) {
      gsap.to(this.skillCards.map(el => el.nativeElement), {
        x: '+=20',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: { each: 0.2, from: 'random' }
      });
    }
  }

  


  getSkill(){
     this.commonService.getData().subscribe(data => {
      this.personaldata = data;
      this.skillsData = data[0].skills;
      console.log(this.skillsData)
     })
   }



}
