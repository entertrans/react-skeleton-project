/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronRight, ChevronDown } from 'lucide-react';

const SidebarItem = ({ item, onClick }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  // Check if current path matches item or any subitem
  const isActive = item.href === location.pathname || 
    (item.submenu && item.items?.some(subItem => subItem.href === location.pathname));
  
  // Auto-open submenu if active
  const shouldBeOpen = isActive || item.submenu && item.items?.some(subItem => 
    location.pathname.startsWith(subItem.href)
  );

  if (item.submenu) {
    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            group flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-lg transition-colors
            ${isActive
              ? 'bg-primary-50 dark:bg-gray-700 text-primary-600 dark:text-white'
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }
          `}
        >
          <div className="flex items-center">
            <item.icon className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors mr-3" />
            {item.name}
          </div>
          {isOpen ? (
            <ChevronDown className="w-4 h-4 transition-transform" />
          ) : (
            <ChevronRight className="w-4 h-4 transition-transform" />
          )}
        </button>
        
        {isOpen && (
          <div className="ml-4 mt-1 space-y-1">
            {item.items.map((subItem) => {
              const Icon = subItem.icon;
              const isSubActive = location.pathname === subItem.href;
              
              return (
                <NavLink
                  key={subItem.name}
                  to={subItem.href}
                  onClick={onClick}
                  className={`
                    flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors
                    ${isSubActive
                      ? 'bg-primary-50 dark:bg-gray-700 text-primary-600 dark:text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }
                  `}
                >
                  <Icon className="w-4 h-4 mr-3" />
                  {subItem.name}
                </NavLink>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // Regular menu item
  const Icon = item.icon;
  return (
    <NavLink
      to={item.href}
      onClick={onClick}
      className={`
        group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors
        ${isActive
          ? 'bg-primary-50 dark:bg-gray-700 text-primary-600 dark:text-white'
          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
        }
      `}
    >
      <Icon className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors mr-3" />
      {item.name}
    </NavLink>
  );
};

export default SidebarItem;