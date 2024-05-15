
// This line of code is for the toggling the side bar.
document.getElementById('toggleSidebar').addEventListener('click', function() {
    let sidebar = document.querySelector('.side-bar');
    sidebar.classList.toggle('sidebar-open');
  });




//These lines are to the button  which we click.
    let leadsBtn = document.getElementById('leadsBtn');
    let completeOrderBtn = document.getElementById('completeOrderBtn');
    let leadsDiv = document.querySelector('.leads');
    let completeOrderDiv = document.querySelector('.completeOrder');

    leadsBtn.addEventListener('click', () => {
        leadsDiv.style.display = 'block';
        completeOrderDiv.style.display = 'none';
    });

    completeOrderBtn.addEventListener('click', () => {
        leadsDiv.style.display = 'none';
        completeOrderDiv.style.display = 'block';
    });

    // Hide both when we click other button
    let buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button !== leadsBtn && button !== completeOrderBtn) {
                leadsDiv.style.display = 'none';
                completeOrderDiv.style.display = 'none';
            }
        });
    });





    