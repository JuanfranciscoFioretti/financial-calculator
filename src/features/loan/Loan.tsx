import React from 'react';
import './Loan.css'; // Rename accordingly
import BaseCalculator from '../../components/common/Calculator/Calculator';

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

interface SelectField extends BaseField {
  type: 'select';
  options: Array<{ value: string; label: string }>;
  value: string;
}

type CalculatorField = NumberField | SelectField;

const LoanCalculator: React.FC = () => {
  const [values, setValues] = React.useState({
    loanAmount: 0,
    interestRate: 0,
    loanTerm: '12', // Default in months (e.g., 1 year = 12 months)
  });

  const [result, setResult] = React.useState<number | null>(null);

  const fields: CalculatorField[] = [
    {
      type: 'number',
      name: 'loanAmount',
      label: 'Loan Amount',
      placeholder: 'Enter loan amount',
      min: 0,
      value: values.loanAmount,
    },
    {
      type: 'number',
      name: 'interestRate',
      label: 'Annual Interest Rate (%)',
      placeholder: 'Enter interest rate',
      min: 0,
      max: 100,
      step: 0.1,
      value: values.interestRate,
    },
    {
      type: 'select',
      name: 'loanTerm',
      label: 'Loan Term',
      options: [
        { value: '12', label: '1 year' },
        { value: '24', label: '2 years' },
        { value: '36', label: '3 years' },
        { value: '60', label: '5 years' },
      ],
      value: values.loanTerm,
    },
  ];

  const handleFieldChange = (name: string, value: FieldValue) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateLoanPayment = () => {
    const { loanAmount, interestRate, loanTerm } = values;
    const principal = loanAmount;
    const annualRate = interestRate / 100;
    const monthlyRate = annualRate / 12;
    const numberOfPayments = parseInt(loanTerm, 10);

    if (monthlyRate === 0) {
      // If interest rate is 0, payments are simply the loan divided by months
      setResult(principal / numberOfPayments);
    } else {
      const monthlyPayment =
        (principal * monthlyRate) /
        (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
      setResult(monthlyPayment);
    }
  };

  return (
    <div className="feature-calculator-container">
      {/* <h2 className="calculator-title">Loan Calculator</h2> */}
      <div className="calculator-content">
        <BaseCalculator
          title="Loan Calculator"
          fields={fields}
          onCalculate={calculateLoanPayment}
          onFieldChange={handleFieldChange}
          results={
            result !== null ? (
              <div className="results">
                <p><strong>${result.toFixed(2)}</strong></p>
              </div>
            ) : (
              <div className="results">
                <p>Enter valid values to see the result</p>
              </div>
            )
          }
        />
      </div>
    </div>
  );
};

export default LoanCalculator;
