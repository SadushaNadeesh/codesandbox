import { Component, OnInit } from "@angular/core";
import { interval } from "rxjs";

@Component({
  selector: "app-prime-check",
  templateUrl: "./prime-check.component.html",
  styleUrls: ["./prime-check.component.scss"]
})
export class PrimeCheckComponent implements OnInit {
  numbers: number[] = [];
  primeNum: any[] = [];
  data: number = 0;
  isPrime = true;

  ngOnInit(): void {}

  startNumber(status: boolean) {
    const obs = interval(1000);
    const sub = obs.subscribe((d) => {
      this.numbers.push(d);
      this.data = d;
      this.primeNumber(this.data);
    });
    if (!status) {
      //console.log("freezed");
      // Object.freeze(obs);
      sub.unsubscribe();
    }
  }

  primeNumber(n: number) {
    if (n > 1) {
      if (n === 1) {
        return false;
      } else if (n === 2) {
        this.primeNum.push(n);
        return true;
      } else {
        for (var x = 2; x < n; x++) {
          if (n % x === 0) {
            return false;
          }
        }
        this.primeNum.push(n);
        return true;
      }
    }
  }
}
