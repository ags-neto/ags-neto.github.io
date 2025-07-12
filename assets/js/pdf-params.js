function getParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    file: params.get('file'),
    title: params.get('title') || 'PDF Viewer'
  };
}

window.onload = () => {
  const { file, title } = getParams();
  if (file) {
    document.title = title;
    const iframe = document.createElement('iframe');
    iframe.src = file;
    document.body.appendChild(iframe);
  } else {
    document.body.innerHTML = '<p style="text-align:center;margin-top:2rem;">No PDF file specified.</p>';
  }
};
