
export default function Footer() {

    return (
        <div className="footer container-fluid">
            <div className="row justify-content-between align-items-end">
                <div className="col-md-3">
                    <img src='./logo.png' height='60' width='130' alt='logo' />
                </div>
                <div className="col-md-3">
                    <p>&copy; 2023 All rights reserved</p>
                </div>
                <div className="col-md-3 social-icons align-self-center">
                    <a target='_blank' href="https://www.facebook.com/"><i className="bi bi-facebook"></i></a>
                    <a target='_blank' href="https://www.instagram.com/"><i className="bi bi-instagram"></i></a>
                    <a target='_blank' href="https://twitter.com/"><i className="bi bi-twitter"></i></a>
                </div>
            </div>


        </div>


    );
}