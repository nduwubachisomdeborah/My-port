import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="deborahchisom033@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+23480 6003 9760" Image={FiPhone} />
      <SingleInfo text="deborah, Nigeria" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
