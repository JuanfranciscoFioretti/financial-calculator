import React, { Suspense } from 'react';
import './Calculator.css';
import CalculatorSkeleton from '../CalculatorSkeleton/CalculatorSkeleton';


type FieldValue = string | number;

interface BaseField {
  name: string;
  label: string;
  placeholder?: string;
}

interface NumberField extends BaseField {
  type: 'number';
  min?: number;
  max?: number;
  step?: number;
  value: number;
}

interface TextField extends BaseField {
  type: 'text';
  value: string;
}

interface SelectField extends BaseField {
  type: 'select';
  options: Array<{ value: string; label: string }>;
  value: string;
}

type CalculatorField = NumberField | TextField | SelectField;

interface CalculatorProps {
  title: string;
  fields?: CalculatorField[];
  onCalculate: () => void;
  onFieldChange: (name: string, value: FieldValue) => void;
  results?: React.ReactNode;
  isLoading?: boolean;
}

const LoadingSpinner: React.FC = () => (
  <div 
    className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]" 
    role="status"
  >
    <span className="sr-only">Loading...</span>
  </div>
);


const BaseCalculator: React.FC<CalculatorProps> = ({
  title = "Calculator",
  fields = [],
  onCalculate,
  onFieldChange,
  results,
  isLoading = false,
}) => {
  const handleInputChange = (field: CalculatorField, inputValue: string) => {
    let value: FieldValue;
  
    if (field.type === 'number') {
      // Si el inputValue es "0" y el usuario ingresa otro número, reemplaza el "0"
      if (inputValue === '0') {
        value = '';
      } else if (inputValue.startsWith('0') && inputValue.length > 1) {
        value = Number(inputValue.replace(/^0+/, '')); // Quita ceros iniciales
      } else {
        value = Number(inputValue);
      }
    } else {
      value = inputValue;
    }
  
    onFieldChange(field.name, value);
  };
  

  

  return (

    
    <Suspense fallback={<CalculatorSkeleton />}>
      <div className="calculator-container">
        <div className="calculator-header">
          <h2 className="calculator-title">{title}</h2>
        </div>
        
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            onCalculate();
          }}
          className="calculator-content"
        >
          {fields.map((field) => (
            <div key={field.name} className="calculator-field">
              <label htmlFor={field.name} className="input-label text-sm font-medium text-gray-700">
                {field.label}
              </label>
              {field.type === 'select' ? (
                <select
                  id={field.name}
                  name={field.name}
                  value={field.value}
                  onChange={(e) => handleInputChange(field, e.target.value)}
                  className="w-full"
                >
                  {field.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={field.value === 0 ? '' : field.value}
                  placeholder={field.placeholder}
                  min={field.type === 'number' ? field.min : undefined}
                  max={field.type === 'number' ? field.max : undefined}
                  step={field.type === 'number' ? field.step : undefined}
                  onChange={(e) => handleInputChange(field, e.target.value)}
                  className="w-full"
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={isLoading}
            className="calculator-button"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <LoadingSpinner />
                <span className="ml-2">Calculating...</span>
              </span>
            ) : (
              'Calculate'
            )}
          </button>
        </form>

        {results && (
          <div className="calculator-results">
            {results}
          </div>
        )}
      </div>
    </Suspense>
  );
  

//   return (
//     <Suspense fallback={<CalculatorSkeleton />}>
//       <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full transition-all duration-200 hover:shadow-xl">
//         <h2 className="text-2xl font-bold mb-6 text-gray-800">{title}</h2>
        
//         <form 
//           onSubmit={(e) => {
//             e.preventDefault();
//             onCalculate();
//           }}
//           className="space-y-4"
//         >
//           {fields.map((field) => (
//             <div key={field.name} className="space-y-2">
//               <label 
//                 htmlFor={field.name}
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 {field.label}
//               </label>
              
//               {field.type === 'select' ? (
//                 <select
//                   id={field.name}
//                   name={field.name}
//                   value={field.value}
//                   onChange={(e) => handleInputChange(field, e.target.value)}
//                   className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                 >
//                   {field.options.map((option) => (
//                     <option key={option.value} value={option.value}>
//                       {option.label}
//                     </option>
//                   ))}
//                 </select>
//               ) : (
//                 <input
//                   type={field.type}
//                   id={field.name}
//                   name={field.name}
//                   value={field.value}
//                   placeholder={field.placeholder}
//                   min={field.type === 'number' ? field.min : undefined}
//                   max={field.type === 'number' ? field.max : undefined}
//                   step={field.type === 'number' ? field.step : undefined}
//                   onChange={(e) => handleInputChange(field, e.target.value)}
//                   className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                 />
//               )}
//             </div>
//           ))}
          
//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full mt-6 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {isLoading ? (
//               <span className="flex items-center justify-center">
//                 <LoadingSpinner />
//                 <span className="ml-2">Calculating...</span>
//               </span>
//             ) : (
//               'Calculate'
//             )}
//           </button>
//         </form>
        
//         {results && (
//           <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
//             {results}
//           </div>
//         )}
//       </div>
//     </Suspense>
//   );
};

export default BaseCalculator;
