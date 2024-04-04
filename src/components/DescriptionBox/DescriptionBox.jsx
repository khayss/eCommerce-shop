import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (17)</div>
      </div>

      <div className="descriptionbox-description">
        <p>At JANGO, we want you to have a positive shopping experience. That includes feeling confident about your purchases. Hence, we strive to provide accurate information about our products, including descriptions, materials, and sizing. Your personal information and payment details are safe with us. We use secure technologies to safeguard your data. We treat all customers with respect and offer fair prices on our products.</p>
        <p>
        We understand that sometimes things don't work out as planned. If you're unhappy with your purchase for any reason, you may be eligible for a return or exchange. Generally, unopened and unused items in their original packaging can be returned within 10 days of receipt. Items must be in re-saleable condition with all tags and tamper-resistant seals intact. New and unopened boxed kits qualify for a full refund within 10 days of receiving your return authorization number.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
