
      const words = ["Web Developer", "Front End Developer", "React JS Developer"];
      const delay = 100; // Delay between each word (in milliseconds)
      const textContainer = document.getElementById("text");
      const cursor = document.createElement("span");
      cursor.id = "cursor";
      textContainer.parentNode.insertBefore(cursor, textContainer.nextSibling);
      let index = 0;
      let wordIndex = 0;
      
      function typeWord() {
          if (index < words[wordIndex].length) {
              textContainer.textContent += words[wordIndex].charAt(index);
              index++;
              setTimeout(typeWord, delay);
          } else {
              setTimeout(eraseWord, delay);
          }
      }
      
      function eraseWord() {
          if (index > 0) {
              textContainer.textContent = words[wordIndex].substring(0, index - 1);
              index--;
              setTimeout(eraseWord, delay);
          } else {
              wordIndex = (wordIndex + 1) % words.length;
              setTimeout(typeWord, delay);
          }
      }
      
      typeWord();

      // ---------------- map script ---------------------
      mapboxgl.accessToken = 'pk.eyJ1IjoibmJuaWsiLCJhIjoiY2xoa2J4MGdhMHE5ZTNwcDF2YnRsZW93NyJ9.T129J2N5nSvfILJhEgP8OQ';
      const map = new mapboxgl.Map({
          container: 'map', // container IDstyle: 
          style: 'mapbox://styles/mapbox/streets-v12', // style URL
          center: [72.9289, 20.9467],  // Navsari,Gujarat, India coordinates
          zoom: 10, // starting zoom
      });
    