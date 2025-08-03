import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Order.css';

const categories = [
  'Live Art (Parties/Celebrations)',
  'Live Art (Malls)',
  'Wall Painting',
  'Customized Artwork',
  'Gift Customization',
  'Gallery Exhibition',
  'Carnivals',
  'Creative Event (Party/Celebration)',
  'Creative Event (Mall/Fashion Institute)',
  'Competition Conducting (Institutes)',
  'College Event',
  'Other'
];

const initialForm = {
  name: '',
  contact: '',
  email: '',
  category: '',
  location: '',
  address: '',
  date: '',
  details: '',
};

const Order = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [mode, setMode] = useState('order'); // order or shop

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const SERVICE_ID = 'service_vglh77v';
    const TEMPLATE_ID = mode === 'shop' ? 'template_shopkit' : 'template_o0ssm1h';
    const USER_ID = '1K5nbrebWo95zVakd';

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, form, USER_ID)
      .then(() => setSubmitted(true))
      .catch(() => alert('Failed to send. Please try again.'));
  };

  return (
    <section className="order-section">
      {/* Toggle Switch */}
      <div className="mode-toggle">
        <label className="switch">
          <input
            type="checkbox"
            checked={mode === 'shop'}
            onChange={() => {
              setForm(initialForm);
              setSubmitted(false);
              setMode(mode === 'order' ? 'shop' : 'order');
            }}
          />
          <span className="slider round"></span>
        </label>
        <span className="mode-label">
          {mode === 'shop' ? 'Kit Shop Mode' : 'Event Order Mode'}
        </span>
      </div>

      <div className="order-container">
        <h2 className="order-title">
          {mode === 'shop' ? 'Shop a Course Kit' : 'Place Your Order / Event Request'}
        </h2>
        <p className="order-desc">
          {mode === 'shop'
            ? 'Browse and order learning kits associated with your favorite courses.'
            : 'Fill out the form below to book our art services, creative events, or customized artwork. We’ll get in touch with you soon!'}
        </p>

        {submitted ? (
          <div className="order-success">
            <h3>Thank you!</h3>
            <p>We’ve received your {mode === 'shop' ? 'kit order' : 'event request'}.</p>
          </div>
        ) : (
          <form className="order-form" onSubmit={handleSubmit}>
            <label>
              Your Name<span className="required">*</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </label>

            <label>
              Contact Number<span className="required">*</span>
              <input
                type="tel"
                name="contact"
                value={form.contact}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
                pattern="[0-9]{10,15}"
              />
            </label>

            <label>
              Email Address
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email (optional)"
              />
            </label>

            {mode === 'order' && (
              <>
                <label>
                  Category<span className="required">*</span>
                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </label>

                {(form.category.includes('Event') ||
                  form.category.includes('Competition') ||
                  form.category.includes('Exhibition') ||
                  form.category.includes('Carnival') ||
                  form.category.includes('Live Art')) && (
                  <>
                    <label>
                      Event Location<span className="required">*</span>
                      <input
                        type="text"
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                        required
                        placeholder="Venue/Institute/Mall/College"
                      />
                    </label>
                    <label>
                      Event Date
                      <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </label>
                  </>
                )}

                {(form.category.includes('Customized') ||
                  form.category.includes('Gift') ||
                  form.category.includes('Wall Painting')) && (
                  <label>
                    Delivery Address<span className="required">*</span>
                    <input
                      type="text"
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      required
                      placeholder="Full address for delivery or painting"
                    />
                  </label>
                )}
              </>
            )}

            {mode === 'shop' && (
              <label>
                Shipping Address<span className="required">*</span>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                  placeholder="Your full shipping address"
                />
              </label>
            )}

            <label>
              Additional Details
              <textarea
                name="details"
                value={form.details}
                onChange={handleChange}
                placeholder={
                  mode === 'shop'
                    ? 'Mention preferred course name, quantity, etc.'
                    : 'Describe your requirements, preferred style, size, theme, etc.'
                }
              />
            </label>

            <button type="submit">
              {mode === 'shop' ? 'Place Kit Order' : 'Submit Request'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Order;
