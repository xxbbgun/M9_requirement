import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer({ className }) {
    return (
        <div className={className}>
            <div className="site-footer">
                <Container>
                    <Row>
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul className="footer-links">
                                <li><Link to="http://scanfcode.com/category/c-language/">C</Link></li>
                                <li><Link to="http://scanfcode.com/category/front-end-development/">UI Design</Link></li>
                                <li><Link to="http://scanfcode.com/category/back-end-development/">PHP</Link></li>
                                <li><Link to="http://scanfcode.com/category/java-programming-language/">Java</Link></li>
                                <li><Link to="http://scanfcode.com/category/android/">Android</Link></li>
                                <li><Link to="http://scanfcode.com/category/templates/">Templates</Link></li>
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><Link to="http://scanfcode.com/about/">About Us</Link></li>
                                <li><Link to="http://scanfcode.com/contact/">Contact Us</Link></li>
                                <li><Link to="http://scanfcode.com/contribute-at-scanfcode/">Contribute</Link></li>
                                <li><Link to="http://scanfcode.com/privacy-policy/">Privacy Policy</Link></li>
                                <li><Link to="http://scanfcode.com/sitemap/">Sitemap</Link></li>
                            </ul>
                        </div>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by
                                <Link to ="#">Scanfcode</Link>.
                            </p>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                                <li><Link to ="#" className="facebook" ><FacebookIcon/></Link></li>
                                <li><Link to ="#" className="twitter"><TwitterIcon/></Link></li>
                                <li><Link to ="#" className="dribbble"><InstagramIcon/></Link></li>
                                <li><Link to ="#" className="linkedin"><LinkedInIcon/></Link></li>
                            </ul>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default styled(Footer)`
.site-footer
{
  margin-top: 10%;
  background-color:#26272b;
  padding:45px 0 20px;
  font-size:15px;
  line-height:15px;
  color:#737373;
}
.site-footer hr
{
  border-top-color:#bbb;
  opacity:0.5
}
.site-footer hr.small
{
  margin:20px 0
}
.site-footer h6
{
  color:#fff;
  font-size:16px;
  text-transform:uppercase;
  margin-top:5px;
  letter-spacing:2px
}
.site-footer a
{
  color:#737373;
}
.site-footer a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links
{
  padding-left:0;
  list-style:none
  
}
.footer-links li
{
  display:block
}
.footer-links a
{
  color:#737373;
  text-decoration:none;
}
.footer-links a:active,.footer-links a:focus,.footer-links a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links.inline li
{
  display:inline-block
}
.site-footer .social-icons
{
  text-align:right
}
.site-footer .social-icons a
{
  width:40px;
  height:40px;
  line-height:40px;
  margin-left:6px;
  margin-right:0;
  border-radius:100%;
  background-color:#33353d
}
.copyright-text
{
  margin:0
}
@media (max-width:991px)
{
  .site-footer [class^=col-]
  {
    margin-bottom:30px
  }
}
@media (max-width:767px)
{
  .site-footer
  {
    padding-bottom:0
  }
  .site-footer .copyright-text,.site-footer .social-icons
  {
    text-align:center
  }
}
.social-icons
{
  padding-left:0;
  margin-bottom:0;
  list-style:none
}
.social-icons li
{
  display:inline-block;
  margin-bottom:4px
}
.social-icons li.title
{
  margin-right:15px;
  text-transform:uppercase;
  color:#96a2b2;
  font-weight:700;
  font-size:13px
}
.social-icons a{
  background-color:#eceeef;
  color:#818a91;
  font-size:16px;
  display:inline-block;
  line-height:44px;
  width:44px;
  height:44px;
  text-align:center;
  margin-right:8px;
  border-radius:100%;
  -webkit-transition:all .2s linear;
  -o-transition:all .2s linear;
  transition:all .2s linear
}
.social-icons a:active,.social-icons a:focus,.social-icons a:hover
{
  color:#fff;
  background-color:#29aafe
}
.social-icons.size-sm a
{
  line-height:34px;
  height:34px;
  width:34px;
  font-size:14px
}
.social-icons a.facebook:hover
{
  background-color:#3b5998
}
.social-icons a.twitter:hover
{
  background-color:#00aced
}
.social-icons a.linkedin:hover
{
  background-color:#007bb6
}
.social-icons a.dribbble:hover
{
  background-color:#ea4c89
}
@media (max-width:767px)
{
  .social-icons li.title
  {
    display:block;
    margin-right:0;
    font-weight:600
  }
}
`;
