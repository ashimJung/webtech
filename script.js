// Data for skills and experience
const skillsAndExperience = [
  {
      category: "Skills",
      items: [
          { name: "HTML", proficiency: 100 },
          { name: "CSS", proficiency: 100 },
          { name: "JavaScript", proficiency: 80 },
          { name: "Python", proficiency: 60 }
      ]
  },
  {
      category: "Experience",
      items: [
          { title: "Frontend Developer", company: "ABC Company", duration: "Jan 2020 - Present", location: "New York, NY", responsibilities: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
          { title: "Backend Developer", company: "XYZ Inc.", duration: "Jun 2018 - Dec 2019", location: "San Francisco, CA", responsibilities: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." }
      ]
  }
];

// Function to display skills and experience
function displaySkillsAndExperience() {
  const aboutMeSection = document.getElementById("about-me");

  // Clear previous content
  aboutMeSection.innerHTML = "";

  // Loop through skills and experience categories
  skillsAndExperience.forEach(category => {
      const categoryHeading = document.createElement("h2");
      categoryHeading.textContent = category.category;
      aboutMeSection.appendChild(categoryHeading);

      // Create list for category items
      const itemList = document.createElement("ul");

      // Loop through items in the category
      category.items.forEach(item => {
          const listItem = document.createElement("li");

          // Construct text for each item
          let itemText = "";
          if (category.category === "Skills") {
              itemText = `${item.name}: ${item.proficiency}%`;
          } else if (category.category === "Experience") {
              itemText = `${item.title} at ${item.company} (${item.duration}) - ${item.location}. Responsibilities: ${item.responsibilities}`;
          }

          listItem.textContent = itemText;
          itemList.appendChild(listItem);
      });

      aboutMeSection.appendChild(itemList);
  });
}

// Initial display of skills and experience
displaySkillsAndExperience();
// JavaScript to toggle active class on menu click
document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('nav ul').classList.toggle('active');
});



