import React from 'react'

const Footercard = () => {
  return (
    <>
    <div className="footer gbfooter">
        <div className="row">
             <div className="row mt-3 d-flex justify-content-around heighttt ">
                        <div className="col-12 col-md-2">
                            <h6 className='text-uppercase'>Popular Locations</h6>
                            <p>Kolkata</p>
                            <p>Mumbai</p>
                            <p>Chennai</p>
                            <p>Pune</p>

                        </div>
                        <div className="col-12 col-md-3">
                            <h6 className='text-uppercase'>Trending Locations</h6>
                            <p>Bhubaneshwar</p>
                            <p>Hyderabad</p>
                            <p>Chandigarh</p>
                            <p>Nashik</p>
                        </div>
                        <div className="col-12 col-md-2">
                            <h6 className='text-uppercase'>About Us</h6>
                            <p>Tech@OLX</p>
                            <p>Careers</p>
                        </div>
                        <div className="col-12 col-md-2">
                            <h6 className='text-uppercase'>OLX</h6>
                            <p>Blog</p>
                            <p>Help</p>
                            <p>Sitemap</p>
                            <p>Privacy information</p>
                            <p>Vulnerability Program</p>
                        </div>

                        <div className="col-12 col-md-2">
                            <h6 className='text-uppercase '>Follow Us</h6>
                            <div className="logo ">
                                <a href="https://www.facebook.com/share/15nUyTpVrb/?mibextid=wwXIfr">
                                    <img src="https://apollo.olx.in/v1/files/alias-facebook-icon/image;original=true" alt="Facebook-icon" srcset="https://apollo.olx.in/v1/files/alias-facebook-icon/image;original=true" />
                                </a>
                                <a href="https://www.instagram.com/olx_india?igsh=MWdpNmdiMmJ2aDFncg==">
                                    <img src="https://apollo.olx.in/v1/files/alias-instagram-icon/image;original=true" srcset="https://apollo.olx.in/v1/files/alias-instagram-icon/image;original=true" alt="Instagram-icon" /></a>

                                <a href="https://www.linkedin.com/company/olxindia/posts/?feedView=all">
                                    <img src="https://apollo.olx.in/v1/files/alias-linkedin-icon/image;original=true" alt="LinkedIn-icon" srcset="https://apollo.olx.in/v1/files/alias-linkedin-icon/image;original=true" /></a>

                                <a href="https://www.youtube.com/@olx_india">
                                    <img src="https://apollo.olx.in/v1/files/alias-youtube-icon/image;original=true" alt="Youtube-icon" srcset="https://apollo.olx.in/v1/files/alias-youtube-icon/image;original=true" /></a>

                                <a href="https://whatsapp.com/channel/0029VaCIzHV4tRrmJPFz6H15">
                                    <img src="https://apollo.olx.in/v1/files/alias-whatsapp-icon/image;original=true" alt="Whatsapp-icon" srcset="https://apollo.olx.in/v1/files/alias-whatsapp-icon/image;original=true" /></a>
                            </div>



                            <div className="logo2">
                                <a href="https://play.google.com/store/apps/details?id=com.olx.southasia">
                                    <img src="https://statics.olx.in/external/base/img//playstore_3x.png" alt="Play Store" srcset="https://statics.olx.in/external/base/img//playstore_3x.webp" /></a>

                                <a href="https://itunes.apple.com/in/app/olx-buy-sell-near-you/id913492792?mt=8">
                                    <img src="https://statics.olx.in/external/base/img//appstore_3x.png" srcset="https://statics.olx.in/external/base/img//appstore_3x.webp" alt="Play Store" /></a>
                            </div>
                        </div>
                    </div>
        </div>
    </div>
    </>
  )
}

export default Footercard