/*
 * Filename: timeline-toggle.js
 * Path: /home/netoa/Desktop/ags-neto/js
 * Created Date: Sunday April 6th 2025
 * Author: Andre Neto
 * -----
 * Last Modified: Sun Apr 06 2025
 * Modified By: Andre Neto
 */

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