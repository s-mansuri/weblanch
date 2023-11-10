import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xwkdzylr");
  if (state.succeeded) {
    return (
      <p style={{ opacity: "0.4" }}>
        we have received your query and will get back to you shortly!
      </p>
    );
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Full Name"
            className="form-input"
            id="name"
            type="text"
            name="name"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div>
          <input
            placeholder="Email Address"
            className="form-input"
            id="email"
            type="email"
            name="email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <textarea
            placeholder="Requirements"
            className="form-input"
            id="requirements"
            name="requirements"
          />
          <ValidationError
            prefix="requirements"
            field="requirements"
            errors={state.errors}
          />
        </div>
        <div>
          <textarea
            placeholder="Any additional query"
            className="form-input"
            id="message"
            name="message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button
          className="form-button"
          type="submit"
          disabled={state.submitting}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
