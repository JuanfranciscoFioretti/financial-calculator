import React from 'react';
import './Currency.css';
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

const Conversion: React.FC = () => {
  const [values, setValues] = React.useState({
    amount: 0,
    fromCurrency: 'USD',
    toCurrency: 'EUR',
    result: 0,
  });

  const exchangeRates: { [key: string]: { [key: string]: number } } = {
    USD: { EUR: 0.85, GBP: 0.75, JPY: 110.0, ARS: 350.0, DKK: 6.5 },
    EUR: { USD: 1.18, GBP: 0.88, JPY: 129.0, ARS: 410.0, DKK: 7.45 },
    GBP: { USD: 1.33, EUR: 1.14, JPY: 150.0, ARS: 460.0, DKK: 8.5 },
    JPY: { USD: 0.0091, EUR: 0.0078, GBP: 0.0067, ARS: 3.1, DKK: 0.057 },
    ARS: { USD: 0.0029, EUR: 0.0024, GBP: 0.0022, JPY: 0.32, DKK: 0.015 },
    DKK: { USD: 0.15, EUR: 0.13, GBP: 0.12, JPY: 17.5, ARS: 65.0 },
  };

  const fields: CalculatorField[] = [
    {
      type: 'number',
      name: 'amount',
      label: 'Amount to Convert',
      placeholder: 'Enter amount',
      min: 0,
      value: values.amount,
    },
    {
      type: 'select',
      name: 'fromCurrency',
      label: 'From Currency',
      options: [
        { value: 'USD', label: 'USD' },
        { value: 'EUR', label: 'EUR' },
        { value: 'GBP', label: 'GBP' },
        { value: 'JPY', label: 'JPY' },
        { value: 'ARS', label: 'ARS' },
        { value: 'DKK', label: 'DKK' },
      ],
      value: values.fromCurrency,
    },
    {
      type: 'select',
      name: 'toCurrency',
      label: 'To Currency',
      options: [
        { value: 'USD', label: 'USD' },
        { value: 'EUR', label: 'EUR' },
        { value: 'GBP', label: 'GBP' },
        { value: 'JPY', label: 'JPY' },
        { value: 'ARS', label: 'ARS' },
        { value: 'DKK', label: 'DKK' },
      ],
      value: values.toCurrency,
    },
  ];

  const handleFieldChange = (name: string, value: FieldValue) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCalculate = () => {
    const { amount, fromCurrency, toCurrency } = values;
    if (amount > 0 && fromCurrency !== toCurrency) {
      const rate = exchangeRates[fromCurrency][toCurrency];
      const result = amount * rate;
      setValues((prev) => ({ ...prev, result }));
    } else {
      setValues((prev) => ({ ...prev, result: 0 }));
    }
  };

  return (
    <div className="feature-calculator-container">
      <h2 className="calculator-title">Currency Conversion Calculator</h2>
      <div className="calculator-content">
        <BaseCalculator
          title="Currency Converter"
          fields={fields}
          onCalculate={handleCalculate}
          onFieldChange={handleFieldChange}
          results={
            <div>
              <h3>Conversion Result:</h3>
              <p>
                {values.result
                  ? `${values.amount} ${values.fromCurrency} = ${values.result.toFixed(2)} ${values.toCurrency}`
                  : 'Enter valid values to see the result.'}
              </p>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Conversion;
