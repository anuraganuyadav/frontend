import React, { useState } from 'react';

import styles from "../css/downloadshare.module.css";

const DownloadAndShare = ({ onClose }) => {
    const handleCopyClick = () => {
        const linkInput = document.getElementById('linkInput');
        linkInput.select();
        document.execCommand('copy');
        alert('Link copied to clipboard!');
    };


    return (
        <div className={styles.modal} style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px' }}>
            <div className={styles.modalcontent} style={{ backgroundColor: 'white', padding: '20px' }}>
                <span onClick={onClose} className={styles.shareclosebtn}>&times;</span>
                <h3>Share this link via</h3>
                <div>

                    <a
                        href="https://api.whatsapp.com/send?text=https://international.in/trip/malaysia-tour-package-with-genting-highlands"
                        target="_blank" rel="noopener noreferrer">
                        <img alt="WhatsApp" src="/img/whatsapp.webp" className={styles.socilicons} />
                    </a>
                    <a
                        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwanderon.in%2Ftrip%2Fmalaysia-tour-package-with-genting-highlands"
                        target="_blank" rel="noopener noreferrer">
                        <img alt="Facebook" src="/img/facebook.png" className={styles.socilicons} />
                    </a>
                    <a
                        href="https://twitter.com/intent/post?url=https://international.in/trip/malaysia-tour-package-with-genting-highlands"
                        target="_blank" rel="noopener noreferrer">
                        <img alt="Twitter" src="/img/twitter.png" className={styles.socilicons} />
                    </a>
                    <a
                        href="https://www.linkedin.com/sharing/share-offsite?url=https://international.in/trip/malaysia-tour-package-with-genting-highlands"
                        target="_blank" rel="noopener noreferrer">
                        <img alt="LinkedIn" src="/img/linkd.png" className={styles.socilicons} />
                    </a>
                    <a
                        href="https://mail.google.com/mail/u/0/?fs=1&amp;su=Checkout%20Our%20Trip&amp;body=https://wanderon.in/trip/malaysia-tour-package-with-genting-highlands&amp;tf=cm"
                        target="_blank" rel="noopener noreferrer">
                        <img alt="Gmail" src="/img/gmail.png" className={styles.socilicons} />
                    </a>
                </div>
                <p>Or copy link</p>
                <div style={{
                    display: 'flex', alignItems: 'center', gap: '10px', border: '1px solid #ddd', padding: '10px'
                }}>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                        <path
                            d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"
                        ></path>
                    </svg>
                    <input
                        id="linkInput"
                        type="text"
                        readOnly
                        value="https://international.in/trip/malaysia-tour-package-with-genting-highlands"
                        style={{ flex: 1, border: 'none', padding: '5px' }}
                    />
                    <button onClick={handleCopyClick} className={styles.shareitnbtn}>Copy</button>
                </div>
            </div>
        </div>
    );
};

export default DownloadAndShare;
