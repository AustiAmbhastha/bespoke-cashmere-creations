import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CurrencyContextType {
  currency: string;
  setCurrency: (currency: string) => void;
  exchangeRates: {[key: string]: number};
  convertPrice: (price: number, fromCurrency?: string) => number;
  formatPrice: (price: number, fromCurrency?: string) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};

interface CurrencyProviderProps {
  children: ReactNode;
}

export const CurrencyProvider: React.FC<CurrencyProviderProps> = ({ children }) => {
  const [currency, setCurrencyState] = useState("USD");
  const [exchangeRates, setExchangeRates] = useState<{[key: string]: number}>({
    USD: 1,
    EUR: 0.85,
    GBP: 0.73,
    CAD: 1.25
  });

  useEffect(() => {
    // Fetch exchange rates with fallback
    const fetchExchangeRates = async () => {
      try {
        // Use a more reliable API with fallback
        const response = await fetch('https://open.er-api.com/v6/latest/USD');
        if (!response.ok) throw new Error('API request failed');
        
        const data = await response.json();
        if (data.rates) {
          setExchangeRates(data.rates);
        } else {
          throw new Error('Invalid API response');
        }
      } catch (error) {
        console.error('Failed to fetch exchange rates:', error);
        // Use static fallback rates - keep existing ones
      }
    };

    fetchExchangeRates();
    // Update rates every 30 minutes
    const interval = setInterval(fetchExchangeRates, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Load saved currency preference
  useEffect(() => {
    const savedCurrency = localStorage.getItem('selectedCurrency');
    if (savedCurrency && ['USD', 'EUR', 'GBP', 'CAD'].includes(savedCurrency)) {
      setCurrencyState(savedCurrency);
    }
  }, []);

  const setCurrency = (newCurrency: string) => {
    setCurrencyState(newCurrency.toUpperCase());
    localStorage.setItem('selectedCurrency', newCurrency.toUpperCase());
  };

  const convertPrice = (price: number, fromCurrency: string = 'USD'): number => {
    if (currency === fromCurrency) return price;
    
    // Convert to USD first if needed
    const usdPrice = fromCurrency === 'USD' ? price : price / exchangeRates[fromCurrency];
    
    // Convert from USD to target currency
    return currency === 'USD' ? usdPrice : usdPrice * exchangeRates[currency];
  };

  const formatPrice = (price: number, fromCurrency: string = 'USD'): string => {
    const convertedPrice = convertPrice(price, fromCurrency);
    
    const symbols: {[key: string]: string} = {
      USD: '$',
      EUR: '€',
      GBP: '£',
      CAD: 'C$'
    };

    const symbol = symbols[currency] || '$';
    return `${symbol}${convertedPrice.toFixed(2)}`;
  };

  const value = {
    currency,
    setCurrency,
    exchangeRates,
    convertPrice,
    formatPrice
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};