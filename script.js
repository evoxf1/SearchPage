document.addEventListener('DOMContentLoaded', () => {
    const colors = ['#FF9F55', '#52C2B8', '#FF6161', '#A77DF6', '#69E3FF'];
  
    const bubblesContainer = document.createElement('div');
    bubblesContainer.className = 'bubbles-container';
    document.body.appendChild(bubblesContainer);
  
    const createBubble = () => {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
  
      const size = Math.floor(Math.random() * 80) + 20;
      const x = Math.floor(Math.random() * 100);
      const duration = Math.floor(Math.random() * 10) + 5;
      const color = colors[Math.floor(Math.random() * colors.length)];
  
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${x}%`;
      bubble.style.animationDuration = `${duration}s`;
      bubble.style.backgroundColor = color;
  
      bubblesContainer.appendChild(bubble);
  
      bubble.addEventListener('animationend', () => {
        bubble.remove();
      });
    };
  
    setInterval(createBubble, 1500);
  
    const searchButton = document.getElementById('search-button');
    const locationInput = document.getElementById('location');
    const jobRoleInput = document.getElementById('job-role');
    const experienceInput = document.getElementById('experience');
    const candidatesList = document.getElementById('candidates-list');
  
    searchButton.addEventListener('click', handleSearch);
  
    function handleSearch() {
      const location = locationInput.value.trim();
      const jobRole = jobRoleInput.value.trim();
      const experience = experienceInput.value;
  
      // Perform search logic here
      // Example: You can fetch candidates from a database or API based on the search parameters
  
      // Clear existing candidate list
      candidatesList.innerHTML = '';
  
      // Mock data - candidates
      const candidates = [
        { name: 'John Doe', location: 'New York', jobRole: 'Software Engineer', experience: 3 },
        { name: 'Jane Smith', location: 'London', jobRole: 'Product Manager', experience: 5 },
        { name: 'David Johnson', location: 'San Francisco', jobRole: 'Data Analyst', experience: 2 },
        { name: 'Sarah Williams', location: 'Sydney', jobRole: 'UX Designer', experience: 4 },
      ];
  
      candidates.forEach(candidate => {
        if (
          (location === '' || candidate.location.toLowerCase().includes(location.toLowerCase())) &&
          (jobRole === '' || candidate.jobRole.toLowerCase().includes(jobRole.toLowerCase())) &&
          (experience === '0' || candidate.experience >= experience)
        ) {
          const candidateCard = document.createElement('div');
          candidateCard.className = 'candidate-card';
          candidateCard.innerHTML = `
            <h3>${candidate.name}</h3>
            <p><strong>Location:</strong> ${candidate.location}</p>
            <p><strong>Job Role:</strong> ${candidate.jobRole}</p>
            <p><strong>Experience:</strong> ${candidate.experience} years</p>
          `;
          candidatesList.appendChild(candidateCard);
        }
      });
    }
  });
  