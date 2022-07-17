import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, Observable, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'rxjs-angular';
  contador: Observable<number>;
  num = 12;

  public ngOnInit(): void {
    this.setContador();
    this.onMouseMove();
  }

  setContador() {
    this.contador = interval(1000);
    this.contador.subscribe((n) => {
      this.num--;
      if (this.num == 0) {
        this.num = 12;
      }
    });
  }

  onMouseMove() {
    const el = document.getElementById('text');
    const mouseMove = fromEvent(el, 'mousemove');
    mouseMove.subscribe((e: MouseEvent) => {
      console.log(`Coords: (x: ${e.clientX}) (y: ${e.clientY})`);
    });
  }
}
