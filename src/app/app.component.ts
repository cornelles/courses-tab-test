import { Component, ElementRef } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public index: number = 0;

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
    this.elRef.nativeElement
      .querySelector("div.mat-tab-header-pagination-after")
      .addEventListener("click", this.navigateAfter.bind(this));
    this.elRef.nativeElement
      .querySelector("div.mat-tab-header-pagination-before")
      .addEventListener("click", this.navigateBefore.bind(this));
  }

  private navigateBefore(event: MouseEvent) {
    if (this.index > 0) {
      this.index--;
    }
  }

  private navigateAfter(event: MouseEvent) {
    if (this.index < 2) {
      this.index++;
    }
  }
}
