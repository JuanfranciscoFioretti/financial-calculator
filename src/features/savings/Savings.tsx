import React from 'react';
import './Savings.css'; // Rename accordingly
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

const SavingsCalculator: React.FC = () => {
  const [values, setValues] = React.useState({
    initialSavings: 0,
    monthlySavings: 0,
    rate: 0,
    years: '5',
  });

  const [result, setResult] = React.useState<number | null>(null);

  const fields: CalculatorField[] = [
    {
      type: 'number',
      name: 'initialSavings',
      label: 'Initial Savings',
      placeholder: 'Enter initial savings amount',
      min: 0,
      value: values.initialSavings,
    },
    {
      type: 'number',
      name: 'monthlySavings',
      label: 'Monthly Savings',
      placeholder: 'Enter monthly savings',
      min: 0,
      value: values.monthlySavings,
    },
    {
      type: 'number',
      name: 'rate',
      label: 'Annual Interest Rate (%)',
      placeholder: 'Enter rate',
      min: 0,
      max: 100,
      step: 0.1,
      value: values.rate,
    },
    {
      type: 'select',
      name: 'years',
      label: 'Savings Period (Years)',
      options: [
        { value: '5', label: '5 years' },
        { value: '10', label: '10 years' },
        { value: '15', label: '15 years' },
        { value: '20', label: '20 years' },
      ],
      value: values.years,
    },
  ];

  const handleFieldChange = (name: string, value: FieldValue) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateSavings = () => {
    const { initialSavings, monthlySavings, rate, years } = values;
    const time = parseInt(years);
    const monthlyRate = rate / 100 / 12;
    const totalMonths = time * 12;

    // Future Value Calculation: FV = P(1 + r)^n + M[((1 + r)^n - 1) / r]
    const futureValue =
      initialSavings * Math.pow(1 + monthlyRate, totalMonths) +
      (monthlySavings * (Math.pow(1 + monthlyRate, totalMonths) - 1)) / monthlyRate;

    setResult(futureValue);
  };

  return (
    <div className="feature-calculator-container">
      {/* <h2 className="calculator-title">Savings Calculator</h2> */}
      <div className="calculator-content">
        <BaseCalculator
          title="Savings Calculator"
          fields={fields}
          onCalculate={calculateSavings}
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

export default SavingsCalculator;
