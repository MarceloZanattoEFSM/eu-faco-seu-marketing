
import React from 'react';

interface TestimonialCardProps {
  name: string;
  testimonial: string;
}

const TestimonialCard = ({ name, testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-dark-light rounded-lg p-6 shadow-lg border border-gray-800">
      <div className="mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="inline-block w-5 h-5 text-secondary"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        ))}
      </div>
      <p className="italic text-gray-300 mb-4">"{testimonial}"</p>
      <p className="font-bold text-white">{name}</p>
    </div>
  );
};

export default TestimonialCard;
