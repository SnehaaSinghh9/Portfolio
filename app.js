const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls'); //sectBtns is the parent container of the icons/btns
const sectBtn = document.querySelectorAll('.control');   //secBtn will select the actual btns/icon
const allSections = document.querySelector('.main-content'); //select the body as a class of main-content

function PageTransitions(){
    //Button Click Active Class; when we click the button - get rid of all the other class that is not active
    for(let i=0; i<sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className=currentBtn[0].className.replace('active-btn','');
            this.className += 'active-btn';
        })
    }
    // Section Active Class
    allSections.addEventListener('click', (e) =>{
        // console.log(e.target);  //prints the selected or clicked content(div)
        const id=e.target.dataset.id;
        if(id){
            //remove selected from the other buttons
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section) =>{
                section.classList.remove('active') //removes active from the previous section and adds to the current clicked section
            })

            const element = document.getElementById(id);
            element.classList.add('active'); //removes active from the previous section and adds to the current clicked section
        }
    })


    //Toggle-Theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',()=>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })
  
}

PageTransitions();

