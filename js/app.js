document.addEventListener('DOMContentLoaded', function(){
    /**
     * Activities titles
     */
    let activitiesTitles = document.querySelectorAll(
        ".activities__title__button"
    );
    activitiesTitles.forEach((title) => {
        //console.log(title);
        title.addEventListener('click', (t) => {
            //console.log(t);
            activitiesTitles.forEach((t) => t.classList.remove('active'));
            title.classList.add('active');

            let activitiesList = document.querySelectorAll('.activities__item');
            activitiesList.forEach((item) => {
                //console.log(item);
                item.style.display = "none";
                if(item.dataset.type === title.dataset.type || title.dataset.type === 'all'){
                    item.style.display = "block";
                }
            });
        });
    });
});