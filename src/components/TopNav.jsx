import { useState } from "react";
import styled from "styled-components";

const TopNav = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const Nav = styled.nav`
    .navbar-list {
      display: flex;
      gap: 4.8rem;

      li {
        list-style: none;

        .navbar-link {
          &:link,
          &:visited {
            display: inline-block;
            text-decoration: none;
            font-size: 1.8rem;
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.black};
            transition: color 0.3s linear;
          }

          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
        }
      }
    }

    .mobile-navbar-btn {
      display: none;

      .close-outline {
        display: none;
      }
    }

    .mobile-navbar-btn[name="close-outline"] {
      display: none;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 999;
        border: ${({ theme }) => theme.colors.black};

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }

      /* hide the original nav menu  */
      .navbar-list {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        text-align: center;

        transform: translateX(100%);

        visibility: hidden;
        opacity: 0;

        li {
          .navbar-link {
            &:link,
            &:visited {
              font-size: 4.2rem;
            }

            &:hover,
            &:active {
              color: ${({ theme }) => theme.colors.helper};
            }
          }
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 3%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
      }

      .active .navbar-list {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
      }
    }
  `;

    return (
        <section class="header-top" >
            <section class="container">
                <div class="row">
                    <aside class="col-md-10 col-sm-10">
                        <div class="call">
                            <p style={{ color: 'red' }}>
                                <span style={{ color: ''  }}>
                                    Call for Support &amp; Development:</span> <a href="tel:+91 7411716489"> 
                             
                                    +91-7411716489</a>/<a href="tel:+91 7411716489">+91-7411716489</a>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="http://deogharairport.in/pay/" target="_blank" style={{ color: 'red', fontSize: 'x-large' }}>Pay Online</a>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="#enquiry" class="last"> Enquiry </a>
                            </p>
                        </div>
                    </aside>
                    <aside class="col-md-2 col-sm-2">
                        <div class="social">
                            <ul>
                                <li>
                                    <a target="_blank" href="https://www.facebook.com/WebCircle-Technologies-115816012382298/" title="Facebook"> <i class="fa fa-facebook"></i></a>
                                </li>
                                <li><a target="_blank" href="https://plus.google.com/u/1/+WebCircleTechnologies" title="Google+"><i class="fa fa-google-plus"></i></a></li>

                                <li><a target="_blank" href="https://www.instagram.com/WebCircleTechnologies/" title="YouTube"><i class="fa fa-instagram"></i></a></li>
                                <li>
                                    <a target="_blank" href="https://www.youtube.com/channel/UC-PLmcQXwf0FANXMy9lOrDw?disable_polymer=true" title="YouTube"><i class="fa fa-youtube"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>
        </section>


    
    );
};

export default TopNav;
