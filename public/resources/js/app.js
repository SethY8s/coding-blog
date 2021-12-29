let blog = document.querySelector('.blog-container')

let date = document.getElementById('date');
let subject = document.getElementById('subject');
let blogMess = document.getElementById('blog');


blog.addEventListener('submit', function (e) {
        e.preventDefault();

        const dateValue = date.value;
        const subjectValue = subject.value;
        const blogMessValue = blogMess.value;

         const data = {
             date: date.value,
             subject: subject.value,
             mess: blogMess.value
         }

         const options = {
             method: 'POST',
             headers: {
                'Content-Type': 'application/json'
             },
             body: JSON.stringify(data)
         };
         fetch('/api', options);
        
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

        const deleteButton =  document.createElement('button')
        deleteButton.innerText = 'delete post';
        document.body.appendChild(deleteButton);

        deleteButton.addEventListener('click', function () {
            dateHeader.remove();
            subjectHeader.remove();
            blogMessPar.remove();
            deleteButton.remove();
        })

        

    })
// console.log(date.value)