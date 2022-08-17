import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable, timer, pipe, of, from } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'rxjs-angular';
  contador: Observable<number>;
  num = 12;
  resSquare: number;

  public ngOnInit(): void {
    this.setContador();
    this.onMouseMove();
    this.setSquare();
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

  setSquare() {
    const nums = of(1, 2, 3, 4, 5);

    const alSquare = pipe(
      filter((n: number) => n % 2 === 0),
      map((n) => n * n)
    );

    const square = alSquare(nums);
    square.subscribe((x) => (this.resSquare = x));
  }
}
