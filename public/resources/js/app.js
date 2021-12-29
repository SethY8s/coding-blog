let blog = document.querySelector('.blog-container')

let date = document.getElementById('date');
let subject = document.getElementById('subject');
let blogMess = document.getElementById('blog');


blog.addEventListener('submit', function (e) {
        e.preventDefault();
        const dateValue = date.value;
        const subjectValue = subject.value;
        const blogMessValue = blogMess.value;

        // header for date

        const dateHeader = document.createElement('h2');
        dateHeader.innerText = `${dateValue}`;
        document.body.appendChild(dateHeader);
        localStorage.setItem(dateHeader, dateValue)

        // header for Subject

        const subjectHeader = document.createElement('h3');
        subjectHeader.innerText = subjectValue;
        document.body.appendChild(subjectHeader);
        localStorage.setItem(subjectHeader, subjectValue)

        // paragraph for blog message

        const blogMessPar = document.createElement('p');
        blogMessPar.innerText = blogMessValue;
        document.body.appendChild(blogMessPar);
        localStorage.setItem(blogMessPar,blogMessValue)

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