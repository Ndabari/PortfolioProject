(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });

})();

/**
 * const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

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
        });
    }

    //sections active
    /*

    const allSections = document.querySelectorAll('.section'); // Adjust the selector based on your HTML structure

    allSections.forEach((section) => {
        allSections.addEventListener('click', (e) =>{
            //console.log(e.target);
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
                
                //save the id
                const element = document.getElementById(id);
                element.classList.add('active');
            }
        })
    })



    //**************** 
    
    //sections active
    
    allSections.addEventListener('click', (e) =>{
        console.log(e.target);
    })
    
    //const allSections = document.querySelectorAll('.section'); // Adjust the selector based on your HTML structure

    sections.forEach((section) => {
        section.addEventListener('click', (e) =>{
            //console.log(e.target);
            //const id = e.target.dataset.id;
            const id = e.currentTarget.id; // Use currentTarget to get the element where the event listener is attached

            if(id){
                //remove selected from other btns
                /*sectBtns.forEach((btn) =>{
                    btn.classList.remove('active')
                });
                e.target.classList.add('active')

                // Add 'active' class to the clicked button***
                const targetBtn = document.querySelector(`[data-id="${data-id}"]`);
                if (targetBtn) {
                    targetBtn.classList.add('active');
                }
    
                //hide other sections(orginal)
                sections.forEach((section) =>{
                    section.classList.remove('active')
                })/*
                sections.forEach((otherSection) => {
                    otherSection.classList.remove('active');
                });
                
                //save the id
                const element = document.getElementById(id);
                //element.classList.add('active');
                if (element) {
                    element.classList.add('active');
                }
            }
        })
    })

}

PageTransitions();
//if for any reason this code function does not work please revert to the original(33.33)
 */