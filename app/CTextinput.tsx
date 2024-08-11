import React, { useState, useRef, useEffect, ChangeEvent, TextareaHTMLAttributes } from 'react';

interface CTextinputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

const CTextinput: React.FC<CTextinputProps> = ({
  value = '',
  onChange,
  placeholder,
  ...props
}) => {
  const [inputValue, setInputValue] = useState<string>(value);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    const textArea = textAreaRef.current;
    if (textArea) {
      textArea.style.height = 'auto'; // Reset height
      textArea.style.height = `${textArea.scrollHeight}px`; // Set to scrollHeight
    }
  }, [inputValue]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <textarea
      ref={textAreaRef}
      value={inputValue}
      onChange={handleChange}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default CTextinput;
