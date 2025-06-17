// hamburger icon 
function toggleMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("active");
}

// hajj json data 
async function loadHajjPackages() {
  try {
    const response = await fetch('assets/json/hajj_package.json'); 
    const packages = await response.json();

    const container = document.getElementById('hajjCardsContainer');

    packages.slice(0, 4).forEach(pkg => {
      const card = document.createElement('div');
      card.classList.add('card');

      const whatsappNumber = '8801319422583';
      const message = `I'm interested in the hajj package: ${pkg.hajj_packag_name} (${pkg.hajj_packag_day_of_time}) priced at ${pkg.hajj_packag_price}`;

      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

      card.innerHTML = `<div class="card">
				<img src="${pkg.hajj_packag_image}" alt="Hajj Package 1">
				<div class="card-content">
				<h3>${pkg.hajj_packag_name}</h3>
				<p>${pkg.hajj_packag_day_of_time}</p>
				<p>Price: ${pkg.hajj_packag_price}</p>
				<a href="${whatsappLink}" target="_blank" class="btn">Book Now</a>
				</div>
			</div>`;

      container.appendChild(card);
    });
  } catch (error) {
    console.error('Error loading Hajj packages:', error);
  }
}
document.addEventListener('DOMContentLoaded', loadHajjPackages);

// umrah json data 
async function loadUmrahPackages() {
  try {
    const response = await fetch('assets/json/umrah-packages.json'); 
    const packages = await response.json();

    const container = document.getElementById('umrahCardsContainer');

    packages.slice(0, 4).forEach(pkg => {
      const card = document.createElement('div');
      card.classList.add('card');

      const whatsappNumber = '8801319422583';
      const message = `I'm interested in the umrah package: ${pkg.umrah_packag_name} (${pkg.umrah_packag_day_of_time}) priced at ${pkg.umrah_packag_price}`;

      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

      card.innerHTML = `<div class="card">
				<img src="${pkg.umrah_packag_image}" alt="Hajj Package 1">
				<div class="card-content">
				<h3>${pkg.umrah_packag_name}</h3>
				<p>${pkg.umrah_packag_day_of_time}</p>
				<p>Price: ${pkg.umrah_packag_price}</p>
				<a href="${whatsappLink}" target="_blank" class="btn">Book Now</a>
				</div>
			</div>`;

      container.appendChild(card);
    });
  } catch (error) {
    console.error('Error loading Hajj packages:', error);
  }
}
document.addEventListener('DOMContentLoaded', loadUmrahPackages);

// visa json data 
async function loadVisaPackages() {
  try {
    const response = await fetch('assets/json/visa_package.json'); 
    const packages = await response.json();

    const container = document.getElementById('visaCardsContainer');

    packages.slice(0, 4).forEach(pkg => {
      const card = document.createElement('div');
      card.classList.add('card');

      const whatsappNumber = '8801319422583';
      const message = `I'm interested in the visa package: ${pkg.visa_country} (${pkg.visa_processing_time}) priced at ${pkg.visa_price}`;

      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

      card.innerHTML = `
      <div class="card">
				<img src="${pkg.visa_country_image}" alt="Hajj Package 1">
				<div class="card-content">
				<h3>${pkg.visa_country}</h3>
				<p>${pkg.visa_processing_time}</p>
				<p>Price: ${pkg.visa_price}</p>
				<a href="${whatsappLink}" target="_blank" class="btn">Book Now</a>
				</div>
			</div>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error('Error loading Hajj packages:', error);
  }
}
document.addEventListener('DOMContentLoaded', loadVisaPackages);

// tour json data 
async function loadTourPackages() {
  try {
    const response = await fetch('assets/json/tour_package.json'); 
    const packages = await response.json();

    const container = document.getElementById('tourCardsContainer');

    packages.slice(0, 4).forEach(pkg => {
      const card = document.createElement('div');
      card.classList.add('card');

      const whatsappNumber = '8801319422583';
      const message = `I'm interested in the tour package: ${pkg.bd_tour_name} (${pkg.bd_tour_day_of_time}) priced at ${pkg.bd_tour_price}`;

      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

      card.innerHTML = `
      <div class="card">
				<img src="${pkg.bd_tour_image}" alt="Hajj Package 1">
				<div class="card-content">
				<h3>${pkg.bd_tour_name}</h3>
				<p>${pkg.bd_tour_day_of_time}</p>
				<p>Price: ${pkg.bd_tour_price}</p>
				<a href="${whatsappLink}" target="_blank" class="btn">Book Now</a>
				</div>
			</div>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error('Error loading Hajj packages:', error);
  }
}
document.addEventListener('DOMContentLoaded', loadTourPackages);


// news letter 
document.addEventListener('DOMContentLoaded', function () {
  emailjs.init("CSWqLedHXREQNVDaj"); 

  const form = document.getElementById('newsletterForm');
  const emailInput = document.getElementById('newsletterEmail');
  const messageBox = document.getElementById('subscribeMessage');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (!email) {
      messageBox.textContent = 'Please enter a valid email!';
      messageBox.style.color = 'red';
      return;
    }

    const params = {
      user_email: email
    };

    emailjs.send("service_1vdh7uj", "template_6gvksnd", params)
      .then(() => {
        messageBox.textContent = `Thank you! We've subscribed ${email}`;
        messageBox.style.color = 'white';
        form.reset();
      }, (err) => {
        messageBox.textContent = 'Something went wrong. Please try again.';
        messageBox.style.color = 'red';
        console.error(err);
      });
  });
});

// contact form 
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm('service_1vdh7uj', 'template_6gvksnd', this)
    .then(function() {
      const formMessage = document.getElementById("formMessage");
      formMessage.textContent = "Thank you! We have received your message.";
      formMessage.style.color = "black";
      formMessage.style.padding = "10px";
      formMessage.style.borderRadius = "5px";
      document.getElementById("contactForm").reset();
    }, function(error) {
      alert("Oops! Something went wrong. Please try again.");
      console.log('FAILED...', error);
    });
});

