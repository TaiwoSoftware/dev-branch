import { Link, Head } from '@inertiajs/react';
import '../../css/styles.css';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <header>
                <div className="logo">
                    <img src="icon/cube-skeleton-svgrepo-com.svg" alt="logo" title="mobile-box" href="#" />
                </div>
                <nav id="navbar">

                    <ul>

                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#benefits">Benefit</a></li>
                        <li><a href="#contact">Contact</a></li>

                    </ul>
                </nav>
                <Link href={route('register')}>
                    <button id="open" className="open">
                        <p>Open an Account</p>
                    </button>
                </Link>
                <Link href={route('login')}>
                <button id="logIn" className="loginBtn">
                    <p>Log in</p>
                </button>
                </Link>

            </header>
            <div className="modal-container ">
                <div className="modal hidden" id="modal">
                    <button className="times"  id="close">&times;</button>
                    <h1>Open An Account</h1>
                    <form>
                        <input type="text" name="name" id="name" placeholder="first-name" />

                            <input type="text" name="lname" id="lname" placeholder="last-name" />

                                <input type="email" name="email" id="email" placeholder="email" />

                                    <input type="password" name="password" id="password" placeholder="password" />


                                        <label  className="terms">Terms &amp; Conditions applied</label>

                                        <button type="submit" id="validation">submit</button>
                    </form>
                </div>
            </div>
            <div className="login-container">
                <div className="logIn hidden" id="loginForm">
                    <button className="times"  id="closed">&times;</button>
                    <h1>Log in</h1>
                    <form>
                        <input type="email" name="email" id="LogInemail" placeholder="email" />

                            <input type="password" name="password" id="logInpassword" placeholder="password" />

                                <label for="terms" className="terms">Terms &amp; Conditions applied</label>

                                <button type="submit" id="logInvalidation">submit</button>
                    </form>
                </div>
            </div>

            <div className="overlay hidden" id="overlay">

            </div>
            <main>

                <div className="main-header">
                    <div className="main-header-text">
                        <h1 className="main-headerOne">Mobile Money <span>Box</span></h1>
                        <p>The Online Money Box is for Savings</p>

                        <button className="signInBtn" id="opens">Get Started</button>
                    </div>

                    <div className="main-header-img">
                        <img src="icon/hand-mobile-2x.webp" alt="mobile" title="mobile banking" className="header-img" />
                    </div>
                </div>
                <div className="component">
                    <h2 id="about">About The Box </h2>
                    <p>Say goodbye to sapa days, where you can drop a penny to your box and we always remind you  of your money</p>
                    <p> You can also terminate your savings where you can withdraw your money for emergency reasons</p>


                    <div className="inner-component">
                        <img src="icon/cube-skeleton-svgrepo-com.svg" alt="box" className="box" title="mobile-box" />
                            <p>This box is  a 4 corner box that keep over a million init without any charges you are the owner of your box you can remove and add but once you add a target to it. It will add a padlock to it to show that your box account is locked the only time you can access it is if you terminate your target. <br />
                                <br />
                                    It is technically proven that your box can never be hacked because an AI hacker is assign to every account that is created that has a box and you can also keep your account in privacy without your personal hacker having access to it <br />
                                    <br />
                                        Everybody has different shape to their personal box and your family can share your box with a different verification code and can also receive transfer but before the money enters your box we will send a message of if you know anything about the money
                            </p>
                    </div>
                </div>

                <div className="benefits" id="benefits">

                    <h1>Benefits</h1>
                    <p>This amount would be added to your balance the moment you revisits the site</p>
                    <table>
                        <thead>
                        <tr>
                            <th>Daily</th>
                            <th>Weekly</th>
                            <th>Monthly</th>
                            <th>Yearly</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>#10 </td>
                            <td>#70 </td>
                            <td>#310</td>
                            <td>#4000</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </main>
    <footer>
        <div className="contact" id="contact">
            <h2 className="contact-h2">Contact Us</h2>
            <p>You can always reach out to us through these format and know more about the box
                <br />  and if you have any problem with your box you can always reach out to us via:</p>
            <hr />
                <div className="link">
                    <a href="tel:+2349162855174">
                        <img src="icon/067-phone.svg" alt="telephone" />
                    </a>
                    <a href="mailto:davcodes24@gmail.com">
                        <img src="icon/388-mail.svg" alt="mail" />
                    </a>
                    <a href="#">
                        <img src="icon/407-twitter.svg" alt="twitter" />
                    </a>
                    <a href="#">
                        <img src="icon/facebook-messenger.svg" alt="messenger" />
                    </a>
                    <a href="#">
                        <img src="icon/tiktok.svg" alt="tiktok" />
                    </a>
                    <a href="#">
                        <img src="icon/instagram.svg" alt="messenger" />
                    </a>
                    <a href="#">
                        <img src="icon/telegram.svg" alt="telegram" />
                    </a>
                    <a href="#">
                        <img src="icon/google.svg" alt="google" />
                    </a>
                    <a href="#">
                        <img src="icon/youtube.svg" alt="youtube" />
                    </a>
                    <a href="#">
                        <img src="icon/github.svg" alt="messenger" />
                    </a>
                </div>
        </div>
    </footer>

            <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
        </>
    );
}
