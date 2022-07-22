import React from "react";
import FooterCard from "./FooterCard";
import footerData from '../data/footerData'

import {
    Link
} from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="footer-nav">
                    <Link to="/"> Home </Link>
                    <Link to="/projects"> Projects </Link>
                    <Link to="/blogs"> Blogs </Link>
                    <Link to="/contact"> Contact </Link>
            </div>

            {footerData.map(data => <FooterCard key={data.id} data={data} />)}
        </footer>
    )
}

export default Footer