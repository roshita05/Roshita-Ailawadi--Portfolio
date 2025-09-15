document.getElementById('visitorForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = this.name.value.trim();
  const profession = this.profession.value.trim();

  // For now just store in localStorage (or send to backend later)
  localStorage.setItem('visitorName', name);
  localStorage.setItem('visitorProfession', profession);

  alert('Thank you! You can now view my portfolio.');
  window.location.href = 'about.html'; // go to about page
});
