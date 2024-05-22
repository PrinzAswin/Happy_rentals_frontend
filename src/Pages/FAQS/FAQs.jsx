import React, { useState } from 'react';
import '../../styles/Header.css';
import { Link } from 'react-router-dom';
import '../../styles/Faqs.css'; // Styling

export const FAQs = ({profileName, userProfile}) => {

  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  }; 

  const [faqs, setFaqs] = useState([
    {
      question: "How can I rent a car?",
      answer: "You can rent a car by visiting our website and selecting your desired location, dates, and car type. Then, proceed with the booking process.",
    },
    {
      question: "What are the requirements for renting a car?",
      answer: "To rent a car, you typically need a valid driver's license, a credit card for payment, and sometimes additional documentation depending on the rental company's policies.",
    },
    {
      question: "Can I cancel or modify my reservation?",
      answer: "Yes, you can usually cancel or modify your reservation depending on the rental company's cancellation policy. Please refer to your reservation details for specific instructions.",
    }, {
      question: "Do you offer insurance for rented cars?",
      answer: "Yes, we offer insurance options for rented cars. You can choose from a variety of coverage options depending on your needs.",
    },
    {
      question: "What types of payment do you accept?",
      answer: "We accept major credit cards such as Visa, Mastercard, American Express, and Discover. Some locations may also accept cash or debit cards, but please check with the rental location for details.",
    },
    {
      question: "Are there any age restrictions for renting a car?",
      answer: "Yes, there are usually age restrictions for renting a car. Typically, renters must be at least 21 years old, although the minimum age requirement may vary by location and rental company.",
    },
    {
      question: "Do you offer discounts for long-term rentals?",
      answer: "Yes, we offer discounts for long-term rentals. The longer you rent a car, the more you can save. Please check our website or contact us for more information on long-term rental discounts.",
    },
    {
      question: "Can I add an additional driver to my rental?",
      answer: "Yes, you can usually add an additional driver to your rental agreement for a fee. The additional driver must meet the same age and driver's license requirements as the primary renter.",
    },
    {
      question: "What should I do if I have an accident or breakdown?",
      answer: "In case of an accident or breakdown, please contact our 24/7 roadside assistance hotline immediately. Our team will provide you with assistance and instructions on what to do next.",
    },
    {
      question: "Are there any mileage restrictions?",
      answer: "Some rental agreements may include mileage restrictions, particularly for long-term rentals. Please review your rental agreement or contact us for details on mileage restrictions.",
    }
  ]);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
       <section id="header">
        <div id="happylogo">
        </div>
        <ul id="nav-bar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/becomehost">Become a Host</Link></li>
          <li><Link to="/faqs">FAQs</Link></li>
          <li><Link to="/aboutus">About us</Link></li>
        </ul>
        <ul id="nav-bar">
              <li>
                <div className="dropdown">
                  <Link className="profile" onClick={() => setShowDropdown(!showDropdown)}>
                    <img src={userProfile} className="profile-photo" />
                    <h3>{profileName}</h3>
                  </Link>
                  {showDropdown && (
                    <div className="dropdown-content">
                      <Link to="/mycars" className='mycarstyle'>My Cars</Link><hr />
                      <Link onClick={handleLogout}>Logout</Link>
                    </div>
                  )}
                </div>
              </li>
        </ul>
      </section>
      <div className="faq-container">
      <h1 className='h1'>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <h3 className="faq-question" onClick={() => toggleFAQ(index)}>{faq.question}</h3>
            {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
    </>
    
  );
};

