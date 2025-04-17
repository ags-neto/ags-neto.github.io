function toggleTimeline(sectionId) {
  const timeline = document.getElementById(`timeline-${sectionId}`);
  timeline.classList.toggle("collapsed");
}
