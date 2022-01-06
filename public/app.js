let blog = document.querySelector('.blog-container');
let date = document.getElementById('date');
let subject = document.getElementById('subject');
let blogMess = document.getElementById('blog');


fetch('http://localhost:5000/results')
.then(response => response.json())
.then(data => console.log(data))

blog.addEventListener('submit', function (e) {
  e.preventDefault();

  const data = {
    date: date.value,
    subject: subject.value,
    mess: blogMess.value,
  };
  // specifying the method for the fetch api. This is how I set up to send it
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    //  sending data with stringify bc post needs to make data
    // a string
    body: JSON.stringify(data),
  };

 

  // actual fetch function
  fetch('/api', options).then(res => res.text()).then
  (data => { if (data === 'success')
  alert('posted blog');
  date.value = '';
  subject.value = '';
  blogMess.value = '';
})


  
  // header for date

  const dateHeader = document.createElement('h2');
  dateHeader.innerText = data.date;
  document.body.appendChild(dateHeader);

  // header for Subject

  const subjectHeader = document.createElement('h3');
  subjectHeader.innerText = data.subject;
  document.body.appendChild(subjectHeader);

  // paragraph for blog message

  const blogMessPar = document.createElement('p');
  blogMessPar.innerText = data.mess;
  document.body.appendChild(blogMessPar);

  // button w/ delete function

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'delete post';
  document.body.appendChild(deleteButton);

  deleteButton.addEventListener('click', function () {
    dateHeader.remove();
    subjectHeader.remove();
    blogMessPar.remove();
    deleteButton.remove();
  });
});
// console.log(date.value)

