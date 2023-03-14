import { Component } from '@angular/core';
import gsap from "gsap";
@Component({
  selector: 'app-courosal',
  templateUrl: './courosal.component.html',
  styleUrls: ['./courosal.component.css']
})

 export class CourosalComponent {
  
// const items = document.querySelectorAll(".item");

// const expand = (item, i) => {
//   items.forEach((it, ind) => {
//     if (i === ind) return;
//     it.setAttribute("data-clicked", "false");
//   });

//   const isClicked = item.getAttribute("data-clicked") === "true";
//   const itemWidth = isClicked ? "15vw" : "8vw";
//   const expandedWidth = isClicked ? "42vw" : "15vw";

//   gsap.to(items, {
//     width: itemWidth,
//     duration: 1,
//     ease: "power2",
//     onComplete: () => {
//       item.setAttribute("data-clicked", isClicked ? "false" : "true");
//       gsap.to(item, {
//         width: expandedWidth,
//         duration: 1,
//         ease: "power2"
//       });
//     }
//   });
// };

// items.forEach((item, i) => {
//   item.setAttribute("data-clicked", "false");
//   item.addEventListener("click", () => expand(item, i));
// });



}

