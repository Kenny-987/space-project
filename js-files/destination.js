const dataJson = async () => {
  try {
    const api = await fetch("data.json");
    const data = await api.json();
    const { destinations } = data;

    const [first, second, third, fourth] = destinations;

    const {
      name: firstName,
      images: firstImg,
      description: firstDesc,
      distance: firstDistance,
      travel: firstTravel,
    } = first;
    const { webp: img1 } = firstImg;

    const {
      name: secName,
      images: secImg,
      description: secDesc,
      distance: secDistance,
      travel: secTravel,
    } = second;
    const { webp: img2 } = secImg;

    const {
      name: thirdName,
      images: thirdImg,
      description: thirdDesc,
      distance: thirdDistance,
      travel: thirdTravel,
    } = third;
    const { webp: img3 } = thirdImg;

    const {
      name: fourthName,
      images: fourthImg,
      description: fourthDesc,
      distance: fourthDistance,
      travel: fourthTravel,
    } = fourth;
    const { webp: img4 } = fourthImg;

    //dynamic declarations
    const placeName = document.getElementById("place-name");
    const placeInfo = document.getElementById("place-info");
    const distance = document.getElementById("dist");
    const time = document.getElementById("time");
    const image = document.getElementById("img");
    ////////\\\\\\\\\

    //dynamic declarations
    const places = document.querySelectorAll("#place");
    places.forEach((place) => {
      place.addEventListener("click", (e) => {
        switch (place.textContent) {
          case "Moon":
            placeName.textContent = firstName;
            placeInfo.textContent = firstDesc;
            distance.textContent = firstDistance;
            time.textContent = firstTravel;
            image.src = img1;
            break;

          case "Mars":
            placeName.textContent = secName;
            placeInfo.textContent = secDesc;
            distance.textContent = secDistance;
            time.textContent = secTravel;
            image.src = img2;
            break;
          case "Europa":
            placeName.textContent = thirdName;
            placeInfo.textContent = thirdDesc;
            distance.textContent = thirdDistance;
            time.textContent = thirdTravel;
            image.src = img3;
            break;
          case "Titan":
            placeName.textContent = fourthName;
            placeInfo.textContent = fourthDesc;
            distance.textContent = fourthDistance;
            time.textContent = fourthTravel;
            image.src = img4;
            break;
        }
      });
    });
    ////////////////////
    const line = document.querySelector(".active-line");
    const liElement = document.querySelectorAll("#list");
    liElement.forEach((li) => {
      li.addEventListener("click", (e) => {
        if (li.innerText == placeName.textContent) {
          li.appendChild(line);
        }
      });
    });
    /////////////////
  } catch (error) {
    console.log(error);
  }
};
dataJson();
/////////////////////////////////////
