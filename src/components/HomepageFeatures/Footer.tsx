import React from 'react';
import "../../css/custom.css"
import Cube from "@site/static/img/footer-cube.svg"
import ArrowUp from "@site/static/img/ArrowUpRight-pink.svg"
import Link from '@docusaurus/Link';
import CubePlay from "@site/static/img/cube-footer-icon.svg"
import BellIcon from "@site/static/img/Push-Logo-Standard-White.svg";
import Github from "@site/static/img/github.svg";
import Twitter from "@site/static/img/twitter.svg";
import Telegram from "@site/static/img/telegram.svg";
import Discord from "@site/static/img/discord.svg";
import Apple from "@site/static/img/apple.svg";
import Playstore from "@site/static/img/playstore.svg";
import Notification from "@site/static/img/notification-icon-push.svg";

type FooterItems = {
    title: string;
}

const Footer: FooterItems[] = [
    {
        title: 'About',
    },
]

export const FooterComponent = () => {
    return (
        <div className='footer-container'>
            <div className='footer-subcontainer'>
                <div className='Subscribe-container'>
                    <div>

                        <h3 className='footer-subscribe-header'>
                            Never Miss an Update
                        </h3>
                        <p className='footer-subscribe-description'>
                            Sign up and stay up to date with ecosystem announcements, giveaways and more.
                        </p>
                    </div>
                    <div className='' style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
                        <div className='input-section'>
                            <input type='text' placeholder='Your Email' />
                            <button>Sign up</button>
                        </div>
                        <div>
                            Thanks for subscribing!
                        </div>
                    </div>
                </div>
                <div className='footer-more-info-container'>
                    <div className='footer_more_info'>
                        <Cube />
                        <div>
                            <p className='footer_more_info_header'>Join us and build the future of Web3 Communication.</p>
                            <div className='open_pos_link'>
                                <small className='footer-description'>See Open Positions</small>
                                <ArrowUp className='arrowUp-icon' />
                            </div>
                        </div>
                    </div>
                    <div className='footer_more_info'>
                        <CubePlay />
                        <div>
                            <p className='footer_more_info_header'>Join us and build the future of Web3 Communication.</p>
                            <div className='open_pos_link'>
                                <small className='footer-description'>See Open Positions</small>
                                <ArrowUp className='arrowUp-icon' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='link-list-container'>
                    <div className='link-list-sub-container'>
                        <h3>Company</h3>
                        <ul className='company-links'>
                            <li><Link href='/'>About</Link></li>
                            <li><Link href='/'>Careers</Link></li>
                            <li><Link href='/'>Media Kit</Link></li>
                            <li><Link href='/'>Terms</Link></li>
                            <li><Link href='/'>Privacy</Link></li>
                        </ul>
                    </div>
                    <div className='link-list-sub-container'>
                        <h3>Governance</h3>
                        <ul className='company-links'>
                            <li><Link href='/'>Push Governance</Link></li>
                            <li><Link href='/'>Guides</Link></li>
                            <li><Link href='/'>Forum</Link></li>
                            <li><Link href='/'>Grants</Link></li>
                            <li><Link href='/'>Snapshot</Link></li>
                        </ul>
                    </div>
                    <div className='link-list-sub-container'>
                        <h3>Resources</h3>
                        <ul className='company-links'>
                            <li><Link href='/'>Blog</Link></li>
                            <li><Link href='/'>Whitepaper</Link></li>
                            <li><Link href='/'>Github</Link></li>
                            <li><Link href='/'>Discord</Link></li>
                            <li><Link href='/'>Dev Guides</Link></li>
                        </ul>
                    </div>
                    <div className='link-list-sub-container'>
                        <h3>Support</h3>
                        <ul className='company-links'>
                            <li><Link href='/'>Contact</Link></li>
                            <li><Link href='/'>FAQ</Link></li>
                        </ul>
                    </div>
                    <div className='link-list-sub-container'>
                        <h3>Subscribe</h3>
                        <ul className='company-links'>
                            <input className='email-input' type='text' placeholder='Your Email' />
                            <p>Thanks for Subscribing</p>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className='dash_partition'/>
            <div className='footer-icons-contianer'>
                <div className='footer-social-icons'>
                    <BellIcon className='push-logo-footer' />
                    <Github className='footer-icons' />
                    <Twitter className='footer-icons' />
                    <Telegram className='footer-icons' />
                    <Discord className='footer-icons' />
                </div>
                <div className='social-footer-icons-2'>
                    <Apple className='footer-icons' />
                    <Playstore className='footer-icons' />
                    <Notification className='footer-icons' />
                </div>
            </div>
        </div>
    )
}
