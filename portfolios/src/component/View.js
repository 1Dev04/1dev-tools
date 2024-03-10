import '../customCSS/App.css';


const View = () =>{

    const pageView = document.getElementById('.Page-view .page-count');
    const visitCount = document.getElementById('.Visit-view .view-count');

    if(sessionStorage.getItem('visit') === null){
        updateCounter('type=visit-pageview');
    } else {
        updateCounter('type=pageview');
    }

    sessionStorage.getItem('visit', 'x');


    function updateCounter(type){
        fetch('http://172.20.10.4:3000?' + type)
        .then(res => res.json() )
        .then(data => {
            pageView.textContent = data.pageviews;
            visitCount.textContent = data.visits;
        })
    }



    return (
        <div className="view"> 

            <div className="Page-view">
                <span id="page-count"></span>
                <h5 className="bi bi-emoji-heart-eyes-fill"> PageViews</h5>
            </div>
            <div className="Visit-view">
                <span id="view-count"></span>
                <h5 className="bi bi-eye-fill"> Visits</h5>
            </div>

        </div>
    ); 
}

export default View;