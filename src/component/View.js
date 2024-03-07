import '../customCSS/App.css';

const View = () =>{
    return (
        <div className="view"> 
            <div className="Page-view">
                <span id="page-count"> 0 </span>
                <h5 className="bi bi-emoji-heart-eyes-fill"> PageViews</h5>
            </div>
            <div className="Visit-view">
                <span id="view-count"> 0 </span>
                <h5 className="bi bi-eye-fill"> Visits</h5>
            </div>
        </div>
    ); 
}

export default View