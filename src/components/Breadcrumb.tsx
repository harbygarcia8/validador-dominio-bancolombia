import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

type BreadcrumbItem = {
  title: string;
  url: string;
  active?: boolean;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="text-sm text-gray-500 py-4">
      <ol className="flex items-center space-x-1">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <li>
              {item.active ? (
                <span className="text-gray-400">{item.title}</span>
              ) : (
                <Link 
                  to={item.url} 
                  className="text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  {item.title}
                </Link>
              )}
            </li>
            {index < items.length - 1 && (
              <li className="flex items-center">
                <ChevronRight size={14} />
              </li>
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;