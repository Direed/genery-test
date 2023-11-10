import React from 'react';
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__left">
                    <div className="footer__col1">
                        <div className="footer__logo-wrapper">
                            <Image
                                src="/images/_src/logo.svg"
                                alt=""
                                className="footer__logo"
                                width={0}
                                height={0}
                                sizes="100vw"
                            />
                        </div>
                        <p className="footer__address">
                            <b>Kyiv, Ukraine</b><br/>
                            601 Hayhurst Lane<br/>
                            Southfield, 48075
                        </p>
                        <p className="footer__copy">Genery - 2023©. All rigths reserved.®</p>
                    </div>
                    <div className="footer__col2">
                        <ul className="footer__nav-list1">
                            <li className="footer__list-element">
                                <a href="" className="footer__list-link">Gallery</a>
                            </li>
                            <li className="footer__list-element">
                                <a href="" className="footer__list-link">Generation</a>
                            </li>
                            <li className="footer__list-element">
                                <a href="" className="footer__list-link">Pricing</a>
                            </li>
                            <li className="footer__list-element">
                                <a href="" className="footer__list-link">Blog</a>
                            </li>
                        </ul>

                        <ul className="footer__nav-list2">
                            <li className="footer__list-element">
                                <a href="" className="footer__list-link">Privacy Policy</a>
                            </li>
                            <li className="footer__list-element">
                                <a href="" className="footer__list-link">Coocie Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__col3">
                        <a href="" className="footer__networks">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24" cy="24" r="24" fill="white" fill-opacity="0.1"/>
                                <path
                                    d="M24.0053 16.621C26.4114 16.621 26.6963 16.6316 27.6426 16.6738C28.522 16.7124 28.9969 16.8601 29.3135 16.9832C29.7321 17.145 30.0346 17.3419 30.3477 17.6548C30.6643 17.9713 30.8577 18.2702 31.0195 18.6886C31.1427 19.0051 31.2904 19.4833 31.3291 20.3589C31.3713 21.3083 31.3819 21.5931 31.3819 23.9947C31.3819 26.3999 31.3713 26.6847 31.3291 27.6306C31.2904 28.5097 31.1427 28.9844 31.0195 29.3008C30.8577 29.7193 30.6607 30.0217 30.3477 30.3346C30.0311 30.6511 29.7321 30.8445 29.3135 31.0063C28.9969 31.1293 28.5185 31.277 27.6426 31.3157C26.6928 31.3579 26.4079 31.3684 24.0053 31.3684C21.5992 31.3684 21.3142 31.3579 20.368 31.3157C19.4886 31.277 19.0137 31.1293 18.6971 31.0063C18.2785 30.8445 17.976 30.6476 17.6629 30.3346C17.3463 30.0182 17.1528 29.7193 16.991 29.3008C16.8679 28.9844 16.7201 28.5062 16.6815 27.6306C16.6392 26.6812 16.6287 26.3964 16.6287 23.9947C16.6287 21.5896 16.6392 21.3047 16.6815 20.3589C16.7201 19.4798 16.8679 19.0051 16.991 18.6886C17.1528 18.2702 17.3498 17.9678 17.6629 17.6548C17.9795 17.3383 18.2785 17.145 18.6971 16.9832C19.0137 16.8601 19.4921 16.7124 20.368 16.6738C21.3142 16.6316 21.5992 16.621 24.0053 16.621ZM24.0053 15C21.5605 15 21.2544 15.0105 20.2941 15.0527C19.3373 15.0949 18.6795 15.2497 18.1096 15.4712C17.5151 15.7033 17.0121 16.0092 16.5126 16.512C16.0096 17.0113 15.7035 17.5142 15.4714 18.1049C15.2498 18.6781 15.095 19.3321 15.0528 20.2885C15.0106 21.252 15 21.5579 15 24.0018C15 26.4456 15.0106 26.7515 15.0528 27.7115C15.095 28.6679 15.2498 29.3255 15.4714 29.8951C15.7035 30.4894 16.0096 30.9922 16.5126 31.4915C17.0121 31.9908 17.5151 32.3003 18.1061 32.5288C18.6795 32.7503 19.3338 32.9051 20.2906 32.9473C21.2509 32.9895 21.557 33 24.0018 33C26.4466 33 26.7526 32.9895 27.7129 32.9473C28.6697 32.9051 29.3275 32.7503 29.8974 32.5288C30.4884 32.3003 30.9914 31.9908 31.4909 31.4915C31.9904 30.9922 32.3 30.4894 32.5286 29.8986C32.7502 29.3255 32.905 28.6714 32.9472 27.715C32.9894 26.755 33 26.4491 33 24.0053C33 21.5614 32.9894 21.2555 32.9472 20.2956C32.905 19.3391 32.7502 18.6816 32.5286 18.1119C32.307 17.5142 32.001 17.0113 31.4979 16.512C30.9984 16.0127 30.4954 15.7033 29.9044 15.4747C29.3311 15.2532 28.6768 15.0985 27.72 15.0563C26.7561 15.0105 26.4501 15 24.0053 15Z"
                                    fill="white"/>
                                <path
                                    d="M24.0086 19.375C21.4547 19.375 19.3828 21.4461 19.3828 23.9989C19.3828 26.5518 21.4547 28.6229 24.0086 28.6229C26.5624 28.6229 28.6343 26.5518 28.6343 23.9989C28.6343 21.4461 26.5624 19.375 24.0086 19.375ZM24.0086 26.9984C22.3517 26.9984 21.008 25.6551 21.008 23.9989C21.008 22.3428 22.3517 20.9995 24.0086 20.9995C25.6654 20.9995 27.0092 22.3428 27.0092 23.9989C27.0092 25.6551 25.6654 26.9984 24.0086 26.9984Z"
                                    fill="white"/>
                                <path
                                    d="M29.8942 19.1971C29.8942 19.7951 29.4088 20.277 28.8143 20.277C28.2163 20.277 27.7344 19.7916 27.7344 19.1971C27.7344 18.5991 28.2198 18.1172 28.8143 18.1172C29.4088 18.1172 29.8942 18.6026 29.8942 19.1971Z"
                                    fill="white"/>
                            </svg>

                        </a>
                        <a href="" className="footer__networks">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24" cy="24" r="24" fill="white" fill-opacity="0.1"/>
                                <path
                                    d="M20.2918 32C27.8371 32 31.9652 25.8437 31.9652 20.5066C31.9652 20.3335 31.9613 20.1566 31.9535 19.9835C32.7566 19.4117 33.4496 18.7035 34 17.8921C33.2521 18.2197 32.458 18.4336 31.6449 18.5267C32.5011 18.0214 33.1421 17.2276 33.4492 16.2925C32.6438 16.7625 31.763 17.094 30.8445 17.2728C30.2257 16.6254 29.4075 16.1968 28.5164 16.0532C27.6253 15.9095 26.711 16.0589 25.9148 16.4782C25.1186 16.8975 24.4848 17.5634 24.1115 18.3729C23.7382 19.1824 23.6462 20.0904 23.8496 20.9566C22.2187 20.876 20.6233 20.4589 19.1667 19.7322C17.71 19.0056 16.4247 17.9857 15.3941 16.7386C14.8703 17.6278 14.71 18.68 14.9459 19.6814C15.1817 20.6827 15.7959 21.5581 16.6637 22.1296C16.0122 22.1092 15.375 21.9365 14.8047 21.6258V21.6758C14.8041 22.6089 15.1317 23.5134 15.7319 24.2356C16.3321 24.9578 17.1678 25.453 18.0969 25.6372C17.4934 25.7997 16.86 25.8234 16.2457 25.7064C16.5079 26.5089 17.018 27.2108 17.7048 27.7141C18.3916 28.2174 19.2209 28.497 20.077 28.514C18.6237 29.6379 16.8285 30.2476 14.9805 30.2447C14.6527 30.2442 14.3253 30.2244 14 30.1855C15.8774 31.3713 18.0613 32.0011 20.2918 32Z"
                                    fill="white"/>
                            </svg>

                        </a>
                        <a href="" className="footer__networks">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24" cy="24" r="24" fill="white" fill-opacity="0.1"/>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M18.9065 16.8686C18.9065 17.8873 18.1309 18.7117 16.9179 18.7117C15.7522 18.7117 14.9765 17.8873 15.0005 16.8686C14.9765 15.8004 15.7522 15 16.9411 15C18.1309 15 18.8833 15.8004 18.9065 16.8686ZM15.0981 32.0334V20.1677H18.7857V32.0326H15.0981V32.0334Z"
                                      fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M21.7381 23.9577C21.7381 22.4777 21.6894 21.216 21.6406 20.1725H24.8437L25.014 21.7981H25.0868C25.5721 21.0457 26.7851 19.9062 28.7505 19.9062C31.1764 19.9062 32.9962 21.5078 32.9962 25.0004V32.0382H29.3085V25.4625C29.3085 23.933 28.7752 22.8903 27.4407 22.8903C26.4213 22.8903 25.8152 23.5939 25.5729 24.2728C25.4753 24.5158 25.4273 24.8549 25.4273 25.1955V32.0382H21.7396V23.9577H21.7381Z"
                                      fill="white"/>
                            </svg>

                        </a>
                        <a href="" className="footer__networks">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24" cy="24" r="24" fill="white" fill-opacity="0.1"/>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M29.315 16.9578C28.6917 16.8331 27.8498 16.74 27.3204 16.74C25.8867 16.74 25.7936 17.3633 25.7936 18.3607V20.1361H29.3774L29.065 23.8137H25.7936V35H21.3063V23.8137H19V20.1361H21.3063V17.8613C21.3063 14.7453 22.7708 13 26.4477 13C27.7252 13 28.6602 13.187 29.8753 13.4363L29.315 16.9578Z"
                                      fill="white"/>
                            </svg>

                        </a>
                    </div>
                </div>
                <div className="footer__right">
                    <div className="footer__post">
                        <div className="footer__post-header">
                            <Image
                                src="/images/_src/footer-post1.webp"
                                alt=""
                                className="footer__post-img"
                                width={0}
                                height={0}
                                sizes="100vw"
                            />
                            <div className="footer__post-info">
                                <h3 className="footer__post-title">Bohdan Popravko</h3>
                                <p className="footer__post-subtitle">Co-owner</p>
                            </div>
                        </div>
                        <div className="footer__body">His exquisite sincerity education shameless ten earnestly breakfast
                            add. So we me unknown as improve hastily sitting forming.
                        </div>
                        <a href="" className="footer__post-link">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24" cy="24" r="24" fill="white" fill-opacity="0.1"/>
                                <path
                                    d="M29.5563 25.7267L27.5887 25.7267L27.5887 22.2014L27.7527 20.3158L27.6707 20.2748L25.8261 22.3654L18.9395 29.252L17.5458 27.8583L24.4324 20.9717L26.523 19.1271L26.482 19.0451L24.5964 19.209L21.0711 19.209L21.0711 17.2414L29.5563 17.2414L29.5563 25.7267Z"
                                    fill="white"/>
                            </svg>
                        </a>
                    </div>

                    <div className="footer__post">
                        <div className="footer__post-header">
                            <Image
                                src="/images/_src/footer-post2.webp"
                                alt=""
                                className="footer__post-img"
                                width={0}
                                height={0}
                                sizes="100vw"
                            />
                            <div className="footer__post-info">
                                <h3 className="footer__post-title">Ivan Zmaev</h3>
                                <p className="footer__post-subtitle">Co-owner</p>
                            </div>
                        </div>
                        <div className="footer__body">Especially favourable compliment but thoroughly unreserved saw she
                            themselves. Sufficient impossible him may ten insensible put continuing.
                        </div>
                        <a href="" className="footer__post-link">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24" cy="24" r="24" fill="white" fill-opacity="0.1"/>
                                <path
                                    d="M29.5563 25.7267L27.5887 25.7267L27.5887 22.2014L27.7527 20.3158L27.6707 20.2748L25.8261 22.3654L18.9395 29.252L17.5458 27.8583L24.4324 20.9717L26.523 19.1271L26.482 19.0451L24.5964 19.209L21.0711 19.209L21.0711 17.2414L29.5563 17.2414L29.5563 25.7267Z"
                                    fill="white"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="footer__down-mob">
                    <p className="down-mob__copy">Genery - 2023©. All rigths reserved.®</p>
                    <ul className="footer__nav-list2">
                        <li className="footer__list-element">
                            <a href="" className="footer__list-link">Privacy Policy</a>
                        </li>
                        <li className="footer__list-element">
                            <a href="" className="footer__list-link">Coocie Policy</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;