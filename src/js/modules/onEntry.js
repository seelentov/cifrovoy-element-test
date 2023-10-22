const onEntry = (entry) => {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('on-entry--show');
    }
  });
}
let options = { threshold: [0.2] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.on-entry');
for (let elm of elements) {
  observer.observe(elm);
}

export default onEntry