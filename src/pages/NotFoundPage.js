import React from 'react';
import { BiError } from 'react-icons/bi';

function NotFoundPage() {
  return (
    <section className="not-found-page">
      <p><BiError /></p>
      <h2>Page Not Found</h2>
    </section>
  );
}

export default NotFoundPage;
