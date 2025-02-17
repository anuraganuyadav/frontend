import React from 'react';

const DownloadAndShare = () => {
    const handleCopyClick = () => {
        const inputField = document.getElementById('linkInput');
        inputField.select();
        document.execCommand('copy');
        alert('Link copied!');
    };

    return (
        <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', gap: '11px', marginBottom: '51px' }}>
            <div className="sc-c88751e6-0 cSFGJW">
                <div style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.1)', position: 'absolute', left: '0', top: '0' }}></div>
                <div className="sc-24f61579-0 jrdPNw">

                    <p>Share this link via</p>
                    <div className="sc-24f61579-2 ivjzUg">
                        <a
                            className="sc-24f61579-1 ftsjzi"
                            href="https://api.whatsapp.com/send?text=https://wanderon.in/trip/malaysia-tour-package-with-genting-highlands"
                        >
                            <img
                                alt="WhatsApp"
                                src="/assets/svg/whatsapp.svg"
                                width="26"
                                height="26"
                                className="sc-9be0ac2e-3 ipedKE"
                                loading="lazy"
                            />
                        </a>
                        <a
                            className="sc-24f61579-1 ftsjzi"
                            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwanderon.in%2Ftrip%2Fmalaysia-tour-package-with-genting-highlands"
                        >
                            <img
                                alt="Facebook"
                                src="/assets/svg/facebook2.svg"
                                width="26"
                                height="26"
                                className="sc-9be0ac2e-3 ipedKE"
                                loading="lazy"
                            />
                        </a>
                        <a
                            className="sc-24f61579-1 ftsjzi"
                            href="https://twitter.com/intent/post?url=https://wanderon.in/trip/malaysia-tour-package-with-genting-highlands"
                        >
                            <img
                                alt="Twitter"
                                src="/assets/svg/twitter.svg"
                                width="26"
                                height="26"
                                className="sc-9be0ac2e-3 ipedKE"
                                loading="lazy"
                            />
                        </a>
                        <a
                            className="sc-24f61579-1 ftsjzi"
                            href="https://www.linkedin.com/sharing/share-offsite?url=https://wanderon.in/trip/malaysia-tour-package-with-genting-highlands"
                        >
                            <img
                                alt="LinkedIn"
                                src="/assets/svg/linkedin.svg"
                                width="26"
                                height="26"
                                className="sc-9be0ac2e-3 ipedKE"
                                loading="lazy"
                            />
                        </a>
                        <a
                            className="sc-24f61579-1 ftsjzi"
                            href="https://mail.google.com/mail/u/0/?fs=1&amp;su=Checkout%20Our%20Trip&amp;body=https://wanderon.in/trip/malaysia-tour-package-with-genting-highlands&amp;tf=cm"
                        >
                            <img
                                alt="Gmail"
                                src="/assets/svg/gmail.svg"
                                width="26"
                                height="26"
                                className="sc-9be0ac2e-3 ipedKE"
                                loading="lazy"
                            />
                        </a>
                    </div>
                    <p>Or copy link</p>
                    <div className="sc-24f61579-3 fKrEgJ">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                            <path
                                d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"
                            ></path>
                        </svg>
                        <input
                            id="linkInput"
                            type="text"
                            readOnly
                            value="Temple"
                        />
                        <button onClick={handleCopyClick}>copy</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadAndShare;
