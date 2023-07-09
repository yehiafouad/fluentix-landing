import logo from "assets/images/White logo - no background.svg";
import { Link } from "react-router-dom";
const FooterSection = () => {
  return (
    <footer className="p-10 bg-[#3d4047] text-gray-100">
      <div className="py-10">
        <img src={logo} width={156} />
      </div>
      <div className="grid grid-cols-5 gap-4 px-5">
        <div className="">
          <h4 className="uppercase font-[600]">Get in Touch</h4>

          <div className="my-7">
            <p className="mb-8">
              655 Winding Brook Drive Glastonbury, CT 06033 | USA
            </p>
            <p className="leading-6 mb-8">
              1-800-592-2469 <br /> 1-860-289-3507
            </p>
            <p className="leading-6">
              United Kingdom <br /> (+44) 203 695 8181
            </p>
          </div>
        </div>
        <div>
          <h4 className="uppercase font-[600]">MARKETS</h4>
          <div className="my-7">
            <ul className="my-7 [&>li]:my-5">
              <li>
                <Link to={"/"}>School Districts</Link>
              </li>
              <li>
                <Link to={"/"}>Independent Schools</Link>
              </li>
              <li>
                <Link to={"/"}>International Schools</Link>
              </li>
              <li>
                <Link to={"/"}>UK Independent Schools</Link>
              </li>
              <li>
                <Link to={"/"}>Charter Schools</Link>
              </li>
              <li>
                <Link to={"/"}>Higher Ed</Link>
              </li>
              <li>
                <Link to={"/"}>Catholic</Link>
              </li>
              <li>
                <Link to={"/"}>Local Government</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h4 className="uppercase font-[600]">PRODUCTS</h4>
          <div className="my-7">
            <ul className="my-7 [&>li]:my-5">
              <li>
                <Link to={"/"}>Website CMS</Link>
              </li>
              <li>
                <Link to={"/"}>Mobile App</Link>
              </li>
              <li>
                <Link to={"/"}>Mass Notifications</Link>
              </li>
              <li>
                <Link to={"/"}>Email Marketing</Link>
              </li>
              <li>
                <Link to={"/"}>Enrollment Management</Link>
              </li>
              <li>
                <Link to={"/"}>Integrations</Link>
              </li>
              <li>
                <Link to={"/"}>Marketing Services</Link>
              </li>
              <li>
                <Link to={"/"}>New in Fluentix Solutions</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h4 className="uppercase font-[600]">COMPANY</h4>
          <div className="my-7">
            <ul className="my-7 [&>li]:my-5">
              <li>
                <Link to={"/"}>About Us</Link>
              </li>
              <li>
                <Link to={"/"}>Jobs at Fluentix</Link>
              </li>
              <li>
                <Link to={"/"}>Meet the Team</Link>
              </li>
              <li>
                <Link to={"/"}>Meet Our Schools</Link>
              </li>
              <li>
                <Link to={"/"}>Support and Client Success</Link>
              </li>
              <li>
                <Link to={"/"}>Partner Network</Link>
              </li>
              <li>
                <Link to={"/"}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h4 className="uppercase font-[600]">POPULAR LINKS</h4>
          <div className="my-7">
            <ul className="my-7 [&>li]:my-5">
              <li>
                <Link to={"/"}>About Us</Link>
              </li>
              <li>
                <Link to={"/"}>Jobs at Fluentix</Link>
              </li>
              <li>
                <Link to={"/"}>Meet the Team</Link>
              </li>
              <li>
                <Link to={"/"}>Meet Our Schools</Link>
              </li>
              <li>
                <Link to={"/"}>Support and Client Success</Link>
              </li>
              <li>
                <Link to={"/"}>Partner Network</Link>
              </li>
              <li>
                <Link to={"/"}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
