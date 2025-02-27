document.addEventListener('DOMContentLoaded' => {
  let request = new XMLHttpRequest();
  request.open('GET', 'https://api.github.com/repos/rails/rails');

  request.addEventListener('load', e => {
    let data = JSON.parse(request.response);

    console.log(request.status);
    console.log(data.open_issues);
  });

  request.send();
});