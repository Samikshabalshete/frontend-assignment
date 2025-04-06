import { render, screen } from '@testing-library/react';
import Step1 from '../components/Step1';

test('renders input fields in Step1', () => {
  const formData = { name: '', email: '' };
  const setFormData = jest.fn();
  render(<Step1 formData={formData} setFormData={setFormData} />);
  expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
});
