import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Contact = () => {
  return (
    <div data-aos="fade-up" className="py-[4rem] px-[4rem] sm:px-[8rem]">
      <div className="text-sm text-gray-500 mb-2 ">
        <Link to="/" className="hover:underline text-blue-600">Home</Link>
        <span className="mx-1">{'>'}</span> FAQs
      </div>

      <div className="bg-gray-50 rounded-lg p-[1rem] sm:p-[3rem] shadow-sm">
        <h2 className="mb-2">
          Tell us about your query
        </h2>
        <p className="mb-4">
          Sweets Bar Patisserie  values its Customers, connect with us and we will reach out
          to you in your celebrations
        </p>



        <div className="space-y-4">
          <div className="flex cursor-pointer items-center bg-white rounded-md px-4 py-3 shadow-sm">
            <FaPhoneAlt className="text-xl text-gray-700 mr-3" />
            <span className="text-sm text-gray-700 font-medium">
              Call us: <span className="font-bold">096855 53090</span>
            </span>
          </div>

          <a
            href="mailto:wecare@Sweets Bar Patisserie .com"
            className="flex items-center bg-white rounded-md px-4 py-3 shadow-sm"
          >
            <FaEnvelope className="text-xl text-gray-700 mr-3" />
            <span className="text-sm text-gray-700 font-medium">
              Email: <span className="font-bold">sweetsbar@gmial.com</span>
            </span>
          </a>

              <div className="flex flex-col bg-white rounded-md px-4 py-3 shadow-sm">
                    <div className="flex items-start mb-3">
                      <FaMapMarkerAlt className="text-xl text-gray-700 mt-1 mr-3" />
                      <div className="text-sm text-gray-700 font-medium">
                        Address:{" "}
                        <span className="font-bold">
                          {" "}Shop NO.- 5 and 6, Plot no.130, Birla Mandir Rd, Near Malviya Complex, Roshanpura, Malviya Nagar, Bhopal, Madhya Pradesh 462003
                        </span>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d113957.45081229809!2d77.32007940193112!3d23.23611941915444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x397c432d91659fd5%3A0x77f4da271b7515db!2sShop%20NO.-%205%20and%206%2C%20Plot%20no.130%2C%20Birla%20Mandir%20Rd%2C%20Near%20Malviya%20Complex%2C%20Roshanpura%2C%20Malviya%20Nagar%2C%20Bhopal%2C%20Madhya%20Pradesh%20462003!3m2!1d23.2361409!2d77.402481!5e1!3m2!1sen!2sin!4v1751616414232!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
              className="rounded-md"
            ></iframe>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="bg-white rounded-md p-4 text-center shadow-sm">
            <p className="">Call & Email Support</p>
            <p className="text-lg font-semibold">09.00 AM – 10.00 PM</p>
          </div>
          <div className="bg-white rounded-md p-4 text-center shadow-sm">
            <p className="">WhatsApp Support</p>
            <p className="text-lg font-semibold">9:00 AM – 10:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
