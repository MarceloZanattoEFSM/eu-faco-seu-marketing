
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
  return (
    <div className="bg-dark-light rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:translate-y-[-5px]">
      <div className="rounded-full bg-primary/20 p-3 w-14 h-14 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-300 text-sm md:text-base">{description}</p>
    </div>
  );
};

export default ServiceCard;
