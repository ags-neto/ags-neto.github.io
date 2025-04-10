function toggleTimeline(sectionId) {
  const timeline = document.getElementById(`timeline-${sectionId}`);
  const arrow = document.getElementById(`toggle-arrow-${sectionId}`);

  timeline.classList.toggle("collapsed");

  if (timeline.classList.contains("collapsed")) {
    arrow.innerHTML = "&#9663;";
  } else {
    arrow.innerHTML = "&#9653;";
  }
}
