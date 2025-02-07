const games = [
    {
      title: "SAMP",
      description: "GENUINE ROLE PLAY - გარემო სადაც შეგიძლია თამაში რეალობად აქციო აისურვო შენი ყველა რეალური ოცნება თუ სურვილი რომელიც გაქვს, აქ შეგიძლია შეიძნო სახლი, შეიძინო მანქანები რომლებიც აღჭურვილია უმაღლესი ტექსტურებით, რაც რეალობასთან კავშირს უფრო ძლიერს ხდის.",
      image: "samp.png", 
      link: "samp.html",
    },
    {
      title: "Counter Strike 2",
      description: "გინდა ყველაზე სტაბილურ და კონკურენტულ სერვერზე თამაში? Genuine გთავაზობთ საუკეთესო CS2 გამოცდილებას. დაბალი პინგი და მაქსიმალური სტაბილურობამოწინავე ანტიჩიტი – სამართლიანი თამაში გარანტირებულია. აქტიური ადმინები – წესრიგი და კომფორტული გეიმპლეი.",
      image: "cs2.png", 
      link: "/cs2",
    },
    {
      title: "Counter Strike 1.6",
      description: "გინდა საუკეთესო გამოცდილება CS1.6-ის სამყაროში? Genuine გთავაზობს უნიკალურ და სტაბილურ სერვერს.დაბალი პინგი და მაქსიმალური სტაბილურობამოწინავე ანტიჩიტი – სამართლიანი თამაში გარანტირებულიააქტიური ადმინები – წესრიგი და კომფორტული გეიმპლეი.",
      image: "cs1.6.png", 
      link: "/cs1.6",
    },
    {
      title: "Minecraft",
      description: "გინდა დაუვიწყარი Minecraft გამოცდილება? Genuine გთავაზობს საუკეთესო სერვერს, სადაც გელოდება მრავალფეროვანი და საინტერესო სამყაროა.სტაბილური სერვერი და დაბალი პინგიაქტიური მოდერები და ადმინები. ",
      image: "mc.png", 
      link: "/minecraft",
    },
    {
      title: "RAGE MP",
      description: "გსურს უმაღლესი ხარისხის GTA 5 RP გამოცდილება? Genuine გთავაზობს ერთ-ერთ საუკეთესო Rage MP სერვერს, სადაც გელოდება დაუვიწყარი სათამაშო გამოცდილება!დაბალი პინგი და სტაბილური სერვერიმოწინავე ანტიჩიტი – სამართლიანი თამაში.",
      image: "ragemp.png", 
      link: "/ragemp",
    },
  ];
  
  const errorPopup = document.getElementById("errorPopup");
  const loadingSpinner = document.getElementById("loadingSpinner");
  const gameList = document.getElementById("gameList");
  
  function showError(message) {
    errorPopup.textContent = message;
    errorPopup.style.display = "block";
    setTimeout(() => errorPopup.style.display = "none", 3000);
  }
  
  function handleClick(game, e) {
    if (game.title === "Counter Strike 2") {
      e.preventDefault();
      showError("Error: This game is currently unavailable.");
    }
  }
  
  setTimeout(() => {
    loadingSpinner.style.display = "none";
    games.forEach(game => {
      const gameCard = document.createElement("a");
      gameCard.href = game.link || "#";
      gameCard.classList.add("card");
      gameCard.addEventListener("click", (e) => handleClick(game, e));
  
      const gameImage = document.createElement("img");
      gameImage.src = game.image;
      gameImage.alt = game.title;
      gameImage.classList.add("image");
  
      const title = document.createElement("h3");
      title.classList.add("title");
      title.textContent = game.title;
  
      const description = document.createElement("p");
      description.classList.add("description");
      description.textContent = game.description;
  
      gameCard.appendChild(gameImage);
      gameCard.appendChild(title);
      gameCard.appendChild(description);
  
      gameList.appendChild(gameCard);
    });
  }, 1);
  