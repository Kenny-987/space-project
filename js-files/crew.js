const func = async () => {
  try {
    const url = await fetch("data.json");
    const data = await url.json();
    const { crew } = data;
    console.log(crew);
    const [one, two, three, four] = crew;

    const { name: nameOne, images: imgOne, role: roleOne, bio: bioOne } = one;
    const { webp: a } = imgOne;
    const { name: nameTwo, images: imgTwo, role: roleTwo, bio: bioTwo } = two;
    const { webp: b } = imgTwo;
    const {
      name: nameThree,
      images: imgThree,
      role: roleThree,
      bio: bioThree,
    } = three;
    const { webp: c } = imgThree;
    const {
      name: nameFour,
      images: imgFour,
      role: roleFour,
      bio: bioFour,
    } = four;
    const { webp: d } = imgFour;

    // declarations////
    const role = document.querySelector(".title");
    const name = document.querySelector(".name");
    const info = document.querySelector(".info");
    const pic = document.querySelector(".pic");

    const activeClass = document.querySelector(".active");
    console.log(activeClass);

    const circles = document.querySelectorAll(".circle");
    circles.forEach((circle) => {
      circle.addEventListener("click", (e) => {
        if (circle.classList.contains("1")) {
          role.textContent = roleOne;
          name.textContent = nameOne;
          info.textContent = bioOne;
          pic.src = a;
        } else if (circle.classList.contains("2")) {
          role.textContent = roleTwo;
          name.textContent = nameTwo;
          info.textContent = bioTwo;
          pic.src = b;
        } else if (circle.classList.contains("3")) {
          role.textContent = roleThree;
          name.textContent = nameThree;
          info.textContent = bioThree;
          pic.src = c;
        } else {
          role.textContent = roleFour;
          name.textContent = nameFour;
          info.textContent = bioFour;
          pic.src = d;
        }
      });
    });
  } catch (error) {}
};
func();
