const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

function PageTransitions() {
    //Btn click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');

            // Check if there's an active button before trying to access its properties
            if (currentBtn.length > 0) {
                currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            }

            this.className += ' active-btn'; // Add a space before 'active-btn' to separate classes
        })
    }

    //sections active
    const allSections = document.querySelectorAll('.section'); // Adjust the selector based on your HTML structure

    allSections.forEach((section) => {
        section.addEventListener('click', (e) =>{
            const id = e.target.dataset.id;
            if(id){
                //remove selected from other btns
                sectBtns.forEach((btn) =>{
                    btn.classList.remove('active')
                })
                e.target.classList.add('active')
    
                //hide other sections
                sections.forEach((section) =>{
                    section.classList.remove('active')
                })
    
                const element = document.getElementById(id);
                element.classList.add('active');
            }
        })
    })

}

PageTransitions();
//if for any reason this code function does not work please revert to the original(33.33)