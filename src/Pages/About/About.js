import passenger from "../../Style/images/passager.png"
import driver from "../../Style/images/conducteur.png"
import book from "../../Style/images/About/Reserver.png"
import search from "../../Style/images/About/Recherche.png"
import Accept from "../../Style/images/About/Accepter.png"
import Propose from "../../Style/images/About/Proposer.png"
function About() {
    return (
        <div className="container-about">
            <div>
                <h2 class="main-title">About the Carpooling Application <i>WASSALNI MAAK</i> </h2>
                <p class="welcome-text">Welcome to the carpooling application dedicated to the Technopole of Sfax, Hay el Ons!
                    Our mission is to facilitate the daily commutes of professionals within this dynamic community
                    by providing an efficient and eco-friendly transportation solution.</p>
                <h2 class="main-title">How it works</h2>
                <p class="info-text">The Technopole Sfax Carpooling App connects individuals with similar commuting routes.
                    Whether you're looking for a driver to share your daily commute or you're a driver willing
                    to share available seats, our user-friendly platform allows you to find carpooling partners in a
                    simple and effective way.</p>
            </div>

            <div>
            <div className="div1">
                <img src={passenger} class="image wp-100 div11" />
                <p class="role-title div12"><b>Are you a Passenger?</b></p>
            </div>
            <p class="info-text">Simple and economical: easily reserve your seat online and go affordably, with confidence.
                Even at the last minute!</p>
            <div className="div1">
                <img src={search} class="image wp-60 hp-1.0 mb-30" className="div11" />
                <p class="info-text" className="div12"><b>Search for your journey</b></p>
            </div>
            <p class="info-text">Enter your departure and destination, along with your travel date, and choose from drivers offering
                suitable rides.</p>

            <div className="div1">
                <img src={book} class="image wp-60 hp-1.0 mb-30" className="div11" />
                <p class="info-text" className="div11"><b>Reserve a Seat</b></p>
            </div>
            <p class="info-text">Reserve your seat. Your driver will be notified of your reservation. Following that, receive confirmation
                of your booking. Then, contact the driver to finalize the last details of the journey through a phone call.</p>
            </div>


            <div>
            <div className="div1">
                <img src={driver} class="image wp-100 div11" />
                <p class="role-title div12"><b>Are you a Driver?</b></p>
            </div>
            <p class="info-text">Economical and friendly: Taking friendly passengers during your car journeys.</p>

            <div className="div1">
                <img src={Propose} class="image wp-60 hp-1.0 mb-30" className="div11" />
                <p class="info-text" className="div12"><b>Post your listing</b></p>
            </div>
            <p class="info-text">Specify the date and time of your journey and the route.</p>

            <div className="div1">
                <img src={Accept} class="image wp-60 hp-1.0 mb-30" className="div11" />
                <p class="info-text" className="div12"><b>Your passengers book</b></p>
            </div>
            <p class="info-text">Your passengers book on Wassalni Maak, and you are automatically notified with each new reservation.
                Then, communicate with your passengers by phone to settle the final details of the journey."</p>
            </div>
        </div>

    );
}
export default About;
